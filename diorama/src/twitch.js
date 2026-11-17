// Twitch chat bridge. It reads the chat of one channel over Twitch IRC (a WebSocket) and passes
// the commands to the game. Reading needs no login. Replies in Twitch chat need the token of an
// account that may write there; the token stays in this browser and is never sent to the game
// server. main.js loads this module only when the address names a channel.
//
// The rules of docs/team-decisions.md:
// - A command starts with "!": "!blue right". Other messages are talk and get no reply.
// - Each player gets one command in `cooldown` ms.
// - hint, solve, stop and cam are for the streamers, who use the page.

const SERVER = 'wss://irc-ws.chat.twitch.tv:443';
const STREAMER_ONLY = new Set(['hint', 'solve', 'stop', 'cam']);
// Twitch lets a normal account send 20 messages in 30 seconds (https://dev.twitch.tv/docs/chat/,
// read 15 November 2026). The bridge stays below that, and keeps the last messages for a win.
export const LIMIT = { messages: 15, forWin: 3, period: 30000 };
const GAP = 1500; // Twitch drops a message that follows another of the same account too fast
const NOTICE = 10000; // a player gets at most one refusal or error reply in this time
const JOIN_WAIT = 8000; // Twitch sends no error for an unknown channel, only no answer
const MAX = 80; // characters of one command

// One IRC line as {tags, nick, command, params, text}.
export function parseLine(line) {
  const tags = {};
  let nick = '';
  if (line[0] === '@') {
    const end = line.indexOf(' ');
    for (const tag of line.slice(1, end).split(';')) {
      const eq = tag.indexOf('=');
      if (eq > 0) tags[tag.slice(0, eq)] = tag.slice(eq + 1);
    }
    line = line.slice(end + 1);
  }
  if (line[0] === ':') {
    const end = line.indexOf(' ');
    nick = line.slice(1, end).split('!')[0];
    line = line.slice(end + 1);
  }
  const at = line.indexOf(' :');
  const head = (at < 0 ? line : line.slice(0, at)).split(' ');
  return { tags, nick, command: head[0], params: head.slice(1), text: at < 0 ? '' : line.slice(at + 2) };
}

// play(user, text) applies one command and returns {lines: [{msg, kind}], won, moves}: the lines
// that the game answered. onState(kind, text) reports connecting, connected, closed, error, login
// (Twitch refused the login) and notice. `open`, `now` and `later` exist so a test can run without a network or a clock.
export function createBridge({
  channel,
  login = null,
  token = null,
  play,
  onState,
  cooldown = 3000,
  open = () => new WebSocket(SERVER),
  now = Date.now,
  later = setTimeout,
}) {
  let socket = null,
    joined = false,
    ended = false, // no more connection attempts
    retry = 2000,
    lastText = '',
    lastAt = -Infinity; // the last reply and its time
  const turn = new Map(), // player -> the time of the last command
    told = new Map(), // player -> the time of the last refusal or error reply
    sent = []; // the times of the replies in the last LIMIT.period

  // Sends one reply, or drops it. A reply that `must` go out, the win, waits for the gap instead.
  function say(text, must = false) {
    if (!token || !joined) return false;
    const t = now();
    while (sent.length && t - sent[0] >= LIMIT.period) sent.shift();
    if (sent.length >= LIMIT.messages - (must ? 0 : LIMIT.forWin)) return false;
    if (t - lastAt < GAP) {
      if (must) later(() => say(text, true), GAP - (t - lastAt));
      return false;
    }
    // Twitch also drops a message that repeats the last one of the account within 30 seconds.
    if (text === lastText && t - lastAt < LIMIT.period) return false;
    sent.push(t);
    lastAt = t;
    lastText = text;
    socket.send(`PRIVMSG #${channel} :${text}`);
    return true;
  }
  function tell(key, name, text) {
    const t = now();
    if (t - (told.get(key) ?? -Infinity) < NOTICE) return;
    if (say(`@${name} ${text}`)) told.set(key, t);
  }
  function chat(key, name, text) {
    if (text[0] !== '!') return;
    const body = text.slice(1, 400).trim().toLowerCase().replace(/\s+/g, ' ').slice(0, MAX);
    if (!body) return;
    if (STREAMER_ONLY.has(body.split(' ')[0])) return tell(key, name, 'Only the streamers can do that.');
    const t = now(),
      left = cooldown - (t - (turn.get(key) ?? -Infinity));
    if (left > 0) return tell(key, name, `Wait ${Math.ceil(left / 1000)} s before your next command.`);
    const { lines, won, moves } = play(name, body);
    if (!lines.length) return; // the game is not in play
    turn.set(key, t);
    // An error of the game goes back as it is. Its other answers (the puzzle is cleared, a replay
    // runs) name controls of the page, so a viewer gets a text of their own.
    if (!lines.some((l) => l.kind === 'success')) return tell(key, name, lines[0].kind === 'error' ? lines[0].msg : 'No moves now. Wait for the next puzzle.');
    if (won) say(`${name} drove RED out. Cleared in ${moves} moves.`, true);
  }
  function handle(m) {
    if (m.command === 'PING') return socket.send('PONG :' + m.text);
    if (m.command === 'RECONNECT') return socket.close(); // Twitch asks for a new connection
    if (m.command === 'JOIN' || m.command === 'ROOMSTATE') {
      if (joined) return;
      joined = true;
      retry = 2000;
      return onState('connected');
    }
    if (m.command === 'NOTICE') {
      if (/authentication failed|improperly formatted auth/i.test(m.text)) {
        token = null; // Twitch closes the connection; the next one reads without a login
        return onState('login', 'Twitch refused the login. Replies in Twitch chat are off.');
      }
      return onState('notice', m.text);
    }
    if (m.command === 'PRIVMSG') chat(m.nick, m.tags['display-name'] || m.nick, m.text);
  }
  function connect() {
    if (ended) return;
    joined = false;
    onState('connecting');
    const mine = (socket = open());
    let shut = false;
    mine.onopen = () => {
      mine.send('CAP REQ :twitch.tv/tags twitch.tv/commands');
      if (token) mine.send('PASS oauth:' + token);
      mine.send('NICK ' + (token ? login : 'justinfan' + (10000 + Math.floor(Math.random() * 80000))));
      mine.send('JOIN #' + channel);
      later(() => {
        if (shut || socket !== mine || joined || ended) return;
        ended = true;
        onState('error', `No answer from #${channel}. Check the channel name.`);
        mine.close();
      }, JOIN_WAIT);
    };
    mine.onmessage = (e) => {
      for (const line of String(e.data).split('\r\n')) if (line) handle(parseLine(line));
    };
    mine.onclose = () => {
      shut = true;
      if (socket !== mine || ended) return;
      joined = false;
      onState('closed');
      later(connect, retry);
      retry = Math.min(retry * 2, 30000);
    };
  }
  connect();
  return {
    stop() {
      ended = true;
      socket.close();
    },
  };
}

// ---------- the page ----------
const TOKEN = 'tg-twitch-token',
  RETURN = 'tg-twitch-return',
  SAID = 'tg-twitch-said';

// Twitch sends the browser back after a login: with "#access_token=…&state=…" (main.js takes that
// out of the address and passes it here as `hash`), or with "?error=…&state=…" when the user
// refused. Only an answer to the login that this page started counts: its `state` must match.
// The token goes into the storage of this browser, and the page loads again at the address that
// the login started from.
export function comeBack(hash) {
  const from = JSON.parse(sessionStorage.getItem(RETURN) ?? 'null');
  sessionStorage.removeItem(RETURN);
  const got = new URLSearchParams(hash || location.search);
  if (!from || got.get('state') !== from.state) return;
  const token = got.get('access_token');
  if (token) localStorage.setItem(TOKEN, token);
  else sessionStorage.setItem(SAID, 'The Twitch login was cancelled. Replies in Twitch chat are off.');
  location.replace(location.pathname + from.search);
}

// Asks Twitch whose token this is. Returns the login name, or null with the reason shown.
async function checkToken(token, sys) {
  const res = await fetch('https://id.twitch.tv/oauth2/validate', { headers: { Authorization: 'OAuth ' + token }, signal: AbortSignal.timeout(8000) }).catch(
    () => null,
  );
  if (res?.status === 401) {
    localStorage.removeItem(TOKEN);
    sys('The Twitch login expired. Log in again for replies in Twitch chat.', 'error');
    return null;
  }
  if (!res?.ok) {
    sys('Could not check the Twitch login. Replies in Twitch chat are off.', 'error');
    return null;
  }
  const who = await res.json().catch(() => null);
  if (!who?.scopes?.includes('chat:edit')) {
    sys('The Twitch login may not write in chat. Replies in Twitch chat are off.', 'error');
    return null;
  }
  return who.login;
}

// params: the URLSearchParams of the address. note(text) sets the short state in the panel head.
export async function start({ params, sys, note, play, button, onState: stateCb }) {
  const channel = params.get('channel').trim().toLowerCase().replace(/^#/, '');
  if (!/^[a-z0-9_]{1,25}$/.test(channel)) {
    note('Twitch: off');
    return sys('The channel in the address is not a Twitch channel name.', 'error');
  }
  note('Twitch: connecting');
  const said = sessionStorage.getItem(SAID);
  sessionStorage.removeItem(SAID);
  if (said) sys(said, 'error');
  let token = localStorage.getItem(TOKEN),
    login = token ? await checkToken(token, sys) : null;
  if (!login) token = null;
  // The login button shows when the address names a Twitch application and no login works.
  const client = params.get('client') ?? '',
    known = /^[a-z0-9]{10,40}$/.test(client);
  button.hidden = !known || !!token;
  if (known) {
    button.addEventListener('click', () => {
      const state = crypto.randomUUID();
      sessionStorage.setItem(RETURN, JSON.stringify({ state, search: location.search }));
      location.assign(
        'https://id.twitch.tv/oauth2/authorize?' +
          new URLSearchParams({
            response_type: 'token',
            client_id: client,
            redirect_uri: location.origin + location.pathname,
            scope: 'chat:read chat:edit',
            state,
          }),
      );
    });
  }
  const seconds = params.has('cooldown') ? Number(params.get('cooldown')) : 3;
  createBridge({
    channel,
    login,
    token,
    play,
    cooldown: seconds >= 0 && seconds <= 60 ? seconds * 1000 : 3000,
    onState(kind, text) {
      stateCb?.(kind, text);
      if (kind === 'connecting') note('Twitch: connecting');
      else if (kind === 'connected') {
        note('Twitch: #' + channel);
        sys(`Twitch chat #${channel} is connected${login ? ', with replies as ' + login : ', without replies'}. Viewers type !blue right.`);
      } else if (kind === 'closed') {
        note('Twitch: reconnecting');
        sys('Twitch chat is disconnected. The game tries again.', 'error');
      } else if (kind === 'error') {
        note('Twitch: off');
        sys(text, 'error');
      } else if (kind === 'login') {
        localStorage.removeItem(TOKEN);
        login = null;
        button.hidden = !known;
        sys(text, 'error');
      } else sys('Twitch: ' + text, 'error');
    },
  });
}
