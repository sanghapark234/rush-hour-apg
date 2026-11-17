// The hint table is built here so the render loop never stalls.
// {type: 'load', puzzle} analyses a puzzle and keeps its table.
// {type: 'hint', pos, last} gives {move: [vehicle, direction] or null, left: moves to go}.
// {type: 'eval', before, after, won, done} gives {before, after, score: -1 to 1}.
import { analyze } from './solver.js';

// A load that has no solution, or that fails, leaves the puzzle in play as it was: the page keeps
// that puzzle too. The solver has one set of buffers, so its table is built again then.
// A request that throws answers {id, error}, so only that request fails.
let table = null,
  current = null;
self.onmessage = ({ data }) => {
  let result;
  try {
    if (data.type === 'load') {
      const made = analyze(data.puzzle, data.puzzle.start);
      result = Boolean(made?.solvable);
      if (result) {
        table = made;
        current = data.puzzle;
      } else table = current && analyze(current, current.start);
    } else if (data.type === 'eval') {
      // Moves to go, or null without a table. The score is the moves that each cell of the move saved.
      const left = (pos) => {
        const d = table ? table.dist(pos) : -1;
        return d < 0 ? null : d + 1;
      };
      const before = left(data.before),
        after = data.won ? 0 : left(data.after);
      const score = before === null || after === null ? 0 : Math.max(-1, Math.min(1, Math.round(((before - after) / (data.done || 1)) * 100) / 100));
      result = { before, after, score };
    } else {
      const left = table ? table.dist(data.pos) : -1;
      result = left < 0 ? null : { move: table.next(data.pos, data.last), left: left + 1 };
    }
  } catch (err) {
    if (data.type === 'load') table = current && analyze(current, current.start);
    return self.postMessage({ id: data.id, error: String(err?.message ?? err) });
  }
  self.postMessage({ id: data.id, result });
};
