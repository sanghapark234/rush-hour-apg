# 🚗 Rush Hour Live 3D

A **Rush Hour sliding puzzle** played through Twitch chat. This is a prototype of an APG (Audience Participation Game) idea for our Game AI course: viewers type commands in chat to slide cars around and get the red car out through the exit.

> The current version runs a **chat simulator**. There is no real Twitch integration yet; commands are typed into the input box on the right side of the page.

[한국어 README](README.ko.md)

## Getting Started

No build step or installation required.

1. Clone the repository and open `rush_hour_3d.html` in a browser (Chrome recommended).
2. An internet connection is required. Three.js (r128) is loaded from cdnjs.

## Rules

- Each car moves one cell at a time along its own axis (horizontal or vertical).
- Move the red car to the **right edge** of the board, then enter `red right` once more to escape. That final input counts as one move.
- Moves blocked by another car or a wall are rejected, and the car bumps and shakes.

### Chat Commands

| Command | Description |
|---|---|
| `color direction` | Move that car one cell (e.g. `blue right`, `yellow down`) |
| `hint` | Reveals the next move of an optimal solution and makes that car blink |

- Directions: `left`, `right`, `up`, `down`
- Colors: `red` (the player car), `blue`, `yellow`, `green`, `purple`, `orange`, `pink`, `cyan`, `brown`, `white`, `gray`, `lime`, `black`

### 3D View Controls

- **Drag**: rotate and tilt the camera
- **Mouse wheel**: zoom
- **Double-click (double-tap on mobile)**: reset to the default view

## Difficulty System

Difficulty is defined by the **minimum number of moves needed to free the red car**, counted in chat commands (one cell = one move, including the final exit input).

| Mode | Board | Min moves | Vehicles (excluding red) | Vehicle length |
|---|---|---|---|---|
| Easy | 6×6 | 4 – 10 | 7 | 2 – 3 |
| Normal | 6×6 | 11 – 25 | 10 | 2 – 3 |
| Hard | 8×8 | 26 – 45 | 11 | 2 – 4 |
| Expert | 8×8 | 46+ | 12 | 2 – 4 |

The ranges can be tuned in the `LV` object in the code. Under the puzzle, the game shows `Min N moves (M slides) · K reachable states`:

- **moves**: minimum moves with one cell counted as one move (the metric this game uses)
- **slides**: minimum moves when consecutive moves of the same car in the same direction count as one (traditional Rush Hour metric)
- **reachable states**: the size of the puzzle’s full state space

## Puzzle Generation and Minimum-Move Calculation

1. **Candidate layout**: Place the red car at the right edge and randomly place the other vehicles without overlap.
2. **Full state-space enumeration**: Run BFS from the layout to list every reachable state. A state stores only each car’s position along its axis. If a component exceeds 150,000 states, the candidate is discarded.
3. **Multi-source BFS**: Moves are reversible, so the state graph is undirected. Starting BFS from all goal states at once (red car at the right edge) gives the **exact minimum move count for every state**, plus an optimal path via parent pointers.
4. **Range sampling (reject sampling)**: Pick a random state whose minimum move count falls inside the target range as the starting state.
5. **Time limit**: Try for up to 4 seconds. If no puzzle fits the range, use the closest one and show `closest to ...` on screen.

> The earlier prototype cut BFS off at a fixed state count, so it could miss solutions that existed. The current version enumerates the whole state space, so the minimum move count is exact.

`hint` reruns the same analysis from the current state and reports the first move of an optimal path.

## Code Structure

Everything lives in a single file (`rush_hour_3d.html`), organized in three parts:

| Area | Key functions | Role |
|---|---|---|
| Puzzle engine | `nbrs`, `analyze`, `pathFrom`, `generate` | Move validation, state-space analysis, puzzle generation per difficulty |
| 3D rendering | `vehicle`, `buildMeshes`, `place`, render loop | Three.js scene, vehicle models, smooth motion and bump animation, confetti |
| Game flow | `command`, `reset`, `newPuzzle` | Chat command parsing, move handling, win check, UI updates |

- **Vehicle models**: 2-cell vehicles are cars (sedan, hatchback or sports coupe), 3-cell vehicles are trucks (box truck or tanker), and 4-cell vehicles are long trailer trucks. Each vehicle uses its own color throughout.
- **Engine and renderer are separate**: the engine only works with position arrays, so the 3D models can change without touching the game logic.

## Twitch Streams and the 3D Camera

A Twitch stream is the same video for every viewer, so viewers cannot rotate the 3D view themselves. If we connect this to a real stream, we are considering these options:

- **OBS Browser Source** (baseline): The streamer shows this page in OBS. The camera is controlled by an auto-rotating orbit or by `cam` chat commands.
- **Twitch Extension**: Allows a per-viewer camera, but requires registration and review.
- **Separate web page + WebSocket**: Per-viewer camera with synced puzzle state, but viewers watch outside the stream.

## Limitations

- No real Twitch chat integration yet (local simulation only).
- Generating an 8×8 puzzle can take up to 4 seconds, and the page freezes briefly while it runs.
- There are only 12 clearly distinct vehicle colors, so Hard is capped at 11 vehicles and Expert at 12.
- The difficulty ranges have not been tuned through playtesting.

## Roadmap

- [ ] Real Twitch chat integration with `tmi.js`
- [ ] Viewer majority voting (execute the most frequent command within a time window)
- [ ] `cam left/right/top/reset` commands and an auto-rotating camera
- [ ] Extra difficulty metrics (blocker chain depth, number of optimal solutions, branching factor)
- [ ] Pre-generated puzzles stored as JSON (remove generation delay)
- [ ] Per-viewer scores and a leaderboard

## Tech Stack

HTML / CSS / JavaScript, [Three.js](https://threejs.org/) r128

## Team

<!-- Add names and roles here -->
