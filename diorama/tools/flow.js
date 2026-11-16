// Game-flow tests: they play the built game (dist/) in a headless Chromium through
// window.apg.command and window.apg.state, the same hook a chat bot uses.
// Run with: bun run test:flow   (builds first; needs `bunx playwright install chromium` once)
import { chromium } from 'playwright';
import { existsSync } from 'node:fs';

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
  };
  window.t = t;
};

async function open(level) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.addInitScript(inPage);
  await page.goto(`http://127.0.0.1:${port}/?skip&level=${level}`);
  await page.waitForFunction(() => document.body.dataset.phase === 'play' && window.apg.state().puzzle, null, { timeout: 120000 });
  return { page, errors };
}
function check(ok, what) {
  if (!ok) throw new Error(what);
}

const tests = {
  'a run along the hints is a perfect run, and the red car drives out by itself': async () => {
    const { page, errors } = await open('medium');
    const r = await page.evaluate(async () => {
      await t.follow();
      const s = window.apg.state();
      return { won: s.won, moves: s.moves, best: s.puzzle.moves, note: t.text('win-note'), watch: document.getElementById('watch').hidden, lines: t.lines() };
    });
    check(r.won, 'the puzzle is not cleared');
    check(r.moves === r.best, `moves ${r.moves}, shortest ${r.best}`);
    check(r.note.startsWith('A perfect run'), 'win note: ' + r.note);
    check(r.watch, 'a perfect run offers the solution replay');
    check(r.lines.includes('BOARD The way is open. RED drives out.'), 'the red car did not drive out by itself');
    check(!errors.length, errors.join('; '));
  },
  'invalid messages change nothing': async () => {
    const { page, errors } = await open('medium');
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
    check(!errors.length, errors.join('; '));
  },
  'giving up plays the shortest solution from the position, and it is not a win': async () => {
    const { page, errors } = await open('medium');
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
    check(!errors.length, errors.join('; '));
  },
  'stop ends a replay, and chat can go on to a win that names the replay moves': async () => {
    const { page, errors } = await open('medium');
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
    check(!errors.length, errors.join('; '));
  },
  'after a longer win, the win card replays the shortest solution from the start': async () => {
    const { page, errors } = await open('medium');
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
    check(!errors.length, errors.join('; '));
  },
  'on Auto, a give-up leads to a puzzle that is not harder': async () => {
    const { page, errors } = await open('auto');
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
    check(!errors.length, errors.join('; '));
  },
};

let failed = 0;
try {
  browser = await chromium.launch();
  for (const [name, run] of Object.entries(tests)) {
    try {
      await run();
      console.log('pass  ' + name);
    } catch (err) {
      failed++;
      console.log('FAIL  ' + name + '\n      ' + err.message.split('\n')[0]);
    }
    for (const c of browser.contexts()) await c.close();
  }
} finally {
  await browser?.close();
  server.kill();
}
console.log(`${Object.keys(tests).length - failed} pass, ${failed} fail`);
process.exit(failed ? 1 : 0);
