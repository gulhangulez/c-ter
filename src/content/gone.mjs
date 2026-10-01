// Bodies for deliberately removed URLs, served with a real HTTP 410 (plan §13).
// Not indexable, not in the sitemap. Removed services are never redirected to
// the home page.
import { shell } from "./not-found.mjs";

export function renderWrittenTranslation() {
  return shell({
    title: "Yazılı çeviri hizmetimiz sona erdi | Çince Tercüman",
    description: "Yazılı Çince çeviri hizmeti artık sunulmuyor. Çince–Türkçe sözlü tercümanlık hizmetlerini inceleyebilirsiniz.",
    body: `
    <section class="hero"><div class="container"><div class="hero__solo">
      <span class="pill">410</span>
      <h1>Yazılı çeviri hizmetimiz sona erdi</h1>
      <p class="lead">Artık yazılı Çince çeviri hizmeti sunmuyoruz. Pasaport, evlilik cüzdanı, sözleşme, katalog, web sitesi ve şirket yazışması çevirisi için bu siteden teklif alınamaz.</p>
      <p>Çince–Türkçe sözlü tercümanlık ihtiyacınız varsa <a href="/cince-tercuman/">güncel hizmetlerimizi inceleyebilirsiniz</a>. Çin'de fabrika ve fuar görüşmeleri ile makine kurulumu sırasında sözlü iletişim için <a href="/iletisim/">iletişim sayfasından programınızı paylaşabilirsiniz</a>.</p>
    </div></div></section>`
  });
}

export function renderGeneric() {
  return shell({
    title: "Bu sayfa kaldırıldı | Çince Tercüman",
    description: "Bu sayfa kalıcı olarak kaldırıldı. Çince–Türkçe sözlü tercümanlık hizmetlerini inceleyebilirsiniz.",
    body: `
    <section class="hero"><div class="container"><div class="hero__solo">
      <span class="pill">410</span>
      <h1>Bu sayfa kaldırıldı</h1>
      <p class="lead">Aradığınız sayfa kalıcı olarak yayından kaldırıldı ve yerine geçen bir sayfa bulunmuyor.</p>
      <p>Çince–Türkçe sözlü tercümanlık hizmetlerimizi <a href="/cince-tercuman/">buradan inceleyebilir</a>, programınızı <a href="/iletisim/">iletişim sayfasından</a> paylaşabilirsiniz.</p>
    </div></div></section>`
  });
}
