// The Auto level: the game chooses the next puzzle from how the audience played the last one.
// All bank puzzles form one ladder, ordered by shortest solution. `skill` is a place on the
// ladder from 0 (easiest) to 1 (hardest). A good result moves it up one step and a poor result
// moves it down one step (an up-down staircase), so the puzzles settle where the audience
// solves them with some effort: not bored and not stuck.

export const START = 0.1, STEP = 0.08;

// Every bank entry, easiest first.
export const ladder = (bank) => Object.values(bank).flat().sort((a, b) => a.moves - b.moves);

// A result is {solved, moves, best, hints}: `best` is the shortest solution and `hints` counts
// the hints that the audience asked for. Returns 1 (too easy), 0 (about right) or -1 (too hard).
export function verdict({ solved, moves, best, hints }) {
  if (!solved) return -1; // the audience gave up
  const extra = moves / best, helped = hints / best;
  if (extra <= 1.5 && helped <= 0.1) return 1;
  if (extra > 2.5 || helped > 0.3) return -1;
  return 0;
}

export const step = (skill, v) => Math.min(1, Math.max(0, skill + v * STEP));

// The index of the next puzzle: a random one of the `spread` unplayed entries nearest to the
// place of `skill` on the ladder. `played` is a set of indexes; it empties when all were played.
export function choose(count, skill, played, random = Math.random, spread = 5) {
  if (played.size >= count) played.clear();
  const target = skill * (count - 1), open = [];
  for (let i = 0; i < count; i++) if (!played.has(i)) open.push(i);
  open.sort((a, b) => Math.abs(a - target) - Math.abs(b - target) || a - b);
  return open[Math.floor(random() * Math.min(spread, open.length))];
}
