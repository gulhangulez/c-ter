# Redirects & HTTP status rules

Per plan §20.4 and §21, the host **must** serve real HTTP status codes:

- Real `301`/`308` only for content that genuinely moved to a real equivalent.
- Real `404` for unknown URLs (never a `200` error screen).
- Real `410` for deliberately removed pages where the host supports it; a real
  `404` is an acceptable fallback.

**Do not** apply any redirect or deletion to an old URL until the migration
inventory (`migration/old-url-inventory.csv` → `migration/mapping.csv`) has been
built and approved. Never mass-redirect removed pages to the home page
(Google may treat that as a soft 404, §21.1).

Two starter configs are provided; use the one matching your host and fill in
approved rows from `migration/mapping.csv`.

- `_redirects` — Netlify / Cloudflare Pages style.
- `nginx.conf.sample` — nginx `location` rules.

The 404 document is `dist/404.html`; wire it to a real 404 response.
