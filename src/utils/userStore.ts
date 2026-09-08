import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  reload,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import type { ActivityAttempt, ActivityEvidence, QuizAttempt, ReviewCardState } from '../types';
import { ApiRequestError, apiFetch, apiJson } from '../lib/apiClient';
import { getFirebaseAuth } from '../lib/firebase';
import { LESSON_PROGRESS_DEFINITIONS } from '../data/lessonProgressCatalog';
import { sanitizeActivityEvidence } from './lessonProgress';
import { mergeActivityEvidence } from './progressMerge';
import { isBillingPlanKey, type BillingPlanKey } from '../config/pricing';
import { AUTOPLAY_STORAGE_KEY } from './narrationPrefs';
import {
  mergeLessonResumePositions,
  sanitizeLessonResumePositions,
  type LessonResumePositions,
} from './lessonResume';

export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'past_due' | 'paused' | 'unpaid';
export type BillingProvider = 'lemonsqueezy' | null;

export interface UserProfile {
  id: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
  subscriptionStatus: SubscriptionStatus;
  accessUntil?: string | null;
  isPrivileged?: boolean;
  provider?: BillingProvider;
  cancelAtPeriodEnd?: boolean;
  paidAccess: boolean;
}

export interface UserProgressData {
  viewedSlides: string[];
  resumePositions?: LessonResumePositions;
  passedQuizzes?: number[];
  activityEvidence?: Record<string, ActivityEvidence>;
  reviewCards?: Record<string, ReviewCardState>;
  /** Local retry material; the server always recomputes DIRECT results. */
  activityAttempts?: Record<string, ActivityAttempt>;
  quizAttempts?: Record<string, QuizAttempt>;
  updatedAt?: string;
}

const PROGRESS_CACHE_PREFIX = 'hungarylearn:progress:v2:';

export function emptyProgressData(): UserProgressData {
  return {
    viewedSlides: [],
    resumePositions: {},
    passedQuizzes: [],
    activityEvidence: {},
    reviewCards: {},
    activityAttempts: {},
    quizAttempts: {},
  };
}

function progressCacheKey(ownerId: string | null): string {
  return `${PROGRESS_CACHE_PREFIX}${ownerId ?? 'anonymous'}`;
}

function clearLocalAccountData(ownerId: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(progressCacheKey(ownerId));
    window.localStorage.removeItem(progressCacheKey(null));
    window.localStorage.removeItem(AUTOPLAY_STORAGE_KEY);
  } catch {
    return;
  }
}

/** Local cache of the canonical progress shape; Firestore remains authoritative for signed-in users. */
export function readCachedProgress(
  ownerId: string | null,
  storage: Pick<Storage, 'getItem'> | null = typeof window !== 'undefined' ? window.localStorage : null
): UserProgressData {
  if (!storage) return emptyProgressData();
  try {
    const parsed = JSON.parse(storage.getItem(progressCacheKey(ownerId)) ?? '{}') as UserProgressData;
    return {
      viewedSlides: Array.isArray(parsed.viewedSlides) ? parsed.viewedSlides : [],
      resumePositions: sanitizeLessonResumePositions(parsed.resumePositions),
      passedQuizzes: Array.isArray(parsed.passedQuizzes)
        ? [...new Set(parsed.passedQuizzes.filter((item) => Number.isInteger(item) && item >= 1 && item <= 28))]
        : [],
      activityEvidence: sanitizeActivityEvidence(LESSON_PROGRESS_DEFINITIONS, parsed.activityEvidence),
      reviewCards: parsed.reviewCards && typeof parsed.reviewCards === 'object' ? parsed.reviewCards : {},
      activityAttempts: parsed.activityAttempts && typeof parsed.activityAttempts === 'object' ? parsed.activityAttempts : {},
      quizAttempts: parsed.quizAttempts && typeof parsed.quizAttempts === 'object' ? parsed.quizAttempts : {},
    };
  } catch {
    return emptyProgressData();
  }
}

/** Monotonic canonical merge used for anonymous migration, refresh and server hydration. */
export function mergeProgressData(...sources: UserProgressData[]): UserProgressData {
  const viewedSlides = new Set<string>();
  const passedQuizzes = new Set<number>();
  let activityEvidence: Record<string, ActivityEvidence> = {};
  let reviewCards: Record<string, ReviewCardState> = {};
  let activityAttempts: Record<string, ActivityAttempt> = {};
  let quizAttempts: Record<string, QuizAttempt> = {};
  let resumePositions: LessonResumePositions = {};
  for (const source of sources) {
    for (const slide of source.viewedSlides ?? []) if (typeof slide === 'string') viewedSlides.add(slide);
    for (const lesson of source.passedQuizzes ?? []) {
      if (Number.isInteger(lesson) && lesson >= 1 && lesson <= 28) passedQuizzes.add(lesson);
    }
    activityEvidence = mergeActivityEvidence(
      activityEvidence,
      sanitizeActivityEvidence(LESSON_PROGRESS_DEFINITIONS, source.activityEvidence)
    );
    reviewCards = { ...reviewCards, ...(source.reviewCards ?? {}) };
    activityAttempts = { ...activityAttempts, ...(source.activityAttempts ?? {}) };
    quizAttempts = { ...quizAttempts, ...(source.quizAttempts ?? {}) };
    resumePositions = mergeLessonResumePositions(resumePositions, source.resumePositions);
  }
  return {
    viewedSlides: [...viewedSlides],
    resumePositions,
    passedQuizzes: [...passedQuizzes],
    activityEvidence,
    reviewCards,
    activityAttempts,
    quizAttempts,
  };
}

export function writeCachedProgress(
  ownerId: string | null,
  progress: UserProgressData,
  storage: Pick<Storage, 'setItem'> | null = typeof window !== 'undefined' ? window.localStorage : null
): void {
  if (!storage) return;
  try {
    storage.setItem(progressCacheKey(ownerId), JSON.stringify(progress));
  } catch {
    // A cache failure must never block the learning UI or server sync.
  }
}

type UserListener = (user: UserProfile | null) => void;
const userListeners = new Set<UserListener>();
type AuthReadyListener = (ready: boolean) => void;
const authReadyListeners = new Set<AuthReadyListener>();
let currentUser: UserProfile | null = null;
let authReady = false;

export const FREE_LESSON_COUNT = 2;
export function isLessonAccessible(lessonNumber: number, user: UserProfile | null, isAdmin = false): boolean {
  return lessonNumber <= FREE_LESSON_COUNT || isAdmin || user?.paidAccess === true;
}
export function getCurrentUser(): UserProfile | null { return currentUser; }
export function isUserAuthReady(): boolean { return authReady; }
function markAuthReady(): void {
  if (authReady) return;
  authReady = true;
  for (const callback of authReadyListeners) callback(true);
}
function setCurrentUser(user: UserProfile | null): void {
  currentUser = user;
  for (const callback of userListeners) callback(user);
}
export function subscribeUserState(callback: UserListener): () => void {
  userListeners.add(callback);
  callback(currentUser);
  return () => userListeners.delete(callback);
}
export function subscribeUserAuthReady(callback: AuthReadyListener): () => void {
  authReadyListeners.add(callback);
  callback(authReady);
  return () => authReadyListeners.delete(callback);
}

export function userAuthMessage(error: unknown, fallback: string): string {
  const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : '';
  if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) return 'Неверный e-mail или пароль.';
  if (code.includes('email-already-in-use')) return 'Аккаунт с этим e-mail уже существует. Войдите с вашим паролем.';
  if (code.includes('invalid-email')) return 'Проверьте правильность e-mail.';
  if (code.includes('weak-password')) return 'Пароль должен содержать минимум 6 символов.';
  if (code.includes('too-many-requests')) return 'Слишком много попыток. Попробуйте позже.';
  if (code.includes('network-request-failed')) return 'Ошибка сети. Проверьте подключение и повторите попытку.';
  return fallback;
}

export function validateRegistration(email: string, password: string, confirmPassword: string): string | null {
  const normalizedEmail = email.trim();
  if (!normalizedEmail || !password || !confirmPassword) return 'Заполните e-mail, пароль и подтверждение пароля.';
  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) return 'Проверьте правильность e-mail.';
  if (password.length < 6) return 'Пароль должен содержать минимум 6 символов.';
  if (password !== confirmPassword) return 'Пароли не совпадают.';
  return null;
}

export function validateAccountEmail(email: string): string | null {
  const normalizedEmail = email.trim();
  if (!normalizedEmail) return 'Введите e-mail, указанный при регистрации.';
  if (!/^\S+@\S+\.\S+$/.test(normalizedEmail)) return 'Проверьте правильность e-mail.';
  return null;
}

export async function checkUserSessionServer(): Promise<UserProfile | null> {
  if (typeof window === 'undefined') {
    setCurrentUser(null);
    return null;
  }
  await getFirebaseAuth().authStateReady();
  if (!getFirebaseAuth().currentUser) {
    setCurrentUser(null);
    markAuthReady();
    return null;
  }
  try {
    const data = await apiJson<{ success: boolean; user: UserProfile }>('/api/auth/me');
    setCurrentUser(data.user);
    markAuthReady();
    return data.user;
  } catch (error) {
    if (error instanceof ApiRequestError && (error.status === 401 || error.status === 410)) {
      await signOut(getFirebaseAuth()).catch(() => undefined);
    }
    setCurrentUser(null);
    markAuthReady();
    return null;
  }
}

export async function registerUserServer(email: string, pass: string): Promise<{ success: boolean; message: string; user?: UserProfile; alreadyExists?: boolean }> {
  try {
    const credential = await createUserWithEmailAndPassword(getFirebaseAuth(), email.trim(), pass);
    let verificationSent = true;
    try {
      await sendEmailVerification(credential.user);
    } catch {
      verificationSent = false;
    }
    const user = await checkUserSessionServer();
    if (!user) return { success: false, message: 'Не удалось загрузить профиль.' };
    return {
      success: true,
      message: verificationSent
        ? 'Аккаунт создан. Мы отправили письмо для подтверждения e-mail.'
        : 'Аккаунт создан, но письмо не отправилось. Отправьте его повторно из личного кабинета.',
      user,
    };
  } catch (error) {
    const message = userAuthMessage(error, 'Не удалось зарегистрироваться.');
    return { success: false, message, alreadyExists: message.includes('уже существует') };
  }
}

export async function loginUserServer(email: string, pass: string): Promise<{ success: boolean; message: string; user?: UserProfile }> {
  try {
    await signInWithEmailAndPassword(getFirebaseAuth(), email.trim(), pass);
    const user = await checkUserSessionServer();
    return user ? { success: true, message: 'Успешный вход', user } : { success: false, message: 'Не удалось загрузить профиль.' };
  } catch (error) {
    return { success: false, message: userAuthMessage(error, 'Не удалось войти.') };
  }
}

export async function logoutUserServer(): Promise<void> {
  await signOut(getFirebaseAuth());
  setCurrentUser(null);
}

export async function deleteAccountServer(password: string): Promise<{ success: boolean; message: string }> {
  const auth = getFirebaseAuth();
  const firebaseUser = auth.currentUser;
  if (!firebaseUser?.email) return { success: false, message: 'Войдите в аккаунт повторно.' };
  if (!password) return { success: false, message: 'Введите текущий пароль.' };
  const ownerId = firebaseUser.uid;
  try {
    await reauthenticateWithCredential(firebaseUser, EmailAuthProvider.credential(firebaseUser.email, password));
    await firebaseUser.getIdToken(true);
    await apiJson('/api/auth/account', { method: 'DELETE' });
    await signOut(auth).catch(() => undefined);
    clearLocalAccountData(ownerId);
    setCurrentUser(null);
    return { success: true, message: 'Аккаунт и учебные данные удалены.' };
  } catch (error) {
    return {
      success: false,
      message: error instanceof ApiRequestError
        ? error.message
        : userAuthMessage(error, 'Не удалось удалить аккаунт. Попробуйте позже.'),
    };
  }
}

export async function createLemonCheckout(plan: BillingPlanKey): Promise<{ success: boolean; url?: string; message?: string }> {
  if (!isBillingPlanKey(plan)) return { success: false, message: 'Выберите доступный тариф.' };
  try {
    const data = await apiJson<{ success: boolean; url: string }>('/api/billing/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    return { success: true, url: data.url };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'Оплата временно недоступна.' };
  }
}

export async function getSubscriptionPortal(): Promise<{ success: boolean; url?: string; message?: string }> {
  try {
    const data = await apiJson<{ success: boolean; url: string }>('/api/billing/customer-portal', { method: 'POST' });
    return { success: true, url: data.url };
  } catch (error) {
    return { success: false, message: error instanceof Error ? error.message : 'Управление подпиской недоступно.' };
  }
}

export async function syncProgressToServer(viewedSlides: string[]): Promise<boolean> {
  if (!currentUser) return false;
  try {
    return (await apiFetch('/api/user/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ viewedSlides }),
    })).ok;
  }
  catch { return false; }
}
export async function syncResumePositionsToServer(resumePositions: LessonResumePositions): Promise<boolean> {
  if (!currentUser) return false;
  try {
    return (await apiFetch('/api/user/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ resumePositions }),
    })).ok;
  } catch {
    return false;
  }
}

export async function requestPasswordReset(email: string): Promise<{ success: boolean; message: string }> {
  const validationError = validateAccountEmail(email);
  if (validationError) return { success: false, message: validationError };
  try {
    await sendPasswordResetEmail(getFirebaseAuth(), email.trim());
    return {
      success: true,
      message: 'Если аккаунт с таким e-mail существует, Firebase отправит письмо для установки нового пароля.',
    };
  } catch (error) {
    const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : '';
    if (code.includes('user-not-found')) {
      return {
        success: true,
        message: 'Если аккаунт с таким e-mail существует, Firebase отправит письмо для установки нового пароля.',
      };
    }
    return { success: false, message: userAuthMessage(error, 'Не удалось отправить письмо. Попробуйте позже.') };
  }
}

export async function resendVerificationEmail(): Promise<{ success: boolean; message: string }> {
  const firebaseUser = getFirebaseAuth().currentUser;
  if (!firebaseUser) return { success: false, message: 'Войдите в аккаунт, чтобы подтвердить e-mail.' };
  if (firebaseUser.emailVerified) return { success: true, message: 'E-mail уже подтверждён.' };
  try {
    await sendEmailVerification(firebaseUser);
    return { success: true, message: 'Новое письмо для подтверждения отправлено.' };
  } catch (error) {
    return { success: false, message: userAuthMessage(error, 'Не удалось отправить письмо. Попробуйте позже.') };
  }
}

export async function refreshEmailVerification(): Promise<{ success: boolean; verified: boolean; message: string }> {
  const firebaseUser = getFirebaseAuth().currentUser;
  if (!firebaseUser) return { success: false, verified: false, message: 'Войдите в аккаунт.' };
  try {
    await reload(firebaseUser);
    await firebaseUser.getIdToken(true);
    const user = await checkUserSessionServer();
    const verified = user?.emailVerified === true;
    return {
      success: verified,
      verified,
      message: verified ? 'E-mail подтверждён.' : 'E-mail пока не подтверждён. Перейдите по ссылке из письма.',
    };
  } catch (error) {
    return { success: false, verified: false, message: userAuthMessage(error, 'Не удалось обновить статус e-mail.') };
  }
}
export async function syncReviewCardToServer(cardId: string, grade: 'again' | 'hard' | 'good' | 'easy'): Promise<boolean> {
  if (!currentUser) return false;
  try { return (await apiFetch('/api/user/review/grade', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ cardId, grade }) })).ok; }
  catch { return false; }
}
export async function syncQuizAttemptToServer(quizAttempt: QuizAttempt): Promise<boolean> {
  if (!currentUser) return false;
  try { return (await apiFetch('/api/user/progress', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ quizAttempt }) })).ok; }
  catch { return false; }
}
export async function syncActivityAttemptToServer(activityAttempt: ActivityAttempt): Promise<ActivityEvidence | null> {
  if (!currentUser) return null;
  try {
    const response = await apiJson<{ success: boolean; evidence?: ActivityEvidence }>('/api/user/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activityAttempt }),
    });
    return response.evidence ?? null;
  } catch {
    return null;
  }
}
export async function syncActivityEvidenceToServer(
  activityEvidence: Record<string, ActivityEvidence>
): Promise<boolean> {
  if (!currentUser) return false;
  try {
    return (await apiFetch('/api/user/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ activityEvidence }),
    })).ok;
  } catch {
    return false;
  }
}
export async function fetchUserProgress(): Promise<UserProgressData | null> {
  if (!currentUser) return null;
  try { return (await apiJson<{ progress: UserProgressData }>('/api/user/progress')).progress; }
  catch { return null; }
}

if (typeof window !== 'undefined') {
  onAuthStateChanged(getFirebaseAuth(), (firebaseUser) => {
    if (!firebaseUser) {
      setCurrentUser(null);
      markAuthReady();
    }
    else void checkUserSessionServer();
  });
}
