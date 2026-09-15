# cince-tercuman.com

Statik, üç dilli (Türkçe · basitleştirilmiş Çince `zh-Hans` · Azərbaycan dili `az`)
sözlü tercümanlık sitesi. Tek dosya site planı **v1.3**'e göre kodlanmıştır.
Yönetim paneli, üyelik, ödeme veya sunucu taraflı talep kaydı yoktur; JavaScript
yalnızca menü, form önizleme ve iletişim bağlantılarını hazırlar (bkz. plan §20).

## Hızlı başlangıç

```bash
npm run build     # dist/ altına statik siteyi üretir
npm test          # kabul testleri (§27, §60)
npm run check     # build + test
npm run serve     # dist/ için yerel önizleme (http://localhost:4321)
```

Node.js ≥ 20 gerekir. **Bağımlılık yoktur** (yalnızca Node standart kütüphanesi).

## Mimari

- `src/data/` — tek kaynaklı yapılandırma: `site.json` (marka, iletişim, ücret/CTA
  notları), `navigation.json`, `microcopy.json`.
- `src/content/pages/` — sayfa içerikleri **veri (blok) olarak**; koddan ayrık.
  Her sayfa `locales.{tr,zh-Hans,az}` altında `path`, SEO, `blocks[]` taşır.
- `src/content/faq.data.json` — Q001–Q110 ve AZ001–AZ030 soru-cevapları
  (`scripts/extract-faq.mjs` ile plandan üretilir). Altı **owner-review** taslağı
  (`Q015, Q019, Q020, Q021, Q045, Q107`) `publish:false` ile işaretlidir ve
  HTML/JSON-LD çıktısına **hiç** yazılmaz (işletme teyidi kapısı, §48/§50).
- `src/lib/render.mjs` — blokları statik HTML'e çeviren şablon katmanı
  (layout, header/footer, hreflang, JSON-LD, blok işleyicileri).
- `src/lib/contact.mjs` — `prepareContactV13` (§58.6). Ağ isteği/kayıt yapmaz;
  hem tarayıcı hem test aynı kaynağı kullanır.
- `src/scripts/app.js` — tarayıcı etkileşimi (menü, form önizleme, kopyalama).
- `scripts/build.mjs` — üretici. `dist/` + `sitemap.xml` + `robots.txt` + `404.html`.

## URL düzeni

- Türkçe kök URL'lerde (`/`, `/cince-tercuman/`, …); **toplu `/tr/` taşıması yok**.
- Çince `/zh/…`, Azerbaycanca `/az/…`.
- AZ ilk yayın kapsamı: `/az/`, `/az/suallar/`, `/az/elaqe/` (§53). Diğer AZ
  hizmet/şehir sayfaları veya boş çeviri üretilmez.
- Üç yönlü gerçek `hreflang` yalnızca **ana giriş** ve **iletişim** gruplarında
  (`/`↔`/zh/`↔`/az/`, `/iletisim/`↔`/zh/contact/`↔`/az/elaqe/`). AZ eşleniği
  olmayan sayfalarda dil menüsü `/az/` başlangıç sayfasına açık etiketli bir
  fallback link verir; bu link `hreflang` listesine **eklenmez** (§57.2).

## Dil dürüstlüğü (§52, §56, §61)

Sitenin Azerbaycanca olması, tercümanın Azerbaycanca bildiği anlamına gelmez.
Esas iş çifti Çin dili–Türkçedir. AZ formunda dil gereksinimi (`turkish-ok`,
`azerbaijani-required`, `confirm-first`) ön seçimsiz **zorunludur**; uyarı hem
ekranda hem hazır mesajda kalır. `prepareContactV13` AZ değerini asla sessizce
Türkçeye düşürmez.

## Yayın öncesi elle yapılacaklar (bu teslimatta yapılmadı)

Bunlar gerçek erişim/işletme teyidi gerektirir ve **yapılmış gibi sunulmaz**:

- Altı owner-review cevabı için işletme teyidi (§48).
- Ana dili Azerbaycanca editör incelemesi (§57.5).
- Eski URL envanteri → `migration/` doldurulup onaylanmadan hiçbir redirect/silme.
- Search Console, Bing, Baidu, IndexNow, gerçek cihaz ve Çin'den ağ erişim testi.
- DNS/e-posta/hosting işlemleri.

Ayrıntılı teslim raporu için `DELIVERY.md` dosyasına bakın. Kaynak plan
`spec/site-plan-v1.3.md` içindedir ve **`public`/`dist` dizinine kopyalanmaz**.
