import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import crypto from "crypto";
import Stripe from "stripe";
import fs from "fs";
import { verifyAdminCredentials } from './src/utils/adminAuth';
import { mergeCompletedSlides } from './src/utils/progressMerge';
import { isSubscriptionValid } from './src/utils/subscriptionValidity';
import { isValidAdminSession as isValidAdminSessionPure } from './src/utils/adminSessions';
import { gradeCard } from './src/utils/spacedRepetition';
import type { ReviewGrade } from './src/types';

dotenv.config();

let stripeClient: Stripe | null = null;
function getStripe(): Stripe | null {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (key && key.trim()) {
      stripeClient = new Stripe(key);
    }
  }
  return stripeClient;
}

// Active server sessions store
interface SessionData {
  token: string;
  createdAt: number;
  expiresAt: number;
}

interface UserSessionData {
  token: string;
  userId: string;
  createdAt: number;
  expiresAt: number;
}

interface StudentUser {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: string;
  subscriptionStatus: 'trial' | 'active' | 'past_due' | 'canceled' | 'incomplete' | 'unpaid';
  subscriptionEnd?: string;
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
  // Full access without payment, granted by the administrator.
  isPrivileged?: boolean;
}

interface ReviewCardState {
  cardId: string;
  lessonNumber: number;
  intervalDays: number;
  easeFactor: number;
  reps: number;
  dueDate: string;
  lastReviewedAt: string | null;
}

interface StudentProgress {
  userId: string;
  viewedSlides: string[];
  passedQuizzes: number[];
  reviewCards?: Record<string, ReviewCardState>;
  customNotes?: string;
  updatedAt: string;
}

const activeAdminSessions = new Map<string, SessionData>();
const activeUserSessions = new Map<string, UserSessionData>();
const registeredUsersMap = new Map<string, StudentUser>(); // email -> StudentUser
const usersByIdMap = new Map<string, StudentUser>(); // id -> StudentUser
const userProgressMap = new Map<string, StudentProgress>(); // userId -> StudentProgress
const audioOverridesMap = new Map<string, AudioOverrideEntry>(); // normalized key -> audio file record
const wordOverridesMap = new Map<string, WordOverrideEntry>(); // normalized word -> override

const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days for users
const ADMIN_SESSION_DURATION_MS = 10 * 60 * 1000; // 10 minutes for admin sessions
// NOTE: admin sessions must share ONE duration constant so the server-side
// session lifetime matches the browser cookie maxAge. Otherwise the browser
// keeps a "valid-looking" cookie that the server rejects.

// Persistence layer
const DB_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DB_DIR, "db.json");
const DB_BACKUP_FILE = DB_FILE + ".bak";
const AUDIO_DIR = path.join(DB_DIR, "audio");

// A stored audio file record. The actual bytes live on disk under AUDIO_DIR.
interface AudioOverrideEntry {
  key: string;
  fileName: string;
  mimeType: string;
  size: number;
  createdAt: string;
}

// A text override for a word/phrase. Audio, if any, is stored separately under
// the word text keys via audioOverridesMap.
interface WordOverrideEntry {
  key: string;
  originalText: string;
  customText?: string;
  createdAt: string;
  updatedAt: string;
}

interface ProcessedStripeEvent {
  eventId: string;
  type: string;
  processedAt: string;
}

interface DatabaseSchema {
  users: StudentUser[];
  userSessions: UserSessionData[];
  adminSessions: SessionData[];
  userProgress: StudentProgress[];
  audioOverrides?: AudioOverrideEntry[];
  wordOverrides?: WordOverrideEntry[];
  processedStripeEvents?: ProcessedStripeEvent[];
}

const processedStripeEventIds = new Map<string, ProcessedStripeEvent>();
const LESSON_COUNT = 28;
const QUIZ_PASS_THRESHOLD = 0.8;

function ensureDbDir() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

function ensureAudioDir() {
  ensureDbDir();
  if (!fs.existsSync(AUDIO_DIR)) {
    fs.mkdirSync(AUDIO_DIR, { recursive: true });
  }
}

function readDatabaseRaw(): string | null {
  if (fs.existsSync(DB_FILE)) {
    try {
      return fs.readFileSync(DB_FILE, "utf-8");
    } catch (err) {
      console.error("[Persistence] Failed to read db.json:", err);
    }
  }
  // Fall back to the last known-good backup if the main file is missing/corrupt.
  if (fs.existsSync(DB_BACKUP_FILE)) {
    try {
      console.warn("[Persistence] Falling back to db.json.bak backup");
      return fs.readFileSync(DB_BACKUP_FILE, "utf-8");
    } catch (err) {
      console.error("[Persistence] Failed to read db.json.bak:", err);
    }
  }
  return null;
}

function loadDatabase() {
  ensureDbDir();
  ensureAudioDir();
  const raw = readDatabaseRaw();
  if (!raw) return;

  try {
    const data: DatabaseSchema = JSON.parse(raw);

    registeredUsersMap.clear();
    usersByIdMap.clear();
    activeUserSessions.clear();
    activeAdminSessions.clear();
    userProgressMap.clear();
    audioOverridesMap.clear();
    wordOverridesMap.clear();
    processedStripeEventIds.clear();

    if (Array.isArray(data.users)) {
      data.users.forEach((u) => {
        registeredUsersMap.set(u.email.toLowerCase(), u);
        usersByIdMap.set(u.id, u);
      });
    }
    if (Array.isArray(data.userSessions)) {
      data.userSessions.filter(s => s.expiresAt > Date.now()).forEach((s) => activeUserSessions.set(s.token, s));
    }
    if (Array.isArray(data.adminSessions)) {
      data.adminSessions.filter(s => s.expiresAt > Date.now()).forEach((s) => activeAdminSessions.set(s.token, s));
    }
    if (Array.isArray(data.userProgress)) {
      data.userProgress.forEach((p) => userProgressMap.set(p.userId, p));
    }
    if (Array.isArray(data.audioOverrides)) {
      data.audioOverrides.forEach((e) => audioOverridesMap.set(e.key, e));
    }
    if (Array.isArray(data.wordOverrides)) {
      data.wordOverrides.forEach((e) => wordOverridesMap.set(e.key, e));
    }
    if (Array.isArray(data.processedStripeEvents)) {
      data.processedStripeEvents.forEach((e) => processedStripeEventIds.set(e.eventId, e));
    }
    console.log(`[Persistence] Restored ${registeredUsersMap.size} users, ${activeUserSessions.size} sessions, ${userProgressMap.size} progress entries, ${audioOverridesMap.size} audio overrides, ${wordOverridesMap.size} word overrides, ${processedStripeEventIds.size} Stripe events from ${DB_FILE}`);
  } catch (err) {
    console.error("[Persistence] Failed to parse db.json:", err);
  }
}

let _lastBackupTime = 0;
const BACKUP_INTERVAL_MS = 60 * 60 * 1000; // keep a rolling backup at most once per hour

function maybeBackupDatabase() {
  const now = Date.now();
  if (now - _lastBackupTime < BACKUP_INTERVAL_MS) return;
  if (!fs.existsSync(DB_FILE)) return;
  try {
    fs.copyFileSync(DB_FILE, DB_BACKUP_FILE);
    _lastBackupTime = now;
  } catch (err) {
    console.error("[Persistence] Failed to backup db.json:", err);
  }
}

function saveDatabase() {
  try {
    ensureDbDir();
    const data: DatabaseSchema = {
      users: Array.from(registeredUsersMap.values()),
      userSessions: Array.from(activeUserSessions.values()),
      adminSessions: Array.from(activeAdminSessions.values()),
      userProgress: Array.from(userProgressMap.values()),
      audioOverrides: Array.from(audioOverridesMap.values()),
      wordOverrides: Array.from(wordOverridesMap.values()),
      processedStripeEvents: Array.from(processedStripeEventIds.values()),
    };

    // Atomic write: write to a temp file first, then rename over the real file.
    // This prevents a corrupted db.json if the process dies mid-write.
    const tmpFile = DB_FILE + ".tmp";
    fs.writeFileSync(tmpFile, JSON.stringify(data, null, 2), "utf-8");
    maybeBackupDatabase();
    fs.renameSync(tmpFile, DB_FILE);
  } catch (err) {
    console.error("[Persistence] Failed to save db.json:", err);
  }
}

let _saveTimer: ReturnType<typeof setTimeout> | null = null;
function saveDatabaseSoon(): void {
  if (_saveTimer) clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => { saveDatabase(); _saveTimer = null; }, 500);
}

function shutdown() {
  console.log("[Persistence] Shutting down, flushing pending writes...");
  if (_saveTimer) {
    clearTimeout(_saveTimer);
    _saveTimer = null;
  }
  try {
    saveDatabase();
  } catch (err) {
    console.error("[Persistence] Failed to flush db.json on shutdown:", err);
  }
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

// Audio file helpers
function extForMime(mimeType: string): string {
  const extMap: Record<string, string> = {
    'audio/mpeg': '.mp3',
    'audio/mp3': '.mp3',
    'audio/wav': '.wav',
    'audio/x-wav': '.wav',
    'audio/webm': '.webm',
    'audio/ogg': '.ogg',
    'audio/mp4': '.m4a',
    'audio/x-m4a': '.m4a',
  };
  return extMap[mimeType] || '';
}

// Stores one audio blob under one or more normalized keys (shared file on disk).
function persistAudioDataUrl(keys: string[], dataUrl: string): { ok: boolean; url?: string; error?: string } {
  try {
    const match = /^data:([^;,]+);base64,(.+)$/s.exec(dataUrl);
    if (!match) {
      return { ok: false, error: 'Неподдерживаемый формат Data URL (ожидается base64)' };
    }
    const mimeType = match[1];
    const buffer = Buffer.from(match[2], 'base64');
    if (buffer.length === 0) {
      return { ok: false, error: 'Пустой аудиофайл' };
    }

    const allowed = new Map<string, string>([
      ['audio/mpeg', '.mp3'],
      ['audio/mp3', '.mp3'],
      ['audio/wav', '.wav'],
      ['audio/x-wav', '.wav'],
      ['audio/webm', '.webm'],
      ['audio/ogg', '.ogg'],
      ['audio/mp4', '.m4a'],
      ['audio/x-m4a', '.m4a'],
    ]);
    const extension = allowed.get(mimeType);
    if (!extension) {
      return { ok: false, error: 'Поддерживаются только MP3, WAV, WebM, OGG и M4A' };
    }

    const MAX_AUDIO_BYTES = 10 * 1024 * 1024;
    if (buffer.length > MAX_AUDIO_BYTES) {
      return { ok: false, error: 'Аудиофайл слишком большой (макс. 10 МБ)' };
    }

    ensureAudioDir();
    const fileName = `${crypto.randomUUID()}${extension}`;
    fs.writeFileSync(path.join(AUDIO_DIR, fileName), buffer);

    const now = new Date().toISOString();
    const uniqueKeys = new Set(keys.map((k) => String(k).trim().toLowerCase()).filter(Boolean));
    for (const key of uniqueKeys) {
      const existing = audioOverridesMap.get(key);
      audioOverridesMap.set(key, {
        key,
        fileName,
        mimeType,
        size: buffer.length,
        createdAt: existing?.createdAt ?? now,
      });
    }
    return { ok: true, url: `/api/audio-file/${encodeURIComponent(fileName)}` };
  } catch (err) {
    console.error("[Persistence] Failed to store audio file:", err);
    return { ok: false, error: 'Не удалось сохранить аудиофайл на сервере' };
  }
}

function removeAudioFileIfUnreferenced(fileName: string): void {
  for (const entry of audioOverridesMap.values()) {
    if (entry.fileName === fileName) return;
  }
  try {
    fs.unlinkSync(path.join(AUDIO_DIR, fileName));
  } catch (err) {
    console.warn("[Persistence] Could not remove audio file:", fileName, err);
  }
}

function deleteAudioOverride(key: string): void {
  const existing = audioOverridesMap.get(key);
  if (!existing) return;
  audioOverridesMap.delete(key);
  removeAudioFileIfUnreferenced(existing.fileName);
}

function createAdminSession(): string {
  const token = crypto.randomUUID();
  const now = Date.now();
  activeAdminSessions.set(token, {
    token,
    createdAt: now,
    expiresAt: now + ADMIN_SESSION_DURATION_MS,
  });
  saveDatabase();
  return token;
}

function createUserSession(userId: string): string {
  const token = crypto.randomUUID();
  const now = Date.now();
  activeUserSessions.set(token, {
    token,
    userId,
    createdAt: now,
    expiresAt: now + SESSION_DURATION_MS,
  });
  saveDatabase();
  return token;
}

function isValidAdminSession(token: string | undefined): boolean {
  const hadSessionBefore = !!token && activeAdminSessions.has(token);
  const valid = isValidAdminSessionPure(token, activeAdminSessions);
  if (!valid && hadSessionBefore) {
    saveDatabaseSoon();
  }
  return valid;
}

function getUserFromSessionToken(token: string | undefined): StudentUser | null {
  if (!token) return null;
  const session = activeUserSessions.get(token);
  if (!session) return null;
  if (Date.now() > session.expiresAt) {
    activeUserSessions.delete(token);
    saveDatabaseSoon();
    return null;
  }
  return usersByIdMap.get(session.userId) || null;
}

function deleteAdminSession(token: string | undefined): void {
  if (token) {
    activeAdminSessions.delete(token);
    saveDatabase();
  }
}

function deleteUserSession(token: string | undefined): void {
  if (token) {
    activeUserSessions.delete(token);
    saveDatabase();
  }
}

function findUserByStripeCustomerId(customerId: string | null | undefined): StudentUser | null {
  if (!customerId) return null;
  for (const user of registeredUsersMap.values()) {
    if (user.stripeCustomerId === customerId) return user;
  }
  return null;
}

function extractCompletedLessonNumbers(completedSlides: string[]): number[] {
  const numbers = new Set<number>();
  for (const slideId of completedSlides) {
    const match = slideId.match(/^l(\d+)_/);
    if (match) numbers.add(parseInt(match[1], 10));
  }
  return Array.from(numbers);
}

function countDueCardsFromProgress(
  reviewCards: Record<string, ReviewCardState>,
  completedLessons: number[]
): number {
  const now = Date.now();
  return Object.values(reviewCards).filter((state) => {
    return completedLessons.includes(state.lessonNumber) && new Date(state.dueDate).getTime() <= now;
  }).length;
}

async function startServer() {
  if (process.env.NODE_ENV === 'production' && !process.env.ADMIN_PASSWORD_HASH?.trim()) {
    throw new Error('ADMIN_PASSWORD_HASH is required in production');
  }

  // Load persisted database records from disk on startup
  loadDatabase();

  const app = express();
  const PORT = 3000;

  // Stripe Webhook Raw Body Handler (must be registered before express.json)
  app.post("/api/webhook/stripe", express.raw({ type: 'application/json' }), async (req, res) => {
    const stripe = getStripe();
    if (!stripe) {
      return res.status(400).send('Stripe не настроен (отсутствует STRIPE_SECRET_KEY)');
    }

    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error('[Stripe Webhook] STRIPE_WEBHOOK_SECRET не задан — вебхук отклонён из соображений безопасности');
      return res.status(503).send('Webhook secret not configured');
    }
    if (!sig) {
      return res.status(400).send('Missing stripe-signature header');
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig as string, webhookSecret);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`Stripe Webhook Error: ${message}`);
      return res.status(400).send(`Webhook Error: ${message}`);
    }

    const getStripeCustomerId = (customer: unknown): string | null => {
      if (typeof customer === 'string') return customer;
      if (customer && typeof customer === 'object' && 'id' in customer) {
        return (customer as { id: string }).id;
      }
      return null;
    };

    // Extend subscription by one month relative to the current (future) end date
    const extendSubscriptionEnd = (user: StudentUser): void => {
      const base = user.subscriptionEnd && new Date(user.subscriptionEnd).getTime() > Date.now()
        ? new Date(user.subscriptionEnd)
        : new Date();
      const nextMonth = new Date(base);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      user.subscriptionStatus = 'active';
      user.subscriptionEnd = nextMonth.toISOString();
    };

    const markStripeEventProcessed = (event: Stripe.Event): void => {
      processedStripeEventIds.set(event.id, {
        eventId: event.id,
        type: event.type,
        processedAt: new Date().toISOString(),
      });
    };

    if (processedStripeEventIds.has(event.id)) {
      return res.json({ received: true, duplicate: true });
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.client_reference_id;
      const customerEmail = session.customer_email;

      let userToUpgrade: StudentUser | undefined;
      if (userId) {
        userToUpgrade = usersByIdMap.get(userId);
      }
      if (!userToUpgrade && customerEmail) {
        userToUpgrade = registeredUsersMap.get(customerEmail.toLowerCase());
      }

      if (userToUpgrade) {
        const customerId = getStripeCustomerId(session.customer);
        if (customerId) userToUpgrade.stripeCustomerId = customerId;
        const subscriptionId = typeof session.subscription === 'string' ? session.subscription : null;
        if (subscriptionId) userToUpgrade.stripeSubscriptionId = subscriptionId;

        if (subscriptionId) {
          try {
            const subscription = await stripe.subscriptions.retrieve(subscriptionId);
            userToUpgrade.subscriptionStatus = 'active';
            userToUpgrade.subscriptionEnd = new Date(subscription.current_period_end * 1000).toISOString();
          } catch (err) {
            console.error('[Stripe Webhook] Failed to retrieve subscription for checkout.session.completed:', err);
            extendSubscriptionEnd(userToUpgrade);
          }
        } else {
          extendSubscriptionEnd(userToUpgrade);
        }

        registeredUsersMap.set(userToUpgrade.email, userToUpgrade);
        usersByIdMap.set(userToUpgrade.id, userToUpgrade);
        saveDatabase();
        markStripeEventProcessed(event);
        console.log(`[Stripe Webhook] Успешно активирована подписка для ${userToUpgrade.email}`);
      }
    } else if (event.type === 'customer.subscription.deleted') {
      const subscription = event.data.object as Stripe.Subscription;
      const user = findUserByStripeCustomerId(getStripeCustomerId(subscription.customer));
      if (user) {
        user.subscriptionStatus = 'canceled';
        user.subscriptionEnd = new Date().toISOString();
        registeredUsersMap.set(user.email, user);
        usersByIdMap.set(user.id, user);
        saveDatabase();
        markStripeEventProcessed(event);
        console.log(`[Stripe Webhook] Подписка отменена для ${user.email}`);
      }
    } else if (event.type === 'invoice.payment_succeeded') {
      const invoice = event.data.object as Stripe.Invoice;
      if (invoice.billing_reason === 'subscription_cycle') {
        const user = findUserByStripeCustomerId(getStripeCustomerId(invoice.customer));
        if (user) {
          const periodEnd = invoice.lines?.data?.[0]?.period?.end;
          if (periodEnd) {
            user.subscriptionStatus = 'active';
            user.subscriptionEnd = new Date(periodEnd * 1000).toISOString();
          } else {
            extendSubscriptionEnd(user);
          }
          registeredUsersMap.set(user.email, user);
          usersByIdMap.set(user.id, user);
          saveDatabase();
          markStripeEventProcessed(event);
          console.log(`[Stripe Webhook] Платёж подтверждён — подписка продлена для ${user.email}`);
        }
      }
    } else if (event.type === 'invoice.payment_failed') {
      const invoice = event.data.object as Stripe.Invoice;
      const user = findUserByStripeCustomerId(getStripeCustomerId(invoice.customer));
      if (user) {
        user.subscriptionStatus = 'past_due';
        registeredUsersMap.set(user.email, user);
        usersByIdMap.set(user.id, user);
        saveDatabase();
        markStripeEventProcessed(event);
        console.log(`[Stripe Webhook] Платёж не прошёл — подписка past_due для ${user.email}`);
      }
    }

    return res.json({ received: true });
  });

  app.use(express.json({ limit: '512kb' }));
  app.use(cookieParser());

  app.use((_req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Permissions-Policy', 'microphone=(self)');
    if (process.env.NODE_ENV === 'production') {
      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    }
    next();
  });

  // Rate limiter for admin login endpoint to prevent brute-force attacks
  const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per window
    message: { success: false, message: 'Слишком много попыток входа. Попробуйте снова через 15 минут.' },
    standardHeaders: true,
    legacyHeaders: false,
  });

  // Helper to extract session token from cookies or Authorization header
  const getSessionTokenFromReq = (req: express.Request): string | undefined => {
    return req.cookies?.admin_session || req.headers.authorization?.replace('Bearer ', '');
  };

  // API endpoint for admin session verification
  app.get("/api/admin/verify", (req, res) => {
    const token = getSessionTokenFromReq(req);
    if (isValidAdminSession(token)) {
      return res.json({ success: true, isAdmin: true });
    }
    return res.status(401).json({ success: false, isAdmin: false, message: 'Сессия недействительна или истекла' });
  });

  // API endpoint for admin login verification (server-side check with HTTP-only cookie session)
  app.post("/api/admin/login", loginLimiter, async (req, res) => {
    const { username, password } = req.body || {};

    const adminUser = process.env.ADMIN_USERNAME?.trim() || 'admin';
    const adminPassHash = process.env.ADMIN_PASSWORD_HASH?.trim();
    const adminPass = process.env.ADMIN_PASSWORD?.trim();

    if (!adminPassHash && !adminPass) {
      return res.status(503).json({
        success: false,
        message: 'Вход отключен: задайте ADMIN_PASSWORD или ADMIN_PASSWORD_HASH в .env',
      });
    }

    const isValidPassword = await verifyAdminCredentials({
      username,
      password,
      adminUsername: adminUser,
      adminPassword: adminPass,
      adminPasswordHash: adminPassHash,
    });

    if (!isValidPassword) {
      return res.status(401).json({ success: false, message: 'Неверный логин или пароль администратора' });
    }

    const sessionToken = createAdminSession();

    res.cookie('admin_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: ADMIN_SESSION_DURATION_MS,
    });

    return res.json({
      success: true,
      message: 'Успешный вход в режим администратора',
    });
  });

  // API endpoint for admin logout
  app.post("/api/admin/logout", (req, res) => {
    const token = getSessionTokenFromReq(req);
    deleteAdminSession(token);
    res.clearCookie('admin_session');
    return res.json({ success: true, message: 'Сессия завершена' });
  });

  // ================= STUDENT USER API ROUTES =================

  // Helper to extract user token from httpOnly cookie or Authorization Bearer header (supports mobile apps & REST clients)
  const getUserTokenFromReq = (req: express.Request): string | undefined => {
    return req.cookies?.user_session || req.headers.authorization?.replace('Bearer ', '');
  };



  // Strict email regex validation
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Auth rate limiter
  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { success: false, message: 'Слишком много попыток. Попробуйте через 15 минут.' },
    standardHeaders: true,
    legacyHeaders: false,
  });

  // Student User Registration
  app.post("/api/auth/register", authLimiter, async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({ success: false, message: 'Укажите валидный адрес электронной почты (например, user@domain.com)' });
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
      return res.status(400).json({ success: false, message: 'Пароль должен содержать минимум 6 символов' });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Anti-enumeration: if the e-mail is already registered we do NOT reveal it.
    // Return the same 200 success response shape as a real registration, but
    // without creating a duplicate account or issuing a session. The user is
    // expected to log in with their existing credentials. This way an attacker
    // cannot distinguish "e-mail already taken" from "account created" by status
    // code, success flag, or response timing alone.
    if (registeredUsersMap.has(normalizedEmail)) {
      return res.json({
        success: true,
        message: 'Если этот e-mail ещё не зарегистрирован, аккаунт создан. Если у вас уже есть аккаунт — войдите с вашим паролем.',
      });
    }

    try {
      const passwordHash = await bcrypt.hash(password, 10);
      const userId = crypto.randomUUID();
      const newStudent: StudentUser = {
        id: userId,
        email: normalizedEmail,
        passwordHash,
        createdAt: new Date().toISOString(),
        subscriptionStatus: 'trial',
        subscriptionEnd: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days trial
      };

      registeredUsersMap.set(normalizedEmail, newStudent);
      usersByIdMap.set(userId, newStudent);

      const sessionToken = createUserSession(userId);

      res.cookie('user_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: SESSION_DURATION_MS,
      });

      return res.json({
        success: true,
        user: {
          id: newStudent.id,
          email: newStudent.email,
          createdAt: newStudent.createdAt,
          subscriptionStatus: newStudent.subscriptionStatus,
          subscriptionEnd: newStudent.subscriptionEnd,
          isPrivileged: newStudent.isPrivileged === true,
        },
        message: 'Регистрация прошла успешно!',
      });
    } catch (err) {
      console.error('Registration error:', err);
      return res.status(500).json({ success: false, message: 'Ошибка при создании аккаунта' });
    }
  });

  // Student User Login
  app.post("/api/auth/login", authLimiter, async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Заполните e-mail и пароль' });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const user = registeredUsersMap.get(normalizedEmail);

    // Anti-enumeration: identical error message whether the account exists or not,
    // so an attacker cannot probe which e-mails are registered.
    if (!user) {
      return res.status(401).json({ success: false, message: 'Неверный e-mail или пароль' });
    }

    const isMatch = await bcrypt.compare(String(password), user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Неверный e-mail или пароль' });
    }

    const sessionToken = createUserSession(user.id);

    res.cookie('user_session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: SESSION_DURATION_MS,
    });

    return res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        subscriptionStatus: user.subscriptionStatus,
        subscriptionEnd: user.subscriptionEnd,
        isPrivileged: user.isPrivileged === true,
      },
      message: 'Успешный вход!',
    });
  });

  // Get current student user session info
  app.get("/api/auth/me", (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Сессия истекла или не авторизована' });
    }

    const progress = userProgressMap.get(user.id) || {
      userId: user.id,
      viewedSlides: [],
      passedQuizzes: [],
      updatedAt: new Date().toISOString(),
    };
    return res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        subscriptionStatus: user.subscriptionStatus,
        subscriptionEnd: user.subscriptionEnd,
        isPrivileged: user.isPrivileged === true,
      },
      progress,
    });
  });

  // Student User Logout
  app.post("/api/auth/logout", (req, res) => {
    const token = getUserTokenFromReq(req);
    deleteUserSession(token);
    res.clearCookie('user_session');
    return res.json({ success: true, message: 'Вышли из профиля' });
  });

  // Get user progress
  app.get("/api/user/progress", (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация' });
    }

    const progress = userProgressMap.get(user.id) || {
      userId: user.id,
      viewedSlides: [],
      passedQuizzes: [],
      updatedAt: new Date().toISOString(),
    };

    return res.json({ success: true, progress });
  });

  app.post("/api/user/progress", (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация' });
    }

    if (!isSubscriptionValid(user)) {
      return res.status(403).json({
        success: false,
        message: 'Срок действия пробного периода или подписки истек. Оформите подписку для сохранения прогресса.',
      });
    }

    const { viewedSlides, customNotes, quiz, passedQuizLessonNumber } = req.body || {};
    if (typeof passedQuizLessonNumber === 'number') {
      return res.status(400).json({
        success: false,
        message: 'Используйте quiz: { lessonNumber, score, total } вместо passedQuizLessonNumber',
      });
    }

    const existing = userProgressMap.get(user.id);
    const incomingSlides = Array.isArray(viewedSlides) ? viewedSlides : [];
    const mergedSlides = mergeCompletedSlides(existing?.viewedSlides ?? [], incomingSlides);

    let mergedQuizzes = existing?.passedQuizzes ?? [];

    if (quiz && typeof quiz === 'object') {
      const { lessonNumber, score, total } = quiz;
      const lessonExists = typeof lessonNumber === 'number'
        && lessonNumber >= 1
        && lessonNumber <= LESSON_COUNT;

      if (!lessonExists) {
        return res.status(400).json({ success: false, message: 'Неизвестный урок' });
      }

      if (
        typeof score === 'number' &&
        typeof total === 'number' &&
        total > 0 &&
        score >= 0 &&
        score <= total &&
        score / total >= QUIZ_PASS_THRESHOLD
      ) {
        mergedQuizzes = Array.from(new Set([...mergedQuizzes, lessonNumber]));
      }
    }

    const progress: StudentProgress = {
      userId: user.id,
      viewedSlides: mergedSlides,
      passedQuizzes: mergedQuizzes,
      reviewCards: existing?.reviewCards,
      customNotes: typeof customNotes === 'string' ? customNotes : existing?.customNotes,
      updatedAt: new Date().toISOString(),
    };

    userProgressMap.set(user.id, progress);
    saveDatabase();
    return res.json({ success: true, progress });
  });

  app.post("/api/user/review/grade", (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация' });
    }

    const { cardId, grade } = req.body as {
      cardId?: string;
      grade?: ReviewGrade;
    };

    if (!cardId || !grade) {
      return res.status(400).json({ success: false, message: 'cardId и grade обязательны' });
    }

    const validGrades: ReviewGrade[] = ['again', 'hard', 'good', 'easy'];
    if (!validGrades.includes(grade)) {
      return res.status(400).json({ success: false, message: 'Недопустимое значение grade' });
    }

    const existing = userProgressMap.get(user.id);
    const existingCards = existing?.reviewCards ?? {};
    const existingState = existingCards[cardId];

    if (!existingState) {
      return res.status(400).json({ success: false, message: 'Карточка не найдена' });
    }

    const nextState = gradeCard(existingState, grade);
    const reviewCards = { ...existingCards, [cardId]: nextState };
    const progress: StudentProgress = {
      userId: user.id,
      viewedSlides: existing?.viewedSlides ?? [],
      passedQuizzes: existing?.passedQuizzes ?? [],
      reviewCards,
      customNotes: existing?.customNotes,
      updatedAt: new Date().toISOString(),
    };

    userProgressMap.set(user.id, progress);
    saveDatabaseSoon();

    return res.json({ success: true, nextState });
  });

  app.get("/api/user/review/due-count", (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация' });
    }

    const progress = userProgressMap.get(user.id);
    const reviewCards = progress?.reviewCards ?? {};
    const completedLessons = extractCompletedLessonNumbers(progress?.viewedSlides ?? []);
    const dueCount = countDueCardsFromProgress(reviewCards, completedLessons);

    return res.json({ success: true, dueCount });
  });

  // Create Stripe Checkout Session
  app.post("/api/user/create-checkout-session", async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация' });
    }

    const stripe = getStripe();
    if (!stripe) {
      return res.status(503).json({
        success: false,
        stripeConfigured: false,
        message: 'Оплата временно недоступна: в .env не указан STRIPE_SECRET_KEY. Пожалуйста, укажите ключи Stripe в настройках.',
      });
    }

    try {
      // NEVER trust the Host header for redirect URLs — an attacker controlling
      // Host / X-Forwarded-Host could redirect users to a phishing site after
      // payment. APP_URL is the only trusted source; in production it is required.
      const rawAppUrl = process.env.APP_URL?.trim();
      let appUrl: string;
      if (rawAppUrl) {
        appUrl = rawAppUrl.replace(/\/+$/, '');
      } else if (process.env.NODE_ENV === 'production') {
        return res.status(500).json({
          success: false,
          message: 'Сервер не настроен: укажите APP_URL в .env для адресов возврата после оплаты.',
        });
      } else {
        appUrl = `http://localhost:${PORT}`;
      }
      const priceId = process.env.STRIPE_PRICE_ID;

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          priceId
            ? { price: priceId, quantity: 1 }
            : {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: 'Премиум подписка Magyar Курс',
                    description: 'Полный доступ к интерактивным урокам и аудио-материалам венгерского языка',
                  },
                  unit_amount: 999, // $9.99
                  recurring: { interval: 'month' },
                },
                quantity: 1,
              },
        ],
        mode: 'subscription',
        customer_email: user.email,
        client_reference_id: user.id,
        success_url: `${appUrl}/?payment=success`,
        cancel_url: `${appUrl}/?payment=cancel`,
      });

      return res.json({
        success: true,
        stripeConfigured: true,
        url: session.url,
      });
    } catch (err) {
      console.error('[Stripe Checkout Error]', err);
      return res.status(500).json({
        success: false,
        message: 'Не удалось создать платёжную сессию. Попробуйте ещё раз.',
      });
    }
  });

  // Activate / Upgrade Subscription (Requires Stripe Session verification in production)
  app.post("/api/user/subscribe", async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация' });
    }

    const stripe = getStripe();
    if (stripe) {
      // If Stripe is configured, force redirect through create-checkout-session
      return res.status(400).json({
        success: false,
        useStripeCheckout: true,
        message: 'Для оформления подписки используйте эндпоинт /api/user/create-checkout-session',
      });
    }

    // Demo/Development fallback only if Stripe is NOT configured
    return res.status(503).json({
      success: false,
      stripeConfigured: false,
      message: 'Платёжная система не настроена. Добавьте STRIPE_SECRET_KEY в файл .env для приёма реальных платежей.',
    });
  });

  // ================= GLOBAL ADMIN-CONTENT OVERRIDES =================
  // Custom words and audio uploaded by the admin are stored on the server and
  // served to ALL users (not just the browser where the admin edited them).

  const isAdminRequest = (req: express.Request): boolean => {
    return isValidAdminSession(getSessionTokenFromReq(req));
  };

  // Public: current global audio registry — clients fetch this on startup
  app.get("/api/audio-registry", (req, res) => {
    const audio: Record<string, { url: string; mimeType: string; size: number }> = {};
    for (const entry of audioOverridesMap.values()) {
      audio[entry.key] = {
        url: `/api/audio-file/${encodeURIComponent(entry.fileName)}`,
        mimeType: entry.mimeType,
        size: entry.size,
      };
    }
    return res.json({ success: true, audio });
  });

  // Public: audio file bytes
  app.get("/api/audio-file/:fileName", (req, res) => {
    const fileName = req.params.fileName;
    // Resolve the mime type from the override record for this file
    let mimeType = 'application/octet-stream';
    for (const entry of audioOverridesMap.values()) {
      if (entry.fileName === fileName) {
        mimeType = entry.mimeType;
        break;
      }
    }
    const filePath = path.join(AUDIO_DIR, path.basename(fileName));
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('Audio file not found');
    }
    res.setHeader('Content-Type', mimeType);
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    return res.sendFile(filePath);
  });

  // Admin: upload audio under one or more keys (e.g. all slide candidate keys)
  app.post("/api/admin/audio", express.json({ limit: '10mb' }), (req, res) => {
    if (!isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const { keys, dataUrl } = req.body || {};
    if (!Array.isArray(keys) || keys.length === 0 || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:')) {
      return res.status(400).json({ success: false, message: 'Поля keys (массив) и dataUrl (Data URL) обязательны' });
    }
    const result = persistAudioDataUrl(keys, dataUrl);
    if (!result.ok) {
      return res.status(400).json({ success: false, message: result.error });
    }
    saveDatabase();
    return res.json({ success: true, url: result.url });
  });

  // Admin: remove audio override for a key
  app.delete("/api/admin/audio/:key", (req, res) => {
    if (!isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const key = String(req.params.key).trim().toLowerCase();
    deleteAudioOverride(key);
    saveDatabase();
    return res.json({ success: true });
  });

  // Public: current global word overrides — clients fetch these on startup
  app.get("/api/word-overrides", (req, res) => {
    const overrides = Array.from(wordOverridesMap.values()).map((e) => ({
      originalText: e.originalText,
      customText: e.customText,
    }));
    return res.json({ success: true, overrides });
  });

  // Admin: upsert a word override (custom display text)
  app.post("/api/admin/word-overrides", (req, res) => {
    if (!isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const { originalText, customText } = req.body || {};
    if (typeof originalText !== 'string' || !originalText.trim()) {
      return res.status(400).json({ success: false, message: 'originalText обязателен' });
    }
    const key = originalText.trim().toLowerCase();
    const trimmedCustom = typeof customText === 'string' && customText.trim() !== ''
      ? customText.trim()
      : undefined;
    const now = new Date().toISOString();
    const existing = wordOverridesMap.get(key);
    wordOverridesMap.set(key, {
      key,
      originalText: originalText.trim(),
      customText: trimmedCustom,
      createdAt: existing?.createdAt ?? now,
      updatedAt: now,
    });
    saveDatabase();
    return res.json({ success: true });
  });

  // Admin: remove a word override
  app.delete("/api/admin/word-overrides/:key", (req, res) => {
    if (!isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const key = String(req.params.key).trim().toLowerCase();
    wordOverridesMap.delete(key);
    saveDatabase();
    return res.json({ success: true });
  });

  // ================= ADMIN: STUDENT ACCOUNTS & PRIVILEGES =================
  // Real student accounts registered on the platform (stored in db.json),
  // distinct from the demo users in the admin UI mock data.

  const serializeStudentUser = (u: StudentUser) => ({
    id: u.id,
    email: u.email,
    createdAt: u.createdAt,
    subscriptionStatus: u.subscriptionStatus,
    subscriptionEnd: u.subscriptionEnd,
    isPrivileged: u.isPrivileged === true,
  });

  // Admin: list all real student accounts
  app.get("/api/admin/users", (req, res) => {
    if (!isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const users = Array.from(registeredUsersMap.values()).map(serializeStudentUser);
    return res.json({ success: true, users });
  });

  // Admin: grant or revoke full-access privilege for a student account.
  // A privileged student gets all lessons and can save progress without payment.
  app.post("/api/admin/users/:id/privilege", (req, res) => {
    if (!isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const user = usersByIdMap.get(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Пользователь не найден' });
    }
    const { privileged } = req.body || {};
    user.isPrivileged = privileged === true;
    registeredUsersMap.set(user.email, user);
    usersByIdMap.set(user.id, user);
    saveDatabase();
    return res.json({ success: true, user: serializeStudentUser(user) });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
    if (process.env.NODE_ENV !== 'production' && !process.env.ADMIN_PASSWORD_HASH && !process.env.ADMIN_PASSWORD) {
      console.warn('⚠️ ADMIN_PASSWORD или ADMIN_PASSWORD_HASH не заданы — вход в админ-режим на сервере отключен');
    }
  });
}

startServer();
