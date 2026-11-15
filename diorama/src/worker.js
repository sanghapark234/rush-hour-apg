// The hint table is built here so the render loop never stalls.
// {type: 'load', puzzle} analyses a puzzle and keeps its table.
// {type: 'hint', pos, last} gives {move: [vehicle, direction] or null, left: moves to go}.
import { analyze } from './solver.js';

let table = null;
self.onmessage = ({ data }) => {
  let result;
  if (data.type === 'load') {
    table = analyze(data.puzzle, data.puzzle.start);
    result = Boolean(table?.solvable);
  } else {
    const left = table ? table.dist(data.pos) : -1;
    result = left < 0 ? null : { move: table.next(data.pos, data.last), left: left + 1 };
  }
  self.postMessage({ id: data.id, result });
};
