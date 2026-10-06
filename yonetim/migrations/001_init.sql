-- Çince Tercüman operasyon sistemi — ilk şema.
-- Asıl kayıt sistemi bu veritabanıdır; Google Calendar yalnızca görsel takvimdir.
-- Para tutarları para biriminin en küçük biriminde tamsayı (bigint) tutulur.

CREATE EXTENSION IF NOT EXISTS btree_gist;
CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE organization_settings (
  id                 smallint PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  business_name      text NOT NULL DEFAULT 'Çince Tercüman',
  admin_timezone     text NOT NULL DEFAULT 'Europe/Istanbul',
  automation_enabled boolean NOT NULL DEFAULT true,
  policy_version     integer NOT NULL DEFAULT 1,
  policy             jsonb NOT NULL DEFAULT '{}'::jsonb,
  privacy_url        text,
  updated_at         timestamptz NOT NULL DEFAULT now()
);
INSERT INTO organization_settings (id) VALUES (1);

CREATE TABLE users (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email          text NOT NULL UNIQUE,
  display_name   text NOT NULL,
  password_hash  text NOT NULL,
  roles          text[] NOT NULL DEFAULT ARRAY['ADMIN'],
  active         boolean NOT NULL DEFAULT true,
  last_login_at  timestamptz,
  created_at     timestamptz NOT NULL DEFAULT now(),
  CHECK (roles <@ ARRAY['ADMIN','OPERATIONS','FINANCE'])
);

CREATE TABLE sessions (
  id_hash     text PRIMARY KEY,
  user_id     uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  csrf_token  text NOT NULL,
  expires_at  timestamptz NOT NULL,
  created_at  timestamptz NOT NULL DEFAULT now()
);

-- Müşteri, tercüman veya şirket. Bir kişi birden fazla role sahip olabilir.
CREATE TABLE parties (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  display_name  text,
  company_name  text,
  is_customer   boolean NOT NULL DEFAULT false,
  is_interpreter boolean NOT NULL DEFAULT false,
  is_admin_contact boolean NOT NULL DEFAULT false,
  timezone      text,
  language      text NOT NULL DEFAULT 'tr',
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE contact_endpoints (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  party_id     uuid NOT NULL REFERENCES parties(id) ON DELETE CASCADE,
  kind         text NOT NULL CHECK (kind IN ('WHATSAPP','PHONE','EMAIL')),
  value        text NOT NULL,           -- WhatsApp: wa_id (rakamlar), PHONE: E.164, EMAIL
  verified     boolean NOT NULL DEFAULT false,
  preferred    boolean NOT NULL DEFAULT false,
  created_at   timestamptz NOT NULL DEFAULT now(),
  UNIQUE (kind, value)
);

-- İzinler: mesaj izni, paylaşım izni ve pazarlama izni ayrı amaçlardır.
CREATE TABLE consents (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  party_id      uuid NOT NULL REFERENCES parties(id) ON DELETE CASCADE,
  channel       text NOT NULL CHECK (channel IN ('WHATSAPP','PHONE','EMAIL','ANY')),
  purpose       text NOT NULL CHECK (purpose IN ('OPERATIONAL_MESSAGES','CONTACT_SHARING','MARKETING','DATA_TRANSFER_ABROAD')),
  job_id        uuid,                    -- iş kapsamlı izinler için
  granted       boolean NOT NULL,
  text_version  text NOT NULL,
  source        text NOT NULL,           -- 'whatsapp_button:<message id>', 'admin', ...
  recorded_at   timestamptz NOT NULL,
  withdrawn_at  timestamptz
);
CREATE INDEX consents_party_idx ON consents (party_id, purpose);

CREATE TABLE interpreter_profiles (
  party_id        uuid PRIMARY KEY REFERENCES parties(id) ON DELETE CASCADE,
  cities          text[] NOT NULL DEFAULT '{}',   -- küçük harf, aksansız anahtarlar
  travel_countries text[] NOT NULL DEFAULT '{}',  -- seyahat edebildiği ülkeler (ISO kodu)
  services        text[] NOT NULL DEFAULT '{}',
  language_pairs  text[] NOT NULL DEFAULT ARRAY['zh-tr','tr-zh'],
  specialties     text,
  timezone        text NOT NULL,
  priority        integer NOT NULL DEFAULT 100,   -- küçük sayı önce
  active          boolean NOT NULL DEFAULT true,
  daily_rate_note text,
  notes           text,
  created_at      timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE interpreter_blocks (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  interpreter_id uuid NOT NULL REFERENCES parties(id) ON DELETE CASCADE,
  period       daterange NOT NULL,
  source       text NOT NULL,
  note         text,
  created_at   timestamptz NOT NULL DEFAULT now()
);

CREATE SEQUENCE job_code_seq;

CREATE TABLE jobs (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code               text NOT NULL UNIQUE,
  customer_id        uuid NOT NULL REFERENCES parties(id),
  status             text NOT NULL DEFAULT 'NEW' CHECK (status IN (
                       'NEW','INFO_PENDING','MATCHING','HANDOFF_PENDING','NEGOTIATING','CONFIRMED',
                       'IN_PROGRESS','COMPLETION_PENDING','COMPLETED','UNFULFILLED','DORMANT','CANCELLED')),
  automation_mode    text NOT NULL DEFAULT 'AUTO' CHECK (automation_mode IN ('AUTO','HUMAN_TAKEOVER','PAUSED')),
  version            integer NOT NULL DEFAULT 1,
  source_channel     text NOT NULL DEFAULT 'WHATSAPP',
  service_type       text,
  country_code       text,
  city               text,
  city_key           text,
  meeting_point      text,
  start_date         date,
  end_date           date,
  service_days       date[],
  technical_subject  text,
  customer_name      text,
  summary_confirmed_at timestamptz,
  pending_question   text,             -- müşteriden beklenen yanıt türü
  pending_field      text,
  extraction         jsonb NOT NULL DEFAULT '{}'::jsonb,
  current_assignment_id uuid,
  policy_version     integer NOT NULL DEFAULT 1,
  contact_status_interpreter text,     -- contacted / not_contacted / contact_problem
  contact_status_customer    text,
  outcome_note       text,
  created_at         timestamptz NOT NULL,
  updated_at         timestamptz NOT NULL,
  CHECK (end_date IS NULL OR start_date IS NULL OR end_date >= start_date)
);
CREATE INDEX jobs_customer_idx ON jobs (customer_id);
CREATE INDEX jobs_status_idx ON jobs (status);

CREATE TABLE service_segments (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id          uuid NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  job_version     integer NOT NULL,
  city            text,
  timezone        text NOT NULL,
  planned_days    date[] NOT NULL,
  verified_days   date[],
  created_at      timestamptz NOT NULL
);

CREATE TABLE interpreter_inquiries (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id          uuid NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  job_version     integer NOT NULL,
  interpreter_id  uuid NOT NULL REFERENCES parties(id),
  rank            integer NOT NULL,
  status          text NOT NULL CHECK (status IN ('QUEUED','SENT','AVAILABLE','DECLINED','CONDITIONAL','EXPIRED','DELIVERY_FAILED','CLOSED')),
  sent_at         timestamptz,
  responded_at    timestamptz,
  deadline_at     timestamptz,
  response_text   text,
  close_reason    text,
  created_at      timestamptz NOT NULL,
  UNIQUE (job_id, job_version, interpreter_id)
);

CREATE TABLE assignments (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id           uuid NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  job_version      integer NOT NULL,
  interpreter_id   uuid NOT NULL REFERENCES parties(id),
  inquiry_id       uuid REFERENCES interpreter_inquiries(id),
  status           text NOT NULL CHECK (status IN ('PROPOSED','REFERRAL_ACCEPTED','INTRODUCED','BOOKED','COMPLETED','WITHDRAWN','EXPIRED','CANCELLED')),
  active           boolean NOT NULL DEFAULT true,
  acceptance_evidence text,
  agreement_id     uuid,
  accepted_at      timestamptz,
  created_at       timestamptz NOT NULL
);
-- İş başına en fazla bir aktif atama (T10).
CREATE UNIQUE INDEX assignments_one_active_per_job ON assignments (job_id) WHERE active;

CREATE TABLE reservations (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  interpreter_id  uuid NOT NULL REFERENCES parties(id),
  assignment_id   uuid NOT NULL REFERENCES assignments(id),
  period          daterange NOT NULL,
  status          text NOT NULL CHECK (status IN ('HOLD','BOOKED','RELEASED')),
  hold_expires_at timestamptz,
  created_at      timestamptz NOT NULL,
  -- Aynı tercümanın çakışan etkin rezervasyonları veritabanı düzeyinde engellenir (T11).
  CONSTRAINT reservations_no_overlap EXCLUDE USING gist (
    interpreter_id WITH =, period WITH &&) WHERE (status IN ('HOLD','BOOKED'))
);

CREATE TABLE booking_terms (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id          uuid NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  assignment_id   uuid NOT NULL REFERENCES assignments(id),
  terms_version   integer NOT NULL,
  daily_rate_minor bigint NOT NULL CHECK (daily_rate_minor >= 0),
  currency        text NOT NULL,
  service_days    date[] NOT NULL,
  expenses_note   text,
  proposed_by     uuid REFERENCES parties(id),
  created_at      timestamptz NOT NULL,
  UNIQUE (job_id, terms_version)
);

-- Onaylar silinmez; çelişkiler de kayıtlı kalır.
CREATE TABLE confirmations (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id        uuid NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
  subject       text NOT NULL,    -- REQUEST_SUMMARY, CONTACT, AGREEMENT, BOOKING_TERMS, SERVICE_START, COMPLETION
  subject_version integer NOT NULL,
  party_id      uuid NOT NULL REFERENCES parties(id),
  value         text NOT NULL,    -- YES / NO / contacted / not_contacted / ...
  detail        jsonb NOT NULL DEFAULT '{}'::jsonb,
  source        text NOT NULL,
  created_at    timestamptz NOT NULL
);
CREATE INDEX confirmations_job_idx ON confirmations (job_id, subject);

CREATE TABLE commission_agreements (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  interpreter_id         uuid NOT NULL REFERENCES parties(id),
  agreement_version      integer NOT NULL,
  payer_party_type       text NOT NULL CHECK (payer_party_type IN ('INTERPRETER','CUSTOMER','OTHER')),
  payer_party_id         uuid REFERENCES parties(id),
  commission_type        text NOT NULL CHECK (commission_type IN ('FIXED_JOB','FIXED_SERVICE_DAY','PERCENT_OF_BASE')),
  currency               text NOT NULL,
  fixed_amount_minor     bigint,
  per_day_amount_minor   bigint,
  percentage_basis_points integer,
  commission_base_definition text NOT NULL DEFAULT 'Doğrulanmış günlük tercümanlık bedeli × gerçekleşen gün; masraflar hariç',
  expense_inclusion_policy text NOT NULL DEFAULT 'EXCLUDED',
  tax_treatment          text NOT NULL DEFAULT 'Mali müşavirce belirlenecek',
  rounding               text NOT NULL DEFAULT 'HALF_UP',
  accrual_event          text NOT NULL CHECK (accrual_event IN ('REFERRAL_ACCEPTED','BOOKING_CONFIRMED','SERVICE_COMPLETED')),
  due_anchor_event       text NOT NULL DEFAULT 'ACCRUAL',
  due_offset_days        integer NOT NULL DEFAULT 7,
  due_day_type           text NOT NULL DEFAULT 'CALENDAR' CHECK (due_day_type IN ('CALENDAR','BUSINESS')),
  due_timezone           text NOT NULL DEFAULT 'Europe/Istanbul',
  cancellation_policy    text NOT NULL DEFAULT 'İptalde tahakkuk etmemiş komisyon doğmaz',
  refund_policy          text NOT NULL DEFAULT 'Tanımlanmadı',
  status                 text NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT','ACTIVE','SUPERSEDED')),
  accepted_at            timestamptz,
  acceptance_evidence    text,
  created_at             timestamptz NOT NULL,
  UNIQUE (interpreter_id, agreement_version),
  CHECK (
    (commission_type = 'FIXED_JOB' AND fixed_amount_minor IS NOT NULL) OR
    (commission_type = 'FIXED_SERVICE_DAY' AND per_day_amount_minor IS NOT NULL) OR
    (commission_type = 'PERCENT_OF_BASE' AND percentage_basis_points IS NOT NULL)
  )
);
CREATE UNIQUE INDEX commission_agreements_one_active ON commission_agreements (interpreter_id) WHERE status = 'ACTIVE';

CREATE TABLE commission_accounts (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id           uuid NOT NULL REFERENCES jobs(id),
  assignment_id    uuid NOT NULL UNIQUE REFERENCES assignments(id),
  agreement_id     uuid REFERENCES commission_agreements(id),
  agreement_snapshot jsonb,
  payer_party_id   uuid REFERENCES parties(id),
  reference        text NOT NULL UNIQUE,     -- ödeme referansı (örn. CT-2026-000123-K1)
  accrual_status   text NOT NULL CHECK (accrual_status IN ('RULE_PENDING','ESTIMATED','ACCRUED','DISPUTED','VOIDED')),
  currency         text,
  estimated_minor  bigint,
  due_date         date,
  due_timezone     text,
  payment_notice   text NOT NULL DEFAULT 'NONE' CHECK (payment_notice IN ('NONE','REPORTED_UNVERIFIED','VERIFIED','REJECTED')),
  accrual_outcome_note text,
  created_at       timestamptz NOT NULL,
  updated_at       timestamptz NOT NULL
);

-- Append-only finans defteri: silme/güncelleme yok, düzeltme ters kayıtla.
CREATE TABLE financial_entries (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  account_id      uuid NOT NULL REFERENCES commission_accounts(id),
  kind            text NOT NULL CHECK (kind IN ('ACCRUAL','ADJUSTMENT_INCREASE','ADJUSTMENT_DECREASE','WAIVER','CANCELLATION','COLLECTION','REFUND')),
  amount_minor    bigint NOT NULL CHECK (amount_minor > 0),
  currency        text NOT NULL,
  reason          text NOT NULL,
  source_ref      text,
  reverses_entry_id uuid REFERENCES financial_entries(id),
  actor           text NOT NULL,
  created_at      timestamptz NOT NULL
);
CREATE INDEX financial_entries_account_idx ON financial_entries (account_id);
CREATE FUNCTION forbid_ledger_mutation() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  RAISE EXCEPTION 'financial_entries append-only: % yasak', TG_OP;
END $$;
CREATE TRIGGER financial_entries_append_only BEFORE UPDATE OR DELETE ON financial_entries
  FOR EACH ROW EXECUTE FUNCTION forbid_ledger_mutation();

CREATE TABLE payments (
  id                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider           text NOT NULL,
  external_id        text NOT NULL,
  reference          text,
  amount_minor       bigint NOT NULL,
  currency           text NOT NULL,
  provider_status    text NOT NULL,
  verification       text NOT NULL CHECK (verification IN ('VERIFIED','REJECTED','PENDING')),
  rejection_reason   text,
  refunded_minor     bigint NOT NULL DEFAULT 0,
  evidence           jsonb NOT NULL DEFAULT '{}'::jsonb,
  received_at        timestamptz NOT NULL,
  UNIQUE (provider, external_id)                 -- T27
);

CREATE TABLE payment_allocations (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  payment_id    uuid NOT NULL REFERENCES payments(id),
  account_id    uuid NOT NULL REFERENCES commission_accounts(id),
  amount_minor  bigint NOT NULL CHECK (amount_minor > 0),
  currency      text NOT NULL,
  created_at    timestamptz NOT NULL
);

CREATE TABLE conversations (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  party_id         uuid NOT NULL REFERENCES parties(id),
  channel          text NOT NULL DEFAULT 'WHATSAPP',
  last_inbound_at  timestamptz,
  bot_paused       boolean NOT NULL DEFAULT false,
  pending_job_choice uuid[],
  pending_text     text,
  created_at       timestamptz NOT NULL,
  UNIQUE (party_id, channel)
);

CREATE TABLE messages (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  external_id      text,
  direction        text NOT NULL CHECK (direction IN ('IN','OUT')),
  party_id         uuid REFERENCES parties(id),
  job_id           uuid REFERENCES jobs(id),
  job_version      integer,
  kind             text NOT NULL,             -- text / interactive / template / button_reply
  template_key     text,
  body             text,
  payload          jsonb NOT NULL DEFAULT '{}'::jsonb,
  status           text NOT NULL DEFAULT 'RECEIVED' CHECK (status IN ('RECEIVED','QUEUED','ACCEPTED','SENT','DELIVERED','READ','FAILED','UNKNOWN')),
  status_rank      integer NOT NULL DEFAULT 0,
  error            text,
  created_at       timestamptz NOT NULL
);
CREATE UNIQUE INDEX messages_external_unique ON messages (direction, external_id) WHERE external_id IS NOT NULL;
CREATE INDEX messages_job_idx ON messages (job_id);

CREATE TABLE message_events (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message_id    uuid REFERENCES messages(id),
  external_message_id text NOT NULL,
  event_key     text NOT NULL UNIQUE,
  status        text NOT NULL,
  error         text,
  occurred_at   timestamptz NOT NULL,
  received_at   timestamptz NOT NULL
);

CREATE TABLE sharing_records (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id          uuid NOT NULL REFERENCES jobs(id),
  job_version     integer NOT NULL,
  assignment_id   uuid NOT NULL REFERENCES assignments(id),
  recipient_id    uuid NOT NULL REFERENCES parties(id),
  data_scope      text[] NOT NULL,
  purpose         text NOT NULL,
  consent_id      uuid REFERENCES consents(id),
  message_id      uuid REFERENCES messages(id),
  result          text NOT NULL CHECK (result IN ('PENDING','SHARED','FAILED')),
  created_at      timestamptz NOT NULL,
  updated_at      timestamptz NOT NULL
);

-- Kalıcı takip görevleri (hatırlatma motoru).
CREATE TABLE tasks (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  task_type       text NOT NULL,
  job_id          uuid REFERENCES jobs(id),
  entity_id       uuid,
  target_party_id uuid REFERENCES parties(id),
  business_version integer,
  policy_version  integer NOT NULL DEFAULT 1,
  occurrence      integer NOT NULL DEFAULT 1,
  dedupe_key      text NOT NULL UNIQUE,
  payload         jsonb NOT NULL DEFAULT '{}'::jsonb,
  due_at          timestamptz NOT NULL,
  status          text NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING','RUNNING','DONE','CANCELLED','FAILED')),
  claimed_at      timestamptz,
  attempt_count   integer NOT NULL DEFAULT 0,
  next_attempt_at timestamptz,
  last_error      text,
  cancel_reason   text,
  created_at      timestamptz NOT NULL
);
CREATE INDEX tasks_due_idx ON tasks (status, due_at);
CREATE INDEX tasks_job_idx ON tasks (job_id);

CREATE TABLE calendar_links (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id          uuid NOT NULL REFERENCES jobs(id),
  segment_key     text NOT NULL DEFAULT 'main',
  event_kind      text NOT NULL DEFAULT 'service',
  calendar_id     text NOT NULL,
  event_id        text NOT NULL,
  synced_version  integer,
  synced_state    text,
  last_error      text,
  updated_at      timestamptz NOT NULL,
  UNIQUE (job_id, segment_key, event_kind)       -- T18
);

CREATE TABLE webhook_inbox (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  provider      text NOT NULL,
  dedupe_key    text NOT NULL,
  signature_ok  boolean NOT NULL,
  body          jsonb NOT NULL,
  status        text NOT NULL DEFAULT 'RECEIVED' CHECK (status IN ('RECEIVED','PROCESSED','FAILED','REJECTED')),
  error         text,
  attempts      integer NOT NULL DEFAULT 0,
  received_at   timestamptz NOT NULL,
  processed_at  timestamptz,
  UNIQUE (provider, dedupe_key)                  -- T05
);

CREATE TABLE outbox (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  action          text NOT NULL,          -- whatsapp.send, calendar.sync, email.notify
  job_id          uuid REFERENCES jobs(id),
  job_version     integer,
  target_party_id uuid REFERENCES parties(id),
  payload         jsonb NOT NULL,
  dedupe_key      text UNIQUE,
  status          text NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING','RUNNING','DONE','FAILED','UNKNOWN','SKIPPED')),
  attempts        integer NOT NULL DEFAULT 0,
  next_attempt_at timestamptz NOT NULL,
  last_error      text,
  result          jsonb,
  created_at      timestamptz NOT NULL,
  updated_at      timestamptz NOT NULL
);
CREATE INDEX outbox_pending_idx ON outbox (status, next_attempt_at);

CREATE TABLE cases (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  case_type    text NOT NULL,
  job_id       uuid REFERENCES jobs(id),
  party_id     uuid REFERENCES parties(id),
  severity     text NOT NULL DEFAULT 'NORMAL' CHECK (severity IN ('LOW','NORMAL','HIGH')),
  summary      text NOT NULL,
  detail       jsonb NOT NULL DEFAULT '{}'::jsonb,
  status       text NOT NULL DEFAULT 'OPEN' CHECK (status IN ('OPEN','RESOLVED')),
  resolution   text,
  due_at       timestamptz,
  created_at   timestamptz NOT NULL,
  resolved_at  timestamptz
);
CREATE INDEX cases_open_idx ON cases (status);
CREATE UNIQUE INDEX cases_open_dedupe ON cases (case_type, coalesce(job_id, '00000000-0000-0000-0000-000000000000'::uuid), coalesce(party_id, '00000000-0000-0000-0000-000000000000'::uuid)) WHERE status = 'OPEN';

CREATE TABLE audit_log (
  id            bigserial PRIMARY KEY,
  actor         text NOT NULL,
  command       text NOT NULL,
  job_id        uuid,
  entity_type   text,
  entity_id     uuid,
  old_state     text,
  new_state     text,
  job_version   integer,
  evidence      text,
  detail        jsonb NOT NULL DEFAULT '{}'::jsonb,
  occurred_at   timestamptz NOT NULL
);
CREATE INDEX audit_log_job_idx ON audit_log (job_id, occurred_at);

-- Güvenli yanıt bağlantıları: yalnızca token özeti saklanır.
CREATE TABLE action_tokens (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token_hash    text NOT NULL UNIQUE,
  party_id      uuid NOT NULL REFERENCES parties(id),
  job_id        uuid NOT NULL REFERENCES jobs(id),
  job_version   integer NOT NULL,
  action        text NOT NULL,
  entity_id     uuid,
  nonce         text NOT NULL,
  expires_at    timestamptz NOT NULL,
  used_at       timestamptz,
  created_at    timestamptz NOT NULL
);

CREATE TABLE integration_connections (
  name          text PRIMARY KEY,         -- whatsapp, google_calendar, payments, telephony, email
  mode          text NOT NULL,            -- FAKE / LIVE / DISABLED
  healthy       boolean,
  last_success_at timestamptz,
  last_error    text,
  last_error_at timestamptz,
  secret_ref    text,                     -- gizli bilgi kendisi değil, ortam değişkeni adı
  detail        jsonb NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE import_batches (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source        text NOT NULL,
  preview       jsonb NOT NULL,
  status        text NOT NULL DEFAULT 'PREVIEW' CHECK (status IN ('PREVIEW','APPROVED','REJECTED')),
  messaging_locked boolean NOT NULL DEFAULT true,
  errors        jsonb NOT NULL DEFAULT '[]'::jsonb,
  created_at    timestamptz NOT NULL
);

CREATE TABLE google_oauth_tokens (
  id            smallint PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  refresh_token_enc text NOT NULL,
  calendar_id   text,
  updated_at    timestamptz NOT NULL
);
