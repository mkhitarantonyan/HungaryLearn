const MAX_AUDIO_BYTES = 10 * 1024 * 1024;
const MIME_EXTENSIONS: Readonly<Record<string, string>> = {
  'audio/mpeg': '.mp3', 'audio/mp3': '.mp3', 'audio/wav': '.wav', 'audio/x-wav': '.wav',
  'audio/webm': '.webm', 'audio/ogg': '.ogg', 'audio/mp4': '.m4a', 'audio/x-m4a': '.m4a',
};

export interface ValidatedAudioUpload { buffer: Buffer; mimeType: string; extension: string }

export function validateAudioDataUrl(dataUrl: string): ValidatedAudioUpload {
  const match = /^data:([^;,]+);base64,([a-z0-9+/=\r\n]+)$/i.exec(dataUrl);
  if (!match) throw new Error('Неподдерживаемый формат Data URL (ожидается base64)');
  const mimeType = match[1].toLowerCase();
  const extension = MIME_EXTENSIONS[mimeType];
  if (!extension) throw new Error('Поддерживаются только MP3, WAV, WebM, OGG и M4A');
  const buffer = Buffer.from(match[2], 'base64');
  if (buffer.length === 0) throw new Error('Пустой аудиофайл');
  if (buffer.length > MAX_AUDIO_BYTES) throw new Error('Аудиофайл слишком большой (макс. 10 МБ)');
  return { buffer, mimeType, extension };
}
