# Redirects & HTTP status rules

The host **must** serve real HTTP status codes (plan 2026-10 §12 T7, §13):

- `301` only from an old URL to its real equivalent, in **one hop** to the final
  `https://www.cince-tercuman.com/...` URL.
- Real `404` for unknown URLs (never a `200` error screen, no SPA fallback).
- Real `410` for deliberately removed pages (`410-yazili-ceviri.html` for the
  ended written-translation pages, `410.html` otherwise). Removed services are
  never redirected to the home page.

`migration/mapping.csv` is the single source. Run `node scripts/redirects.mjs`
after editing it; it regenerates the three samples here, and `npm test` fails if
they are stale:

- `htaccess.sample` — Apache / LiteSpeed (Güzel Hosting is most likely this;
  verify first). Rename to `.htaccess` in the web root only after testing.
- `nginx.conf.sample` — nginx server block.
- `_redirects` — Netlify / Cloudflare Pages. Güzel Hosting does not read it.

Rows with `decision=pending` (İzmir, Yiwu and the old blog/archive posts) need an
owner decision before launch: either real, updated content at the same URL
(`keep`, 200) or `remove` (410). No rule is generated for them until then.
