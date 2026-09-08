import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

export function normalizeTextEol(text: string): string {
  return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
}

export function normalizedTextSha256(text: string): string {
  return createHash('sha256').update(normalizeTextEol(text), 'utf8').digest('hex');
}

export function sha256Text(url: URL): string {
  return normalizedTextSha256(readFileSync(url, 'utf8'));
}
