// Dependency-free static site generator.
// Reads data + content modules, renders static HTML into dist/.
import { readFile, writeFile, mkdir, rm, cp } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { layout } from "../src/lib/render.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const LOCALES = ["tr", "zh-Hans", "az"];
const SERVICE_IDS = new Set(["china", "machine", "factory", "fair", "canton"]);

const readJson = async (p) => JSON.parse(await readFile(join(ROOT, p), "utf8"));

async function main() {
  const site = await readJson("src/data/site.json");
  const nav = await readJson("src/data/navigation.json");
  const microcopy = await readJson("src/data/microcopy.json");
  const { pages } = await import("../src/content/pages.mjs");
  const { faq } = await import("../src/content/faq.mjs");
  const year = new Date().getFullYear();

  // Reset dist
  if (existsSync(DIST)) await rm(DIST, { recursive: true, force: true });
  await mkdir(DIST, { recursive: true });

  // Assets
  await mkdir(join(DIST, "assets"), { recursive: true });
  await cp(join(ROOT, "src/styles/main.css"), join(DIST, "assets/main.css"));
  await cp(join(ROOT, "src/scripts/app.js"), join(DIST, "assets/app.js"));
  await cp(join(ROOT, "src/lib/contact.mjs"), join(DIST, "assets/contact.mjs"));
  if (existsSync(join(ROOT, "public"))) {
    await cp(join(ROOT, "public"), DIST, { recursive: true });
  }

  // One published+indexable filter feeds HTML hreflang and the sitemap (plan §12 T4).
  // Only an explicit "published" status counts; missing/unknown status is unpublished.
  const isPublished = (loc) => loc?.status === "published";
  const isPublishedIndexable = (loc) => isPublished(loc) && loc.indexable !== false;

  const sitemapUrls = [];
  const written = [];
  let draftCount = 0;

  // faqFor factory bound to a locale
  const faqIndex = new Map(faq.map((f) => [f.id, f]));
  function makeFaqFor(locale) {
    return (ids) => (ids || [])
      .map((id) => faqIndex.get(id))
      .filter(Boolean)
      .filter((f) => f.publish !== false) // owner-review drafts excluded from public HTML
      .map((f) => {
        const l = f[locale] || f.tr;
        return { id: f.id, q: l.q, a: l.a, open: f.open };
      });
  }

  for (const page of pages) {
    const alternateRecords = LOCALES
      .filter((locale) => isPublishedIndexable(page.locales[locale]))
      .map((locale) => {
        const path = page.locales[locale].path;
        return { locale, path, url: new URL(path, site.origin).href };
      });
    // layout()/hreflangTags() add the origin themselves; relative paths here.
    const alternates = Object.fromEntries(alternateRecords.map(({ locale, path }) => [locale, path]));

    for (const locale of LOCALES) {
      const loc = page.locales[locale];
      if (!loc) continue;
      if (!isPublished(loc)) { draftCount++; continue; } // not published

      const homeHref = locale === "zh-Hans" ? "/zh/" : locale === "az" ? "/az/" : "/";
      const contactPath = locale === "zh-Hans" ? "/zh/contact/" : locale === "az" ? "/az/elaqe/" : "/iletisim/";

      const ctx = {
        site, nav, microcopy, locale, alternates,
        currentPath: loc.path, homeHref, contactPath, year,
        pageId: page.id, serviceId: page.primaryService === "canton" ? "fair" : SERVICE_IDS.has(page.primaryService) ? page.primaryService : "none",
        faqFor: makeFaqFor(locale)
      };
      const html = layout(loc, ctx);
      const outPath = loc.path.endsWith("/") ? `${loc.path}index.html` : `${loc.path}.html`;
      const dest = join(DIST, outPath.replace(/^\//, ""));
      await mkdir(dirname(dest), { recursive: true });
      await writeFile(dest, html);
      written.push(loc.path);

      if (isPublishedIndexable(loc)) {
        sitemapUrls.push({
          loc: new URL(loc.path, site.origin).href,
          // Same rule as HTML: no alternate set for a page without a real counterpart.
          alternates: alternateRecords.length > 1 ? Object.fromEntries(alternateRecords.map(({ locale, url }) => [locale, url])) : {}
        });
      }
    }
  }

  // sitemap.xml — published + indexable only, with hreflang alternates
  const xmlns = 'xmlns="http://www.sitemap.org/schemas/sitemap/0.9"'.replace("sitemap.org", "sitemaps.org");
  const hl = { tr: "tr", "zh-Hans": "zh-Hans", az: "az" };
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${xmlns} xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls.map((u) => `  <url>
    <loc>${u.loc}</loc>
${Object.entries(u.alternates).map(([l, href]) => `    <xhtml:link rel="alternate" hreflang="${hl[l]}" href="${href}"/>`).join("\n")}
  </url>`).join("\n")}
</urlset>
`;
  await writeFile(join(DIST, "sitemap.xml"), sitemap);

  // 404 page (host serves it with a real 404 status; see redirects/)
  const notFound = await import("../src/content/not-found.mjs");
  await writeFile(join(DIST, "404.html"), notFound.render({ site, microcopy, year }));

  // 410 bodies for deliberately removed URLs (plan §13). Served with a real 410
  // by the host rules generated from migration/mapping.csv.
  const gone = await import("../src/content/gone.mjs");
  await writeFile(join(DIST, "410.html"), gone.renderGeneric({ site }));
  await writeFile(join(DIST, "410-yazili-ceviri.html"), gone.renderWrittenTranslation({ site }));

  console.log(`Built ${written.length} pages, ${sitemapUrls.length} in sitemap, ${draftCount} draft page(s) skipped.`);
  return { written, sitemapUrls, draftCount };
}

main().catch((e) => { console.error(e); process.exit(1); });
