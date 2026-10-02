// IndexNow submission (https://www.indexnow.org/documentation).
// Reads the URLs from dist/sitemap.xml and posts them in one batch to the
// shared IndexNow endpoint, which passes them on to every participating engine
// (Bing, Yandex, Naver, Seznam, Yep, Amazon). Google does not take part.
//
//   npm run indexnow            dry run: prints what would be sent
//   npm run indexnow -- --send  checks the live key file, then submits
//
// Only run --send after the site (with the key file) has been uploaded, and
// only when pages were added or changed: IndexNow is for changes, not for
// re-sending an unchanged site.
import { readFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const HOST = "www.cince-tercuman.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";

const keyFile = (await readdir(join(ROOT, "public"))).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("public/ içinde IndexNow anahtar dosyası yok");
const key = (await readFile(join(ROOT, "public", keyFile), "utf8")).trim();
const keyLocation = `https://${HOST}/${keyFile}`;

const sitemap = await readFile(join(ROOT, "dist", "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const body = { host: HOST, key, keyLocation, urlList };

if (!process.argv.includes("--send")) {
  console.log(`Dry run: ${urlList.length} URL, anahtar ${keyLocation}`);
  console.log(urlList.join("\n"));
  console.log("\nGöndermek için: npm run indexnow -- --send");
  process.exit(0);
}

const live = await fetch(keyLocation).then(async (r) => (r.ok ? (await r.text()).trim() : null)).catch(() => null);
if (live !== key) {
  console.error(`Anahtar dosyası canlıda bulunamadı veya farklı: ${keyLocation}\nÖnce site zip'ini sunucuya yükleyin.`);
  process.exit(1);
}

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify(body),
});
console.log(`IndexNow yanıtı: ${res.status} ${res.statusText} (${urlList.length} URL)`);
// 200 = alındı, 202 = alındı, anahtar doğrulaması bekliyor; diğerleri hata.
if (res.status !== 200 && res.status !== 202) {
  console.error(await res.text());
  process.exit(1);
}
