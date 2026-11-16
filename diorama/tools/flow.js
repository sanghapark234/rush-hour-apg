// Game-flow tests: they play the built game (dist/) in a headless Chromium through
// window.apg.command and window.apg.state, the same hook a chat bot uses.
// The scenarios also use the page as a person does: the welcome screen, the keyboard, the
// buttons and the command box. A fake Twitch server stands in for the chat (no network).
// Run with: bun run test:flow   (builds first; needs `bunx playwright install chromium` once)
// Run some: bun tools/flow.js Twitch   (the tests whose name holds the word)
import { chromium } from 'playwright';
import { existsSync } from 'node:fs';
import { LEVELS, slide, pathOpen } from '../src/engine.js';
import { analyze } from '../src/solver.js';

const root = import.meta.dir + '/../';
if (!existsSync(root + 'dist/index.html')) {
  console.error('dist/ is missing. Run: vp build');
  process.exit(1);
}
const port = 20000 + Math.floor(Math.random() * 20000);
const server = Bun.spawn(['bun', root + 'serve.js', '127.0.0.1', String(port), 'dist'], { cwd: root, stdout: 'pipe', stderr: 'inherit' });
// The server prints its address when it listens. A closed stream means that it did not start.
if ((await server.stdout.getReader().read()).done) {
  console.error(`The server did not start on port ${port}. Run the tests again.`);
  process.exit(1);
}
let browser;

// The helpers that run inside the page.
const inPage = () => {
  const chat = {
    get el() {
      return document.getElementById('chat');
    },
  };
  const t = {
    last: () => chat.el.lastElementChild?.textContent ?? '',
    lines: () => [...chat.el.children].map((l) => l.textContent),
    send: (text) => window.apg.command('tester', text),
    // The next move of a shortest solution, as [colour, direction].
    hint: async () => {
      await t.send('hint');
      const m = t.last().match(/Hint: (\w+) (\w+)/);
      if (!m) throw new Error('no hint: ' + t.last());
      return [m[1], m[2]];
    },
    // Follows the hints until the red car is out, or for `limit` moves.
    follow: async (limit = 400) => {
      for (let n = 0; n < limit && !window.apg.state().won; n++) await t.send((await t.hint()).join(' '));
    },
    until: async (test, ms = 60000) => {
      const end = Date.now() + ms;
      while (!test(window.apg.state())) {
        if (Date.now() > end) throw new Error('timed out waiting for: ' + test);
        await new Promise((r) => setTimeout(r, 50));
      }
    },
    text: (id) => document.getElementById(id).textContent,
    // The toy vehicles of the 3D scene, in the order of the puzzle.
    cars: () => {
      let group = null;
      window.apg.stage.board.traverse((o) => {
        if (!group && o.children.length && o.children.every((c) => c.userData?.tgt !== undefined)) group = o;
      });
      return (group?.children ?? []).map((c) => ({ cur: c.userData.cur, tgt: c.userData.tgt, hint: c.userData.hint, visible: c.visible }));
    },
    // What the canvas shows: the number of different colours and the share of pixels that are not black.
    paint: () =>
      new Promise((res) =>
        requestAnimationFrame(() => {
          const c = document.createElement('canvas'),
            x = c.getContext('2d');
          c.width = 160;
          c.height = 100;
          x.drawImage(document.getElementById('stage'), 0, 0, 160, 100);
          const d = x.getImageData(0, 0, 160, 100).data,
            seen = new Set();
          let lit = 0;
          for (let i = 0; i < d.length; i += 4) {
            seen.add(((d[i] >> 4) << 8) | ((d[i + 1] >> 4) << 4) | (d[i + 2] >> 4));
            if (d[i] + d[i + 1] + d[i + 2] > 60) lit++;
          }
          res({ colours: seen.size, lit: lit / (d.length / 4) });
        }),
      ),
    // True when each element that the selector finds lies inside the window.
    inside: (selector) =>
      [...document.querySelectorAll(selector)]
        .filter((e) => !e.hidden)
        .every((e) => {
          const r = e.getBoundingClientRect();
          return r.width > 0 && r.left >= 0 && r.top >= 0 && r.right <= innerWidth + 0.5 && r.bottom <= innerHeight + 0.5;
        }),
  };
  window.t = t;
};

// Every problem that a page reports while a test runs: an exception, an error in the console,
// a request that failed and an HTTP error. The runner fails a test that has one, unless the
// test expects it (`trouble.expected`).
const trouble = { list: [], expected: false };
const inPlay = () => document.body.dataset.phase === 'play' && window.apg.state().puzzle;
const isReady = () => document.body.classList.contains('ready');
// Opens the game at an address. `before(page)` runs before the page loads. `wait` is a function
// that is true in the page when the test can go on, or null.
async function openAt(query, { viewport = { width: 1280, height: 800 }, motion = 'reduce', before, wait = inPlay } = {}) {
  const page = await browser.newPage({ viewport, reducedMotion: motion });
  page.on('pageerror', (e) => trouble.list.push('page error: ' + e));
  page.on('console', (m) => m.type() === 'error' && trouble.list.push('console: ' + m.text()));
  page.on('requestfailed', (r) => trouble.list.push('request failed: ' + r.url()));
  page.on('response', (r) => r.status() >= 400 && trouble.list.push(`HTTP ${r.status()}: ${r.url()}`));
  await page.addInitScript(inPage);
  await before?.(page);
  await page.goto(`http://127.0.0.1:${port}/${query}`);
  if (wait) await page.waitForFunction(wait, null, { timeout: 120000 });
  return { page };
}
const open = (level) => openAt(`?skip&level=${level}`);
function check(ok, what) {
  if (ok) return;
  const err = new Error(what);
  Error.captureStackTrace(err, check); // the stack starts at the step of the scenario
  throw err;
}
const state = (page) => page.evaluate(() => window.apg.state());
const send = (page, text, user = 'tester') => page.evaluate(([u, x]) => window.apg.command(u, x), [user, text]);
const lines = (page) => page.evaluate(() => t.lines());
const dirOf = (m, d) => (m.axis === 'h' ? (d > 0 ? 'right' : 'left') : d > 0 ? 'down' : 'up');
// Every one-cell-or-more move of a position: [vehicle, direction, cells done, position after, exit].
function movesOf(z, pos, count = 1) {
  const out = [];
  for (let i = 0; i < z.meta.length; i++)
    for (const d of [1, -1]) {
      const p = pos.slice(),
        { done, exit } = slide(z, p, i, d, count);
      out.push({ i, d, done, exit, p, text: `${z.meta[i].id} ${dirOf(z.meta[i], d)}` });
    }
  return out;
}
// A player that needs no hint: this file's own copy of the solver gives the next move of a
// shortest solution. The Auto level counts hints, so its tests play with this.
function route(z) {
  const table = analyze(z, z.start);
  return (pos) => {
    const here = table.dist(pos),
      m = movesOf(z, pos).find((m) => m.exit || (m.done && table.dist(m.p) < here));
    if (!m) throw new Error('no move leads closer to the exit');
    return m;
  };
}
// The same as text: "blue right".
const player = (z) =>
  (
    (next) => (pos) =>
      next(pos).text
  )(route(z));
// Plays a shortest solution to the end. The page gets all the moves in one call: a call for
// each move waits for a frame of the 3D scene, and the long levels need more than 100 moves.
async function playOut(page, user = 'bot') {
  const s = await state(page),
    z = s.puzzle,
    next = route(z),
    list = [];
  for (let pos = s.pos, out = s.won; !out;) {
    const m = next(pos);
    list.push(m.text);
    out = m.exit || pathOpen(z, m.p);
    pos = m.p;
  }
  await page.evaluate(
    async ([u, all]) => {
      for (const text of all) await window.apg.command(u, text);
    },
    [user, list],
  );
  check((await state(page)).won, 'a shortest solution did not clear the puzzle');
}
// A fake Twitch chat server. It answers the join, keeps what the game sent, and lets a test
// write a chat message or close the connection.
async function fakeTwitch(page, channel = 'room') {
  const irc = { got: [], sockets: [] };
  await page.routeWebSocket(/irc-ws\.chat\.twitch\.tv/, (ws) => {
    irc.sockets.push(ws);
    ws.onMessage((line) => {
      irc.got.push(String(line));
      if (String(line).startsWith('JOIN #')) ws.send(`:tester!tester@tester.tmi.twitch.tv JOIN #${channel}\r\n`);
    });
  });
  irc.raw = (line) => irc.sockets.at(-1).send(line + '\r\n');
  irc.say = (who, text) =>
    irc.raw(`@display-name=${who} :${who.toLowerCase()}!${who.toLowerCase()}@${who.toLowerCase()}.tmi.twitch.tv PRIVMSG #${channel} :${text}`);
  irc.replies = () => irc.got.filter((l) => l.startsWith('PRIVMSG'));
  return irc;
}
const connected = (page) => page.waitForFunction(() => document.getElementById('source').textContent === 'Twitch: #room', null, { timeout: 90000 });
// Twitch answers the token check. The page asks from another origin, so the answer allows it.
// The game gives the check 8 s. A first page of the slow headless browser can need more, so the limit is off here.
const fakeLogin = async (page, login = 'gridbot') => {
  await page.addInitScript(() => (AbortSignal.timeout = () => new AbortController().signal));
  await page.route('https://id.twitch.tv/oauth2/validate', (route) =>
    route.fulfill({
      status: route.request().method() === 'OPTIONS' ? 204 : 200,
      headers: { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*' },
      contentType: 'application/json',
      body: JSON.stringify({ login, scopes: ['chat:read', 'chat:edit'] }),
    }),
  );
};
// A small random generator with a seed, so a failed run can be repeated.
function seeded(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0), s / 2 ** 32);
}

// One test per level: the address gives a puzzle of that level, the page shows it, and a run
// along a shortest solution clears it in that number of moves.
const levelTests = Object.fromEntries(
  Object.entries(LEVELS).map(([key, level]) => [
    `${key}: the address gives a puzzle of the level, and a shortest run is a perfect run`,
    async () => {
      const { page } = await open(key);
      const r = await page.evaluate(async () => {
        const s0 = window.apg.state(),
          shown = {
            info: t.text('info'),
            chips: document.querySelectorAll('#legend .chip').length,
            cars: t.cars(),
            menu: document.getElementById('level').value,
          };
        await t.follow(4); // the first moves come from the game's own hints
        return { s0, shown };
      });
      await playOut(page);
      Object.assign(
        r,
        await page.evaluate(() => {
          const s = window.apg.state();
          return { won: s.won, moves: s.moves, note: t.text('win-note'), watch: document.getElementById('watch').hidden, lines: t.lines() };
        }),
      );
      const z = r.s0.puzzle;
      check(r.s0.level === key && r.shown.menu === key, 'level: ' + r.s0.level + ', menu: ' + r.shown.menu);
      check(z.N === level.N, 'lot size: ' + z.N);
      check(z.moves >= level.min && z.moves <= level.max, `shortest solution ${z.moves} is outside ${level.min} to ${level.max}`);
      check(r.shown.info === `${level.N}×${level.N} lot`, 'info: ' + r.shown.info);
      check(r.shown.chips === z.meta.length, 'vehicle names in the panel: ' + r.shown.chips);
      check(r.shown.cars.length === z.meta.length, 'vehicles in the scene: ' + r.shown.cars.length);
      check(
        r.shown.cars.every((c, i) => c.visible && c.tgt === z.start[i]),
        'a vehicle of the scene is not at its start',
      );
      check(r.won, 'the puzzle is not cleared');
      check(r.moves === z.moves, `moves ${r.moves}, shortest ${z.moves}`);
      check(r.note.startsWith('A perfect run'), 'win note: ' + r.note);
      check(r.watch, 'a perfect run offers the solution replay');
      check(r.lines.includes('BOARD The way is open. RED drives out.'), 'the red car did not drive out by itself');
    },
  ]),
);

const tests = {
  ...levelTests,
  'invalid messages change nothing': async () => {
    const { page } = await open('medium');
    const r = await page.evaluate(async () => {
      const before = JSON.stringify(window.apg.state());
      for (const text of ['hello', 'blue sideways', 'red right 0', 'red right 8', 'nocolour left', '<b>x</b>', 'blue right 2 3', ' ', 'stop'])
        await t.send(text);
      return {
        same: before === JSON.stringify(window.apg.state()),
        html: document.querySelectorAll('#chat *').length !== 2 * document.querySelectorAll('#chat > .line').length,
      };
    });
    check(r.same, 'an invalid message changed the game');
    check(!r.html, 'a message was rendered as HTML');
  },
  'a hint that chat overtakes with a move is for the position after the move': async () => {
    const { page } = await open('medium');
    const s = await state(page),
      z = s.puzzle,
      table = analyze(z, z.start),
      move = route(z)(s.pos);
    // The hint waits for the solver; the move does not, so it lands first.
    const line = await page.evaluate(async (text) => {
      const asked = t.send('hint');
      await t.send(text);
      await asked;
      return t.last();
    }, move.text);
    const m = line.match(/Hint: (\w+ \w+)/);
    check(m, 'no hint after the move: ' + line);
    const next = movesOf(z, move.p).find((x) => x.text === m[1]);
    check(next && (next.exit || table.dist(next.p) < table.dist(move.p)), `after ${move.text} the hint was ${m[1]}, which is not a shortest move`);
    check((await state(page)).moves === 1, 'the hint moved a vehicle');
  },
  'giving up plays the shortest solution from the position, and it is not a win': async () => {
    const { page } = await open('medium');
    const r = await page.evaluate(async () => {
      const first = await t.hint();
      await t.send(first.join(' ')); // one move by chat, then give up
      await t.send('solve');
      await t.until((s) => s.demo?.done);
      const s = window.apg.state();
      await t.send('blue right');
      return {
        won: s.won,
        moves: s.moves,
        best: s.puzzle.moves,
        status: t.text('status'),
        after: t.last(),
        disabled: document.getElementById('solve').disabled,
      };
    });
    check(!r.won, 'a give-up counts as a win');
    check(r.moves === r.best, `moves ${r.moves}, shortest ${r.best}`);
    check(r.status === 'Solution shown', 'status: ' + r.status);
    check(r.after.includes('The solution was shown'), 'reply after the replay: ' + r.after);
    check(r.disabled, 'the solution button is still active');
  },
  'stop ends a replay, and chat can go on to a win that names the replay moves': async () => {
    const { page } = await open('medium');
    const r = await page.evaluate(async () => {
      await t.send('solve');
      await t.until((s) => s.moves >= 2);
      await t.send('stop');
      const stopped = window.apg.state();
      await new Promise((r) => setTimeout(r, 1500)); // a stopped replay makes no more moves
      const later = window.apg.state();
      await t.follow();
      const s = window.apg.state();
      return { demo: stopped.demo, at: stopped.moves, later: later.moves, won: s.won, note: t.text('win-note') };
    });
    check(r.demo === null, 'the replay did not stop');
    check(r.later === r.at, 'the stopped replay moved a car');
    check(r.won, 'the puzzle is not cleared');
    check(new RegExp(`^The game played ${r.at} of them\\.`).test(r.note), 'win note: ' + r.note);
  },
  'after a longer win, the win card replays the shortest solution from the start': async () => {
    const { page } = await open('medium');
    const r = await page.evaluate(async () => {
      const [colour, dir] = await t.hint();
      const back = { left: 'right', right: 'left', up: 'down', down: 'up' }[dir];
      await t.send(`${colour} ${dir}`);
      await t.send(`${colour} ${back}`); // two wasted moves
      await t.follow();
      const win = window.apg.state();
      const watch = document.getElementById('watch');
      const offered = !watch.hidden;
      watch.click();
      await t.until((s) => s.demo?.done);
      const s = window.apg.state();
      return { won: win.won, extra: win.moves - win.puzzle.moves, offered, replay: s.moves, best: s.puzzle.moves, wonAfter: s.won };
    });
    check(r.won, 'the puzzle is not cleared');
    check(r.extra === 2, 'extra moves: ' + r.extra);
    check(r.offered, 'the win card does not offer the replay');
    check(r.replay === r.best, `replay moves ${r.replay}, shortest ${r.best}`);
    check(!r.wonAfter, 'the replay counts as a win');
  },
  'on Auto, a give-up leads to a puzzle that is not harder': async () => {
    const { page } = await open('auto');
    const r = await page.evaluate(async () => {
      const first = window.apg.state().puzzle;
      await t.send('solve');
      await t.until((s) => s.demo?.done, 120000);
      document.getElementById('new').click();
      await t.until((s) => s.puzzle.start.join() + s.puzzle.walls.join() !== first.start.join() + first.walls.join() || s.puzzle.moves !== first.moves);
      await t.until((s) => s.moves === 0 && !s.demo);
      const next = window.apg.state().puzzle;
      return { first: first.moves, next: next.moves, lines: t.lines() };
    });
    check(r.next <= r.first, `the next puzzle takes ${r.next} moves, the one given up took ${r.first}`);
    check(r.next === r.first || r.lines.includes('BOARD Auto: that one was tough, so this puzzle is easier.'), 'the Auto note is missing');
  },

  // ---------- the page as a person uses it ----------
  'an unknown level in the address gives Easy': async () => {
    const { page } = await open('nightmare');
    const s = await state(page);
    check(s.level === 'easy' && s.puzzle.moves <= LEVELS.easy.max, `level ${s.level}, shortest solution ${s.puzzle.moves}`);
  },
  'welcome screen: chat waits for Start, a level button picks the level, and the win card comes after the drive': async () => {
    // With normal motion: the camera flies in, and the win card waits for the red car.
    const { page } = await openAt('', { motion: 'no-preference', wait: isReady });
    await send(page, 'red right');
    check((await lines(page)).length === 1, 'chat played before Start: ' + (await lines(page)).join(' / '));
    await page.locator('.levels label', { hasText: 'Hard' }).click();
    await page.waitForFunction(([min, max]) => ((m) => m >= min && m <= max)(window.apg.state().puzzle.moves), [LEVELS.hard.min, LEVELS.hard.max]);
    check((await page.locator('#level').inputValue()) === 'hard', 'the level menu does not follow the level button');
    check((await page.evaluate(() => t.paint())).colours > 30, 'the welcome view is not drawn');
    await page.locator('#start').click();
    check((await page.evaluate(() => document.body.dataset.phase)) === 'fly', 'Start did not begin the flight');
    await send(page, 'red right');
    check((await state(page)).moves === 0, 'chat played during the flight');
    // The flight takes 3.8 s of game time. The headless browser draws about 2 frames in a second,
    // and the game counts at most 0.05 s for a frame, so the flight can take 40 s here.
    await page.waitForFunction(inPlay, null, { timeout: 120000 });
    check(await page.evaluate(() => document.activeElement.id === 'command'), 'the command box does not hold the focus');
    await playOut(page);
    check(await page.locator('#win').isHidden(), 'the win card does not wait for the red car');
    await page.locator('#win').waitFor({ state: 'visible', timeout: 10000 });
    check(await page.evaluate(() => window.apg.stage.scene.children.some((c) => c.isInstancedMesh && c.count > 0)), 'no confetti');
  },
  'keyboard only: the arrow keys pick a level, Enter starts, and a typed command plays': async () => {
    const { page } = await openAt('', { wait: isReady });
    await page.keyboard.press('Tab');
    await page.keyboard.press('ArrowRight');
    await page.waitForFunction((min) => window.apg.state().level === 'medium' && window.apg.state().puzzle.moves >= min, LEVELS.medium.min);
    await page.keyboard.press('Tab');
    check(await page.evaluate(() => document.activeElement.id === 'start'), 'Tab does not reach Start');
    await page.keyboard.press('Enter');
    await page.waitForFunction(inPlay, null, { timeout: 20000 });
    const s = await state(page);
    const focus = await page.evaluate(() => document.activeElement.id || document.activeElement.tagName);
    check(focus === 'command', 'after Start the focus is on ' + focus + ', not on the command box');
    const move = player(s.puzzle)(s.pos);
    await page.keyboard.type(move);
    await page.keyboard.press('Enter');
    await page
      .waitForFunction(() => window.apg.state().moves === 1, null, { timeout: 10000 })
      .catch(async () => {
        throw new Error(`"${move}" did not play; the panel says: ${(await lines(page)).join(' / ')}`);
      });
    check((await page.locator('#command').inputValue()) === '', 'the command box keeps the text');
  },
  'every control has a name': async () => {
    const { page } = await open('easy');
    const bare = await page.evaluate(() =>
      [...document.querySelectorAll('button, input, select')]
        .filter((e) => !(e.textContent.trim() || e.getAttribute('aria-label') || e.labels?.length))
        .map((e) => e.outerHTML),
    );
    check(!bare.length, 'no name: ' + bare.join(' '));
  },
  'typed commands: a move, a blocked move, a wrong direction and a count each get their answer': async () => {
    const { page } = await open('medium');
    const type = async (text) => {
      await page.locator('#command').fill(text);
      await page.locator('#command').press('Enter');
    };
    const last = () => page.evaluate(() => t.last());
    let s = await state(page);
    const z = s.puzzle,
      quiet = (m) => m.i > 0 && m.done > 0 && !pathOpen(z, m.p); // a move that does not end the puzzle
    const one = movesOf(z, s.pos).find(quiet);
    await type('  ' + one.text.toUpperCase().replace(' ', '   ') + ' ');
    s = await state(page);
    check(s.moves === 1 && s.pos.join() === one.p.join(), 'the move was not played: ' + (await last()));
    check((await last()) === `BOARD ${one.text.replace(' ', ' moved ')}.`, 'answer: ' + (await last()));
    check((await page.locator('#moves').textContent()) === '1', 'the move counter does not show 1');
    await page.waitForFunction(([i, at]) => Math.abs(t.cars()[i].cur - at) < 0.02, [one.i, one.p[one.i]], { timeout: 10000 }); // the toy car arrives
    const stuck = movesOf(z, s.pos).find((m) => !m.done && !m.exit);
    await type(stuck.text);
    check((await last()) === 'BOARD Move blocked!', 'answer to a blocked move: ' + (await last()));
    const across = z.meta.find((m) => m.axis === 'h');
    await type(across.id + ' up');
    check((await last()) === `BOARD ${across.id} cannot move up.`, 'answer to a wrong direction: ' + (await last()));
    check((await state(page)).moves === 1, 'a refused command counted as a move');
    const far = movesOf(z, s.pos, 7).find(quiet);
    await type(far.text + ' 7');
    s = await state(page);
    check(s.moves === 1 + far.done && s.pos.join() === far.p.join(), 'the counted move was not played: ' + (await last()));
    check((await last()) === `BOARD ${far.text.replace(' ', ' moved ')} ${far.done} of 7, then it was blocked.`, 'answer to a count: ' + (await last()));
  },
  'buttons: Hint marks a vehicle, a name chip fills the command box, and Reset puts every vehicle back': async () => {
    const { page } = await open('medium');
    await page.locator('#hint').click();
    await page.waitForFunction(() => t.last().startsWith('BOARD Hint: '));
    check(await page.evaluate(() => t.cars().filter((c) => c.hint > 0).length === 1), 'the hint does not mark one vehicle');
    await page.locator('#legend .chip').first().click();
    check((await page.locator('#command').inputValue()) === 'red ', 'the name chip did not fill the command box');
    check(await page.evaluate(() => document.activeElement.id === 'command'), 'the command box does not hold the focus');
    const s = await state(page),
      next = player(s.puzzle);
    await send(page, next(s.pos));
    await send(page, next((await state(page)).pos));
    check((await state(page)).moves === 2, 'two moves were not played');
    await page.locator('#reset').click();
    const r = await state(page);
    check(r.moves === 0 && r.pos.join() === s.puzzle.start.join() && !r.won, 'Reset did not restore the start');
    check(await page.evaluate((start) => t.cars().every((c, i) => c.tgt === start[i]), s.puzzle.start), 'a toy vehicle is not back at its start');
    check((await page.locator('#moves').textContent()) === '0', 'the move counter does not show 0');
  },
  'win card: Play this one again restarts the same puzzle, and New puzzle gives another': async () => {
    const { page } = await open('easy');
    const first = (await state(page)).puzzle;
    await playOut(page);
    await page.locator('#win').waitFor({ state: 'visible' });
    check((await page.locator('#win-moves').textContent()) === String(first.moves), 'the win card shows other moves');
    check((await page.locator('#status').textContent()) === 'Cleared', 'status: ' + (await page.locator('#status').textContent()));
    await send(page, 'red right');
    check((await page.evaluate(() => t.last())) === 'BOARD Already cleared. Reset or start a new puzzle.', 'a command after the win was not refused');
    await page.locator('#replay').click();
    let s = await state(page);
    check(
      !s.won && s.moves === 0 && s.pos.join() === first.start.join() && JSON.stringify(s.puzzle) === JSON.stringify(first),
      'the same puzzle did not restart',
    );
    check(await page.locator('#win').isHidden(), 'the win card stays');
    await playOut(page);
    await page.locator('#win').waitFor({ state: 'visible' });
    await page.locator('#again').click();
    await page.waitForFunction(
      (old) => JSON.stringify(window.apg.state().puzzle.meta) + window.apg.state().puzzle.start !== old,
      JSON.stringify(first.meta) + first.start,
    );
    await page.waitForFunction(inPlay);
    s = await state(page);
    check(!s.won && s.moves === 0, 'the new puzzle does not start fresh');
    check(await page.locator('#win').isHidden(), 'the win card stays on the new puzzle');
    check((await lines(page))[0] === 'BOARD Help the red car reach the exit. Type a colour and a direction.', 'the chat panel was not cleared');
  },
  'the level menu changes the level during play': async () => {
    const { page } = await open('medium');
    await send(page, player((await state(page)).puzzle)((await state(page)).pos));
    await page.locator('#level').selectOption('expert');
    await page.waitForFunction(() => window.apg.state().puzzle.N === 7 && window.apg.state().moves === 0);
    const s = await state(page);
    check(
      s.level === 'expert' && s.puzzle.moves >= LEVELS.expert.min && s.puzzle.moves <= LEVELS.expert.max,
      `level ${s.level}, shortest solution ${s.puzzle.moves}`,
    );
    check(await page.evaluate(() => document.querySelector('input[name=level]:checked').value === 'expert'), 'the level buttons do not follow the menu');
    check(await page.evaluate(() => t.cars().length === window.apg.state().puzzle.meta.length), 'the scene keeps the old vehicles');
    await playOut(page);
    check((await state(page)).won, 'the new level cannot be cleared');
  },
  'camera: chat and the buttons change the view, and an unknown view is refused': async () => {
    const { page } = await open('easy');
    const view = async () => {
      await page.waitForTimeout(500);
      return page.evaluate(() => ({ at: window.apg.stage.camera.position.toArray(), on: document.querySelector('[data-cam][aria-pressed=true]').dataset.cam }));
    };
    const angle = await view();
    await send(page, 'cam top');
    const top = await view();
    await page.locator('[data-cam=low]').click();
    const low = await view();
    await send(page, 'cam sideways');
    check((await page.evaluate(() => t.last())) === 'BOARD Camera views: cam angle, cam top, cam low.', 'an unknown view was not refused');
    await send(page, 'cam reset');
    const again = await view();
    check(angle.on === 'angle' && top.on === 'top' && low.on === 'low' && again.on === 'angle', `views: ${angle.on}, ${top.on}, ${low.on}, ${again.on}`);
    check(top.at[1] > angle.at[1] && angle.at[1] > low.at[1], `camera heights: top ${top.at[1]}, angle ${angle.at[1]}, low ${low.at[1]}`);
    check(
      again.at.every((v, i) => Math.abs(v - angle.at[i]) < 0.05),
      'cam reset does not return to the angle view',
    );
    check((await state(page)).moves === 0, 'a camera command counted as a move');
  },
  'the sound button turns the sound off and on, and the effects play without an error': async () => {
    const { page } = await open('easy');
    const sound = page.locator('#sound');
    await sound.click();
    check((await sound.textContent()) === 'Sound off' && (await sound.getAttribute('aria-pressed')) === 'false', 'the button does not show Sound off');
    await sound.click();
    check((await sound.textContent()) === 'Sound on' && (await sound.getAttribute('aria-pressed')) === 'true', 'the button does not show Sound on');
    await page.locator('#hint').click(); // the hint sound
    await playOut(page); // the roll sounds, then the win sound
    await page.waitForTimeout(1200);
  },
  'random chat never breaks the board, and the puzzle can still be cleared': async () => {
    const seed = Math.floor(Math.random() * 1e9),
      random = seeded(seed),
      pick = (list) => list[Math.floor(random() * list.length)];
    const { page } = await open('hard');
    const z = (await state(page)).puzzle;
    const words = [...z.meta.map((m) => m.id), 'left', 'right', 'up', 'down', '1', '2', '3', '7', '9', 'hint', 'stop', 'cam', 'top', 'purple', '!', '<i>'];
    const texts = Array.from({ length: 300 }, () =>
      random() < 0.7
        ? `${pick(z.meta).id} ${pick(['left', 'right', 'up', 'down'])}${random() < 0.3 ? ' ' + pick([1, 2, 3, 7]) : ''}`
        : [pick(words), pick(words), pick(words)].slice(0, 1 + Math.floor(random() * 3)).join(' '),
    );
    const steps = await page.evaluate(async (texts) => {
      const out = [];
      for (const text of texts) {
        await t.send(text);
        const s = window.apg.state();
        out.push({ text, pos: s.pos, moves: s.moves, won: s.won });
        if (s.won) break;
      }
      return out;
    }, texts);
    let before = 0;
    for (const s of steps) {
      const cells = new Set(z.walls);
      z.meta.forEach((m, i) => {
        check(Number.isInteger(s.pos[i]) && s.pos[i] >= 0 && s.pos[i] + m.len <= z.N, `seed ${seed}: after "${s.text}" ${m.id} is off the lot`);
        for (let k = 0; k < m.len; k++) cells.add(m.axis === 'h' ? m.lane * z.N + s.pos[i] + k : (s.pos[i] + k) * z.N + m.lane);
      });
      check(cells.size === z.walls.length + z.meta.reduce((n, m) => n + m.len, 0), `seed ${seed}: after "${s.text}" two things share a cell`);
      check(s.moves >= before, `seed ${seed}: after "${s.text}" the move counter went down`);
      before = s.moves;
    }
    await playOut(page);
    check((await state(page)).won, `seed ${seed}: the puzzle cannot be cleared after the random chat`);
  },
  'on Auto, runs without a mistake lead to harder puzzles': async () => {
    const { page } = await open('auto');
    const seen = [];
    for (let round = 0; round < 3; round++) {
      const z = (await state(page)).puzzle;
      seen.push(z.moves);
      await playOut(page);
      await page.locator('#new').click();
      await page.waitForFunction(
        (old) =>
          !window.apg.state().won && window.apg.state().moves === 0 && JSON.stringify(window.apg.state().puzzle.meta) + window.apg.state().puzzle.start !== old,
        JSON.stringify(z.meta) + z.start,
      );
    }
    seen.push((await state(page)).puzzle.moves);
    check(
      seen.every((m, i) => !i || m >= seen[i - 1]),
      'the puzzles do not get harder: ' + seen.join(', '),
    );
    check(seen.at(-1) > seen[0], 'the last puzzle is not harder than the first: ' + seen.join(', '));
    check((await lines(page)).includes('BOARD Auto: you solved that well, so this puzzle is harder.'), 'the Auto note is missing');
  },

  // ---------- Twitch chat, with a fake Twitch server ----------
  'Twitch: a chat message with ! moves a vehicle under the name of the viewer, and other messages do not': async () => {
    const twitch = {};
    const { page } = await openAt('?skip&level=medium&channel=Room&cooldown=0', { before: async (page) => (twitch.irc = await fakeTwitch(page)) });
    const { irc } = twitch;
    await connected(page);
    check(
      irc.got.some((l) => /^NICK justinfan\d+$/.test(l)) && irc.got.includes('JOIN #room'),
      'the game did not join #room as a reader: ' + irc.got.join(' / '),
    );
    check(
      (await lines(page)).some((l) => l.includes('Twitch chat #room is connected, without replies')),
      'the panel does not say that the chat is connected',
    );
    const s = await state(page),
      move = player(s.puzzle)(s.pos);
    irc.say('Alice', move); // no ! prefix: ordinary talk
    irc.say('Alice', '!solve'); // for the streamers only
    irc.say('Alice', '!cam top');
    irc.raw('PING :tmi.twitch.tv');
    irc.say('Bob', '!' + move);
    await page.waitForFunction(() => window.apg.state().moves === 1);
    const after = await state(page);
    check(after.demo === null, 'a viewer started the solution');
    check((await lines(page)).includes('Bob ' + move), 'the chat panel does not show the viewer: ' + (await lines(page)).slice(-3).join(' / '));
    check(!(await lines(page)).some((l) => l.startsWith('Alice ')), 'a message without ! or for the streamers reached the game');
    await page.waitForFunction(
      ([i, at]) => Math.abs(t.cars()[i].cur - at) < 0.02,
      [after.pos.findIndex((p, i) => p !== s.pos[i]), after.pos.find((p, i) => p !== s.pos[i])],
      { timeout: 10000 },
    );
    check(irc.got.includes('PONG :tmi.twitch.tv'), 'no answer to PING');
    check(!irc.replies().length, 'a reader without a login wrote in chat: ' + irc.replies().join(' / '));
  },
  'Twitch: with a login the game answers a blocked move in chat and names the viewer who drove out': async () => {
    const twitch = {};
    const { page } = await openAt('?skip&level=easy&channel=room&cooldown=0&client=abcdefghij0123456789', {
      before: async (page) => {
        twitch.irc = await fakeTwitch(page);
        await fakeLogin(page);
        await page.addInitScript(() => localStorage.setItem('tg-twitch-token', 'test-token'));
      },
    });
    const { irc } = twitch;
    await connected(page);
    check(
      irc.got.indexOf('PASS oauth:test-token') >= 0 && irc.got.indexOf('PASS oauth:test-token') < irc.got.indexOf('NICK gridbot'),
      'the login was not sent: ' + irc.got.join(' / ').replace('test-token', '…'),
    );
    check(await page.locator('#login').isHidden(), 'the login button shows with a working login');
    let s = await state(page);
    irc.say('Alice', '!' + movesOf(s.puzzle, s.pos).find((m) => !m.done && !m.exit).text);
    await page.waitForFunction(() => t.last() === 'BOARD Move blocked!');
    check(irc.replies().join() === 'PRIVMSG #room :@Alice Move blocked!', 'reply to a blocked move: ' + irc.replies().join(' / '));
    const next = player(s.puzzle);
    for (let n = 0; !s.won; n++) {
      irc.say(n % 2 ? 'Bob' : 'Carol', '!' + next(s.pos));
      await page.waitForFunction((moves) => window.apg.state().moves > moves, s.moves);
      s = await state(page);
    }
    const win = new RegExp(`^PRIVMSG #room :(Bob|Carol) drove RED out\\. Cleared in ${s.moves} moves\\.$`);
    await page.waitForFunction(() => true); // one turn of the page, then the fake server has the reply
    for (let n = 0; n < 40 && !win.test(irc.replies().at(-1)); n++) await page.waitForTimeout(100);
    check(win.test(irc.replies().at(-1)), 'no win message in chat: ' + irc.replies().join(' / '));
    await page.waitForTimeout(1600); // the game drops a reply that follows another in less than 1.5 s
    irc.say('Dave', '!red right');
    for (let n = 0; n < 40 && irc.replies().length < 3; n++) await page.waitForTimeout(100);
    check(irc.replies().at(-1) === 'PRIVMSG #room :@Dave No moves now. Wait for the next puzzle.', 'reply after the win: ' + irc.replies().at(-1));
  },
  'Twitch: a lost connection opens again, and chat plays on': async () => {
    const twitch = {};
    const { page } = await openAt('?skip&level=medium&channel=room&cooldown=0', { before: async (page) => (twitch.irc = await fakeTwitch(page)) });
    const { irc } = twitch;
    await connected(page);
    await irc.sockets[0].close();
    await page.waitForFunction(() => t.lines().includes('BOARD Twitch chat is disconnected. The game tries again.'));
    await connected(page);
    check(irc.sockets.length === 2, 'connections: ' + irc.sockets.length);
    const s = await state(page);
    irc.say('Alice', '!' + player(s.puzzle)(s.pos));
    await page.waitForFunction(() => window.apg.state().moves === 1);
  },
  'Twitch: a wrong channel name is refused, and the game still plays': async () => {
    const { page } = await openAt('?skip&level=easy&channel=not%20a%20channel');
    await page.waitForFunction(() => document.getElementById('source').textContent === 'Twitch: off');
    check((await lines(page)).includes('BOARD The channel in the address is not a Twitch channel name.'), 'no message about the channel name');
    await playOut(page);
  },
  'Twitch login: the token leaves the address, is kept only for the login that this page started, and the game returns': async () => {
    const twitch = {};
    const before = (state) => async (page) => {
      twitch.irc = await fakeTwitch(page);
      await fakeLogin(page);
      await page.addInitScript((state) => {
        if (location.hash.includes('access_token'))
          sessionStorage.setItem('tg-twitch-return', JSON.stringify({ state, search: '?skip&level=easy&channel=room&cooldown=0' }));
      }, state);
    };
    // The answer of another login: nothing is kept.
    const other = await openAt('?skip&level=easy#access_token=stolen-token&state=theirs', { before: before('mine') });
    await other.page.waitForFunction(() => sessionStorage.getItem('tg-twitch-return') === null, null, { timeout: 90000 }); // the game read the answer
    check(!other.page.url().includes('access_token'), 'the token stays in the address');
    check((await other.page.evaluate(() => localStorage.getItem('tg-twitch-token'))) === null, 'a token of another login was kept');
    await other.page.context().close();
    // The answer of this login: the token is kept and the page returns to the game address.
    const { page } = await openAt('?skip&level=easy#access_token=test-token&state=mine', { before: before('mine'), wait: null });
    await page.waitForURL(/channel=room/);
    await page.waitForFunction(inPlay, null, { timeout: 120000 });
    await connected(page);
    check(!page.url().includes('access_token'), 'the token stays in the address');
    check((await page.evaluate(() => localStorage.getItem('tg-twitch-token'))) === 'test-token', 'the token was not kept');
    check(twitch.irc.got.includes('PASS oauth:test-token') && twitch.irc.got.includes('NICK gridbot'), 'the game did not log in to the chat');
    check(
      (await lines(page)).some((l) => l.includes('with replies as gridbot')),
      'the panel does not name the reply account',
    );
  },

  // ---------- the picture, the window and failures ----------
  'the page loads without an error, and the canvas shows a lit scene in every view': async () => {
    const { page } = await openAt('', { wait: isReady });
    const welcome = await page.evaluate(() => t.paint());
    await page.context().close();
    check(welcome.colours > 30 && welcome.lit > 0.5, `welcome view: ${welcome.colours} colours, ${Math.round(welcome.lit * 100)}% lit`);
    for (const cam of ['angle', 'top', 'low']) {
      const { page } = await openAt(`?skip&level=master&cam=${cam}`);
      await page.waitForTimeout(600);
      const p = await page.evaluate(() => t.paint());
      await page.context().close(); // an open page keeps drawing, which makes the next one slow
      check(p.colours > 30 && p.lit > 0.5, `${cam} view: ${p.colours} colours, ${Math.round(p.lit * 100)}% lit`);
    }
  },
  'the page fits a laptop screen, a projector and a large display': async () => {
    for (const viewport of [
      { width: 1280, height: 720 },
      { width: 1366, height: 768 },
      { width: 1440, height: 900 },
      { width: 1920, height: 1080 },
      { width: 1024, height: 768 },
    ]) {
      const size = `${viewport.width}×${viewport.height}`;
      const front = await openAt('', { viewport, wait: isReady });
      check(await front.page.evaluate(() => t.inside('.levels label, #start, #welcome h1')), `${size}: the welcome screen does not fit`);
      check(
        await front.page.evaluate(() => document.documentElement.scrollWidth <= innerWidth && document.documentElement.scrollHeight <= innerHeight),
        `${size}: the welcome screen scrolls`,
      );
      await front.page.context().close();
      const { page } = await openAt('?skip&level=master', { viewport });
      check(
        await page.evaluate(() => t.inside('#panel, #command, #form button, .tools button, #level, #moves, #status')),
        `${size}: the game panel does not fit`,
      );
      check(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth && document.documentElement.scrollHeight <= innerHeight),
        `${size}: the game view scrolls`,
      );
      check(
        await page.evaluate(() => ((c) => c.clientWidth === innerWidth && c.clientHeight === innerHeight)(document.getElementById('stage'))),
        `${size}: the canvas does not fill the window`,
      );
      await playOut(page);
      await page.locator('#win').waitFor({ state: 'visible' });
      check(await page.evaluate(() => t.inside('#win, #win button')), `${size}: the win card does not fit`);
      await page.context().close();
    }
  },
  'a missing puzzle file or solver shows Could not load, and Start stays off': async () => {
    trouble.expected = true;
    const failed = () => document.getElementById('start').textContent === 'Could not load';
    for (const [file, message] of [
      ['**/puzzles*.json', 'BOARD Loading failed: puzzles.json: HTTP 500'],
      ['**/worker*.js', 'BOARD Loading failed: the solver stopped'],
    ]) {
      const { page } = await openAt('', { before: (page) => page.route(file, (route) => route.fulfill({ status: 500, body: 'no' })), wait: failed });
      check(await page.locator('#start').isDisabled(), file + ': Start is active');
      check(
        (await lines(page)).some((l) => l.startsWith(message)),
        `${file}: the panel says: ${(await lines(page)).join(' / ')}`,
      );
      await page.context().close();
    }
  },
};

const only = process.argv[2],
  chosen = Object.entries(tests).filter(([name]) => !only || name.includes(only));
if (!chosen.length) {
  console.error(`No test has "${only}" in its name. The match is case-sensitive.`);
  server.kill();
  process.exit(1);
}
let failed = 0;
try {
  browser = await chromium.launch();
  for (const [name, run] of chosen) {
    trouble.list = [];
    trouble.expected = false;
    try {
      await run();
      if (!trouble.expected && trouble.list.length) throw new Error(trouble.list.join('; '));
      console.log('pass  ' + name);
    } catch (err) {
      failed++;
      // The line of this file that failed tells which step of a scenario it was.
      const at = err.stack?.match(/flow\.js:(\d+)/)?.[1];
      console.log('FAIL  ' + name + '\n      ' + err.message.split('\n')[0] + (at ? ' (flow.js line ' + at + ')' : ''));
    }
    for (const c of browser.contexts()) await c.close();
  }
} finally {
  await browser?.close();
  server.kill();
}
console.log(`${chosen.length - failed} pass, ${failed} fail`);
process.exit(failed ? 1 : 0);
