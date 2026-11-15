// Die-cast toy vehicles, modelled in code.
// Each body is a loft: superellipse cross-sections placed along the length (+X is the front).
// Panel lines and windows are drawn on canvas sheets and projected onto the lofts.
// One unit is one parking cell; a vehicle stands on y = 0.
import * as THREE from 'three';
import { toCreasedNormals, mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const SEG = 40;
const W = 0.31; // half width of a body
const WHEEL_R = 0.135;
const sgnpow = (v, e) => Math.sign(v) * Math.abs(v) ** e;
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (t) => t * t * (3 - 2 * t);
// Shared geometries and textures are made once and never disposed.
const cache = new Map();
const once = (key, make) => {
  if (!cache.has(key)) cache.set(key, make());
  return cache.get(key);
};

// ---------- lofts and their texture sheets ----------
// A sheet is one canvas with three views: the top half is the top view (x across, z up),
// the bottom left is the side view (x across, y up), the bottom right is the end view (z, y).
// atlas() gives each triangle the view that its normal faces, so a drawing never smears.
const SIDE_U = 0.75;
const A = new THREE.Vector3(),
  B = new THREE.Vector3(),
  C = new THREE.Vector3(),
  Nrm = new THREE.Vector3();
function atlas(geo, b) {
  const p = geo.attributes.position,
    uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i += 3) {
    A.fromBufferAttribute(p, i);
    B.fromBufferAttribute(p, i + 1);
    C.fromBufferAttribute(p, i + 2);
    Nrm.copy(B).sub(A).cross(C.sub(A));
    const ax = Math.abs(Nrm.x),
      ay = Math.abs(Nrm.y),
      az = Math.abs(Nrm.z);
    const view = ay >= ax && ay >= az ? 0 : az >= ax ? 1 : 2;
    for (let j = 0; j < 3; j++) {
      const ux = (p.getX(i + j) - b.x0) / (b.x1 - b.x0),
        uy = p.getY(i + j) / b.h,
        uz = (p.getZ(i + j) + b.w) / (2 * b.w);
      if (view === 0) {
        uv[(i + j) * 2] = ux;
        uv[(i + j) * 2 + 1] = 0.5 + uz * 0.5;
      } else if (view === 1) {
        uv[(i + j) * 2] = ux * SIDE_U;
        uv[(i + j) * 2 + 1] = uy * 0.5;
      } else {
        uv[(i + j) * 2] = SIDE_U + uz * (1 - SIDE_U);
        uv[(i + j) * 2 + 1] = uy * 0.5;
      }
    }
  }
  geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return geo;
}
// draw(g, to) paints dark features on white; to.side(x, y), to.top(x, z) and to.end(z, y) give pixels.
function sheet(key, px, b, draw) {
  return once('sheet:' + key, () => {
    const c = document.createElement('canvas');
    c.width = px;
    c.height = px / 2;
    const g = c.getContext('2d'),
      Wp = c.width,
      Hp = c.height;
    g.fillStyle = '#fff';
    g.fillRect(0, 0, Wp, Hp);
    g.lineCap = 'round';
    g.lineJoin = 'round';
    const fx = (x) => (x - b.x0) / (b.x1 - b.x0),
      fz = (z) => (z + b.w) / (2 * b.w);
    draw(g, {
      side: (x, y) => [fx(x) * SIDE_U * Wp, Hp - (y / b.h) * 0.5 * Hp],
      top: (x, z) => [fx(x) * Wp, (0.5 - fz(z) * 0.5) * Hp],
      end: (z, y) => [(SIDE_U + fz(z) * (1 - SIDE_U)) * Wp, Hp - (y / b.h) * 0.5 * Hp],
      unit: (Wp * SIDE_U) / (b.x1 - b.x0), // pixels per unit in the side view
    });
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 8;
    return t;
  });
}
function poly(g, pts, close = true) {
  g.beginPath();
  pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
  if (close) g.closePath();
}
const LINE = 'rgba(8,8,10,.62)';

// stations: [{x, w, y0, y1, n, taper}] — w is the half width, n the corner exponent,
// taper narrows the section toward its top (tumblehome). bounds places the sheet views.
function loft(stations, crease = 0.7, bounds) {
  const pos = [],
    idx = [];
  for (const s of stations) {
    const mid = (s.y0 + s.y1) / 2,
      h = (s.y1 - s.y0) / 2,
      e = 2 / (s.n ?? 4);
    for (let k = 0; k < SEG; k++) {
      const a = (k / SEG) * Math.PI * 2,
        c = sgnpow(Math.cos(a), e),
        sn = sgnpow(Math.sin(a), e);
      pos.push(s.x, mid + h * sn, s.w * c * (1 - ((s.taper ?? 0) * (sn + 1)) / 2));
    }
  }
  const R = stations.length;
  for (let r = 0; r < R - 1; r++)
    for (let k = 0; k < SEG; k++) {
      const a = r * SEG + k,
        b = r * SEG + ((k + 1) % SEG),
        c = a + SEG,
        d = b + SEG;
      idx.push(a, c, b, b, c, d);
    }
  for (const [r, flip] of [
    [0, false],
    [R - 1, true],
  ]) {
    const s = stations[r],
      ci = pos.length / 3;
    pos.push(s.x, (s.y0 + s.y1) / 2, 0);
    for (let k = 0; k < SEG; k++) {
      const a = r * SEG + k,
        b = r * SEG + ((k + 1) % SEG);
      if (flip) idx.push(ci, b, a);
      else idx.push(ci, a, b);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  const xs = stations.map((s) => s.x);
  return atlas(toCreasedNormals(g, crease), bounds ?? { x0: Math.min(...xs) - 0.01, x1: Math.max(...xs) + 0.01, w: 0.4, h: 0.9 });
}

// A rounded hull: plan view and side view both close smoothly at the ends.
// top(u) gives the upper edge for u in [-1, 1] (rear to front).
function hull(len, { w = W, y0 = 0.085, top, n = 5, round = 7, steps = 30, taper = 0.04 }, bounds) {
  const st = [];
  for (let i = 0; i <= steps; i++) {
    const u = Math.sin((i / steps - 0.5) * Math.PI),
      k = (1 - Math.abs(u) ** round) ** (1 / round);
    const y1 = top(u);
    st.push({ x: (u * len) / 2, w: Math.max(w * k, 0.004), y0: lerp(y0 + (y1 - y0) * 0.42, y0, k), y1: lerp(y0 + (y1 - y0) * 0.72, y1, k), n, taper });
  }
  return loft(st, 0.9, bounds);
}
// The x of a hull's nose at side offset z (the plan view is a superellipse).
const noseX = (len, z, w = W, round = 7) => (len / 2) * (1 - Math.min(1, Math.abs(z / w)) ** round) ** (1 / round);
// A bumper that wraps one end of a hull. dir is 1 for the front and -1 for the rear.
function bumper(len, dir, { y0 = 0.1, y1 = 0.158, round = 7, w = W, reach = 0.09 } = {}) {
  const st = [],
    u0 = 1 - reach / (len / 2);
  for (let i = 0; i <= 10; i++) {
    const u = lerp(u0, 1, Math.sin(((i / 10) * Math.PI) / 2)),
      k = (1 - u ** round) ** (1 / round);
    st.push({ x: dir * ((u * len) / 2 + 0.014), w: Math.max((w + 0.012) * k, 0.004), y0, y1, n: 3.2 });
  }
  return loft(dir > 0 ? st : st.reverse(), 0.9);
}

// A cabin from x = a to x = b: raked screens, flat roof, sides leaning in.
const CABIN_W = W * 0.9,
  LIP = 0.02;
function cabin(p, bounds) {
  const { a, b, belt, roof } = p,
    y0 = belt - 0.05,
    st = [];
  const pts = [
    [a, belt + LIP],
    [a + p.rear, roof],
    [b - p.front, roof],
    [b, belt + LIP],
  ];
  for (let j = 0; j < 3; j++)
    for (let i = 0; i <= 5; i++) {
      if (j && !i) continue;
      const t = i / 5,
        [x0, h0] = pts[j],
        [x1, h1] = pts[j + 1];
      const t2 = j === 1 ? t : j === 0 ? Math.sin((t * Math.PI) / 2) : 1 - Math.cos((t * Math.PI) / 2);
      st.push({ x: lerp(x0, x1, t), w: CABIN_W, y0, y1: lerp(h0, h1, t2), n: 5, taper: 0.2 });
    }
  return loft(st, 0.8, bounds);
}
// The cabin's upper edge in the side view.
function roofline(p, x) {
  if (x < p.a + p.rear) return lerp(p.belt + LIP, p.roof, Math.sin((Math.max(0, (x - p.a) / p.rear) * Math.PI) / 2));
  if (x > p.b - p.front) return lerp(p.roof, p.belt + LIP, 1 - Math.cos((Math.min(1, (x - (p.b - p.front)) / p.front) * Math.PI) / 2));
  return p.roof;
}

// ---------- materials ----------
// Metallic flake: a fine random normal map under a smooth clear coat.
const flake = () =>
  once('flake', () => {
    const n = 256,
      d = new Uint8Array(n * n * 4);
    for (let i = 0; i < n * n; i++) {
      const a = Math.random() * Math.PI * 2,
        r = Math.random() ** 2 * 0.75;
      d[i * 4] = 128 + 127 * r * Math.cos(a);
      d[i * 4 + 1] = 128 + 127 * r * Math.sin(a);
      d[i * 4 + 2] = 255;
      d[i * 4 + 3] = 255;
    }
    const t = new THREE.DataTexture(d, n, n);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(4, 4);
    t.generateMipmaps = true;
    t.minFilter = THREE.LinearMipmapLinearFilter;
    t.magFilter = THREE.LinearFilter;
    t.needsUpdate = true;
    return t;
  });
// A mirror-like coat can reflect the sun as one pixel far brighter than the frame buffer holds,
// which the later image passes turn into a dark speck. Limit the brightness of a paint pixel.
function tame(shader) {
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <opaque_fragment>',
    'outgoingLight = clamp(outgoingLight, vec3(0.0), vec3(3.0));\n#include <opaque_fragment>',
  );
}
// Each vehicle owns its paint materials: the hint pulse changes their glow.
function paint(v, color) {
  const c = new THREE.Color(color),
    pale = c.getHSL({}).l > 0.6;
  const m = new THREE.MeshPhysicalMaterial({
    color: c,
    metalness: pale ? 0.1 : 0.6,
    roughness: pale ? 0.42 : 0.4,
    clearcoat: 1,
    clearcoatRoughness: 0.06,
    envMapIntensity: 1.15,
    normalMap: flake(),
    normalScale: new THREE.Vector2(pale ? 0.1 : 0.42, pale ? 0.1 : 0.42),
    emissive: c,
    emissiveIntensity: 0,
  });
  m.onBeforeCompile = tame;
  v.paints.push(m);
  v.owned.push(m);
  return m;
}
// The body paint with a sheet of panel lines or windows on it.
function skin(v, tex, flakes = true) {
  const m = v.body.clone();
  m.map = tex;
  m.onBeforeCompile = tame;
  if (!flakes) m.normalMap = null;
  v.paints.push(m);
  v.owned.push(m);
  return m;
}
const M = {
  glass: new THREE.MeshPhysicalMaterial({ color: 0x06080b, metalness: 0.2, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.02, envMapIntensity: 1.6 }),
  chrome: new THREE.MeshStandardMaterial({ color: 0xdfe3e8, metalness: 1, roughness: 0.14 }),
  steel: new THREE.MeshStandardMaterial({ color: 0x8e9299, metalness: 1, roughness: 0.38 }),
  dark: new THREE.MeshStandardMaterial({ color: 0x17181b, roughness: 0.55, metalness: 0.3 }),
  rubber: new THREE.MeshStandardMaterial({ color: 0x0f0f11, roughness: 0.9 }),
  tail: new THREE.MeshStandardMaterial({ color: 0x8a0a0e, roughness: 0.22, emissive: 0xff1a1a, emissiveIntensity: 0.3 }),
  amber: new THREE.MeshStandardMaterial({ color: 0xd97a0a, roughness: 0.25, emissive: 0xff8a00, emissiveIntensity: 0.25 }),
};
const tyreMat = () =>
  once('tyreMat', () => {
    // Lathe uv: u runs around the tyre, v across it. The tread blocks sit in the middle band.
    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 128;
    const g = c.getContext('2d');
    g.fillStyle = '#fff';
    g.fillRect(0, 0, 64, 128);
    g.strokeStyle = '#333';
    g.lineWidth = 9;
    for (const [y0, y1, x0, x1] of [
      [40, 64, 8, 28],
      [64, 88, 28, 8],
      [40, 64, 40, 60],
      [64, 88, 60, 40],
    ]) {
      g.beginPath();
      g.moveTo(x0, y0);
      g.lineTo(x1, y1);
      g.stroke();
    }
    g.fillStyle = '#333';
    g.fillRect(0, 61, 64, 6);
    g.fillStyle = '#9a9a9a';
    g.fillRect(0, 19, 64, 3);
    g.fillRect(0, 106, 64, 3); // a moulded ring on each sidewall
    const t = new THREE.CanvasTexture(c);
    t.wrapS = THREE.RepeatWrapping;
    t.repeat.set(13, 1);
    t.anisotropy = 8;
    return new THREE.MeshStandardMaterial({ color: 0x1a1a1d, roughness: 0.86, map: t, bumpMap: t, bumpScale: 1.6 });
  });

function mesh(geo, mat, parent, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  parent.add(m);
  return m;
}
const box = (x, y, z, r) => new RoundedBoxGeometry(x, y, z, 2, r ?? Math.min(x, y, z) * 0.3);

// ---------- wheels ----------
// A wheel's axle is z; the outer face looks toward +z.
const tyreGeo = () =>
  once('tyre', () => {
    const r = WHEEL_R,
      h = 0.052;
    const pts = [
      [0.6, -0.94],
      [0.84, -1],
      [0.95, -0.84],
      [1, -0.52],
      [1, 0],
      [1, 0.52],
      [0.95, 0.84],
      [0.84, 1],
      [0.6, 0.94],
    ];
    return new THREE.LatheGeometry(
      pts.map(([x, y]) => new THREE.Vector2(x * r, y * h)),
      40,
    ).rotateX(Math.PI / 2);
  });
const disc = (r, z) => new THREE.CircleGeometry(r, 28).translate(0, 0, z);
const rod = (r, h, z, seg = 16) => new THREE.CylinderGeometry(r, r, h, seg).rotateX(Math.PI / 2).translate(0, 0, z);
// Three rim designs: 0 five-spoke alloy, 1 fine multi-spoke, 2 steel truck wheel.
const rimGeo = (style) =>
  once('rim' + style, () => {
    const bright = [new THREE.TorusGeometry(0.083, 0.0075, 8, 36).translate(0, 0, 0.046)],
      dark = [disc(0.084, 0.006)];
    if (style === 2) {
      bright.push(disc(0.08, 0.036), rod(0.03, 0.03, 0.045, 20));
      for (let i = 0; i < 8; i++)
        dark.push(
          disc(0.0115, 0.0372)
            .translate(0.055, 0, 0)
            .rotateZ((i * Math.PI) / 4),
        );
      for (let i = 0; i < 6; i++)
        dark.push(
          rod(0.0045, 0.008, 0.062, 6)
            .translate(0.019, 0, 0)
            .rotateZ((i * Math.PI) / 3),
        );
    } else {
      const n = style ? 10 : 5,
        wide = style ? 0.011 : 0.025;
      for (let i = 0; i < n; i++) bright.push(new THREE.BoxGeometry(0.066, wide, 0.012).translate(0.049, 0, 0.04).rotateZ((i * Math.PI * 2) / n));
      bright.push(rod(0.024, 0.018, 0.043, 20));
      dark.push(rod(0.064, 0.006, 0.02, 28), rod(0.009, 0.004, 0.054, 10));
    }
    return [mergeGeometries(bright), mergeGeometries(dark)];
  });
const archGeo = () => once('arch', () => new THREE.CylinderGeometry(0.158, 0.158, 0.03, 32).rotateX(Math.PI / 2));
const lipGeo = () => once('lip', () => new THREE.TorusGeometry(0.162, 0.011, 8, 28, Math.PI));

function wheels(v, xs, { style = 0, track = W - 0.035, lips = true } = {}) {
  const [bright, dark] = rimGeo(style);
  for (const x of xs) {
    for (const s of [-1, 1]) {
      mesh(archGeo(), M.dark, v.chassis, x, WHEEL_R, s * (W - 0.022));
      if (lips) mesh(lipGeo(), v.body, v.chassis, x, WHEEL_R, s * (W - 0.007));
      const w = new THREE.Group(),
        face = new THREE.Group();
      w.position.set(x, WHEEL_R, s * track);
      face.rotation.y = s > 0 ? 0 : Math.PI;
      mesh(tyreGeo(), tyreMat(), face);
      mesh(bright, style === 2 ? M.steel : M.chrome, face);
      mesh(dark, M.dark, face);
      w.add(face);
      v.root.add(w);
      v.wheels.push(w);
    }
  }
}

// ---------- lamps, plates and labels ----------
function plate(v, text, x, y, dir) {
  const c = document.createElement('canvas');
  c.width = 160;
  c.height = 48;
  const g = c.getContext('2d');
  g.fillStyle = '#f2efe4';
  g.fillRect(0, 0, 160, 48);
  g.strokeStyle = '#1b1b1f';
  g.lineWidth = 3;
  g.strokeRect(3, 3, 154, 42);
  g.fillStyle = '#1b1b1f';
  g.font = '800 30px "Helvetica Neue", Arial, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, 80, 26, 140);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.45 });
  v.owned.push(tex, mat);
  const m = mesh(new THREE.PlaneGeometry(0.15, 0.045), mat, v.chassis, x, y, 0);
  m.rotation.y = (dir * Math.PI) / 2;
  m.castShadow = false;
}
// Head and tail lamps in chrome bezels, a grille, indicators and number plates.
function lights(v, len, y, { z = 0.2, round = 7, grille = 0.2, tag = '', bumpers = M.chrome, plateY = 0.2 } = {}) {
  const front = new THREE.MeshStandardMaterial({ color: 0xfff6dc, roughness: 0.15, emissive: 0xffe9b0, emissiveIntensity: 0.35 });
  v.lamps = front;
  v.owned.push(front);
  const lens = once('lens', () => box(0.03, 0.05, 0.115, 0.014)),
    bezel = once('bezel', () => box(0.022, 0.066, 0.134, 0.012)),
    blink = once('blink', () => box(0.02, 0.022, 0.05, 0.007));
  const nose = noseX(len, z, W, round),
    corner = noseX(len, 0.262, W, round);
  for (const s of [-1, 1]) {
    mesh(bezel, M.chrome, v.chassis, nose - 0.022, y, s * z);
    mesh(lens, front, v.chassis, nose - 0.014, y, s * z);
    mesh(bezel, M.chrome, v.chassis, -nose + 0.022, y, s * z);
    mesh(lens, M.tail, v.chassis, -nose + 0.014, y, s * z);
    mesh(blink, M.amber, v.chassis, corner - 0.008, y - 0.052, s * 0.262);
    mesh(blink, M.amber, v.chassis, -corner + 0.008, y - 0.052, s * 0.262);
  }
  if (grille) {
    mesh(box(0.02, 0.07, grille + 0.03, 0.012), M.chrome, v.chassis, len / 2 - 0.016, y - 0.008, 0);
    mesh(box(0.03, 0.05, grille, 0.01), M.dark, v.chassis, len / 2 - 0.012, y - 0.008, 0);
    mesh(box(0.012, 0.008, grille, 0.003), M.chrome, v.chassis, len / 2 + 0.001, y - 0.008, 0);
  }
  if (bumpers) {
    mesh(bumper(len, 1, { round }), bumpers, v.chassis);
    mesh(bumper(len, -1, { round }), bumpers, v.chassis);
  }
  plate(v, tag, len / 2 + (bumpers ? 0.0285 : 0.004), bumpers ? 0.13 : plateY, 1);
  plate(v, tag, -len / 2 - (bumpers ? 0.0285 : 0.004), bumpers ? 0.13 : plateY, -1);
}
// A door mirror: a painted pod on a short dark arm.
function mirrors(v, x, y, z, big = false) {
  const pod = once('pod' + big, () => (big ? box(0.028, 0.11, 0.05, 0.012) : box(0.05, 0.036, 0.042, 0.014)));
  for (const s of [-1, 1]) {
    mesh(pod, big ? M.dark : v.body, v.chassis, x, y, s * (z + (big ? 0.07 : 0.03)));
    mesh(box(0.014, 0.012, big ? 0.09 : 0.05, 0.004), big ? M.chrome : M.dark, v.chassis, x, y - (big ? 0 : 0.006), s * (z + (big ? 0.03 : 0.01)));
    if (big) mesh(box(0.014, 0.012, 0.09, 0.004), M.chrome, v.chassis, x, y + 0.04, s * (z + 0.03));
  }
}

// The colour name printed on the roof, so viewers can read which word moves the vehicle.
function decal(v, id, color, x, y, long, wide, flip) {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = 160;
  const g = c.getContext('2d'),
    dark = new THREE.Color(color).getHSL({}).l > 0.55;
  g.font = '800 104px "Helvetica Neue", Arial, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  if ('letterSpacing' in g) g.letterSpacing = '10px';
  g.fillStyle = dark ? 'rgba(18,18,22,.88)' : 'rgba(255,255,255,.94)';
  const text = id.toUpperCase(),
    tw = g.measureText(text).width;
  g.save();
  g.translate(256, 86);
  g.scale(Math.min(1, 470 / tw), 1);
  g.fillText(text, 0, 0);
  g.restore();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const mat = new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.5, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4 });
  v.owned.push(tex, mat);
  const m = new THREE.Mesh(new THREE.PlaneGeometry(long, wide), mat);
  m.rotation.set(-Math.PI / 2, 0, flip ? Math.PI : 0);
  m.position.set(x, y, 0);
  v.chassis.add(m);
}

// ---------- cars ----------
// doors: x of each shut line, front to rear. pillars: x of the posts between side windows.
const CAR_LEN = 1.76,
  AXLE = CAR_LEN / 2 - 0.36;
const CARS = {
  sedan: {
    belt: 0.34,
    roof: 0.51,
    a: -0.5,
    b: 0.36,
    front: 0.3,
    rear: 0.26,
    nose: 0.315,
    tailH: 0.33,
    doors: [0.3, -0.01, -0.33],
    pillars: [-0.01],
    rim: 1,
    lamp: 0.25,
  },
  hatch: {
    belt: 0.34,
    roof: 0.53,
    a: -0.78,
    b: 0.34,
    front: 0.28,
    rear: 0.14,
    nose: 0.31,
    tailH: 0.34,
    doors: [0.3, -0.02, -0.33],
    pillars: [-0.02, -0.36],
    rim: 0,
    lamp: 0.25,
    plastic: true,
  },
  coupe: { belt: 0.32, roof: 0.46, a: -0.52, b: 0.22, front: 0.36, rear: 0.4, nose: 0.3, tailH: 0.325, doors: [0.3, -0.2], pillars: [], rim: 0, lamp: 0.24 },
  suv: {
    belt: 0.39,
    roof: 0.6,
    a: -0.8,
    b: 0.36,
    front: 0.24,
    rear: 0.12,
    nose: 0.37,
    tailH: 0.39,
    doors: [0.3, -0.02, -0.33],
    pillars: [-0.02, -0.38],
    rim: 1,
    lamp: 0.3,
    plastic: true,
    rails: true,
  },
};
const HULL_B = { x0: -CAR_LEN / 2 - 0.01, x1: CAR_LEN / 2 + 0.01, w: 0.34, h: 0.5 };

function hullSheet(kind, p) {
  return sheet('hull:' + kind, 2048, HULL_B, (g, to) => {
    // Side view: dark sill, door shut lines, a rub strip between the wheel arches.
    g.fillStyle = '#26262a';
    poly(g, [to.side(-AXLE + 0.2, 0), to.side(AXLE - 0.2, 0), to.side(AXLE - 0.2, 0.122), to.side(-AXLE + 0.2, 0.122)]);
    g.fill();
    g.strokeStyle = LINE;
    g.lineWidth = 3.2;
    for (const x of p.doors) {
      poly(g, [to.side(x, 0.122), to.side(x - 0.012, p.belt + 0.04)], false);
      g.stroke();
    }
    g.lineWidth = 2;
    g.strokeStyle = 'rgba(8,8,10,.34)';
    poly(g, [to.side(p.doors.at(-1), 0.222), to.side(p.doors[0], 0.222)], false);
    g.stroke();
    // Top view: bonnet and boot lids, with the washer jets and a filler cap.
    g.strokeStyle = LINE;
    g.lineWidth = 3;
    const lid = (x0, x1) => {
      const zb = W - 0.075,
        [ax, ay] = to.top(Math.min(x0, x1), zb),
        [bx, by] = to.top(Math.max(x0, x1), -zb);
      g.beginPath();
      g.roundRect(ax, ay, bx - ax, by - ay, 0.05 * to.unit);
      g.stroke();
    };
    lid(p.b + 0.018, CAR_LEN / 2 - 0.1);
    if (p.a > -0.7) lid(-CAR_LEN / 2 + 0.085, p.a - 0.016);
    g.fillStyle = 'rgba(8,8,10,.7)';
    for (const s of [-1, 1]) {
      const [x, y] = to.top(p.b + 0.07, s * 0.11);
      g.beginPath();
      g.arc(x, y, 3, 0, 7);
      g.fill();
    }
  });
}
function cabinSheet(kind, p, b) {
  return sheet('cabin:' + kind, 1024, b, (g, to) => {
    const glass = '#0a0c0f',
      frame = 'rgba(0,0,0,.75)';
    g.fillStyle = glass;
    g.strokeStyle = frame;
    g.lineWidth = 2.5;
    // Side windows: under the roofline, split by the pillars.
    const sill = p.belt + 0.03,
      edges = [
        p.a + 0.05,
        ...p.pillars
          .slice()
          .reverse()
          .flatMap((x) => [x - 0.017, x + 0.017]),
        p.b - 0.04,
      ];
    for (let k = 0; k < edges.length; k += 2) {
      const pts = [];
      for (let i = 0; i <= 24; i++) {
        const x = lerp(edges[k], edges[k + 1], i / 24),
          y = roofline(p, x) - 0.042;
        if (y > sill + 0.012) pts.push([x, y]);
      }
      if (pts.length < 2) continue;
      poly(g, [to.side(pts[0][0], sill), ...pts.map(([x, y]) => to.side(x, y)), to.side(pts.at(-1)[0], sill)]);
      g.fill();
      g.stroke();
    }
    // Top view: front and rear screens. End view: the same screens seen from the ends.
    const zs = CABIN_W * 0.8 - 0.04,
      r = 0.03 * to.unit;
    for (const [x0, x1] of [
      [p.b - p.front + 0.012, p.b - 0.012],
      [p.a + 0.012, p.a + p.rear - 0.012],
    ]) {
      const [ax, ay] = to.top(x0, zs),
        [bx, by] = to.top(x1, -zs);
      g.beginPath();
      g.roundRect(ax, ay, bx - ax, by - ay, r);
      g.fill();
      g.stroke();
    }
    const [ax, ay] = to.end(-zs, p.roof - 0.03),
      [bx, by] = to.end(zs, sill);
    g.beginPath();
    g.roundRect(ax, ay, bx - ax, by - ay, r * 0.4);
    g.fill();
    g.stroke();
  });
}

function car(v, kind, color, id, flip, tag) {
  const len = CAR_LEN,
    p = CARS[kind];
  v.body = paint(v, color);
  const top = (u) => {
    const x = (u * len) / 2;
    if (x > p.b) return lerp(p.belt, p.nose, smooth(Math.min(1, (x - p.b) / (len / 2 - p.b))));
    if (x < p.a) return lerp(p.belt, p.tailH, smooth(Math.min(1, (p.a - x) / (p.a + len / 2 + 1e-6))));
    return p.belt;
  };
  mesh(
    once('hullGeo:' + kind, () => hull(len, { top }, HULL_B)),
    skin(v, hullSheet(kind, p)),
    v.chassis,
  );
  const cb = { x0: p.a - 0.01, x1: p.b + 0.01, w: 0.3, h: p.roof + 0.04 };
  mesh(
    once('cabinGeo:' + kind, () => cabin(p, cb)),
    skin(v, cabinSheet(kind, p, cb), false),
    v.chassis,
  );
  // Painted roof panel over the cabin.
  const r0 = p.a + p.rear - 0.02,
    r1 = p.b - p.front + 0.03,
    rw = CABIN_W * 0.8 + 0.012;
  mesh(
    once('roofGeo:' + kind, () => {
      const roof = [];
      for (let i = 0; i <= 8; i++) {
        const t = i / 8,
          k = (1 - Math.abs(t * 2 - 1) ** 6) ** (1 / 6);
        roof.push({ x: lerp(r0, r1, t), w: Math.max(rw * lerp(0.86, 1, k), 0.01), y0: p.roof - 0.035, y1: p.roof + 0.012, n: 6 });
      }
      return loft(roof, 0.9);
    }),
    v.body,
    v.chassis,
  );
  if (p.rails)
    for (const s of [-1, 1]) {
      mesh(box(r1 - r0 - 0.1, 0.014, 0.016, 0.005), M.dark, v.chassis, (r0 + r1) / 2, p.roof + 0.034, s * (rw - 0.03));
      for (const x of [r0 + 0.08, r1 - 0.08]) mesh(box(0.03, 0.03, 0.016, 0.005), M.dark, v.chassis, x, p.roof + 0.02, s * (rw - 0.03));
    }
  if (id === 'red') {
    // The hero car: twin white racing stripes and a boot spoiler.
    const stripe = new THREE.MeshPhysicalMaterial({
      color: 0xf4f1ea,
      roughness: 0.35,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      polygonOffset: true,
      polygonOffsetFactor: -3,
    });
    v.owned.push(stripe);
    for (const s of [-1, 1])
      for (const [x0, x1, y] of [
        [p.b + 0.03, len / 2 - 0.1, p.nose + 0.012],
        [-len / 2 + 0.1, p.a - 0.03, p.tailH + 0.006],
      ]) {
        const m = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0, 0.07), stripe);
        m.rotation.x = -Math.PI / 2;
        m.position.set((x0 + x1) / 2, y, s * 0.06);
        m.receiveShadow = true;
        v.chassis.add(m);
      }
    mesh(box(0.085, 0.014, 0.5, 0.006), v.body, v.chassis, -len / 2 + 0.1, p.tailH + 0.068, 0);
    for (const s of [-1, 1]) mesh(box(0.03, 0.06, 0.016, 0.005), M.dark, v.chassis, -len / 2 + 0.11, p.tailH + 0.035, s * 0.19);
    for (const s of [-1, 1])
      mesh(new THREE.CylinderGeometry(0.016, 0.016, 0.05, 12).rotateZ(Math.PI / 2), M.chrome, v.chassis, -len / 2 + 0.015, 0.105, s * 0.14);
  }
  // Door handles, just under the belt line behind each door's leading edge.
  const hy = p.belt - 0.05,
    handle = once('handle', () => box(0.06, 0.013, 0.014, 0.005));
  for (const x of p.doors.slice(1)) for (const s of [-1, 1]) mesh(handle, M.chrome, v.chassis, x + 0.06, hy, s * (W * 0.948));
  mirrors(v, p.b - 0.07, p.belt + 0.03, W - 0.022);
  mesh(box(len - 0.3, 0.07, W * 2 - 0.1, 0.02), M.dark, v.chassis, 0, 0.1, 0);
  wheels(v, [AXLE, -AXLE], { style: p.rim });
  lights(v, len, p.lamp, { tag, bumpers: p.plastic ? M.dark : M.chrome });
  decal(v, id, color, (r0 + r1) / 2, p.roof + 0.016, Math.min(r1 - r0 + 0.02, 0.62), 0.24, flip);
}

// ---------- trucks and buses ----------
const CAB_H = 0.62,
  CAB_L = 0.62;
function cab(v, x0, x1) {
  const h = CAB_H,
    bounds = { x0: x0 - 0.01, x1: x1 + 0.02, w: 0.34, h: 0.7 };
  const st = [],
    n = 14;
  for (let i = 0; i <= n; i++) {
    const t = i / n,
      u = Math.sin((t - 0.5) * Math.PI),
      k = (1 - Math.abs(u) ** 8) ** (1 / 8);
    st.push({ x: lerp(x0, x1, (u + 1) / 2), w: Math.max(W * k, 0.01), y0: lerp(0.3, 0.1, k), y1: lerp(h * 0.7, h, k), n: 6, taper: 0.07 });
  }
  // The sheet depends only on the cab size, which is the same for every truck.
  const lines = sheet('cab', 1024, { ...bounds, x0: -0.01, x1: CAB_L + 0.02 }, (g, to) => {
    g.strokeStyle = LINE;
    g.lineWidth = 3;
    poly(g, [to.side(0.1, 0.345), to.side(0.1, 0.15), to.side(0.4, 0.15), to.side(0.4, 0.345)], false);
    g.stroke();
    g.lineWidth = 2;
    poly(g, [to.side(0.1, 0.2), to.side(0.4, 0.2)], false);
    g.stroke();
    g.fillStyle = '#26262a';
    poly(g, [to.side(0.02, 0), to.side(CAB_L, 0), to.side(CAB_L, 0.135), to.side(0.02, 0.135)]);
    g.fill();
  });
  mesh(loft(st, 0.9, bounds), skin(v, lines), v.chassis);
  // Wrap-around screen: a dark band a little proud of the cab front.
  const band = [];
  for (let i = 0; i <= 10; i++) {
    const u = lerp(-0.1, 1, Math.sin(((i / 10) * Math.PI) / 2)),
      k = (1 - Math.abs(u) ** 8) ** (1 / 8),
      top = lerp(h * 0.7, h, k);
    band.push({
      x: lerp(x0, x1, (u + 1) / 2) + 0.005 * Math.max(u, 0),
      w: Math.max(W * k + 0.006, 0.01),
      y0: Math.min(h * 0.56, top - 0.1),
      y1: Math.min(h * 0.9, top - 0.045),
      n: 6,
      taper: 0.07,
    });
  }
  mesh(loft(band, 0.9), M.glass, v.chassis);
  mesh(box(0.05, 0.013, 0.014, 0.005), M.chrome, v.chassis, x0 + 0.15, 0.31, W * 0.985);
  mesh(box(0.05, 0.013, 0.014, 0.005), M.chrome, v.chassis, x0 + 0.15, 0.31, -W * 0.985);
  mirrors(v, x1 - 0.2, 0.45, W, true);
  // Amber marker lamps on the cab roof.
  for (const z of [-0.16, 0, 0.16])
    mesh(
      once('marker', () => box(0.03, 0.014, 0.03, 0.006)),
      M.amber,
      v.chassis,
      x1 - 0.2,
      h + 0.004,
      z,
    );
}

function truck(v, kind, len, color, id, flip, tag) {
  const L = len - 0.22,
    x1 = L / 2,
    x0 = x1 - CAB_L;
  v.body = paint(v, color);
  cab(v, x0, x1);
  const c0 = -L / 2,
    c1 = x0 - 0.05,
    cl = c1 - c0,
    cx = (c0 + c1) / 2;
  mesh(box(L - 0.12, 0.09, W * 2 - 0.12, 0.02), M.dark, v.chassis, 0, 0.19, 0);
  // Fuel tank and rear mud flaps.
  mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.3, 18).rotateZ(Math.PI / 2), M.chrome, v.chassis, x0 - 0.3, 0.18, W - 0.09);
  for (const s of [-1, 1]) mesh(box(0.012, 0.15, 0.11, 0.004), M.rubber, v.chassis, c0 + 0.1, 0.17, s * (W - 0.06));
  let top;
  if (kind === 'box') {
    mesh(new RoundedBoxGeometry(cl, 0.5, W * 2 + 0.02, 4, 0.035), v.body, v.chassis, cx, 0.5, 0);
    for (const s of [-1, 1]) mesh(box(cl - 0.1, 0.02, 0.02, 0.006), M.chrome, v.chassis, cx, 0.27, s * (W + 0.012));
    // Rear roller door: a frame with slats and a handle.
    mesh(box(0.014, 0.42, W * 2 - 0.08, 0.005), M.steel, v.chassis, c0 - 0.002, 0.5, 0);
    for (let i = 0; i < 6; i++) mesh(box(0.008, 0.008, W * 2 - 0.12, 0.002), M.dark, v.chassis, c0 - 0.0085, 0.33 + i * 0.068, 0);
    mesh(box(0.012, 0.02, 0.1, 0.005), M.chrome, v.chassis, c0 - 0.012, 0.31, 0);
    // A wind deflector on the cab roof.
    mesh(box(0.2, 0.1, W * 2 - 0.14, 0.04), v.body, v.chassis, x0 + 0.14, CAB_H + 0.03, 0);
    top = 0.752;
  } else if (kind === 'tanker') {
    const tank = new THREE.CapsuleGeometry(0.25, cl - 0.5, 10, 28).rotateZ(Math.PI / 2);
    mesh(tank, v.body, v.chassis, cx, 0.49, 0);
    for (const t of [-0.3, 0, 0.3]) mesh(new THREE.TorusGeometry(0.253, 0.012, 8, 36).rotateY(Math.PI / 2), M.chrome, v.chassis, cx + t * cl, 0.49, 0);
    for (const t of [-0.15, 0.15]) {
      mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.04, 20), M.chrome, v.chassis, cx + cl * t, 0.745, 0);
      mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.02, 16), M.dark, v.chassis, cx + cl * t, 0.772, 0);
    }
    // A ladder at the rear and exhaust stacks behind the cab.
    for (const z of [-0.06, 0.06]) mesh(box(0.012, 0.42, 0.012, 0.004), M.chrome, v.chassis, c0 + 0.045, 0.45, z);
    for (let i = 0; i < 5; i++) mesh(box(0.012, 0.012, 0.12, 0.004), M.chrome, v.chassis, c0 + 0.045, 0.28 + i * 0.085, 0);
    for (const s of [-1, 1]) mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.5, 12), M.chrome, v.chassis, x0 - 0.01, 0.5, s * (W - 0.05));
    top = 0.742;
  } else {
    // flatbed with a painted container
    mesh(box(cl, 0.05, W * 2 + 0.02, 0.015), M.dark, v.chassis, cx, 0.26, 0);
    mesh(new RoundedBoxGeometry(cl - 0.08, 0.42, W * 2 - 0.04, 4, 0.02), v.body, v.chassis, cx, 0.49, 0);
    const rib = once('rib', () => box(0.02, 0.36, 0.012, 0.004)),
      n = Math.round((cl - 0.08) / 0.11);
    for (let i = 1; i < n; i++) for (const s of [-1, 1]) mesh(rib, v.body, v.chassis, c0 + 0.04 + ((cl - 0.08) * i) / n, 0.49, s * (W - 0.016));
    // Container doors: two leaves with locking bars.
    mesh(box(0.008, 0.38, 0.008, 0.002), M.dark, v.chassis, c0 + 0.037, 0.49, 0);
    for (const z of [-0.2, -0.08, 0.08, 0.2]) mesh(box(0.012, 0.38, 0.012, 0.004), M.steel, v.chassis, c0 + 0.034, 0.49, z);
    for (const s of [-1, 1]) for (const y of [0.3, 0.68]) mesh(box(0.05, 0.05, 0.05, 0.008), M.steel, v.chassis, c0 + 0.06, y, s * (W - 0.04));
    mesh(box(0.2, 0.1, W * 2 - 0.14, 0.04), v.body, v.chassis, x0 + 0.14, CAB_H + 0.03, 0);
    top = 0.702;
  }
  const rear = len > 3 ? [c0 + 0.3, c0 + 0.62, cx + 0.3] : [c0 + 0.32, c0 + 0.64];
  wheels(v, [x1 - 0.3, ...rear], { style: 2, lips: false });
  lights(v, L, 0.3, { tag, z: 0.15, round: 8, grille: 0.16, bumpers: M.chrome });
  decal(v, id, color, cx, top + 0.004, Math.min(cl - 0.2, 1.3), 0.3, flip);
}

function bus(v, len, color, id, flip, tag) {
  const L = len - 0.2,
    h = 0.66,
    bounds = { x0: -L / 2 - 0.01, x1: L / 2 + 0.01, w: 0.34, h: 0.7 };
  v.body = paint(v, color);
  const fa = L / 2 - 0.5,
    ra = len > 3 ? [-L / 2 + 0.5, -L / 2 + 0.85] : [-L / 2 + 0.55];
  const lines = sheet('bus:' + len, 2048, bounds, (g, to) => {
    // Side view: two doors, luggage hatches between the axles, a skirt seam and a dark sill.
    g.strokeStyle = LINE;
    g.lineWidth = 3;
    const door = (x0, x1) => {
      poly(g, [to.side(x0, 0.355), to.side(x0, 0.13), to.side(x1, 0.13), to.side(x1, 0.355)], false);
      g.stroke();
      poly(g, [to.side((x0 + x1) / 2, 0.13), to.side((x0 + x1) / 2, 0.355)], false);
      g.stroke();
    };
    door(L / 2 - 0.26, L / 2 - 0.04);
    door(-0.12, 0.12);
    g.lineWidth = 2;
    g.strokeStyle = 'rgba(8,8,10,.4)';
    poly(g, [to.side(ra.at(-1) + 0.2, 0.3), to.side(fa - 0.2, 0.3)], false);
    g.stroke();
    for (const [x0, x1] of [
      [ra.at(-1) + 0.24, -0.18],
      [0.18, fa - 0.24],
    ]) {
      const [ax, ay] = to.side(x0, 0.27),
        [bx, by] = to.side(x1, 0.15);
      g.strokeRect(ax, ay, bx - ax, by - ay);
    }
    g.fillStyle = '#26262a';
    poly(g, [to.side(-L / 2 + 0.1, 0), to.side(L / 2 - 0.1, 0), to.side(L / 2 - 0.1, 0.128), to.side(-L / 2 + 0.1, 0.128)]);
    g.fill();
    // Top view: roof seams and two hatches.
    g.strokeStyle = 'rgba(8,8,10,.4)';
    for (let x = -L / 2 + 0.4; x < L / 2 - 0.2; x += 0.42) {
      poly(g, [to.top(x, -0.25), to.top(x, 0.25)], false);
      g.stroke();
    }
  });
  mesh(hull(L, { top: () => h, y0: 0.1, n: 7, round: 12, steps: 36, taper: 0.05 }, bounds), skin(v, lines), v.chassis);
  const band = [];
  for (let i = 0; i <= 24; i++) {
    const u = Math.sin((i / 24 - 0.5) * Math.PI),
      k = (1 - Math.abs(u) ** 12) ** (1 / 12);
    band.push({ x: u * (L / 2 + 0.006), w: Math.max((W + 0.006) * k, 0.01), y0: 0.36, y1: 0.57, n: 7, taper: 0.03 });
  }
  mesh(loft(band, 0.9), M.glass, v.chassis);
  // Window posts.
  const posts = Math.round(L / 0.36),
    post = once('post', () => box(0.035, 0.23, 0.012, 0.004));
  for (let i = 1; i < posts; i++) for (const s of [-1, 1]) mesh(post, v.body, v.chassis, -L / 2 + (L * i) / posts, 0.465, s * (W + 0.002));
  // Roof: an air-conditioning unit at the rear and a vent at the front.
  mesh(box(0.5, 0.05, 0.3, 0.018), M.dark, v.chassis, -L / 2 + 0.5, h + 0.02, 0);
  mesh(box(0.16, 0.024, 0.16, 0.01), M.steel, v.chassis, L / 2 - 0.3, h + 0.008, 0);
  // A lit destination board over the screen.
  mesh(box(0.012, 0.045, 0.3, 0.004), M.amber, v.chassis, L / 2 - 0.006, 0.6, 0);
  mirrors(v, L / 2 - 0.1, 0.5, W, true);
  wheels(v, [fa, ...ra], { style: 2 });
  lights(v, L, 0.24, { tag, round: 12, grille: 0.26, bumpers: M.dark });
  decal(v, id, color, 0.25, h + 0.004, Math.min(L - 1.3, 1.3), 0.3, flip);
}

const BY_LEN = { 2: ['sedan', 'hatch', 'coupe', 'suv'], 3: ['box', 'bus', 'tanker'], 4: ['container', 'bus', 'box'] };

// m is the puzzle's vehicle record; index varies the model. Returns a Group whose
// userData holds the animated parts.
export function makeVehicle(m, index) {
  const root = new THREE.Group(),
    chassis = new THREE.Group();
  root.add(chassis);
  const v = { root, chassis, wheels: [], lamps: null, body: null, paints: [], owned: [] };
  // Vertical vehicles face up or down the board; the label always reads from one side.
  const back = m.id !== 'red' && index % 3 === 1;
  const kind = m.id === 'red' ? 'coupe' : BY_LEN[m.len][index % BY_LEN[m.len].length];
  const tag = m.id.slice(0, 3).toUpperCase() + ' ' + String(index + 1).padStart(2, '0');
  if (m.len === 2) car(v, kind, m.color, m.id, back, tag);
  else if (kind === 'bus') bus(v, m.len, m.color, m.id, back, tag);
  else truck(v, kind, m.len, m.color, m.id, back, tag);
  root.rotation.y = (m.axis === 'h' ? 0 : -Math.PI / 2) + (back ? Math.PI : 0);
  // Along-axis direction in world space for +1 moves, as seen from the vehicle's own +X.
  v.sign = back ? -1 : 1;
  root.userData = v;
  return root;
}
// Free what one vehicle owns: its materials and textures, and each geometry that is not cached.
export function disposeVehicle(root) {
  for (const o of root.userData.owned) o.dispose();
  const kept = new Set(cache.values());
  root.traverse((o) => {
    if (o.geometry && !kept.has(o.geometry)) o.geometry.dispose();
  });
}
