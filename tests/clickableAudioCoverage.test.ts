import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { GENERATED_VOCABULARY_ENTRIES } from '../src/data/generatedVocabularyCatalog';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';
import { VOCABULARY_LIST } from '../src/data/lessonData';

const projectRoot = fileURLToPath(new URL('..', import.meta.url));
const lessonDir = path.join(projectRoot, 'src', 'data', 'lessons');
const audioDir = path.join(projectRoot, 'public', 'audio');
const mapPath = path.join(projectRoot, 'src', 'data', 'wordAudioMap.ts');

function normalizeKey(value: string): string {
  return value
    .normalize('NFC')
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase('hu-HU');
}

function decodeHtml(value: string): string {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function collectClickableTargets(): Map<string, string> {
  const targets = new Map<string, string>();

  const add = (text: string): void => {
    const clean = text.normalize('NFC').trim();
    if (!clean) return;
    targets.set(normalizeKey(clean), clean);
  };

  for (const file of fs
    .readdirSync(lessonDir)
    .filter((name) => /^lesson\d+\.ts$/.test(name))) {
    const source = fs.readFileSync(path.join(lessonDir, file), 'utf8');

    for (const match of source.matchAll(
      /data-speak-text\s*=\s*(["'])(.*?)\1/gs,
    )) {
      add(decodeHtml(match[2]));
    }
  }

  for (const item of GENERATED_VOCABULARY_ENTRIES) {
    add(item.hu);
  }

  for (const item of VOCABULARY_LIST) {
    add(item.hu);
  }

  for (const items of Object.values(LESSON_TRANSLATION_MAP)) {
    for (const item of items) {
      add(
        item.direction === 'hu-to-ru'
          ? item.sourceText
          : item.targetText,
      );
    }
  }

  return targets;
}

function readWordAudioMap(): Map<string, string> {
  const source = fs.readFileSync(mapPath, 'utf8');
  const entries = new Map<string, string>();

  const regex =
    /^\s*'((?:\\'|[^'])+)':\s*audioUrl\('((?:\\'|[^'])+)'\),?\s*$/gm;

  for (const match of source.matchAll(regex)) {
    const key = match[1].replace(/\\'/g, "'");
    const file = match[2].replace(/\\'/g, "'");
    entries.set(normalizeKey(key), file);
  }

  return entries;
}

test('every learner-facing clickable pronunciation target has a physical mapped audio file', () => {
  const targets = collectClickableTargets();
  const audioMap = readWordAudioMap();

  const failures: string[] = [];

  for (const [key, text] of targets) {
    const fileName = audioMap.get(key);

    if (!fileName) {
      failures.push(`${text}: missing wordAudioMap entry`);
      continue;
    }

    const fullPath = path.join(audioDir, fileName);

    if (!fs.existsSync(fullPath)) {
      failures.push(`${text}: mapped file missing (${fileName})`);
      continue;
    }

    if (fs.statSync(fullPath).size <= 0) {
      failures.push(`${text}: mapped file is empty (${fileName})`);
    }
  }

  assert.equal(
    failures.length,
    0,
    `Clickable audio coverage failures (${failures.length}):\n${failures.join('\n')}`,
  );

  assert.ok(
    targets.size >= 700,
    `Unexpectedly small clickable-audio inventory: ${targets.size}`,
  );
});
