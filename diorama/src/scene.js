// The room, the workbench and the diorama board. One unit is one parking cell (about 6 cm),
// so real-size props are scaled by 1 / 0.06. The table top is y = 0.
import * as THREE from 'three';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { GroundedSkybox } from 'three/addons/objects/GroundedSkybox.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import {
  EffectComposer,
  RenderPass,
  EffectPass,
  DepthOfFieldEffect,
  VignetteEffect,
  ToneMappingEffect,
  ToneMappingMode,
  SMAAEffect,
  NoiseEffect,
  BlendFunction,
} from 'postprocessing';
import { N8AOPostPass } from 'n8ao';

const REAL = 1 / 0.06;
const A = 'assets/';
export const BASE_H = 0.55; // height of the board surface above the table

const texLoader = new THREE.TextureLoader();
function canvasTex(w, h, draw) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
function shadows(o, cast = true) {
  o.traverse((m) => {
    if (m.isMesh) {
      m.castShadow = cast;
      m.receiveShadow = true;
    }
  });
  return o;
}

export function createStage(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false, depth: false });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.NoToneMapping;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1714);
  scene.environmentIntensity = 0.85;
  const camera = new THREE.PerspectiveCamera(32, 1, 0.3, 600);

  // Window light: one warm key that throws the soft shadows.
  const sun = new THREE.DirectionalLight(0xfff0dc, 2.6);
  sun.position.set(-11, 19, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -16, right: 16, top: 12, bottom: -12, near: 2, far: 50 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  sun.shadow.radius = 5;
  scene.add(sun, sun.target);

  const composer = new EffectComposer(renderer, { frameBufferType: THREE.HalfFloatType });
  composer.addPass(new RenderPass(scene, camera));
  const ao = new N8AOPostPass(scene, camera, 1, 1);
  Object.assign(ao.configuration, {
    aoRadius: 0.7,
    distanceFalloff: 1,
    intensity: 2.6,
    aoSamples: 12,
    denoiseSamples: 6,
    denoiseRadius: 8,
    halfRes: true,
    gammaCorrection: false,
  });
  composer.addPass(ao);
  const dof = new DepthOfFieldEffect(camera, { focusDistance: 20, focusRange: 6, bokehScale: 2, resolutionScale: 0.6 });
  dof.target = new THREE.Vector3(0, BASE_H, 0);
  const vignette = new VignetteEffect({ offset: 0.28, darkness: 0.58 });
  const grain = new NoiseEffect({ blendFunction: BlendFunction.SOFT_LIGHT, premultiply: true });
  grain.blendMode.opacity.value = 0.22;
  composer.addPass(new EffectPass(camera, dof));
  composer.addPass(new EffectPass(camera, new SMAAEffect(), vignette, grain, new ToneMappingEffect({ mode: ToneMappingMode.AGX })));

  // The scene is drawn only when something changed: a draw costs the GPU about as much when
  // nothing moves. touch() asks for the next two frames; the second one shows the state at rest.
  // touch(1) asks for one frame: for a motion that the caller draws at its own rate.
  let pending = 2;
  const touch = (draws = 2) => {
    pending = Math.max(pending, draws);
  };
  function render(dt) {
    if (!pending) return;
    pending--;
    composer.render(dt);
  }

  function resize(w, h) {
    touch();
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  // ---- room: 360° photo for the view, HDR for light and reflections ----
  const ready = [];
  // A tiling texture. The material can use it at once; `ready` waits for its image.
  function tex(file, rep, srgb = false) {
    let t;
    ready.push(
      new Promise((done, fail) => {
        t = texLoader.load(A + file, done, undefined, fail);
      }),
    );
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(rep, rep);
    t.anisotropy = 8;
    if (srgb) t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  ready.push(
    new HDRLoader().loadAsync(A + 'artist_workshop_512.hdr').then((t) => {
      t.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = t;
    }),
  );
  const TABLE_H = 12.4; // about 75 cm
  // The backdrop comes in two steps: a small photo that the first frame waits for, then the
  // sharp one, fetched after everything else and decoded off the main thread.
  let sky;
  ready.push(
    texLoader.loadAsync(A + 'artist_workshop_2k.webp').then((t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = 8;
      sky = new GroundedSkybox(t, 26, 150, 96);
      sky.position.y = 26 - TABLE_H - 0.01;
      sky.material.color.setScalar(1.25);
      scene.add(sky);
      touch();
    }),
  );
  const sharpen = () =>
    new THREE.ImageBitmapLoader()
      .setOptions({ imageOrientation: 'flipY' })
      .loadAsync(A + 'artist_workshop_6k.webp')
      .then((bitmap) => {
        const t = new THREE.Texture(bitmap);
        t.flipY = false; // the bitmap is already flipped
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 8;
        t.needsUpdate = true;
        const small = sky.material.map;
        sky.material.map = t;
        small.dispose();
        touch();
      });

  // ---- workbench and props ----
  const bench = new THREE.Group();
  scene.add(bench);
  // One GLB per model: meshopt-compressed geometry and WebP textures (tools/assets.sh).
  const gltf = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const load = (name) => gltf.loadAsync(`${A}models/${name}.glb`).then((g) => shadows(g.scene));
  const box = new THREE.Box3(),
    size = new THREE.Vector3();
  // Put a model on the table: scale, turn, then rest its lowest point on y.
  function put(o, { s = REAL, x = 0, z = 0, y = 0, ry = 0 }) {
    o.scale.setScalar(s);
    o.rotation.y = ry;
    o.position.set(0, 0, 0);
    o.updateMatrixWorld(true);
    box.setFromObject(o);
    const cx = (box.min.x + box.max.x) / 2,
      cz = (box.min.z + box.max.z) / 2;
    o.position.set(x - cx, y - box.min.y, z - cz);
    bench.add(o);
    return o;
  }
  const TABLE = { w: 34, d: 19 };
  ready.push(
    load('wooden_table_02').then((o) => {
      box.setFromObject(o).getSize(size);
      // Fit the real table to the bench size we need; its top lands on y = 0.
      o.scale.set(TABLE.w / size.x, TABLE_H / size.y, TABLE.d / size.z);
      o.updateMatrixWorld(true);
      box.setFromObject(o);
      o.position.set(-(box.min.x + box.max.x) / 2, -box.max.y, -(box.min.z + box.max.z) / 2);
      bench.add(o);
    }),
  );
  const props = [
    ['desk_lamp_arm_01', { x: -12.5, z: -5.5, ry: 0.7 }],
    ['spray_paint_bottles', { x: 11.5, z: -6, ry: -0.4 }],
    ['pliers', { x: 11, z: 4.6, ry: 1.1 }],
    ['screwdrivers_02', { x: -11.2, z: 4.4, ry: -0.5 }],
    ['measuring_tape_01', { x: 13.6, z: 0.4, ry: 0.5 }],
    ['potted_plant_04', { x: -14.2, z: 0.6, ry: 0.3 }],
  ];
  for (const [name, at] of props) ready.push(load(name).then((o) => put(o, at)));

  // Cutting mat under the board.
  const mat = new THREE.Mesh(
    new RoundedBoxGeometry(18, 0.05, 13.6, 2, 0.02),
    new THREE.MeshStandardMaterial({
      roughness: 0.78,
      map: canvasTex(1024, 768, (g, w, h) => {
        g.fillStyle = '#1f4a3c';
        g.fillRect(0, 0, w, h);
        for (let i = 0; i < 9000; i++) {
          g.fillStyle = `rgba(${Math.random() < 0.5 ? '255,255,255' : '0,0,0'},${Math.random() * 0.035})`;
          g.fillRect(Math.random() * w, Math.random() * h, 2, 2);
        }
        g.strokeStyle = 'rgba(214,232,206,.34)';
        for (let x = 32; x < w; x += 16) {
          g.lineWidth = x % 80 === 32 ? 1.6 : 0.5;
          g.beginPath();
          g.moveTo(x, 32);
          g.lineTo(x, h - 32);
          g.stroke();
        }
        for (let y = 32; y < h; y += 16) {
          g.lineWidth = y % 80 === 32 ? 1.6 : 0.5;
          g.beginPath();
          g.moveTo(32, y);
          g.lineTo(w - 32, y);
          g.stroke();
        }
        g.lineWidth = 2;
        g.strokeRect(32, 32, w - 64, h - 64);
        g.fillStyle = 'rgba(214,232,206,.5)';
        g.font = '600 15px Helvetica, Arial';
        for (let x = 112, n = 5; x < w - 40; x += 80, n += 5) g.fillText(n, x + 3, 28);
      }),
    }),
  );
  mat.position.y = 0.025;
  mat.receiveShadow = true;
  bench.add(mat);

  // ---- the diorama board, rebuilt for each grid size ----
  const board = new THREE.Group();
  scene.add(board);
  const lampModel = load('street_lamp_01');
  ready.push(lampModel);
  const M = {
    ply: new THREE.MeshStandardMaterial({ map: tex('plywood_diff_1k.webp', 1, true), roughness: 0.7 }),
    edge: new THREE.MeshStandardMaterial({ color: 0x15130f, roughness: 0.45 }),
    kerb: new THREE.MeshStandardMaterial({ color: 0xb9b5ab, roughness: 0.85 }),
    grass: new THREE.MeshStandardMaterial({
      roughness: 1,
      color: 0x8fa66a,
      map: canvasTex(256, 256, (g) => {
        g.fillStyle = '#5d7a2e';
        g.fillRect(0, 0, 256, 256);
        for (let i = 0; i < 26000; i++) {
          g.fillStyle = `hsl(${78 + Math.random() * 30},${35 + Math.random() * 30}%,${18 + Math.random() * 34}%)`;
          g.fillRect(Math.random() * 256, Math.random() * 256, 1.6, 1.6);
        }
      }),
    }),
    post: new THREE.MeshStandardMaterial({ color: 0x2a2c30, roughness: 0.5, metalness: 0.6 }),
    brass: new THREE.MeshStandardMaterial({ color: 0xc8a052, roughness: 0.3, metalness: 1 }),
  };
  M.grass.map.wrapS = M.grass.map.wrapT = THREE.RepeatWrapping;
  const asphaltMaps = {
    map: tex('asphalt_02_diff_1k.webp', 1, true),
    normalMap: tex('asphalt_02_nor_gl_1k.webp', 1),
    roughnessMap: tex('asphalt_02_arm_1k.webp', 1),
  };
  let gate = null;

  function markings(N, exitRow) {
    const px = 128;
    return canvasTex((N + 2) * px, N * px, (g, w, h) => {
      g.strokeStyle = 'rgba(238,234,220,.9)';
      g.lineWidth = 5;
      g.lineCap = 'butt';
      g.strokeRect(4, 4, N * px - 8, h - 8);
      g.lineWidth = 3;
      g.strokeStyle = 'rgba(238,234,220,.6)';
      for (let i = 1; i < N; i++)
        for (let j = 0; j < N; j++) {
          // Short ticks at cell corners, like bay markings.
          g.beginPath();
          g.moveTo(i * px, j * px + 14);
          g.lineTo(i * px, (j + 1) * px - 14);
          g.stroke();
          g.beginPath();
          g.moveTo(j * px + 14, i * px);
          g.lineTo((j + 1) * px - 14, i * px);
          g.stroke();
        }
      // Exit lane: clear the border, add yellow guide lines and an arrow.
      const y = exitRow * px;
      g.clearRect(N * px - 12, y + 6, 16, px - 12);
      g.strokeStyle = 'rgba(244,196,48,.9)';
      g.lineWidth = 5;
      for (const yy of [y + 6, y + px - 6]) {
        g.beginPath();
        g.moveTo((N - 2) * px, yy);
        g.lineTo(w, yy);
        g.stroke();
      }
      g.fillStyle = 'rgba(238,234,220,.85)';
      const ax = (N + 0.25) * px,
        ay = y + px / 2;
      g.fillRect(ax, ay - 7, 70, 14);
      g.beginPath();
      g.moveTo(ax + 112, ay);
      g.lineTo(ax + 66, ay - 26);
      g.lineTo(ax + 66, ay + 26);
      g.fill();
      g.save();
      g.translate((N + 1.45) * px, ay);
      g.rotate(Math.PI / 2);
      g.font = '800 40px Helvetica, Arial';
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText('EXIT', 0, 0);
      g.restore();
      // Paint wear.
      g.globalCompositeOperation = 'destination-out';
      for (let i = 0; i < 5200; i++) {
        g.fillStyle = `rgba(0,0,0,${Math.random() * 0.55})`;
        const r = 1 + Math.random() * 3.4;
        g.fillRect(Math.random() * w, Math.random() * h, r, r);
      }
    });
  }

  // walls: cells that hold a planter, which no vehicle can enter.
  const shared = new Set(Object.values(M));
  let built = [],
    buildId = 0;
  function buildBoard(N, exitRow, walls = []) {
    // Free what the previous board made. Shared materials, loaded textures and the lamp model stay.
    const gone = new Set();
    for (const o of built) {
      gone.add(o.geometry);
      if (!shared.has(o.material)) {
        gone.add(o.material);
        if (o.material.map?.isCanvasTexture) gone.add(o.material.map);
      }
    }
    for (const r of gone) r.dispose();
    built = [];
    const id = ++buildId;
    board.clear();
    touch();
    const h = N / 2,
      pad = 1.15,
      road = 2;
    const W = N + pad * 2 + road,
      D = N + pad * 2,
      cx = road / 2;
    const add = (geo, m, x, y, z, cast = true) => {
      const o = new THREE.Mesh(geo, m);
      o.position.set(x, y, z);
      o.castShadow = cast;
      o.receiveShadow = true;
      board.add(o);
      built.push(o);
      return o;
    };
    // Plywood slab with a dark stained edge and brass corner pins.
    add(new RoundedBoxGeometry(W + 0.5, BASE_H - 0.08, D + 0.5, 3, 0.05), M.edge, cx, (BASE_H - 0.08) / 2, 0);
    add(new THREE.BoxGeometry(W + 0.3, 0.06, D + 0.3), M.ply, cx, BASE_H - 0.05, 0);
    for (const sx of [-1, 1])
      for (const sz of [-1, 1]) add(new THREE.CylinderGeometry(0.09, 0.09, 0.03, 16), M.brass, cx + sx * (W / 2 + 0.02), BASE_H - 0.01, sz * (D / 2 + 0.02));
    // Flocked grass margin.
    M.grass.map.repeat.set(W / 3, D / 3);
    add(new THREE.BoxGeometry(W, 0.05, D), M.grass, cx, BASE_H - 0.01, 0, false);
    // Asphalt lot and exit road.
    const asphalt = new THREE.MeshStandardMaterial({ ...asphaltMaps, color: 0x8d8d92, roughness: 1, normalScale: new THREE.Vector2(0.9, 0.9) });
    const lot = add(new THREE.PlaneGeometry(N + 0.36, N + 0.36), asphalt, 0, BASE_H + 0.02, 0, false);
    lot.rotation.x = -Math.PI / 2;
    const uv = lot.geometry.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, (uv.getX(i) * N) / 3.2, (uv.getY(i) * N) / 3.2);
    const exitZ = exitRow + 0.5 - h,
      rl = pad + road - 0.18;
    const rd = add(new THREE.PlaneGeometry(rl, 1.12), asphalt, h + rl / 2 + 0.17, BASE_H + 0.02, exitZ, false);
    rd.rotation.x = -Math.PI / 2;
    const ruv = rd.geometry.attributes.uv;
    for (let i = 0; i < ruv.count; i++) ruv.setXY(i, (ruv.getX(i) * rl) / 3.2 + 0.3, ruv.getY(i) * 0.35 + 0.2);
    const lines = add(
      new THREE.PlaneGeometry(N + 2, N),
      new THREE.MeshStandardMaterial({
        map: markings(N, exitRow),
        transparent: true,
        roughness: 0.75,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -2,
      }),
      1,
      BASE_H + 0.026,
      0,
      false,
    );
    lines.rotation.x = -Math.PI / 2;
    lines.castShadow = false;
    // Kerb around the lot, open at the exit.
    const k = 0.16,
      kh = 0.11,
      o = h + 0.18 + k / 2,
      ky = BASE_H + 0.02 + kh / 2;
    const kerb = (lx, lz, x, z) => add(new RoundedBoxGeometry(lx, kh, lz, 2, 0.035), M.kerb, x, ky, z);
    kerb(N + 0.36 + k * 2, k, 0, -o);
    kerb(N + 0.36 + k * 2, k, 0, o);
    kerb(k, N + 0.36, -o, 0);
    const z0 = -h - 0.18,
      z1 = exitZ - 0.56,
      z2 = exitZ + 0.56,
      z3 = h + 0.18;
    kerb(k, z1 - z0, o, (z0 + z1) / 2);
    kerb(k, z3 - z2, o, (z2 + z3) / 2);
    for (const s of [-1, 1]) kerb(rl - k, k * 0.8, o + (rl - k) / 2 + k / 2, exitZ + s * 0.64);
    // Boom gate at the exit.
    const gx = o + 0.5,
      gz = exitZ + 0.64;
    add(new RoundedBoxGeometry(0.2, 0.62, 0.2, 2, 0.03), new THREE.MeshStandardMaterial({ color: 0xe8b21e, roughness: 0.5 }), gx, ky + 0.3, gz + 0.14);
    gate = new THREE.Group();
    gate.position.set(gx, ky + 0.52, gz + 0.02);
    const arm = new THREE.Mesh(
      new RoundedBoxGeometry(0.07, 0.07, 1.42, 2, 0.02),
      new THREE.MeshStandardMaterial({
        roughness: 0.45,
        map: canvasTex(256, 32, (g) => {
          for (let i = 0; i < 8; i++) {
            g.fillStyle = i % 2 ? '#f3f0e8' : '#d1262b';
            g.fillRect(i * 32, 0, 32, 32);
          }
        }),
      }),
    );
    arm.position.z = -0.71;
    arm.castShadow = true;
    gate.add(arm);
    built.push(arm);
    board.add(gate);
    // Street lamps at two corners, model scale.
    lampModel.then((src) => {
      if (id !== buildId) return; // a newer board replaced this one while the model loaded
      box.setFromObject(src).getSize(size);
      for (const [x, z, ry] of [
        [-h - 0.75, -h - 0.75, 0.8],
        [h + 0.75, h + 0.75, -2.3],
      ]) {
        const l = src.clone(true);
        l.scale.setScalar(3.1 / size.y);
        l.rotation.y = ry;
        l.updateMatrixWorld(true);
        box.setFromObject(l);
        l.position.set(x - (box.min.x + box.max.x) / 2, BASE_H - box.min.y, z - (box.min.z + box.max.z) / 2);
        board.add(l);
      }
      touch();
    });
    // A few scale trees: flock spheres on wire trunks.
    const leaf = new THREE.MeshStandardMaterial({ color: 0x34561f, roughness: 1 }),
      trunk = new THREE.MeshStandardMaterial({ color: 0x4a3524, roughness: 0.9 });
    for (const [x, z, s] of [
      [-h - 0.7, h + 0.7, 1],
      [-h - 0.72, 0.4, 0.8],
      [h + 0.8, -h - 0.7, 0.9],
      [1.2, -h - 0.78, 0.7],
      [h + 2.3, -h - 0.5, 1.05],
      [h + 2.2, h + 0.55, 0.85],
    ]) {
      add(new THREE.CylinderGeometry(0.035, 0.05, 0.6 * s, 8), trunk, x, BASE_H + 0.3 * s, z);
      const g = new THREE.IcosahedronGeometry(0.36 * s, 4),
        p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const n = 1 + (Math.sin(p.getX(i) * 31 + p.getY(i) * 17) + Math.sin(p.getZ(i) * 23)) * 0.07;
        p.setXYZ(i, p.getX(i) * n, p.getY(i) * n * 0.9, p.getZ(i) * n);
      }
      g.computeVertexNormals();
      add(g, leaf, x, BASE_H + 0.72 * s, z);
    }
    // Planters: concrete tubs with a clipped shrub.
    const tub = new RoundedBoxGeometry(0.8, 0.34, 0.8, 3, 0.05),
      soil = new THREE.MeshStandardMaterial({ color: 0x2b2019, roughness: 1 });
    for (const c of walls) {
      const x = (c % N) + 0.5 - h,
        z = Math.floor(c / N) + 0.5 - h,
        s = 0.9 + ((c * 7) % 5) * 0.05;
      add(tub, M.kerb, x, BASE_H + 0.19, z);
      add(new THREE.BoxGeometry(0.66, 0.02, 0.66), soil, x, BASE_H + 0.365, z, false);
      const g = new THREE.IcosahedronGeometry(0.3, 3),
        p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        const n = 1 + (Math.sin(p.getX(i) * 29 + p.getY(i) * 19 + c) + Math.sin(p.getZ(i) * 23 + c)) * 0.06;
        p.setXYZ(i, p.getX(i) * n, p.getY(i) * n * 0.82, p.getZ(i) * n);
      }
      g.computeVertexNormals();
      add(g, leaf, x, BASE_H + 0.36 + 0.21 * s, z).scale.setScalar(s);
    }
    board.position.x = -cx; // centre the whole base on the table
    return { offsetX: -cx, exitZ, roadEnd: h + rl - 0.9 };
  }

  return {
    renderer,
    scene,
    camera,
    composer,
    dof,
    ao,
    sun,
    board,
    resize,
    touch,
    render,
    buildBoard,
    tasks: ready, // one promise per file the first frame needs
    ready: Promise.all(ready).then(() => {
      touch();
      sharpen().catch((err) => console.warn('Sharp backdrop not loaded:', err));
    }),
    get gate() {
      return gate;
    },
  };
}
