// Verifies the current audio architecture end to end without importing browser code:
//   lesson slides -> slideAudioManifest.ts -> audioRegistry.ts -> public/audio/*.mp3
//   Listening activities -> generated listening plan -> public/audio/*.mp3
//   wordAudioMap.ts -> public/audio/*.mp3

import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const audioDir = path.resolve(root, 'public/audio');
const manifestPath = path.resolve(root, 'src/data/slideAudioManifest.ts');
const lessonsIndexPath = path.resolve(root, 'src/data/lessons/index.ts');
const registryPath = path.resolve(root, 'src/utils/audioRegistry.ts');
const wordMapPath = path.resolve(root, 'src/data/wordAudioMap.ts');
const listeningPlanPath = path.resolve(root, 'docs/listening-audio-plan.json');

// These MP3s were deliberately retained when the affected lessons returned to
// the canonical 11-slide identity. They are not runtime slides and must remain harmless.
const PRESERVED_LEGACY_SLIDES = new Set([
  '13.12.mp3',
  '15.12.mp3',
  '16.12.mp3',
  '18.12.mp3',
  '20.12.mp3',
]);

const errors = [];
const warnings = [];

function readText(filePath) {
  if (!fs.existsSync(filePath)) {
    errors.push(`Required file is missing: ${path.relative(root, filePath)}`);
    return '';
  }
  return fs.readFileSync(filePath, 'utf8');
}

function objectBlock(source, exportName) {
  const declaration = source.indexOf(`export const ${exportName}`);
  if (declaration < 0) return '';
  const start = source.indexOf('{', declaration);
  if (start < 0) return '';

  let depth = 0;
  for (let index = start; index < source.length; index += 1) {
    if (source[index] === '{') depth += 1;
    if (source[index] === '}') depth -= 1;
    if (depth === 0) return source.slice(start + 1, index);
  }
  return '';
}

function sha12(filePath) {
  return createHash('sha256').update(fs.readFileSync(filePath)).digest('hex').slice(0, 12);
}

function propertyName(node) {
  if (ts.isIdentifier(node) || ts.isStringLiteral(node) || ts.isNumericLiteral(node)) return node.text;
  return '';
}

function unwrapExpression(node) {
  let current = node;
  while (
    ts.isAsExpression(current)
    || ts.isSatisfiesExpression(current)
    || ts.isParenthesizedExpression(current)
  ) {
    current = current.expression;
  }
  return current;
}

function readRuntimeSlideIds(lesson) {
  const filePath = path.resolve(root, `src/data/lessons/lesson${lesson}.ts`);
  const source = readText(filePath);
  if (!source) return [];

  const sourceFile = ts.createSourceFile(filePath, source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  let lessonObject;

  for (const statement of sourceFile.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const declaration of statement.declarationList.declarations) {
      if (!ts.isIdentifier(declaration.name) || declaration.name.text !== `LESSON_${lesson}` || !declaration.initializer) continue;
      const initializer = unwrapExpression(declaration.initializer);
      if (ts.isObjectLiteralExpression(initializer)) lessonObject = initializer;
    }
  }

  if (!lessonObject) {
    errors.push(`Could not find LESSON_${lesson} object in ${path.relative(root, filePath)}.`);
    return [];
  }

  const slidesProperty = lessonObject.properties.find(
    (property) => ts.isPropertyAssignment(property) && propertyName(property.name) === 'slides'
  );
  if (!slidesProperty || !ts.isPropertyAssignment(slidesProperty)) {
    errors.push(`LESSON_${lesson} has no slides array.`);
    return [];
  }
  const slides = unwrapExpression(slidesProperty.initializer);
  if (!ts.isArrayLiteralExpression(slides)) {
    errors.push(`LESSON_${lesson}.slides is not a static array.`);
    return [];
  }

  const ids = [];
  for (const element of slides.elements) {
    const slide = unwrapExpression(element);
    if (!ts.isObjectLiteralExpression(slide)) {
      errors.push(`LESSON_${lesson}.slides contains a non-object entry.`);
      continue;
    }
    const idProperty = slide.properties.find(
      (property) => ts.isPropertyAssignment(property) && propertyName(property.name) === 'id'
    );
    if (!idProperty || !ts.isPropertyAssignment(idProperty)) {
      errors.push(`LESSON_${lesson}.slides contains an entry without an id.`);
      continue;
    }
    const id = unwrapExpression(idProperty.initializer);
    if (!ts.isNumericLiteral(id)) {
      errors.push(`LESSON_${lesson}.slides contains a non-numeric id.`);
      continue;
    }
    ids.push(Number(id.text));
  }
  return ids;
}

if (!fs.existsSync(audioDir)) {
  console.error('Audio verification FAIL: public/audio does not exist.');
  process.exit(1);
}

const allMp3 = fs.readdirSync(audioDir).filter((file) => file.toLowerCase().endsWith('.mp3'));
const diskFiles = new Set(allMp3);
const slideFiles = new Set(allMp3.filter((file) => /^\d+\.\d+\.mp3$/.test(file)));
const listeningFiles = new Set(allMp3.filter((file) => /^l\d+_listening_.+\.mp3$/.test(file)));

for (const file of allMp3) {
  const size = fs.statSync(path.join(audioDir, file)).size;
  if (size <= 0) errors.push(`Empty MP3: public/audio/${file}`);
}

const manifestSource = readText(manifestPath);
const presentBlock = objectBlock(manifestSource, 'PRESENT_SLIDE_AUDIO');
const versionsBlock = objectBlock(manifestSource, 'SLIDE_AUDIO_VERSIONS');
const presentSlides = new Set(
  [...presentBlock.matchAll(/"(\d+\.\d+)":\s*true/g)].map((match) => `${match[1]}.mp3`)
);
const manifestVersions = new Map(
  [...versionsBlock.matchAll(/"(\d+\.\d+)":\s*"([a-f0-9]{12})"/g)].map((match) => [`${match[1]}.mp3`, match[2]])
);

if (presentSlides.size === 0 || manifestVersions.size === 0) {
  errors.push('Could not read PRESENT_SLIDE_AUDIO or SLIDE_AUDIO_VERSIONS from slideAudioManifest.ts.');
}

const lessonIndexSource = readText(lessonsIndexPath);
const lessonMeta = [...lessonIndexSource.matchAll(/\bnumber:\s*(\d+),[\s\S]*?\bslidesCount:\s*(\d+)/g)].map(
  (match) => ({ lesson: Number(match[1]), slides: Number(match[2]) })
);
if (lessonMeta.length !== 28) {
  errors.push(`Expected 28 LESSONS_META entries, found ${lessonMeta.length}.`);
}

const runtimeSlides = new Set();
for (let lesson = 1; lesson <= 28; lesson += 1) {
  const slideIds = readRuntimeSlideIds(lesson);
  const metadata = lessonMeta.find((entry) => entry.lesson === lesson);
  if (metadata && metadata.slides !== slideIds.length) {
    errors.push(`LESSONS_META says L${lesson} has ${metadata.slides} slides, definition has ${slideIds.length}.`);
  }
  for (const slide of slideIds) runtimeSlides.add(`${lesson}.${slide}.mp3`);
}

for (const file of runtimeSlides) {
  if (!diskFiles.has(file)) errors.push(`Runtime slide has no MP3: public/audio/${file}`);
  if (!presentSlides.has(file)) errors.push(`Runtime slide is absent from PRESENT_SLIDE_AUDIO: ${file}`);
  if (!manifestVersions.has(file)) errors.push(`Runtime slide has no cache version: ${file}`);
}

for (const file of slideFiles) {
  if (!presentSlides.has(file)) errors.push(`Slide MP3 is absent from the manifest: ${file}`);
  if (!manifestVersions.has(file)) errors.push(`Slide MP3 has no manifest version: ${file}`);
  if (!runtimeSlides.has(file) && !PRESERVED_LEGACY_SLIDES.has(file)) {
    errors.push(`Unexpected slide MP3 has no runtime slide: ${file}`);
  }

  const expectedVersion = manifestVersions.get(file);
  if (expectedVersion && sha12(path.join(audioDir, file)) !== expectedVersion) {
    errors.push(`Stale manifest hash for ${file}`);
  }
}

for (const file of PRESERVED_LEGACY_SLIDES) {
  if (!diskFiles.has(file)) warnings.push(`Preserved legacy slide is no longer on disk: ${file}`);
}

const registrySource = readText(registryPath);
const registryContracts = [
  ['PRESENT_SLIDE_AUDIO import/use', /PRESENT_SLIDE_AUDIO/],
  ['SLIDE_AUDIO_VERSIONS import/use', /SLIDE_AUDIO_VERSIONS/],
  ['versioned slide URL', /audioUrl\(`\$\{lesson\}\.\$\{slide\}\.mp3`\)/],
  ['runtime narration key', /registry\[`l\$\{lesson\}_s\$\{slide\}`\]\s*=\s*url/],
];
for (const [label, pattern] of registryContracts) {
  if (!pattern.test(registrySource)) errors.push(`audioRegistry.ts is missing the ${label} contract.`);
}

const wordMapSource = readText(wordMapPath);
const mappedWordFiles = new Set(
  [...wordMapSource.matchAll(/audioUrl\('([^']+\.mp3)'\)/g)].map((match) => match[1])
);
if (mappedWordFiles.size === 0) errors.push('Could not read word audio mappings from wordAudioMap.ts.');
for (const file of mappedWordFiles) {
  if (!diskFiles.has(file)) errors.push(`wordAudioMap points to a missing MP3: ${file}`);
}

let listeningPlan = {};
try {
  listeningPlan = JSON.parse(readText(listeningPlanPath));
} catch (error) {
  errors.push(`Could not parse docs/listening-audio-plan.json: ${error.message}`);
}
const listeningActivities = Array.isArray(listeningPlan.activities) ? listeningPlan.activities : [];
const listeningAssets = Array.isArray(listeningPlan.assets) ? listeningPlan.assets : [];
if (listeningActivities.length === 0 || listeningAssets.length === 0) {
  errors.push('The generated listening plan has no activities or assets.');
}
const publishedListeningFiles = new Set(
  listeningAssets
    .filter((asset) => asset.audioStatus === 'published')
    .map((asset) => asset.filename ?? `${asset.assetId}.mp3`)
);
for (const activity of listeningActivities) {
  if (activity.audioStatus === 'published' && !diskFiles.has(`${activity.assetId}.mp3`)) {
    errors.push(`Published Listening activity ${activity.activityId} points to a missing asset: ${activity.assetId}.mp3`);
  }
}
for (const file of publishedListeningFiles) {
  if (!diskFiles.has(file)) errors.push(`Published Listening asset is missing: ${file}`);
}
for (const file of listeningFiles) {
  if (!publishedListeningFiles.has(file)) errors.push(`Listening MP3 is not referenced as published: ${file}`);
}

const classifiedFiles = new Set([...slideFiles, ...listeningFiles, ...mappedWordFiles]);
for (const file of allMp3) {
  if (!classifiedFiles.has(file)) errors.push(`Unclassified MP3 is not wired into the app: ${file}`);
}

console.log('=== Audio wiring verification ===');
console.log(`Runtime slide narration: ${runtimeSlides.size}/${runtimeSlides.size}`);
console.log(`Physical slide narration: ${slideFiles.size} (${PRESERVED_LEGACY_SLIDES.size} preserved legacy files)`);
console.log(`Word audio mappings: ${mappedWordFiles.size}`);
console.log(`Listening: ${listeningActivities.length} activities / ${publishedListeningFiles.size} published assets`);
console.log(`All physical MP3 files: ${allMp3.length}`);

for (const warning of warnings) console.warn(`WARNING: ${warning}`);
for (const error of errors) console.error(`ERROR: ${error}`);

if (errors.length > 0) {
  console.error(`Audio verification FAIL: ${errors.length} error(s), ${warnings.length} warning(s).`);
  process.exit(1);
}

console.log(`Audio verification PASS: 0 errors, ${warnings.length} warning(s).`);
