// Puzzle generator: search-based procedural content generation with MAP-Elites, a
// quality-diversity evolutionary algorithm. No puzzle is written by hand.
//
//   bun tools/evolve.js search --n 7 --seconds 300 --seed 1   -> tools/archive/n7-s1.json
//   bun tools/evolve.js bank                                  -> src/puzzles.json
//
// A layout (vehicles and walls) is the genome. The exact solver scores it: the start is the
// position of that layout that is farthest from the exit. The archive keeps the best layout for
// each pair (solution length, number of vehicles). A step picks a kept layout, mutates it or
// crosses it with another, and stores the child when its cell is empty or holds a weaker layout.
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { analyze, slides } from '../src/solver.js';
import { LEVELS } from '../src/engine.js';

const MAX_VEHICLES = 13; // red and the twelve colour names
const CAP = 100000;     // reachable positions; keeps the hint table small and the puzzle tight
const BUCKET = 4;        // archive cell width in moves
const here = (p) => new URL(p, import.meta.url);

function rng(seed) {
  return () => { seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

const cellsOf = (N, v) => [...Array(v.len)].map((_, k) => v.axis === 'h' ? v.lane * N + v.at + k : (v.at + k) * N + v.lane);
const maxWalls = (N) => ({ 6: 2, 7: 5, 8: 9 })[N];
const lengths = (N) => N === 6 ? [2, 2, 2, 3] : [2, 2, 2, 3, 3, 4];

function occupied(g, skip = -1) {
  const occ = new Set(g.walls);
  g.cars.forEach((v, i) => { if (i !== skip) for (const c of cellsOf(g.N, v)) occ.add(c); });
  return occ;
}
// A random vehicle that fits, or null. Only the red car may lie in the exit row.
function place(g, random, occ) {
  const N = g.N, pick = (n) => Math.floor(random() * n);
  for (let t = 0; t < 30; t++) {
    const L = lengths(N), v = { axis: random() < 0.5 ? 'h' : 'v', len: L[pick(L.length)], lane: pick(N), at: 0 };
    if (v.axis === 'h' && v.lane === g.exitRow) continue;
    v.at = pick(N - v.len + 1);
    if (!cellsOf(N, v).some((c) => occ.has(c))) return v;
  }
  return null;
}
function freeCell(g, random, occ) {
  for (let t = 0; t < 30; t++) {
    const c = Math.floor(random() * g.N * g.N);
    if (Math.floor(c / g.N) !== g.exitRow && !occ.has(c)) return c;
  }
  return -1;
}
function randomLayout(N, random) {
  const exitRow = N === 6 ? 2 : 3;
  const g = { N, exitRow, cars: [{ axis: 'h', len: 2, lane: exitRow, at: Math.floor(random() * (N - 2)) }], walls: [] };
  for (let n = 6 + Math.floor(random() * 7); n > 0; n--) { const v = place(g, random, occupied(g)); if (v) g.cars.push(v); }
  for (let n = Math.floor(random() * (maxWalls(N) + 1)); n > 0; n--) { const c = freeCell(g, random, occupied(g)); if (c >= 0) g.walls.push(c); }
  return g;
}

function mutate(parent, random) {
  const g = { ...parent, cars: parent.cars.map((v) => ({ ...v })), walls: parent.walls.slice() };
  const pick = (n) => Math.floor(random() * n);
  for (let k = 1 + pick(3); k > 0; k--) {
    const r = random(), i = 1 + pick(g.cars.length - 1);
    if (r < 0.22 && g.cars.length < MAX_VEHICLES) { const v = place(g, random, occupied(g)); if (v) g.cars.push(v); }
    else if (r < 0.34 && g.cars.length > 4) g.cars.splice(i, 1);
    else if (r < 0.62 && g.cars.length > 1) { const v = place(g, random, occupied(g, i)); if (v) g.cars[i] = v; }
    else if (r < 0.72 && g.cars.length > 1) {
      // Change one vehicle's length where it stands.
      const v = { ...g.cars[i] }, L = lengths(g.N); v.len = L[pick(L.length)]; v.at = Math.min(v.at, g.N - v.len);
      const occ = occupied(g, i); if (!cellsOf(g.N, v).some((c) => occ.has(c))) g.cars[i] = v;
    }
    else if (r < 0.84 && g.walls.length < maxWalls(g.N)) { const c = freeCell(g, random, occupied(g)); if (c >= 0) g.walls.push(c); }
    else if (r < 0.92 && g.walls.length) g.walls.splice(pick(g.walls.length), 1);
    else if (g.walls.length) { const w = pick(g.walls.length), c = freeCell(g, random, occupied(g)); if (c >= 0) g.walls[w] = c; }
  }
  return g;
}
// The child takes the rows above a random line from one parent and the rest from the other.
function cross(a, b, random) {
  const N = a.N, cut = 1 + Math.floor(random() * (N - 1)), top = (c) => Math.floor(c / N) < cut;
  const g = { N, exitRow: a.exitRow, cars: [{ ...a.cars[0] }], walls: [] }, occ = new Set(cellsOf(N, a.cars[0]));
  const take = (src, keep) => {
    for (const v of src.cars.slice(1)) {
      const cs = cellsOf(N, v);
      if (g.cars.length < MAX_VEHICLES && keep(cs[0]) && !cs.some((c) => occ.has(c))) { g.cars.push({ ...v }); cs.forEach((c) => occ.add(c)); }
    }
    for (const w of src.walls) if (g.walls.length < maxWalls(N) && keep(w) && !occ.has(w)) { g.walls.push(w); occ.add(w); }
  };
  take(a, top); take(b, (c) => !top(c));
  return g;
}

// Score a layout. Returns null for layouts that are unsolvable, too loose or too small.
function evaluate(g, random) {
  const z = { N: g.N, exitRow: g.exitRow, meta: g.cars, walls: g.walls };
  const a = analyze(z, g.cars.map((v) => v.at), CAP);
  if (!a || !a.solvable) return null;
  const far = a.hardest(random), path = a.path(far.pos);
  // The path ends with a red move to the right, so the exit move adds a move but no slide.
  const used = new Set(path.map(([i]) => i)).size, stuck = g.cars.filter((_, i) => a.lo[i] === a.hi[i]).length;
  const n = g.cars.length, s = slides(path), moves = far.dist + 1;
  // Quality inside one archive cell: many vehicles take part, many separate decisions,
  // few vehicles that can never move, few walls.
  const quality = used / n + 0.6 * s / moves - 0.5 * stuck / n - 0.04 * g.walls.length;
  const cars = g.cars.map((v, i) => ({ ...v, at: far.pos[i] }));
  return { N: g.N, exitRow: g.exitRow, cars, walls: g.walls.slice().sort((x, y) => x - y), moves, slides: s, states: a.count, used, stuck, quality };
}
const cellKey = (e) => Math.floor(e.moves / BUCKET) + ':' + e.cars.length;

function search({ n: N, seconds, seed }) {
  const random = rng(seed), archive = new Map(), t0 = performance.now();
  let evals = 0, kept = 0, report = t0;
  const offer = (g) => {
    const e = evaluate(g, random); evals++;
    if (!e) return;
    const k = cellKey(e), old = archive.get(k);
    if (!old || e.quality > old.quality) { archive.set(k, e); kept++; }
  };
  while (archive.size < 40) offer(randomLayout(N, random));
  let elites = [...archive.values()], top = 0;
  while (performance.now() - t0 < seconds * 1000) {
    if (evals % 500 === 0) { elites = [...archive.values()]; top = Math.max(...elites.map((e) => e.moves)); }
    // Half of the parents come from the longer half of the archive, to keep pressure on length.
    let p = elites[Math.floor(random() * elites.length)];
    if (random() < 0.5) for (let t = 0; t < 4 && p.moves < top * 0.5; t++) p = elites[Math.floor(random() * elites.length)];
    const r = random();
    if (r < 0.04) offer(randomLayout(N, random));
    else if (r < 0.2) offer(mutate(cross(p, elites[Math.floor(random() * elites.length)], random), random));
    else offer(mutate(p, random));
    if (performance.now() - report > 30000) {
      report = performance.now();
      console.log(`n=${N} seed=${seed} ${Math.round((report - t0) / 1000)}s evals=${evals} cells=${archive.size} longest=${Math.max(...[...archive.values()].map((e) => e.moves))}`);
    }
  }
  mkdirSync(here('./archive/'), { recursive: true });
  const out = [...archive.values()].sort((x, y) => x.moves - y.moves);
  writeFileSync(here(`./archive/n${N}-s${seed}.json`), JSON.stringify(out));
  console.log(`n=${N} seed=${seed} done: evals=${evals} kept=${kept} cells=${out.length} longest=${out.at(-1).moves}`);
}

// Pick the bank from every archive: per level, the best layouts spread over the move range.
function bank({ per = 40 }) {
  const all = readdirSync(here('./archive/')).filter((f) => f.endsWith('.json')).flatMap((f) => JSON.parse(readFileSync(here('./archive/' + f))));
  const out = {};
  for (const [key, level] of Object.entries(LEVELS)) {
    const seen = new Set();
    const pool = all.filter((e) => e.N === level.N && e.moves >= level.min && e.moves <= level.max && e.stuck <= 1 && e.used >= Math.min(e.cars.length - 1, 7))
      .filter((e) => { const k = JSON.stringify([e.cars.map((v) => [v.axis, v.lane, v.len]), e.walls]); return !seen.has(k) && seen.add(k); })
      .sort((x, y) => y.quality - x.quality);
    // Round-robin over the move buckets, best quality first, so the level covers its whole range.
    const buckets = new Map();
    for (const e of pool) { const b = Math.floor(e.moves / BUCKET); buckets.set(b, [...(buckets.get(b) ?? []), e]); }
    const picked = [];
    for (let round = 0; picked.length < per && round < per; round++) for (const list of buckets.values()) if (list[round] && picked.length < per) picked.push(list[round]);
    out[key] = picked.sort((x, y) => x.moves - y.moves).map((e) => ({ N: e.N, v: e.cars.map((v) => [v.axis, v.lane, v.len, v.at]), w: e.walls, moves: e.moves, slides: e.slides, states: e.states }));
    console.log(`${key}: pool ${pool.length}, picked ${picked.length}, moves ${out[key][0]?.moves}-${out[key].at(-1)?.moves}`);
  }
  writeFileSync(here('../src/puzzles.json'), JSON.stringify(out).replace(/\{"N"/g, '\n{"N"') + '\n');
}

const [cmd, ...rest] = process.argv.slice(2), opt = {};
for (let i = 0; i < rest.length; i += 2) opt[rest[i].replace(/^--/, '')] = Number(rest[i + 1]);
if (cmd === 'search') search({ n: 6, seconds: 60, seed: 1, ...opt });
else if (cmd === 'bank') bank(opt);
else console.log('usage: bun tools/evolve.js search --n 6|7|8 --seconds S --seed K | bank [--per 40]');
