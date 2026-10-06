// Ödeme sağlayıcısı adaptörü. Varsayılan: imzalı TEST sağlayıcısı.
// Gerçek sağlayıcı (ör. iyzico) hesabı ve ticari model uygunluğu doğrulanınca eklenecek; şimdilik yok.
import { hmacSha256Hex, safeEqual } from '../core/crypto.js';
export class FakePayments {
    secret;
    name = 'fake';
    mode = 'FAKE';
    ledger = new Map();
    constructor(secret = 'fake-payments-secret') {
        this.secret = secret;
    }
    verifySignature(raw, header) {
        return !!header && safeEqual(header, hmacSha256Hex(this.secret, raw));
    }
    sign(raw) { return hmacSha256Hex(this.secret, raw); }
    parse(b) {
        return {
            eventId: String(b.event_id), type: b.type, transactionId: String(b.transaction_id), reference: String(b.reference),
            amountMinor: Number(b.amount_minor), currency: String(b.currency), status: String(b.status),
        };
    }
    async lookup(id) { return this.ledger.get(id) ?? null; }
    /** Test ödemesi: sağlayıcı tarafında işlem kaydı oluşturur ve imzalı webhook gövdesini döner. */
    simulate(p) {
        const status = p.type === 'payment.refunded' ? 'REFUNDED' : 'SUCCESS';
        if (p.type !== 'payment.refunded')
            this.ledger.set(p.transactionId, { status, amountMinor: p.amountMinor, currency: p.currency, reference: p.reference });
        const body = JSON.stringify({
            event_id: p.eventId ?? `evt_${p.transactionId}_${p.type ?? 'payment.succeeded'}`, type: p.type ?? 'payment.succeeded',
            transaction_id: p.transactionId, reference: p.reference, amount_minor: p.amountMinor, currency: p.currency, status,
        });
        return { body, signature: this.sign(body) };
    }
}
export function createPayments(mode, secret) {
    if (mode === 'DISABLED')
        return null;
    if (mode === 'LIVE')
        throw new Error('Canlı ödeme sağlayıcısı henüz bağlanmadı (PAYMENTS_MODE=FAKE veya DISABLED kullanın)');
    return new FakePayments(secret || 'fake-payments-secret');
}
