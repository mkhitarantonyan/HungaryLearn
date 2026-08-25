-- Canonical PostgreSQL schema for a fresh HungaryLearn deployment.
-- The application talks to PostgreSQL only from the Express server; RLS is
-- enabled without browser policies so Supabase anon/authenticated clients
-- cannot read authentication, progress, or administration data directly.

create table if not exists public.app_users (
  id uuid primary key,
  email text not null,
  password_hash text not null,
  created_at timestamptz not null default now(),
  subscription_status text not null default 'trial'
    check (subscription_status in ('trial', 'active', 'past_due', 'canceled', 'incomplete', 'unpaid')),
  subscription_end timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text,
  is_privileged boolean not null default false
);

create table if not exists public.user_sessions (
  token uuid primary key,
  user_id uuid not null references public.app_users(id) on delete cascade,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null
);

create table if not exists public.admin_sessions (
  token uuid primary key,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null
);

create table if not exists public.user_progress (
  user_id uuid primary key references public.app_users(id) on delete cascade,
  viewed_slides text[] not null default array[]::text[],
  passed_quizzes integer[] not null default array[]::integer[],
  review_cards jsonb not null default '{}'::jsonb,
  custom_notes text,
  updated_at timestamptz not null default now()
);

create table if not exists public.processed_stripe_events (
  event_id text primary key,
  event_type text not null,
  processed_at timestamptz not null default now()
);

create table if not exists public.word_overrides (
  key text primary key,
  original_text text not null,
  custom_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.audio_overrides (
  key text primary key,
  storage_path text not null,
  mime_type text not null,
  size_bytes bigint not null check (size_bytes > 0),
  created_at timestamptz not null default now()
);

create index if not exists user_sessions_user_id_idx
  on public.user_sessions (user_id);
create index if not exists user_sessions_expires_at_idx
  on public.user_sessions (expires_at);
create index if not exists admin_sessions_expires_at_idx
  on public.admin_sessions (expires_at);
create index if not exists app_users_stripe_customer_id_idx
  on public.app_users (stripe_customer_id)
  where stripe_customer_id is not null;
create index if not exists audio_overrides_storage_path_idx
  on public.audio_overrides (storage_path);

alter table public.app_users enable row level security;
alter table public.user_sessions enable row level security;
alter table public.admin_sessions enable row level security;
alter table public.user_progress enable row level security;
alter table public.processed_stripe_events enable row level security;
alter table public.word_overrides enable row level security;
alter table public.audio_overrides enable row level security;

-- This index makes the application's trim/lowercase uniqueness rule safe
-- against concurrent registrations at the database boundary. Before applying
-- to an existing database, resolve duplicate lower(email) values if any.
create unique index if not exists app_users_email_lower_unique_idx
  on public.app_users (lower(email));
