import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const EXPECTED_PROJECT_REF = 'qkinyuxousscqgvjvrin';
const DEFAULT_OVERRIDE_BUCKET = 'hungarylearn-audio-overrides';
const MAX_AUDIO_BYTES = 10 * 1024 * 1024;

const MIME_EXTENSIONS: Readonly<Record<string, string>> = {
  'audio/mpeg': '.mp3',
  'audio/mp3': '.mp3',
  'audio/wav': '.wav',
  'audio/x-wav': '.wav',
  'audio/webm': '.webm',
  'audio/ogg': '.ogg',
  'audio/mp4': '.m4a',
  'audio/x-m4a': '.m4a',
};

export interface ValidatedAudioUpload {
  buffer: Buffer;
  mimeType: string;
  extension: string;
}

let serverClient: SupabaseClient | null = null;

function requiredServerConfig(): { url: string; serviceRoleKey: string; bucket: string } {
  const url = process.env.SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const bucket = process.env.SUPABASE_AUDIO_BUCKET?.trim() || DEFAULT_OVERRIDE_BUCKET;

  if (!url || !serviceRoleKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required for audio overrides');
  }

  const hostname = new URL(url).hostname;
  if (hostname !== `${EXPECTED_PROJECT_REF}.supabase.co`) {
    throw new Error(`SUPABASE_URL must target the approved project ${EXPECTED_PROJECT_REF}`);
  }
  if (bucket !== DEFAULT_OVERRIDE_BUCKET) {
    throw new Error(`SUPABASE_AUDIO_BUCKET must be ${DEFAULT_OVERRIDE_BUCKET}`);
  }

  return { url, serviceRoleKey, bucket };
}

function getStorageContext(): { client: SupabaseClient; bucket: string } {
  const config = requiredServerConfig();
  if (!serverClient) {
    serverClient = createClient(config.url, config.serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        detectSessionInUrl: false,
        persistSession: false,
      },
    });
  }
  return { client: serverClient, bucket: config.bucket };
}

export function validateAudioDataUrl(dataUrl: string): ValidatedAudioUpload {
  const match = /^data:([^;,]+);base64,([a-z0-9+/=\r\n]+)$/i.exec(dataUrl);
  if (!match) {
    throw new Error('Неподдерживаемый формат Data URL (ожидается base64)');
  }

  const mimeType = match[1].toLowerCase();
  const extension = MIME_EXTENSIONS[mimeType];
  if (!extension) {
    throw new Error('Поддерживаются только MP3, WAV, WebM, OGG и M4A');
  }

  const buffer = Buffer.from(match[2], 'base64');
  if (buffer.length === 0) {
    throw new Error('Пустой аудиофайл');
  }
  if (buffer.length > MAX_AUDIO_BYTES) {
    throw new Error('Аудиофайл слишком большой (макс. 10 МБ)');
  }

  return { buffer, mimeType, extension };
}

export async function assertPrivateOverrideBucket(): Promise<void> {
  const { client, bucket } = getStorageContext();
  const { data, error } = await client.storage.getBucket(bucket);
  if (error) throw error;
  if (data.public) {
    throw new Error(`Storage bucket ${bucket} must remain private`);
  }
}

export async function uploadPrivateAudio(
  storagePath: string,
  upload: ValidatedAudioUpload
): Promise<void> {
  const { client, bucket } = getStorageContext();
  const { error } = await client.storage.from(bucket).upload(storagePath, upload.buffer, {
    cacheControl: '31536000',
    contentType: upload.mimeType,
    upsert: false,
  });
  if (error) throw error;
}

export async function downloadPrivateAudio(storagePath: string): Promise<Buffer> {
  const { client, bucket } = getStorageContext();
  const { data, error } = await client.storage.from(bucket).download(storagePath);
  if (error) throw error;
  return Buffer.from(await data.arrayBuffer());
}

export async function removePrivateAudio(storagePath: string): Promise<void> {
  const { client, bucket } = getStorageContext();
  const { error } = await client.storage.from(bucket).remove([storagePath]);
  if (error) throw error;
}
