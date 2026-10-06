import pg from 'pg';
import { readFile, readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export type Db = pg.Pool;
export type Tx = pg.PoolClient | pg.Pool;

// DATE sütunları JS Date'e çevrilmesin; 'YYYY-MM-DD' metni olarak kalsın (saat dilimi kaymasını önler).
pg.types.setTypeParser(1082, (v: string) => v);
pg.types.setTypeParser(1182 as any, (v: string) => (v === '{}' ? [] : v.slice(1, -1).split(',')));
// bigint (para) tamsayı olarak okunur; güvenli aralık dışı tutar beklenmez, aşılırsa hata verilir.
pg.types.setTypeParser(20, (v: string) => {
  const n = Number(v);
  if (!Number.isSafeInteger(n)) throw new Error(`bigint güvenli aralık dışında: ${v}`);
  return n;
});

export function createPool(url: string): Db {
  return new pg.Pool({ connectionString: url, max: 10 });
}

export async function tx<T>(db: Db, fn: (c: pg.PoolClient) => Promise<T>): Promise<T> {
  const c = await db.connect();
  try {
    await c.query('BEGIN');
    const r = await fn(c);
    await c.query('COMMIT');
    return r;
  } catch (e) {
    await c.query('ROLLBACK').catch(() => {});
    throw e;
  } finally {
    c.release();
  }
}

export async function one<T = any>(c: Tx, sql: string, params: unknown[] = []): Promise<T | null> {
  const r = await c.query(sql, params);
  return (r.rows[0] as T) ?? null;
}

export async function many<T = any>(c: Tx, sql: string, params: unknown[] = []): Promise<T[]> {
  const r = await c.query(sql, params);
  return r.rows as T[];
}

const here = dirname(fileURLToPath(import.meta.url));

export async function migrate(db: Db): Promise<string[]> {
  await db.query(`CREATE TABLE IF NOT EXISTS schema_migrations (name text PRIMARY KEY, applied_at timestamptz NOT NULL DEFAULT now())`);
  const dir = here.includes('/dist/') ? join(here, '../../../migrations') : join(here, '../../migrations');
  const files = (await readdir(dir)).filter((f) => f.endsWith('.sql')).sort();
  const applied: string[] = [];
  for (const f of files) {
    const done = await one(db, 'SELECT 1 FROM schema_migrations WHERE name=$1', [f]);
    if (done) continue;
    const sql = await readFile(join(dir, f), 'utf8');
    await tx(db, async (c) => {
      await c.query(sql);
      await c.query('INSERT INTO schema_migrations(name) VALUES ($1)', [f]);
    });
    applied.push(f);
  }
  return applied;
}
