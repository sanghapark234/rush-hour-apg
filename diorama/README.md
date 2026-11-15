# Tiny Gridlock — diorama build

A photoreal presentation of the Rush Hour APG puzzle. The car park is a 1:43 scale model on a
hobby workbench. Chat commands slide die-cast cars until the red car reaches the exit.

![Welcome view](docs/welcome.jpg)
![Play view](docs/low.jpg)

## Run

The page loads ES modules, images and models, so it needs an HTTP server.
Opening `index.html` from the file system does not work.

You need [Bun](https://bun.sh). The libraries (three.js 0.187.0, postprocessing 6.39.6 and
n8ao 2.0.2) are npm packages in `package.json`; `bun.lock` fixes their versions.

```sh
cd diorama
bun install                  # once: the libraries and the tools
bun run dev                  # development server that reloads the page after an edit
```

To show the game to other people, build it and serve the build:

```sh
bun run build                # writes dist/
bun run serve                # http://127.0.0.1:8000/
bun serve.js 0.0.0.0 8000    # reachable from other machines
```

Open the printed address in a desktop browser. The built game needs no network access.
Any static server can serve `dist/`, but `serve.js` compresses the text files and lets the
browser reuse its cached copies (see Load time).

The tools come from [Vite+](https://viteplus.dev) (`vite.config.ts`): Vite builds the game,
Oxlint checks the code and Oxfmt formats it.

```sh
bun run check                # format check and lint
bun run fix                  # apply the format and the lint fixes
bun test                     # solver, bank, Auto level and server tests
bun run test:flow            # builds the game, then plays it in a headless browser
```

The flow tests need the Chromium of Playwright. Install it once with
`bunx playwright install chromium`.

## Play

- `blue right`, `red left`, `green up`, `yellow down`: slide a vehicle one cell.
- `blue right 3`: slide up to three cells (1 to 7). Each cell counts as one move.
- `hint`: the next move of a shortest solution, and the number of moves that remain.
  The vehicle flashes its headlights.
- `solve`, or the **Show solution** button: chat gives up, and the game plays a shortest solution
  from the current position. `stop`, or the **Stop** button, ends the replay, and chat goes on
  from that position. A replay is not a solve: the Auto level counts a replay that reaches the
  exit as not solved, and each move of a stopped replay as a hint.
- After a win with more moves than the shortest solution, **Watch the shortest solution** puts
  the cars back and plays it from the start.
- `cam angle`, `cam top`, `cam low`: change the camera. Drag to orbit, scroll to zoom.
- When a move leaves the way to the exit free, the red car drives out by itself. Each cell of
  that drive counts as a move, and the exit counts as one more.

The colour name is printed on each roof, and the panel lists the colours in the puzzle.
Planters are fixed obstacles: no vehicle can pass them.

| Level  | Lot | Shortest solution |
| ------ | --- | ----------------- |
| Easy   | 6×6 | 12 to 20 moves    |
| Normal | 6×6 | 28 to 44 moves    |
| Hard   | 7×7 | 55 to 85 moves    |
| Expert | 8×8 | 100 to 160 moves  |

One move is one cell. The game deals 40 puzzles per level without repeats, with random colours
and a random top-bottom mirror.

### Auto level

With **Auto**, the game chooses each puzzle from how the audience played the last one
(`src/adapt.js`). All 160 puzzles form one ladder, ordered by shortest solution.

| Last puzzle                                                                                   | Next puzzle                  |
| --------------------------------------------------------------------------------------------- | ---------------------------- |
| Solved in at most 1.5 × the shortest solution, with hints for at most 10% of its moves        | Harder: 8% up the ladder     |
| Solved in more than 2.5 × the shortest solution, or with hints for more than 30% of its moves | Easier: 8% down the ladder   |
| Not solved: chat moved, asked for a hint or the solution, then took a new puzzle              | Easier: 8% down the ladder   |
| Any other result, or a puzzle that nobody touched                                             | The same place on the ladder |

The first Auto puzzle is 10% up the ladder. The game picks at random among the five nearest
puzzles that were not played, at most 8 places away; when none is left there, those puzzles
come again. Moves made before a Reset count in the result. The place on the ladder lasts until
the page reloads. This is
experience-driven procedural content generation (Yannakakis and Togelius, _Artificial
Intelligence and Games_, 2nd edition, section 7.2.3): a model of the player, here three numbers
from the last puzzle, selects the content. The aim is the flow channel between boredom and
anxiety (the same book, p. 329). The thresholds are design values. They are not fitted to
player data.

## Puzzle generation

No puzzle is written by hand. `tools/evolve.js` uses search-based procedural content generation
with MAP-Elites, a quality-diversity evolutionary algorithm.

- The genome is a layout: the vehicles and the planters.
- The exact solver (`src/solver.js`) explores every reachable position of a layout. The start
  position is the one farthest from the exit, so the recorded move count is the true minimum.
- The archive keeps the best layout for each pair (solution length, number of vehicles).
  Quality favours layouts where many vehicles take part and few can never move.
- New layouts come from mutation (add, remove, move or resize a vehicle or a planter) and from
  a row-cut crossover of two kept layouts.

```sh
bun tools/evolve.js search --n 8 --seconds 300 --seed 1   # writes tools/archive/n8-s1.json
bun tools/evolve.js bank                                  # picks src/puzzles.json from all archives
bun test                                                  # solver and bank checks
```

`tools/archive/` holds the search results that produced the current bank. In the game, the same
solver runs in a worker and gives the hints.

### Expressive range

![Expressive range of the generator](docs/expressive-range.svg)

`bun tools/range.js` draws this chart. The expressive range of a generator is the set of
content that it can make, shown over a few measures (the book, section 9.7.3). The top row
shows each kind of puzzle that the search found, and the 160 puzzles that the bank took.
The search found puzzles up to 94 moves on 6×6, 138 on 7×7 and 160 on 8×8. The bank uses only
a part of that range: the levels stop at 44 moves on 6×6 and 85 on 7×7, and 142 of the 160 bank
puzzles have 9 or more vehicles, because the quality score favours busy lots.

### A second difficulty measure

Each bank entry has an `effort` value next to `moves`. It is the difficulty measure of
Jarušek and Pelánek [1]: a model player moves at random, but a move that brings the exit
closer has a larger weight (the distance to the exit plus 25, against the distance alone).
The measure is the expected number of moves of this player. The paper takes the mean of many
runs; `effort()` in `src/solver.js` solves the same mean exactly, and two tests compare it
with independent calculations.

- In the paper's data from people (45 Rush Hour puzzles on 6×6), the shortest solution and
  this model predict the solving time equally well: Spearman correlation 0.90 for each. The
  size of the state space does not predict it. So the shortest solution stays the measure
  that defines the levels.
- In the bank, the two measures agree closely: rank correlation 0.99 over all 160 puzzles, and
  0.94 (Easy), 0.91 (Normal), 0.89 (Hard) and 0.81 (Expert) inside a level. The values go
  from 18 to 11,364 expected moves. The bottom row of the chart shows both measures.
- The model's weight of 25 comes from the paper. Nobody has fitted it to this game, where one
  move is one cell, and the paper has no 7×7 or 8×8 puzzles.

A second measure from the literature, the structural complexity of Ragni and others [2],
predicted human performance less well than the shortest solution in their own data, so the
bank does not use it.

### Comparison with the complete 6×6 database

Michael Fogleman computed every "interesting" 6×6 Rush Hour puzzle with up to two walls:
2,577,412 clusters of positions [3]. His database holds the hardest position of each cluster
and counts a move as one slide of any length. `bun tools/fogleman.js path/to/rush.txt` finds
each 6×6 bank puzzle in it. The database is not in this repository, because its page states
no licence for it.

|                                                  | Easy                         | Normal                        |
| ------------------------------------------------ | ---------------------------- | ----------------------------- |
| Bank puzzles found in the database               | 38 of 40                     | 39 of 40                      |
| Shortest solution in one-cell moves              | 12 to 20                     | 29 to 44                      |
| Shortest solution in slides                      | 6 to 14 (median 10)          | 15 to 30 (median 22)          |
| Share of all clusters that are easier, in slides | 0.5% to 64.8% (median 22.8%) | 71.8% to 99.6% (median 95.6%) |

- For all 77 puzzles that were found, this solver and the database agree on the number of
  reachable positions and on the largest slide distance in the cluster. This is an
  independent check of the solver.
- The other three puzzles each have a vehicle or a planter that the hardest position does not
  need. The database leaves such puzzles out.
- The hardest puzzle of the database takes 60 slides (51 without walls). The hardest Normal
  puzzle takes 30 slides, and the search archive for 6×6 reaches 94 one-cell moves.
- The database covers 6×6 only, so nothing like it exists for the Hard and Expert levels.

[1] P. Jarušek and R. Pelánek, "What Determines Difficulty of Transport Puzzles?", Proc.
FLAIRS-24, 2011. <https://cdn.aaai.org/ocs/2518/2518-11200-1-PB.pdf>
[2] M. Ragni, F. Steffenhagen and A. Fangmeier, "A Structural Complexity Measure for
Predicting Human Planning Performance", Proc. CogSci 2011. <https://escholarship.org/uc/item/1wr6b29g>
[3] M. Fogleman, "Solving Rush Hour, the Puzzle", 2018. <https://www.michaelfogleman.com/rush/>
(read 15 November 2026).

URL options for testing: `?skip=1` starts in play, `&cam=top|low` picks the view,
`&level=easy|normal|hard|expert|auto` picks the difficulty.

## Connect a real chat

`window.apg.command(user, text)` feeds one chat message into the game. A tmi.js or EventSub
client only needs to call it for each message.

The choices for play through Twitch chat, with the decisions taken so far, are in
[docs/team-decisions.md](docs/team-decisions.md).

## Files

| File                       | Purpose                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------- |
| `src/engine.js`            | Puzzle rules, levels, colours, and expansion of a bank entry into a puzzle.                 |
| `src/solver.js`            | Exact breadth-first solver over all reachable positions.                                    |
| `src/puzzles.json`         | The generated puzzle bank.                                                                  |
| `src/worker.js`            | Solves the dealt puzzle off the main thread and answers hints.                              |
| `src/vehicles.js`          | Vehicles modelled in code: lofted bodies, panel lines, glass, mirrors, wheels, roof labels. |
| `src/scene.js`             | Room, workbench, props, board, lights and post-processing.                                  |
| `src/main.js`              | Game flow, camera moves, animation, HUD wiring.                                             |
| `src/audio.js`             | Synthesised sounds (WebAudio). No audio files.                                              |
| `tools/evolve.js`          | The puzzle generator.                                                                       |
| `src/adapt.js`             | The Auto level: the next puzzle from the last result.                                       |
| `tools/range.js`           | Draws `docs/expressive-range.svg`.                                                          |
| `tools/fogleman.js`        | Compares the 6×6 puzzles with Fogleman's database.                                          |
| `tools/solver.test.js`     | Tests: the solver against a plain search, the walk model, and every bank entry.             |
| `tools/adapt.test.js`      | Tests: the Auto level.                                                                      |
| `tools/serve.test.js`      | Tests: the server's path check, cache validation and compression.                           |
| `tools/assets.sh`          | Converts the original images and models into `public/assets/`.                              |
| `public/assets/`           | Images and models. The build copies them to `dist/assets/` unchanged.                       |
| `package.json`, `bun.lock` | The libraries, the tools and the commands.                                                  |
| `vite.config.ts`           | Build, lint and format settings (Vite+).                                                    |
| `serve.js`                 | Static server for `dist/` with compression and cache validation.                            |
| `garage.html`              | Developer page that shows every vehicle model.                                              |

## Load time

A first visit to the built game transfers about 6.2 MB in 20 requests.
Before the load-time work it was 27.9 MB in 70 requests. A repeat visit transfers almost nothing: the browser checks each file and the server answers "304 Not Modified".

- **Images** are WebP. The backdrop loads in two steps: a 2k photo for the first frame, then
  the 6k photo, which replaces it without a pause.
- **Loading screen**: a 40-pixel WebP of the welcome view is inline in `index.html` (`#preview`)
  and shown blurred until the first frame. To renew it after a change to the welcome view, take
  a screenshot with `#welcome` hidden, run `magick shot.png -resize 40x -quality 60 lq.webp`,
  and put the Base64 text of the file in the `#preview` rule.
- **Models** are one `.glb` file each, with Meshopt-compressed geometry and WebP textures.
- **Lighting** uses a 512 × 256 HDR map. A close-up of the cars lit by the 1024 × 512 map
  showed no visible difference.
- **Code**: the build puts the game and its libraries into three minified files (page, engine,
  solver worker) and leaves out library code that the game does not use. The page preloads
  the engine file, so the browser fetches the code at once and not one import level at a time.
- **Server**: `serve.js` sends text and the HDR map as Brotli or gzip, and gives every file an
  `ETag` with `Cache-Control: no-cache`. The browser checks each file, but it never downloads
  an unchanged file twice.

`tools/assets.sh` rebuilds `public/assets/` from the original Poly Haven downloads.
To update a library, change its version in `package.json` and run `bun install`.

## Credits

All third-party assets are CC0 from [Poly Haven](https://polyhaven.com): the `artist_workshop`
HDRI and its backdrop photo; the `asphalt_02` and `plywood` textures; and the models
`wooden_table_02`, `desk_lamp_arm_01`, `spray_paint_bottles`, `pliers`, `screwdrivers_02`,
`measuring_tape_01`, `potted_plant_04` and `street_lamp_01`.

Libraries: three.js (MIT), postprocessing (Zlib), n8ao (ISC). Their licence files are in their packages under `node_modules/`.
The build keeps the licence notices of three.js and postprocessing in the engine file.
