// Ortam değişkenlerinden yapılandırma. Gizli bilgiler yalnızca ortamdan okunur, koda yazılmaz.
export type ProviderMode = 'FAKE' | 'LIVE' | 'DISABLED';

export interface Config {
  databaseUrl: string;
  port: number;
  baseUrl: string;                 // örn. https://panel.cince-tercuman.com
  appSecret: string;               // oturum/şifreleme anahtarı türetmek için
  adminTimezone: string;
  whatsapp: {
    mode: ProviderMode;
    phoneNumberId?: string;
    accessToken?: string;
    appSecret?: string;            // webhook imza doğrulaması (X-Hub-Signature-256)
    verifyToken?: string;          // GET kurulum doğrulaması
    apiVersion: string;
    approvedTemplates: Record<string, string>; // iç anahtar -> Meta'da onaylı şablon adı
    templateLanguage: string;
  };
  calendar: {
    mode: ProviderMode;
    clientId?: string;
    clientSecret?: string;
    calendarId?: string;
  };
  payments: {
    mode: ProviderMode;
    provider: string;              // 'fake' | 'iyzico' (henüz canlı değil)
    webhookSecret?: string;
  };
  telephony: { mode: ProviderMode; webhookSecret?: string };
  email: { mode: ProviderMode | 'LOG'; resendApiKey?: string; from?: string; adminTo?: string };
}

function mode(v: string | undefined, def: ProviderMode): ProviderMode {
  const m = (v || def).toUpperCase();
  if (m === 'FAKE' || m === 'LIVE' || m === 'DISABLED') return m;
  throw new Error(`Geçersiz sağlayıcı modu: ${v}`);
}

function parseTemplates(v: string | undefined): Record<string, string> {
  // WHATSAPP_APPROVED_TEMPLATES="availability_request=ct_availability_v1,missing_info=ct_missing_info_v1"
  const out: Record<string, string> = {};
  for (const part of (v || '').split(',').map((s) => s.trim()).filter(Boolean)) {
    const [k, name] = part.split('=');
    if (k && name) out[k.trim()] = name.trim();
  }
  return out;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const appSecret = env.APP_SECRET || '';
  if (appSecret.length < 32 && env.NODE_ENV === 'production') {
    throw new Error('APP_SECRET en az 32 karakter olmalı');
  }
  return {
    databaseUrl: env.DATABASE_URL || 'postgres://postgres@127.0.0.1:5432/cince_yonetim',
    port: Number(env.PORT || 3000),
    baseUrl: (env.BASE_URL || 'http://localhost:3000').replace(/\/$/, ''),
    appSecret: appSecret || 'gelistirme-icin-guvensiz-anahtar-degistirin-0000',
    adminTimezone: env.ADMIN_TIMEZONE || 'Europe/Istanbul',
    whatsapp: {
      mode: mode(env.WHATSAPP_MODE, 'FAKE'),
      phoneNumberId: env.WHATSAPP_PHONE_NUMBER_ID,
      accessToken: env.WHATSAPP_ACCESS_TOKEN,
      appSecret: env.WHATSAPP_APP_SECRET,
      verifyToken: env.WHATSAPP_VERIFY_TOKEN,
      apiVersion: env.WHATSAPP_API_VERSION || 'v21.0',
      approvedTemplates: parseTemplates(env.WHATSAPP_APPROVED_TEMPLATES),
      templateLanguage: env.WHATSAPP_TEMPLATE_LANGUAGE || 'tr',
    },
    calendar: {
      mode: mode(env.CALENDAR_MODE, 'FAKE'),
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      calendarId: env.GOOGLE_CALENDAR_ID,
    },
    payments: {
      mode: mode(env.PAYMENTS_MODE, 'FAKE'),
      provider: env.PAYMENTS_PROVIDER || 'fake',
      webhookSecret: env.PAYMENTS_WEBHOOK_SECRET,
    },
    telephony: { mode: mode(env.TELEPHONY_MODE, 'DISABLED'), webhookSecret: env.TELEPHONY_WEBHOOK_SECRET },
    email: {
      mode: (env.EMAIL_MODE || 'LOG').toUpperCase() as Config['email']['mode'],
      resendApiKey: env.RESEND_API_KEY,
      from: env.EMAIL_FROM,
      adminTo: env.ADMIN_EMAIL,
    },
  };
}
