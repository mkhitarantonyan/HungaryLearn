// Registry for custom recorded audio files (MP3 / WAV / WebM)
// Allows replacing synthetic TTS with real human voice recordings (Hungarian native speaker & Russian narrator)
//
// Audio can come from two sources:
//   1. Server overrides (global, admin-managed) — visible to ALL users.
//   2. Local overrides (IndexedDB) — per-browser fallback / offline edits.
// Server overrides take priority so admin edits are authoritative.

import { uploadAudioToServer, deleteAudioFromServer, loadServerAudioRegistry } from './serverSync';
import { wordAudioMap } from '../data/wordAudioMap';
import { audioUrl } from './audioConfig';

export interface AudioMap {
  [key: string]: string; // Maps word/phrase or ID to audio URL
}

const customAudioRegistry: AudioMap = {};
const serverAudioRegistry: AudioMap = {};
const disabledStaticKeys = new Set<string>();

type AudioChangeSubscriber = () => void;
const audioSubscribers = new Set<AudioChangeSubscriber>();

export function subscribeAudioChanges(cb: AudioChangeSubscriber): () => void {
  audioSubscribers.add(cb);
  return () => {
    audioSubscribers.delete(cb);
  };
}

export function notifyAudioChanges(): void {
  audioSubscribers.forEach(cb => {
    try {
      cb();
    } catch (e) {
      console.warn('Audio subscriber error:', e);
    }
  });
}

// Applies the global (server-side) audio registry. Server entries take priority
// over the local per-browser IndexedDB entries.
export function applyServerAudioRegistry(entries: Record<string, string>): void {
  for (const key of Object.keys(serverAudioRegistry)) {
    delete serverAudioRegistry[key];
  }
  for (const [key, url] of Object.entries(entries)) {
    if (typeof url === 'string') {
      serverAudioRegistry[key] = url;
    }
  }
  notifyAudioChanges();
}

// Static audio mappings directly wired into the application code.
// Slide narration files are named '<lesson>.<slide>.mp3' and resolved through
// audioUrl(), so they work both locally (/audio/...) and from a CDN/cloud bucket.
// getSlideCandidateKeys generates 'l{N}_s{S}' as the first candidate, so one key per slide is sufficient.
//
// Number of slides with pre-recorded narration per lesson (matches the MP3 files).
// All 28 lessons are included.
const SLIDE_AUDIO_COUNTS: Record<number, number> = {
  1: 11, 2: 10, 3: 11, 4: 12, 5: 12, 6: 10, 7: 11,
  8: 12, 9: 11, 10: 11, 11: 11, 12: 11, 13: 12, 14: 11,
  15: 12, 16: 12, 17: 11, 18: 12, 19: 11, 20: 12, 21: 11, 22: 11,
  23: 11, 24: 11, 25: 11, 26: 11, 27: 11, 28: 11,
};

function buildStaticAudioRegistry(): AudioMap {
  const registry: AudioMap = {};
  for (const [lesson, slideCount] of Object.entries(SLIDE_AUDIO_COUNTS)) {
    for (let slide = 1; slide <= slideCount; slide++) {
      const url = audioUrl(`${lesson}.${slide}.mp3`);
      registry[`l${lesson}_s${slide}`] = url;
      registry[`lesson${lesson}_slide${slide}`] = url;
      registry[`${lesson}.${slide}`] = url;
      registry[`${lesson}_${slide}`] = url;
      registry[`${lesson}.${slide}.mp3`] = url;
    }
  }
  return registry;
}

const staticAudioRegistry: AudioMap = buildStaticAudioRegistry();

// IndexedDB persistence for user-uploaded audio files
const DB_NAME = 'MagyarAudioDB';
const STORE_NAME = 'audio_files';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !('indexedDB' in window)) {
      reject('IndexedDB not supported');
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e: IDBVersionChangeEvent) => {
      const db = (e.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Helper to convert Blob to base64 Data URL for persistent storage across reloads
function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

// Persists a single data URL under one normalized key (local IndexedDB only).
async function saveAudioFileBlobWithDataUrl(
  key: string,
  dataUrl: string
): Promise<{ ok: boolean; url?: string; error?: string }> {
  const normalizedKey = key.trim().toLowerCase();
  try {
    customAudioRegistry[normalizedKey] = dataUrl;
    notifyAudioChanges();

    // Persist to IndexedDB (has large storage limit in hundreds of MBs/GBs)
    const db = await openDb();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(dataUrl, normalizedKey);
    await new Promise((resolve, reject) => {
      tx.oncomplete = resolve;
      tx.onerror = () => reject(tx.error);
    });

    return { ok: true, url: dataUrl };
  } catch (err) {
    console.error('Failed to save audio file to IndexedDB', err);
    return {
      ok: false,
      error: 'Не удалось сохранить аудиозапись. Возможно, файл слишком большой или превышен лимит памяти.'
    };
  }
}

export async function saveAudioFileBlob(
  key: string,
  fileOrBlob: Blob
): Promise<{ ok: boolean; url?: string; error?: string }> {
  const normalizedKey = key.trim().toLowerCase();
  let dataUrl: string;
  try {
    dataUrl = await blobToDataUrl(fileOrBlob);
  } catch (err) {
    console.error('Failed to read audio blob:', err);
    return { ok: false, error: 'Не удалось прочитать аудиофайл' };
  }

  const result = await saveAudioFileBlobWithDataUrl(normalizedKey, dataUrl);
  if (result.ok) {
    // Sync to the server so the change is visible to all users (admin only).
    void uploadAudioToServer([normalizedKey], dataUrl);
  }
  return result;
}

export async function loadSavedAudioFiles(): Promise<void> {
  if (typeof window === 'undefined') return;

  // Clean up legacy magyar_audio_ items in LocalStorage if present
  try {
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const lsKey = localStorage.key(i);
      if (lsKey && lsKey.startsWith('magyar_audio_')) {
        keysToRemove.push(lsKey);
      }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));
  } catch (e) {
    console.warn('Failed to clean legacy audio items from LocalStorage', e);
  }

  // Load asynchronously from IndexedDB
  try {
    const db = await openDb();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.openCursor();

    request.onsuccess = () => {
      const cursor = request.result;
      if (cursor) {
        const key = cursor.key as string;
        const val = cursor.value;
        if (val) {
          if (typeof val === 'string') {
            customAudioRegistry[key] = val;
            notifyAudioChanges();
          } else if (val instanceof Blob) {
            blobToDataUrl(val).then(dataUrl => {
              customAudioRegistry[key] = dataUrl;
              notifyAudioChanges();
            });
          }
        }
        cursor.continue();
      }
    };
  } catch (err) {
    console.warn('Could not load saved audio files from IndexedDB', err);
  }
}

export async function removeSavedAudioFile(key: string): Promise<void> {
  const normalizedKey = key.trim().toLowerCase();
  delete serverAudioRegistry[normalizedKey];
  delete customAudioRegistry[normalizedKey];
  notifyAudioChanges();

  try {
    localStorage.removeItem(`magyar_audio_${normalizedKey}`);
  } catch (e) {}

  try {
    const db = await openDb();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(normalizedKey);
  } catch (err) {
    console.warn('Could not remove audio file from IndexedDB');
  }

  // Remove from the server so all users see the deletion (admin only).
  void deleteAudioFromServer(normalizedKey);
}

// Preload saved files on app start
if (typeof window !== 'undefined') {
  loadSavedAudioFiles();
  // Also load global admin-managed audio from the server (visible to all users).
  loadServerAudioRegistry()
    .then((entries) => {
      if (entries) applyServerAudioRegistry(entries);
    })
    .catch((err) => console.warn('Failed to load server audio registry:', err));
}

// Persistent disabled static keys in localStorage
const DISABLED_KEYS_LS = 'magyar_disabled_static_audio';

function loadDisabledStaticKeys() {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(DISABLED_KEYS_LS);
    if (raw) {
      const arr: string[] = JSON.parse(raw);
      arr.forEach(k => disabledStaticKeys.add(k.trim().toLowerCase()));
    }
  } catch (e) {
    console.warn('Failed to load disabled audio keys', e);
  }
}

function saveDisabledStaticKeys() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(DISABLED_KEYS_LS, JSON.stringify(Array.from(disabledStaticKeys)));
  } catch (e) {
    console.warn('Failed to save disabled audio keys', e);
  }
}

if (typeof window !== 'undefined') {
  loadDisabledStaticKeys();
}

export interface AudioOverridesSummary {
  serverOverrides: string[];
  customOverrides: string[];
  disabledKeys: string[];
  totalCount: number;
}

export function getActiveAudioOverridesSummary(): AudioOverridesSummary {
  const server = Object.keys(serverAudioRegistry);
  const custom = Object.keys(customAudioRegistry);
  const disabled = Array.from(disabledStaticKeys);
  const allKeys = new Set([...server, ...custom, ...disabled]);
  return {
    serverOverrides: server,
    customOverrides: custom,
    disabledKeys: disabled,
    totalCount: allKeys.size,
  };
}

export async function resetAllAudioOverrides(): Promise<{ count: number; keys: string[] }> {
  const summary = getActiveAudioOverridesSummary();
  const allKeysArray = Array.from(new Set([
    ...summary.serverOverrides,
    ...summary.customOverrides,
    ...summary.disabledKeys,
  ]));

  disabledStaticKeys.clear();
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(DISABLED_KEYS_LS);
    } catch (e) {}
  }

  for (const key of Object.keys(customAudioRegistry)) {
    delete customAudioRegistry[key];
  }
  if (typeof window !== 'undefined') {
    try {
      const db = await openDb();
      const tx = db.transaction(STORE_NAME, 'readwrite');
      tx.objectStore(STORE_NAME).clear();
    } catch (err) {
      console.warn('Could not clear IndexedDB audio store:', err);
    }
  }

  for (const key of Object.keys(serverAudioRegistry)) {
    delete serverAudioRegistry[key];
  }
  for (const key of allKeysArray) {
    void deleteAudioFromServer(key);
  }

  notifyAudioChanges();
  console.log(`[AudioRegistry] Reset all overrides. Cleared ${allKeysArray.length} keys:`, allKeysArray);
  return { count: allKeysArray.length, keys: allKeysArray };
}

export function registerAudioFile(key: string, url: string) {
  const norm = key.trim().toLowerCase();
  customAudioRegistry[norm] = url;
  disabledStaticKeys.delete(norm);
  saveDisabledStaticKeys();
  notifyAudioChanges();
}

export function getAudioFileUrl(textOrKey: string): string | null {
  const normalized = textOrKey.trim().toLowerCase();
  // Server (global) overrides take priority over local per-browser overrides.
  if (serverAudioRegistry[normalized]) {
    return serverAudioRegistry[normalized];
  }
  if (customAudioRegistry[normalized]) {
    return customAudioRegistry[normalized];
  }
  if (disabledStaticKeys.has(normalized)) {
    return null;
  }
  if (staticAudioRegistry[normalized]) {
    return staticAudioRegistry[normalized];
  }
  // Static word-level MP3 files shipped in /public/audio/ (named after the Hungarian word)
  if (wordAudioMap[normalized]) {
    return wordAudioMap[normalized];
  }
  return null;
}

export function getSlideCandidateKeys(slideId: number, lessonNumber: number = 1): string[] {
  const keys = [
    `l${lessonNumber}_s${slideId}`,
    `lesson${lessonNumber}_slide${slideId}`,
    `${lessonNumber}.${slideId}`,
    `${lessonNumber}_${slideId}`
  ];

  // For Lesson 1, also support historic slide keys for backward compatibility
  if (lessonNumber === 1) {
    keys.push(`1.${slideId}`, `1,${slideId}`, `1_${slideId}`);
  }

  return keys.map(k => k.trim().toLowerCase());
}

export async function saveAudioForSlide(
  slideId: number,
  fileOrBlob: Blob,
  lessonNumber: number = 1
): Promise<{ ok: boolean; url?: string; error?: string }> {
  const keys = getSlideCandidateKeys(slideId, lessonNumber);

  let dataUrl: string;
  try {
    dataUrl = await blobToDataUrl(fileOrBlob);
  } catch (err) {
    console.error('Failed to read audio blob:', err);
    return { ok: false, error: 'Не удалось прочитать аудиофайл' };
  }

  let lastResult: { ok: boolean; url?: string; error?: string } = { ok: false, error: 'Не удалось сохранить аудиозапись.' };
  for (const key of keys) {
    disabledStaticKeys.delete(key);
    const res = await saveAudioFileBlobWithDataUrl(key, dataUrl);
    if (!res.ok) {
      return res;
    }
    lastResult = res;
  }
  saveDisabledStaticKeys();

  // One upload per file covering all slide candidate keys.
  void uploadAudioToServer(keys, dataUrl);

  return lastResult;
}

export async function removeAudioForSlide(slideId: number, lessonNumber: number = 1): Promise<void> {
  const keys = getSlideCandidateKeys(slideId, lessonNumber);
  for (const key of keys) {
    await removeSavedAudioFile(key);
    disabledStaticKeys.add(key);
  }
  saveDisabledStaticKeys();
}

export function hasAudioForSlide(slideId: number, lessonNumber: number = 1): boolean {
  const keys = getSlideCandidateKeys(slideId, lessonNumber);
  return keys.some(key => !!getAudioFileUrl(key));
}

let currentActiveAudio: HTMLAudioElement | null = null;

export function stopActiveAudio(): void {
  if (currentActiveAudio) {
    try {
      currentActiveAudio.pause();
      currentActiveAudio.currentTime = 0;
      currentActiveAudio.onended = null;
      currentActiveAudio.onerror = null;
    } catch (e) {
      console.warn('Error stopping active audio:', e);
    }
    currentActiveAudio = null;
  }
}

export function playCustomAudioOrTTS(
  text: string,
  lang: 'hu-HU' | 'ru-RU' = 'hu-HU',
  rate?: number,
  pitch?: number,
  onEnd?: () => void,
  onError?: (err: unknown) => void
): boolean {
  const customUrl = getAudioFileUrl(text);
  if (customUrl) {
    try {
      // Always stop existing audio and speech synthesis before playing new track
      stopActiveAudio();
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      console.log('[Audio] Playing custom file:', { text, url: customUrl });
      const audio = new Audio(customUrl);
      audio.preload = 'auto';
      currentActiveAudio = audio;

      if (rate) audio.playbackRate = rate;

      // Prevent onError from firing twice (playPromise rejection + onerror event).
      let errorFired = false;
      const handleError = (e: unknown) => {
        if (errorFired) return;
        errorFired = true;
        console.warn(`Error playing custom audio file ${customUrl}, falling back to TTS`, e);
        if (currentActiveAudio === audio) {
          currentActiveAudio = null;
        }
        if (onError) onError(e);
      };

      audio.onended = () => {
        if (currentActiveAudio === audio) {
          currentActiveAudio = null;
        }
        if (onEnd) onEnd();
      };

      audio.onerror = (e) => {
        handleError(e);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          handleError(err);
        });
      }
      return true; // Played custom audio
    } catch (e) {
      console.warn('Audio construction failed, falling back to TTS');
    }
  }
  return false; // No custom audio found
}
