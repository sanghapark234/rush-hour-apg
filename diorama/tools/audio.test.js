// Tests for the synthesised sounds (src/audio.js). A fake AudioContext records what the game
// would play, so the tests need no sound device.
import { test, expect } from 'bun:test';

const made = [];
let resumed = 0;
const param = () => ({ value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {} });
const node = (kind) => {
  const n = {
    kind,
    started: false,
    stopped: false,
    gain: param(),
    frequency: param(),
    Q: param(),
    connect: (to) => to,
    start: () => (n.started = true),
    stop: () => (n.stopped = true),
  };
  made.push(n);
  return n;
};
globalThis.AudioContext = class {
  currentTime = 0;
  sampleRate = 8000;
  destination = {};
  createGain = () => node('gain');
  createBufferSource = () => node('noise');
  createBiquadFilter = () => node('filter');
  createOscillator = () => node('tone');
  createBuffer = (channels, length) => ({ getChannelData: () => new Float32Array(length) });
  resume = () => resumed++;
};
const sfx = await import('../src/audio.js');
const effects = ['roll', 'clack', 'drop', 'whoosh', 'blip', 'win'];
const sources = () => made.filter((n) => n.kind === 'noise' || n.kind === 'tone');

test('before the first user action no effect makes a sound', () => {
  for (const name of effects) sfx[name]();
  expect(made).toHaveLength(0);
});

test('after init every effect starts and stops at least one sound source', () => {
  sfx.init();
  const out = made[0];
  expect(out.gain.value).toBe(0.5);
  for (const name of effects) {
    const before = sources().length;
    sfx[name]();
    const mine = sources().slice(before);
    expect(mine.length).toBeGreaterThan(0);
    expect(mine.every((n) => n.started && n.stopped)).toBe(true);
  }
});

test('mute sets the output to zero, and sound on brings it back', () => {
  const out = made[0];
  sfx.setMuted(true);
  expect(sfx.muted).toBe(true);
  expect(out.gain.value).toBe(0);
  sfx.setMuted(false);
  expect(out.gain.value).toBe(0.5);
});

test('a second init makes no second audio output and resumes the first', () => {
  const gains = made.filter((n) => n.kind === 'gain').length;
  sfx.init();
  expect(made.filter((n) => n.kind === 'gain').length).toBe(gains);
  expect(resumed).toBe(1);
});
