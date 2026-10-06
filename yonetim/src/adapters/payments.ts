// Ödeme sağlayıcısı adaptörü. Varsayılan: imzalı TEST sağlayıcısı.
// Gerçek sağlayıcı (ör. iyzico) hesabı ve ticari model uygunluğu doğrulanınca eklenecek; şimdilik yok.
import { hmacSha256Hex, safeEqual } from '../core/crypto.js';

export interface PaymentEvent {
  eventId: string;
  type: 'payment.succeeded' | 'payment.failed' | 'payment.refunded';
  transactionId: string;
  reference: string;
  amountMinor: number;
  currency: string;
  status: string;      // sağlayıcının nihai durumu (SUCCESS / FAILURE / ...)
}

export interface PaymentsAdapter {
  readonly name: string;
  readonly mode: 'FAKE' | 'LIVE' | 'DISABLED';
  verifySignature(raw: Buffer, header: string | undefined): boolean;
  parse(body: any): PaymentEvent;
  /** Sunucu taraflı doğrulama sorgusu (webhook gövdesine körü körüne güvenmemek için). */
  lookup(transactionId: string): Promise<{ status: string; amountMinor: number; currency: string; reference: string } | null>;
}

export class FakePayments implements PaymentsAdapter {
  readonly name = 'fake';
  readonly mode = 'FAKE' as const;
  ledger = new Map<string, { status: string; amountMinor: number; currency: string; reference: string }>();
  constructor(private secret = 'fake-payments-secret') {}
  verifySignature(raw: Buffer, header: string | undefined) {
    return !!header && safeEqual(header, hmacSha256Hex(this.secret, raw));
  }
  sign(raw: string) { return hmacSha256Hex(this.secret, raw); }
  parse(b: any): PaymentEvent {
    return {
      eventId: String(b.event_id), type: b.type, transactionId: String(b.transaction_id), reference: String(b.reference),
      amountMinor: Number(b.amount_minor), currency: String(b.currency), status: String(b.status),
    };
  }
  async lookup(id: string) { return this.ledger.get(id) ?? null; }
  /** Test ödemesi: sağlayıcı tarafında işlem kaydı oluşturur ve imzalı webhook gövdesini döner. */
  simulate(p: { eventId?: string; transactionId: string; reference: string; amountMinor: number; currency: string; type?: PaymentEvent['type'] }) {
    const status = p.type === 'payment.refunded' ? 'REFUNDED' : 'SUCCESS';
    if (p.type !== 'payment.refunded') this.ledger.set(p.transactionId, { status, amountMinor: p.amountMinor, currency: p.currency, reference: p.reference });
    const body = JSON.stringify({
      event_id: p.eventId ?? `evt_${p.transactionId}_${p.type ?? 'payment.succeeded'}`, type: p.type ?? 'payment.succeeded',
      transaction_id: p.transactionId, reference: p.reference, amount_minor: p.amountMinor, currency: p.currency, status,
    });
    return { body, signature: this.sign(body) };
  }
}

export function createPayments(mode: string, secret?: string): PaymentsAdapter | null {
  if (mode === 'DISABLED') return null;
  if (mode === 'LIVE') throw new Error('Canlı ödeme sağlayıcısı henüz bağlanmadı (PAYMENTS_MODE=FAKE veya DISABLED kullanın)');
  return new FakePayments(secret || 'fake-payments-secret');
}
