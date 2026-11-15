// Exact solver. It lists every position that the vehicles can reach from a start, then runs one
// breadth-first search backwards from all winning positions. The result holds the minimum number
// of one-cell moves from each reachable position, so hints are table lookups.
//
// A puzzle is {N, meta, walls}: meta[i] = {axis: 'h' | 'v', lane, len}, vehicle 0 is the red car
// (horizontal, length 2, in the exit row), walls is a list of blocked cells (y * N + x).
// A position is an array with each vehicle's offset along its lane. It is packed into one number
// with a mixed radix (N - len + 1 values per vehicle), which stays exact below 2^53.

let table = new Int32Array(1 << 12), codes = new Float64Array(1 << 11), dist = new Int16Array(1 << 11), queue = new Int32Array(1 << 11);

function slot(c, mask) {
  let h = Math.imul(((c % 4294967296) >>> 0) ^ Math.imul((c / 4294967296) | 0, 0x9e3779b1), 0x85ebca6b);
  h ^= h >>> 15;
  return Math.imul(h, 0xc2b2ae35) >>> 0 & mask;
}

// Returns null when more than `cap` positions are reachable. The returned object reuses module
// buffers: it is valid until the next call of analyze.
export function analyze(z, start, cap = 400000) {
  const { N, meta } = z, n = meta.length;
  const base = new Uint8Array(N * N); for (const w of z.walls ?? []) base[w] = 1;
  const occ = new Uint8Array(N * N), pos = new Uint8Array(n);
  const len = meta.map((m) => m.len), radix = len.map((l) => N - l + 1), mult = [];
  const step = meta.map((m) => m.axis === 'h' ? 1 : N), origin = meta.map((m) => m.axis === 'h' ? m.lane * N : m.lane);
  let total = 1; for (let i = 0; i < n; i++) { mult.push(total); total *= radix[i]; }
  if (total > Number.MAX_SAFE_INTEGER) throw new Error('too many vehicles to pack a position');

  let size = table.length; while (size < cap * 2 + 2) size *= 2;
  if (table.length < size) table = new Int32Array(size); else table.fill(0);
  if (codes.length < cap + 1) { codes = new Float64Array(cap + 1); dist = new Int16Array(cap + 1); queue = new Int32Array(cap + 1); }
  const mask = table.length - 1;

  const encode = (p) => { let c = 0; for (let i = 0; i < n; i++) c += p[i] * mult[i]; return c; };
  const decode = (c) => { for (let i = 0; i < n; i++) { pos[i] = c % radix[i]; c = Math.floor(c / radix[i]); } };
  const fill = () => { occ.set(base); for (let i = 0; i < n; i++) for (let k = 0, at = origin[i] + pos[i] * step[i]; k < len[i]; k++, at += step[i]) occ[at] = 1; };
  const find = (c) => { for (let s = slot(c, mask); ; s = (s + 1) & mask) { const v = table[s]; if (!v) return -1; if (codes[v - 1] === c) return v - 1; } };
  let count = 0;
  const visit = (c) => {
    for (let s = slot(c, mask); ; s = (s + 1) & mask) {
      const v = table[s];
      if (!v) { codes[count] = c; table[s] = ++count; return; }
      if (codes[v - 1] === c) return;
    }
  };
  // The neighbours of the decoded position: fn(code) for each one-cell move.
  const each = (c, fn) => {
    fill();
    for (let i = 0; i < n; i++) {
      const p = pos[i], o = origin[i], s = step[i];
      if (p > 0 && !occ[o + (p - 1) * s]) fn(c - mult[i], i, -1);
      if (p + len[i] < N && !occ[o + (p + len[i]) * s]) fn(c + mult[i], i, 1);
    }
  };

  const lo = Array.from(start), hi = Array.from(start);
  visit(encode(start));
  for (let h = 0; h < count; h++) {
    if (count > cap) return null;
    decode(codes[h]);
    for (let i = 0; i < n; i++) { if (pos[i] < lo[i]) lo[i] = pos[i]; if (pos[i] > hi[i]) hi[i] = pos[i]; }
    each(codes[h], visit);
  }
  if (count > cap) return null;

  dist.fill(-1, 0, count);
  let tail = 0;
  for (let i = 0; i < count; i++) if (codes[i] % radix[0] === N - 2) { dist[i] = 0; queue[tail++] = i; }
  for (let h = 0; h < tail; h++) {
    const u = queue[h], d = dist[u] + 1;
    decode(codes[u]);
    each(codes[u], (c) => { const v = find(c); if (dist[v] < 0) { dist[v] = d; queue[tail++] = v; } });
  }

  const api = {
    count, lo, hi,
    solvable: dist[0] >= 0,
    // Moves to bring the red car to the exit cell. The move that drives it out is not counted.
    dist: (p) => { const v = find(encode(p)); return v < 0 ? -1 : dist[v]; },
    // One move of a shortest solution: [vehicle, direction], or null at the exit or off the table.
    // It keeps the last vehicle and direction when a shortest solution allows it.
    next(p, last) {
      const c = encode(p), u = find(c);
      if (u < 0 || dist[u] <= 0) return null;
      let best = null;
      p.forEach((v, i) => { pos[i] = v; });
      each(c, (q, i, d) => { if (dist[find(q)] === dist[u] - 1 && (!best || (last && i === last[0] && d === last[1]))) best = [i, d]; });
      return best;
    },
    path(p) {
      const out = [], q = Array.from(p);
      for (let m = api.next(q); m; m = api.next(q, m)) { out.push(m); q[m[0]] += m[1]; }
      return out;
    },
    // A position with the largest distance; `pick` chooses among ties.
    hardest(pick = () => 0) {
      let max = 0; for (let i = 0; i < count; i++) if (dist[i] > max) max = dist[i];
      const ties = []; for (let i = 0; i < count; i++) if (dist[i] === max) ties.push(i);
      decode(codes[ties[Math.floor(pick() * ties.length)]]);
      return { pos: Array.from(pos), dist: max };
    },
    // A random position at exactly `d` moves, or null.
    at(d, pick) {
      const ties = []; for (let i = 0; i < count; i++) if (dist[i] === d) ties.push(i);
      if (!ties.length) return null;
      decode(codes[ties[Math.floor(pick() * ties.length)]]);
      return Array.from(pos);
    },
  };
  return api;
}

// Slides: runs of moves of one vehicle in one direction.
export function slides(path) {
  let n = 0, pi = -1, pd = 0;
  for (const [i, d] of path) { if (i !== pi || d !== pd) n++; pi = i; pd = d; }
  return n;
}
