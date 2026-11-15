// Puzzle engine, ported from 261113Demo.html. Same rules and generation, no rendering.
// A puzzle is {N, exitRow, meta}; a state is an array of positions along each car's axis.

export const RED = '#d8232f';
export const NAMES = [['blue', '#1f5fd6'], ['yellow', '#f0c419'], ['green', '#1f8a43'], ['purple', '#6d34b8'], ['orange', '#ee7a17'], ['pink', '#f57fb3'], ['cyan', '#22bfd1'], ['brown', '#6b3f22'], ['white', '#e9e7e2'], ['gray', '#7d828c'], ['lime', '#a4d321'], ['black', '#1c1c20']];
export const LV = {
  easy: { N: 6, min: 4, max: 10, cars: 7, len: [2, 3] },
  normal: { N: 6, min: 11, max: 25, cars: 10, len: [2, 3] },
  hard: { N: 8, min: 26, max: 45, cars: 11, len: [2, 4] },
  expert: { N: 8, min: 46, max: 99, cars: 12, len: [2, 4] },
};
const LIMIT = 150000;
const rnd = (n) => Math.floor(Math.random() * n);

export function grid(z, p) {
  const { N, meta } = z, g = new Int8Array(N * N).fill(-1);
  meta.forEach((m, i) => {
    for (let k = 0; k < m.len; k++) {
      const x = m.axis == 'h' ? p[i] + k : m.lane, y = m.axis == 'h' ? m.lane : p[i] + k;
      g[y * N + x] = i;
    }
  });
  return g;
}
export function free(z, g, m, at) {
  if (at < 0 || at >= z.N) return false;
  const x = m.axis == 'h' ? at : m.lane, y = m.axis == 'h' ? m.lane : at;
  return g[y * z.N + x] < 0;
}
function nbrs(z, p) {
  const g = grid(z, p), o = [];
  z.meta.forEach((m, i) => {
    if (free(z, g, m, p[i] - 1)) o.push([i, -1]);
    if (free(z, g, m, p[i] + m.len)) o.push([i, 1]);
  });
  return o;
}
// Explore the whole reachable component, then multi-source BFS from every winning state:
// exact minimum moves for all states.
export function analyze(z, p0, limit = LIMIT) {
  const S = [p0], idx = new Map([[p0.join(), 0]]);
  for (let h = 0; h < S.length; h++) {
    if (S.length >= limit) return null;
    for (const [i, d] of nbrs(z, S[h])) {
      const q = S[h].slice(); q[i] += d;
      const k = q.join();
      if (!idx.has(k)) { idx.set(k, S.length); S.push(q); }
    }
  }
  const D = new Int16Array(S.length).fill(-1), par = new Int32Array(S.length).fill(-1), Q = [];
  S.forEach((p, i) => { if (p[0] == z.N - 2) { D[i] = 0; Q.push(i); } });
  for (let h = 0; h < Q.length; h++) {
    const u = Q[h];
    for (const [i, d] of nbrs(z, S[u])) {
      const q = S[u].slice(); q[i] += d;
      const v = idx.get(q.join());
      if (D[v] < 0) { D[v] = D[u] + 1; par[v] = u; Q.push(v); }
    }
  }
  return { S, D, par };
}
export function pathFrom(a, v) {
  const path = [];
  for (let u = v; a.par[u] >= 0; u = a.par[u]) {
    const w = a.par[u], i = a.S[u].findIndex((x, k) => x !== a.S[w][k]);
    path.push([i, a.S[w][i] - a.S[u][i]]);
  }
  return path;
}
export function slides(path) {
  let n = 0, pi = -9, pd = 0;
  for (const [i, d] of path) { if (i !== pi || d !== pd) n++; pi = i; pd = d; }
  return n;
}
export function generate(key) {
  const c = LV[key], N = c.N, exitRow = N == 6 ? 2 : 3, t0 = performance.now();
  const red = () => ({ id: 'red', len: 2, axis: 'h', lane: exitRow, color: RED });
  let best = null, gap = 1e9;
  while (performance.now() - t0 < 4000 && gap > 0) {
    const meta = [red()], p = [N - 2], occ = new Set([(N - 2) + ',' + exitRow, (N - 1) + ',' + exitRow]);
    for (const [id, color] of NAMES.slice().sort(() => Math.random() - .5)) {
      if (meta.length > c.cars) break;
      for (let t = 0; t < 40; t++) {
        const axis = Math.random() < .5 ? 'v' : 'h', len = c.len[0] + rnd(c.len[1] - c.len[0] + 1), lane = rnd(N), at = rnd(N - len + 1);
        const cells = [...Array(len)].map((_, k) => axis == 'h' ? [at + k, lane] : [lane, at + k]);
        if (cells.some(([x, y]) => occ.has(x + ',' + y))) continue;
        cells.forEach(([x, y]) => occ.add(x + ',' + y));
        meta.push({ id, len, axis, lane, color }); p.push(at); break;
      }
    }
    if (meta.length < c.cars) continue;
    const z = { N, exitRow, meta }, a = analyze(z, p);
    if (!a) continue;
    const cand = [];
    a.D.forEach((d, i) => { if (d + 1 >= c.min && d + 1 <= c.max) cand.push(i); });
    let pick = -1;
    if (cand.length) pick = cand[rnd(cand.length)];
    else { let m = -1; a.D.forEach((d, i) => { if (d > m) { m = d; pick = i; } }); }
    const d = a.D[pick] + 1, g = d < c.min ? c.min - d : d > c.max ? d - c.max : 0;
    if (g < gap) { gap = g; best = { N, exitRow, meta, start: a.S[pick].slice(), path: pathFrom(a, pick), states: a.S.length, inRange: g == 0 }; }
  }
  return best ?? { N, exitRow, meta: [red()], start: [0], path: [], states: 1, inRange: false };
}
// Next move of a shortest solution from p, or null when the search is too large.
// [] means the red car is at the exit already.
export function hint(z, p) {
  const a = analyze(z, p);
  return a ? pathFrom(a, 0).slice(0, 1) : null;
}
