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

// The index of the next puzzle: a random one of the `spread` nearest unplayed entries, all
// within `reach` places of the place of `skill` on the ladder. `played` is a set of indexes.
// It empties when no such entry is left, so the choice never drifts away from the skill: an
// audience at the bottom of the ladder plays the easiest puzzles again.
export function choose(count, skill, played, random = Math.random, spread = 5, reach = 8) {
  const target = skill * (count - 1), near = (i) => Math.abs(i - target);
  const open = () => Array.from({ length: count }, (_, i) => i).filter((i) => !played.has(i) && near(i) <= reach);
  let list = open();
  if (!list.length) { played.clear(); list = open(); }
  list.sort((a, b) => near(a) - near(b) || a - b);
  return list[Math.floor(random() * Math.min(spread, list.length))];
}
