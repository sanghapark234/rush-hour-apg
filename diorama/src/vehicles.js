// Die-cast toy vehicles, modelled in code.
// Each body is a loft: superellipse cross-sections placed along the length (+X is the front).
// One unit is one parking cell; a vehicle stands on y = 0.
import * as THREE from 'three';
import { toCreasedNormals } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const SEG = 40;
const W = 0.31; // half width of a body
const sgnpow = (v, e) => Math.sign(v) * Math.abs(v) ** e;
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);

// stations: [{x, w, y0, y1, n, taper}] — w is the half width, n the corner exponent,
// taper narrows the section toward its top (tumblehome).
function loft(stations, crease = 0.7) {
  const pos = [], idx = [];
  for (const s of stations) {
    const mid = (s.y0 + s.y1) / 2, h = (s.y1 - s.y0) / 2, e = 2 / (s.n ?? 4);
    for (let k = 0; k < SEG; k++) {
      const a = (k / SEG) * Math.PI * 2, c = sgnpow(Math.cos(a), e), sn = sgnpow(Math.sin(a), e);
      pos.push(s.x, mid + h * sn, s.w * c * (1 - (s.taper ?? 0) * (sn + 1) / 2));
    }
  }
  const R = stations.length;
  for (let r = 0; r < R - 1; r++) for (let k = 0; k < SEG; k++) {
    const a = r * SEG + k, b = r * SEG + (k + 1) % SEG, c = a + SEG, d = b + SEG;
    idx.push(a, c, b, b, c, d);
  }
  for (const [r, flip] of [[0, false], [R - 1, true]]) {
    const s = stations[r], ci = pos.length / 3;
    pos.push(s.x, (s.y0 + s.y1) / 2, 0);
    for (let k = 0; k < SEG; k++) {
      const a = r * SEG + k, b = r * SEG + (k + 1) % SEG;
      flip ? idx.push(ci, b, a) : idx.push(ci, a, b);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  return toCreasedNormals(g, crease);
}

// A rounded hull: plan view and side view both close smoothly at the ends.
// top(u) gives the upper edge for u in [-1, 1] (rear to front).
function hull(len, { w = W, y0 = 0.085, top, n = 5, round = 7, steps = 30, taper = 0.04 }) {
  const st = [];
  for (let i = 0; i <= steps; i++) {
    const u = Math.sin((i / steps - 0.5) * Math.PI), k = (1 - Math.abs(u) ** round) ** (1 / round);
    const y1 = top(u);
    st.push({ x: u * len / 2, w: Math.max(w * k, 0.004), y0: lerp(y0 + (y1 - y0) * 0.42, y0, k), y1: lerp(y0 + (y1 - y0) * 0.72, y1, k), n, taper });
  }
  return loft(st, 0.9);
}

// A glass cabin from x = a to x = b: raked screens, flat roof, sides leaning in.
function cabin(a, b, belt, roof, { w = W * 0.9, front = 0.3, rear = 0.24, taper = 0.2 }) {
  const y0 = belt - 0.05, st = [], lip = 0.02;
  const pts = [[a, belt + lip], [a + rear, roof], [b - front, roof], [b, belt + lip]];
  for (let j = 0; j < 3; j++) for (let i = 0; i <= 5; i++) {
    if (j && !i) continue;
    const t = i / 5, [x0, h0] = pts[j], [x1, h1] = pts[j + 1];
    const t2 = j === 1 ? t : j === 0 ? Math.sin(t * Math.PI / 2) : 1 - Math.cos(t * Math.PI / 2);
    st.push({ x: lerp(x0, x1, t), w, y0, y1: lerp(h0, h1, j === 1 ? t : j === 0 ? t2 : t2), n: 5, taper });
  }
  return loft(st, 0.8);
}

function paint(color) {
  const c = new THREE.Color(color), hsl = c.getHSL({}), pale = hsl.l > 0.6;
  return new THREE.MeshPhysicalMaterial({
    color: c, metalness: pale ? 0.1 : 0.55, roughness: pale ? 0.42 : 0.38,
    clearcoat: 1, clearcoatRoughness: 0.07, envMapIntensity: 1.15,
    emissive: c, emissiveIntensity: 0,
  });
}
const M = {
  glass: new THREE.MeshPhysicalMaterial({ color: 0x06080b, metalness: 0.2, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6 }),
  tyre: new THREE.MeshStandardMaterial({ color: 0x121214, roughness: 0.82 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xdfe3e8, metalness: 1, roughness: 0.16 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x17181b, roughness: 0.55, metalness: 0.3 }),
  tail: new THREE.MeshStandardMaterial({ color: 0x7a0a0c, roughness: 0.25, emissive: 0xff1a1a, emissiveIntensity: 0.25 }),
};
const G = {
  tyre: new THREE.CylinderGeometry(0.135, 0.135, 0.1, 28).rotateX(Math.PI / 2),
  tread: new THREE.TorusGeometry(0.118, 0.03, 10, 28),
  hub: new THREE.CylinderGeometry(0.078, 0.086, 0.104, 20).rotateX(Math.PI / 2),
  cap: new THREE.CylinderGeometry(0.03, 0.03, 0.112, 12).rotateX(Math.PI / 2),
  arch: new THREE.CylinderGeometry(0.158, 0.158, 0.03, 28).rotateX(Math.PI / 2),
  lamp: new RoundedBoxGeometry(0.035, 0.05, 0.12, 3, 0.014),
};

function mesh(geo, mat, parent, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z); m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}

function wheels(v, xs, track = W - 0.035) {
  for (const x of xs) {
    for (const s of [-1, 1]) {
      mesh(G.arch, M.dark, v.chassis, x, 0.135, s * (W - 0.022));
      const w = new THREE.Group();
      w.position.set(x, 0.135, s * track);
      mesh(G.tyre, M.tyre, w); mesh(G.tread, M.tyre, w, 0, 0, s * 0.03);
      mesh(G.hub, M.chrome, w); mesh(G.cap, M.dark, w);
      v.root.add(w); v.wheels.push(w);
    }
  }
}

function lights(v, len, y, z = 0.2) {
  const front = new THREE.MeshStandardMaterial({ color: 0xfff6dc, roughness: 0.2, emissive: 0xffe9b0, emissiveIntensity: 0.35 });
  v.lamps = front;
  for (const s of [-1, 1]) {
    mesh(G.lamp, front, v.chassis, len / 2 - 0.022, y, s * z);
    mesh(G.lamp, M.tail, v.chassis, -len / 2 + 0.022, y, s * z);
  }
  const grille = new RoundedBoxGeometry(0.03, 0.045, 0.2, 2, 0.01);
  mesh(grille, M.dark, v.chassis, len / 2 - 0.012, y - 0.065, 0);
  const bumper = new RoundedBoxGeometry(0.035, 0.03, 0.5, 2, 0.012);
  mesh(bumper, M.chrome, v.chassis, len / 2 - 0.012, 0.125, 0);
  mesh(bumper, M.chrome, v.chassis, -len / 2 + 0.012, 0.125, 0);
}

// The colour name printed on the roof, so viewers can read which word moves the vehicle.
function decal(v, id, color, x, y, long, wide, flip) {
  const c = document.createElement('canvas'); c.width = 512; c.height = 160;
  const g = c.getContext('2d'), dark = new THREE.Color(color).getHSL({}).l > 0.55;
  g.font = '800 104px "Helvetica Neue", Arial, sans-serif';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  if ('letterSpacing' in g) g.letterSpacing = '10px';
  g.fillStyle = dark ? 'rgba(18,18,22,.88)' : 'rgba(255,255,255,.94)';
  const text = id.toUpperCase(), tw = g.measureText(text).width;
  g.save(); g.translate(256, 86); g.scale(Math.min(1, 470 / tw), 1); g.fillText(text, 0, 0); g.restore();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 8;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(long, wide),
    new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.5, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 }));
  m.rotation.set(-Math.PI / 2, 0, flip ? Math.PI : 0);
  m.position.set(x, y, 0);
  v.chassis.add(m);
}

const CARS = {
  sedan: { belt: 0.34, roof: 0.51, a: -0.5, b: 0.36, front: 0.3, rear: 0.26, nose: 0.315, tailH: 0.33 },
  hatch: { belt: 0.34, roof: 0.53, a: -0.78, b: 0.34, front: 0.28, rear: 0.14, nose: 0.31, tailH: 0.34 },
  coupe: { belt: 0.32, roof: 0.46, a: -0.52, b: 0.22, front: 0.36, rear: 0.4, nose: 0.3, tailH: 0.325 },
  suv: { belt: 0.39, roof: 0.6, a: -0.8, b: 0.36, front: 0.24, rear: 0.12, nose: 0.37, tailH: 0.39 },
};

function car(v, kind, color, id, flip) {
  const len = 1.76, p = CARS[kind], body = paint(color);
  v.paint = body;
  const top = (u) => {
    const x = u * len / 2;
    if (x > p.b) return lerp(p.belt, p.nose, smooth(Math.min(1, (x - p.b) / (len / 2 - p.b))));
    if (x < p.a) return lerp(p.belt, p.tailH, smooth(Math.min(1, (p.a - x) / (p.a + len / 2 + 1e-6))));
    return p.belt;
  };
  mesh(hull(len, { top }), body, v.chassis);
  mesh(cabin(p.a, p.b, p.belt, p.roof, { front: p.front, rear: p.rear }), M.glass, v.chassis);
  // Painted roof panel and a centre pillar hoop over the glass.
  const r0 = p.a + p.rear - 0.02, r1 = p.b - p.front + 0.03, rw = W * 0.9 * (1 - 0.2) + 0.012;
  const roof = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8, k = (1 - Math.abs(t * 2 - 1) ** 6) ** (1 / 6);
    roof.push({ x: lerp(r0, r1, t), w: Math.max(rw * lerp(0.86, 1, k), 0.01), y0: p.roof - 0.035, y1: p.roof + 0.012, n: 6 });
  }
  mesh(loft(roof, 0.9), body, v.chassis);
  const pm = (r0 + r1) / 2 - 0.04;
  mesh(loft([{ x: pm - 0.022, w: W * 0.9 + 0.006, y0: p.belt - 0.04, y1: p.roof - 0.01, n: 5, taper: 0.2 }, { x: pm + 0.022, w: W * 0.9 + 0.006, y0: p.belt - 0.04, y1: p.roof - 0.01, n: 5, taper: 0.2 }], 0.5), body, v.chassis);
  if (id === 'red') {
    // The hero car: twin white racing stripes over bonnet and boot.
    const stripe = new THREE.MeshPhysicalMaterial({ color: 0xf4f1ea, roughness: 0.35, clearcoat: 1, clearcoatRoughness: 0.08, polygonOffset: true, polygonOffsetFactor: -3 });
    for (const s of [-1, 1]) for (const [x0, x1, y] of [[p.b + 0.03, len / 2 - 0.1, p.nose + 0.012], [-len / 2 + 0.1, p.a - 0.03, p.tailH + 0.006]]) {
      const m = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, 0.07), stripe);
      m.rotation.x = -Math.PI / 2; m.position.set((x0 + x1) / 2, y, s * 0.06); m.receiveShadow = true;
      v.chassis.add(m);
    }
  }
  mesh(new RoundedBoxGeometry(len - 0.3, 0.07, W * 2 - 0.1, 2, 0.02), M.dark, v.chassis, 0, 0.1, 0);
  wheels(v, [len / 2 - 0.36, -len / 2 + 0.36]);
  lights(v, len, kind === 'suv' ? 0.3 : 0.25);
  decal(v, id, color, (r0 + r1) / 2, p.roof + 0.016, Math.min(r1 - r0 + 0.02, 0.62), 0.24, flip);
}

function cab(v, x0, x1, body, h = 0.62) {
  const st = [], n = 14;
  for (let i = 0; i <= n; i++) {
    const t = i / n, u = Math.sin((t - 0.5) * Math.PI), k = (1 - Math.abs(u) ** 8) ** (1 / 8);
    st.push({ x: lerp(x0, x1, (u + 1) / 2), w: Math.max(W * k, 0.01), y0: lerp(0.3, 0.1, k), y1: lerp(h * 0.7, h, k), n: 6, taper: 0.07 });
  }
  mesh(loft(st, 0.9), body, v.chassis);
  // Wrap-around screen: a dark band a little proud of the cab front.
  const g0 = lerp(x0, x1, 0.42), band = [];
  for (let i = 0; i <= 8; i++) {
    const t = i / 8, k = (1 - t ** 8) ** (1 / 8);
    band.push({ x: lerp(g0, x1 + 0.006, t), w: Math.max((W + 0.007) * k, 0.01), y0: h * 0.56, y1: h * 0.9, n: 6, taper: 0.06 });
  }
  mesh(loft(band, 0.9), M.glass, v.chassis);
}

function truck(v, kind, len, color, id, flip) {
  const L = len - 0.22, body = paint(color), cabL = 0.62, x1 = L / 2, x0 = x1 - cabL;
  v.paint = body;
  cab(v, x0, x1, body);
  const c0 = -L / 2, c1 = x0 - 0.05, cl = c1 - c0, cx = (c0 + c1) / 2;
  mesh(new RoundedBoxGeometry(L - 0.12, 0.09, W * 2 - 0.12, 2, 0.02), M.dark, v.chassis, 0, 0.19, 0);
  let top;
  if (kind === 'box') {
    mesh(new RoundedBoxGeometry(cl, 0.5, W * 2 + 0.02, 4, 0.035), body, v.chassis, cx, 0.5, 0);
    for (const s of [-1, 1]) mesh(new RoundedBoxGeometry(cl - 0.1, 0.02, 0.02, 1, 0.006), M.chrome, v.chassis, cx, 0.27, s * (W + 0.012));
    mesh(new RoundedBoxGeometry(0.014, 0.4, W * 2 - 0.1, 1, 0.005), M.chrome, v.chassis, c0 - 0.002, 0.5, 0);
    top = 0.752;
  } else if (kind === 'tanker') {
    const tank = new THREE.CapsuleGeometry(0.25, cl - 0.5, 10, 28).rotateZ(Math.PI / 2);
    mesh(tank, body, v.chassis, cx, 0.49, 0);
    for (const t of [-0.3, 0, 0.3]) mesh(new THREE.TorusGeometry(0.253, 0.012, 8, 36).rotateY(Math.PI / 2), M.chrome, v.chassis, cx + t * cl, 0.49, 0);
    mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.04, 20), M.chrome, v.chassis, cx + cl * 0.15, 0.745, 0);
    top = 0.742;
  } else { // flatbed with a painted container
    mesh(new RoundedBoxGeometry(cl, 0.05, W * 2 + 0.02, 2, 0.015), M.dark, v.chassis, cx, 0.26, 0);
    mesh(new RoundedBoxGeometry(cl - 0.08, 0.42, W * 2 - 0.04, 4, 0.02), body, v.chassis, cx, 0.49, 0);
    for (let i = 1; i < 9; i++) for (const s of [-1, 1])
      mesh(new RoundedBoxGeometry(0.02, 0.36, 0.012, 1, 0.004), body, v.chassis, c0 + 0.04 + (cl - 0.08) * i / 9, 0.49, s * (W - 0.016));
    top = 0.702;
  }
  const rear = len > 3 ? [c0 + 0.3, c0 + 0.62, cx + 0.3] : [c0 + 0.32, c0 + 0.64];
  wheels(v, [x1 - 0.3, ...rear]);
  lights(v, L, 0.3);
  decal(v, id, color, cx, top + 0.004, Math.min(cl - 0.2, 1.3), 0.3, flip);
}

function bus(v, len, color, id, flip) {
  const L = len - 0.2, body = paint(color), h = 0.66;
  v.paint = body;
  const top = () => h;
  mesh(hull(L, { top, y0: 0.1, n: 7, round: 12, steps: 36, taper: 0.05 }), body, v.chassis);
  const band = [];
  for (let i = 0; i <= 24; i++) {
    const u = Math.sin((i / 24 - 0.5) * Math.PI), k = (1 - Math.abs(u) ** 12) ** (1 / 12);
    band.push({ x: u * (L / 2 + 0.006), w: Math.max((W + 0.006) * k, 0.01), y0: 0.36, y1: 0.57, n: 7, taper: 0.03 });
  }
  mesh(loft(band, 0.9), M.glass, v.chassis);
  // Window posts.
  const posts = Math.round(L / 0.36);
  for (let i = 1; i < posts; i++) for (const s of [-1, 1])
    mesh(new RoundedBoxGeometry(0.035, 0.23, 0.012, 1, 0.004), body, v.chassis, -L / 2 + L * i / posts, 0.465, s * (W + 0.002));
  mesh(new RoundedBoxGeometry(0.5, 0.05, 0.3, 2, 0.018), M.dark, v.chassis, -L / 2 + 0.5, h + 0.02, 0);
  wheels(v, len > 3 ? [L / 2 - 0.5, -L / 2 + 0.5, -L / 2 + 0.85] : [L / 2 - 0.5, -L / 2 + 0.55]);
  lights(v, L, 0.24);
  decal(v, id, color, 0.25, h + 0.004, Math.min(L - 1.3, 1.3), 0.3, flip);
}

const BY_LEN = { 2: ['sedan', 'hatch', 'coupe', 'suv'], 3: ['box', 'bus', 'tanker'], 4: ['container', 'bus', 'box'] };

// m is the puzzle's vehicle record; index varies the model. Returns a Group whose
// userData holds the animated parts.
export function makeVehicle(m, index) {
  const root = new THREE.Group(), chassis = new THREE.Group();
  root.add(chassis);
  const v = { root, chassis, wheels: [], lamps: null, paint: null };
  // Vertical vehicles face up or down the board; the label always reads from one side.
  const back = m.id !== 'red' && index % 3 === 1;
  const kind = m.id === 'red' ? 'coupe' : BY_LEN[m.len][index % BY_LEN[m.len].length];
  const flip = back;
  if (m.len === 2) car(v, kind, m.color, m.id, flip);
  else if (kind === 'bus') bus(v, m.len, m.color, m.id, flip);
  else truck(v, kind, m.len, m.color, m.id, flip);
  root.rotation.y = (m.axis === 'h' ? 0 : -Math.PI / 2) + (back ? Math.PI : 0);
  // Along-axis direction in world space for +1 moves, as seen from the vehicle's own +X.
  v.sign = back ? -1 : 1;
  root.userData = v;
  return root;
}
