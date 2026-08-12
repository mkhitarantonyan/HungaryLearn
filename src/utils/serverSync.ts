// Client-side sync helpers for admin-managed content (word overrides & audio files).
// The server is the source of truth for content that must be visible to ALL users,
// not just the browser/device where the admin edited it.

import { isAdminLoggedIn } from './adminStore';

async function request(url: string, options?: RequestInit): Promise<Response | null> {
  try {
    return await fetch(url, { credentials: 'include', ...options });
  } catch (err) {
    console.warn('[ServerSync] Network request failed:', url, err);
    return null;
  }
}

// Load the global audio registry: normalized key -> server URL
export async function loadServerAudioRegistry(): Promise<Record<string, string> | null> {
  const res = await request('/api/audio-registry');
  if (!res || !res.ok) return null;
  try {
    const data = await res.json();
    if (data?.success && data.audio) {
      const entries: Record<string, string> = {};
      for (const [key, meta] of Object.entries(data.audio)) {
        const url = (meta as { url?: string } | undefined)?.url;
        if (typeof key === 'string' && url) {
          entries[key] = url;
        }
      }
      return entries;
    }
  } catch (err) {
    console.warn('[ServerSync] Failed to parse audio registry:', err);
  }
  return null;
}

// Load the global word overrides
export async function loadServerWordOverrides(): Promise<Array<{ originalText: string; customText?: string }> | null> {
  const res = await request('/api/word-overrides');
  if (!res || !res.ok) return null;
  try {
    const data = await res.json();
    if (data?.success && Array.isArray(data.overrides)) {
      return data.overrides as Array<{ originalText: string; customText?: string }>;
    }
  } catch (err) {
    console.warn('[ServerSync] Failed to parse word overrides:', err);
  }
  return null;
}

export async function uploadAudioToServer(keys: string[], dataUrl: string): Promise<boolean> {
  if (!isAdminLoggedIn()) return false;
  const res = await request('/api/admin/audio', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ keys, dataUrl }),
  });
  return !!res && res.ok;
}

export async function deleteAudioFromServer(key: string): Promise<boolean> {
  if (!isAdminLoggedIn()) return false;
  const res = await request(`/api/admin/audio/${encodeURIComponent(key)}`, { method: 'DELETE' });
  return !!res && res.ok;
}

export async function saveWordOverrideToServer(originalText: string, customText?: string): Promise<boolean> {
  if (!isAdminLoggedIn()) return false;
  const res = await request('/api/admin/word-overrides', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ originalText, customText }),
  });
  return !!res && res.ok;
}

export async function deleteWordOverrideFromServer(originalText: string): Promise<boolean> {
  if (!isAdminLoggedIn()) return false;
  const res = await request(
    `/api/admin/word-overrides/${encodeURIComponent(originalText.trim().toLowerCase())}`,
    { method: 'DELETE' }
  );
  return !!res && res.ok;
}
