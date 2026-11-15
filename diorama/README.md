# Tiny Gridlock — diorama build

A photoreal presentation of the Rush Hour APG puzzle. The car park is a 1:43 scale model on a
hobby workbench. Chat commands slide die-cast cars until the red car reaches the exit.

![Welcome view](docs/welcome.jpg)
![Play view](docs/low.jpg)

## Run

The page loads ES modules, images and models, so it needs an HTTP server.
Opening `index.html` from the file system does not work.

```sh
cd diorama
bun serve.js                 # http://127.0.0.1:8000/
bun serve.js 0.0.0.0 8000    # reachable from other machines
```

Open the printed address in a desktop browser. No build step and no network access are needed:
three.js 0.187.0, postprocessing 6.39.6 and n8ao 2.0.2 are in `vendor/`, minified.

Any static server works, but use `serve.js` to show the game to other people: it compresses
the text files and lets the browser reuse its cached copies (see Load time).

## Play

- `blue right`, `red left`, `green up`, `yellow down`: slide a vehicle one cell.
- `blue right 3`: slide up to three cells (1 to 7). Each cell counts as one move.
- `hint`: the next move of a shortest solution, and the number of moves that remain.
  The vehicle flashes its headlights.
- `cam angle`, `cam top`, `cam low`: change the camera. Drag to orbit, scroll to zoom.
- The red car leaves when it is at the exit and chat sends `red right` once more.

The colour name is printed on each roof, and the panel lists the colours in the puzzle.
Planters are fixed obstacles: no vehicle can pass them.

| Level | Lot | Shortest solution |
| --- | --- | --- |
| Easy | 6×6 | 12 to 20 moves |
| Normal | 6×6 | 28 to 44 moves |
| Hard | 7×7 | 55 to 85 moves |
| Expert | 8×8 | 100 to 160 moves |

One move is one cell. The game deals 40 puzzles per level without repeats, with random colours
and a random top-bottom mirror.

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

URL options for testing: `?skip=1` starts in play, `&cam=top|low` picks the view,
`&level=easy|normal|hard|expert` picks the difficulty.

## Connect a real chat

`window.apg.command(user, text)` feeds one chat message into the game. A tmi.js or EventSub
client only needs to call it for each message.

## Files

| File | Purpose |
| --- | --- |
| `src/engine.js` | Puzzle rules, levels, colours, and expansion of a bank entry into a puzzle. |
| `src/solver.js` | Exact breadth-first solver over all reachable positions. |
| `src/puzzles.json` | The generated puzzle bank. |
| `src/worker.js` | Solves the dealt puzzle off the main thread and answers hints. |
| `src/vehicles.js` | Vehicles modelled in code: lofted bodies, panel lines, glass, mirrors, wheels, roof labels. |
| `src/scene.js` | Room, workbench, props, board, lights and post-processing. |
| `src/main.js` | Game flow, camera moves, animation, HUD wiring. |
| `src/audio.js` | Synthesised sounds (WebAudio). No audio files. |
| `tools/evolve.js` | The puzzle generator. |
| `tools/solver.test.js` | Tests: the solver against a plain search, and every bank entry. |
| `tools/assets.sh` | Converts the original images and models into `assets/`. |
| `serve.js` | Static server with compression and cache validation. |
| `garage.html` | Developer page that shows every vehicle model. |

## Load time

A first visit transfers about 6.3 MB in 37 requests; the first frame needs 4.7 MB of it.
Before this work it was 27.9 MB in 70 requests. A repeat visit transfers almost nothing: the browser checks each file and the server answers "304 Not Modified".

- **Images** are WebP. The backdrop loads in two steps: a 2k photo for the first frame, then
  the 6k photo, which replaces it without a pause.
- **Models** are one `.glb` file each, with Meshopt-compressed geometry and WebP textures.
- **Lighting** uses a 512 × 256 HDR map. Lighting is blurred, so a larger map adds nothing.
- **Code** is minified in `vendor/`. `index.html` lists every module in a `modulepreload` link,
  so the browser fetches all of them at once and not one import level at a time.
- **Server**: `serve.js` sends text and the HDR map as Brotli or gzip, and gives every file an
  `ETag` with `Cache-Control: no-cache`. File names carry no version, so the browser must
  check each file, but it never downloads an unchanged file twice.

`tools/assets.sh` rebuilds `assets/` from the original Poly Haven downloads.
To update a library, copy its ES module build and run
`bun build <file> --no-bundle --minify --target browser --outfile <file>`.

## Credits

All third-party assets are CC0 from [Poly Haven](https://polyhaven.com): the `artist_workshop`
HDRI and its backdrop photo; the `asphalt_02` and `plywood` textures; and the models
`wooden_table_02`, `desk_lamp_arm_01`, `spray_paint_bottles`, `pliers`, `screwdrivers_02`,
`measuring_tape_01`, `potted_plant_04` and `street_lamp_01`.

Libraries: three.js (MIT), postprocessing (Zlib), n8ao (ISC). Their licence files are in `vendor/`.
