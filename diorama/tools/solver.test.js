// Run with: bun test
import { test, expect } from 'bun:test';
import { readFileSync } from 'node:fs';
import { analyze, slides } from '../src/solver.js';
import { LEVELS, expand, pathOpen, slide } from '../src/engine.js';

// Plain reference search with string keys, kept simple on purpose.
function reference(z, start) {
  const { N, meta } = z,
    walls = new Set(z.walls ?? []);
  const moves = (p) => {
    const g = new Set(walls),
      out = [];
    meta.forEach((m, i) => {
      for (let k = 0; k < m.len; k++) g.add(m.axis === 'h' ? m.lane * N + p[i] + k : (p[i] + k) * N + m.lane);
    });
    meta.forEach((m, i) => {
      for (const [at, d] of [
        [p[i] - 1, -1],
        [p[i] + m.len, 1],
      ]) {
        if (at < 0 || at >= N) continue;
        if (!g.has(m.axis === 'h' ? m.lane * N + at : at * N + m.lane)) {
          const q = p.slice();
          q[i] += d;
          out.push(q);
        }
      }
    });
    return out;
  };
  const seen = new Map([[start.join(), 0]]);
  let layer = [start];
  for (let d = 0; layer.length; d++) {
    if (layer.some((p) => p[0] === N - 2)) return { dist: d, count: null };
    const next = [];
    for (const p of layer)
      for (const q of moves(p))
        if (!seen.has(q.join())) {
          seen.set(q.join(), d + 1);
          next.push(q);
        }
    layer = next;
  }
  return { dist: -1, count: seen.size };
}

// Board text: one letter per vehicle, A is the red car, x is a wall, . or o is empty.
function parse(text) {
  const N = Math.sqrt(text.length),
    cells = new Map(),
    walls = [];
  [...text].forEach((ch, i) => {
    if (ch === 'x') walls.push(i);
    else if (ch !== '.' && ch !== 'o') cells.set(ch, [...(cells.get(ch) ?? []), i]);
  });
  const ids = [...cells.keys()].sort(),
    meta = [],
    start = [];
  for (const id of ids) {
    const c = cells.get(id),
      h = c[1] - c[0] === 1;
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
  let seed = 7;
  const rnd = (n) => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return Math.floor((seed / 2147483648) * n);
  };
  let solved = 0;
  for (let t = 0; t < 300; t++) {
    const N = 5 + rnd(3),
      exitRow = rnd(N),
      occ = new Set(),
      meta = [{ axis: 'h', lane: exitRow, len: 2 }],
      start = [rnd(N - 2)];
    occ.add(exitRow * N + start[0]);
    occ.add(exitRow * N + start[0] + 1);
    const walls = [];
    for (let w = rnd(3); w > 0; w--) {
      const c = rnd(N * N);
      if (!occ.has(c)) {
        occ.add(c);
        walls.push(c);
      }
    }
    for (let v = 3 + rnd(7); v > 0; v--) {
      const axis = rnd(2) ? 'h' : 'v',
        len = 2 + rnd(2),
        lane = rnd(N),
        at = rnd(N - len + 1);
      const cells = [...Array(len)].map((_, k) => (axis === 'h' ? lane * N + at + k : (at + k) * N + lane));
      if (cells.some((c) => occ.has(c))) continue;
      cells.forEach((c) => occ.add(c));
      meta.push({ axis, lane, len });
      start.push(at);
    }
    const z = { N, exitRow, meta, walls },
      a = analyze(z, start, 200000),
      r = reference(z, start);
    if (!a) continue;
    expect(a.solvable ? a.dist(start) : -1).toBe(r.dist);
    if (!a.solvable) expect(a.count).toBe(r.count);
    else {
      solved++;
      expect(a.path(start).length).toBe(r.dist);
    }
  }
  expect(solved).toBeGreaterThan(50);
});

test('a counted move stops at a vehicle, a planter and the lot edge, and reports the exit', () => {
  // A is the red car in row 1. B is vertical in column 4. C is vertical in column 0 over a planter.
  const { z, start } = parse('C...B.' + 'CAA.B.' + 'x.....' + '......' + '......' + '......');
  const [A, B, C] = [0, 1, 2];
  let p = start.slice();
  expect(slide(z, p, A, 1, 5)).toEqual({ done: 1, exit: false }); // stops at B
  expect(p[A]).toBe(2);
  expect(slide(z, p, A, -1, 7)).toEqual({ done: 1, exit: false }); // stops at C
  expect(slide(z, p, C, 1, 1)).toEqual({ done: 0, exit: false }); // the planter blocks C
  expect(slide(z, p, C, -1, 1)).toEqual({ done: 0, exit: false }); // the lot edge blocks C
  expect(slide(z, p, B, 1, 7)).toEqual({ done: 4, exit: false }); // B runs to the far edge
  expect(p[B]).toBe(4);
  expect(slide(z, p, A, 1, 7)).toEqual({ done: 3, exit: true }); // three cells to the exit, then out
  expect(p[A]).toBe(4);
  expect(slide(z, p, A, 1, 1)).toEqual({ done: 0, exit: true });
  expect(p).toEqual([4, 4, 0]);
});

test('the way out is open only when no vehicle or planter stands between the red car and the exit', () => {
  const { z, start } = parse('....B.' + 'AA..B.' + '......' + '......' + '......' + '......');
  const p = start.slice();
  expect(pathOpen(z, p)).toBe(false); // B stands in the row
  slide(z, p, 1, 1, 1);
  expect(pathOpen(z, p)).toBe(false); // B still covers the row
  slide(z, p, 1, 1, 1);
  expect(pathOpen(z, p)).toBe(true);
  const planter = parse('......' + 'AA...x' + '......' + '......' + '......' + '......');
  expect(pathOpen(planter.z, planter.start)).toBe(false);
  const atEdge = parse('......' + '....AA' + '......' + '......' + '......' + '......');
  expect(pathOpen(atEdge.z, atEdge.start)).toBe(true);
});

test('every puzzle in the bank is inside its level range and matches its record', () => {
  const bank = JSON.parse(readFileSync(new URL('../src/puzzles.json', import.meta.url)));
  for (const [key, level] of Object.entries(LEVELS)) {
    expect(bank[key].length).toBeGreaterThanOrEqual(20);
    const seen = new Set();
    for (const entry of bank[key]) {
      for (const flip of [false, true]) {
        const z = expand(entry, { flip, random: () => 0.5 }),
          a = analyze(z, z.start);
        expect(z.N).toBe(level.N);
        expect(a.solvable).toBe(true);
        expect(a.dist(z.start) + 1).toBe(entry.moves);
        expect(a.count).toBe(entry.states);
        // The walk model takes seconds on the 7×7 and 8×8 boards, so only the 6×6 levels are recomputed.
        if (level.N === 6 && !flip) expect(Math.round(a.effort(z.start))).toBe(entry.effort);
      }
      expect(entry.effort).toBeGreaterThanOrEqual(entry.moves);
      expect(entry.moves).toBeGreaterThanOrEqual(level.min);
      expect(entry.moves).toBeLessThanOrEqual(level.max);
      expect(entry.v.length).toBeLessThanOrEqual(13);
      // The key of the bank picker: a layout counts once, in any vehicle order and from any start.
      seen.add(JSON.stringify([entry.v.map((v) => v.slice(0, 3).join()).sort(), entry.w]));
    }
    expect(seen.size).toBe(bank[key].length);
  }
}, 300000); // every entry is solved twice, which takes some seconds

// The walk model of Jarušek and Pelánek: a neighbour closer to the exit has weight d + 25, any
// other neighbour has weight d, where d is the distance of the current position.
test('the walk model of a lone red car matches the closed form of a chain', () => {
  // Positions 0..4 form a chain. T[d] is the expected time from distance d to distance d - 1.
  const q = (d) => d / (2 * d + 25),
    T = [0, 0, 0, 0, 1];
  for (let d = 3; d >= 1; d--) T[d] = (1 + q(d) * T[d + 1]) / (1 - q(d));
  const z = { N: 6, meta: [{ axis: 'h', lane: 2, len: 2 }], walls: [] };
  expect(analyze(z, [0]).effort([0])).toBeCloseTo(T[1] + T[2] + T[3] + T[4] + 1, 6);
  expect(analyze(z, [0]).effort([4])).toBe(1); // at the exit only the exit move is left
});

test('the walk model matches a direct solution of its linear equations', () => {
  // Three vehicles: the red car and two that cross its row.
  const z = {
      N: 6,
      meta: [
        { axis: 'h', lane: 2, len: 2 },
        { axis: 'v', lane: 3, len: 3 },
        { axis: 'v', lane: 5, len: 2 },
      ],
      walls: [7],
    },
    start = [0, 1, 2];
  const a = analyze(z, start),
    states = [start],
    index = new Map([[start.join(), 0]]),
    links = [];
  for (let h = 0; h < states.length; h++) {
    links.push([]);
    z.meta.forEach((_, i) => {
      for (const d of [-1, 1]) {
        const p = states[h].slice();
        const moved = slide(z, p, i, d, 1);
        if (!moved.done || moved.exit) continue;
        if (!index.has(p.join())) {
          index.set(p.join(), states.length);
          states.push(p);
        }
        links[h].push(index.get(p.join()));
      }
    });
  }
  expect(states.length).toBe(a.count);
  // Row u: E[u] - sum of P(u, v) E[v] = 1, and E = 0 at the exit. Solve by Gauss-Jordan elimination.
  const n = states.length,
    dist = states.map((p) => a.dist(p)),
    M = states.map(() => new Float64Array(n + 1));
  for (let u = 0; u < n; u++) {
    M[u][u] = 1;
    if (!dist[u]) continue;
    const w = links[u].map((v) => (dist[v] < dist[u] ? dist[u] + 25 : dist[u])),
      sum = w.reduce((x, y) => x + y, 0);
    links[u].forEach((v, k) => {
      M[u][v] -= w[k] / sum;
    });
    M[u][n] = 1;
  }
  for (let c = 0; c < n; c++) {
    let best = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[best][c])) best = r;
    [M[c], M[best]] = [M[best], M[c]];
    for (let r = 0; r < n; r++)
      if (r !== c && M[r][c]) {
        const f = M[r][c] / M[c][c];
        for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k];
      }
  }
  expect(n).toBeGreaterThan(30);
  expect(a.effort(start)).toBeCloseTo(M[0][n] / M[0][0] + 1, 5);
});
