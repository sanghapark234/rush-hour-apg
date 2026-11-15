// Game flow: welcome view of the room -> fly in to the board -> play -> pull back on a win.
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createStage, BASE_H } from './scene.js';
import { makeVehicle, disposeVehicle } from './vehicles.js';
import { LEVELS, expand, pathOpen, slide } from './engine.js';
import { START, ladder, verdict, step, choose } from './adapt.js';
import * as sfx from './audio.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
// After a Twitch login the address holds the login token. It leaves the address at once.
const back = location.hash.includes('access_token=') ? location.hash.slice(1) : '';
if (back) history.replaceState(null, '', location.pathname + location.search);
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const stage = createStage($('stage'));
const { camera, dof } = stage;

// ---------- puzzle state ----------
let puzzle = null,
  pos = [],
  moves = 0,
  won = false,
  busy = false,
  viewer = 0,
  lastMove = null;
let phase = 'welcome'; // welcome | fly | play | won
// The replay of the shortest solution: null, or {done}. `done` is true when the red car left.
// A new object marks each replay, so a replay that was stopped or replaced ends its loop.
let demo = null,
  shown = 0; // the moves that a replay made since the last Reset
let cars = [],
  boardInfo = null,
  level = Object.hasOwn(LEVELS, params.get('level')) || params.get('level') === 'auto' ? params.get('level') : 'normal';
// The Auto level (adapt.js): the place on the ladder, the puzzles played, and the last result.
// `spent` holds the moves made before a Reset, so a Reset does not hide them from the result.
let skill = START,
  rungs = null,
  outcome = null,
  hints = 0,
  tried = false,
  spent = 0;
const played = new Set();
const carGroup = new THREE.Group();

const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
const waiting = new Map();
let reqId = 0;
let workerDown = null; // set when the worker failed: every request then rejects at once
worker.onmessage = ({ data }) => {
  waiting.get(data.id).res(data.result);
  waiting.delete(data.id);
};
worker.onerror = worker.onmessageerror = (e) => {
  workerDown = new Error('the solver stopped' + (e.message ? ': ' + e.message : ''));
  for (const w of waiting.values()) w.rej(workerDown);
  waiting.clear();
};
const ask = (msg) =>
  new Promise((res, rej) => {
    if (workerDown) return rej(workerDown);
    const id = ++reqId;
    waiting.set(id, { res, rej });
    worker.postMessage({ ...msg, id });
  });

// The bank of generated puzzles (tools/evolve.js). Each level deals its entries in a random
// order and starts again only when all of them were played.
const bank = fetch(new URL('./puzzles.json', import.meta.url)).then((r) => {
  if (!r.ok) throw new Error('puzzles.json: HTTP ' + r.status);
  return r.json();
});
const decks = {};
function deal(entries, key) {
  if (!decks[key]?.length) {
    const d = entries.map((_, i) => i);
    for (let i = d.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [d[i], d[j]] = [d[j], d[i]];
    }
    decks[key] = d;
  }
  return entries[decks[key].pop()];
}

// ---------- chat log ----------
const chat = $('chat');
function log(name, msg, kind = 'user') {
  const l = document.createElement('div');
  l.className = 'line ' + kind;
  const u = document.createElement('b');
  u.textContent = name;
  l.append(u, document.createTextNode(' ' + msg));
  chat.append(l);
  while (chat.children.length > 120) chat.firstChild.remove();
  chat.scrollTop = chat.scrollHeight;
}
// `heard` collects the game's answers to one command, for the reply in Twitch chat.
let heard = null;
const sys = (msg, kind = 'system') => {
  heard?.push({ msg, kind });
  log('BOARD', msg, kind);
};

// ---------- camera ----------
const controls = new OrbitControls(camera, $('stage'));
Object.assign(controls, {
  enableDamping: true,
  dampingFactor: 0.08,
  enablePan: false,
  minPolarAngle: 0.03,
  maxPolarAngle: 1.36,
  enabled: false,
  zoomSpeed: 0.6,
  rotateSpeed: 0.5,
});
const focus = new THREE.Vector3(0, BASE_H, 0); // where the camera looks and focuses
dof.target = focus;
const look = { range: 14, bokeh: 1.4, shift: 0 };
let tween = null,
  camName = 'angle';

function pose(name) {
  const N = puzzle?.N ?? 6,
    d = (2.5 * N + 5.5) * Math.max(1, 1.25 / Math.max(camera.aspect, 0.5));
  const t = [-0.2, BASE_H, 0];
  const at = (deg, dist, az = 0) => {
    const a = (deg * Math.PI) / 180;
    return [t[0] + Math.sin(az) * Math.cos(a) * dist, t[1] + Math.sin(a) * dist, Math.cos(az) * Math.cos(a) * dist];
  };
  // `range` is the distance from the focus point at which the blur is full. In the angled and low
  // views it grows with the lot, so every car stays sharp; the table is nearly sharp too and the
  // room stays soft. The top view looks straight down, where all cars are at one distance.
  switch (name) {
    case 'welcome':
      return { p: [-2.5, 7.6, 31], t: [-5.5, 1.9, 0], fov: 30, range: 14, bokeh: 1.6, shift: 0 };
    case 'top':
      return { p: at(88.5, d * 0.98), t, fov: 30, range: 9, bokeh: 1.6, shift: 1 };
    case 'low':
      return { p: at(24, d * 0.74, -0.5), t, fov: 30, range: 5.5 * N, bokeh: 2.6, shift: 1 };
    case 'won':
      return { p: [10, 8.5, 25], t: [0, 1.6, 0], fov: 30, range: 12, bokeh: 1.8, shift: 0.5 };
    default:
      return { p: at(57, d), t, fov: 30, range: 3.5 * N, bokeh: 2.6, shift: 1 };
  }
}
function applyPose(q) {
  camera.position.fromArray(q.p);
  focus.fromArray(q.t);
  camera.fov = q.fov;
  look.range = q.range;
  look.bokeh = q.bokeh;
  look.shift = q.shift;
}
function flyTo(name, dur, done) {
  const b = pose(name);
  const a = { p: camera.position.toArray(), t: focus.toArray(), fov: camera.fov, range: look.range, bokeh: look.bokeh, shift: look.shift };
  controls.enabled = false;
  tween = { a, b, t: 0, dur: calm ? Math.min(dur, 0.01) : dur, done };
}
const mix = (x, y, k) => x + (y - x) * k;
const ease = (k) => (k < 0.5 ? 4 * k * k * k : 1 - (-2 * k + 2) ** 3 / 2);
function stepCamera(dt, time) {
  if (tween) {
    tween.t = Math.min(1, tween.t + dt / tween.dur);
    const k = ease(tween.t),
      { a, b } = tween;
    applyPose({
      p: a.p.map((v, i) => mix(v, b.p[i], k)),
      t: a.t.map((v, i) => mix(v, b.t[i], k)),
      fov: mix(a.fov, b.fov, k),
      range: mix(a.range, b.range, k),
      bokeh: mix(a.bokeh, b.bokeh, k),
      shift: mix(a.shift, b.shift, k),
    });
    camera.lookAt(focus);
    if (tween.t >= 1) {
      const done = tween.done;
      tween = null;
      controls.target.copy(focus);
      controls.update();
      done?.();
    }
  } else if (phase === 'play') {
    controls.update();
    focus.copy(controls.target);
  } else {
    // Slow handheld sway while the room is on show.
    const q = pose(phase === 'won' ? 'won' : 'welcome'),
      s = calm ? 0 : 1;
    camera.position.set(q.p[0] + Math.sin(time * 0.23) * 0.9 * s, q.p[1] + Math.sin(time * 0.31) * 0.25 * s, q.p[2] + Math.cos(time * 0.19) * 0.5 * s);
    camera.lookAt(focus);
  }
  dof.cocMaterial.focusRange = look.range;
  dof.bokehScale = look.bokeh;
  // Keep the board clear of the side panel (or the bottom sheet on narrow screens).
  const w = innerWidth,
    h = innerHeight,
    narrow = w < 860;
  const sx = narrow ? 0 : Math.round((look.shift * $('panel').offsetWidth) / 2),
    sy = narrow ? Math.round((look.shift * $('panel').offsetHeight) / 2) : 0;
  camera.setViewOffset(w, h, sx, sy, w, h);
}
function setCam(name) {
  camName = name;
  for (const b of document.querySelectorAll('[data-cam]')) b.setAttribute('aria-pressed', b.dataset.cam === name);
  if (phase === 'play')
    flyTo(name, 1.1, () => {
      controls.enabled = true;
    });
}

// ---------- vehicles ----------
const worldOf = (m, p) => [(m.axis == 'h' ? p + m.len / 2 : m.lane + 0.5) - puzzle.N / 2, (m.axis == 'h' ? m.lane + 0.5 : p + m.len / 2) - puzzle.N / 2];
function buildCars(dropIn) {
  for (const g of cars) disposeVehicle(g);
  carGroup.clear();
  cars = puzzle.meta.map((m, i) => {
    const g = makeVehicle(m, i),
      u = g.userData;
    Object.assign(u, {
      cur: pos[i],
      tgt: pos[i],
      vel: 0,
      k: 190,
      c: 24,
      bump: 0,
      bumpDir: 1,
      hint: 0,
      y: dropIn ? 2.2 : 0,
      vy: 0,
      wait: dropIn ? 0.25 + i * 0.07 : 0,
      landed: !dropIn,
      pitch: 0,
    });
    carGroup.add(g);
    return g;
  });
}
function stepCars(dt, time) {
  cars.forEach((g, i) => {
    const m = puzzle.meta[i],
      u = g.userData;
    const acc = u.k * (u.tgt - u.cur) - u.c * u.vel,
      before = u.cur;
    u.vel += acc * dt;
    u.cur += u.vel * dt;
    if (u.wait > 0) u.wait -= dt;
    else if (!u.landed) {
      u.vy -= 30 * dt;
      u.y += u.vy * dt;
      if (u.y <= 0) {
        u.y = 0;
        if (u.vy < -2.5) {
          u.vy *= -0.22;
          sfx.drop();
        } else {
          u.vy = 0;
          u.landed = true;
        }
      }
    }
    u.bump = Math.max(0, u.bump - dt * 3.2);
    const shake = Math.sin(time * 46) * 0.07 * u.bump * u.bumpDir;
    const [x, z] = worldOf(m, u.cur + shake);
    g.position.set(x, BASE_H + 0.02 + u.y, z);
    g.visible = u.wait <= 0;
    const local = (u.cur - before) * u.sign;
    for (const w of u.wheels) w.rotation.z -= local / 0.135;
    // The body leans back when it pulls away and nods when it stops.
    u.pitch += (THREE.MathUtils.clamp(acc * u.sign * 0.0011, -0.07, 0.07) - u.pitch) * Math.min(1, dt * 14);
    u.chassis.rotation.z = u.pitch + Math.sin(time * 46) * 0.02 * u.bump;
    u.hint = Math.max(0, u.hint - dt * 0.42);
    const pulse = u.hint > 0 ? 0.5 + 0.5 * Math.sin(time * 11) : 0;
    for (const p of u.paints) p.emissiveIntensity = pulse * 0.55 * Math.min(1, u.hint * 3);
    u.lamps.emissiveIntensity = 0.35 + pulse * 5 * Math.min(1, u.hint * 3);
  });
  const gate = stage.gate;
  if (gate) gate.rotation.x += ((won || demo?.done ? 1.38 : 0) - gate.rotation.x) * Math.min(1, dt * 5);
}

// ---------- confetti: paper punch-outs ----------
const CN = 170,
  paper = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.11, 0.07), new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 0.8 }), CN);
paper.castShadow = true;
paper.count = 0;
paper.frustumCulled = false;
stage.scene.add(paper);
let bits = [];
const dummy = new THREE.Object3D();
function confetti() {
  const x0 = boardInfo.offsetX + puzzle.N / 2 + 0.8,
    z0 = boardInfo.exitZ,
    col = new THREE.Color();
  bits = [...Array(CN)].map((_, i) => {
    paper.setColorAt(i, col.setHSL(Math.random(), 0.75, 0.58));
    const a = Math.random() * Math.PI * 2,
      s = 1.5 + Math.random() * 4;
    return {
      p: new THREE.Vector3(x0, BASE_H + 0.8, z0),
      v: new THREE.Vector3(Math.cos(a) * s - 1.5, 6 + Math.random() * 7, Math.sin(a) * s),
      r: new THREE.Euler(Math.random() * 6, Math.random() * 6, Math.random() * 6),
      w: 4 + Math.random() * 8,
      rest: false,
    };
  });
  paper.count = CN;
  paper.instanceColor.needsUpdate = true;
}
function stepConfetti(dt) {
  if (!paper.count) return;
  bits.forEach((b, i) => {
    if (!b.rest) {
      b.v.y -= 15 * dt;
      b.v.multiplyScalar(1 - 1.6 * dt);
      b.p.addScaledVector(b.v, dt);
      b.r.x += b.w * dt;
      b.r.z += b.w * 0.7 * dt;
      const onBase = Math.abs(b.p.x) < puzzle.N / 2 + 2.3 && Math.abs(b.p.z) < puzzle.N / 2 + 1.3,
        floor = onBase ? BASE_H + 0.04 : 0.07;
      if (b.p.y <= floor && b.v.y < 0) {
        b.p.y = floor + Math.random() * 0.01;
        b.rest = true;
        b.r.set(-Math.PI / 2, 0, Math.random() * 6);
      }
    }
    dummy.position.copy(b.p);
    dummy.rotation.copy(b.r);
    dummy.updateMatrix();
    paper.setMatrixAt(i, dummy.matrix);
  });
  paper.instanceMatrix.needsUpdate = true;
}

// ---------- game flow ----------
const dirName = (i, d) => (puzzle.meta[i].axis == 'h' ? (d > 0 ? 'right' : 'left') : d > 0 ? 'down' : 'up');
function render() {
  $('moves').textContent = moves;
  $('status').textContent = busy ? 'Building a puzzle…' : won ? 'Cleared' : demo ? (demo.done ? 'Solution shown' : 'Showing the solution') : 'In play';
  $('solve').textContent = demo && !demo.done ? 'Stop' : 'Show solution';
  $('solve').disabled = won || Boolean(demo?.done);
  document.body.dataset.phase = phase;
}
function legend() {
  $('legend').replaceChildren(
    ...puzzle.meta.map((m) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.style.setProperty('--c', m.color);
      b.textContent = m.id;
      b.title = `Type "${m.id} ${m.axis == 'h' ? 'left / right' : 'up / down'}"`;
      b.addEventListener('click', () => {
        $('command').value = m.id + ' ';
        $('command').focus();
      });
      return b;
    }),
  );
}
async function command(raw, name) {
  raw = raw.slice(0, 400).trim().toLowerCase().replace(/\s+/g, ' ').slice(0, 80);
  if (!raw || busy || phase === 'welcome' || phase === 'fly') return;
  log(name || 'viewer' + ++viewer, raw);
  const [a, b, c, ...extra] = raw.split(' ');
  if (a === 'cam' && c === undefined) {
    const name2 = { top: 'top', angle: 'angle', low: 'low', reset: 'angle' }[b];
    if (!name2) return sys('Camera views: cam angle, cam top, cam low.', 'error');
    setCam(name2);
    return sys('Camera: ' + name2 + '.');
  }
  if (won) return sys('Already cleared. Reset or start a new puzzle.');
  if (demo && !demo.done && raw === 'stop') return stopSolution();
  if (demo) return sys(demo.done ? 'The solution was shown. Reset or start a new puzzle.' : 'The solution is playing. Type stop to end it.');
  if (raw === 'solve') return void showSolution(false); // the caller does not wait for the replay
  if (raw === 'hint') {
    const asked = puzzle,
      h = await ask({ type: 'hint', pos: pos.slice(), last: lastMove }).catch(() => null); // a stopped solver gives no hint
    if (asked !== puzzle || won || demo) return; // a replay started meanwhile
    if (!h) return sys('Hint unavailable.', 'error');
    const [i, d] = h.move ?? [0, 1];
    cars[i].userData.hint = 1;
    sfx.blip();
    hints++;
    tried = true;
    return sys(h.move ? `Hint: ${puzzle.meta[i].id} ${dirName(i, d)} · ${h.left} moves to go` : 'Hint: red right (exit!)');
  }
  const i = puzzle.meta.findIndex((m) => m.id === a);
  // An optional count moves a vehicle several cells: "blue right 3". Each cell is one move.
  const count = c === undefined ? 1 : /^[1-7]$/.test(c) ? Number(c) : 0;
  if (i < 0 || extra.length || !count || !['left', 'right', 'up', 'down'].includes(b)) return sys('Invalid command. Try: blue right, or blue right 3', 'error');
  const m = puzzle.meta[i],
    u = cars[i].userData,
    horiz = b == 'left' || b == 'right';
  if (horiz !== (m.axis == 'h')) return sys(`${a} cannot move ${b}.`, 'error');
  const d = b == 'right' || b == 'down' ? 1 : -1,
    { done, exit } = slide(puzzle, pos, i, d, count);
  if (exit) {
    moves += done;
    return win();
  }
  if (!done) {
    u.bump = 1;
    u.bumpDir = d;
    sfx.clack();
    return sys('Move blocked!', 'error');
  }
  u.tgt = pos[i];
  moves += done;
  lastMove = [i, d];
  tried = true;
  sfx.roll();
  sys(done < count ? `${a} moved ${b} ${done} of ${count}, then it was blocked.` : `${a} moved ${b}${count > 1 ? ' ' + count : ''}.`, 'success');
  if (pathOpen(puzzle, pos)) {
    // The way out is free: the red car drives the rest by itself. Each cell counts as a move,
    // as it does in the shortest solution, and win() counts the exit move.
    const rest = puzzle.N - puzzle.meta[0].len - pos[0];
    pos[0] += rest;
    moves += rest;
    sys('The way is open. RED drives out.');
    return win(LEAVE);
  }
  render();
}
// The red car starts its last drive after `delay` ms, so the vehicle that just left its way is clear.
const LEAVE = 350;
function driveOut(delay, still) {
  const go = () => {
    if (!still()) return;
    Object.assign(cars[0].userData, { tgt: puzzle.N + 0.85, k: 16, c: 7.5 });
    sfx.roll();
  };
  if (delay) setTimeout(go, delay);
  else go();
}
function win(delay = 0) {
  won = true;
  moves++;
  phase = 'won';
  outcome ??= { solved: true, moves: spent + moves, best: puzzle.moves, hints }; // the first clear of this puzzle counts
  const now = puzzle;
  driveOut(delay, () => won && puzzle === now);
  setTimeout(() => {
    if (won) {
      sfx.win();
      confetti();
    }
  }, 650);
  sys('Success! RED escaped through the exit!', 'success');
  const best = puzzle.moves;
  $('win-moves').textContent = moves;
  $('win-note').textContent = shown
    ? `The game played ${shown} of them. The shortest solution takes ${best}.`
    : moves <= best
      ? 'A perfect run. That is the shortest solution.'
      : `The shortest solution takes ${best}.`;
  $('watch').hidden = moves <= best;
  flyTo('won', 3.6);
  render();
  setTimeout(
    () => {
      if (won) $('win').hidden = false;
    },
    calm ? 0 : 2400,
  );
}
// Plays the shortest solution: from the start of the puzzle after a win, or from the current
// position when the audience gives up. Each step is one hint lookup, so the route is shortest
// from wherever the cars are. It is not a solve: the Auto level counts a give-up that reaches the
// exit as not solved, and each move of a stopped give-up as a hint.
const pause = (ms) => new Promise((r) => setTimeout(r, ms));
async function showSolution(fromStart) {
  if (busy || !puzzle || (demo && !demo.done) || (fromStart ? phase !== 'won' : phase !== 'play' || won || demo)) return;
  if (fromStart) reset(false);
  const run = (demo = { done: false }),
    first = moves;
  sys(fromStart ? 'The shortest solution, from the start:' : 'The shortest solution from here:');
  render();
  if (fromStart) await pause(calm ? 0 : 1800); // the camera returns to the lot first
  let car = -1;
  while (demo === run) {
    const h = await ask({ type: 'hint', pos: pos.slice(), last: lastMove }).catch(() => null); // a stopped solver gives no route
    if (demo !== run) return;
    if (!h) {
      demo = null;
      render();
      return sys('The solution is unavailable.', 'error');
    }
    const [i, d] = h.move ?? [0, 1];
    await pause(i === car ? 260 : 620); // a short stop when another vehicle starts
    if (demo !== run) return;
    car = i;
    const { done, exit } = cars[i] ? slide(puzzle, pos, i, d, 1) : {},
      u = cars[i]?.userData;
    if (!done && !exit) {
      // the route does not fit this lot
      demo = null;
      render();
      return sys('The solution is unavailable.', 'error');
    }
    moves++;
    shown++;
    if (!fromStart) {
      hints++; // a move that the game made is a hint that chat did not have to play
      tried = true;
    }
    lastMove = [i, d];
    let rest = -1; // the cells that the red car drives by itself, when the move opened its way
    if (!exit) {
      u.tgt = pos[i];
      sfx.roll();
      if (pathOpen(puzzle, pos)) {
        rest = puzzle.N - puzzle.meta[0].len - pos[0];
        pos[0] += rest;
        moves += rest + 1; // each cell, then the exit
        shown += rest + 1;
        if (!fromStart) hints += rest + 1;
      }
    }
    if (exit || rest >= 0) {
      driveOut(exit ? 0 : LEAVE, () => demo === run);
      run.done = true;
      if (!fromStart) outcome ??= { solved: false };
      render();
      return sys(`Red is out in ${moves - first} moves${fromStart ? '' : ' from there'}. Reset to try again, or start a new puzzle.`, 'success');
    }
    render();
  }
}
function stopSolution() {
  demo = null;
  render();
  sys('Replay stopped. You can go on from here.');
}
function backToPlay() {
  $('win').hidden = true;
  paper.count = 0;
  if (phase === 'won') {
    phase = 'play';
    flyTo(camName, 2.2, () => {
      controls.enabled = true;
    });
  }
}
function reset(dropIn = false) {
  spent += moves;
  pos = puzzle.start.slice();
  moves = 0;
  won = false;
  lastMove = null;
  demo = null;
  shown = 0;
  backToPlay();
  buildCars(dropIn);
  render();
}
async function newPuzzle() {
  if (busy) return;
  const want = level;
  let note = '';
  busy = true;
  demo = null; // a replay ends here, also when the load fails
  render();
  try {
    const all = await bank;
    let entry;
    if (want === 'auto') {
      rungs ??= ladder(all);
      // Judge the puzzle that ends now, when it was an Auto puzzle and the audience tried it.
      const result = puzzle?.auto ? (outcome ?? (tried ? { solved: false } : null)) : null;
      if (result) skill = step(skill, verdict(result));
      const i = choose(rungs.length, skill, played);
      played.add(i);
      entry = rungs[i];
      // The note states what the audience gets: at an end of the ladder the puzzle may not change.
      if (result)
        note =
          entry.moves > puzzle.moves
            ? 'Auto: you solved that well, so this puzzle is harder.'
            : entry.moves < puzzle.moves
              ? 'Auto: that one was tough, so this puzzle is easier.'
              : '';
    } else entry = deal(all[want], want);
    const made = { ...expand(entry, { flip: Math.random() < 0.5 }), auto: want === 'auto' };
    if (!(await ask({ type: 'load', puzzle: made }))) throw new Error('the puzzle has no solution');
    puzzle = made;
  } finally {
    busy = false;
  }
  boardInfo = stage.buildBoard(puzzle.N, puzzle.exitRow, puzzle.walls);
  stage.board.add(carGroup);
  $('info').textContent = `${puzzle.N}×${puzzle.N} lot`;
  chat.replaceChildren();
  sys('Help the red car reach the exit. Type a colour and a direction.');
  if (note) sys(note);
  legend();
  reset(true);
  outcome = null;
  hints = 0;
  tried = false;
  spent = 0; // after the load: a late hint reply belongs to the old puzzle
  if (phase === 'play')
    flyTo(camName, 1.2, () => {
      controls.enabled = true;
    });
  else if (phase === 'welcome' && !tween) applyPose(pose('welcome'));
  if (want !== level) return newPuzzle(); // the level changed while this puzzle loaded
}
function start() {
  if (phase !== 'welcome' || !puzzle) return;
  sfx.init();
  sfx.whoosh();
  phase = 'fly';
  render();
  flyTo(camName, 3.8, () => {
    phase = 'play';
    controls.enabled = true;
    render();
    $('command').focus();
  });
}

// ---------- wiring ----------
$('form').addEventListener('submit', (e) => {
  e.preventDefault();
  command($('command').value);
  $('command').value = '';
});
$('start').addEventListener('click', start);
$('hint').addEventListener('click', () => command('hint'));
$('reset').addEventListener('click', () => {
  if (!busy && puzzle) reset(true);
});
const fresh = () =>
  newPuzzle().catch((err) => {
    render();
    sys('Could not load a puzzle: ' + err.message, 'error');
  });
$('new').addEventListener('click', fresh);
$('again').addEventListener('click', fresh);
$('replay').addEventListener('click', () => reset(true));
$('watch').addEventListener('click', () => showSolution(true));
$('solve').addEventListener('click', () => (demo && !demo.done ? stopSolution() : showSolution(false)));
$('sound').addEventListener('click', (e) => {
  sfx.init();
  sfx.setMuted(!sfx.muted);
  e.currentTarget.setAttribute('aria-pressed', !sfx.muted);
  e.currentTarget.textContent = sfx.muted ? 'Sound off' : 'Sound on';
});
for (const b of document.querySelectorAll('[data-cam]')) b.addEventListener('click', () => setCam(b.dataset.cam));
for (const r of document.querySelectorAll('input[name=level], #level'))
  r.addEventListener('change', (e) => {
    level = e.target.value;
    for (const o of document.querySelectorAll('input[name=level]')) o.checked = o.value === level;
    $('level').value = level;
    fresh();
  });
for (const o of document.querySelectorAll('input[name=level]')) o.checked = o.value === level;
$('level').value = level;
// Hook for a chat source or a test: apg.command('alice', 'blue right').
// apg.state() gives a copy of the puzzle and the position, for a bot or a test.
window.apg = { command: (user, text) => command(String(text), String(user)), state: () => structuredClone({ puzzle, pos, moves, won, level, demo }), stage };

// Twitch chat (twitch.js) joins the channel that the address names: ?channel=name. The module
// loads only then, or when the browser comes back from the Twitch login. The chat starts after
// the first puzzle, which clears the chat panel.
const twitchFailed = (err) => {
  $('source').textContent = 'Twitch: off';
  sys('Twitch chat did not start: ' + err.message, 'error');
};
if (back || params.has('error')) import('./twitch.js').then((twitch) => twitch.comeBack(back)).catch(twitchFailed);
const twitch = () =>
  params.has('channel') &&
  import('./twitch.js')
    .then((twitch) =>
      twitch.start({
        params,
        sys,
        note: (text) => ($('source').textContent = text),
        button: $('login'),
        // Every command that the bridge passes on answers before command() returns: only a hint waits.
        play(user, text) {
          heard = [];
          command(text, user);
          const lines = heard;
          heard = null;
          return { lines, won, moves };
        },
      }),
    )
    .catch(twitchFailed);

function resize() {
  stage.resize(innerWidth, innerHeight);
}
addEventListener('resize', resize);
resize();
applyPose(pose('welcome'));
camera.lookAt(focus);

const timer = new THREE.Timer();
function frame() {
  requestAnimationFrame(frame);
  timer.update();
  const dt = Math.min(timer.getDelta(), 0.05),
    time = timer.getElapsed();
  if (puzzle) stepCars(dt, time);
  stepConfetti(dt);
  stepCamera(dt, time);
  camera.updateProjectionMatrix();
  stage.composer.render(dt);
}
frame();

let loaded = 0,
  failed = false;
for (const task of stage.tasks)
  task.then(
    () => {
      if (failed) return;
      const percent = Math.round((++loaded / stage.tasks.length) * 100) + '%';
      $('start').textContent = 'Loading ' + percent;
      $('start').style.setProperty('--loaded', percent); // the button fills up
    },
    () => {},
  );
Promise.all([stage.ready, newPuzzle()]).then(
  () => {
    document.body.classList.add('ready');
    twitch();
    $('start').disabled = false;
    $('start').textContent = 'Start';
    if (params.has('skip')) {
      camName = { top: 'top', low: 'low' }[params.get('cam')] ?? 'angle';
      phase = 'play';
      applyPose(pose(camName));
      camera.lookAt(focus);
      controls.target.copy(focus);
      controls.update();
      controls.enabled = true;
      for (const g of cars) Object.assign(g.userData, { wait: 0, y: 0, landed: true });
      setCam(camName);
      tween = null;
      controls.enabled = true;
      render();
    }
  },
  (err) => {
    failed = true;
    $('start').textContent = 'Could not load';
    $('start').style.setProperty('--loaded', '0%');
    sys('Loading failed: ' + err.message, 'error');
    throw err;
  },
);
