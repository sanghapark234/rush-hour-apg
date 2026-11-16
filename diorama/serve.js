// Static server for Tiny Gridlock: bun serve.js [host] [port] [folder]
// It serves the build in dist/ (bun run build), or another folder of this project.
// Text files and the HDR go out as Brotli or gzip; images and models are already compressed.
// The Brotli copies are made when the server starts, so the first visitor does not wait for them.
// Every response has an ETag and "Cache-Control: no-cache", so a repeat visit sends only
// conditional requests and gets "304 Not Modified" for each file that did not change.
import { resolve, sep, extname } from 'node:path';
import { stat, readdir } from 'node:fs/promises';
import { promisify } from 'node:util';
import { brotliCompress, gzip, constants as zlib } from 'node:zlib';

const root = resolve(import.meta.dir, process.argv[4] ?? 'dist');
if (!(await stat(root + sep + 'index.html').catch(() => null))?.isFile()) {
  console.error(`${root} has no index.html. Run "bun run build" first.`);
  process.exit(1);
}
const hostname = process.argv[2] ?? '127.0.0.1';
const port = Number(process.argv[3] ?? 8000);

const COMPRESS = new Set(['.html', '.js', '.json', '.css', '.svg', '.md', '.txt', '.hdr']);
const encoders = {
  br: (buf) => promisify(brotliCompress)(buf, { params: { [zlib.BROTLI_PARAM_QUALITY]: 11, [zlib.BROTLI_PARAM_SIZE_HINT]: buf.length } }),
  gzip: (buf) => promisify(gzip)(buf, { level: 9 }),
};
const packed = new Map(); // "path|etag" -> Promise<Buffer>; the tag names the encoding, and a changed file gets a new key
// The encoding is part of the tag: a compressed body is a different representation.
const tagOf = (info, encoding) => `"${info.size.toString(36)}-${Math.round(info.mtimeMs).toString(36)}${encoding ? '-' + encoding : ''}"`;
// The compressed file. It is made once for each file, tag and encoding.
function pack(file, etag, encoding) {
  const key = `${file}|${etag}`;
  if (!packed.has(key)) {
    for (const old of packed.keys()) if (old.startsWith(`${file}|`) && old.endsWith(`-${encoding}"`)) packed.delete(old);
    const body = Bun.file(file)
      .arrayBuffer()
      .then((b) => encoders[encoding](Buffer.from(b)));
    packed.set(key, body);
    body.catch(() => packed.delete(key)); // a failed read is tried again on the next request
  }
  return packed.get(key);
}

function encodingFor(req) {
  const accepted = (req.headers.get('accept-encoding') ?? '').split(',').map((s) =>
    s
      .trim()
      .toLowerCase()
      .split(';')
      .map((x) => x.trim()),
  );
  const ok = (name) => accepted.some(([n, q]) => n === name && !(q?.startsWith('q=') && Number(q.slice(2)) === 0)); // "q=0" refuses it
  return ok('br') ? 'br' : ok('gzip') ? 'gzip' : null;
}

Bun.serve({
  port,
  hostname,
  async fetch(req) {
    if (req.method !== 'GET' && req.method !== 'HEAD') return new Response('method not allowed', { status: 405, headers: { allow: 'GET, HEAD' } });
    let path;
    try {
      path = decodeURIComponent(new URL(req.url).pathname);
    } catch {
      return new Response('bad path', { status: 400 });
    }
    if (path.endsWith('/')) path += 'index.html';
    const file = resolve(root + path);
    if (!file.startsWith(root + sep)) return new Response('bad path', { status: 400 });
    const info = await stat(file).catch(() => null);
    if (!info?.isFile()) return new Response('not found', { status: 404 });

    const encoding = COMPRESS.has(extname(file)) ? encodingFor(req) : null;
    const etag = tagOf(info, encoding);
    const headers = { etag, 'cache-control': 'no-cache', vary: 'Accept-Encoding', 'x-content-type-options': 'nosniff' };
    const seen = req.headers.get('if-none-match');
    if (seen && seen.split(',').some((t) => t.trim().replace(/^W\//, '') === etag)) return new Response(null, { status: 304, headers });

    headers['content-type'] = Bun.file(file).type;
    if (!encoding) return new Response(req.method === 'HEAD' ? null : Bun.file(file), { headers: { ...headers, 'content-length': String(info.size) } });
    const body = await pack(file, etag, encoding);
    return new Response(req.method === 'HEAD' ? null : body, { headers: { ...headers, 'content-encoding': encoding, 'content-length': String(body.length) } });
  },
});
console.log(`Tiny Gridlock: http://${hostname}:${port}/`);

// Brotli quality 11 takes seconds for the engine file. Browsers ask for Brotli, so those copies are
// made now, one file at a time; a request that comes meanwhile shares the work. Folders of
// libraries and hidden folders are left out: the game does not load them.
const started = performance.now();
let count = 0;
// A folder that cannot be read stops the walk, not the server: its files are compressed on their first request.
const names = await readdir(root, { recursive: true }).catch((err) => (console.error(`The folder was not read to the end: ${err.message}`), []));
for (const name of names) {
  const file = root + sep + name;
  if (!COMPRESS.has(extname(file)) || name.split(sep).some((part) => part === 'node_modules' || part.startsWith('.'))) continue;
  const info = await stat(file).catch(() => null);
  if (!info?.isFile()) continue;
  await pack(file, tagOf(info, 'br'), 'br').then(
    () => count++,
    (err) => console.error(`${name} was not compressed: ${err.message}`),
  );
}
console.log(`Compressed ${count} files in ${((performance.now() - started) / 1000).toFixed(1)} s.`);
