# Teslim raporu — cince-tercuman.com v1.3

Plan §50/§61 gereğince: oluşturulan sayfa/dosya listesi, onay bekleyen kayıtlar,
URL kararları ve test sonuçları.

## 1. Oluşturulan sayfalar (53 statik HTML)

**Türkçe (kök URL, `/tr/` taşıması yok):**
`/` · `/cince-tercuman/` · `/cinde-tercuman/` · `/makine-kurulumu-cince-tercuman/`
· `/cinde-fabrika-ziyareti-tercuman/` · `/cinde-fuar-tercumani/` ·
`/kanton-fuari-tercuman/` · `/hizmet-bolgeleri/` · `/cince-tercuman-fiyatlari/` ·
`/hakkimizda/` · `/sik-sorulan-sorular/` · `/iletisim/` · `/hazirlik-rehberleri/`
· 4 rehber (`/rehber/…`) · 8 şehir (`/cince-tercuman-<sehir>/`).

**Çince (`/zh/…`):** yukarıdakilerin eşlenikleri (25 sayfa).

**Azerbaycanca (ilk kapsam, §53):** `/az/` · `/az/suallar/` · `/az/elaqe/`.

**Ek çıktı:** `sitemap.xml` (yalnızca yayımlanan + indexlenebilir), `robots.txt`,
`404.html` (host gerçek 404 ile sunmalı).

## 2. Soru-cevap (110 + 30)

- Q001–Q110, §44.3'teki 21 birincil sayfa grubuna dağıtıldı; tek kaynak
  `src/content/faq.data.json`. Ana sayfada yalnızca kısa özet; her soru için ayrı
  URL açılmadı.
- AZ001–AZ030 `/az/suallar/` altında altı konu grubunda.

## 3. Yayın öncesi işletme teyidi bekleyen kayıtlar (owner-review)

`Q015` (fatura) · `Q019` (gizlilik işleyişi) · `Q020` (gizlilik sözleşmesi) ·
`Q021` (ticari bağlantı) · `Q045` (tercümanın gelememesi) · `Q107` (komisyon).

Bu altı cevap veri deposunda `publish:false` ile korunur; HTML, JSON-LD, istemci
paketi veya sitemap'e **yazılmaz**. Otomatik test (`test.mjs · D`) bu cevap
metinlerinin hiçbir sayfada görünmediğini doğrular. İşletme süreci teyit edilince
`publish:true` yapılıp yeniden derlenmelidir.

## 4. URL kararları

- Mevcut Türkçe URL düzeni ve şehir URL'leri korundu; toplu silme/redirect
  **uygulanmadı**. Eski URL envanteri (`migration/old-url-inventory.csv`) gerçek
  hosting/Search Console verisinden doldurulup `migration/mapping.csv` onaylanmadan
  hiçbir redirect kararı uygulanmamalı (§21).
- Rehber koleksiyonu `/hazirlik-rehberleri/` (+ `/zh/preparation-guides/`) olarak
  yayımlandı; rehber detay URL'leri plandaki `/rehber/…` ve `/zh/guides/…`
  adresleridir.
- Genel SSS: `/sik-sorulan-sorular/` (§15.4).

## 5. Test sonuçları

`npm run check` → build + 33 otomatik kabul testi, tamamı geçti:
- prepareContactV13 dil dürüstlüğü (AZ asla TR'ye düşmez), hizmet/ülke tutarlılığı,
  `sourcePath` yalnız yol, sabit WhatsApp numarası.
- 110 Q + 30 AZ bütünlüğü; 6 owner-review taslağı `publish:false`.
- Owner-review cevapları hiçbir HTML'de yok.
- 3 yönlü hreflang (ana giriş + iletişim), hizmet sayfalarında AZ hreflang yok
  ama `/az/` fallback linki var.
- Kırık iç bağlantı yok; sayfa başına tek `<h1>`; uydurma yıldız/başarı mesajı yok.

## 6. Bu teslimatta YAPILMAYANLAR (gerçek erişim/karar gerektirir)

- Ana dili Azerbaycanca editör incelemesi (§57.5).
- Search Console / Bing / Baidu / IndexNow hesap işlemleri; gerçek cihaz ve
  Çin'den ağ erişim testi (§39, §60).
- DNS, e-posta, hosting değişikliği veya eski URL silme (§20.4, §21.5).
- Doğrulanmamış WeChat/QR, sabit fiyat/para birimi, ofis adresi, müşteri
  referansı — hiçbiri eklenmedi.
