// Small synthesised sounds; no audio files. The context starts on the first user gesture.
let ctx = null,
  out = null,
  noise = null;
export let muted = false;

export function init() {
  if (ctx) {
    ctx.resume();
    return;
  }
  ctx = new AudioContext();
  out = ctx.createGain();
  out.gain.value = muted ? 0 : 0.5;
  out.connect(ctx.destination);
  noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
  const d = noise.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
}
export function setMuted(m) {
  muted = m;
  if (out) out.gain.value = m ? 0 : 0.5;
}

function burst({ dur, freq, q = 1, type = 'bandpass', gain = 0.3, to = freq }) {
  if (!ctx) return;
  const t = ctx.currentTime,
    src = ctx.createBufferSource(),
    f = ctx.createBiquadFilter(),
    g = ctx.createGain();
  src.buffer = noise;
  src.loop = true;
  f.type = type;
  f.Q.value = q;
  f.frequency.setValueAtTime(freq, t);
  f.frequency.exponentialRampToValueAtTime(to, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(f).connect(g).connect(out);
  src.start(t, Math.random());
  src.stop(t + dur + 0.05);
}
function tone(freq, at, dur, gain = 0.16, type = 'sine') {
  if (!ctx) return;
  const t = ctx.currentTime + at,
    o = ctx.createOscillator(),
    g = ctx.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gain, t + 0.012);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(out);
  o.start(t);
  o.stop(t + dur + 0.05);
}

export const roll = () => burst({ dur: 0.32, freq: 900, to: 420, q: 0.8, gain: 0.16 }); // plastic wheels on the board
export const clack = () => {
  burst({ dur: 0.07, freq: 2400, q: 2, gain: 0.5 });
  tone(190, 0, 0.09, 0.2, 'triangle');
}; // metal on metal
export const drop = () => {
  burst({ dur: 0.05, freq: 1500, q: 1.5, gain: 0.22 });
  tone(140, 0, 0.06, 0.1, 'triangle');
};
export const whoosh = () => burst({ dur: 2.6, freq: 180, to: 900, q: 0.6, type: 'lowpass', gain: 0.12 });
export const blip = () => {
  tone(880, 0, 0.12, 0.1);
  tone(1320, 0.09, 0.16, 0.1);
};
export const win = () =>
  [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((f, i) => {
    tone(f, i * 0.11, 0.7, 0.14);
    tone(f * 2, i * 0.11, 0.4, 0.04);
  });
