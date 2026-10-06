// WhatsApp Business Platform (Cloud API) adaptörü + test (FAKE) adaptörü.
// WhatsApp Web otomasyonu / QR oturumu KULLANILMAZ (Bölüm 8.1).
import { hmacSha256Hex, safeEqual } from '../core/crypto.js';
import type { Config } from '../core/config.js';
import type { Button } from '../domain/templates.js';
import { ProviderError, classifyHttp, fetchWithTimeout } from './errors.js';

export interface OutgoingWa {
  to: string;                       // wa_id
  kind: 'text' | 'interactive' | 'template';
  text: string;
  buttons?: Button[];
  template?: { name: string; language: string; params: string[] };
}

export interface WhatsAppAdapter {
  readonly mode: 'FAKE' | 'LIVE' | 'DISABLED';
  send(m: OutgoingWa): Promise<{ externalId: string }>;
  verifySignature(rawBody: Buffer, header: string | undefined): boolean;
}

export type InboundEvent =
  | { kind: 'message'; externalId: string; from: string; at: Date; text: string; replyId: string | null; profileName: string | null; type: string }
  | { kind: 'status'; externalMessageId: string; status: string; at: Date; recipient: string; error: string | null };

/** Cloud API webhook gövdesini iç olaylara çevirir. */
export function parseWebhook(body: any): InboundEvent[] {
  const out: InboundEvent[] = [];
  for (const entry of body?.entry ?? []) {
    for (const ch of entry?.changes ?? []) {
      const v = ch?.value ?? {};
      const names: Record<string, string> = {};
      for (const c of v.contacts ?? []) if (c?.wa_id) names[c.wa_id] = c?.profile?.name ?? null;
      for (const m of v.messages ?? []) {
        let text = '';
        let replyId: string | null = null;
        if (m.type === 'text') text = m.text?.body ?? '';
        else if (m.type === 'interactive') {
          const r = m.interactive?.button_reply ?? m.interactive?.list_reply;
          replyId = r?.id ?? null; text = r?.title ?? '';
        } else if (m.type === 'button') { replyId = m.button?.payload ?? null; text = m.button?.text ?? ''; }
        else text = `[${m.type} mesajı]`;
        out.push({
          kind: 'message', externalId: String(m.id), from: String(m.from), at: new Date(Number(m.timestamp) * 1000),
          text, replyId, profileName: names[m.from] ?? null, type: String(m.type),
        });
      }
      for (const s of v.statuses ?? []) {
        out.push({
          kind: 'status', externalMessageId: String(s.id), status: String(s.status).toUpperCase(),
          at: new Date(Number(s.timestamp) * 1000), recipient: String(s.recipient_id ?? ''),
          error: s.errors?.length ? JSON.stringify(s.errors).slice(0, 500) : null,
        });
      }
    }
  }
  return out;
}

export class CloudWhatsApp implements WhatsAppAdapter {
  readonly mode = 'LIVE' as const;
  constructor(private cfg: Config['whatsapp']) {
    if (!cfg.phoneNumberId || !cfg.accessToken || !cfg.appSecret) {
      throw new Error('WHATSAPP_MODE=LIVE için WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_ACCESS_TOKEN ve WHATSAPP_APP_SECRET gerekli');
    }
  }

  verifySignature(raw: Buffer, header: string | undefined): boolean {
    if (!header?.startsWith('sha256=')) return false;
    return safeEqual(header.slice(7), hmacSha256Hex(this.cfg.appSecret!, raw));
  }

  async send(m: OutgoingWa): Promise<{ externalId: string }> {
    const body: any = { messaging_product: 'whatsapp', recipient_type: 'individual', to: m.to };
    if (m.kind === 'template' && m.template) {
      body.type = 'template';
      const components: any[] = [];
      if (m.template.params.length) components.push({ type: 'body', parameters: m.template.params.map((t) => ({ type: 'text', text: t })) });
      // Onaylı şablonda aynı sayıda "hızlı yanıt" butonu tanımlı olmalı; yük (payload) işe/sürüme bağlı kimliği taşır.
      (m.buttons ?? []).slice(0, 3).forEach((b, index) => components.push({ type: 'button', sub_type: 'quick_reply', index: String(index), parameters: [{ type: 'payload', payload: b.id }] }));
      body.template = { name: m.template.name, language: { code: m.template.language }, components };
    } else if (m.kind === 'interactive' && m.buttons?.length) {
      body.type = 'interactive';
      body.interactive = {
        type: 'button', body: { text: m.text.slice(0, 1024) },
        action: { buttons: m.buttons.slice(0, 3).map((b) => ({ type: 'reply', reply: { id: b.id, title: b.title.slice(0, 20) } })) },
      };
    } else {
      body.type = 'text';
      body.text = { body: m.text, preview_url: false };
    }
    const res = await fetchWithTimeout(`https://graph.facebook.com/${this.cfg.apiVersion}/${this.cfg.phoneNumberId}/messages`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.cfg.accessToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const txt = await res.text();
    if (!res.ok) throw classifyHttp(res.status, txt);
    const id = JSON.parse(txt)?.messages?.[0]?.id;
    if (!id) throw new ProviderError('Yanıtta mesaj kimliği yok', { retryable: false, uncertain: true });
    return { externalId: id };
  }
}

/** Test/demo adaptörü: hiçbir yere mesaj göndermez, gönderilenleri bellekte tutar. Ekranda "TEST" olarak etiketlenir. */
export class FakeWhatsApp implements WhatsAppAdapter {
  readonly mode = 'FAKE' as const;
  sent: (OutgoingWa & { externalId: string })[] = [];
  autoDeliver = true;
  private n = 0;
  private failures: ('retryable' | 'permanent' | 'uncertain')[] = [];
  constructor(private secret = 'fake-whatsapp-secret') {}

  failNext(kind: 'retryable' | 'permanent' | 'uncertain'): void {
    this.failures.push(kind);
  }

  verifySignature(raw: Buffer, header: string | undefined): boolean {
    if (!header?.startsWith('sha256=')) return false;
    return safeEqual(header.slice(7), hmacSha256Hex(this.secret, raw));
  }

  sign(raw: string): string {
    return 'sha256=' + hmacSha256Hex(this.secret, raw);
  }

  async send(m: OutgoingWa): Promise<{ externalId: string }> {
    const f = this.failures.shift();
    if (f === 'retryable') throw new ProviderError('Test: geçici hata', { retryable: true, status: 503 });
    if (f === 'permanent') throw new ProviderError('Test: kalıcı hata', { retryable: false, permanent: true, status: 400 });
    const externalId = `wamid.fake.${++this.n}`;
    this.sent.push({ ...m, externalId });
    if (f === 'uncertain') throw new ProviderError('Test: zaman aşımı', { retryable: false, uncertain: true });
    return { externalId };
  }

  to(waId: string) {
    return this.sent.filter((s) => s.to === waId);
  }

  last(waId: string) {
    const l = this.to(waId);
    return l[l.length - 1];
  }
}

export function createWhatsApp(cfg: Config['whatsapp']): WhatsAppAdapter {
  if (cfg.mode === 'LIVE') return new CloudWhatsApp(cfg);
  return new FakeWhatsApp(cfg.appSecret || 'fake-whatsapp-secret');
}
