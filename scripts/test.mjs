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
  const s = prepareContactV13({ locale: "tr", service: "machine", country: "TR", city: "Ankara", dateLabel: "3-5 Mart", need: "CNC kurulumu için tercüman", sourcePath: "/makine-kurulumu-cince-tercuman/?utm=x#frag" });
  ok("sourcePath reduced to pathname", s.text.includes("Kaynak sayfa: /makine-kurulumu-cince-tercuman/") && !s.text.includes("utm"));
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
  const ownerReview = ["Q015", "Q019", "Q020", "Q021", "Q045", "Q107"];
  ok("6 owner-review drafts flagged publish:false", ownerReview.every((id) => faq.find((f) => f.id === id)?.publish === false));
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
section("D. Owner-review answers never reach public HTML (§50)");
{
  const drafts = [
    ["Q015", "fatura"], ["Q019", null], ["Q020", null], ["Q021", null], ["Q045", null], ["Q107", null]
  ];
  let leaked = [];
  for (const [id] of drafts) {
    const f = faq.find((x) => x.id === id);
    const needle = f.tr.a.slice(0, 40);
    for (const html of htmlByPath.values()) if (html.includes(needle)) { leaked.push(id); break; }
  }
  ok("no owner-review answer appears in any page", leaked.length === 0, leaked.join(","));
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
    if (path === "/404.html") continue;
    const n = (html.match(/<h1[ >]/g) || []).length;
    if (n !== 1) multiH1.push(`${path}(${n})`);
  }
  ok("exactly one <h1> per page", multiH1.length === 0, multiH1.slice(0, 8).join(","));
}

// ---------------------------------------------------------------------------
console.log(`\n${fail === 0 ? "✓ ALL PASS" : "✗ FAILURES"}: ${pass} passed, ${fail} failed.`);
process.exit(fail === 0 ? 0 : 1);
