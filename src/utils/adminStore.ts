// Utility for Admin Mode (Editor Permissions) and Custom Word/Sound Overrides

import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User as FirebaseUser } from 'firebase/auth';
import { ApiRequestError, apiJson } from '../lib/apiClient';
import { getFirebaseAuth } from '../lib/firebase';

const CUSTOM_WORDS_KEY = 'magyar_custom_words_overrides';

export interface WordOverride {
  originalText: string;
  customText?: string;
  customAudioUrl?: string; // Data URL or Blob URL or relative path
}

type AdminListener = (isAdmin: boolean) => void;
const listeners: Set<AdminListener> = new Set();
export type AdminAuthStatus = 'initializing' | 'checking' | 'authorized' | 'anonymous' | 'error';
export interface AdminAuthSnapshot {
  status: AdminAuthStatus;
  email: string | null;
  message?: string;
}
type AdminAuthListener = (snapshot: AdminAuthSnapshot) => void;
const authListeners = new Set<AdminAuthListener>();

let currentAdminState = false;
let currentAdminSnapshot: AdminAuthSnapshot = { status: 'initializing', email: null };
let verificationVersion = 0;

export function isAdminLoggedIn(): boolean {
  return currentAdminState;
}

export function getAdminAuthSnapshot(): AdminAuthSnapshot {
  return currentAdminSnapshot;
}

function publishAdminSnapshot(snapshot: AdminAuthSnapshot): void {
  currentAdminSnapshot = snapshot;
  const nextIsAdmin = snapshot.status === 'authorized';
  if (currentAdminState !== nextIsAdmin) {
    currentAdminState = nextIsAdmin;
    notifyListeners(nextIsAdmin);
  }
  for (const callback of authListeners) callback(snapshot);
}

interface AdminVerificationOptions {
  forceRefresh: boolean;
  signOutNonAdmin: boolean;
}

interface AdminVerificationResult {
  success: boolean;
  message: string;
}

async function verifyAdminUser(user: FirebaseUser, options: AdminVerificationOptions): Promise<AdminVerificationResult> {
  const version = ++verificationVersion;
  publishAdminSnapshot({ status: 'checking', email: user.email });
  try {
    const tokenResult = await user.getIdTokenResult(options.forceRefresh);
    if (tokenResult.claims.admin !== true) {
      if (options.signOutNonAdmin) await signOut(getFirebaseAuth());
      if (version === verificationVersion) publishAdminSnapshot({ status: 'anonymous', email: null });
      return { success: false, message: 'У этого аккаунта нет прав администратора' };
    }
    const data = await apiJson<{ success: boolean; isAdmin: boolean }>('/api/admin/verify');
    if (!data.success || !data.isAdmin) {
      if (options.signOutNonAdmin) await signOut(getFirebaseAuth());
      if (version === verificationVersion) publishAdminSnapshot({ status: 'anonymous', email: null });
      return { success: false, message: 'У этого аккаунта нет прав администратора' };
    }
    if (version === verificationVersion) publishAdminSnapshot({ status: 'authorized', email: user.email });
    return { success: true, message: 'Успешный вход' };
  } catch (error) {
    const unauthorized = error instanceof ApiRequestError && (error.status === 401 || error.status === 403);
    if (unauthorized && options.signOutNonAdmin) await signOut(getFirebaseAuth());
    const message = unauthorized
      ? 'У этого аккаунта нет прав администратора'
      : error instanceof ApiRequestError && error.status === 0
        ? 'Не удалось подключиться к серверу. Проверьте сеть и повторите попытку.'
        : 'Не удалось проверить права администратора. Повторите попытку.';
    if (version === verificationVersion) {
      publishAdminSnapshot(unauthorized
        ? { status: 'anonymous', email: null }
        : { status: 'error', email: user.email, message });
    }
    return { success: false, message };
  }
}

export async function checkAdminSessionServer(options: { signOutNonAdmin?: boolean } = {}): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  await getFirebaseAuth().authStateReady();
  const user = getFirebaseAuth().currentUser;
  if (!user) {
    ++verificationVersion;
    publishAdminSnapshot({ status: 'anonymous', email: null });
    return false;
  }
  const result = await verifyAdminUser(user, {
    forceRefresh: true,
    signOutNonAdmin: options.signOutNonAdmin === true,
  });
  return result.success;
}

export function adminLoginMessage(error: unknown): string {
  const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : '';
  if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) {
    return 'Неверный e-mail или пароль.';
  }
  if (code.includes('too-many-requests')) return 'Слишком много попыток. Подождите и попробуйте снова.';
  if (code.includes('network-request-failed')) return 'Ошибка сети. Проверьте подключение и повторите попытку.';
  if (code.includes('invalid-email')) return 'Проверьте правильность e-mail.';
  return 'Не удалось войти. Повторите попытку.';
}

export async function loginAdminServer(email: string, pass: string): Promise<AdminVerificationResult> {
  try {
    const credential = await signInWithEmailAndPassword(getFirebaseAuth(), email.trim(), pass);
    return await verifyAdminUser(credential.user, { forceRefresh: true, signOutNonAdmin: true });
  } catch (error) {
    ++verificationVersion;
    publishAdminSnapshot({ status: 'anonymous', email: null });
    return { success: false, message: adminLoginMessage(error) };
  }
}

export async function logoutAdmin(): Promise<void> {
  ++verificationVersion;
  try {
    await signOut(getFirebaseAuth());
  } finally {
    publishAdminSnapshot({ status: 'anonymous', email: null });
  }
}

export function subscribeAdminState(callback: AdminListener): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

export function subscribeAdminAuthState(callback: AdminAuthListener): () => void {
  authListeners.add(callback);
  callback(currentAdminSnapshot);
  return () => authListeners.delete(callback);
}

function notifyListeners(isAdmin: boolean): void {
  listeners.forEach(cb => cb(isAdmin));
}

if (typeof window !== 'undefined') {
  onAuthStateChanged(getFirebaseAuth(), (user) => {
    if (!user) {
      ++verificationVersion;
      publishAdminSnapshot({ status: 'anonymous', email: null });
      return;
    }
    void verifyAdminUser(user, { forceRefresh: false, signOutNonAdmin: false });
  });
}

// Memory cache for custom word overrides
// Two layers:
//   1. serverWordOverridesMap — global admin-managed overrides (visible to all users).
//   2. customWordsMap — local per-browser overrides (IndexedDB/localStorage fallback).
// Server overrides take priority so admin edits are authoritative.
let customWordsMap: Record<string, WordOverride> = {};
let serverWordOverridesMap: Record<string, WordOverride> = {};

export function applyServerWordOverrides(
  entries: Array<{ originalText: string; customText?: string }>
): void {
  const next: Record<string, WordOverride> = {};
  for (const entry of entries) {
    if (!entry.originalText) continue;
    next[normalizeWordKey(entry.originalText)] = {
      originalText: entry.originalText,
      customText: entry.customText,
    };
  }
  serverWordOverridesMap = next;
}

function loadCustomWordsFromStorage() {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(CUSTOM_WORDS_KEY);
    if (raw) {
      customWordsMap = JSON.parse(raw);
      // Register existing custom word audio URLs into audioRegistry
      import('./audioRegistry').then(({ registerAudioFile }) => {
        Object.values(customWordsMap).forEach((override) => {
          if (override.customAudioUrl) {
            registerAudioFile(override.originalText, override.customAudioUrl);
            if (override.customText) {
              registerAudioFile(override.customText, override.customAudioUrl);
            }
          }
        });
      }).catch(() => {});
    }
  } catch (e) {
    console.warn('Failed to load custom words from localStorage', e);
  }
}

function saveCustomWordsToStorage() {
  if (typeof window === 'undefined') return;
  try {
    // Save lightweight text overrides to localStorage without huge base64 audio (which goes to IndexedDB)
    const sanitizedMap: Record<string, WordOverride> = {};
    for (const [key, val] of Object.entries(customWordsMap)) {
      sanitizedMap[key] = {
        originalText: val.originalText,
        customText: val.customText
      };
    }
    localStorage.setItem(CUSTOM_WORDS_KEY, JSON.stringify(sanitizedMap));
  } catch (e) {
    console.warn('Failed to save custom words to localStorage', e);
  }
}

export function normalizeWordKey(text: string): string {
  return text.trim().toLowerCase();
}

export function getWordOverride(originalText: string): WordOverride | null {
  const key = normalizeWordKey(originalText);
  return serverWordOverridesMap[key] || customWordsMap[key] || null;
}

export function getDisplayWord(originalText: string): string {
  const override = getWordOverride(originalText);
  if (override && override.customText && override.customText.trim() !== '') {
    return override.customText;
  }
  return originalText;
}

export async function setWordOverride(
  originalText: string,
  newCustomText?: string,
  audioBlob?: Blob
): Promise<{ ok: boolean; error?: string }> {
  const key = normalizeWordKey(originalText);
  const existing = customWordsMap[key] || { originalText };

  let audioUrl = existing.customAudioUrl;

  if (audioBlob) {
    const { saveAudioFileBlob, registerAudioFile } = await import('./audioRegistry');
    const res = await saveAudioFileBlob(originalText, audioBlob);
    if (!res.ok) {
      return { ok: false, error: res.error };
    }
    audioUrl = res.url;
    if (newCustomText) {
      registerAudioFile(newCustomText, audioUrl!);
    }
  }

  customWordsMap[key] = {
    originalText,
    customText: newCustomText !== undefined ? newCustomText.trim() : existing.customText,
    customAudioUrl: audioUrl
  };

  saveCustomWordsToStorage();

  // Sync to the server so the change is visible to all users (admin only).
  const { saveWordOverrideToServer } = await import('./serverSync');
  void saveWordOverrideToServer(originalText, customWordsMap[key].customText || undefined);

  return { ok: true };
}

export async function removeWordOverride(originalText: string): Promise<void> {
  const key = normalizeWordKey(originalText);
  const removed = customWordsMap[key];

  if (removed) {
    delete customWordsMap[key];
    saveCustomWordsToStorage();
  }
  delete serverWordOverridesMap[key];

  // Remove the associated audio (original word AND custom display text keys)
  // from the audio registry, IndexedDB and the server. Previously the audio
  // survived in IndexedDB after deleting a word override, resurrecting the
  // removed word on the next page load.
  const { removeSavedAudioFile } = await import('./audioRegistry');
  await removeSavedAudioFile(key);
  if (removed?.customText && removed.customText.trim() !== '') {
    await removeSavedAudioFile(removed.customText.trim());
  }

  // Sync the deletion to the server so all users see it (admin only).
  const { deleteWordOverrideFromServer } = await import('./serverSync');
  void deleteWordOverrideFromServer(originalText);
}

export function getAllWordOverrides(): WordOverride[] {
  const merged: Record<string, WordOverride> = {};
  for (const [key, val] of Object.entries(customWordsMap)) {
    merged[key] = val;
  }
  for (const [key, val] of Object.entries(serverWordOverridesMap)) {
    merged[key] = val;
  }
  return Object.values(merged);
}

// Initial load: local storage first, then global server overrides on top.
if (typeof window !== 'undefined') {
  loadCustomWordsFromStorage();
  import('./serverSync')
    .then(({ loadServerWordOverrides }) =>
      loadServerWordOverrides().then((entries) => {
        if (entries) applyServerWordOverrides(entries);
      })
    )
    .catch((err) => console.warn('Failed to load server word overrides:', err));
}
