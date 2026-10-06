const T = (key, params, text) => ({ key, params, text });
export const TEMPLATES = Object.fromEntries([
    T('intake_start', [], () => 'Merhaba, Çince Tercüman otomatik asistanıyım. Görüşmeniz üzerine talebinizi tamamlamak için yazıyorum. Hizmetin yeri ve tarih aralığı nedir?'),
    T('intake_welcome', [], () => 'Merhaba, Çince Tercüman otomatik asistanıyım. Talebinizi kaydediyorum; eksik bilgi varsa yalnızca onları soracağım. İstediğiniz an "yetkili" yazarak bir kişiyle görüşebilirsiniz.'),
    T('missing_info', ['job_code', 'missing_field_label'], (v) => `${v.job_code} talebinizi ilerletebilmemiz için ${v.missing_field_label} bilgisini paylaşır mısınız?`),
    T('request_summary', ['job_code', 'summary'], (v) => `${v.job_code} — Talebinizi ${v.summary} olarak kaydettim. Bilgiler doğru mu?`),
    T('share_consent', ['job_code'], (v) => `${v.job_code} için iki iznin var: (1) uygun tercüman bulduğumuzda adınızı, telefon numaranızı ve iş özetini yalnızca o tercümanla paylaşmamız, (2) bu iş süresince size WhatsApp'tan durum ve doğrulama mesajları göndermemiz. Pazarlama mesajı göndermeyiz. Onaylıyor musunuz?`),
    T('matching_started', ['job_code'], (v) => `Teşekkürler. ${v.job_code} için uygun tercümanları sırayla soruyoruz. Bir tercüman yönlendirmeyi kabul ettiğinde size buradan bilgi vereceğiz.`),
    T('availability_request', ['job_code', 'city', 'date_range', 'service_type', 'detail'], (v) => `${v.job_code} için ${v.city} bölgesinde ${v.date_range} tarihlerinde ${v.service_type} talebi var.${v.detail ? ' ' + v.detail : ''} Bu tarihlerde müsait misiniz?`),
    T('availability_reminder', ['job_code'], (v) => `${v.job_code} için müsaitlik yanıtınızı bekliyoruz. Uygunluk durumunuzu paylaşabilir misiniz?`),
    T('availability_clarify', ['job_code'], (v) => `${v.job_code} için yanıtınızı kesin olarak işaretleyebilir misiniz? "Olabilir" gibi yanıtları kabul olarak saymıyoruz.`),
    T('referral_acceptance', ['job_code', 'secure_terms_link'], (v) => `${v.job_code} yönlendirmesini, gösterilen şartlarla kabul edip müşteriyle iletişime geçmeyi onaylıyor musunuz? Şartlar ve onay: ${v.secure_terms_link}`),
    T('referral_waiting_terms', ['job_code'], (v) => `${v.job_code} için müsaitliğinizi kaydettik. Komisyon şartlarınız netleştiğinde yönlendirme onayını buradan göndereceğiz.`),
    T('assignment_expired', ['job_code'], (v) => `${v.job_code} için önceki sorgunun süresi dolmuş. Bu yanıtla atama yapılmadı; güncel uygunluğu kontrol ediyoruz.`),
    T('inquiry_closed', ['job_code'], (v) => `${v.job_code} için yanıtınız için teşekkürler; bu iş için başka bir tercümanla ilerlendi.`),
    T('customer_handoff', ['job_code', 'interpreter_name'], (v) => `${v.job_code} numaralı talebiniz için ${v.interpreter_name} yönlendirmeyi kabul etti. İletişim bilginizi kendisiyle paylaştık. İşin ayrıntıları için sizinle iletişime geçecek.`),
    T('interpreter_handoff', ['job_code', 'secure_contact_link'], (v) => `${v.job_code} müşteri iletişimi ve güncel iş özeti: ${v.secure_contact_link} Görüştüğünüzde buradan yanıtlayabilirsiniz.`),
    T('contact_check', ['job_code'], (v) => `${v.job_code} için karşı tarafla görüşebildiniz mi?`),
    T('agreement_check', ['job_code'], (v) => `${v.job_code} işi kesinleşti mi?`),
    T('terms_request', ['job_code', 'secure_link'], (v) => `${v.job_code} için müşteriyle anlaştığınız tarih, günlük ücret ve masraf kapsamını buradan bildirin: ${v.secure_link}`),
    T('terms_confirm_request', ['job_code', 'secure_confirmation_link'], (v) => `${v.job_code} işi kesinleşti mi? Güncel tarih ve ücret özetini doğrulayın: ${v.secure_confirmation_link}`),
    T('booking_confirmed', ['job_code', 'date_range'], (v) => `${v.job_code} işi ${v.date_range} için iki tarafça doğrulandı ve kesinleşti olarak kaydedildi.`),
    T('service_reminder', ['job_code', 'start_date'], (v) => `${v.job_code} için planlanan hizmet ${v.start_date} tarihinde başlayacak. Bir değişiklik varsa buradan yazabilirsiniz.`),
    T('start_check', ['job_code'], (v) => `${v.job_code} hizmeti bugün başladı mı?`),
    T('completion_report_request', ['job_code', 'secure_link'], (v) => `${v.job_code} hizmeti gerçekleşti mi? Çalışılan günleri ve sonucu buradan bildirin: ${v.secure_link}`),
    T('completion_check', ['job_code', 'secure_link'], (v) => `${v.job_code} hizmeti gerçekleşti mi? Tercümanın bildirdiği çalışılan günleri doğrulayabilir misiniz? ${v.secure_link}`),
    T('commission_notice', ['job_code', 'secure_statement_link'], (v) => `${v.job_code} için hizmete bağlı komisyon hesap özetiniz hazır. Tutar/vade bilgisi ve ödeme işlemi: ${v.secure_statement_link}`),
    T('commission_due_soon', ['job_code', 'secure_statement_link'], (v) => `${v.job_code} komisyon hesap özetinizin vadesi yarın. Güncel bakiye ve ödeme işlemi: ${v.secure_statement_link}`),
    T('payment_received', ['job_code', 'remaining_amount'], (v) => `${v.job_code} komisyon ödemeniz doğrulandı. Güncel bakiye: ${v.remaining_amount}.`),
    T('payment_report_ack', ['job_code'], (v) => `${v.job_code} için ödeme bildiriminizi kaydettik. Ödeme sağlayıcısı veya banka kaydıyla doğrulandığında size bilgi vereceğiz.`),
    T('human_support', [], () => 'Talebinizi yetkiliye aktardım. Otomatik görüşme bu iş için durduruldu.'),
    T('opt_out_ack', [], () => 'Anlaşıldı; bundan sonra size otomatik WhatsApp mesajı göndermeyeceğiz.'),
    T('job_choice', [], () => 'Birden fazla açık talebiniz var. Bu mesaj hangi talebinizle ilgili?'),
    T('stale_action', ['job_code'], (v) => `${v.job_code} için bu yanıt eski bir sürüme ait olduğu için işlenmedi. Güncel bilgiyi ayrıca göndereceğiz.`),
    T('out_of_scope', [], () => 'Teşekkürler. Çince Tercüman yalnızca Çince–Türkçe sözlü tercümanlık ve yönlendirme hizmeti verir; yazılı çeviri, ürün araştırma veya tur hizmetimiz yok. Sözlü tercüman ihtiyacınız varsa şehir ve tarihleri yazabilirsiniz.'),
    T('status_update', ['job_code', 'status_text'], (v) => `${v.job_code}: ${v.status_text}`),
    T('message_noted', ['job_code'], (v) => `${v.job_code} için mesajınızı kaydettim ve yetkiliye ilettim.`),
    T('cancel_confirm', ['job_code'], (v) => `${v.job_code} talebinizi iptal etmek istediğinizi doğrular mısınız?`),
    T('cancelled', ['job_code'], (v) => `${v.job_code} talebiniz iptal edildi.`),
    T('unfulfilled', ['job_code'], (v) => `${v.job_code} için şu an uygun tercüman bulamadık. Talebiniz yetkilimize aktarıldı.`),
    T('job_change_summary', ['job_code', 'summary'], (v) => `${v.job_code} için değişiklik talebi: ${v.summary}. Yeni bilgiler doğru mu?`),
    T('free_text', ['body'], (v) => v.body),
].map((t) => [t.key, t]));
export function render(key, vars) {
    const t = TEMPLATES[key];
    if (!t)
        throw new Error(`Bilinmeyen şablon: ${key}`);
    return t.text(vars);
}
