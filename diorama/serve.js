// Static server for Tiny Gridlock: bun serve.js [host] [port] [folder]
// It serves the build in dist/ (bun run build), or another folder of this project.
// Text files and the HDR go out as Brotli or gzip; images and models are already compressed.
// Every response has an ETag and "Cache-Control: no-cache", so a repeat visit sends only
// conditional requests and gets "304 Not Modified" for each file that did not change.
import { resolve, sep, extname } from 'node:path';
import { stat } from 'node:fs/promises';
import { promisify } from 'node:util';
import { brotliCompress, gzip, constants as zlib } from 'node:zlib';

const root = resolve(import.meta.dir, process.argv[4] ?? 'dist');
if (!(await stat(root + sep + 'index.html').catch(() => null))?.isFile()) { console.error(`${root} has no index.html. Run "bun run build" first.`); process.exit(1); }
const hostname = process.argv[2] ?? '127.0.0.1';
const port = Number(process.argv[3] ?? 8000);

const COMPRESS = new Set(['.html', '.js', '.json', '.css', '.svg', '.md', '.txt', '.hdr']);
const encoders = {
  br: (buf) => promisify(brotliCompress)(buf, { params: { [zlib.BROTLI_PARAM_QUALITY]: 11, [zlib.BROTLI_PARAM_SIZE_HINT]: buf.length } }),
  gzip: (buf) => promisify(gzip)(buf, { level: 9 }),
};
const packed = new Map(); // "path|etag|encoding" -> Promise<Buffer>; a changed file gets a new key

function encodingFor(req) {
  const accepted = (req.headers.get('accept-encoding') ?? '').split(',').map((s) => s.trim().toLowerCase().split(';').map((x) => x.trim()));
  const ok = (name) => accepted.some(([n, q]) => n === name && !(q?.startsWith('q=') && Number(q.slice(2)) === 0)); // "q=0" refuses it
  return ok('br') ? 'br' : ok('gzip') ? 'gzip' : null;
}

Bun.serve({
  port, hostname,
  async fetch(req) {
    if (req.method !== 'GET' && req.method !== 'HEAD') return new Response('method not allowed', { status: 405, headers: { allow: 'GET, HEAD' } });
    let path;
    try { path = decodeURIComponent(new URL(req.url).pathname); } catch { return new Response('bad path', { status: 400 }); }
    if (path.endsWith('/')) path += 'index.html';
    const file = resolve(root + path);
    if (!file.startsWith(root + sep)) return new Response('bad path', { status: 400 });
    const info = await stat(file).catch(() => null);
    if (!info?.isFile()) return new Response('not found', { status: 404 });

    const encoding = COMPRESS.has(extname(file)) ? encodingFor(req) : null;
    // The encoding is part of the tag: a compressed body is a different representation.
    const etag = `"${info.size.toString(36)}-${Math.round(info.mtimeMs).toString(36)}${encoding ? '-' + encoding : ''}"`;
    const headers = { etag, 'cache-control': 'no-cache', vary: 'Accept-Encoding', 'x-content-type-options': 'nosniff' };
    const seen = req.headers.get('if-none-match');
    if (seen && seen.split(',').some((t) => t.trim().replace(/^W\//, '') === etag)) return new Response(null, { status: 304, headers });

    headers['content-type'] = Bun.file(file).type;
    if (!encoding) return new Response(req.method === 'HEAD' ? null : Bun.file(file), { headers: { ...headers, 'content-length': String(info.size) } });
    const key = `${file}|${etag}`;
    if (!packed.has(key)) {
      for (const old of packed.keys()) if (old.startsWith(`${file}|`) && old.endsWith(`-${encoding}"`)) packed.delete(old);
      const body = Bun.file(file).arrayBuffer().then((b) => encoders[encoding](Buffer.from(b)));
      packed.set(key, body);
      body.catch(() => packed.delete(key)); // a failed read is tried again on the next request
    }
    const body = await packed.get(key);
    return new Response(req.method === 'HEAD' ? null : body, { headers: { ...headers, 'content-encoding': encoding, 'content-length': String(body.length) } });
  },
});
console.log(`Tiny Gridlock: http://${hostname}:${port}/`);
