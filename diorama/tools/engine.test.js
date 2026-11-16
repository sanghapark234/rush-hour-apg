// Property tests for the rules (src/engine.js): random play on bank puzzles keeps the board valid.
import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { LEVELS, WALL, expand, grid, slide, pathOpen } from '../src/engine.js';
import { analyze } from '../src/solver.js';

const bank = JSON.parse(readFileSync(new URL('../src/puzzles.json', import.meta.url)));
// A small random generator with a seed, so a failure can be repeated.
function seeded(seed) {
  let s = seed >>> 0;
  return () => ((s = (Math.imul(s, 1664525) + 1013904223) >>> 0), s / 2 ** 32);
}

test('random moves keep every vehicle on the lot, apart from the others, and a move back restores the position', () => {
  const random = seeded(20261116);
  for (const key of Object.keys(LEVELS))
    for (const entry of bank[key].filter((_, n) => n % 8 === 0)) {
      const z = expand(entry, { flip: random() < 0.5, random }),
        p = z.start.slice(),
        filled = z.walls.length + z.meta.reduce((n, m) => n + m.len, 0);
      for (let step = 0; step < 400; step++) {
        const i = Math.floor(random() * z.meta.length),
          d = random() < 0.5 ? 1 : -1,
          count = 1 + Math.floor(random() * 7),
          before = p.slice();
        const { done, exit } = slide(z, p, i, d, count);
        expect(done).toBeLessThanOrEqual(count);
        expect(p[i]).toBe(before[i] + d * done);
        p.forEach((at, k) => {
          if (k !== i) expect(at).toBe(before[k]);
          expect(at).toBeGreaterThanOrEqual(0);
          expect(at + z.meta[k].len).toBeLessThanOrEqual(z.N);
        });
        // grid() writes each vehicle over the cells, so an overlap would leave fewer filled cells.
        const g = grid(z, p);
        expect(g.filter((c) => c !== -1).length).toBe(filled);
        for (const w of z.walls) expect(g[w]).toBe(WALL);
        if (exit) expect(i === 0 && d > 0 && p[0] + z.meta[0].len === z.N).toBe(true);
        // The same number of cells back is always free.
        const back = p.slice();
        expect(slide(z, back, i, -d, done).done).toBe(done);
        expect(back).toEqual(before);
      }
    }
});

test('the way out is open exactly when the red car can reach the edge by itself', () => {
  const random = seeded(7);
  for (const entry of [...bank.easy, ...bank.medium].filter((_, n) => n % 4 === 0)) {
    const z = expand(entry, { random }),
      p = z.start.slice();
    for (let step = 0; step < 200; step++) {
      slide(z, p, Math.floor(random() * z.meta.length), random() < 0.5 ? 1 : -1, 1);
      const q = p.slice(),
        reach = z.N - z.meta[0].len - p[0];
      expect(pathOpen(z, p)).toBe(slide(z, q, 0, 1, reach).done === reach);
    }
  }
});

test('a player that always takes a move closer to the exit clears each level in the shortest number of moves', () => {
  for (const key of ['easy', 'medium', 'hard'])
    for (const entry of bank[key].filter((_, n) => n % 10 === 0)) {
      const z = expand(entry),
        table = analyze(z, z.start),
        p = z.start.slice();
      let moves = 0;
      for (let out = false; !out;) {
        const here = table.dist(p);
        let moved = false;
        for (let i = 0; i < z.meta.length && !moved; i++)
          for (const d of [1, -1]) {
            const q = p.slice(),
              { done, exit } = slide(z, q, i, d, 1);
            if (exit) {
              out = moved = true;
              moves++;
              break;
            }
            if (done && table.dist(q) < here) {
              p[i] = q[i];
              moves++;
              moved = true;
              break;
            }
          }
        expect(moved).toBe(true);
      }
      expect(moves).toBe(entry.moves);
    }
});
