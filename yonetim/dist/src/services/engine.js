import { processInbox } from './inbox.js';
import { runDueTasks } from './tasks.js';
import { dispatchOutbox } from './dispatch.js';
/** Bekleyen iş kalmayana kadar (sınırlı tur) çalışır. Testlerde ve `worker --once` (cron) modunda kullanılır. */
export async function settle(ctx, maxRounds = 50) {
    let total = 0;
    for (let i = 0; i < maxRounds; i++) {
        const n = (await processInbox(ctx)) + (await runDueTasks(ctx)) + (await dispatchOutbox(ctx));
        total += n;
        if (n === 0)
            break;
    }
    return total;
}
export async function runWorker(ctx, opts = {}) {
    const interval = opts.intervalMs ?? 5000;
    while (!opts.signal?.aborted) {
        try {
            await settle(ctx, 20);
        }
        catch (e) {
            console.error('[worker]', e);
        }
        await new Promise((r) => setTimeout(r, interval));
    }
}
