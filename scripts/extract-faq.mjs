// Parse the site-plan spec and extract Q001–Q110 and AZ001–AZ030 Q&A into
// src/content/faq.data.json. Run once when the spec changes:  node scripts/extract-faq.mjs
import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SPEC = join(ROOT, "spec/site-plan-v1.3.md");

// Q -> primary page id (from §44.3)
const PAGE_OF = {
  services: ["Q001", "Q003", "Q004"],
  china: ["Q049", "Q050", "Q051", "Q067", "Q068"],
  machine: ["Q084", "Q022", "Q023", "Q024", "Q025", "Q026", "Q027", "Q028"],
  factory: ["Q029", "Q030", "Q031", "Q034", "Q032", "Q033", "Q088", "Q089", "Q085", "Q086", "Q087", "Q090", "Q091", "Q092"],
  fair: ["Q035", "Q036", "Q037", "Q038", "Q097", "Q098", "Q039", "Q040", "Q099"],
  canton: ["Q093", "Q094", "Q095", "Q096", "Q100"],
  areas: ["Q002", "Q072", "Q073"],
  rates: ["Q007", "Q013", "Q060", "Q055", "Q056", "Q057", "Q058", "Q059", "Q008", "Q009", "Q011", "Q012", "Q010", "Q061", "Q062", "Q014", "Q015"],
  about: ["Q016", "Q017", "Q019", "Q020", "Q021"],
  faq: ["Q005", "Q006", "Q041", "Q042", "Q043", "Q044", "Q045", "Q046"],
  istanbul: ["Q069"], ankara: ["Q074"], kocaeli: ["Q071"], gebze: ["Q070"],
  guangzhou: ["Q063"], shanghai: ["Q065"], beijing: ["Q066"], shenzhen: ["Q064"],
  request_guide: ["Q018"],
  machine_guide: ["Q075", "Q076", "Q077", "Q078", "Q079", "Q080", "Q081", "Q082", "Q083"],
  selection_guide: ["Q047", "Q048", "Q052", "Q053", "Q054", "Q101", "Q102", "Q103", "Q104", "Q105", "Q106", "Q107", "Q108", "Q109", "Q110"]
};
const OWNER_REVIEW = new Set(["Q015", "Q019", "Q020", "Q021", "Q045", "Q107"]);
const pageOfQ = {};
for (const [page, ids] of Object.entries(PAGE_OF)) for (const id of ids) pageOfQ[id] = page;

const clean = (s) => s.replace(/\r/g, "").trim();
// Collapse paragraph: join lines, keep blank-line paragraph breaks as \n\n
function paras(block) {
  const norm = block.split("\n").map((l) => l.trim()).join("\n");
  return norm.split(/\n\s*\n/).map((p) => p.replace(/\n/g, " ").trim()).filter(Boolean).join("\n\n");
}

async function main() {
  const md = await readFile(SPEC, "utf8");
  const entries = [];

  // --- Q001..Q110 (TR + ZH) ---
  // Header: #### Q001 — <tr question>
  const qRe = /^####\s+(Q\d{3})\s+[—-]\s+(.+)$/gm;
  let m;
  const anchors = [];
  while ((m = qRe.exec(md))) anchors.push({ id: m[1], trQ: clean(m[2]), start: m.index });
  for (let i = 0; i < anchors.length; i++) {
    const a = anchors[i];
    const end = i + 1 < anchors.length ? anchors[i + 1].start : md.length;
    const body = md.slice(a.start, end);
    const trA = grab(body, /\*\*Türkçe cevap[^\n]*\*\*\s*\n/, /\n\*\*简体中文/);
    const zhQ = grab(body, /\*\*简体中文\s*[—-]\s*问题\*\*\s*\n/, /\n\*\*简体中文\s*[—-]\s*回答/);
    const zhA = grab(body, /\*\*简体中文\s*[—-]\s*回答\*\*\s*\n/, /\n\*\*Bileşen kimliği/);
    if (!trA || !zhA) continue; // skip malformed / non-content anchors
    entries.push({
      id: a.id,
      page: pageOfQ[a.id] || null,
      publish: OWNER_REVIEW.has(a.id) ? false : true,
      tr: { q: a.trQ, a: paras(trA) },
      "zh-Hans": { q: paras(zhQ) || a.trQ, a: paras(zhA) }
    });
  }

  // --- AZ001..AZ030 ---
  const azRe = /^####\s+(AZ\d{3})\s+[—-]\s+(.+)$/gm;
  const azAnchors = [];
  while ((m = azRe.exec(md))) azAnchors.push({ id: m[1], q: clean(m[2]), start: m.index });
  for (let i = 0; i < azAnchors.length; i++) {
    const a = azAnchors[i];
    const end = i + 1 < azAnchors.length ? azAnchors[i + 1].start : md.length;
    const body = md.slice(a.start, end);
    const q = grab(body, /\*\*AZ\s*[—-]\s*soru:\*\*\s*/, /\n/);
    const ans = grab(body, /\*\*AZ\s*[—-]\s*cevap:\*\*\s*\n/, /(\n<a id=|\n####|\n###|\n## |$)/);
    if (!ans) continue;
    entries.push({
      id: a.id,
      page: "az-faq",
      publish: true,
      az: { q: clean(q) || a.q, a: paras(ans) }
    });
  }

  await writeFile(join(ROOT, "src/content/faq.data.json"), JSON.stringify(entries, null, 2) + "\n");
  const q = entries.filter((e) => /^Q/.test(e.id));
  const az = entries.filter((e) => /^AZ/.test(e.id));
  console.log(`Extracted ${q.length} Q entries (${q.filter((e) => e.publish === false).length} owner-review) and ${az.length} AZ entries.`);
}

function grab(body, startRe, endRe) {
  const s = body.match(startRe);
  if (!s) return "";
  const from = s.index + s[0].length;
  const rest = body.slice(from);
  const e = rest.match(endRe);
  const to = e ? e.index : rest.length;
  return clean(rest.slice(0, to));
}

main().catch((e) => { console.error(e); process.exit(1); });
