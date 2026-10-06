export class ProviderError extends Error {
  constructor(message: string, public readonly opts: { retryable: boolean; uncertain?: boolean; permanent?: boolean; status?: number }) {
    super(message);
  }
}

export async function fetchWithTimeout(url: string, init: RequestInit & { timeoutMs?: number } = {}): Promise<Response> {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), init.timeoutMs ?? 15000);
  try {
    return await fetch(url, { ...init, signal: ac.signal });
  } catch (e: any) {
    // İstek gönderildi fakat yanıt alınamadı: sonuç BELİRSİZ (T38). Kör tekrar yapılmaz.
    throw new ProviderError(`Ağ hatası / zaman aşımı: ${e?.message || e}`, { retryable: false, uncertain: true });
  } finally {
    clearTimeout(timer);
  }
}

export function classifyHttp(status: number, body: string): ProviderError {
  if (status === 429 || status >= 500) return new ProviderError(`Geçici sağlayıcı hatası ${status}: ${body.slice(0, 300)}`, { retryable: true, status });
  return new ProviderError(`Kalıcı sağlayıcı hatası ${status}: ${body.slice(0, 300)}`, { retryable: false, permanent: true, status });
}
