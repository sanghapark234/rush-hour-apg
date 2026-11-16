// Draws the expressive range of the puzzle generator (Yannakakis and Togelius, AI and Games,
// section 9.7.3): which kinds of puzzle the search found, and which of them the bank holds.
//
//   bun tools/range.js        writes docs/expressive-range.svg and prints the numbers
//
// Top row: every cell of the search archives (shortest solution in steps of 4 moves × number of
// vehicles) that holds a layout, with the bank puzzles on top. Bottom row: the two difficulty
// measures of each bank puzzle, shortest solution against the walk model (solver.js, effort).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { LEVELS } from '../src/engine.js';

const here = (p) => new URL(p, import.meta.url);
const archive = readdirSync(here('./archive/'))
  .filter((f) => f.endsWith('.json'))
  .flatMap((f) => JSON.parse(readFileSync(here('./archive/' + f))));
const bank = JSON.parse(readFileSync(here('../src/puzzles.json')));

const INK = '#0b0b0b',
  SECOND = '#52514e',
  MUTED = '#898781',
  GRID = '#e4e2dc',
  SURFACE = '#fcfcfb',
  CELL = '#d3d1c9',
  BLUE = '#2a78d6';
const W = 960,
  PW = 268,
  PH = 190,
  LEFT = 58,
  GAP = 30,
  TOP1 = 118,
  TOP2 = TOP1 + PH + 92,
  BUCKET = 4;
const sizes = [6, 7, 8],
  out = [];
const text = (x, y, s, { size = 11, fill = SECOND, anchor = 'start', weight = 400, rotate } = {}) =>
  out.push(
    `<text x="${x}" y="${y}" font-size="${size}" fill="${fill}" text-anchor="${anchor}" font-weight="${weight}"${rotate ? ` transform="rotate(-90 ${x} ${y})"` : ''}>${s}</text>`,
  );
const line = (x1, y1, x2, y2, stroke = GRID) => out.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}"/>`);
const r1 = (v) => Math.round(v * 10) / 10;

// Spearman rank correlation, with mean ranks for ties.
function spearman(a, b) {
  const rank = (v) => {
    const o = v.map((x, i) => [x, i]).sort((p, q) => p[0] - q[0]),
      r = [];
    for (let i = 0; i < o.length;) {
      let j = i;
      while (j < o.length && o[j][0] === o[i][0]) j++;
      for (let k = i; k < j; k++) r[o[k][1]] = (i + j - 1) / 2;
      i = j;
    }
    return r;
  };
  const x = rank(a),
    y = rank(b),
    m = (a.length - 1) / 2;
  let sxy = 0,
    sx = 0,
    sy = 0;
  for (let i = 0; i < x.length; i++) {
    sxy += (x[i] - m) * (y[i] - m);
    sx += (x[i] - m) ** 2;
    sy += (y[i] - m) ** 2;
  }
  return sxy / Math.sqrt(sx * sy);
}

out.push(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${TOP2 + PH + 58}" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" role="img" aria-labelledby="t d">`,
);
out.push(`<title id="t">Expressive range of the Tiny Gridlock puzzle generator</title>`);
out.push(
  `<desc id="d">For 6×6, 7×7 and 8×8 boards: the kinds of puzzle the search found, the puzzles in the bank, and the two difficulty measures of the bank puzzles.</desc>`,
);
out.push(`<rect width="100%" height="100%" fill="${SURFACE}"/>`);
text(LEFT, 30, 'What the generator can make, and what the bank holds', { size: 17, fill: INK, weight: 600 });
out.push(`<rect x="${LEFT}" y="43" width="12" height="12" rx="2" fill="${CELL}"/>`);
text(LEFT + 18, 53, 'kind of puzzle found by the search (one cell = 4 moves × 1 vehicle)', { size: 12 });
out.push(`<circle cx="${LEFT + 420}" cy="49" r="4.5" fill="${BLUE}"/>`);
text(LEFT + 431, 53, 'puzzle in the bank', { size: 12 });

sizes.forEach((N, col) => {
  const x0 = LEFT + col * (PW + GAP),
    found = archive.filter((e) => e.N === N),
    levels = Object.entries(LEVELS).filter(([, l]) => l.N === N);
  const picks = levels.flatMap(([key]) => bank[key]);
  const xMax = Math.ceil(Math.max(...found.map((e) => e.moves)) / 20) * 20,
    x = (m) => x0 + (m / xMax) * PW;
  const cells = new Set(found.map((e) => Math.floor(e.moves / BUCKET) + ',' + e.cars.length));

  // ---- top: shortest solution × vehicles ----
  const yMax = 14,
    y = (v) => TOP1 + PH - (v / yMax) * PH;
  text(x0, TOP1 - 36, `${N}×${N} board`, { size: 13, fill: INK, weight: 600 });
  for (const v of [2, 6, 10, 14]) {
    line(x0, y(v), x0 + PW, y(v));
    if (!col) text(x0 - 8, y(v) + 4, v, { anchor: 'end', fill: MUTED });
  }
  for (const key of cells) {
    const [b, n] = key.split(',').map(Number);
    out.push(
      `<rect x="${r1(x(b * BUCKET) + 0.5)}" y="${r1(y(n + 0.5) + 0.5)}" width="${r1((PW * BUCKET) / xMax - 1)}" height="${r1(PH / yMax - 1)}" fill="${CELL}"><title>${b * BUCKET}-${b * BUCKET + 3} moves, ${n} vehicles</title></rect>`,
    );
  }
  for (const [i, [key, l]] of levels.entries()) {
    // the move range of each level, named above the plot
    out.push(`<path d="M${r1(x(l.min))} ${TOP1 - 6}v-5H${r1(x(l.max))}v5" fill="none" stroke="${SECOND}"/>`);
    // A name wider than its range would run into the next name: the first one then ends at
    // its range and a later one starts at it.
    if (x(l.max) - x(l.min) >= key.length * 6.5) text((x(l.min) + x(l.max)) / 2, TOP1 - 15, key, { anchor: 'middle' });
    else text(i ? x(l.min) + 2 : x(l.max) - 2, TOP1 - 15, key, { anchor: i ? 'start' : 'end' });
  }
  for (const e of picks)
    out.push(
      `<circle cx="${r1(x(e.moves))}" cy="${r1(y(e.v.length))}" r="3.5" fill="${BLUE}" stroke="${SURFACE}" stroke-width="1"><title>${e.moves} moves, ${e.v.length} vehicles</title></circle>`,
    );
  line(x0, TOP1 + PH, x0 + PW, TOP1 + PH, MUTED);
  for (let m = 0; m <= xMax; m += 40) text(x(m), TOP1 + PH + 16, m, { anchor: 'middle', fill: MUTED });

  // ---- bottom: shortest solution × walk model, log scale ----
  const lo = 1,
    hi = 4.2,
    y2 = (v) => TOP2 + PH - ((Math.log10(v) - lo) / (hi - lo)) * PH;
  for (const v of [10, 100, 1000, 10000]) {
    line(x0, y2(v), x0 + PW, y2(v));
    if (!col) text(x0 - 8, y2(v) + 4, v.toLocaleString('en'), { anchor: 'end', fill: MUTED });
  }
  for (const e of picks)
    if (e.effort)
      out.push(
        `<circle cx="${r1(x(e.moves))}" cy="${r1(y2(e.effort))}" r="3.5" fill="${BLUE}" stroke="${SURFACE}" stroke-width="1"><title>${e.moves} moves, walk model ${e.effort}</title></circle>`,
      );
  line(x0, TOP2 + PH, x0 + PW, TOP2 + PH, MUTED);
  for (let m = 0; m <= xMax; m += 40) text(x(m), TOP2 + PH + 16, m, { anchor: 'middle', fill: MUTED });
  text(x0 + PW / 2, TOP2 + PH + 36, 'shortest solution (moves)', { anchor: 'middle' });

  const filled = cells.size,
    held = new Set(picks.map((e) => Math.floor(e.moves / BUCKET) + ',' + e.v.length)).size;
  console.log(
    `${N}×${N}: ${found.length} layouts in ${filled} cells, up to ${Math.max(...found.map((e) => e.moves))} moves, ${Math.min(...found.map((e) => e.cars.length))}-${Math.max(...found.map((e) => e.cars.length))} vehicles; bank ${picks.length} puzzles in ${held} cells, ${Math.min(...picks.map((e) => e.v.length))}-${Math.max(...picks.map((e) => e.v.length))} vehicles`,
  );
  for (const [key] of levels)
    console.log(
      `  ${key}: walk model ${Math.min(...bank[key].map((e) => e.effort))}-${Math.max(...bank[key].map((e) => e.effort))}, rank correlation with shortest solution ${spearman(
        bank[key].map((e) => e.moves),
        bank[key].map((e) => e.effort),
      ).toFixed(2)}`,
    );
});
text(16, TOP1 + PH / 2, 'vehicles', { anchor: 'middle', rotate: true });
text(16, TOP2 + PH / 2, 'walk model (expected moves)', { anchor: 'middle', rotate: true });
text(LEFT, TOP2 - 26, 'Two difficulty measures of the bank puzzles', { size: 13, fill: INK, weight: 600 });
const every = Object.values(bank).flat();
console.log(
  `all ${every.length} bank puzzles: rank correlation ${spearman(
    every.map((e) => e.moves),
    every.map((e) => e.effort),
  ).toFixed(2)}`,
);
out.push('</svg>');
writeFileSync(here('../docs/expressive-range.svg'), out.join('\n') + '\n');
