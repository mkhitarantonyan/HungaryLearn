// Utility for Student User Authentication, Profile, Subscription, and Progress Syncing

import type { ReviewCardState } from '../types';
import { isSubscriptionValid } from './subscriptionValidity';

export interface UserProfile {
  id: string;
  email: string;
  createdAt: string;
  subscriptionStatus: 'trial' | 'active' | 'past_due' | 'canceled' | 'incomplete' | 'unpaid';
  subscriptionEnd?: string;
  // Full access granted by the administrator (all lessons without payment).
  isPrivileged?: boolean;
}

export interface UserProgressData {
  viewedSlides: string[];
  passedQuizzes?: number[];
  reviewCards?: Record<string, ReviewCardState>;
  updatedAt?: string;
}

type UserListener = (user: UserProfile | null) => void;
const userListeners: Set<UserListener> = new Set();

let currentUser: UserProfile | null = null;

// Number of lessons available without a paid subscription (free preview).
export const FREE_LESSON_COUNT = 2;

/**
 * Determines whether a specific lesson is accessible to the given user.
 *
 * Rules:
 *  - Lessons 1..FREE_LESSON_COUNT are free for everyone (including anonymous).
 *  - Admins always have full access.
 *  - Privileged accounts (granted by admin) always have full access.
 *  - Existing subscription semantics decide trial/active/past_due access and expiry.
 */
export function isLessonAccessible(
  lessonNumber: number,
  user: UserProfile | null,
  isAdmin: boolean = false
): boolean {
  if (lessonNumber <= FREE_LESSON_COUNT) return true;
  if (isAdmin) return true;
  if (!user) return false;
  return isSubscriptionValid(user);
}

export function getCurrentUser(): UserProfile | null {
  return currentUser;
}

function setCurrentUser(user: UserProfile | null) {
  currentUser = user;
  notifyUserListeners(user);
}

export function subscribeUserState(callback: UserListener): () => void {
  userListeners.add(callback);
  callback(currentUser);
  return () => {
    userListeners.delete(callback);
  };
}

function notifyUserListeners(user: UserProfile | null) {
  userListeners.forEach(cb => cb(user));
}

// Fetch session from server on start
export async function checkUserSessionServer(): Promise<UserProfile | null> {
  if (typeof window === 'undefined') return null;
  try {
    const res = await fetch('/api/auth/me', {
      method: 'GET',
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.user) {
        setCurrentUser(data.user);
        return data.user;
      }
    }
    setCurrentUser(null);
  } catch (err) {
    console.warn('Failed to verify student user session:', err);
    setCurrentUser(null);
  }
  return null;
}

// Register student user
export async function registerUserServer(
  email: string,
  pass: string
): Promise<{ success: boolean; message: string; user?: UserProfile; alreadyExists?: boolean }> {
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password: pass }),
    });
    const data = await res.json();
    if (res.ok && data.success && data.user) {
      setCurrentUser(data.user);
      return { success: true, message: data.message || 'Успешная регистрация', user: data.user };
    }
    // Anti-enumeration: server returns { success: true } WITHOUT a user object
    // when the email is already registered. Tell the user to log in instead.
    if (res.ok && data.success && !data.user) {
      return {
        success: false,
        alreadyExists: true,
        message: 'Аккаунт с этим e-mail уже существует. Войдите с вашим паролем.',
      };
    }
    return { success: false, message: data.message || 'Ошибка регистрации' };
  } catch (err) {
    console.error('Register request failed:', err);
    return { success: false, message: 'Ошибка соединения с сервером' };
  }
}

// Login student user
export async function loginUserServer(
  email: string,
  pass: string
): Promise<{ success: boolean; message: string; user?: UserProfile }> {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password: pass }),
    });
    const data = await res.json();
    if (res.ok && data.success && data.user) {
      setCurrentUser(data.user);
      return { success: true, message: data.message || 'Успешный вход', user: data.user };
    }
    return { success: false, message: data.message || 'Неверный e-mail или пароль' };
  } catch (err) {
    console.error('Login request failed:', err);
    return { success: false, message: 'Ошибка соединения с сервером' };
  }
}

// Logout student user
export async function logoutUserServer(): Promise<void> {
  try {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
  } catch (err) {
    console.warn('Logout failed:', err);
  } finally {
    setCurrentUser(null);
  }
}

// Create Stripe Checkout Session
export async function createStripeCheckoutSession(): Promise<{ success: boolean; url?: string; stripeConfigured?: boolean; message?: string }> {
  try {
    const res = await fetch('/api/user/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const data = await res.json();
    if (res.ok && data.success && data.url) {
      return { success: true, url: data.url, stripeConfigured: true };
    }
    return {
      success: false,
      stripeConfigured: data.stripeConfigured ?? false,
      message: data.message || 'Ошибка создания платежной сессии Stripe',
    };
  } catch (err) {
    console.error('Stripe checkout request failed:', err);
    return { success: false, stripeConfigured: false, message: 'Ошибка соединения с сервером оплаты' };
  }
}

// Upgrade subscription (fallback handler)
export async function upgradeUserSubscription(): Promise<{ success: boolean; message: string; user?: UserProfile }> {
  try {
    const res = await fetch('/api/user/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const data = await res.json();
    if (res.ok && data.success && currentUser) {
      const updatedUser: UserProfile = {
        ...currentUser,
        subscriptionStatus: data.subscriptionStatus || 'active',
        subscriptionEnd: data.subscriptionEnd,
      };
      setCurrentUser(updatedUser);
      return { success: true, message: data.message || 'Подписка активирована', user: updatedUser };
    }
    return { success: false, message: data.message || 'Платёжная система Stripe не настроена в .env' };
  } catch (err) {
    console.error('Subscription update failed:', err);
    return { success: false, message: 'Ошибка соединения с сервером' };
  }
}

// Save progress to server
export async function syncProgressToServer(viewedSlideIds: string[]): Promise<boolean> {
  if (!currentUser) return false;
  try {
    const res = await fetch('/api/user/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ viewedSlides: viewedSlideIds }),
    });
    return res.ok;
  } catch (err) {
    console.warn('Sync progress failed:', err);
    return false;
  }
}

export async function syncReviewCardToServer(
  cardId: string,
  grade: 'again' | 'hard' | 'good' | 'easy'
): Promise<boolean> {
  if (!currentUser) return false;
  try {
    const res = await fetch('/api/user/review/grade', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ cardId, grade }),
    });
    return res.ok;
  } catch (err) {
    console.warn('Sync review card failed:', err);
    return false;
  }
}
export async function syncQuizResultToServer(
  lessonNumber: number,
  score: number,
  total: number
): Promise<boolean> {
  if (!currentUser) return false;
  try {
    const res = await fetch('/api/user/progress', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ quiz: { lessonNumber, score, total } }),
    });
    return res.ok;
  } catch (err) {
    console.warn('Sync quiz result failed:', err);
    return false;
  }
}
export async function fetchUserProgress(): Promise<UserProgressData | null> {
  if (!currentUser) return null;
  try {
    const res = await fetch('/api/user/progress', {
      method: 'GET',
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.progress) {
        return data.progress as UserProgressData;
      }
      return data as UserProgressData;
    }
  } catch (err) {
    console.warn('Fetch progress failed:', err);
  }
  return null;
}

// Initial check on load
if (typeof window !== 'undefined') {
  checkUserSessionServer();
}
