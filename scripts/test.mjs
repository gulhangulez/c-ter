// Acceptance tests (plan §60). Run after build:  npm run build && npm test
import { readFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { prepareContactV13 } from "../src/lib/contact.mjs";
import { pages } from "../src/content/pages.mjs";
import { faq } from "../src/content/faq.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(ROOT, "dist");
let pass = 0, fail = 0;
const ok = (name, cond, extra = "") => { if (cond) { pass++; } else { fail++; console.error(`  ✗ ${name}${extra ? " — " + extra : ""}`); } };
const section = (t) => console.log(`\n${t}`);

// ---------------------------------------------------------------------------
section("A. prepareContactV13 — language honesty & validation (§56/§58)");
{
  // AZ never silently falls back to TR
  let threw = false; try { prepareContactV13({ locale: "az", service: "china", country: "CN", city: "Guangzhou", dateLabel: "10-12", need: "sərgi görüşləri üçün" }); } catch (e) { threw = e.message; }
  ok("AZ requires languageRequirement", threw === "invalid_language_requirement", String(threw));

  const az = prepareContactV13({ locale: "az", service: "china", country: "CN", city: "Guangzhou", dateLabel: "10-12", need: "sərgi görüşləri üçün", languageRequirement: "azerbaijani-required" });
  ok("AZ output is Azerbaijani (not TR)", az.text.includes("Salam.") && az.text.includes("Azərbaycan dilində"), "");
  ok("AZ azerbaijani-required sets confirmation flag", az.requiresLanguageConfirmation === true);
  ok("AZ message carries language condition", az.text.includes("ayrıca təsdiqlənməlidir"));

  const tOk = prepareContactV13({ locale: "az", service: "machine", country: "TR", city: "İstanbul, Tuzla", dateLabel: "hələ dəqiq deyil", need: "avadanlıq quraşdırılması", languageRequirement: "turkish-ok" });
  ok("AZ turkish-ok clears confirmation flag", tOk.requiresLanguageConfirmation === false);

  // legacy zh -> zh-Hans
  const zh = prepareContactV13({ locale: "zh", service: "fair", country: "CN", city: "广州", dateLabel: "10-14", need: "展位交流与产品介绍问答安排" });
  ok("legacy 'zh' normalizes to zh-Hans", zh.locale === "zh-Hans" && zh.text.includes("您好"));

  // service/country consistency
  let mism = false; try { prepareContactV13({ locale: "tr", service: "factory", country: "TR", city: "x", dateLabel: "1", need: "1234567890" }); } catch (e) { mism = e.message; }
  ok("Çin hizmeti + TR ülke reddedilir", mism === "service_country_mismatch");

  // sensitive text never leaks into URL query beyond wa 'text'; sourcePath is path only
  const s = prepareContactV13({ locale: "tr", service: "machine", country: "TR", city: "Ankara", dateLabel: "3-5 Mart", need: "CNC kurulumu için tercüman", sourcePath: "/makine-kurulumu-cince-tercuman/" });
  ok("source page carried as same-site path", s.text.includes("Kaynak sayfa: /makine-kurulumu-cince-tercuman/"));
  // plan DEV07: external or query-carrying source URLs are rejected outright
  for (const bad of ["/makine-kurulumu-cince-tercuman/?ad=Ali", "https://example.com/", "//example.com/x", "/x#frag"]) {
    let rej = false; try { prepareContactV13({ locale: "tr", service: "machine", country: "TR", city: "Ankara", dateLabel: "3-5 Mart", need: "CNC kurulumu için tercüman", sourcePath: bad }); } catch (e) { rej = e.message; }
    ok(`sourcePath rejected: ${bad}`, rej === "invalid_source", String(rej));
  }
  const direct = prepareContactV13({ locale: "zh-Hans", service: "machine", country: "TR", city: "伊斯坦布尔", dateLabel: "3月", need: "设备安装调试现场口译需求" });
  ok("direct contact visit uses the contact path as source", direct.text.endsWith("来源页面: /zh/contact/"));
  ok("wa link fixed to business number", s.whatsapp.startsWith("https://wa.me/905550441141?text="));

  let badLoc = false; try { prepareContactV13({ locale: "de", service: "china", country: "CN", city: "x", dateLabel: "1", need: "1234567890" }); } catch (e) { badLoc = e.message; }
  ok("unknown locale rejected", badLoc === "invalid_locale");

  let badNeed = false; try { prepareContactV13({ locale: "tr", service: "unsure", country: "TR", city: "Ankara", dateLabel: "1", need: "kısa" }); } catch (e) { badNeed = e.message; }
  ok("need < 10 chars rejected", badNeed === "invalid_need");
}

// ---------------------------------------------------------------------------
section("B. FAQ data integrity (§45, §48)");
{
  const q = faq.filter((f) => /^Q/.test(f.id));
  const az = faq.filter((f) => /^AZ/.test(f.id));
  ok("110 Q entries", q.length === 110, `got ${q.length}`);
  ok("30 AZ entries", az.length === 30, `got ${az.length}`);
  const ownerApproved = ["Q015", "Q019", "Q020", "Q021", "Q045", "Q107"];
  ok("6 owner-approved answers published without editorial notes", ownerApproved.every((id) => {
    const f = faq.find((x) => x.id === id);
    return f?.publish === true && !f.tr.editorialNote && !f["zh-Hans"].editorialNote;
  }));
  ok("every Q has TR + ZH answer", q.every((f) => f.tr?.a?.length > 5 && f["zh-Hans"]?.a?.length > 2));
  ok("every AZ has answer", az.every((f) => f.az?.a?.length > 5));
}

// ---------------------------------------------------------------------------
section("C. Build output & drafts (§20.3, §50)");
{
  ok("dist exists", existsSync(DIST));
  ok("sitemap.xml exists", existsSync(join(DIST, "sitemap.xml")));
  ok("robots.txt exists", existsSync(join(DIST, "robots.txt")));
  ok("404.html exists", existsSync(join(DIST, "404.html")));
  ok("app.js + contact.mjs shipped", existsSync(join(DIST, "assets/app.js")) && existsSync(join(DIST, "assets/contact.mjs")));
}

// Collect all built HTML
async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}
const htmlFiles = await walk(DIST);
const htmlByPath = new Map();
for (const f of htmlFiles) htmlByPath.set("/" + f.slice(DIST.length + 1).replace(/index\.html$/, "").replace(/^\/+/, ""), await readFile(f, "utf8"));

// ---------------------------------------------------------------------------
section("D. Owner-approved answers are placed, unpublished FAQs never leak (§50)");
{
  const placement = { Q015: "/cince-tercuman-fiyatlari/", Q019: "/hakkimizda/", Q020: "/hakkimizda/", Q021: "/hakkimizda/", Q045: "/sik-sorulan-sorular/", Q107: "/rehber/cince-tercuman-nasil-secilir/" };
  const missing = Object.entries(placement).filter(([id, path]) => !(htmlByPath.get(path) || "").includes(`id="q-${id.toLowerCase()}"`));
  ok("owner-approved answers appear on their pages", missing.length === 0, missing.map(([id]) => id).join(","));
  const oldDraft = ["kesin bir onay vermiyoruz", "koşulsuz veya anlık yedek", "genel bir iddiada bulunmuyoruz"];
  ok("superseded cautious drafts gone", oldDraft.every((s) => ![...htmlByPath.values()].some((h) => h.includes(s))));
  let leaked = [];
  for (const f of faq.filter((x) => x.publish === false)) {
    const needle = f.tr.a.slice(0, 40);
    for (const html of htmlByPath.values()) if (html.includes(needle)) { leaked.push(f.id); break; }
  }
  ok("no unpublished answer appears in any page", leaked.length === 0, leaked.join(","));
}

// ---------------------------------------------------------------------------
section("E. hreflang & canonical (§58.2, §61)");
{
  const home = htmlByPath.get("/");
  ok("home canonical", home.includes('<link rel="canonical" href="https://www.cince-tercuman.com/">'));
  ok("home has 3-way hreflang (tr/zh/az)", ["tr", "zh-Hans", "az"].every((l) => home.includes(`hreflang="${l}"`)));
  const contact = htmlByPath.get("/iletisim/");
  ok("contact has 3-way hreflang", ["tr", "zh-Hans", "az"].every((l) => contact.includes(`hreflang="${l}"`)));
  const service = htmlByPath.get("/cinde-tercuman/");
  ok("service page has NO az in hreflang", !/<link rel="alternate" hreflang="az"/.test(service));
  ok("service page still offers /az/ fallback link in nav", service.includes('href="/az/" title="Azərbaycan dili'));
  const azHome = htmlByPath.get("/az/");
  ok("AZ page lang is az", azHome.includes('<html lang="az">'));
}

// ---------------------------------------------------------------------------
section("F. Internal links resolve (§27 D)");
{
  const known = new Set(htmlByPath.keys());
  // also accept file-less anchors/asset paths
  const bad = [];
  for (const [path, html] of htmlByPath) {
    const hrefs = [...html.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]);
    for (let h of hrefs) {
      if (h.startsWith("/assets/")) continue;
      if (/\.[a-z0-9]+$/.test(h)) { if (!existsSync(join(DIST, h))) bad.push(`${path} -> ${h}`); continue; }
      if (!h.endsWith("/")) h = h + "/"; // normalize to dir path
      h = h.replace(/\/index\.html\/$/, "/");
      if (!known.has(h) && !known.has(h.replace(/\/$/, "/"))) bad.push(`${path} -> ${h}`);
    }
  }
  ok("no broken internal links", bad.length === 0, bad.slice(0, 8).join(" | "));
}

// ---------------------------------------------------------------------------
section("G. Business rules in visible copy (§1, §16.5)");
{
  const all = [...htmlByPath.values()].join("\n");
  ok("no fabricated star ratings", !/★|⭐|\b\d\.\d\s*\/\s*5\b/.test(all));
  // §16.5: affirmative false-success strings must never be shown (negated
  // phrases such as "does not mean confirmed" are correct and allowed).
  ok("no affirmative false-success status message", !/Rezervasyonunuz onaylandı|Kaydınız oluşturuldu|Asistan talebinizi aldı|Talebiniz alındı/.test(all));
  ok("price note present site-wide sampling", htmlByPath.get("/cince-tercuman-fiyatlari/").includes("günlük"));
  // every published page from content has a single <h1>
  let multiH1 = [];
  for (const [path, html] of htmlByPath) {
    if (/^\/(404|410)/.test(path)) continue;
    const n = (html.match(/<h1[ >]/g) || []).length;
    if (n !== 1) multiH1.push(`${path}(${n})`);
  }
  ok("exactly one <h1> per page", multiH1.length === 0, multiH1.slice(0, 8).join(","));
}

// ---------------------------------------------------------------------------
section("H. Internal notes & plan labels never reach public output (plan 2026-10 §7, DEV01)");
{
  const publicText = [...htmlByPath.values()].join("\n")
    + await readFile(join(DIST, "sitemap.xml"), "utf8")
    + await readFile(join(DIST, "assets/app.js"), "utf8");
  for (const marker of ["İç uygulama notu", "ziyaretçiye gösterilmez", "Yayın kapısı", "İŞLETME ONAYI BEKLİYOR", "editorialNote"]) {
    ok(`marker absent: ${marker}`, !publicText.includes(marker));
  }
  const noteIds = ["Q008", "Q014", "Q027", "Q039", "Q044", "Q052", "Q108", "Q109"];
  const leaked = [];
  for (const id of noteIds) {
    const f = faq.find((x) => x.id === id);
    ok(`${id} ZH note moved to editorialNote`, typeof f["zh-Hans"].editorialNote === "string" && !/İç uygulama/.test(f["zh-Hans"].a));
    const sample = f["zh-Hans"].editorialNote.replace(/^\*\*[^*]+\*\*\s*/, "").slice(0, 30);
    if (publicText.includes(sample)) leaked.push(id);
  }
  ok("no editorial note sentence in public output", leaked.length === 0, leaked.join(","));
  // Editorial labels from the plan must not be copied into visitor text.
  const labelLeaks = [];
  for (const [path, html] of htmlByPath) {
    const text = html.replace(/<script[^]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
    for (const re of [/\*\*/, /\bMD\s?§/, /\bŞema:/, /\bKabul:/, /\bKorunuyor:/, /\bİç linkler:/, /\bSSS eşlemesi/, /Yayın kontrolü/]) {
      if (re.test(text)) labelLeaks.push(`${path} ${re}`);
    }
  }
  ok("no plan/editorial labels in visible text", labelLeaks.length === 0, labelLeaks.slice(0, 6).join(" | "));
}

// ---------------------------------------------------------------------------
section("I. Active FAQ texts (plan 2026-10 §7)");
{
  const q2 = faq.find((f) => f.id === "Q002");
  ok("Q002 limited to confirmed network", !q2.tr.a.includes("birçok şehir") && q2.tr.a.includes("İstanbul, Tekirdağ, Düzce, Ankara, Kayseri ve Gaziantep"));
  const q5 = faq.find((f) => f.id === "Q005");
  ok("Q005 has no fixed booking policy", !q5.tr.a.includes("sabit bir son başvuru") && !q5["zh-Hans"].a.includes("统一提前天数"));
  const visible = faq.filter((f) => f.publish !== false);
  ok("140 visible FAQ ids (110 TR/ZH + 30 AZ)", visible.length === 140, String(visible.length));
}

// ---------------------------------------------------------------------------
section("J. Page inventory, hreflang reciprocity & sitemap (plan 2026-10 §5.1, T4)");
{
  const locs = pages.flatMap((p) => Object.entries(p.locales).map(([l, loc]) => ({ page: p, l, loc })));
  const count = (l) => locs.filter((x) => x.l === l && x.loc.status === "published").length;
  ok("34 TR + 28 ZH + 3 AZ = 65 content pages", count("tr") === 34 && count("zh-Hans") === 28 && count("az") === 3, `${count("tr")}/${count("zh-Hans")}/${count("az")}`);
  ok("Tekirdağ old TR URL restored", htmlByPath.has("/cince-tercuman-tekirdag/"));
  const tk = pages.find((p) => p.locales.tr?.path === "/cince-tercuman-tekirdag/");
  ok("Tekirdağ has a real ZH counterpart", Boolean(tk?.locales["zh-Hans"] && htmlByPath.has(tk.locales["zh-Hans"].path)));
  for (const district of ["kadikoy", "besiktas", "uskudar"]) ok(`no district copy URL: ${district}`, ![...htmlByPath.keys()].some((k) => k.includes(district)));

  const sitemap = await readFile(join(DIST, "sitemap.xml"), "utf8");
  const locsInMap = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  ok("sitemap lists 65 absolute URLs", locsInMap.length === 65 && locsInMap.every((u) => u.startsWith("https://www.cince-tercuman.com/")), String(locsInMap.length));
  ok("sitemap hreflang hrefs absolute", [...sitemap.matchAll(/hreflang="[^"]+" href="([^"]+)"/g)].every((m) => m[1].startsWith("https://")));
  ok("404/410 not in sitemap", !/404|410/.test(locsInMap.join(" ")));

  const altOf = (html) => Object.fromEntries([...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">/g)].map((m) => [m[1], m[2]]));
  const nonRecip = [];
  let canonBad = [];
  for (const [path, html] of htmlByPath) {
    if (/^\/(404|410)/.test(path)) continue;
    const canon = [...html.matchAll(/<link rel="canonical" href="([^"]+)">/g)].map((m) => m[1]);
    if (canon.length !== 1 || canon[0] !== "https://www.cince-tercuman.com" + path) canonBad.push(path);
    const alts = altOf(html);
    for (const [lang, href] of Object.entries(alts)) {
      if (lang === "x-default") continue;
      const other = htmlByPath.get(href.replace("https://www.cince-tercuman.com", ""));
      if (!other || altOf(other)[Object.keys(alts).find((k) => alts[k] === "https://www.cince-tercuman.com" + path)] !== "https://www.cince-tercuman.com" + path) nonRecip.push(`${path}->${lang}`);
    }
  }
  ok("one self-canonical per page", canonBad.length === 0, canonBad.slice(0, 5).join(","));
  ok("hreflang alternates reciprocal", nonRecip.length === 0, nonRecip.slice(0, 5).join(","));
  const azAlts = [...htmlByPath.values()].filter((h) => /<link rel="alternate" hreflang="az"/.test(h)).length;
  ok("az hreflang only in the home and contact groups (6 pages)", azAlts === 6, String(azAlts));
}

// ---------------------------------------------------------------------------
section("K. JSON-LD graph (plan 2026-10 §12 T5)");
{
  const bad = [];
  const forbidden = /"@type":"(LocalBusiness|FAQPage|AggregateRating|Review|Person|Offer|Article)"/;
  for (const [path, html] of htmlByPath) {
    if (/^\/(404|410)/.test(path)) continue;
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([^]*?)<\/script>/g)];
    if (scripts.length !== 1) { bad.push(`${path}: ${scripts.length} graphs`); continue; }
    let g; try { g = JSON.parse(scripts[0][1]); } catch { bad.push(`${path}: invalid JSON`); continue; }
    const ids = g["@graph"].map((n) => n["@id"]);
    if (!ids.includes("https://www.cince-tercuman.com/#organization") || !ids.includes("https://www.cince-tercuman.com/#website")) bad.push(`${path}: missing org/website`);
    if (!ids.includes(`https://www.cince-tercuman.com${path}#webpage`)) bad.push(`${path}: missing #webpage`);
    if (new Set(ids).size !== ids.length) bad.push(`${path}: duplicate @id`);
    if (forbidden.test(scripts[0][1])) bad.push(`${path}: forbidden type`);
    if (/"address"|"aggregateRating"|"priceRange"|"logo"/.test(scripts[0][1])) bad.push(`${path}: unverified field`);
    const crumbs = g["@graph"].find((n) => n["@type"] === "BreadcrumbList");
    const visible = (html.match(/<nav class="breadcrumb[^]*?<\/nav>/) || [""])[0];
    const visibleCount = (visible.match(/<li>/g) || []).length;
    if ((crumbs ? crumbs.itemListElement.length : 0) !== visibleCount) bad.push(`${path}: breadcrumb mismatch`);
    const webpage = g["@graph"].find((n) => n["@id"] === `https://www.cince-tercuman.com${path}#webpage`);
    const lang = (html.match(/<html lang="([^"]+)"/) || [])[1];
    if (webpage && webpage.inLanguage !== lang) bad.push(`${path}: inLanguage`);
  }
  ok("one valid graph per page with stable ids, no unverified types", bad.length === 0, bad.slice(0, 6).join(" | "));
  const machine = JSON.parse(htmlByPath.get("/makine-kurulumu-cince-tercuman/").match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
  const svc = machine["@graph"].find((n) => n["@type"] === "Service");
  ok("machine Service: stable id, Türkiye only", svc?.["@id"] === "https://www.cince-tercuman.com/#service-machine" && svc.areaServed?.name === "Türkiye" && !("inLanguage" in svc));
  const factory = JSON.parse(htmlByPath.get("/cinde-fabrika-ziyareti-tercuman/").match(/<script type="application\/ld\+json">([^]*?)<\/script>/)[1]);
  ok("factory Service limited to China", factory["@graph"].find((n) => n["@type"] === "Service")?.areaServed?.name === "Çin");
  ok("contact is ContactPage", /"@type":"ContactPage"/.test(htmlByPath.get("/zh/contact/")));
  ok("about is AboutPage", /"@type":"AboutPage"/.test(htmlByPath.get("/hakkimizda/")));
}

// ---------------------------------------------------------------------------
section("L. No third-party dependencies at runtime (plan 2026-10 DEV10)");
{
  const ext = [];
  for (const [path, html] of htmlByPath) {
    for (const m of html.matchAll(/<(?:link|script)[^>]+(?:href|src)="(https?:\/\/[^"]+)"/g)) {
      if (!m[1].startsWith("https://www.cince-tercuman.com/")) ext.push(`${path}: ${m[1]}`);
    }
  }
  ok("no external fonts/scripts/styles", ext.length === 0, ext.slice(0, 4).join(" | "));
  ok("self-hosted fonts shipped", existsSync(join(DIST, "assets/fonts/manrope-latin-500-normal.woff2")) && existsSync(join(DIST, "assets/fonts/manrope-latin-ext-500-normal.woff2")));
}

// ---------------------------------------------------------------------------
section("M. Contact form contract (plan 2026-10 DEV02, §6.22)");
{
  const az = htmlByPath.get("/az/elaqe/");
  ok("AZ contact has #is-dili language fieldset", az.includes('id="is-dili"'));
  const radios = [...az.matchAll(/<input type="radio" name="languageRequirement"[^>]*>/g)].map((m) => m[0]);
  ok("AZ language radios: 3, none preselected, required", radios.length === 3 && radios.every((r) => !/checked/.test(r) && /required/.test(r)));
  const app = await readFile(join(DIST, "assets/app.js"), "utf8");
  ok("channel links re-validated on click", app.includes('addEventListener("click", validateBeforeOpen)') && app.includes("event.preventDefault()"));
  ok("input re-validates even when errors are visible", !app.includes("errorSummary.hidden) update()"));
  ok("analytics payload never includes message/link text", !/emit\([^)]*(result\.text|whatsapp:|mailto|need|city|nameCompany)/.test(app));
  for (const p of ["/iletisim/", "/zh/contact/", "/az/elaqe/"]) ok(`${p} has quote form`, htmlByPath.get(p).includes("data-quote-form"));
}

// ---------------------------------------------------------------------------
section("N. Guides are reachable from service pages, not only the footer (plan 2026-10 §11.1)");
{
  const guidePaths = pages.filter((p) => /guide/.test(p.id) || /^\/rehber\//.test(p.locales.tr?.path || "")).flatMap((p) => Object.values(p.locales).map((l) => l.path)).filter((p) => /^\/rehber\/|^\/zh\/guides\//.test(p));
  const orphan = [];
  for (const gp of guidePaths) {
    const linked = [...htmlByPath.entries()].some(([path, html]) => path !== gp && (html.match(/<main[^]*<\/main>/) || [""])[0].includes(`href="${gp}"`));
    if (!linked) orphan.push(gp);
  }
  ok("every guide linked from page body content", guidePaths.length >= 8 && orphan.length === 0, orphan.join(","));
}

// ---------------------------------------------------------------------------
section("O. Migration & host rules (plan 2026-10 §13)");
{
  const { readMapping, render } = await import("./redirects.mjs");
  const rows = await readMapping();
  ok("mapping covers Tekirdağ keep", rows.some((r) => r.old_url === "/cince-tercuman-tekirdag/" && r.decision === "keep"));
  ok("no removed/moved URL targets the home page", rows.every((r) => r.decision !== "move" || r.new_url !== "/"));
  ok("every keep row resolves to a built page", rows.filter((r) => r.decision === "keep").every((r) => htmlByPath.has(r.new_url)));
  ok("every move target resolves to a built page", rows.filter((r) => r.decision === "move" && !r.new_url.endsWith(".xml")).every((r) => htmlByPath.has(r.new_url.split("#")[0])));
  const out = render(rows);
  let stale = [];
  for (const [rel, text] of Object.entries(out)) if ((await readFile(join(ROOT, rel), "utf8").catch(() => "")) !== text) stale.push(rel);
  ok("redirect samples regenerated from mapping.csv", stale.length === 0, stale.join(","));
  ok("410 bodies built", existsSync(join(DIST, "410.html")) && existsSync(join(DIST, "410-yazili-ceviri.html")));
  ok("404/410 are noindex", ["/404.html", "/410.html", "/410-yazili-ceviri.html"].every((p) => (htmlByPath.get(p) || "").includes('content="noindex,follow"')));
  ok("no planning files in dist", !existsSync(join(DIST, "spec")) && !existsSync(join(DIST, "migration")));
}

// ---------------------------------------------------------------------------
console.log(`\n${fail === 0 ? "✓ ALL PASS" : "✗ FAILURES"}: ${pass} passed, ${fail} failed.`);
process.exit(fail === 0 ? 0 : 1);
