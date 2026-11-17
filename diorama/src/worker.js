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
      const dBefore = table ? table.dist(data.before) : -1;
      const dAfter = data.won ? -1 : table ? table.dist(data.after) : -1;
      const before = dBefore < 0 ? null : dBefore + 1;
      const after = data.won ? 0 : dAfter < 0 ? null : dAfter + 1;
      let score = 0;
      if (before != null && after != null) {
        const delta = before - after;
        const steps = data.done || 1;
        score = Math.max(-1, Math.min(1, Math.round((delta / steps) * 100) / 100));
      }
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
