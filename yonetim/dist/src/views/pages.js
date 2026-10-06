// Panel ve güvenli yanıt sayfaları (Türkçe).
import { h, raw, pill } from './html.js';
import { formatDateTimeTr, formatRangeTr, formatDateTr } from '../core/time.js';
import { formatAmount } from '../domain/money.js';
import { SERVICE_LABELS } from '../domain/extract.js';
import { ACCRUAL_TR, ACTION_TR, CASE_TYPE_TR, DUE_TR, INQUIRY_STATUS_TR, JOB_STATUS_TR, NOTICE_TR, PAYMENT_TR } from '../domain/labels.js';
import { TASK_LABELS } from '../services/tasks.js';
const TZ = 'Europe/Istanbul';
const dt = (t) => formatDateTimeTr(t, TZ);
const csrfField = (csrf) => h `<input type="hidden" name="csrf" value="${csrf}">`;
function statusPill(s) {
    const tone = { COMPLETED: 'ok', CONFIRMED: 'ok', IN_PROGRESS: 'info', UNFULFILLED: 'bad', CANCELLED: '', DORMANT: 'warn', HANDOFF_PENDING: 'warn' }[s] ?? 'info';
    return pill(JOB_STATUS_TR[s] ?? s, tone);
}
function modePill(m) {
    return m === 'AUTO' ? pill('Otomatik', 'ok') : m === 'HUMAN_TAKEOVER' ? pill('Yetkili devraldı', 'warn') : pill('Duraklatıldı', 'warn');
}
function waitingCell(w) {
    if (!w)
        return h `<span class="muted">—</span>`;
    return h `<strong>${w.from}</strong>: ${w.what}${w.until ? h `<br><span class="small muted">son: ${dt(w.until)}</span>` : ''}`;
}
export function loginPage(error) {
    return h `<div class="card" style="max-width:380px;margin:40px auto"><h1>Giriş</h1>
  <form method="post" action="/giris"><label>E-posta<input name="email" type="email" required autocomplete="username"></label>
  <label>Şifre<input name="password" type="password" required autocomplete="current-password"></label><button class="btn">Giriş yap</button></form>
  ${error ? h `<p class="flash err">${error}</p>` : ''}</div>`;
}
function jobsTable(rows) {
    if (!rows.length)
        return h `<p class="muted">Kayıt yok.</p>`;
    return h `<div class="tbl cards"><table><thead><tr><th>İş</th><th>Müşteri</th><th>Yer / tarih</th><th>Tercüman</th><th>Durum</th><th>Finans</th><th>Kimden ne bekleniyor</th><th>Sonraki otomatik eylem</th></tr></thead><tbody>
  ${rows.map((r) => h `<tr><td data-l="İş"><a href="/isler/${r.id}">${r.code}</a>${r.automation_mode !== 'AUTO' ? h `<br>${modePill(r.automation_mode)}` : ''}</td>
    <td data-l="Müşteri">${r.customer ?? r.customer_name ?? '—'}</td><td data-l="Yer / tarih">${r.city ?? '—'}<br><span class="small muted">${formatRangeTr(r.start_date, r.end_date)}</span></td>
    <td data-l="Tercüman">${r.interpreter ?? '—'}</td><td data-l="Durum">${statusPill(r.status)}</td><td data-l="Finans" class="small">${r.finance}</td><td data-l="Bekleniyor" class="small">${waitingCell(r.waiting)}</td>
    <td data-l="Sonraki eylem" class="small">${r.next ? h `${r.next.label}<br><span class="muted">${dt(r.next.at)}</span>` : '—'}</td></tr>`)}
  </tbody></table></div>`;
}
export function dashboardPage(d, csrf) {
    const fin = Object.entries(d.finance.byCurrency);
    return h `<h1>Bugün benden ne bekleniyor?</h1>
  <div class="card"><h2 style="margin-top:0">Müdahale gerekenler ${pill(String(d.cases.length), d.cases.length ? 'bad' : 'ok')}</h2>
  ${d.cases.length ? casesTable(d.cases, csrf) : h `<p class="muted">Şu an sizin kararınızı bekleyen bir şey yok. Sistem takipleri yürütüyor.</p>`}</div>
  <div class="card"><h2 style="margin-top:0">Sistem takip ediyor</h2>${jobsTable(d.following)}</div>
  <div class="card"><h2 style="margin-top:0">Yaklaşan / süren işler</h2>${jobsTable(d.upcoming)}</div>
  <div class="grid">
    <div class="card"><h2 style="margin-top:0">Komisyon</h2>
      ${fin.length ? h `<table><thead><tr><th>Para</th><th>Tahakkuk</th><th>Tahsilat</th><th>Açık</th><th>Vadesi geçmiş</th></tr></thead><tbody>
      ${fin.map(([cur, t]) => h `<tr><td>${cur}</td><td>${formatAmount(t.accrued, cur)}</td><td>${formatAmount(t.collected, cur)}</td><td>${formatAmount(t.open, cur)}</td><td>${t.overdue ? pill(formatAmount(t.overdue, cur), 'bad') : '—'}</td></tr>`)}
      </tbody></table>` : h `<p class="muted">Henüz tahakkuk eden komisyon yok.</p>`}
      <p class="small muted">Kural bekleyen: ${d.finance.rulePending} · Tahmini (henüz hak edilmemiş): ${d.finance.estimated}. Para birimleri birbirine eklenmez.</p></div>
    <div class="card"><h2 style="margin-top:0">Sistem sağlığı</h2>${healthTable(d.health)}</div>
  </div>`;
}
export function healthTable(hh) {
    const names = { whatsapp: 'WhatsApp', google_calendar: 'Google Calendar', payments: 'Ödeme', telephony: 'Telefon', email: 'E-posta' };
    return h `<table><tbody>${hh.conns.map((c) => h `<tr><td>${names[c.name] ?? c.name}</td><td>${c.mode === 'FAKE' ? pill('TEST', 'warn') : c.mode === 'DISABLED' ? pill('Kapalı') : c.mode === 'LOG' ? pill('Yalnızca log', 'warn') : pill('Canlı', 'info')}</td>
    <td>${c.healthy === false ? pill('Hata', 'bad') : c.healthy ? pill('Çalışıyor', 'ok') : '—'}</td><td class="small muted">${c.last_error ? `${c.last_error.slice(0, 80)} (${dt(c.last_error_at)})` : c.last_success_at ? `son başarılı: ${dt(c.last_success_at)}` : ''}</td></tr>`)}
    <tr><td>Kuyruk</td><td colspan="3" class="small">Bekleyen gönderim ${hh.queue.outbox_pending} · başarısız ${hh.queue.outbox_failed} · sonucu belirsiz ${hh.queue.outbox_unknown} · işlenmemiş webhook ${hh.queue.inbox_pending} (hatalı ${hh.queue.inbox_failed}) · geciken görev ${hh.queue.tasks_late} · başarısız görev ${hh.queue.tasks_failed}</td></tr>
  </tbody></table>`;
}
export function casesTable(cases, csrf) {
    return h `<div class="tbl"><table><thead><tr><th>Önem</th><th>Tür</th><th>Açıklama</th><th>İş</th><th>Açıldı</th><th></th></tr></thead><tbody>
  ${cases.map((k) => h `<tr><td>${k.severity === 'HIGH' ? pill('Yüksek', 'bad') : k.severity === 'LOW' ? pill('Düşük') : pill('Normal', 'warn')}</td>
    <td>${CASE_TYPE_TR[k.case_type] ?? k.case_type}</td><td>${k.summary}</td><td>${k.job_id ? h `<a href="/isler/${k.job_id}">${k.code ?? 'iş'}</a>` : '—'}</td><td class="small">${dt(k.created_at)}</td>
    <td>${k.status === 'OPEN' ? h `<details><summary>Çöz</summary><form method="post" action="/istisnalar/${k.id}/coz">${csrfField(csrf)}<label>Çözüm notu<input name="resolution" required></label><button class="btn small">Kapat</button></form></details>` : h `<span class="small muted">${k.resolution}</span>`}</td></tr>`)}
  </tbody></table></div>`;
}
export function jobsPage(rows, status) {
    const opts = ['', ...Object.keys(JOB_STATUS_TR)];
    return h `<h1>İşler</h1><form class="row" method="get"><label>Durum<select name="durum">${opts.map((o) => h `<option value="${o}" ${o === status ? raw('selected') : ''}>${o ? JOB_STATUS_TR[o] : 'Tümü (iptaller hariç)'}</option>`)}</select></label><div><button class="btn sec">Filtrele</button></div></form>
  <div class="card">${jobsTable(rows)}</div>`;
}
export function jobPage(d, csrf, interpreters) {
    const j = d.job;
    return h `<p class="small"><a href="/isler">← İşler</a></p>
  <h1>${j.code} ${statusPill(j.status)} ${modePill(j.automation_mode)}</h1>
  <div class="grid">
    <div class="card"><h2 style="margin-top:0">Doğrulanmış ihtiyaç</h2><table><tbody>
      <tr><th>Müşteri</th><td>${j.customer_name ?? j.customer ?? '—'}</td></tr>
      <tr><th>Hizmet</th><td>${j.service_type ? SERVICE_LABELS[j.service_type] : '—'}</td></tr>
      <tr><th>Yer</th><td>${j.city ?? '—'} ${j.country_code ? `(${j.country_code})` : ''}</td></tr>
      <tr><th>Tarih</th><td>${formatRangeTr(j.start_date, j.end_date)}${j.service_days?.length ? ` · ${j.service_days.length} gün` : ''}</td></tr>
      <tr><th>Teknik konu</th><td>${j.technical_subject ?? '—'}</td></tr>
      <tr><th>Özet onayı</th><td>${j.summary_confirmed_at ? dt(j.summary_confirmed_at) : pill('Bekleniyor', 'warn')}</td></tr>
      <tr><th>İş sürümü</th><td>v${j.version}${j.extraction?.change_draft ? h ` · ${pill('Değişiklik taslağı: ' + formatRangeTr(j.extraction.change_draft.start_date, j.extraction.change_draft.end_date), 'warn')}` : ''}</td></tr>
    </tbody></table></div>
    <div class="card"><h2 style="margin-top:0">Şu an</h2>
      <p>${waitingCell(d.waiting)}</p>
      <p class="small"><strong>Atanan tercüman:</strong> ${d.assigned ? h `${d.assigned.display_name} (${d.assigned.status})` : '—'}</p>
      <p class="small"><strong>Takvim:</strong> ${d.calendar.length ? d.calendar.map((c) => h `${c.synced_state} (v${c.synced_version}) `) : '—'}</p>
      <h3>Müdahale</h3>
      <div class="row">
        ${j.automation_mode === 'AUTO'
        ? h `<form method="post" action="/isler/${j.id}/komut">${csrfField(csrf)}<input type="hidden" name="komut" value="takeover"><input name="reason" placeholder="Gerekçe" required><button class="btn sec small">Kontrolü devral</button></form>`
        : h `<form method="post" action="/isler/${j.id}/komut">${csrfField(csrf)}<input type="hidden" name="komut" value="resume"><input name="reason" placeholder="Gerekçe" required><button class="btn small">Tekrar otomatiğe bırak</button></form>`}
        ${j.status === 'UNFULFILLED' ? h `<form method="post" action="/isler/${j.id}/komut">${csrfField(csrf)}<input type="hidden" name="komut" value="retry"><button class="btn small">Aramayı yeniden başlat</button></form>` : ''}
      </div>
      <details><summary>Tarih değişikliği başlat</summary><form method="post" action="/isler/${j.id}/komut">${csrfField(csrf)}<input type="hidden" name="komut" value="change">
        <div class="row"><label>Başlangıç<input type="date" name="start_date" value="${j.start_date ?? ''}" required></label><label>Bitiş<input type="date" name="end_date" value="${j.end_date ?? ''}" required></label></div>
        <button class="btn small">Değişikliği müşteriye doğrulat</button></form></details>
      <details><summary>Panelden WhatsApp yanıtı yaz</summary><form method="post" action="/isler/${j.id}/komut">${csrfField(csrf)}<input type="hidden" name="komut" value="message">
        <label>Alıcı<select name="party_id"><option value="${j.customer_id}">Müşteri</option>${d.assigned ? h `<option value="${d.assigned.interpreter_id}">Tercüman (${d.assigned.display_name})</option>` : ''}</select></label>
        <label>Mesaj<textarea name="body" rows="3" required></textarea></label><p class="small muted">Yalnızca son 24 saatte yazan kişiye serbest metin gönderilebilir.</p><button class="btn small">Gönder</button></form></details>
      ${!['CANCELLED', 'COMPLETED'].includes(j.status) ? h `<details><summary>İptal talebini işle</summary><form method="post" action="/isler/${j.id}/komut">${csrfField(csrf)}<input type="hidden" name="komut" value="cancel"><label>Gerekçe<input name="reason" required></label><button class="btn danger small">İşi iptal et</button></form></details>` : ''}
    </div>
  </div>
  ${d.cases.length ? h `<div class="card"><h2 style="margin-top:0">İstisnalar</h2>${casesTable(d.cases.map((k) => ({ ...k, code: j.code })), csrf)}</div>` : ''}
  <div class="card"><h2 style="margin-top:0">Aday sorguları</h2>${d.inquiries.length ? h `<div class="tbl"><table><thead><tr><th>#</th><th>Tercüman</th><th>Sürüm</th><th>Durum</th><th>Soruldu</th><th>Son tarih</th><th>Yanıt</th></tr></thead><tbody>
    ${d.inquiries.map((q) => h `<tr><td>${q.rank}</td><td>${q.display_name}</td><td>v${q.job_version}</td><td>${INQUIRY_STATUS_TR[q.status] ?? q.status}</td><td class="small">${dt(q.sent_at)}</td><td class="small">${dt(q.deadline_at)}</td><td class="small">${q.response_text ?? q.close_reason ?? ''}</td></tr>`)}</tbody></table></div>` : h `<p class="muted">Henüz sorgu yok.</p>`}</div>
  <div class="grid">
    <div class="card"><h2 style="margin-top:0">Kabul ve paylaşım kanıtları</h2>
      <ul class="small">${d.assignments.map((a) => h `<li>${a.display_name}: ${a.status}${a.accepted_at ? ` — ${dt(a.accepted_at)}` : ''} <span class="muted mono">${a.acceptance_evidence ?? ''}</span></li>`)}
      ${d.sharing.map((s) => h `<li>İletişim paylaşımı → ${s.display_name}: ${s.result} (${s.data_scope.join(', ')}) — ${dt(s.updated_at)}</li>`)}
      ${d.confirmations.map((c) => h `<li>${c.subject} v${c.subject_version} · ${c.display_name}: <strong>${c.value}</strong> — ${dt(c.created_at)}</li>`)}</ul></div>
    <div class="card"><h2 style="margin-top:0">Planlı görevler</h2>${d.tasks.length ? h `<ul class="small">${d.tasks.map((t) => h `<li>${TASK_LABELS[t.task_type] ?? t.task_type} — ${dt(t.due_at)} ${t.status !== 'PENDING' ? pill(t.status, 'bad') : ''}</li>`)}</ul>` : h `<p class="muted small">Bekleyen otomatik görev yok.</p>`}</div>
  </div>
  <div class="card"><h2 style="margin-top:0">Finans</h2>${d.accounts.length ? d.accounts.map((a) => financeBlock(a, csrf)) : h `<p class="muted">Finans takip kaydı yönlendirme kabulüyle açılır.</p>`}
    ${d.terms.length ? h `<h3>İş şartları</h3><ul class="small">${d.terms.map((t) => h `<li>v${t.terms_version}: ${formatAmount(t.daily_rate_minor, t.currency)}/gün × ${t.service_days.length} gün · masraf: ${t.expenses_note ?? '—'}</li>`)}</ul>` : ''}</div>
  <div class="card"><h2 style="margin-top:0">Mesajlar</h2><div class="tbl"><table><tbody>${d.messages.map((m) => h `<tr><td class="small">${dt(m.created_at)}</td><td>${m.direction === 'IN' ? '←' : '→'} ${m.display_name ?? ''}</td><td>${m.body ?? ''}${m.template_key ? h ` <span class="small muted">[${m.template_key}]</span>` : ''}</td><td class="small">${m.status}</td></tr>`)}</tbody></table></div></div>
  <div class="card"><h2 style="margin-top:0">Zaman çizelgesi</h2><ol class="timeline small">${d.timeline.map((e) => h `<li>${dt(e.occurred_at)} · <strong>${e.command}</strong> ${e.old_state || e.new_state ? `${e.old_state ?? ''} → ${e.new_state ?? ''}` : ''} <span class="muted">${e.actor}${e.evidence ? ` · ${e.evidence}` : ''}</span></li>`)}</ol></div>`;
}
function financeBlock(a, csrf) {
    return h `<div style="margin-bottom:12px"><p><strong>${a.reference}</strong> · ${pill(ACCRUAL_TR[a.accrual_status] ?? a.accrual_status, a.accrual_status === 'RULE_PENDING' ? 'bad' : a.accrual_status === 'ACCRUED' ? 'info' : '')}
    ${a.payment_state ? pill(PAYMENT_TR[a.payment_state], a.payment_state === 'PAID' ? 'ok' : 'warn') : ''} ${a.due_state ? pill(DUE_TR[a.due_state], a.due_state === 'OVERDUE' ? 'bad' : '') : ''}
    ${a.payment_notice !== 'NONE' ? pill(NOTICE_TR[a.payment_notice], 'warn') : ''}</p>
    ${a.currency ? h `<p class="small">Alacak ${formatAmount(a.receivable, a.currency)} · tahsilat ${formatAmount(a.collected, a.currency)} · <strong>bakiye ${formatAmount(a.balance, a.currency)}</strong>${a.due_date ? ` · vade ${formatDateTr(a.due_date)}` : ''}</p>` : h `<p class="small">Komisyon kuralı tanımlanmadığı için borç oluşturulmadı (sıfır komisyon değildir).</p>`}
    ${a.entries.length ? h `<table class="small"><tbody>${a.entries.map((e) => h `<tr><td>${dt(e.created_at)}</td><td>${e.kind}</td><td class="right">${formatAmount(e.amount_minor, e.currency)}</td><td>${e.reason}</td></tr>`)}</tbody></table>` : ''}
    ${a.currency ? h `<details><summary>Finansal düzeltme (finans yetkisi)</summary><form method="post" action="/komisyonlar/${a.id}/duzeltme" class="row">${csrfField(csrf)}
      <label>Tür<select name="kind"><option value="ADJUSTMENT_DECREASE">Azaltma</option><option value="ADJUSTMENT_INCREASE">Artırma</option><option value="WAIVER">Muafiyet</option><option value="CANCELLATION">İptal (ters kayıt)</option></select></label>
      <label>Tutar (${a.currency})<input name="amount" required></label><label>Gerekçe<input name="reason" required></label><div><button class="btn small">Kaydet</button></div></form></details>` : ''}</div>`;
}
export function interpretersPage(list, csrf) {
    return h `<h1>Tercüman havuzu</h1>
  <div class="card"><div class="tbl"><table><thead><tr><th>Ad</th><th>Şehirler</th><th>Hizmetler</th><th>Öncelik</th><th>Komisyon anlaşması</th><th>Doğrulanmış iş</th></tr></thead><tbody>
  ${list.map((i) => h `<tr><td><a href="/tercumanlar/${i.id}">${i.display_name}</a>${i.active ? '' : h ` ${pill('Pasif')}`}<br><span class="small muted">${i.timezone}</span></td><td class="small">${i.cities.join(', ')}${i.travel_countries.length ? h `<br>seyahat: ${i.travel_countries.join(', ')}` : ''}</td>
    <td class="small">${i.services.map((s) => SERVICE_LABELS[s] ?? s).join(', ')}</td><td>${i.priority}</td>
    <td>${i.agreement ? pill(`v${i.agreement.agreement_version} etkin`, 'ok') : pill('Yok — yönlendirme yapılamaz', 'bad')}</td><td>${i.completed}</td></tr>`)}
  </tbody></table></div></div>
  <div class="card"><h2 style="margin-top:0">Tercüman ekle</h2><form method="post" action="/tercumanlar">${csrfField(csrf)}
    ${interpreterFields()}<button class="btn">Ekle</button></form></div>`;
}
const TIMEZONES = ['Asia/Shanghai', 'Europe/Istanbul', 'Asia/Baku'];
/** Tercüman ekleme ve düzenleme formlarının ortak alanları; `i` verilirse mevcut değerlerle dolar. */
function interpreterFields(i) {
    const svc = Object.entries(SERVICE_LABELS);
    const tzs = i?.timezone && !TIMEZONES.includes(i.timezone) ? [...TIMEZONES, i.timezone] : TIMEZONES;
    return h `<div class="row"><label>Ad soyad<input name="name" value="${i?.display_name ?? ''}" required></label><label>WhatsApp (ülke koduyla)<input name="whatsapp" value="${i?.whatsapp ? `+${i.whatsapp}` : ''}" placeholder="+86 138..." required></label><label>E-posta<input name="email" type="email" value="${i?.email ?? ''}"></label></div>
    <div class="row"><label>Saat dilimi<select name="timezone">${tzs.map((z) => h `<option${z === i?.timezone ? h ` selected` : ''}>${z}</option>`)}</select></label><label>Öncelik (küçük önce)<input name="priority" type="number" value="${String(i?.priority ?? 100)}"></label></div>
    <div class="row"><label>Hizmet verdiği şehirler (virgülle)<input name="cities" value="${i ? i.cities.join(', ') : ''}" placeholder="Guangzhou, Foshan, Shenzhen"></label><label>Seyahat edebildiği ülkeler (TR, CN)<input name="travel" value="${i ? i.travel_countries.join(', ') : ''}" placeholder="CN"></label></div>
    <fieldset style="border:1px solid var(--line);border-radius:10px;margin:0 0 10px"><legend class="small muted">Hizmetler</legend>${svc.map(([k, v]) => h `<label style="display:inline-block;margin-right:12px"><input type="checkbox" name="services" value="${k}" style="width:auto"${!i || i.services.includes(k) ? h ` checked` : ''}> ${v}</label>`)}</fieldset>
    <label>Uzmanlık notu<input name="specialties" value="${i?.specialties ?? ''}"></label>
    <label style="color:var(--ink)"><input type="checkbox" name="consent" value="1" style="width:auto"${i?.consent ? h ` checked` : ''}> Tercümandan iş bildirimleri için WhatsApp mesaj izni alındı</label>`;
}
export function interpreterPage(i, agreements, csrf, summary) {
    return h `<p class="small"><a href="/tercumanlar">← Tercümanlar</a></p><h1>${i.display_name}</h1>
  <div class="card"><p class="small">WhatsApp: ${i.whatsapp ?? '—'} · ${i.timezone} · öncelik ${i.priority} · ${i.active ? 'aktif' : 'pasif'}</p>
  <form method="post" action="/tercumanlar/${i.id}/durum">${csrfField(csrf)}<input type="hidden" name="active" value="${i.active ? '0' : '1'}"><button class="btn sec small">${i.active ? 'Pasife al' : 'Aktifleştir'}</button></form></div>
  <div class="card"><details><summary><strong>Bilgileri düzenle</strong></summary><form method="post" action="/tercumanlar/${i.id}/duzenle" style="margin-top:12px">${csrfField(csrf)}
    ${interpreterFields(i)}<button class="btn">Kaydet</button></form></details></div>
  <div class="card"><h2 style="margin-top:0">Komisyon anlaşmaları</h2>
  ${agreements.length ? h `<ul>${agreements.map((a) => h `<li>${pill(`v${a.agreement_version} ${a.status}`, a.status === 'ACTIVE' ? 'ok' : '')}<ul class="small">${summary(a).map((s) => h `<li>${s}</li>`)}<li>Kabul kanıtı: ${a.acceptance_evidence}</li></ul></li>`)}</ul>` : h `<p class="muted">Anlaşma yok. Anlaşma olmadan bu tercümana yönlendirme yapılmaz ve borç yazılmaz.</p>`}
  <h3>Yeni anlaşma sürümü</h3><p class="small muted">Komisyon şartlarını işletme belirler; sistem varsayılan oran uydurmaz. Mevcut işlerin geçmiş hesabı değişmez.</p>
  <form method="post" action="/tercumanlar/${i.id}/anlasma">${csrfField(csrf)}
    <div class="row"><label>Komisyonu ödeyen<select name="payer"><option value="INTERPRETER">Tercüman</option><option value="CUSTOMER">Müşteri</option></select></label>
    <label>Yöntem<select name="type"><option value="PERCENT_OF_BASE">Matrahın yüzdesi</option><option value="FIXED_SERVICE_DAY">Gerçekleşen gün başına sabit</option><option value="FIXED_JOB">İş başına sabit</option></select></label>
    <label>Para birimi<select name="currency"><option>USD</option><option>TRY</option><option>EUR</option><option>CNY</option></select></label></div>
    <div class="row"><label>Oran % (yüzde yöntemi)<input name="percent" placeholder="10"></label><label>Tutar (sabit yöntemler)<input name="amount" placeholder="25"></label></div>
    <div class="row"><label>Hak ediş olayı<select name="accrual"><option value="SERVICE_COMPLETED">Hizmet tamamlandığında</option><option value="BOOKING_CONFIRMED">İş kesinleştiğinde</option><option value="REFERRAL_ACCEPTED">Yönlendirme kabulünde</option></select></label>
    <label>Vade (gün)<input name="due_days" type="number" value="7" required></label><label>Gün türü<select name="due_type"><option value="CALENDAR">Takvim günü</option><option value="BUSINESS">İş günü</option></select></label></div>
    <label>İptal şartı<input name="cancellation" placeholder="İptalde tahakkuk etmemiş komisyon doğmaz"></label>
    <label>Tercümanın kabul kanıtı (ör. "5 Ekim 2026 imzalı sözleşme")<input name="evidence" required></label>
    <button class="btn">Anlaşmayı etkinleştir</button></form></div>`;
}
export function commissionsPage(rows) {
    return h `<h1>Komisyon ve tahsilat</h1><div class="card"><div class="tbl"><table><thead><tr><th>Referans</th><th>İş</th><th>Borçlu</th><th>Hak ediş</th><th>Alacak</th><th>Tahsilat</th><th>Bakiye</th><th>Vade</th><th>Durum</th></tr></thead><tbody>
  ${rows.map((a) => h `<tr><td class="mono">${a.reference}</td><td><a href="/isler/${a.job_id}">${a.code}</a></td><td>${a.payer ?? '—'}</td><td>${pill(ACCRUAL_TR[a.accrual_status], a.accrual_status === 'RULE_PENDING' ? 'bad' : '')}</td>
    <td>${a.currency ? formatAmount(a.receivable, a.currency) : '—'}</td><td>${a.currency ? formatAmount(a.collected, a.currency) : '—'}</td><td><strong>${a.currency ? formatAmount(a.balance, a.currency) : '—'}</strong></td>
    <td>${a.due_date ? formatDateTr(a.due_date) : '—'}</td><td>${a.payment_state ? PAYMENT_TR[a.payment_state] : ''} ${a.due_state ? pill(DUE_TR[a.due_state], a.due_state === 'OVERDUE' ? 'bad' : '') : ''} ${a.payment_notice !== 'NONE' ? pill(NOTICE_TR[a.payment_notice], 'warn') : ''}</td></tr>`)}
  </tbody></table></div><p class="small muted">Bu defter yasal muhasebe veya e-fatura sistemi değildir; vergi ve belge konuları mali müşavirle netleştirilmelidir.</p></div>`;
}
export function settingsPage(s, policy, health, csrf, googleUrl, cfg) {
    return h `<h1>Ayarlar</h1>
  <div class="card"><h2 style="margin-top:0">Bağlantılar</h2>${healthTable(health)}
    <ul class="small">
      <li>WhatsApp: ${cfg.whatsapp.mode === 'LIVE' ? 'Cloud API bağlı' : 'TEST modu — WHATSAPP_MODE=LIVE ve Meta bilgileri gerekli'}. Onaylı şablon sayısı: ${Object.keys(cfg.whatsapp.approvedTemplates).length}.</li>
      <li>Google Calendar: ${cfg.calendar.mode}${googleUrl ? h ` · <a href="${googleUrl}">Google hesabını bağla</a>` : ''}</li>
      <li>Ödeme: ${cfg.payments.mode === 'FAKE' ? 'TEST sağlayıcısı — gerçek tahsilat otomasyonu YOK' : cfg.payments.mode}</li>
      <li>Telefon: ${cfg.telephony.mode === 'DISABLED' ? 'bağlı değil (kapsam "tam otomatik" sayılmaz)' : cfg.telephony.mode}</li>
      <li>Yönetici e-postası: ${cfg.email.mode === 'LIVE' ? 'bağlı' : 'yalnızca sunucu logu'}</li>
    </ul></div>
  <div class="card"><h2 style="margin-top:0">Otomasyon</h2><form method="post" action="/ayarlar/otomasyon">${csrfField(csrf)}<input type="hidden" name="enabled" value="${s.automation_enabled ? '0' : '1'}">
    <p>Genel otomasyon: ${s.automation_enabled ? pill('Açık', 'ok') : pill('Kapalı — hiçbir otomatik mesaj gitmez', 'bad')}</p><button class="btn ${s.automation_enabled ? 'danger' : ''} small">${s.automation_enabled ? 'Tüm otomasyonu durdur' : 'Otomasyonu aç'}</button></form></div>
  <div class="card"><h2 style="margin-top:0">Takip süreleri (politika v${s.policy_version})</h2><p class="small muted">Önerilen başlangıç değerleridir; değiştirince yeni sürüm oluşur, açık işlerin planlanmış görevleri eski sürümle kalır.</p>
    <form method="post" action="/ayarlar/politika">${csrfField(csrf)}<div class="row">
    ${Object.entries(policy).map(([k, v]) => h `<label class="small">${POLICY_TR[k] ?? k}<input name="${k}" type="number" step="1" value="${String(v)}"></label>`)}
    </div><button class="btn small">Kaydet</button></form></div>`;
}
const POLICY_TR = {
    customerInfoReminderWorkingHours: 'Müşteri eksik bilgi hatırlatması (çalışma saati)', customerDormantHours: 'Müşteri yanıtsız → "yanıt alınamıyor" (saat)',
    interpreterReminder1WorkingHours: 'Tercüman 1. hatırlatma (çalışma saati)', interpreterReminder2WorkingHours: 'Tercüman son hatırlatma (çalışma saati)',
    interpreterExpireWorkingHours: 'Tercüman sorgusu zaman aşımı (çalışma saati)', urgentInterpreterExpireWorkingHours: 'Acil işte zaman aşımı (çalışma saati)',
    urgentParallelInquiries: 'Acil işte paralel sorgu (en fazla 2)', parallelInquiries: 'Normal paralel sorgu', contactCheckWorkingHours: 'Devirden sonra görüşme sorusu (çalışma saati)',
    contactReminderWorkingHours: 'Görüşme hatırlatması (çalışma saati)', contactEscalateWorkingHours: 'Görüşme doğrulanamazsa istisna (çalışma saati)',
    completionSecondFollowupHours: 'Tamamlanma ikinci takip (saat)', holdExpiryDays: 'Geçici rezervasyon süresi (gün)', maxProactivePer24h: 'Kişi başı 24 saatte proaktif mesaj',
    maxRemindersPerInquiry: 'Sorgu başına hatırlatma', paymentReportGraceDays: '"Ödedim" doğrulama süresi (gün)', sendWindowStartHour: 'Gönderim başlangıç saati (alıcı yerel)',
    sendWindowEndHour: 'Gönderim bitiş saati (alıcı yerel)', dailySummaryHour: 'Günlük özet saati (İstanbul)',
};
// ---------- Güvenli yanıt sayfaları ----------
export function actionPage(v, result) {
    const j = v.job;
    const head = j ? h `<p class="small muted">Çince Tercüman · ${j.code}</p><h1>${ACTION_TR[v.action ?? ''] ?? 'İşlem'}</h1>
    <div class="card small"><strong>${j.service}</strong><br>${j.city ?? '—'} · ${j.dateRange}${j.technical ? h `<br>Konu: ${j.technical}` : ''}</div>` : h `<h1>Çince Tercüman</h1>`;
    if (result) {
        const extra = result.data?.phone ? h `<div class="card"><p>Müşteri: <strong>${result.data.customerName}</strong></p><p>Telefon / WhatsApp: <strong><a href="tel:${result.data.phone}">${result.data.phone}</a></strong></p><p class="small muted">Bu bilgi yalnızca bu iş için paylaşıldı. Başka amaçla kullanmayın veya üçüncü kişilerle paylaşmayın.</p></div>` : '';
        return h `${head}<div class="flash ${result.ok ? '' : 'err'}">${result.message}</div>${extra}`;
    }
    if (v.state !== 'OK')
        return h `${head}<div class="flash err">${v.message}</div>`;
    const form = (inner, label = 'Gönder') => h `<form method="post"><input type="hidden" name="nonce" value="${v.nonce}">${inner}<button class="btn">${label}</button></form>`;
    const d = v.data ?? {};
    switch (v.action) {
        case 'accept_referral':
            return h `${head}<div class="card"><h2 style="margin-top:0">Yönlendirme şartları</h2>${d.terms ? h `<ul class="small">${d.terms.map((t) => h `<li>${t}</li>`)}</ul>` : h `<p class="flash err">Geçerli komisyon şartı yok.</p>`}
        <p class="small">Kabul ederseniz müşterinin adı ve telefonu size iletilir ve müşteriyle iletişime geçmeyi kabul etmiş olursunuz. Bu, müşteriyle fiyat anlaşmasının tamamlandığı anlamına gelmez.</p>
        <p class="small muted">Son yanıt zamanı: ${dt(d.deadline)}</p></div>
        <form method="post"><input type="hidden" name="nonce" value="${v.nonce}"><input type="hidden" name="decision" value="accept"><button class="btn">Yönlendirmeyi kabul ediyorum</button></form>
        <form method="post" style="margin-top:10px"><input type="hidden" name="nonce" value="${v.nonce}"><input type="hidden" name="decision" value="decline"><button class="btn sec">Kabul etmiyorum</button></form>`;
        case 'view_contact':
            return h `${head}<div class="card"><p>Müşteri iletişim bilgisini görmek için WhatsApp numaranızın <strong>son 4 hanesini</strong> girin.</p>${form(h `<label>Son 4 hane<input name="last4" inputmode="numeric" maxlength="4" required></label>`, 'Göster')}</div>`;
        case 'propose_terms':
            return h `${head}<div class="card"><p class="small">Müşteriyle anlaştığınız şartları girin. Müşteri onaylayınca iş kesinleşmiş sayılır.</p>${form(h `
        <div class="row"><label>Günlük tercümanlık ücreti<input name="daily_rate" inputmode="decimal" required></label><label>Para birimi<select name="currency"><option>USD</option><option>TRY</option><option>EUR</option><option>CNY</option></select></label></div>
        <fieldset style="border:1px solid var(--line);border-radius:10px;margin:0 0 10px"><legend class="small muted">Çalışılacak günler</legend>${(d.plannedDays ?? []).map((day) => h `<label style="display:inline-block;margin-right:10px"><input type="checkbox" name="days" value="${day}" style="width:auto" checked> ${formatDateTr(day)}</label>`)}
        <label>Ek gün (YYYY-AA-GG, virgülle)<input name="extra_days"></label></fieldset>
        <label>Ayrı masraflar (ulaşım, konaklama, yeme-içme) — kim karşılıyor?<textarea name="expenses" rows="2"></textarea></label>`)}</div>`;
        case 'confirm_terms':
            return h `${head}<div class="card"><h2 style="margin-top:0">Tercümanın bildirdiği şartlar (v${d.terms?.version})</h2><ul><li>Tercüman: ${d.terms?.interpreter}</li><li>Günlük ücret: ${d.terms?.dailyRate}</li>
        <li>Günler: ${(d.terms?.days ?? []).map((x) => formatDateTr(x)).join(', ')}</li><li>Tercümanlık toplamı: ${d.terms?.total}</li><li>Ayrı masraflar: ${d.terms?.expenses || '—'}</li></ul>
        <p class="small muted">Ücret sizinle tercüman arasında belirlenir. Ulaşım, konaklama ve yeme-içme ayrı değerlendirilir.</p></div>
        <form method="post"><input type="hidden" name="nonce" value="${v.nonce}"><input type="hidden" name="decision" value="yes"><button class="btn">Doğru, onaylıyorum</button></form>
        <form method="post" style="margin-top:10px"><input type="hidden" name="nonce" value="${v.nonce}"><input type="hidden" name="decision" value="no"><button class="btn sec">Doğru değil</button></form>`;
        case 'report_completion':
            return h `${head}<div class="card">${form(h `<label>Hizmet gerçekleşti mi?<select name="happened"><option value="yes">Evet</option><option value="no">Hayır / iptal oldu</option></select></label>
        <fieldset style="border:1px solid var(--line);border-radius:10px;margin:0 0 10px"><legend class="small muted">Gerçekten çalışılan günler</legend>${(d.plannedDays ?? []).map((day) => h `<label style="display:inline-block;margin-right:10px"><input type="checkbox" name="days" value="${day}" style="width:auto" checked> ${formatDateTr(day)}</label>`)}
        <label>Ek çalışılan gün (YYYY-AA-GG, virgülle)<input name="extra_days"></label></fieldset><label>Not<textarea name="note" rows="2"></textarea></label>`)}</div>`;
        case 'confirm_completion':
            return h `${head}<div class="card"><p>Tercümanın bildirdiği çalışılan günler:</p><p><strong>${(d.reportedDays ?? []).map((x) => formatDateTr(x)).join(', ')}</strong> (${(d.reportedDays ?? []).length} gün)</p>${d.note ? h `<p class="small">Not: ${d.note}</p>` : ''}</div>
        <form method="post"><input type="hidden" name="nonce" value="${v.nonce}"><input type="hidden" name="decision" value="yes"><button class="btn">Doğru</button></form>
        <form method="post" style="margin-top:10px"><input type="hidden" name="nonce" value="${v.nonce}"><input type="hidden" name="decision" value="no"><label>Doğru değilse açıklayın<input name="note"></label><button class="btn sec">Doğru değil</button></form>`;
        case 'statement': {
            const s = d.statement;
            if (!s)
                return h `${head}<p>Hesap bulunamadı.</p>`;
            return h `${head}<div class="card"><table><tbody><tr><th>Referans</th><td class="mono">${s.reference}</td></tr><tr><th>Komisyon</th><td>${s.receivableText}</td></tr><tr><th>Doğrulanmış ödeme</th><td>${s.collectedText}</td></tr>
        <tr><th>Kalan</th><td><strong>${s.balanceText}</strong></td></tr><tr><th>Vade</th><td>${s.dueDate ? formatDateTr(s.dueDate) : '—'}</td></tr></tbody></table>
        ${s.notice === 'REPORTED_UNVERIFIED' ? h `<p class="flash">Ödeme bildiriminiz alındı; sağlayıcı/banka kaydıyla doğrulandığında bakiye güncellenecek.</p>` : ''}</div>
        ${s.balance > 0 && d.fakePayments ? h `<form method="post" action="?test_payment=1"><input type="hidden" name="nonce" value="${v.nonce}"><button class="btn">TEST: ${s.balanceText} ödemeyi simüle et</button></form><p class="small muted">Test modu: gerçek para hareketi yok.</p>` : ''}
        ${s.balance > 0 && !d.fakePayments ? h `<p class="small">Ödeme açıklamasına referans kodunu (<span class="mono">${s.reference}</span>) yazın. Ödeme sağlayıcı/banka kaydıyla doğrulandığında bakiye otomatik kapanır.</p>` : ''}`;
        }
    }
    return h `${head}<p>Bilinmeyen işlem.</p>`;
}
