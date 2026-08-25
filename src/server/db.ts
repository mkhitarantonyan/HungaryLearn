import { Pool } from 'pg';
import type { PoolClient, QueryResultRow } from 'pg';

export type SubscriptionStatus =
  | 'active'
  | 'past_due'
  | 'canceled'
  | 'incomplete'
  | 'unpaid';

export interface StudentUser {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  subscriptionStatus: SubscriptionStatus;
  subscriptionEnd?: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  isPrivileged?: boolean;
}

export interface ReviewCardState {
  cardId: string;
  lessonNumber: number;
  intervalDays: number;
  easeFactor: number;
  reps: number;
  dueDate: string;
  lastReviewedAt: string | null;
}

export interface StudentProgress {
  userId: string;
  viewedSlides: string[];
  passedQuizzes: number[];
  reviewCards?: Record<string, ReviewCardState>;
  customNotes?: string;
  updatedAt: string;
}

export interface WordOverrideEntry {
  key: string;
  originalText: string;
  customText?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AudioOverrideEntry {
  key: string;
  storagePath: string;
  mimeType: string;
  size: number;
  createdAt: string;
}

export interface ProgressTransactionClient {
  query<Row extends QueryResultRow = QueryResultRow>(
    text: string,
    values?: unknown[]
  ): Promise<{ rows: Row[]; rowCount: number | null }>;
}

export interface ProgressFieldMutation<Result> {
  viewedSlides: string[];
  passedQuizzes: number[];
  customNotes?: string;
  result: Result;
}

export interface ReviewCardsMutation<Result> {
  reviewCards: Record<string, ReviewCardState>;
  result: Result;
}

export interface ProgressMutationResult<Result> {
  progress: StudentProgress;
  result: Result;
}

export interface AppUserRow extends QueryResultRow {
  id: string;
  email: string;
  password_hash: string;
  created_at: Date | string;
  subscription_status: SubscriptionStatus;
  subscription_end: Date | string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  is_privileged: boolean;
}

interface UserProgressRow extends QueryResultRow {
  user_id: string;
  viewed_slides: string[];
  passed_quizzes: number[];
  review_cards: Record<string, ReviewCardState> | null;
  custom_notes: string | null;
  updated_at: Date | string;
}

interface WordOverrideRow extends QueryResultRow {
  key: string;
  original_text: string;
  custom_text: string | null;
  created_at: Date | string;
  updated_at: Date | string;
}

interface AudioOverrideRow extends QueryResultRow {
  key: string;
  storage_path: string;
  mime_type: string;
  size_bytes: number | string;
  created_at: Date | string;
}

type DatabaseClient = Pool | PoolClient;

let sharedPool: Pool | null = null;

function requiredDatabaseUrl(): string {
  const value = process.env.DATABASE_URL?.trim();
  if (!value) {
    throw new Error('DATABASE_URL is required; filesystem persistence is not available');
  }
  return value;
}

export function getDatabasePool(): Pool {
  if (!sharedPool) {
    sharedPool = new Pool({
      connectionString: requiredDatabaseUrl(),
      application_name: 'hungarylearn-server',
      max: 10,
    });
    sharedPool.on('error', (error) => {
      console.error('[Database] Idle PostgreSQL client error:', error);
    });
  }
  return sharedPool;
}

export async function closeDatabase(): Promise<void> {
  if (!sharedPool) return;
  const pool = sharedPool;
  sharedPool = null;
  await pool.end();
}

export async function checkDatabaseConnection(): Promise<void> {
  await getDatabasePool().query('select 1');
}

function iso(value: Date | string): string {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

export function mapStudentUserRow(row: AppUserRow): StudentUser {
  return {
    id: row.id,
    email: row.email,
    passwordHash: row.password_hash,
    createdAt: iso(row.created_at),
    subscriptionStatus: row.subscription_status,
    subscriptionEnd: row.subscription_end ? iso(row.subscription_end) : undefined,
    stripeCustomerId: row.stripe_customer_id ?? undefined,
    stripeSubscriptionId: row.stripe_subscription_id ?? undefined,
    isPrivileged: row.is_privileged,
  };
}

export function mapStudentProgressRow(row: UserProgressRow): StudentProgress {
  return {
    userId: row.user_id,
    viewedSlides: row.viewed_slides ?? [],
    passedQuizzes: row.passed_quizzes ?? [],
    reviewCards: row.review_cards ?? {},
    customNotes: row.custom_notes ?? undefined,
    updatedAt: iso(row.updated_at),
  };
}

function mapWordOverrideRow(row: WordOverrideRow): WordOverrideEntry {
  return {
    key: row.key,
    originalText: row.original_text,
    customText: row.custom_text ?? undefined,
    createdAt: iso(row.created_at),
    updatedAt: iso(row.updated_at),
  };
}

function mapAudioOverrideRow(row: AudioOverrideRow): AudioOverrideEntry {
  return {
    key: row.key,
    storagePath: row.storage_path,
    mimeType: row.mime_type,
    size: Number(row.size_bytes),
    createdAt: iso(row.created_at),
  };
}

function clientOrPool(client?: PoolClient): DatabaseClient {
  return client ?? getDatabasePool();
}

function isUuid(value: string | undefined): value is string {
  return !!value && /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value);
}

export async function findUserByEmail(email: string, client?: PoolClient): Promise<StudentUser | null> {
  const result = await clientOrPool(client).query<AppUserRow>(
    'select * from public.app_users where lower(email) = lower($1) limit 1',
    [email]
  );
  return result.rows[0] ? mapStudentUserRow(result.rows[0]) : null;
}

export async function findUserById(id: string, client?: PoolClient): Promise<StudentUser | null> {
  if (!isUuid(id)) return null;
  const result = await clientOrPool(client).query<AppUserRow>(
    'select * from public.app_users where id = $1 limit 1',
    [id]
  );
  return result.rows[0] ? mapStudentUserRow(result.rows[0]) : null;
}

export async function findUserByStripeCustomerId(
  customerId: string | null | undefined,
  client?: PoolClient
): Promise<StudentUser | null> {
  if (!customerId) return null;
  const result = await clientOrPool(client).query<AppUserRow>(
    'select * from public.app_users where stripe_customer_id = $1 limit 1',
    [customerId]
  );
  return result.rows[0] ? mapStudentUserRow(result.rows[0]) : null;
}

export async function listUsers(): Promise<StudentUser[]> {
  const result = await getDatabasePool().query<AppUserRow>(
    'select * from public.app_users order by created_at asc'
  );
  return result.rows.map(mapStudentUserRow);
}

export interface AdminUserListOptions {
  limit: number;
  offset: number;
  search?: string;
  sort: 'createdAt' | 'email';
  direction: 'asc' | 'desc';
}

export interface AdminUserListResult {
  users: StudentUser[];
  total: number;
}

export async function listUsersForAdmin(
  options: AdminUserListOptions,
  client?: ProgressTransactionClient
): Promise<AdminUserListResult> {
  const database = client ?? getDatabasePool();
  const search = options.search?.trim() || null;
  const orderColumn = options.sort === 'email' ? 'email' : 'created_at';
  const orderDirection = options.direction === 'asc' ? 'asc' : 'desc';
  const values = [search, options.limit, options.offset];
  const [rows, count] = await Promise.all([
    database.query<AppUserRow>(
      `select * from public.app_users
        where ($1::text is null or email ilike '%' || $1 || '%')
        order by ${orderColumn} ${orderDirection}, id asc
        limit $2 offset $3`,
      values
    ),
    database.query<{ count: string } & QueryResultRow>(
      `select count(*)::text as count from public.app_users
        where ($1::text is null or email ilike '%' || $1 || '%')`,
      [search]
    ),
  ]);
  return {
    users: rows.rows.map(mapStudentUserRow),
    total: Number(count.rows[0]?.count ?? 0),
  };
}

export async function updateUserPrivilege(
  id: string,
  privileged: boolean,
  client?: ProgressTransactionClient
): Promise<StudentUser | null> {
  if (!isUuid(id)) return null;
  const result = await (client ?? getDatabasePool()).query<AppUserRow>(
    `update public.app_users
        set is_privileged = $2
      where id = $1
      returning *`,
    [id, privileged]
  );
  return result.rows[0] ? mapStudentUserRow(result.rows[0]) : null;
}

export async function createUserWithSession(
  user: StudentUser,
  session: { token: string; createdAt: Date; expiresAt: Date }
): Promise<boolean> {
  const client = await getDatabasePool().connect();
  try {
    await client.query('begin');
    const inserted = await client.query(
      `insert into public.app_users (
        id, email, password_hash, created_at, subscription_status, subscription_end,
        stripe_customer_id, stripe_subscription_id, is_privileged
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      on conflict do nothing
      returning id`,
      [
        user.id,
        user.email,
        user.passwordHash,
        user.createdAt,
        user.subscriptionStatus,
        user.subscriptionEnd ?? null,
        user.stripeCustomerId ?? null,
        user.stripeSubscriptionId ?? null,
        user.isPrivileged === true,
      ]
    );
    if (inserted.rowCount !== 1) {
      await client.query('rollback');
      return false;
    }
    await client.query(
      `insert into public.user_sessions (token, user_id, created_at, expires_at)
       values ($1, $2, $3, $4)`,
      [session.token, user.id, session.createdAt, session.expiresAt]
    );
    await client.query('commit');
    return true;
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

export async function createUserSession(
  token: string,
  userId: string,
  createdAt: Date,
  expiresAt: Date
): Promise<void> {
  await getDatabasePool().query(
    `insert into public.user_sessions (token, user_id, created_at, expires_at)
     values ($1, $2, $3, $4)`,
    [token, userId, createdAt, expiresAt]
  );
}

export async function createAdminSession(
  token: string,
  createdAt: Date,
  expiresAt: Date
): Promise<void> {
  await getDatabasePool().query(
    `insert into public.admin_sessions (token, created_at, expires_at)
     values ($1, $2, $3)`,
    [token, createdAt, expiresAt]
  );
}

export async function isAdminSessionValid(token: string | undefined): Promise<boolean> {
  if (!isUuid(token)) return false;
  const result = await getDatabasePool().query(
    'select 1 from public.admin_sessions where token = $1 and expires_at > now()',
    [token]
  );
  return result.rowCount === 1;
}

export async function getUserFromSessionToken(token: string | undefined): Promise<StudentUser | null> {
  if (!isUuid(token)) return null;
  const result = await getDatabasePool().query<AppUserRow>(
    `select u.*
       from public.user_sessions s
       join public.app_users u on u.id = s.user_id
      where s.token = $1 and s.expires_at > now()
      limit 1`,
    [token]
  );
  return result.rows[0] ? mapStudentUserRow(result.rows[0]) : null;
}

export async function deleteAdminSession(token: string | undefined): Promise<void> {
  if (!isUuid(token)) return;
  await getDatabasePool().query('delete from public.admin_sessions where token = $1', [token]);
}

export async function deleteUserSession(token: string | undefined): Promise<void> {
  if (!isUuid(token)) return;
  await getDatabasePool().query('delete from public.user_sessions where token = $1', [token]);
}

export async function getUserProgress(userId: string, client?: PoolClient): Promise<StudentProgress | null> {
  if (!isUuid(userId)) return null;
  const result = await clientOrPool(client).query<UserProgressRow>(
    'select * from public.user_progress where user_id = $1 limit 1',
    [userId]
  );
  return result.rows[0] ? mapStudentProgressRow(result.rows[0]) : null;
}

async function withLockedUserProgress<Result>(
  client: ProgressTransactionClient,
  userId: string,
  mutation: (current: StudentProgress) => Promise<ProgressMutationResult<Result>>
): Promise<ProgressMutationResult<Result>> {
  await client.query('begin');
  try {
    await client.query(
      `insert into public.user_progress (
         user_id, viewed_slides, passed_quizzes, review_cards, custom_notes, updated_at
       ) values ($1, array[]::text[], array[]::integer[], '{}'::jsonb, null, now())
       on conflict (user_id) do nothing`,
      [userId]
    );
    const locked = await client.query<UserProgressRow>(
      `select * from public.user_progress
        where user_id = $1
        for update`,
      [userId]
    );
    if (!locked.rows[0]) {
      throw new Error('Failed to lock user progress row');
    }

    const result = await mutation(mapStudentProgressRow(locked.rows[0]));
    await client.query('commit');
    return result;
  } catch (error) {
    await client.query('rollback');
    throw error;
  }
}

export async function mutateUserProgressWithClient<Result>(
  client: ProgressTransactionClient,
  userId: string,
  mutation: (current: StudentProgress) => ProgressFieldMutation<Result>
): Promise<ProgressMutationResult<Result>> {
  return withLockedUserProgress(client, userId, async (current) => {
    const next = mutation(current);
    const updated = await client.query<UserProgressRow>(
      `update public.user_progress set
         viewed_slides = $2,
         passed_quizzes = $3,
         custom_notes = $4,
         updated_at = now()
       where user_id = $1
       returning *`,
      [userId, next.viewedSlides, next.passedQuizzes, next.customNotes ?? null]
    );
    if (!updated.rows[0]) {
      throw new Error('Failed to update user progress row');
    }
    return { progress: mapStudentProgressRow(updated.rows[0]), result: next.result };
  });
}

export async function mutateUserProgress<Result>(
  userId: string,
  mutation: (current: StudentProgress) => ProgressFieldMutation<Result>
): Promise<ProgressMutationResult<Result>> {
  const client = await getDatabasePool().connect();
  try {
    return await mutateUserProgressWithClient(client, userId, mutation);
  } finally {
    client.release();
  }
}

export async function mutateReviewCardsWithClient<Result>(
  client: ProgressTransactionClient,
  userId: string,
  mutation: (current: StudentProgress) => ReviewCardsMutation<Result>
): Promise<ProgressMutationResult<Result>> {
  return withLockedUserProgress(client, userId, async (current) => {
    const next = mutation(current);
    const updated = await client.query<UserProgressRow>(
      `update public.user_progress set
         review_cards = $2::jsonb,
         updated_at = now()
       where user_id = $1
       returning *`,
      [userId, JSON.stringify(next.reviewCards)]
    );
    if (!updated.rows[0]) {
      throw new Error('Failed to update user review cards');
    }
    return { progress: mapStudentProgressRow(updated.rows[0]), result: next.result };
  });
}

export async function mutateReviewCards<Result>(
  userId: string,
  mutation: (current: StudentProgress) => ReviewCardsMutation<Result>
): Promise<ProgressMutationResult<Result>> {
  const client = await getDatabasePool().connect();
  try {
    return await mutateReviewCardsWithClient(client, userId, mutation);
  } finally {
    client.release();
  }
}

export async function saveStudentUser(user: StudentUser, client?: PoolClient): Promise<void> {
  await clientOrPool(client).query(
    `update public.app_users set
       subscription_status = $2,
       subscription_end = $3,
       stripe_customer_id = $4,
       stripe_subscription_id = $5,
       is_privileged = $6
     where id = $1`,
    [
      user.id,
      user.subscriptionStatus,
      user.subscriptionEnd ?? null,
      user.stripeCustomerId ?? null,
      user.stripeSubscriptionId ?? null,
      user.isPrivileged === true,
    ]
  );
}

export async function runStripeEventOnce(
  eventId: string,
  eventType: string,
  handler: (client: PoolClient) => Promise<void>
): Promise<boolean> {
  const client = await getDatabasePool().connect();
  try {
    await client.query('begin');
    const claimed = await client.query(
      `insert into public.processed_stripe_events (event_id, event_type, processed_at)
       values ($1, $2, now())
       on conflict (event_id) do nothing
       returning event_id`,
      [eventId, eventType]
    );
    if (claimed.rowCount !== 1) {
      await client.query('rollback');
      return false;
    }
    await handler(client);
    await client.query('commit');
    return true;
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

export async function listWordOverrides(): Promise<WordOverrideEntry[]> {
  const result = await getDatabasePool().query<WordOverrideRow>(
    'select * from public.word_overrides order by created_at asc'
  );
  return result.rows.map(mapWordOverrideRow);
}

export async function upsertWordOverride(
  key: string,
  originalText: string,
  customText: string | undefined
): Promise<void> {
  await getDatabasePool().query(
    `insert into public.word_overrides (key, original_text, custom_text, created_at, updated_at)
     values ($1, $2, $3, now(), now())
     on conflict (key) do update set
       original_text = excluded.original_text,
       custom_text = excluded.custom_text,
       updated_at = now()`,
    [key, originalText, customText ?? null]
  );
}

export async function deleteWordOverride(key: string): Promise<void> {
  await getDatabasePool().query('delete from public.word_overrides where key = $1', [key]);
}

export async function listAudioOverrides(): Promise<AudioOverrideEntry[]> {
  const result = await getDatabasePool().query<AudioOverrideRow>(
    'select * from public.audio_overrides order by created_at asc'
  );
  return result.rows.map(mapAudioOverrideRow);
}

export async function findAudioOverrideByKey(key: string): Promise<AudioOverrideEntry | null> {
  const result = await getDatabasePool().query<AudioOverrideRow>(
    'select * from public.audio_overrides where key = $1 limit 1',
    [key]
  );
  return result.rows[0] ? mapAudioOverrideRow(result.rows[0]) : null;
}

export async function replaceAudioOverrides(
  keys: string[],
  storagePath: string,
  mimeType: string,
  size: number
): Promise<string[]> {
  const client = await getDatabasePool().connect();
  try {
    await client.query('begin');
    const previous = await client.query<{ storage_path: string } & QueryResultRow>(
      'select distinct storage_path from public.audio_overrides where key = any($1::text[])',
      [keys]
    );
    for (const key of keys) {
      await client.query(
        `insert into public.audio_overrides (key, storage_path, mime_type, size_bytes, created_at)
         values ($1, $2, $3, $4, now())
         on conflict (key) do update set
           storage_path = excluded.storage_path,
           mime_type = excluded.mime_type,
           size_bytes = excluded.size_bytes`,
        [key, storagePath, mimeType, size]
      );
    }
    await client.query('commit');
    return previous.rows.map((row) => row.storage_path);
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

export async function deleteAudioOverride(key: string): Promise<string | null> {
  const result = await getDatabasePool().query<{ storage_path: string } & QueryResultRow>(
    'delete from public.audio_overrides where key = $1 returning storage_path',
    [key]
  );
  return result.rows[0]?.storage_path ?? null;
}

export async function countAudioOverridesByStoragePath(storagePath: string): Promise<number> {
  const result = await getDatabasePool().query<{ count: string } & QueryResultRow>(
    'select count(*)::text as count from public.audio_overrides where storage_path = $1',
    [storagePath]
  );
  return Number(result.rows[0]?.count ?? 0);
}
