import { execFileSync, spawnSync } from 'node:child_process';
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  renameSync,
  rmSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import ts from 'typescript';

/**
 * Rebuilds only the slide-narration MP3 files made stale by the completed
 * curriculum packages. It never generates ListeningTask or word audio.
 *
 * Safe examples (public/audio is NOT changed):
 *   node scripts/generate-course-narration-rerecord.mjs --list
 *   node scripts/generate-course-narration-rerecord.mjs --audit
 *   node scripts/generate-course-narration-rerecord.mjs --check-text
 *   node scripts/generate-course-narration-rerecord.mjs --text 1.10
 *   node scripts/generate-course-narration-rerecord.mjs --slide 1.10
 *   node scripts/generate-course-narration-rerecord.mjs --all
 *
 * Publish examples (backs up originals, replaces atomically, refreshes manifest):
 *   node scripts/generate-course-narration-rerecord.mjs --slide 1.10 --publish --yes
 *   node scripts/generate-course-narration-rerecord.mjs --from 1.11 --publish --yes
 *   node scripts/generate-course-narration-rerecord.mjs --all --publish --yes
 *
 * Environment overrides:
 *   NARRATION_HU_VOICE=hu-HU-TamasNeural
 *   NARRATION_RU_VOICE=ru-RU-DmitryNeural
 *   NARRATION_RATE=+0%
 */

const ROOT = resolve(import.meta.dirname, '..');
const AUDIO_DIR = join(ROOT, 'public', 'audio');
const LESSON_DIR = join(ROOT, 'src', 'data', 'lessons');
const STAGING_DIR = join(tmpdir(), 'hungarylearn-narration-rerecord');
const BACKUP_ROOT = join(tmpdir(), 'hungarylearn-narration-backups');
const HU_VOICE = process.env.NARRATION_HU_VOICE || 'hu-HU-TamasNeural';
const RU_VOICE = process.env.NARRATION_RU_VOICE || 'ru-RU-DmitryNeural';
const RATE = process.env.NARRATION_RATE || '+0%';
const MAX_RETRIES = 5;
const SYNCHRONIZED_BASELINE = 'dc428fd';

// 135 title/subtitle/task/body changes after the last synchronized baseline plus
// the pre-existing 1.11 narration follow-up documented by Hungarian QA.
const RERECORD_TARGETS = new Map(Object.entries({
  1: [1, 10, 11],
  4: [12],
  5: [8, 10],
  6: [6, 7, 8, 10],
  7: [7, 8, 9, 10, 11],
  8: [5, 6, 7, 8, 9, 10, 11],
  9: [7, 8, 9, 10],
  10: [7, 8, 9, 10],
  11: [4, 5, 6, 7, 8, 9, 10, 11],
  12: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  13: [3, 4, 5, 6, 7, 8, 9, 10, 11],
  14: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  15: [9, 10, 11],
  16: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  17: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  18: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  19: [1, 6, 7, 8, 9, 10, 11],
  20: [1, 7, 8, 9, 10, 11],
  21: [1, 2, 7],
  22: [1, 7],
  23: [1, 7],
  24: [1, 3, 7, 11],
  25: [1, 7],
  26: [1, 6, 7],
  27: [1, 7],
}).map(([lesson, slides]) => [Number(lesson), slides]));

const TARGET_KEYS = [...RERECORD_TARGETS]
  .flatMap(([lesson, slides]) => slides.map((slide) => `${lesson}.${slide}`))
  .sort(compareSlideKeys);

const STRUCTURAL_FIELDS = ['title', 'subtitle', 'task', 'body'];
const lessonCache = new Map();
const TECHNICAL_TOKENS = new Set([
  'A0', 'A1', 'A2', 'B1', 'CEFR', 'DIRECT', 'PARTIAL', 'NONE', 'MP3', 'SRS',
  'Listening', 'Writing', 'RolePlay', 'ExitCheck', 'TTS', 'HTML', 'UI', 'API',
  'score', 'evidence',
]);

function compareSlideKeys(left, right) {
  const [leftLesson, leftSlide] = left.split('.').map(Number);
  const [rightLesson, rightSlide] = right.split('.').map(Number);
  return leftLesson - rightLesson || leftSlide - rightSlide;
}

function sleep(milliseconds) {
  const data = new SharedArrayBuffer(4);
  Atomics.wait(new Int32Array(data), 0, 0, milliseconds);
}

function decodeHtml(value) {
  const named = {
    amp: '&', apos: "'", gt: '>', hellip: '…', laquo: '«', ldquo: '“',
    lt: '<', nbsp: ' ', ndash: '–', quot: '"', raquo: '»', rdquo: '”',
  };
  return value
    .replace(/&#(\d+);/g, (_, number) => String.fromCodePoint(Number(number)))
    .replace(/&#x([0-9a-f]+);/gi, (_, number) => String.fromCodePoint(Number.parseInt(number, 16)))
    .replace(/&([a-z]+);/gi, (match, name) => named[name.toLowerCase()] ?? match);
}

function russianCardinal(number) {
  const small = [
    'ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь',
    'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
    'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать',
  ];
  const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
  if (number < small.length) return small[number];
  if (number < 100) return `${tens[Math.floor(number / 10)]}${number % 10 ? ` ${small[number % 10]}` : ''}`;
  return String(number);
}

function normalizeForSpeech(value) {
  return decodeHtml(value)
    // IPA is useful on screen but edge-tts cannot synthesize isolated IPA
    // reliably. Use short, learner-friendly Russian sound labels instead.
    .replace(/\/\s*tʃ\s*\//giu, ' звук ч ')
    .replace(/\/\s*ʒ\s*\//giu, ' звук ж ')
    .replace(/\/\s*ʃ\s*\//giu, ' звук ш ')
    .replace(/\/\s*ɟ\s*\//giu, ' мягкий звук д ')
    .replace(/\/\s*ɲ\s*\//giu, ' мягкий звук н ')
    .replace(/\/\s*c\s*\//giu, ' мягкий звук т ')
    .replace(/\/\s*ts\s*\//giu, ' звук ц ')
    .replace(/\/\s*j\s*\//giu, ' звук й ')
    .replace(/\/\s*s\s*\//giu, ' звук с ')
    .replace(/\/\s*z\s*\//giu, ' звук з ')
    .replace(/[ʃʒɟɲ]/gu, '')
    // Middle dots are list separators, never multiplication signs.
    .replace(/[·•∙⋅]/g, ', ')
    .replace(/(\d)\s*[×✕]\s*(\d)/g, '$1 на $2')
    .replace(/[×✕]/g, ', ')
    .replace(/[→⇒]/g, ' становится ')
    .replace(/\s*=\s*/g, ' обозначает ')
    // Written suffix notation (-ok, -lak/-lek) should be pronounced as the
    // suffix itself. A leading hyphen can make edge-tts return no audio.
    .replace(/(^|[\s,(«])-(?=\p{L})/gu, '$1')
    .replace(/\s+[|]\s+/g, ', ')
    .replace(/(?<!\p{L})(упражнение|задание|вопрос|пункт|шаг)\s*№?\s*(\d{1,2})(?!\p{L}|\d)/giu, (_, label, number) => {
      const normalizedLabel = label === label.toUpperCase()
        ? `${label[0]}${label.slice(1).toLowerCase()}`
        : label;
      return `${normalizedLabel} ${russianCardinal(Number(number))}`;
    })
    .replace(/\s*\/\s*/gu, ', или ')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .replace(/([,;:])(?:\s*[,;:])+/g, '$1')
    .replace(/\.(?:\s*\.)+/g, '.')
    .replace(/[;,:]\s*\./g, '.')
    .trim();
}

function propertyName(node) {
  if (!node) return undefined;
  if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) return node.text;
  return undefined;
}

function propertyMap(object) {
  const result = new Map();
  for (const property of object.properties) {
    if (ts.isPropertyAssignment(property)) result.set(propertyName(property.name), property.initializer);
  }
  return result;
}

function resolveStaticString(node, constants, source, stack = new Set()) {
  if (!node) return undefined;
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text;
  if (ts.isParenthesizedExpression(node)) return resolveStaticString(node.expression, constants, source, stack);
  if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.PlusToken) {
    const left = resolveStaticString(node.left, constants, source, stack);
    const right = resolveStaticString(node.right, constants, source, stack);
    return left === undefined || right === undefined ? undefined : left + right;
  }
  if (ts.isIdentifier(node) && constants.has(node.text) && !stack.has(node.text)) {
    const nextStack = new Set(stack).add(node.text);
    return resolveStaticString(constants.get(node.text), constants, source, nextStack);
  }
  if (ts.isTemplateExpression(node)) {
    let result = node.head.text;
    for (const span of node.templateSpans) {
      const expression = resolveStaticString(span.expression, constants, source, stack);
      if (expression === undefined) return undefined;
      result += expression + span.literal.text;
    }
    return result;
  }
  return undefined;
}

function parseLessonSource(sourceText, filename) {
  const source = ts.createSourceFile(filename, sourceText, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const constants = new Map();
  let lessonObject;

  source.forEachChild((node) => {
    if (!ts.isVariableStatement(node)) return;
    for (const declaration of node.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue;
      constants.set(declaration.name.text, declaration.initializer);
      if (/^LESSON_\d+$/.test(declaration.name.text) && ts.isObjectLiteralExpression(declaration.initializer)) {
        lessonObject = declaration.initializer;
      }
    }
  });

  if (!lessonObject) throw new Error(`Lesson object not found: ${filename}`);
  const slidesNode = propertyMap(lessonObject).get('slides');
  if (!slidesNode || !ts.isArrayLiteralExpression(slidesNode)) throw new Error(`Slides array not found: ${filename}`);

  const slides = new Map();
  for (const element of slidesNode.elements) {
    if (!ts.isObjectLiteralExpression(element)) continue;
    const properties = propertyMap(element);
    const idNode = properties.get('id');
    if (!idNode || !ts.isNumericLiteral(idNode)) continue;
    const id = Number(idNode.text);
    const fields = {};
    for (const field of STRUCTURAL_FIELDS) {
      const node = properties.get(field);
      const resolved = resolveStaticString(node, constants, source);
      if (node && resolved === undefined) {
        throw new Error(`Cannot resolve static ${field} for ${filename} slide ${id}: ${node.getText(source)}`);
      }
      fields[field] = resolved;
    }
    slides.set(id, fields);
  }
  return slides;
}

function loadSlide(key) {
  const [lesson, slide] = key.split('.').map(Number);
  const filename = join(LESSON_DIR, `lesson${lesson}.ts`);
  if (!lessonCache.has(lesson)) lessonCache.set(lesson, parseLessonSource(readFileSync(filename, 'utf8'), filename));
  const slides = lessonCache.get(lesson);
  const data = slides.get(slide);
  if (!data) throw new Error(`Slide ${key} does not exist in ${filename}`);
  return { lesson, slide, ...data };
}

function addMarker(markers, language, text) {
  const index = markers.push({ language, text: decodeHtml(text) }) - 1;
  return `\uE000${index}\uE001`;
}

function htmlToMarkedText(html) {
  const markers = [];
  let value = html
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<(?:script|style)\b[\s\S]*?<\/(?:script|style)>/gi, ' ')
    .replace(/<button\b([^>]*\bdata-speak-text=(['"])(.*?)\2[^>]*)>[\s\S]*?<\/button>/gi, (_, __, ___, spoken) => addMarker(markers, 'hu', spoken));

  // hu-word spans are deliberately authored Hungarian fragments. Repeat to
  // handle the shallow nesting used in lesson HTML.
  const huElement = /<([a-z][\w-]*)\b([^>]*\bclass=(['"])[^'"]*\bhu-word\b[^'"]*\3[^>]*)>([\s\S]*?)<\/\1>/gi;
  for (let pass = 0; pass < 4 && huElement.test(value); pass += 1) {
    huElement.lastIndex = 0;
    value = value.replace(huElement, (_, __, ___, ____, inner) => addMarker(markers, 'hu', inner.replace(/<[^>]+>/g, ' ')));
  }

  value = value
    .replace(/<br\s*\/?\s*>/gi, '. ')
    .replace(/<\/(?:p|div|li|ol|ul|h[1-6]|tr|table|section|blockquote)>/gi, '. ')
    .replace(/<\/(?:td|th)>/gi, ', ')
    .replace(/<li\b[^>]*>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');

  return { text: decodeHtml(value), markers };
}

function tokenLanguage(token, fallback) {
  if (/\p{Script=Cyrillic}/u.test(token)) return 'ru';
  const bare = token.replace(/[^\p{L}\p{N}]/gu, '');
  if (TECHNICAL_TOKENS.has(bare)) return fallback;
  if (/\p{Script=Latin}/u.test(token) || /[áéíóöőúüűÁÉÍÓÖŐÚÜŰ]/u.test(token)) return 'hu';
  return fallback;
}

function splitMixedText(value, fallback = 'ru') {
  const normalized = normalizeForSpeech(value);
  if (!normalized) return [];
  const tokens = normalized.match(/\S+/gu) ?? [];
  const segments = [];
  for (const token of tokens) {
    const language = tokenLanguage(token, segments.at(-1)?.language ?? fallback);
    if (segments.at(-1)?.language === language) segments.at(-1).text += ` ${token}`;
    else segments.push({ language, text: token });
  }
  return segments;
}

function mergeSegments(segments) {
  const merged = [];
  for (const segment of segments) {
    const text = normalizeForSpeech(segment.text);
    if (!/\p{L}|\p{N}/u.test(text)) continue;
    if (merged.at(-1)?.language === segment.language) merged.at(-1).text += ` ${text}`;
    else merged.push({ language: segment.language, text });
  }
  return merged.map((segment) => ({
    ...segment,
    voice: segment.language === 'hu' ? HU_VOICE : RU_VOICE,
    text: /[.!?…]$/u.test(segment.text)
      ? segment.text
      : `${segment.text.replace(/[,;:]\s*$/u, '')}.`,
  }));
}

function segmentsFromHtml(html) {
  const { text, markers } = htmlToMarkedText(html);
  const segments = [];
  let cursor = 0;
  for (const match of text.matchAll(/\uE000(\d+)\uE001/g)) {
    segments.push(...splitMixedText(text.slice(cursor, match.index), 'ru'));
    const marker = markers[Number(match[1])];
    segments.push({ language: marker.language, text: marker.text });
    cursor = match.index + match[0].length;
  }
  segments.push(...splitMixedText(text.slice(cursor), 'ru'));
  return segments;
}

function buildNarrationSegments(slide) {
  const segments = [];
  if (slide.title) segments.push(...splitMixedText(slide.title, /\p{Script=Cyrillic}/u.test(slide.title) ? 'ru' : 'hu'));
  if (slide.subtitle) segments.push(...splitMixedText(slide.subtitle, 'ru'));
  if (slide.task) segments.push(...segmentsFromHtml(slide.task));
  if (slide.body) segments.push(...segmentsFromHtml(slide.body));
  return mergeSegments(segments);
}

function synthesize(text, voice, outputFile) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt += 1) {
    const result = spawnSync('edge-tts', [
      '--voice', voice,
      `--rate=${RATE}`,
      '--text', text,
      '--write-media', outputFile,
    ], {
      encoding: 'utf8',
      shell: false,
      windowsHide: true,
      timeout: 60_000,
    });

    if (!result.error && result.status === 0 && existsSync(outputFile) && statSync(outputFile).size > 0) return;
    lastError = result.error ?? new Error(result.stderr || `edge-tts exited with ${result.status}`);
    if (existsSync(outputFile)) rmSync(outputFile, { force: true });
    if (attempt < MAX_RETRIES) sleep(1_500 * attempt);
  }
  throw lastError;
}

function mp3DurationSeconds(buffer) {
  const bitrateV1 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
  const bitrateV2 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];
  const baseRates = [44_100, 48_000, 32_000];
  let offset = 0;
  let seconds = 0;
  let frames = 0;

  while (offset + 4 <= buffer.length) {
    const header = buffer.readUInt32BE(offset);
    if (((header & 0xffe00000) >>> 0) !== 0xffe00000) {
      offset += 1;
      continue;
    }
    const versionBits = (header >>> 19) & 0x3;
    const layerBits = (header >>> 17) & 0x3;
    const bitrateIndex = (header >>> 12) & 0xf;
    const sampleRateIndex = (header >>> 10) & 0x3;
    const padding = (header >>> 9) & 0x1;
    if (versionBits === 1 || layerBits !== 1 || bitrateIndex === 0 || bitrateIndex === 15 || sampleRateIndex === 3) {
      offset += 1;
      continue;
    }
    const mpeg1 = versionBits === 3;
    const divisor = mpeg1 ? 1 : versionBits === 2 ? 2 : 4;
    const sampleRate = baseRates[sampleRateIndex] / divisor;
    const bitrate = (mpeg1 ? bitrateV1 : bitrateV2)[bitrateIndex] * 1_000;
    const frameLength = Math.floor((mpeg1 ? 144 : 72) * bitrate / sampleRate) + padding;
    if (frameLength <= 4 || offset + frameLength > buffer.length) break;
    seconds += (mpeg1 ? 1_152 : 576) / sampleRate;
    frames += 1;
    offset += frameLength;
  }
  if (frames === 0) throw new Error('No valid MP3 frames found.');
  return seconds;
}

function parseArguments(argv) {
  const options = { slides: [], all: false, audit: false, checkText: false, from: undefined, list: false, publish: false, yes: false, text: undefined, selfTest: false };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === '--all') options.all = true;
    else if (argument === '--audit') options.audit = true;
    else if (argument === '--check-text') options.checkText = true;
    else if (argument === '--list') options.list = true;
    else if (argument === '--publish') options.publish = true;
    else if (argument === '--yes') options.yes = true;
    else if (argument === '--self-test') options.selfTest = true;
    else if (argument === '--from') options.from = argv[++index];
    else if (argument === '--slide') options.slides.push(argv[++index]);
    else if (argument === '--text') options.text = argv[++index];
    else throw new Error(`Unknown argument: ${argument}`);
  }
  return options;
}

function checkAllNarrationText() {
  let segmentCount = 0;
  for (const key of TARGET_KEYS) {
    const segments = buildNarrationSegments(loadSlide(key));
    if (!segments.length) throw new Error(`No narration segments for ${key}.mp3`);
    const text = segments.map((segment) => segment.text).join(' ');
    if (/[·•∙⋅×✕]/u.test(text)) throw new Error(`Unsafe spoken separator remains in ${key}.mp3`);
    if (/[ʃʒɟɲ]/u.test(text)) throw new Error(`Unspeakable IPA remains in ${key}.mp3`);
    if (/(?<!\p{L})(?:упражнение|задание|вопрос|пункт|шаг)\s*№?\s*\d/iu.test(text)) {
      throw new Error(`Unexpanded exercise number remains in ${key}.mp3`);
    }
    if (!existsSync(join(AUDIO_DIR, `${key}.mp3`))) throw new Error(`Current narration MP3 is missing: ${key}.mp3`);
    for (const segment of segments) {
      if (/^-/u.test(segment.text)) throw new Error(`Unsafe leading suffix hyphen remains in ${key}.mp3: ${segment.text}`);
      if (/[,;:]\s*\.$/u.test(segment.text)) throw new Error(`Invalid trailing punctuation remains in ${key}.mp3: ${segment.text}`);
    }
    segmentCount += segments.length;
  }
  const slideTen = buildNarrationSegments(loadSlide('1.10')).map((segment) => segment.text).join(' ');
  if (!slideTen.includes('gyár, tyúk, nyolc, játék, folyó')) throw new Error('L1 slide 10 Hungarian list is not pause-normalized.');
  if (!slideTen.includes('завод, курица, восемь, игра, река')) throw new Error('L1 slide 10 Russian list is not pause-normalized.');
  console.log(`TEXT CHECK PASS: ${TARGET_KEYS.length} slides, ${segmentCount} bilingual segments, no spoken multiplication separators or numeric exercise labels.`);
}

function auditAgainstSynchronizedBaseline() {
  const changed = new Map();
  for (let lesson = 1; lesson <= 28; lesson += 1) {
    const relativePath = `src/data/lessons/lesson${lesson}.ts`;
    const currentPath = join(ROOT, relativePath);
    const oldSource = execFileSync('git', ['show', `${SYNCHRONIZED_BASELINE}:${relativePath}`], {
      cwd: ROOT,
      encoding: 'utf8',
    });
    const oldSlides = parseLessonSource(oldSource, `${relativePath}@${SYNCHRONIZED_BASELINE}`);
    const currentSlides = parseLessonSource(readFileSync(currentPath, 'utf8'), currentPath);
    for (const [slide, currentFields] of currentSlides) {
      const oldFields = oldSlides.get(slide);
      if (!oldFields) continue;
      const changedFields = STRUCTURAL_FIELDS.filter((field) => {
        const before = oldFields[field]?.replace(/\s+/g, ' ').trim();
        const after = currentFields[field]?.replace(/\s+/g, ' ').trim();
        return before !== after;
      });
      if (changedFields.length) changed.set(`${lesson}.${slide}`, changedFields);
    }
  }

  for (const [key, fields] of [...changed].sort(([left], [right]) => compareSlideKeys(left, right))) {
    console.log(`${key}.mp3\t${fields.join(',')}`);
  }
  const expectedFromDiff = new Set(TARGET_KEYS.filter((key) => key !== '1.11'));
  const missingFromPlan = [...changed.keys()].filter((key) => !expectedFromDiff.has(key));
  const notChanged = [...expectedFromDiff].filter((key) => !changed.has(key));
  console.log(`AUDIT: ${changed.size} changed slide(s); plus documented 1.11 follow-up = ${changed.size + 1}.`);
  if (missingFromPlan.length || notChanged.length) {
    throw new Error(`Rerecord plan mismatch: ${JSON.stringify({ missingFromPlan, notChanged })}`);
  }
  console.log('AUDIT PASS: frozen 136-file plan matches the synchronized baseline diff and 1.11 follow-up.');
}

function runSelfTest() {
  const checks = [
    [normalizeForSpeech('завод · курица · восемь · игра · река'), 'завод, курица, восемь, игра, река'],
    [normalizeForSpeech('УПРАЖНЕНИЕ 1'), 'Упражнение один'],
    [normalizeForSpeech('Упражнение 2'), 'Упражнение два'],
    [normalizeForSpeech('Задание 10'), 'Задание десять'],
    [normalizeForSpeech('s = /ʃ/'), 's обозначает звук ш'],
    [normalizeForSpeech('gy = /ɟ/'), 'gy обозначает мягкий звук д'],
  ];
  for (const [actual, expected] of checks) {
    if (actual !== expected) throw new Error(`Normalization self-test failed: ${JSON.stringify({ actual, expected })}`);
  }
  if (TARGET_KEYS.length !== 136) throw new Error(`Expected 136 narration targets, got ${TARGET_KEYS.length}`);
  if (TARGET_KEYS.some((key) => key.includes('listening'))) throw new Error('Listening asset leaked into narration targets.');
  console.log('Self-test PASS: separators, exercise numbers and 136-target boundary are valid.');
}

function generateSlide(key, publish, backupDirectory) {
  const slide = loadSlide(key);
  const segments = buildNarrationSegments(slide);
  if (!segments.length) throw new Error(`No speakable text found for slide ${key}`);

  const tempDirectory = mkdtempSync(join(tmpdir(), `hungarylearn-narration-${key.replace('.', '-')}-`));
  try {
    const buffers = [];
    segments.forEach((segment, index) => {
      const segmentFile = join(tempDirectory, `${String(index + 1).padStart(3, '0')}.mp3`);
      console.log(`  ${index + 1}/${segments.length} ${segment.language} ${segment.voice}: ${segment.text}`);
      synthesize(segment.text, segment.voice, segmentFile);
      buffers.push(readFileSync(segmentFile));
    });

    const finalBuffer = Buffer.concat(buffers);
    mp3DurationSeconds(finalBuffer);
    mkdirSync(STAGING_DIR, { recursive: true });
    const stagedFile = join(STAGING_DIR, `${key}.mp3`);
    writeFileSync(stagedFile, finalBuffer);

    if (publish) {
      const publicFile = join(AUDIO_DIR, `${key}.mp3`);
      if (!existsSync(publicFile)) throw new Error(`Expected existing narration file is missing: ${publicFile}`);
      mkdirSync(backupDirectory, { recursive: true });
      copyFileSync(publicFile, join(backupDirectory, basename(publicFile)));
      const replacement = `${publicFile}.new`;
      copyFileSync(stagedFile, replacement);
      renameSync(replacement, publicFile);
      console.log(`  PUBLISHED ${publicFile}`);
    } else {
      console.log(`  STAGED ${stagedFile}`);
    }

    console.log(`  ${finalBuffer.length} bytes, ${mp3DurationSeconds(finalBuffer).toFixed(2)} sec`);
  } finally {
    rmSync(tempDirectory, { recursive: true, force: true });
  }
}

function refreshManifest() {
  const tsxCli = join(ROOT, 'node_modules', 'tsx', 'dist', 'cli.mjs');
  const manifestScript = join(ROOT, 'scripts', 'generate-audio-manifest.ts');
  const result = spawnSync(process.execPath, [tsxCli, manifestScript], {
    cwd: ROOT,
    stdio: 'inherit',
    shell: false,
    windowsHide: true,
  });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`generate-audio-manifest.ts exited with ${result.status}`);
}

const options = parseArguments(process.argv.slice(2));
runSelfTest();

if (options.selfTest && process.argv.length === 3) process.exit(0);

if (options.audit) {
  auditAgainstSynchronizedBaseline();
  if (!options.all && !options.from && !options.slides.length && !options.text) process.exit(0);
}

if (options.checkText) {
  checkAllNarrationText();
  if (!options.all && !options.from && !options.slides.length && !options.text) process.exit(0);
}

if (options.list || (!options.all && !options.from && !options.slides.length && !options.text)) {
  for (const [lesson, slides] of RERECORD_TARGETS) console.log(`L${lesson}: ${slides.map((slide) => `${lesson}.${slide}.mp3`).join(', ')}`);
  console.log(`TOTAL: ${TARGET_KEYS.length} slide narration files.`);
  if (!options.all && !options.from && !options.slides.length && !options.text) process.exit(0);
}

if (options.text) {
  if (!TARGET_KEYS.includes(options.text)) throw new Error(`Slide ${options.text} is not in the approved rerecord list.`);
  const segments = buildNarrationSegments(loadSlide(options.text));
  segments.forEach((segment, index) => console.log(`${index + 1}\t${segment.language}\t${segment.voice}\t${segment.text}`));
  process.exit(0);
}

if (options.from && !TARGET_KEYS.includes(options.from)) throw new Error(`Slide ${options.from} is not in the approved rerecord list.`);
const selected = options.from
  ? TARGET_KEYS.filter((key) => compareSlideKeys(key, options.from) >= 0)
  : options.all
    ? TARGET_KEYS
    : [...new Set(options.slides)].sort(compareSlideKeys);
for (const key of selected) {
  if (!TARGET_KEYS.includes(key)) throw new Error(`Slide ${key} is not in the approved rerecord list.`);
}
if (!selected.length) process.exit(0);
if (options.publish && !options.yes) throw new Error('Publishing requires the explicit pair --publish --yes.');

const backupDirectory = options.publish
  ? join(BACKUP_ROOT, new Date().toISOString().replace(/[:.]/g, '-'))
  : undefined;

console.log(`${options.publish ? 'Publishing' : 'Staging'} ${selected.length} slide narration file(s).`);
console.log(`Hungarian voice: ${HU_VOICE}; Russian voice: ${RU_VOICE}; rate: ${RATE}`);
if (backupDirectory) console.log(`Original-file backup: ${backupDirectory}`);

let publishedCount = 0;
let generationError;
try {
  for (const key of selected) {
    console.log(`\n--- ${key}.mp3 ---`);
    generateSlide(key, options.publish, backupDirectory);
    if (options.publish) publishedCount += 1;
  }
} catch (error) {
  generationError = error;
}

let manifestError;
// A later edge-tts request may fail after earlier files were published. Keep
// their cache-busting versions correct even on a resumable partial run.
if (options.publish && publishedCount > 0) {
  try {
    refreshManifest();
  } catch (error) {
    manifestError = error;
  }
}

if (generationError) {
  if (manifestError) console.error('Manifest refresh also failed:', manifestError);
  throw generationError;
}
if (manifestError) throw manifestError;
console.log(options.publish
  ? '\nNarration publication complete; slideAudioManifest.ts refreshed.'
  : `\nGeneration complete. Review staged MP3 files in ${STAGING_DIR} before publishing.`);
