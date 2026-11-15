// Puzzle rules and the level table. Puzzles come from the bank in puzzles.json, which
// tools/evolve.js builds; solver.js gives exact move counts and hints.
// A puzzle is {N, exitRow, meta, walls, start}; a position is each vehicle's offset along its lane.

export const RED = '#d8232f';
export const NAMES = [['blue', '#1f5fd6'], ['yellow', '#f0c419'], ['green', '#1f8a43'], ['purple', '#6d34b8'], ['orange', '#ee7a17'], ['pink', '#f57fb3'], ['cyan', '#22bfd1'], ['brown', '#6b3f22'], ['white', '#e9e7e2'], ['gray', '#7d828c'], ['lime', '#a4d321'], ['black', '#1c1c20']];
// min and max count one-cell moves of the shortest solution, the exit move included.
export const LEVELS = {
  easy: { N: 6, min: 12, max: 20 },
  normal: { N: 6, min: 28, max: 44 },
  hard: { N: 7, min: 55, max: 85 },
  expert: { N: 8, min: 100, max: 160 },
};
export const WALL = 127;

// Turn a bank entry into a puzzle. Colours are dealt at random, and `flip` mirrors the board
// top to bottom, so one entry gives many different-looking boards with the same solution length.
export function expand(entry, { flip = false, random = Math.random } = {}) {
  const { N } = entry, names = NAMES.slice();
  for (let i = names.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [names[i], names[j]] = [names[j], names[i]]; }
  const meta = [], start = [];
  entry.v.forEach(([axis, lane, len, at], i) => {
    const [id, color] = i ? names[i - 1] : ['red', RED];
    meta.push({ id, color, axis, len, lane: flip && axis === 'h' ? N - 1 - lane : lane });
    start.push(flip && axis === 'v' ? N - len - at : at);
  });
  const walls = entry.w.map((c) => flip ? (N - 1 - Math.floor(c / N)) * N + c % N : c);
  return { N, exitRow: meta[0].lane, meta, walls, start, moves: entry.moves, slides: entry.slides, states: entry.states };
}

// Cell owners: a vehicle index, WALL, or -1 when empty.
export function grid(z, p) {
  const { N, meta } = z, g = new Int8Array(N * N).fill(-1);
  for (const w of z.walls) g[w] = WALL;
  meta.forEach((m, i) => {
    for (let k = 0; k < m.len; k++) g[m.axis === 'h' ? m.lane * N + p[i] + k : (p[i] + k) * N + m.lane] = i;
  });
  return g;
}
export function free(z, g, m, at) {
  if (at < 0 || at >= z.N) return false;
  return g[m.axis === 'h' ? m.lane * z.N + at : at * z.N + m.lane] === -1;
}
// Move vehicle i up to count cells in direction d (+1 or -1). Changes p in place.
// done is the number of cells moved. exit is true when the red car met the exit: it leaves
// with one more move, which the caller counts.
export function slide(z, p, i, d, count) {
  const m = z.meta[i], g = grid(z, p);
  let done = 0;
  while (done < count) {
    if (i === 0 && d > 0 && p[0] + m.len === z.N) return { done, exit: true };
    if (!free(z, g, m, d > 0 ? p[i] + m.len : p[i] - 1)) break;
    p[i] += d; done++; // the cells behind the vehicle stay marked: it only moves away from them
  }
  return { done, exit: false };
}
