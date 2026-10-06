import pg from 'pg';
import { randomBytes } from 'node:crypto';
import { loadConfig } from '../src/core/config.js';
import { TestClock } from '../src/core/clock.js';
import { createPool, migrate, tx, one } from '../src/core/db.js';
import { FakeWhatsApp } from '../src/adapters/whatsapp.js';
import { FakeCalendar } from '../src/adapters/calendar.js';
import { FakePayments } from '../src/adapters/payments.js';
import { createNotifier } from '../src/adapters/notifier.js';
import type { Ctx } from '../src/services/core.js';
import { storeInbox, waDedupeKey } from '../src/services/inbox.js';
import { settle } from '../src/services/engine.js';
import { activateAgreement, createInterpreter, type AgreementInput, type InterpreterInput } from '../src/services/admin.js';
import { loadAction, performAction } from '../src/services/actions.js';
import type { InboundEvent } from '../src/adapters/whatsapp.js';

process.env.NODE_ENV = 'test';
const BASE = process.env.TEST_DATABASE_URL || 'postgres://postgres@127.0.0.1:5433/postgres';

export interface World {
  ctx: Ctx;
  clock: TestClock;
  wa: FakeWhatsApp;
  cal: FakeCalendar;
  pay: FakePayments;
  close(): Promise<void>;
}

export async function world(start = '2026-10-06T07:00:00Z', templates: Record<string, string> = {}): Promise<World> {
  const name = 'ct_test_' + randomBytes(5).toString('hex');
  const admin = new pg.Client({ connectionString: BASE });
  await admin.connect();
  await admin.query(`CREATE DATABASE ${name}`);
  await admin.end();
  const url = BASE.replace(/\/[^/]*$/, '/' + name);
  const config = loadConfig({ DATABASE_URL: url, BASE_URL: 'https://panel.test', NODE_ENV: 'test' } as any);
  config.whatsapp.approvedTemplates = templates;
  const db = createPool(url);
  await migrate(db);
  const clock = new TestClock(new Date(start));
  const wa = new FakeWhatsApp();
  const cal = new FakeCalendar();
  const pay = new FakePayments();
  const ctx: Ctx = { db, clock, config, wa, calendar: cal, payments: pay, notifier: createNotifier({ mode: 'LOG' }) };
  return {
    ctx, clock, wa, cal, pay,
    async close() {
      await db.end();
      const a = new pg.Client({ connectionString: BASE });
      await a.connect();
      await a.query(`DROP DATABASE IF EXISTS ${name} WITH (FORCE)`);
      await a.end();
    },
  };
}

let seq = 0;
export async function inbound(w: World, from: string, text: string, replyId: string | null = null, id?: string): Promise<string> {
  const ev: InboundEvent = { kind: 'message', externalId: id ?? `in.${++seq}.${Date.now()}`, from, at: w.clock.now(), text, replyId, profileName: null, type: replyId ? 'interactive' : 'text' };
  await storeInbox(w.ctx, 'whatsapp', waDedupeKey(ev), ev, true);
  await settle(w.ctx);
  return ev.externalId;
}

/** Son mesajdaki butona bas (başlığa göre). */
export async function press(w: World, from: string, title: string): Promise<void> {
  const msgs = w.wa.to(from).filter((m) => m.buttons?.some((b) => b.title === title));
  const m = msgs[msgs.length - 1];
  if (!m) throw new Error(`${from} için "${title}" butonu yok. Son mesaj: ${w.wa.last(from)?.text}`);
  const b = m.buttons!.find((x) => x.title === title)!;
  await inbound(w, from, title, b.id);
}

export function lastLink(w: World, to: string): string {
  const all = w.wa.to(to).map((m) => m.text).reverse();
  for (const t of all) {
    const m = t.match(/\/actions\/([A-Za-z0-9_-]+)/);
    if (m) return m[1];
  }
  throw new Error('Bağlantı bulunamadı');
}

export async function act(w: World, token: string, form: Record<string, string | string[]> = {}) {
  const v = await loadAction(w.ctx, token);
  const r = await performAction(w.ctx, token, { nonce: v.nonce ?? '', ...form });
  await settle(w.ctx);
  return r;
}

export async function addInterpreter(w: World, over: Partial<InterpreterInput> = {}): Promise<string> {
  return tx(w.ctx.db, (c) => createInterpreter(c, w.ctx, {
    name: 'Tercüman A', whatsapp: '8613800000001', timezone: 'Asia/Shanghai', cities: ['mersin', 'adana'], travelCountries: ['TR'],
    services: ['MACHINE_INSTALLATION', 'FACTORY_VISIT', 'FAIR_VISIT', 'CHINA_INTERPRETER', 'INTERPRETING'], messagingConsent: true, ...over,
  }, 'test'));
}

export async function addAgreement(w: World, interpreterId: string, over: Partial<AgreementInput> = {}): Promise<string> {
  const id = await tx(w.ctx.db, (c) => activateAgreement(c, w.ctx, {
    interpreterId, payerPartyType: 'INTERPRETER', commissionType: 'PERCENT_OF_BASE', currency: 'USD', percent: '10',
    accrualEvent: 'SERVICE_COMPLETED', dueOffsetDays: 7, dueDayType: 'CALENDAR', acceptanceEvidence: 'Test sözleşmesi', ...over,
  }, 'test'));
  await settle(w.ctx);
  return id;
}

export async function job(w: World, where = 'true'): Promise<any> {
  return one(w.ctx.db, `SELECT * FROM jobs WHERE ${where} ORDER BY created_at DESC LIMIT 1`);
}

export async function advance(w: World, hours: number): Promise<void> {
  w.clock.advanceHours(hours);
  await settle(w.ctx);
}

export async function q(w: World, sql: string, params: unknown[] = []): Promise<any[]> {
  return (await w.ctx.db.query(sql, params)).rows;
}

export async function payWebhook(w: World, p: Parameters<FakePayments['simulate']>[0]): Promise<void> {
  const { body } = w.pay.simulate(p);
  const ev = w.pay.parse(JSON.parse(body));
  await storeInbox(w.ctx, 'payments:fake', ev.eventId, ev, true);
  await settle(w.ctx);
}
