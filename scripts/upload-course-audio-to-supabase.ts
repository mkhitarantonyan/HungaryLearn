import crypto from 'crypto';
import fs from 'fs/promises';
import path from 'path';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const EXPECTED_PROJECT_REF = 'qkinyuxousscqgvjvrin';
const DEFAULT_BUCKET = 'hungarylearn-course-audio';
const LOCAL_AUDIO_DIR = path.resolve('public/audio');
const REMOTE_AUDIO_PREFIX = 'audio';

const CONTENT_TYPES: Readonly<Record<string, string>> = {
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.webm': 'audio/webm',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
  '.mp4': 'audio/mp4',
};

interface Summary {
  discovered: number;
  uploaded: number;
  alreadyPresent: number;
  failed: number;
}

function requiredEnvironment(): { url: string; serviceRoleKey: string; bucket: string } {
  const url = process.env.SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const bucket = process.env.SUPABASE_COURSE_AUDIO_BUCKET?.trim() || DEFAULT_BUCKET;

  if (!url || !serviceRoleKey) {
    throw new Error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required');
  }
  if (new URL(url).hostname !== `${EXPECTED_PROJECT_REF}.supabase.co`) {
    throw new Error(`Refusing to touch any Supabase project except ${EXPECTED_PROJECT_REF}`);
  }
  if (bucket !== DEFAULT_BUCKET) {
    throw new Error(`SUPABASE_COURSE_AUDIO_BUCKET must be ${DEFAULT_BUCKET}`);
  }

  return { url, serviceRoleKey, bucket };
}

async function discoverAudioFiles(directory: string): Promise<string[]> {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return discoverAudioFiles(absolutePath);
    if (!entry.isFile() || !CONTENT_TYPES[path.extname(entry.name).toLowerCase()]) return [];
    return [absolutePath];
  }));
  return nested.flat().sort((a, b) => a.localeCompare(b));
}

function sha256(buffer: Buffer): string {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

function storagePathFor(filePath: string): string {
  const relativePath = path.relative(LOCAL_AUDIO_DIR, filePath).split(path.sep).join('/');
  return `${REMOTE_AUDIO_PREFIX}/${relativePath}`;
}

async function main(): Promise<void> {
  const summary: Summary = { discovered: 0, uploaded: 0, alreadyPresent: 0, failed: 0 };

  try {
    const { url, serviceRoleKey, bucket } = requiredEnvironment();
    const supabase = createClient(url, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        detectSessionInUrl: false,
        persistSession: false,
      },
    });

    const bucketResult = await supabase.storage.getBucket(bucket);
    if (bucketResult.error) {
      if (String(bucketResult.error.statusCode) !== '404') throw bucketResult.error;
      const created = await supabase.storage.createBucket(bucket, {
        allowedMimeTypes: ['audio/*'],
        public: true,
      });
      if (created.error) throw created.error;
      console.log(`Created public Storage bucket: ${bucket}`);
    } else if (!bucketResult.data.public) {
      throw new Error(
        `Storage bucket ${bucket} exists but is private. Make it public before using VITE_AUDIO_BASE_URL.`
      );
    }

    const files = await discoverAudioFiles(LOCAL_AUDIO_DIR);
    summary.discovered = files.length;

    for (const filePath of files) {
      const remotePath = storagePathFor(filePath);
      const localBuffer = await fs.readFile(filePath);
      const localHash = sha256(localBuffer);
      const remoteBefore = await supabase.storage.from(bucket).download(remotePath);

      if (!remoteBefore.error && remoteBefore.data) {
        const existingBuffer = Buffer.from(await remoteBefore.data.arrayBuffer());
        if (sha256(existingBuffer) === localHash) {
          summary.alreadyPresent += 1;
          continue;
        }
      }

      const contentType = CONTENT_TYPES[path.extname(filePath).toLowerCase()];
      const uploaded = await supabase.storage.from(bucket).upload(remotePath, localBuffer, {
        cacheControl: '31536000',
        contentType,
        upsert: true,
      });
      if (uploaded.error) {
        summary.failed += 1;
        console.error(`FAILED upload: ${remotePath}: ${uploaded.error.message}`);
        continue;
      }

      const verified = await supabase.storage.from(bucket).download(remotePath);
      if (verified.error || !verified.data) {
        summary.failed += 1;
        console.error(`FAILED verification download: ${remotePath}`);
        continue;
      }

      const verifiedBuffer = Buffer.from(await verified.data.arrayBuffer());
      if (sha256(verifiedBuffer) !== localHash) {
        summary.failed += 1;
        console.error(`FAILED hash verification: ${remotePath}`);
        continue;
      }

      summary.uploaded += 1;
    }
  } catch (error) {
    summary.failed += 1;
    console.error(error instanceof Error ? error.message : error);
  } finally {
    console.log(`Total discovered: ${summary.discovered}`);
    console.log(`Uploaded: ${summary.uploaded}`);
    console.log(`Already present: ${summary.alreadyPresent}`);
    console.log(`Failed: ${summary.failed}`);
  }

  if (summary.failed > 0 || summary.discovered === 0) {
    process.exitCode = 1;
  }
}

void main();
