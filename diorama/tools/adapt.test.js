import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { START, STEP, ladder, verdict, step, choose } from '../src/adapt.js';

const bank = JSON.parse(readFileSync(new URL('../src/puzzles.json', import.meta.url)));

test('the ladder holds every bank puzzle, easiest first', () => {
  const l = ladder(bank);
  expect(l.length).toBe(Object.values(bank).flat().length);
  for (let i = 1; i < l.length; i++) expect(l[i].moves).toBeGreaterThanOrEqual(l[i - 1].moves);
});

test('the verdict follows extra moves, hints and giving up', () => {
  expect(verdict({ solved: true, moves: 20, best: 20, hints: 0 })).toBe(1);
  expect(verdict({ solved: true, moves: 30, best: 20, hints: 2 })).toBe(1);
  expect(verdict({ solved: true, moves: 40, best: 20, hints: 0 })).toBe(0);
  expect(verdict({ solved: true, moves: 22, best: 20, hints: 4 })).toBe(0);
  expect(verdict({ solved: true, moves: 51, best: 20, hints: 0 })).toBe(-1);
  expect(verdict({ solved: true, moves: 20, best: 20, hints: 7 })).toBe(-1);
  expect(verdict({ solved: false })).toBe(-1);
});

test('the skill moves one step and stays between 0 and 1', () => {
  expect(step(START, 1)).toBeCloseTo(START + STEP);
  expect(step(START, 0)).toBe(START);
  expect(step(0.03, -1)).toBe(0);
  expect(step(0.97, 1)).toBe(1);
});

test('the choice is near the skill and does not repeat until all were played', () => {
  const count = 143, played = new Set(), seen = [];
  for (let k = 0; k < count; k++) { const i = choose(count, 0.5, played); expect(played.has(i)).toBe(false); played.add(i); seen.push(i); }
  expect(new Set(seen).size).toBe(count);
  expect(Math.abs(seen[0] - 71)).toBeLessThanOrEqual(2); // one of the 5 nearest
  for (const i of seen.slice(0, 5)) expect(Math.abs(i - 71)).toBeLessThanOrEqual(6);
  expect(choose(count, 0, played, () => 0)).toBe(0); // the set was full, so it starts again
  expect(played.size).toBe(0);
  expect(choose(count, 1, new Set(), () => 0)).toBe(count - 1);
});

test('a strong audience reaches harder puzzles and a weak one easier puzzles', () => {
  const l = ladder(bank);
  const run = (result) => {
    let skill = 0.5; const played = new Set(), moves = [];
    for (let k = 0; k < 6; k++) { const i = choose(l.length, skill, played, () => 0); played.add(i); moves.push(l[i].moves); skill = step(skill, verdict(result(l[i]))); }
    return moves;
  };
  const up = run((e) => ({ solved: true, moves: e.moves, best: e.moves, hints: 0 }));
  const down = run(() => ({ solved: false }));
  expect(up.at(-1)).toBeGreaterThan(up[0]);
  expect(down.at(-1)).toBeLessThan(down[0]);
});
