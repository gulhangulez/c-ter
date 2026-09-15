// 404 page. Host must serve this with a real HTTP 404 status (see redirects/).
import { esc } from "../lib/render.mjs";

export function render({ site, year }) {
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Sayfa bulunamadı — Çince Tercüman</title>
  <meta name="robots" content="noindex,follow">
  <link rel="stylesheet" href="/assets/main.css">
</head>
<body>
  <main id="main">
    <section class="section"><div class="container section-intro">
      <p class="eyebrow">404</p>
      <h1>Sayfa bulunamadı · 页面未找到 · Səhifə tapılmadı</h1>
      <p class="lead">Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.</p>
      <div class="button-row">
        <a class="button-primary" href="/">Ana sayfa</a>
        <a class="button-ghost" href="/cince-tercuman/">Hizmetler</a>
        <a class="button-ghost" href="/iletisim/">İletişim</a>
        <a class="button-ghost" href="/zh/">中文</a>
        <a class="button-ghost" href="/az/">Azərbaycan dili</a>
      </div>
      <p class="muted" style="margin-top:2em">WhatsApp: <a rel="nofollow" href="${esc(site.contact.whatsappUrl)}">${esc(site.contact.whatsappDisplay)}</a> · E-posta: <a href="${esc(site.contact.emailUrl)}">${esc(site.contact.email)}</a></p>
    </div></section>
  </main>
</body>
</html>`;
}
