// Minimal static preview server for dist/ with directory-style URLs and a
// real 404 status. For local review only:  npm run serve  (default :4321)
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const DIST = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const PORT = process.env.PORT || 4321;
const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".mjs": "text/javascript; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".xml": "application/xml; charset=utf-8", ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml" };

async function resolve(pathname) {
  const clean = decodeURIComponent(pathname.split("?")[0]);
  const candidates = [];
  if (extname(clean)) candidates.push(join(DIST, clean));
  else {
    candidates.push(join(DIST, clean, "index.html"));
    candidates.push(join(DIST, clean.replace(/\/$/, "") + ".html"));
  }
  for (const c of candidates) {
    try { if ((await stat(c)).isFile()) return c; } catch {}
  }
  return null;
}

createServer(async (req, res) => {
  const file = await resolve(req.url);
  if (!file) {
    const body = await readFile(join(DIST, "404.html")).catch(() => "Not found");
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    return res.end(body);
  }
  const body = await readFile(file);
  res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
  res.end(body);
}).listen(PORT, () => console.log(`Preview: http://localhost:${PORT}/  (Ctrl+C to stop)`));
