/* Rush Hour Live 3D — puzzle engine
 * Board state, move legality, exact BFS analysis, and puzzle generation.
 * Pure logic: no DOM or three.js dependencies. Loaded before scene.js and game.js.
 */

const rnd = n => Math.floor(Math.random() * n);

const NAMES = [
  ['blue', '#2f6fe0'], ['yellow', '#f2d12e'], ['green', '#2e9e4f'],
  ['purple', '#7c3fc8'], ['orange', '#f08a24'], ['pink', '#ff8fc0'],
  ['cyan', '#35d0e0'], ['brown', '#7a4a2b'], ['white', '#ecebf0'],
  ['gray', '#8c909c'], ['lime', '#b8e03a'], ['black', '#25252b']
];

const LV = {
  easy:   { N: 6, min: 4,  max: 10, cars: 7,  len: [2, 3] },
  normal: { N: 6, min: 11, max: 25, cars: 10, len: [2, 3] },
  hard:   { N: 8, min: 26, max: 45, cars: 11, len: [2, 4] },
  expert: { N: 8, min: 46, max: 99, cars: 12, len: [2, 4] }
};

// Board state shared across modules (classic scripts share the global scope).
let N = 6, exitRow = 2, meta = [], start = [], pos = [], info = null;

/* ---------- board helpers (positions along each car axis) ---------- */

function grid(p) {
  const g = new Int8Array(N * N).fill(-1);
  meta.forEach((m, i) => {
    for (let k = 0; k < m.len; k++) {
      const x = m.axis == 'h' ? p[i] + k : m.lane;
      const y = m.axis == 'h' ? m.lane : p[i] + k;
      g[y * N + x] = i;
    }
  });
  return g;
}

function free(g, m, at) {
  if (at < 0 || at >= N) return false;
  const x = m.axis == 'h' ? at : m.lane;
  const y = m.axis == 'h' ? m.lane : at;
  return g[y * N + x] < 0;
}

function nbrs(p) {
  const g = grid(p), o = [];
  meta.forEach((m, i) => {
    if (free(g, m, p[i] - 1)) o.push([i, -1]);
    if (free(g, m, p[i] + m.len)) o.push([i, 1]);
  });
  return o;
}

function clear(p) {
  const g = grid(p);
  for (let x = p[0] + 2; x < N; x++) if (g[exitRow * N + x] >= 0) return false;
  return true;
}

/* ---------- exact analysis ----------
 * Explore the whole reachable component, then multi-source BFS from every
 * winning state: exact minimum moves for all states.
 */
function analyze(p0, limit) {
  const S = [p0], idx = new Map([[p0.join(), 0]]);
  for (let h = 0; h < S.length; h++) {
    if (S.length >= limit) return null;
    for (const [i, d] of nbrs(S[h])) {
      const q = S[h].slice();
      q[i] += d;
      const k = q.join();
      if (!idx.has(k)) { idx.set(k, S.length); S.push(q); }
    }
  }
  const D = new Int16Array(S.length).fill(-1), par = new Int32Array(S.length).fill(-1), Q = [];
  S.forEach((p, i) => { if (p[0] == N - 2) { D[i] = 0; Q.push(i); } });
  for (let h = 0; h < Q.length; h++) {
    const u = Q[h];
    for (const [i, d] of nbrs(S[u])) {
      const q = S[u].slice();
      q[i] += d;
      const v = idx.get(q.join());
      if (D[v] < 0) { D[v] = D[u] + 1; par[v] = u; Q.push(v); }
    }
  }
  return { S, D, par };
}

function pathFrom(a, v) {
  const path = [];
  for (let u = v; a.par[u] >= 0; u = a.par[u]) {
    const w = a.par[u];
    const i = a.S[u].findIndex((x, k) => x !== a.S[w][k]);
    path.push([i, a.S[w][i] - a.S[u][i]]);
  }
  return path;
}

function slides(path) {
  let n = 0, pi = -9, pd = 0;
  for (const [i, d] of path) { if (i !== pi || d !== pd) n++; pi = i; pd = d; }
  return n;
}

/* ---------- generation ----------
 * Place the red car in the winning spot, add random vehicles, then pick a
 * random state in the reachable component whose exact distance matches the
 * requested difficulty band.
 */
function generate(key) {
  const c = LV[key];
  N = c.N;
  exitRow = N == 6 ? 2 : 3;
  const t0 = performance.now();
  let best = null, gap = 1e9;

  while (performance.now() - t0 < 4000 && gap > 0) {
    meta = [{ id: 'red', len: 2, axis: 'h', lane: exitRow, color: '#e54857' }];
    const p = [N - 2], occ = new Set([(N - 2) + ',' + exitRow, (N - 1) + ',' + exitRow]);

    for (const [id, color] of NAMES.slice().sort(() => Math.random() - .5)) {
      if (meta.length > c.cars) break;
      for (let t = 0; t < 40; t++) {
        const axis = Math.random() < .5 ? 'v' : 'h';
        const len = c.len[0] + rnd(c.len[1] - c.len[0] + 1);
        const lane = rnd(N);
        const at = rnd(N - len + 1);
        const cells = [...Array(len)].map((_, k) => axis == 'h' ? [at + k, lane] : [lane, at + k]);
        if (cells.some(([x, y]) => occ.has(x + ',' + y))) continue;
        cells.forEach(([x, y]) => occ.add(x + ',' + y));
        meta.push({ id, len, axis, lane, color });
        p.push(at);
        break;
      }
    }
    if (meta.length < c.cars) continue;

    const a = analyze(p, 150000);
    if (!a) continue;

    const cand = [];
    a.D.forEach((d, i) => { if (d + 1 >= c.min && d + 1 <= c.max) cand.push(i); });
    let pick = -1;
    if (cand.length) pick = cand[rnd(cand.length)];
    else {
      let m = -1;
      a.D.forEach((d, i) => { if (d > m) { m = d; pick = i; } });
    }

    const d = a.D[pick] + 1, g = d < c.min ? c.min - d : d > c.max ? d - c.max : 0;
    if (g < gap) {
      gap = g;
      best = { meta, p: a.S[pick], path: pathFrom(a, pick), states: a.S.length, inRange: g == 0 };
    }
  }

  if (!best) {
    meta = [{ id: 'red', len: 2, axis: 'h', lane: exitRow, color: '#e54857' }];
    best = { meta, p: [0], path: [], states: 1, inRange: false };
  }
  meta = best.meta;
  start = best.p.slice();
  info = best;
}
