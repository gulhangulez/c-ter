// FAQ single source. Generated from the spec by scripts/extract-faq.mjs.
// Entries with publish:false are never emitted to public HTML/JSON-LD (build
// filters them out). The six former owner-review drafts were approved 2026-10-01.
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dataPath = join(dirname(fileURLToPath(import.meta.url)), "faq.data.json");
export const faq = JSON.parse(await readFile(dataPath, "utf8"));

// Convenience: ids grouped by primary page.
export const faqByPage = faq.reduce((acc, f) => {
  (acc[f.page] ||= []).push(f.id);
  return acc;
}, {});
