// Tests for serve.js, which serves the project folder here, so the tests need no build: the path check, cache validation and the choice of encoding.
import { test, expect, beforeAll, afterAll } from 'bun:test';

const port = 20000 + Math.floor(Math.random() * 20000);
const base = `http://127.0.0.1:${port}`;
let server;
const get = (path, headers = {}, method = 'GET') => fetch(base + path, { method, headers, decompress: false });

beforeAll(async () => {
  server = Bun.spawn(['bun', new URL('../serve.js', import.meta.url).pathname, '127.0.0.1', String(port), '.'], { stdout: 'pipe', stderr: 'inherit' });
  await server.stdout.getReader().read(); // the address line: the server listens
});
afterAll(() => server.kill());

test('serves files and refuses paths outside the folder', async () => {
  expect((await get('/')).headers.get('content-type')).toStartWith('text/html');
  expect((await get('/src/none.js')).status).toBe(404);
  expect((await get('/public/assets/')).status).toBe(404);
  for (const path of ['/..%2fREADME.md', '/%2e%2e/%2e%2e/etc/passwd', '/src/..%2f..%2f..%2fetc%2fpasswd']) expect([400, 404]).toContain((await get(path)).status);
  expect((await get('/%zz')).status).toBe(400);
  expect((await get('/', {}, 'POST')).status).toBe(405);
});

test('answers a matching If-None-Match with 304 and no body', async () => {
  for (const path of ['/src/engine.js', '/public/assets/models/pliers.glb']) {
    const first = await get(path, { 'accept-encoding': 'br' });
    const etag = first.headers.get('etag');
    expect(first.headers.get('cache-control')).toBe('no-cache');
    const again = await get(path, { 'accept-encoding': 'br', 'if-none-match': etag });
    expect(again.status).toBe(304);
    expect((await again.arrayBuffer()).byteLength).toBe(0);
    expect((await get(path, { 'accept-encoding': 'br', 'if-none-match': '"other"' })).status).toBe(200);
  }
});

test('chooses the encoding from Accept-Encoding', async () => {
  const plain = await Bun.file(new URL('../src/engine.js', import.meta.url)).text();
  const enc = async (accept) => (await get('/src/engine.js', accept === null ? {} : { 'accept-encoding': accept })).headers.get('content-encoding');
  expect(await enc('gzip, deflate, br')).toBe('br');
  expect(await enc('gzip')).toBe('gzip');
  expect(await enc('br;q=0, gzip;q=0.5')).toBe('gzip');
  expect(await enc('br;q=0.0, gzip;q=0.000')).toBeNull();
  expect(await enc('identity')).toBeNull();
  // Each encoding has its own ETag, and the compressed bodies decode to the file.
  const br = await get('/src/engine.js', { 'accept-encoding': 'br' }), gz = await get('/src/engine.js', { 'accept-encoding': 'gzip' });
  expect(br.headers.get('etag')).not.toBe(gz.headers.get('etag'));
  expect(new TextDecoder().decode(Bun.gunzipSync(new Uint8Array(await gz.arrayBuffer())))).toBe(plain);
  expect(await (await fetch(base + '/src/engine.js')).text()).toBe(plain);
  // Images and models are not compressed again.
  expect(await (async () => (await get('/public/assets/models/pliers.glb', { 'accept-encoding': 'br' })).headers.get('content-encoding'))()).toBeNull();
});
