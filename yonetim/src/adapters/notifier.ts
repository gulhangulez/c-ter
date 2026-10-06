// Gülhan'a bağımsız bildirim kanalı (e-posta). LOG modunda yalnızca sunucu loguna yazar.
import { fetchWithTimeout } from './errors.js';

export interface Notifier {
  readonly mode: string;
  sent: { subject: string; text: string }[];
  notifyAdmin(subject: string, text: string): Promise<void>;
}

export function createNotifier(cfg: { mode: string; resendApiKey?: string; from?: string; adminTo?: string }): Notifier {
  const sent: { subject: string; text: string }[] = [];
  if (cfg.mode === 'LIVE' && cfg.resendApiKey && cfg.from && cfg.adminTo) {
    return {
      mode: 'LIVE', sent,
      async notifyAdmin(subject, text) {
        const res = await fetchWithTimeout('https://api.resend.com/emails', {
          method: 'POST',
          headers: { Authorization: `Bearer ${cfg.resendApiKey}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ from: cfg.from, to: [cfg.adminTo], subject, text }),
        });
        if (!res.ok) throw new Error(`E-posta gönderilemedi: ${res.status}`);
        sent.push({ subject, text });
      },
    };
  }
  return {
    mode: 'LOG', sent,
    async notifyAdmin(subject, text) {
      sent.push({ subject, text });
      if (process.env.NODE_ENV !== 'test') console.log(`[yönetici bildirimi] ${subject}\n${text}`);
    },
  };
}
