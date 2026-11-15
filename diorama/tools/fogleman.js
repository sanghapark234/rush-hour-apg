// Compares the 6×6 puzzles of the bank with Michael Fogleman's database of every 6×6 Rush Hour
// cluster (https://www.michaelfogleman.com/rush/, file rush.txt: "moves board cluster-size").
// A cluster is a set of positions that can reach each other. His row is the hardest position of
// its cluster, and his "moves" count slides of any length; the bank counts one-cell moves.
//
//   bun tools/fogleman.js path/to/rush.txt
//
// For each bank puzzle the tool finds the database row of the same cluster, then checks our
// solver against it: the number of reachable positions and the largest slide distance.
import { readFileSync } from 'node:fs';
import { expand, grid, free } from '../src/engine.js';

const N = 6,
  file = process.argv[2];
if (!file) {
  console.log('usage: bun tools/fogleman.js path/to/rush.txt');
  process.exit(1);
}

// The layout without positions: every piece as "axis lane length" in lane order, and the walls.
// Pieces in one lane keep their order in every position of a cluster, so the cluster has one signature.
const signature = (pieces, walls) =>
  ordered(pieces)
    .map((p) => p.axis + p.lane + p.len)
    .join(' ') +
  '|' +
  walls
    .slice()
    .sort((a, b) => a - b)
    .join(',');
// The pieces of a 36-character board: o is empty, x a wall, A the red car.
function parse(board) {
  const cells = new Map(),
    walls = [];
  for (let c = 0; c < N * N; c++) {
    const ch = board[c];
    if (ch === 'x') walls.push(c);
    else if (ch !== 'o') cells.set(ch, [...(cells.get(ch) ?? []), c]);
  }
  const pieces = [...cells].map(([ch, cs]) => {
    const axis = cs[1] - cs[0] === 1 ? 'h' : 'v';
    return {
      red: ch === 'A',
      axis,
      lane: axis === 'h' ? Math.floor(cs[0] / N) : cs[0] % N,
      len: cs.length,
      at: axis === 'h' ? cs[0] % N : Math.floor(cs[0] / N),
    };
  });
  return { pieces, walls };
}
// Pieces never pass each other, so their order in a lane is fixed: sort to compare positions.
const ordered = (pieces) => pieces.slice().sort((a, b) => (a.axis + a.lane).localeCompare(b.axis + b.lane) || a.at - b.at);

// Every reachable position of a puzzle with its slide distance to the exit.
function cluster(z) {
  const n = z.meta.length,
    seen = new Map([[z.start.join(''), 0]]),
    states = [z.start.slice()];
  const slidesFrom = (p, fn) => {
    const g = grid(z, p);
    for (let i = 0; i < n; i++)
      for (const d of [-1, 1]) {
        for (let at = p[i] + d; free(z, g, z.meta[i], d > 0 ? at + z.meta[i].len - 1 : at); at += d) {
          const q = p.slice();
          q[i] = at;
          fn(q);
        }
      }
  };
  for (let h = 0; h < states.length; h++)
    slidesFrom(states[h], (q) => {
      const k = q.join('');
      if (!seen.has(k)) {
        seen.set(k, states.length);
        states.push(q);
      }
    });
  const dist = new Int32Array(states.length).fill(-1),
    queue = [];
  states.forEach((p, i) => {
    if (p[0] === N - 2) {
      dist[i] = 0;
      queue.push(i);
    }
  });
  for (let h = 0; h < queue.length; h++)
    slidesFrom(states[queue[h]], (q) => {
      const v = seen.get(q.join(''));
      if (dist[v] < 0) {
        dist[v] = dist[queue[h]] + 1;
        queue.push(v);
      }
    });
  return { states, seen, dist, start: dist[0], hardest: Math.max(...dist) };
}

// Index the database by layout.
const rows = new Map(),
  histogram = [];
let total = 0;
for (const line of readFileSync(file, 'utf8').split('\n')) {
  if (!line) continue;
  const [moves, board, size] = line.split(' '),
    { pieces, walls } = parse(board),
    sig = signature(pieces, walls);
  rows.set(sig, [...(rows.get(sig) ?? []), { moves: Number(moves), size: Number(size), pieces }]);
  histogram[Number(moves)] = (histogram[Number(moves)] ?? 0) + 1;
  total++;
}
const below = (moves) => histogram.slice(0, moves).reduce((a, b) => a + (b ?? 0), 0) / total;
console.log(`database: ${total} clusters, hardest ${histogram.length - 1} slides`);

const bank = JSON.parse(readFileSync(new URL('../src/puzzles.json', import.meta.url)));
const fmt = (list) => `${Math.min(...list)}-${Math.max(...list)}`,
  median = (list) => list.slice().sort((a, b) => a - b)[Math.floor(list.length / 2)];
for (const [level, entries] of Object.entries(bank)) {
  const six = entries.filter((e) => e.N === N);
  if (!six.length) continue;
  const found = [],
    wrong = [];
  let missing = 0,
    spare = 0;
  for (const e of six) {
    const z = expand(e),
      c = cluster(z);
    const pieces = z.meta.map((m, i) => ({ axis: m.axis, lane: m.lane, len: m.len, at: z.start[i] }));
    // Our positions list the vehicles in bank order; map a database row into the lane order.
    const lane = ordered(pieces.map((p, i) => ({ ...p, i })));
    const row = (rows.get(signature(pieces, z.walls)) ?? []).find((r) => {
      const p = [];
      ordered(r.pieces).forEach((q, k) => {
        p[lane[k].i] = q.at;
      });
      return c.seen.has(p.join(''));
    });
    if (!row) {
      // The database keeps only "minimal" clusters: no vehicle or wall can go without changing the solution.
      const far = c.states[c.dist.indexOf(c.hardest)];
      const without = (i) => cluster({ ...z, meta: z.meta.filter((_, k) => k !== i), start: far.filter((_, k) => k !== i) }).start;
      const open = (w) => cluster({ ...z, walls: z.walls.filter((x) => x !== w), start: far }).start;
      if (z.meta.some((_, i) => i > 0 && without(i) === c.hardest) || z.walls.some((w) => open(w) === c.hardest)) spare++;
      missing++;
      continue;
    }
    if (row.size !== c.states.length || row.moves !== c.hardest) wrong.push({ moves: e.moves, row, ours: [c.states.length, c.hardest] });
    found.push({ cells: e.moves, slides: c.start, hardest: row.moves, share: below(c.start) });
  }
  console.log(
    `${level}: ${six.length} puzzles, ${found.length} in the database, ${missing} not (${spare} of them have a vehicle or a wall that the hardest position does not need), ${wrong.length} disagree on cluster size or hardest distance`,
  );
  for (const w of wrong) console.log('  disagree:', JSON.stringify(w));
  if (!found.length) continue;
  console.log(
    `  cells ${fmt(found.map((f) => f.cells))}; slides ${fmt(found.map((f) => f.slides))} (median ${median(found.map((f) => f.slides))}); hardest of its cluster ${fmt(found.map((f) => f.hardest))} slides`,
  );
  console.log(`  start is the hardest position of its cluster in slides: ${found.filter((f) => f.slides === f.hardest).length} of ${found.length}`);
  console.log(
    `  harder than ${(Math.min(...found.map((f) => f.share)) * 100).toFixed(1)}%-${(Math.max(...found.map((f) => f.share)) * 100).toFixed(2)}% of all clusters (median ${(median(found.map((f) => f.share)) * 100).toFixed(1)}%)`,
  );
}
