// Canonical course MP3s are immutable Firebase Hosting assets under public/audio.
export const AUDIO_BASE_URL = '/audio';

export function resolveAudioUrl(baseUrl: string, fileNameOrPath: string): string {
  const normalizedBase = baseUrl.replace(/\/+$/, '');
  const normalized = fileNameOrPath.replace(/^\/+/, '').replace(/^audio\//, '');
  return `${normalizedBase}/${normalized}`;
}

export function audioUrl(fileNameOrPath: string): string {
  return resolveAudioUrl(AUDIO_BASE_URL, fileNameOrPath);
}
