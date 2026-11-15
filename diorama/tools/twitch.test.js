// Tests for the Twitch chat bridge (src/twitch.js). A fake socket stands in for Twitch, so the
// tests need no network.
import { test, expect } from 'bun:test';
import { createBridge, parseLine, LIMIT } from '../src/twitch.js';

// A bridge with a fake socket, a clock that the test moves, and a game that answers from `answer`.
function setup(options = {}) {
  const t = {
    sockets: [],
    states: [],
    plays: [],
    timers: [],
    time: 1000000,
    answer: () => ({ lines: [{ msg: 'blue moved right.', kind: 'success' }], won: false, moves: 1 }),
  };
  t.bridge = createBridge({
    channel: 'room',
    play: (user, text) => (t.plays.push([user, text]), t.answer(user, text)),
    onState: (kind, text) => t.states.push(text ? [kind, text] : [kind]),
    open: () => {
      const s = { sent: [], closed: false, send: (line) => s.sent.push(line), close: () => ((s.closed = true), s.onclose?.()) };
      t.sockets.push(s);
      return s;
    },
    now: () => t.time,
    later: (fn, ms) => t.timers.push({ fn, ms }),
    ...options,
  });
  t.socket = () => t.sockets.at(-1);
  t.get = (data) => t.socket().onmessage({ data });
  t.join = () => {
    t.socket().onopen();
    t.get(':tmi.twitch.tv 001 me :Welcome, GLHF!\r\n@emote-only=0;room-id=1 :tmi.twitch.tv ROOMSTATE #room\r\n');
  };
  t.msg = (nick, text, name = nick) => t.get(`@badges=;display-name=${name};mod=0 :${nick}!${nick}@${nick}.tmi.twitch.tv PRIVMSG #room :${text}\r\n`);
  t.replies = () => t.socket().sent.filter((l) => l.startsWith('PRIVMSG'));
  return t;
}
const invalid = () => ({ lines: [{ msg: 'Invalid command. Try: blue right, or blue right 3', kind: 'error' }], won: false, moves: 0 });

test('an IRC line splits into tags, sender, command and text', () => {
  expect(parseLine('@display-name=Alice;mod=0;color= :alice!alice@alice.tmi.twitch.tv PRIVMSG #room :!blue right : now')).toEqual({
    tags: { 'display-name': 'Alice', mod: '0', color: '' },
    nick: 'alice',
    command: 'PRIVMSG',
    params: ['#room'],
    text: '!blue right : now',
  });
  expect(parseLine('PING :tmi.twitch.tv')).toEqual({ tags: {}, nick: '', command: 'PING', params: [], text: 'tmi.twitch.tv' });
});

test('without a login the bridge joins the channel as an anonymous reader and answers PING', () => {
  const t = setup();
  t.join();
  const sent = t.socket().sent;
  expect(sent[0]).toBe('CAP REQ :twitch.tv/tags twitch.tv/commands');
  expect(sent[1]).toMatch(/^NICK justinfan\d+$/);
  expect(sent[2]).toBe('JOIN #room');
  expect(sent.some((l) => l.startsWith('PASS'))).toBe(false);
  expect(t.states).toEqual([['connecting'], ['connected']]);
  t.get('PING :tmi.twitch.tv\r\n');
  expect(sent.at(-1)).toBe('PONG :tmi.twitch.tv');
});

test('with a login the bridge sends the token before the name', () => {
  const t = setup({ token: 'abc', login: 'gridbot' });
  t.join();
  expect(t.socket().sent.slice(1, 4)).toEqual(['PASS oauth:abc', 'NICK gridbot', 'JOIN #room']);
});

test('only a message with the ! prefix reaches the game, under the display name', () => {
  const t = setup({ token: 'abc', login: 'gridbot' });
  t.join();
  t.msg('alice', 'blue right');
  t.msg('alice', 'red is stuck');
  t.msg('alice', '!');
  expect(t.plays).toEqual([]);
  t.msg('alice', '!  Blue   RIGHT 2 ', 'Alice');
  expect(t.plays).toEqual([['Alice', 'blue right 2']]);
  expect(t.replies()).toEqual([]); // a move that worked gets no reply
});

test('hint, solve, stop and cam from Twitch chat do not reach the game', () => {
  const t = setup({ token: 'abc', login: 'gridbot' });
  t.join();
  for (const [nick, text] of [
    ['a', '!hint'],
    ['b', '!solve'],
    ['c', '!stop'],
    ['d', '!cam top'],
  ])
    t.msg(nick, text);
  expect(t.plays).toEqual([]);
  expect(t.replies()).toEqual(['a', 'b', 'c', 'd'].map((n) => `PRIVMSG #room :@${n} Only the streamers can do that.`));
});

test('each player gets one command in the cooldown, and players do not block each other', () => {
  const t = setup({ token: 'abc', login: 'gridbot', cooldown: 3000 });
  t.join();
  t.msg('alice', '!blue right');
  t.time += 1200;
  t.msg('alice', '!blue left');
  t.msg('bob', '!green up');
  expect(t.plays).toEqual([
    ['alice', 'blue right'],
    ['bob', 'green up'],
  ]);
  expect(t.replies()).toEqual(['PRIVMSG #room :@alice Wait 2 s before your next command.']);
  t.time += 1800;
  t.msg('alice', '!blue left');
  expect(t.plays.at(-1)).toEqual(['alice', 'blue left']);
});

test('a command that the game drops, before Start, costs no turn and gets no reply', () => {
  const t = setup({ token: 'abc', login: 'gridbot' });
  t.join();
  t.answer = () => ({ lines: [], won: false, moves: 0 });
  t.msg('alice', '!blue right');
  t.answer = () => ({ lines: [{ msg: 'blue moved right.', kind: 'success' }], won: false, moves: 1 });
  t.msg('alice', '!blue right');
  expect(t.plays.length).toBe(2);
  expect(t.replies()).toEqual([]);
});

test('a player gets the error of the game as a reply, at most once in ten seconds', () => {
  const t = setup({ token: 'abc', login: 'gridbot', cooldown: 0 });
  t.join();
  t.answer = invalid;
  t.msg('alice', '!bleu right', 'Alice');
  t.msg('alice', '!bleu right', 'Alice');
  expect(t.replies()).toEqual(['PRIVMSG #room :@Alice Invalid command. Try: blue right, or blue right 3']);
  t.time += 10000;
  t.msg('alice', '!bleu right', 'Alice');
  expect(t.replies().length).toBe(2);
});

test('without a login the bridge plays the commands and sends no reply', () => {
  const t = setup();
  t.join();
  t.answer = invalid;
  t.msg('alice', '!bleu right');
  t.msg('bob', '!hint');
  expect(t.plays).toEqual([['alice', 'bleu right']]);
  expect(t.replies()).toEqual([]);
});

test('the replies stay below the Twitch limit, and a win still gets its message', () => {
  const t = setup({ token: 'abc', login: 'gridbot' });
  t.join();
  t.answer = invalid;
  for (let n = 0; n < 40; n++) t.msg('viewer' + n, '!nonsense');
  expect(t.replies().length).toBe(LIMIT.messages - LIMIT.forWin);
  t.answer = () => ({ lines: [{ msg: 'Success! RED escaped through the exit!', kind: 'success' }], won: true, moves: 19 });
  t.msg('zoe', '!red right', 'Zoe');
  expect(t.replies().at(-1)).toBe('PRIVMSG #room :Zoe drove RED out. Cleared in 19 moves.');
  t.time += LIMIT.period;
  t.answer = invalid;
  t.msg('viewer99', '!nonsense');
  expect(t.replies().at(-1)).toBe('PRIVMSG #room :@viewer99 Invalid command. Try: blue right, or blue right 3');
});

test('a channel that does not answer gives a readable error and no new attempt', () => {
  const t = setup();
  t.socket().onopen();
  t.get(':tmi.twitch.tv 001 me :Welcome, GLHF!\r\n');
  t.timers[0].fn(); // the wait for the join ends
  expect(t.states.at(-1)).toEqual(['error', 'No answer from #room. Check the channel name.']);
  expect(t.socket().closed).toBe(true);
  expect(t.sockets.length).toBe(1);
  expect(t.timers.length).toBe(1);
});

test('a lost connection is opened again, and RECONNECT from Twitch does the same', () => {
  const t = setup();
  t.join();
  t.socket().onclose();
  expect(t.states.at(-1)).toEqual(['closed']);
  expect(t.timers.at(-1).ms).toBe(2000);
  t.timers.at(-1).fn();
  expect(t.sockets.length).toBe(2);
  t.join();
  expect(t.states.at(-1)).toEqual(['connected']);
  t.get(':tmi.twitch.tv RECONNECT\r\n');
  expect(t.socket().closed).toBe(true);
  expect(t.states.at(-1)).toEqual(['closed']);
});

test('a refused login is reported and not tried again', () => {
  const t = setup({ token: 'old', login: 'gridbot' });
  t.socket().onopen();
  const timers = t.timers.length;
  t.get(':tmi.twitch.tv NOTICE * :Login authentication failed\r\n');
  t.socket().onclose();
  expect(t.states.at(-1)).toEqual(['error', 'Twitch refused the login. Log in again.']);
  expect(t.timers.length).toBe(timers);
  expect(t.sockets.length).toBe(1);
});
