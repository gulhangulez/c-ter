// 404 page (plan 2026-10 §17). Host must serve it with a real HTTP 404 status
// (see redirects/). noindex; never in the sitemap or hreflang groups.
import { esc } from "../lib/render.mjs";

export function shell({ title, description, body }) {
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="robots" content="noindex,follow">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/assets/main.css">
</head>
<body>
  <header class="site-header"><div class="container site-header__inner">
    <a class="wordmark" href="/"><span class="wordmark__main"><strong>Çince</strong> <span>Tercüman</span></span></a>
  </div></header>
  <main id="main">${body}</main>
</body>
</html>`;
}

export function render({ site }) {
  const body = `
    <section class="hero"><div class="container"><div class="hero__solo">
      <span class="pill">404</span>
      <h1>Sayfa bulunamadı / <span lang="zh-Hans">页面未找到</span> / <span lang="az">Səhifə tapılmadı</span></h1>
    </div></div></section>
    <section class="section"><div class="container card-grid card-grid--3">
      <article class="card" lang="tr">
        <h2 class="h3-like">Türkçe</h2>
        <p>Aradığınız sayfa taşınmış veya kaldırılmış olabilir. <a href="/cince-tercuman/">Hizmetlerimizi inceleyebilir</a> ya da şehir, tarih ve ihtiyacınızı <a href="/iletisim/">iletişim sayfasından</a> paylaşabilirsiniz.</p>
      </article>
      <article class="card" lang="zh-Hans">
        <h2 class="h3-like">中文</h2>
        <p>您要访问的页面可能已移动或删除。请<a href="/zh/interpreting-services/">查看口译服务</a>，或通过<a href="/zh/contact/">联系页面</a>说明工作城市、日期及需求。</p>
      </article>
      <article class="card" lang="az">
        <h2 class="h3-like">Azərbaycan dili</h2>
        <p>Axtardığınız səhifə köçürülmüş və ya silinmiş ola bilər. <a href="/az/">Başlanğıc səhifəsinə</a> keçə və ya şəhəri, tarixləri, ehtiyacınızı və iş dili tələbinizi <a href="/az/elaqe/">əlaqə səhifəsində</a> bildirə bilərsiniz.</p>
      </article>
    </div>
    <div class="container"><p class="muted">WhatsApp: <a rel="nofollow" href="${esc(site.contact.whatsappUrl)}">${esc(site.contact.whatsappDisplay)}</a> · E-posta: <a href="${esc(site.contact.emailUrl)}">${esc(site.contact.email)}</a></p></div>
    </section>`;
  return shell({
    title: "Sayfa bulunamadı | 页面未找到 | Səhifə tapılmadı",
    description: "Aradığınız sayfa bulunamadı. Hizmet ve iletişim bağlantılarından devam edebilirsiniz.",
    body
  });
}
