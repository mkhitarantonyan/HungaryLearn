// Utility for Admin Mode (Editor Permissions) and Custom Word/Sound Overrides

const ADMIN_TOKEN_KEY = 'magyar_admin_session';
const CUSTOM_WORDS_KEY = 'magyar_custom_words_overrides';

export interface WordOverride {
  originalText: string;
  customText?: string;
  customAudioUrl?: string; // Data URL or Blob URL or relative path
}

type AdminListener = (isAdmin: boolean) => void;
const listeners: Set<AdminListener> = new Set();

let currentAdminState = false;

export function isAdminLoggedIn(): boolean {
  return currentAdminState;
}

export function setAdminMode(enabled: boolean): void {
  currentAdminState = enabled;
  notifyListeners(enabled);
}

export async function checkAdminSessionServer(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  try {
    const res = await fetch('/api/admin/verify', {
      method: 'GET',
      credentials: 'include',
    });
    const data = await res.json();
    const isValid = res.ok && data.success && data.isAdmin;
    setAdminMode(isValid);
    return isValid;
  } catch (err) {
    console.warn('Failed to verify admin session with server:', err);
    // Keep local state if server is offline/unreachable in client mode
    return currentAdminState;
  }
}

export async function loginAdminServer(user: string, pass: string): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ username: user, password: pass }),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      setAdminMode(true);
      return { success: true, message: data.message || 'Успешный вход' };
    } else {
      setAdminMode(false);
      return { success: false, message: data.message || 'Неверный логин или пароль' };
    }
  } catch (err) {
    console.error('Login request failed', err);
    return { success: false, message: 'Ошибка связи с сервером проверки авторизации' };
  }
}

export async function logoutAdmin(): Promise<void> {
  try {
    await fetch('/api/admin/logout', {
      method: 'POST',
      credentials: 'include',
    });
  } catch (e) {
    console.warn('Logout request failed:', e);
  } finally {
    setAdminMode(false);
  }
}

export function subscribeAdminState(callback: AdminListener): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function notifyListeners(isAdmin: boolean): void {
  listeners.forEach(cb => cb(isAdmin));
}

// Check session on load
if (typeof window !== 'undefined') {
  checkAdminSessionServer();
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
