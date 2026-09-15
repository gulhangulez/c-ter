// FAQ single source. Generated from the spec by scripts/extract-faq.mjs.
// Owner-review drafts (Q015, Q019, Q020, Q021, Q045, Q107) carry publish:false
// and are never emitted to public HTML/JSON-LD (build filters them out).
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
