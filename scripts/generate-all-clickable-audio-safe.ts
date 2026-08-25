import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawnSync } from 'node:child_process';

import { GENERATED_VOCABULARY_ENTRIES } from '../src/data/generatedVocabularyCatalog';
import { LESSON_TRANSLATION_MAP } from '../src/data/lessonTranslations';
import { VOCABULARY_LIST } from '../src/data/lessonData';

const ROOT = process.cwd();
const LESSON_DIR = path.join(ROOT, 'src', 'data', 'lessons');
const AUDIO_DIR = path.join(ROOT, 'public', 'audio');
const MAP_PATH = path.join(ROOT, 'src', 'data', 'wordAudioMap.ts');

const VOICE = process.env.WORD_AUDIO_VOICE || 'hu-HU-TamasNeural';
const RATE = process.env.WORD_AUDIO_RATE || '-8%';
const TIMEOUT_MS = 30_000;
const MAX_ATTEMPTS = 3;

interface Target {
  key: string;
  text: string;
  sources: Set<string>;
}

interface MapEntry {
  key: string;
  file: string;
}

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

function safeFileName(text: string): string {
  let value = text.normalize('NFC').trim();

  // Terminal punctuation does not need a separate filename.
  value = value.replace(/[!?….,;:]+$/u, '');
  value = value.replace(/-+$/u, '');

  // Remove characters illegal in Windows filenames.
  value = value.replace(/[<>:"/\\|?*]/g, '');

  // Make multi-word filenames readable and deterministic.
  value = value.replace(/\s+/g, '_');

  if (!value) {
    throw new Error(`Cannot create filename for ${JSON.stringify(text)}`);
  }

  return `${value}.mp3`;
}

function addTarget(
  targets: Map<string, Target>,
  text: string,
  source: string,
): void {
  const clean = text.normalize('NFC').trim();
  if (!clean) return;

  const key = normalizeKey(clean);
  const existing = targets.get(key);

  if (existing) {
    existing.sources.add(source);
    return;
  }

  targets.set(key, {
    key,
    text: clean,
    sources: new Set([source]),
  });
}

function collectTargets(): Map<string, Target> {
  const targets = new Map<string, Target>();

  // 1. Every literal clickable item inside lesson slide HTML.
  const lessonFiles = fs
    .readdirSync(LESSON_DIR)
    .filter((name) => /^lesson\d+\.ts$/.test(name))
    .sort(
      (a, b) =>
        Number(a.match(/\d+/)?.[0] ?? 0) -
        Number(b.match(/\d+/)?.[0] ?? 0),
    );

  for (const file of lessonFiles) {
    const lessonNumber = Number(file.match(/\d+/)?.[0] ?? 0);
    const source = fs.readFileSync(path.join(LESSON_DIR, file), 'utf8');
    const regex = /data-speak-text\s*=\s*(["'])(.*?)\1/gs;

    for (const match of source.matchAll(regex)) {
      addTarget(
        targets,
        decodeHtml(match[2]),
        `lesson ${lessonNumber} data-speak-text`,
      );
    }
  }

  // 2. Every canonical course vocabulary item used by WordTrainer/ReviewWarmup.
  for (const item of GENERATED_VOCABULARY_ENTRIES) {
    addTarget(
      targets,
      item.hu,
      `vocabulary L${item.lessonNumber}`,
    );
  }

  // 3. Legacy/common vocabulary used by SlideContent words-practice.
  for (const item of VOCABULARY_LIST) {
    addTarget(targets, item.hu, 'VOCABULARY_LIST');
  }

  // 4. Every Hungarian sentence used by TranslationTrainerModal SpeechButton.
  for (const [lessonNumberText, items] of Object.entries(LESSON_TRANSLATION_MAP)) {
    const lessonNumber = Number(lessonNumberText);

    for (const item of items) {
      const hungarianText =
        item.direction === 'hu-to-ru'
          ? item.sourceText
          : item.targetText;

      addTarget(
        targets,
        hungarianText,
        `translation L${lessonNumber} ${item.id}`,
      );
    }
  }

  return targets;
}

function readWordAudioMap(): {
  source: string;
  entries: Map<string, MapEntry>;
} {
  const source = fs.readFileSync(MAP_PATH, 'utf8');
  const entries = new Map<string, MapEntry>();

  const regex =
    /^\s*'((?:\\'|[^'])+)':\s*audioUrl\('((?:\\'|[^'])+)'\),?\s*$/gm;

  for (const match of source.matchAll(regex)) {
    const keyText = match[1].replace(/\\'/g, "'");
    const fileText = match[2].replace(/\\'/g, "'");

    entries.set(normalizeKey(keyText), {
      key: keyText,
      file: fileText,
    });
  }

  return { source, entries };
}

function escapeSingleQuoted(value: string): string {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function rewriteWordAudioMap(
  originalSource: string,
  entries: Map<string, MapEntry>,
): void {
  const sorted = [...entries.values()].sort((a, b) =>
    a.key.localeCompare(b.key, 'hu-HU', { sensitivity: 'base' }),
  );

  const body = sorted
    .map(
      ({ key, file }) =>
        `  '${escapeSingleQuoted(key)}': audioUrl('${escapeSingleQuoted(file)}'),`,
    )
    .join('\n');

  const replacement =
    `const rawWordAudioMap: Record<string, string> = {\n${body}\n};`;

  const nextSource = originalSource.replace(
    /const rawWordAudioMap: Record<string, string> = \{[\s\S]*?\n\};/,
    replacement,
  );

  if (nextSource === originalSource) {
    throw new Error('Could not rewrite rawWordAudioMap block.');
  }

  fs.writeFileSync(MAP_PATH, nextSource, 'utf8');
}

function runEdgeTts(text: string, outputFile: string): void {
  const tempDir = fs.mkdtempSync(
    path.join(os.tmpdir(), 'hungarylearn-all-clickable-audio-'),
  );
  const inputFile = path.join(tempDir, 'input.txt');

  try {
    fs.writeFileSync(inputFile, text, 'utf8');

    let lastError: Error | null = null;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
      console.log(`  edge-tts attempt ${attempt}/${MAX_ATTEMPTS}`);

      const result = spawnSync(
        'edge-tts',
        [
          '--voice',
          VOICE,
          `--rate=${RATE}`,
          '--file',
          inputFile,
          '--write-media',
          outputFile,
        ],
        {
          stdio: 'inherit',
          shell: false,
          windowsHide: true,
          timeout: TIMEOUT_MS,
          killSignal: 'SIGTERM',
        },
      );

      if (result.error) {
        lastError = result.error;

        if ((result.error as NodeJS.ErrnoException).code === 'ETIMEDOUT') {
          console.warn(`  timeout after ${TIMEOUT_MS / 1000}s`);
        } else {
          console.warn(`  edge-tts error: ${result.error.message}`);
        }
      } else if (result.status !== 0) {
        lastError = new Error(`edge-tts exited with code ${result.status}`);
      } else if (
        fs.existsSync(outputFile) &&
        fs.statSync(outputFile).size > 0
      ) {
        return;
      } else {
        lastError = new Error('Generated MP3 is missing or empty.');
      }

      try {
        if (fs.existsSync(outputFile)) {
          fs.rmSync(outputFile, { force: true });
        }
      } catch {
        // Best-effort cleanup only.
      }
    }

    throw lastError ?? new Error('edge-tts failed after all attempts');
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }
}

function isValidPhysicalFile(fileName: string): boolean {
  const fullPath = path.join(AUDIO_DIR, fileName);

  return (
    fs.existsSync(fullPath) &&
    fs.statSync(fullPath).isFile() &&
    fs.statSync(fullPath).size > 0
  );
}

function main(): void {
  if (!fs.existsSync(LESSON_DIR)) throw new Error(`Missing ${LESSON_DIR}`);
  if (!fs.existsSync(AUDIO_DIR)) throw new Error(`Missing ${AUDIO_DIR}`);
  if (!fs.existsSync(MAP_PATH)) throw new Error(`Missing ${MAP_PATH}`);

  const targets = collectTargets();
  const { source, entries } = readWordAudioMap();

  const missing = [...targets.values()]
    .filter((target) => {
      const mapped = entries.get(target.key);
      return !mapped || !isValidPhysicalFile(mapped.file);
    })
    .sort((a, b) =>
      a.text.localeCompare(b.text, 'hu-HU', { sensitivity: 'base' }),
    );

  console.log(`\nAll learner-facing clickable audio targets: ${targets.size}`);
  console.log(`Already mapped and physically present: ${targets.size - missing.length}`);
  console.log(`Missing mappings/files: ${missing.length}\n`);

  if (missing.length === 0) {
    console.log(
      'DONE: every learner-facing clickable target already has a physical MP3.',
    );
    return;
  }

  const nextEntries = new Map(entries);
  const failures: string[] = [];

  for (let i = 0; i < missing.length; i += 1) {
    const target = missing[i];
    const fileName = safeFileName(target.text);
    const outputFile = path.join(AUDIO_DIR, fileName);

    console.log(
      `\n[${i + 1}/${missing.length}] ${target.text} -> ${fileName}`,
    );
    console.log(`  sources: ${[...target.sources].join(' | ')}`);

    try {
      if (isValidPhysicalFile(fileName)) {
        console.log('  existing MP3 found; only mapping it');
      } else {
        runEdgeTts(target.text, outputFile);
        console.log('  created');
      }

      nextEntries.set(target.key, {
        // Lowercase lookup keys match audioRegistry normalization.
        key: target.key,
        file: fileName,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : String(error);

      console.error(`  FAILED: ${message}`);
      failures.push(target.text);

      try {
        if (
          fs.existsSync(outputFile) &&
          fs.statSync(outputFile).size === 0
        ) {
          fs.rmSync(outputFile, { force: true });
        }
      } catch {
        // Best-effort cleanup only.
      }
    }
  }

  rewriteWordAudioMap(source, nextEntries);

  const postMap = readWordAudioMap().entries;
  const remaining = [...targets.values()].filter((target) => {
    const mapped = postMap.get(target.key);
    return !mapped || !isValidPhysicalFile(mapped.file);
  });

  console.log(`\nFINAL VERIFICATION`);
  console.log(`Targets: ${targets.size}`);
  console.log(`Remaining without usable audio: ${remaining.length}`);

  if (remaining.length > 0) {
    for (const target of remaining) {
      console.log(
        `  - ${target.text} [${[...target.sources].join(' | ')}]`,
      );
    }
  }

  if (failures.length > 0 || remaining.length > 0) {
    console.error(
      `\nFAILED: ${failures.length} generation failures, ${remaining.length} unresolved targets.`,
    );
    process.exitCode = 1;
    return;
  }

  console.log(
    '\nDONE: every data-speak-text, vocabulary/word-trainer target, and Hungarian translation SpeechButton now has a physical MP3 and wordAudioMap entry.',
  );
}

try {
  main();
} catch (error) {
  console.error(
    error instanceof Error ? error.stack ?? error.message : String(error),
  );
  process.exit(1);
}
