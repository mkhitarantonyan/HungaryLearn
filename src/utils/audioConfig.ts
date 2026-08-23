// Single configuration point for static audio file URLs (slide narration & word pronunciation).
//
// Local development: files live in public/audio/ and are served from /audio/<file>.
// Cloud deployment: set VITE_AUDIO_BASE_URL to the public Supabase bucket prefix,
// ending in /hungarylearn-course-audio/audio. Local fallback remains unchanged.
//
// NOTE: VITE_* variables are baked in at build time (vite build) and loaded
// from .env automatically during development (npm run dev).

const LOCAL_AUDIO_PREFIX = '/audio';

const RAW_BASE_URL =
  typeof import.meta !== 'undefined' && import.meta.env
    ? (import.meta.env.VITE_AUDIO_BASE_URL as string | undefined)
    : typeof process !== 'undefined' && process.env
      ? process.env.VITE_AUDIO_BASE_URL
      : undefined;

export const AUDIO_BASE_URL: string =
  RAW_BASE_URL && RAW_BASE_URL.trim()
    ? RAW_BASE_URL.trim().replace(/\/+$/, '')
    : LOCAL_AUDIO_PREFIX;

export function resolveAudioUrl(baseUrl: string, fileNameOrPath: string): string {
  const normalizedBaseUrl = baseUrl.replace(/\/+$/, '');
  const normalized = fileNameOrPath.replace(/^\/+/, '');
  const normalizedLocalPrefix = LOCAL_AUDIO_PREFIX.replace(/^\/+/, '');
  const suffix = normalized.startsWith(`${normalizedLocalPrefix}/`)
    ? normalized.slice(normalizedLocalPrefix.length)
    : `/${normalized}`;
  return `${normalizedBaseUrl}${suffix}`;
}

/**
 * Resolves an audio file reference to a full URL.
 * Accepts either a bare file name ('1.1.mp3') or a legacy local path
 * ('/audio/1.1.mp3') and prefixes it with the configured base URL.
 */
export function audioUrl(fileNameOrPath: string): string {
  return resolveAudioUrl(AUDIO_BASE_URL, fileNameOrPath);
}
