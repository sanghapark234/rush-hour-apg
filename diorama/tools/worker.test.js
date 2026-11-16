// Tests for the solver worker (src/worker.js). The test stands in for the page: it sends the
// messages and collects the answers.
import { test, expect } from 'bun:test';
import { expand, grid } from '../src/engine.js';
import bank from '../src/puzzles.json';

const answers = [];
globalThis.postMessage = (m) => answers.push(m);
await import('../src/worker.js');
const send = (data) => {
  globalThis.onmessage({ data });
  return answers.at(-1);
};
const good = expand(bank.easy[0]);
// The same lot with a planter in the exit cell: the red car cannot leave.
const shut = expand(bank.easy.find((e) => grid(expand(e), expand(e).start)[expand(e).exitRow * e.N + e.N - 1] === -1));
shut.walls = [...shut.walls, shut.exitRow * shut.N + shut.N - 1];

test('a hint before a puzzle is loaded is null', () => {
  expect(send({ id: 1, type: 'hint', pos: good.start, last: null })).toEqual({ id: 1, result: null });
});
test('a loaded puzzle gives a hint with the moves to go', () => {
  expect(send({ id: 2, type: 'load', puzzle: good })).toEqual({ id: 2, result: true });
  const { result } = send({ id: 3, type: 'hint', pos: good.start, last: null });
  expect(result.left).toBe(good.moves);
  expect(result.move).toHaveLength(2);
});
test('a puzzle without a solution is refused, and the hints stay those of the puzzle in play', () => {
  const before = send({ id: 4, type: 'hint', pos: good.start, last: null });
  expect(send({ id: 5, type: 'load', puzzle: shut })).toEqual({ id: 5, result: false });
  expect(send({ id: 6, type: 'hint', pos: good.start, last: null }).result).toEqual(before.result);
});
test('a request that fails answers with an error, and the next request works', () => {
  // Without a start the solver fails after it cleared its buffers, which the old table used.
  const bad = send({ id: 7, type: 'load', puzzle: { ...good, start: null } });
  expect(bad.id).toBe(7);
  expect(typeof bad.error).toBe('string');
  expect(send({ id: 8, type: 'hint', pos: good.start, last: null }).result.left).toBe(good.moves);
});
