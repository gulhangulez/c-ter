export const JOB_STATUS_TR = {
    NEW: 'Yeni talep', INFO_PENDING: 'Bilgi bekleniyor', MATCHING: 'Tercüman aranıyor', HANDOFF_PENDING: 'Yönlendirme hazırlanıyor',
    NEGOTIATING: 'Görüşme / anlaşma bekleniyor', CONFIRMED: 'İş kesinleşti', IN_PROGRESS: 'İş başladı',
    COMPLETION_PENDING: 'Sonuç bekleniyor', COMPLETED: 'İş tamamlandı', UNFULFILLED: 'Uygun tercüman bulunamadı',
    DORMANT: 'Yanıt alınamıyor', CANCELLED: 'İptal edildi',
};
export const INQUIRY_STATUS_TR = {
    QUEUED: 'Sırada', SENT: 'Soruldu', AVAILABLE: 'Müsait', DECLINED: 'Uygun değil', CONDITIONAL: 'Şartlı yanıt',
    EXPIRED: 'Süresi doldu', DELIVERY_FAILED: 'Mesaj iletilemedi', CLOSED: 'Kapatıldı',
};
export const ACCRUAL_TR = {
    RULE_PENDING: 'Kural bekleniyor', ESTIMATED: 'Tahmini', ACCRUED: 'Tahakkuk etti', DISPUTED: 'İhtilaflı', VOIDED: 'Geçersiz',
};
export const PAYMENT_TR = { UNPAID: 'Ödenmedi', PARTIAL: 'Kısmi ödendi', PAID: 'Ödendi', OVERPAID: 'Fazla ödendi' };
export const DUE_TR = { NOT_DUE: 'Vadesi gelmedi', DUE_TODAY: 'Vadesi bugün', OVERDUE: 'Vadesi geçti' };
export const NOTICE_TR = {
    NONE: '—', REPORTED_UNVERIFIED: 'Ödeme bildirildi, doğrulanmadı', VERIFIED: 'Doğrulandı', REJECTED: 'Reddedildi',
};
export const CASE_TYPE_TR = {
    NO_CANDIDATE: 'Uygun tercüman bulunamadı',
    COMMISSION_RULE_MISSING: 'Komisyon kuralı eksik',
    CONDITIONAL_RESPONSE: 'Tercümandan şartlı yanıt',
    SHARE_CONSENT_MISSING: 'Paylaşım izni yok',
    HANDOFF_FAILED: 'İletişim devri iletilemedi',
    DELIVERY_UNKNOWN: 'Gönderim sonucu belirsiz',
    TEMPLATE_MISSING: 'Onaylı şablon yok',
    CONTACT_PROBLEM: 'Taraflar görüşemedi',
    AGREEMENT_CONFLICT: 'Taraflar farklı yanıt verdi',
    OUTCOME_UNVERIFIED: 'Sonuç doğrulanamadı',
    COMPLETION_DISPUTE: 'Gerçekleşen gün uyuşmazlığı',
    COMPLETION_UNVERIFIED: 'Tamamlanma doğrulanamadı',
    PAYMENT_MISMATCH: 'Ödeme uyuşmazlığı',
    PAYMENT_REPORTED_UNVERIFIED: 'Ödeme bildirildi, doğrulanamadı',
    OVERPAYMENT: 'Fazla ödeme',
    COMMISSION_OVERDUE: 'Komisyon vadesi geçti',
    ACCRUAL_BLOCKED: 'Komisyon hesaplanamadı',
    CALENDAR_SYNC_FAILED: 'Takvim senkronu başarısız',
    CALENDAR_DRIFT: 'Takvim kaydı elle değişmiş',
    OPT_OUT: 'Kişi mesaj almak istemiyor',
    HUMAN_REQUESTED: 'Yetkili ile görüşme isteği',
    UNHANDLED_MESSAGE: 'Yanıtlanamayan mesaj',
    HOLD_EXPIRED: 'Geçici rezervasyon süresi doldu',
    CANCELLED_WITH_ACCRUAL: 'Tahakkuklu işte iptal',
    PHONE_INTAKE: 'Telefon talebi',
    RESERVATION_CONFLICT: 'Rezervasyon çakışması',
    CHANGE_DECLINED: 'Değişiklik kabul edilmedi',
    INTEGRATION_FAILED: 'Entegrasyon hatası',
};
export const ACTION_TR = {
    accept_referral: 'Yönlendirme kabulü', view_contact: 'Müşteri iletişimi', propose_terms: 'İş şartlarını bildir',
    confirm_terms: 'İş şartlarını onayla', report_completion: 'Gerçekleşen günleri bildir', confirm_completion: 'Gerçekleşen günleri onayla',
    statement: 'Komisyon hesap özeti',
};
