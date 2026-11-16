// Tests that the page, the game code and the README name the same things. A mismatch here
// breaks the game only in the browser, where the other unit tests do not look.
import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { LEVELS } from '../src/engine.js';

const read = (path) => readFileSync(new URL(path, import.meta.url), 'utf8');
const html = read('../index.html'),
  main = read('../src/main.js'),
  bank = JSON.parse(read('../src/puzzles.json'));
const names = [...Object.keys(LEVELS), 'auto'];

test('the level buttons and the level menu list every level in order, then Auto', () => {
  expect([...html.matchAll(/<input type="radio" name="level" value="(\w+)"/g)].map((m) => m[1])).toEqual(names);
  expect([...html.matchAll(/<option value="(\w+)"/g)].map((m) => m[1])).toEqual(names);
});

test('one level button is checked in the page, and it is the level that the game starts on', () => {
  const checked = [...html.matchAll(/name="level" value="(\w+)" checked/g)].map((m) => m[1]);
  expect(checked).toHaveLength(1);
  expect(main).toContain(`: '${checked[0]}';`);
});

test('the bank has the levels of the engine, each with 40 puzzles', () => {
  expect(Object.keys(bank)).toEqual(Object.keys(LEVELS));
  for (const key of Object.keys(LEVELS)) expect(bank[key]).toHaveLength(40);
});

test('the level ranges rise and do not overlap', () => {
  const ranges = Object.values(LEVELS);
  ranges.forEach((level, i) => {
    expect(level.min).toBeLessThanOrEqual(level.max);
    if (i) expect(level.min).toBeGreaterThan(ranges[i - 1].max);
  });
});

test('every element that the game code asks for by id is in the page', () => {
  const ids = new Set([...html.matchAll(/\sid="([\w-]+)"/g)].map((m) => m[1]));
  const asked = [...main.matchAll(/\$\('([\w-]+)'\)/g)].map((m) => m[1]);
  expect(asked.length).toBeGreaterThan(20);
  expect(asked.filter((id) => !ids.has(id))).toEqual([]);
});

test('the README names every level in its address parameter', () => {
  expect(read('../README.md')).toContain(`level=${names.join('|')}`);
});
