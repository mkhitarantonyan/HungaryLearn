// Persistent narration autoplay preference.
// Scoped to the narration UX only — never part of course mastery/progress.

export const AUTOPLAY_STORAGE_KEY = 'hungarylearn:narration-autoplay:v1';

/** Autoplay defaults OFF: browsers restrict autoplay and users must opt in. */
export function readAutoplayPreference(storage?: Pick<Storage, 'getItem'>): boolean {
  try {
    const store = storage ?? (typeof window !== 'undefined' ? window.localStorage : undefined);
    return store?.getItem(AUTOPLAY_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export function writeAutoplayPreference(value: boolean, storage?: Pick<Storage, 'setItem'>): void {
  try {
    const store = storage ?? (typeof window !== 'undefined' ? window.localStorage : undefined);
    store?.setItem(AUTOPLAY_STORAGE_KEY, String(value));
  } catch {
    // Persistence is best-effort; never block narration on storage failure.
  }
}
