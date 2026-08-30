import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import type { ReviewCardState } from '../types';
import { ApiRequestError, apiFetch, apiJson } from '../lib/apiClient';
import { getFirebaseAuth } from '../lib/firebase';

export type SubscriptionStatus = 'active' | 'cancelled' | 'expired' | 'past_due' | 'paused' | 'unpaid';
export type BillingProvider = 'lemonsqueezy' | null;

export interface UserProfile {
  id: string;
  email: string;
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
  passedQuizzes?: number[];
  reviewCards?: Record<string, ReviewCardState>;
  updatedAt?: string;
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
    if (error instanceof ApiRequestError && error.status === 401) {
      await signOut(getFirebaseAuth()).catch(() => undefined);
    }
    setCurrentUser(null);
    markAuthReady();
    return null;
  }
}

export async function registerUserServer(email: string, pass: string): Promise<{ success: boolean; message: string; user?: UserProfile; alreadyExists?: boolean }> {
  try {
    await createUserWithEmailAndPassword(getFirebaseAuth(), email.trim(), pass);
    const user = await checkUserSessionServer();
    return user ? { success: true, message: 'Аккаунт создан', user } : { success: false, message: 'Не удалось загрузить профиль.' };
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

export async function createLemonCheckout(): Promise<{ success: boolean; url?: string; message?: string }> {
  try {
    const data = await apiJson<{ success: boolean; url: string }>('/api/billing/create-checkout', { method: 'POST' });
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
  try { return (await apiFetch('/api/user/progress', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ viewedSlides }) })).ok; }
  catch { return false; }
}
export async function syncReviewCardToServer(cardId: string, grade: 'again' | 'hard' | 'good' | 'easy'): Promise<boolean> {
  if (!currentUser) return false;
  try { return (await apiFetch('/api/user/review/grade', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ cardId, grade }) })).ok; }
  catch { return false; }
}
export async function syncQuizResultToServer(lessonNumber: number, score: number, total: number): Promise<boolean> {
  if (!currentUser) return false;
  try { return (await apiFetch('/api/user/progress', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ quiz: { lessonNumber, score, total } }) })).ok; }
  catch { return false; }
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
