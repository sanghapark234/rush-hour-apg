// Run with: bun test
import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { analyze, slides } from '../src/solver.js';
import { LEVELS, expand } from '../src/engine.js';

// Plain reference search with string keys, kept simple on purpose.
function reference(z, start) {
  const { N, meta } = z, walls = new Set(z.walls ?? []);
  const moves = (p) => {
    const g = new Set(walls), out = [];
    meta.forEach((m, i) => { for (let k = 0; k < m.len; k++) g.add(m.axis === 'h' ? m.lane * N + p[i] + k : (p[i] + k) * N + m.lane); });
    meta.forEach((m, i) => {
      for (const [at, d] of [[p[i] - 1, -1], [p[i] + m.len, 1]]) {
        if (at < 0 || at >= N) continue;
        if (!g.has(m.axis === 'h' ? m.lane * N + at : at * N + m.lane)) { const q = p.slice(); q[i] += d; out.push(q); }
      }
    });
    return out;
  };
  const seen = new Map([[start.join(), 0]]);
  let layer = [start];
  for (let d = 0; layer.length; d++) {
    if (layer.some((p) => p[0] === N - 2)) return { dist: d, count: null };
    const next = [];
    for (const p of layer) for (const q of moves(p)) if (!seen.has(q.join())) { seen.set(q.join(), d + 1); next.push(q); }
    layer = next;
  }
  return { dist: -1, count: seen.size };
}

// Board text: one letter per vehicle, A is the red car, x is a wall, . or o is empty.
function parse(text) {
  const N = Math.sqrt(text.length), cells = new Map(), walls = [];
  [...text].forEach((ch, i) => { if (ch === 'x') walls.push(i); else if (ch !== '.' && ch !== 'o') cells.set(ch, [...(cells.get(ch) ?? []), i]); });
  const ids = [...cells.keys()].sort(), meta = [], start = [];
  for (const id of ids) {
    const c = cells.get(id), h = c[1] - c[0] === 1;
    meta.push({ axis: h ? 'h' : 'v', lane: h ? Math.floor(c[0] / N) : c[0] % N, len: c.length });
    start.push(h ? c[0] % N : Math.floor(c[0] / N));
  }
  return { z: { N, exitRow: meta[0].lane, meta, walls }, start };
}

test('a dense 6x6 position gives the same count as a plain search', () => {
  const { z, start } = parse('GBB.L.GHI.LMGHIAAMCCCK.M..JKDDEEJFF.');
  const a = analyze(z, start);
  expect(a.solvable).toBe(true);
  expect(a.dist(start)).toBe(reference(z, start).dist);
  expect(a.dist(start)).toBe(81);
  const path = a.path(start);
  expect(path.length).toBe(81);
  expect(slides(path)).toBeLessThan(81);
});

test('the solver agrees with a plain search on random boards', () => {
  let seed = 7; const rnd = (n) => { seed = (seed * 1103515245 + 12345) % 2147483648; return Math.floor(seed / 2147483648 * n); };
  let solved = 0;
  for (let t = 0; t < 300; t++) {
    const N = 5 + rnd(3), exitRow = rnd(N), occ = new Set(), meta = [{ axis: 'h', lane: exitRow, len: 2 }], start = [rnd(N - 2)];
    occ.add(exitRow * N + start[0]); occ.add(exitRow * N + start[0] + 1);
    const walls = []; for (let w = rnd(3); w > 0; w--) { const c = rnd(N * N); if (!occ.has(c)) { occ.add(c); walls.push(c); } }
    for (let v = 3 + rnd(7); v > 0; v--) {
      const axis = rnd(2) ? 'h' : 'v', len = 2 + rnd(2), lane = rnd(N), at = rnd(N - len + 1);
      const cells = [...Array(len)].map((_, k) => axis === 'h' ? lane * N + at + k : (at + k) * N + lane);
      if (cells.some((c) => occ.has(c))) continue;
      cells.forEach((c) => occ.add(c)); meta.push({ axis, lane, len }); start.push(at);
    }
    const z = { N, exitRow, meta, walls }, a = analyze(z, start, 200000), r = reference(z, start);
    if (!a) continue;
    expect(a.solvable ? a.dist(start) : -1).toBe(r.dist);
    if (!a.solvable) expect(a.count).toBe(r.count);
    else { solved++; expect(a.path(start).length).toBe(r.dist); }
  }
  expect(solved).toBeGreaterThan(50);
});

test('every puzzle in the bank is inside its level range and matches its record', () => {
  const bank = JSON.parse(readFileSync(new URL('../src/puzzles.json', import.meta.url)));
  for (const [key, level] of Object.entries(LEVELS)) {
    expect(bank[key].length).toBeGreaterThanOrEqual(20);
    const seen = new Set();
    for (const entry of bank[key]) {
      for (const flip of [false, true]) {
        const z = expand(entry, { flip, random: () => 0.5 }), a = analyze(z, z.start);
        expect(z.N).toBe(level.N);
        expect(a.solvable).toBe(true);
        expect(a.dist(z.start) + 1).toBe(entry.moves);
        expect(a.count).toBe(entry.states);
      }
      expect(entry.moves).toBeGreaterThanOrEqual(level.min);
      expect(entry.moves).toBeLessThanOrEqual(level.max);
      expect(entry.v.length).toBeLessThanOrEqual(13);
      seen.add(JSON.stringify([entry.v, entry.w]));
    }
    expect(seen.size).toBe(bank[key].length);
  }
}, 300000); // every entry is solved twice, which takes some seconds
