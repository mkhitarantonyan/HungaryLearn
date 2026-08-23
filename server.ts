import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import rateLimit from "express-rate-limit";
import cookieParser from "cookie-parser";
import crypto from "crypto";
import Stripe from "stripe";
import { verifyAdminCredentials } from './src/utils/adminAuth';
import { mergeCompletedSlides } from './src/utils/progressMerge';
import { isSubscriptionValid } from './src/utils/subscriptionValidity';
import { gradeCard } from './src/utils/spacedRepetition';
import type { ReviewGrade } from './src/types';
import {
  checkDatabaseConnection,
  closeDatabase,
  countAudioOverridesByStoragePath,
  createAdminSession as persistAdminSession,
  createUserSession as persistUserSession,
  createUserWithSession,
  deleteAdminSession,
  deleteAudioOverride,
  deleteUserSession,
  deleteWordOverride,
  findAudioOverrideByKey,
  findUserByEmail,
  findUserById,
  findUserByStripeCustomerId,
  getDatabasePool,
  getUserFromSessionToken,
  getUserProgress,
  isAdminSessionValid,
  listAudioOverrides,
  listUsers,
  listWordOverrides,
  mutateReviewCards,
  mutateUserProgress,
  replaceAudioOverrides,
  runStripeEventOnce,
  saveStudentUser,
  upsertWordOverride,
  type ReviewCardState,
  type StudentUser,
} from './src/server/db';
import {
  assertPrivateOverrideBucket,
  downloadPrivateAudio,
  removePrivateAudio,
  uploadPrivateAudio,
  validateAudioDataUrl,
} from './src/server/audioStorage';

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

const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days for users
const ADMIN_SESSION_DURATION_MS = 10 * 60 * 1000; // 10 minutes for admin sessions
const LESSON_COUNT = 28;
const QUIZ_PASS_THRESHOLD = 0.8;

class ReviewCardNotFoundError extends Error {}

const asyncHandler = (
  handler: (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<unknown>
): express.RequestHandler => {
  return (req, res, next) => {
    void handler(req, res, next).catch(next);
  };
};

async function createAdminSession(): Promise<string> {
  const token = crypto.randomUUID();
  const createdAt = new Date();
  await persistAdminSession(token, createdAt, new Date(createdAt.getTime() + ADMIN_SESSION_DURATION_MS));
  return token;
}

async function createUserSession(userId: string): Promise<string> {
  const token = crypto.randomUUID();
  const createdAt = new Date();
  await persistUserSession(token, userId, createdAt, new Date(createdAt.getTime() + SESSION_DURATION_MS));
  return token;
}

async function removeAudioObjectIfUnreferenced(storagePath: string): Promise<void> {
  if (await countAudioOverridesByStoragePath(storagePath) > 0) return;
  await removePrivateAudio(storagePath);
}

async function persistAudioDataUrl(
  keys: string[],
  dataUrl: string
): Promise<{ ok: boolean; url?: string; error?: string }> {
  try {
    const upload = validateAudioDataUrl(dataUrl);
    const uniqueKeys = Array.from(new Set(
      keys.map((key) => String(key).trim().toLowerCase()).filter(Boolean)
    ));
    if (uniqueKeys.length === 0) {
      return { ok: false, error: 'Не указан ключ аудиофайла' };
    }

    await assertPrivateOverrideBucket();
    const storagePath = `overrides/${crypto.randomUUID()}${upload.extension}`;
    await uploadPrivateAudio(storagePath, upload);

    let previousPaths: string[];
    try {
      previousPaths = await replaceAudioOverrides(
        uniqueKeys,
        storagePath,
        upload.mimeType,
        upload.buffer.length
      );
    } catch (error) {
      await removePrivateAudio(storagePath).catch(() => undefined);
      throw error;
    }

    for (const previousPath of new Set(previousPaths)) {
      if (previousPath !== storagePath) {
        await removeAudioObjectIfUnreferenced(previousPath);
      }
    }

    return {
      ok: true,
      url: `/api/audio-file/${encodeURIComponent(uniqueKeys[0])}`,
    };
  } catch (error) {
    console.error('[Audio Storage] Failed to store audio override:', error);
    const message = error instanceof Error ? error.message : 'Не удалось сохранить аудиофайл на сервере';
    return { ok: false, error: message };
  }
}

async function shutdown(): Promise<void> {
  console.log('[Database] Shutting down PostgreSQL pool...');
  await closeDatabase().catch((error) => {
    console.error('[Database] Failed to close PostgreSQL pool:', error);
  });
  process.exit(0);
}

process.once('SIGINT', () => { void shutdown(); });
process.once('SIGTERM', () => { void shutdown(); });

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

  // Fail fast on missing configuration. Connectivity itself is reported by /api/health.
  getDatabasePool();

  const app = express();
  const PORT = Number(process.env.PORT || 3000);

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

    try {
      const processed = await runStripeEventOnce(event.id, event.type, async (dbClient) => {
        if (event.type === 'checkout.session.completed') {
          const session = event.data.object as Stripe.Checkout.Session;
          const userId = session.client_reference_id;
          const customerEmail = session.customer_email;

          let userToUpgrade = userId ? await findUserById(userId, dbClient) : null;
          if (!userToUpgrade && customerEmail) {
            userToUpgrade = await findUserByEmail(customerEmail, dbClient);
          }

          if (userToUpgrade) {
            const customerId = getStripeCustomerId(session.customer);
            if (customerId) userToUpgrade.stripeCustomerId = customerId;
            const subscriptionId = typeof session.subscription === 'string' ? session.subscription : null;
            if (subscriptionId) userToUpgrade.stripeSubscriptionId = subscriptionId;

            if (subscriptionId) {
              try {
                const subscription = await stripe.subscriptions.retrieve(subscriptionId);
                const periodEnd = subscription.items.data.reduce(
                  (latest, item) => Math.max(latest, item.current_period_end),
                  0
                );
                if (periodEnd > 0) {
                  userToUpgrade.subscriptionStatus = 'active';
                  userToUpgrade.subscriptionEnd = new Date(periodEnd * 1000).toISOString();
                } else {
                  extendSubscriptionEnd(userToUpgrade);
                }
              } catch (err) {
                console.error('[Stripe Webhook] Failed to retrieve subscription for checkout.session.completed:', err);
                extendSubscriptionEnd(userToUpgrade);
              }
            } else {
              extendSubscriptionEnd(userToUpgrade);
            }

            await saveStudentUser(userToUpgrade, dbClient);
            console.log(`[Stripe Webhook] Успешно активирована подписка для ${userToUpgrade.email}`);
          }
        } else if (event.type === 'customer.subscription.deleted') {
          const subscription = event.data.object as Stripe.Subscription;
          const user = await findUserByStripeCustomerId(getStripeCustomerId(subscription.customer), dbClient);
          if (user) {
            user.subscriptionStatus = 'canceled';
            user.subscriptionEnd = new Date().toISOString();
            await saveStudentUser(user, dbClient);
            console.log(`[Stripe Webhook] Подписка отменена для ${user.email}`);
          }
        } else if (event.type === 'invoice.payment_succeeded') {
          const invoice = event.data.object as Stripe.Invoice;
          if (invoice.billing_reason === 'subscription_cycle') {
            const user = await findUserByStripeCustomerId(getStripeCustomerId(invoice.customer), dbClient);
            if (user) {
              const periodEnd = invoice.lines?.data?.[0]?.period?.end;
              if (periodEnd) {
                user.subscriptionStatus = 'active';
                user.subscriptionEnd = new Date(periodEnd * 1000).toISOString();
              } else {
                extendSubscriptionEnd(user);
              }
              await saveStudentUser(user, dbClient);
              console.log(`[Stripe Webhook] Платёж подтверждён — подписка продлена для ${user.email}`);
            }
          }
        } else if (event.type === 'invoice.payment_failed') {
          const invoice = event.data.object as Stripe.Invoice;
          const user = await findUserByStripeCustomerId(getStripeCustomerId(invoice.customer), dbClient);
          if (user) {
            user.subscriptionStatus = 'past_due';
            await saveStudentUser(user, dbClient);
            console.log(`[Stripe Webhook] Платёж не прошёл — подписка past_due для ${user.email}`);
          }
        }
      });

      return res.json({ received: true, ...(processed ? {} : { duplicate: true }) });
    } catch (error) {
      console.error('[Stripe Webhook] Database processing failed:', error);
      return res.status(500).send('Webhook processing failed');
    }
  });

  app.use((req, res, next) => {
    const limit = req.path === '/api/admin/audio' ? '14mb' : '512kb';
    express.json({ limit })(req, res, next);
  });
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

  app.get('/api/health', asyncHandler(async (_req, res) => {
    try {
      await checkDatabaseConnection();
      return res.status(200).json({ status: 'ok', database: 'connected' });
    } catch (error) {
      console.error('[Health] PostgreSQL connection failed:', error);
      return res.status(503).json({ status: 'unavailable', database: 'disconnected' });
    }
  }));

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
  app.get("/api/admin/verify", asyncHandler(async (req, res) => {
    const token = getSessionTokenFromReq(req);
    if (await isAdminSessionValid(token)) {
      return res.json({ success: true, isAdmin: true });
    }
    return res.status(401).json({ success: false, isAdmin: false, message: 'Сессия недействительна или истекла' });
  }));

  // API endpoint for admin login verification (server-side check with HTTP-only cookie session)
  app.post("/api/admin/login", loginLimiter, asyncHandler(async (req, res) => {
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

    const sessionToken = await createAdminSession();

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
  }));

  // API endpoint for admin logout
  app.post("/api/admin/logout", asyncHandler(async (req, res) => {
    const token = getSessionTokenFromReq(req);
    await deleteAdminSession(token);
    res.clearCookie('admin_session');
    return res.json({ success: true, message: 'Сессия завершена' });
  }));

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
  app.post("/api/auth/register", authLimiter, asyncHandler(async (req, res) => {
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
    if (await findUserByEmail(normalizedEmail)) {
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

      const sessionToken = crypto.randomUUID();
      const sessionCreatedAt = new Date();
      const created = await createUserWithSession(newStudent, {
        token: sessionToken,
        createdAt: sessionCreatedAt,
        expiresAt: new Date(sessionCreatedAt.getTime() + SESSION_DURATION_MS),
      });
      if (!created) {
        return res.json({
          success: true,
          message: 'Если этот e-mail ещё не зарегистрирован, аккаунт создан. Если у вас уже есть аккаунт — войдите с вашим паролем.',
        });
      }

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
  }));

  // Student User Login
  app.post("/api/auth/login", authLimiter, asyncHandler(async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Заполните e-mail и пароль' });
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const user = await findUserByEmail(normalizedEmail);

    // Anti-enumeration: identical error message whether the account exists or not,
    // so an attacker cannot probe which e-mails are registered.
    if (!user) {
      return res.status(401).json({ success: false, message: 'Неверный e-mail или пароль' });
    }

    const isMatch = await bcrypt.compare(String(password), user.passwordHash);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Неверный e-mail или пароль' });
    }

    const sessionToken = await createUserSession(user.id);

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
  }));

  // Get current student user session info
  app.get("/api/auth/me", asyncHandler(async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = await getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Сессия истекла или не авторизована' });
    }

    const progress = await getUserProgress(user.id) || {
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
  }));

  // Student User Logout
  app.post("/api/auth/logout", asyncHandler(async (req, res) => {
    const token = getUserTokenFromReq(req);
    await deleteUserSession(token);
    res.clearCookie('user_session');
    return res.json({ success: true, message: 'Вышли из профиля' });
  }));

  // Get user progress
  app.get("/api/user/progress", asyncHandler(async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = await getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация' });
    }

    const progress = await getUserProgress(user.id) || {
      userId: user.id,
      viewedSlides: [],
      passedQuizzes: [],
      updatedAt: new Date().toISOString(),
    };

    return res.json({ success: true, progress });
  }));

  app.post("/api/user/progress", asyncHandler(async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = await getUserFromSessionToken(token);

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

    const incomingSlides = Array.isArray(viewedSlides) ? viewedSlides : [];
    let quizUpdate: { lessonNumber: number; score: unknown; total: unknown } | null = null;

    if (quiz && typeof quiz === 'object') {
      const { lessonNumber, score, total } = quiz as {
        lessonNumber?: unknown;
        score?: unknown;
        total?: unknown;
      };
      const lessonExists = typeof lessonNumber === 'number'
        && lessonNumber >= 1
        && lessonNumber <= LESSON_COUNT;

      if (!lessonExists) {
        return res.status(400).json({ success: false, message: 'Неизвестный урок' });
      }

      quizUpdate = { lessonNumber, score, total };
    }

    const { progress } = await mutateUserProgress(user.id, (current) => {
      const mergedSlides = mergeCompletedSlides(current.viewedSlides, incomingSlides);
      let mergedQuizzes = current.passedQuizzes;

      if (
        quizUpdate &&
        typeof quizUpdate.score === 'number' &&
        typeof quizUpdate.total === 'number' &&
        quizUpdate.total > 0 &&
        quizUpdate.score >= 0 &&
        quizUpdate.score <= quizUpdate.total &&
        quizUpdate.score / quizUpdate.total >= QUIZ_PASS_THRESHOLD
      ) {
        mergedQuizzes = Array.from(new Set([...mergedQuizzes, quizUpdate.lessonNumber]));
      }

      return {
        viewedSlides: mergedSlides,
        passedQuizzes: mergedQuizzes,
        customNotes: typeof customNotes === 'string' ? customNotes : current.customNotes,
        result: undefined,
      };
    });
    return res.json({ success: true, progress });
  }));

  app.post("/api/user/review/grade", asyncHandler(async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = await getUserFromSessionToken(token);

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

    try {
      const { result: nextState } = await mutateReviewCards(user.id, (current) => {
        const existingCards = current.reviewCards ?? {};
        const existingState = existingCards[cardId];

        if (!existingState) {
          throw new ReviewCardNotFoundError('Review card not found');
        }

        const gradedState = gradeCard(existingState, grade);
        return {
          reviewCards: { ...existingCards, [cardId]: gradedState },
          result: gradedState,
        };
      });

      return res.json({ success: true, nextState });
    } catch (error) {
      if (error instanceof ReviewCardNotFoundError) {
        return res.status(400).json({ success: false, message: 'Карточка не найдена' });
      }
      throw error;
    }
  }));

  app.get("/api/user/review/due-count", asyncHandler(async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = await getUserFromSessionToken(token);

    if (!user) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация' });
    }

    const progress = await getUserProgress(user.id);
    const reviewCards = progress?.reviewCards ?? {};
    const completedLessons = extractCompletedLessonNumbers(progress?.viewedSlides ?? []);
    const dueCount = countDueCardsFromProgress(reviewCards, completedLessons);

    return res.json({ success: true, dueCount });
  }));

  // Create Stripe Checkout Session
  app.post("/api/user/create-checkout-session", asyncHandler(async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = await getUserFromSessionToken(token);

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
  }));

  // Activate / Upgrade Subscription (Requires Stripe Session verification in production)
  app.post("/api/user/subscribe", asyncHandler(async (req, res) => {
    const token = getUserTokenFromReq(req);
    const user = await getUserFromSessionToken(token);

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
  }));

  // ================= GLOBAL ADMIN-CONTENT OVERRIDES =================
  // Custom words and audio uploaded by the admin are stored on the server and
  // served to ALL users (not just the browser where the admin edited them).

  const isAdminRequest = async (req: express.Request): Promise<boolean> => {
    return isAdminSessionValid(getSessionTokenFromReq(req));
  };

  // Public: current global audio registry — clients fetch this on startup
  app.get("/api/audio-registry", asyncHandler(async (_req, res) => {
    const audio: Record<string, { url: string; mimeType: string; size: number }> = {};
    for (const entry of await listAudioOverrides()) {
      audio[entry.key] = {
        url: `/api/audio-file/${encodeURIComponent(entry.key)}`,
        mimeType: entry.mimeType,
        size: entry.size,
      };
    }
    return res.json({ success: true, audio });
  }));

  // Public proxy: Storage paths and service-role credentials stay server-side.
  app.get("/api/audio-file/:fileName", asyncHandler(async (req, res) => {
    const key = String(req.params.fileName).trim().toLowerCase();
    const entry = await findAudioOverrideByKey(key);
    if (!entry) {
      return res.status(404).send('Audio file not found');
    }
    try {
      const audio = await downloadPrivateAudio(entry.storagePath);
      res.setHeader('Content-Type', entry.mimeType);
      res.setHeader('Content-Length', String(audio.length));
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      return res.send(audio);
    } catch (error) {
      console.error('[Audio Storage] Failed to download override:', error);
      return res.status(404).send('Audio file not found');
    }
  }));

  // Admin: upload audio under one or more keys (e.g. all slide candidate keys)
  app.post("/api/admin/audio", asyncHandler(async (req, res) => {
    if (!await isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const { keys, dataUrl } = req.body || {};
    if (!Array.isArray(keys) || keys.length === 0 || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:')) {
      return res.status(400).json({ success: false, message: 'Поля keys (массив) и dataUrl (Data URL) обязательны' });
    }
    const result = await persistAudioDataUrl(keys, dataUrl);
    if (!result.ok) {
      return res.status(400).json({ success: false, message: result.error });
    }
    return res.json({ success: true, url: result.url });
  }));

  // Admin: remove audio override for a key
  app.delete("/api/admin/audio/:key", asyncHandler(async (req, res) => {
    if (!await isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const key = String(req.params.key).trim().toLowerCase();
    const storagePath = await deleteAudioOverride(key);
    if (storagePath) {
      await removeAudioObjectIfUnreferenced(storagePath).catch((error) => {
        console.error('[Audio Storage] Failed to remove unreferenced object:', error);
      });
    }
    return res.json({ success: true });
  }));

  // Public: current global word overrides — clients fetch these on startup
  app.get("/api/word-overrides", asyncHandler(async (_req, res) => {
    const overrides = (await listWordOverrides()).map((e) => ({
      originalText: e.originalText,
      customText: e.customText,
    }));
    return res.json({ success: true, overrides });
  }));

  // Admin: upsert a word override (custom display text)
  app.post("/api/admin/word-overrides", asyncHandler(async (req, res) => {
    if (!await isAdminRequest(req)) {
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
    await upsertWordOverride(key, originalText.trim(), trimmedCustom);
    return res.json({ success: true });
  }));

  // Admin: remove a word override
  app.delete("/api/admin/word-overrides/:key", asyncHandler(async (req, res) => {
    if (!await isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const key = String(req.params.key).trim().toLowerCase();
    await deleteWordOverride(key);
    return res.json({ success: true });
  }));

  // ================= ADMIN: STUDENT ACCOUNTS & PRIVILEGES =================
  // Real student accounts registered on the platform (stored in PostgreSQL),
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
  app.get("/api/admin/users", asyncHandler(async (req, res) => {
    if (!await isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const users = (await listUsers()).map(serializeStudentUser);
    return res.json({ success: true, users });
  }));

  // Admin: grant or revoke full-access privilege for a student account.
  // A privileged student gets all lessons and can save progress without payment.
  app.post("/api/admin/users/:id/privilege", asyncHandler(async (req, res) => {
    if (!await isAdminRequest(req)) {
      return res.status(401).json({ success: false, message: 'Требуется авторизация администратора' });
    }
    const user = await findUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: 'Пользователь не найден' });
    }
    const { privileged } = req.body || {};
    user.isPrivileged = privileged === true;
    await saveStudentUser(user);
    return res.json({ success: true, user: serializeStudentUser(user) });
  }));

  app.use((error: unknown, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (!req.path.startsWith('/api/')) return next(error);
    console.error('[API] Unhandled request error:', error);
    if (res.headersSent) return next(error);
    return res.status(500).json({ success: false, message: 'Внутренняя ошибка сервера' });
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

void startServer().catch((error) => {
  console.error('[Server] Startup failed:', error);
  process.exitCode = 1;
});
