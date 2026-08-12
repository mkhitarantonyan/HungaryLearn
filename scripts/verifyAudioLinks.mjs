// Verifies that every MP3 in public/audio/ is wired into the app:
//  - slide files '<lesson>.<slide>.mp3' must be covered by SLIDE_AUDIO_COUNTS in audioRegistry.ts
//  - word files '<word>.mp3' must be present in wordAudioMap.ts
// Also reports map entries that point to non-existent files.
import fs from 'fs';
import path from 'path';

const audioDir = path.resolve('public/audio');
const allMp3 = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3'));

const slideFiles = allMp3.filter(f => /^\d+\.\d+\.mp3$/.test(f));
const wordFiles = allMp3.filter(f => !/^\d+\.\d+\.mp3$/.test(f));

// --- 1. Slide coverage from audioRegistry.ts ---
const registrySrc = fs.readFileSync(path.resolve('src/utils/audioRegistry.ts'), 'utf-8');
const countsBlock = registrySrc.match(/SLIDE_AUDIO_COUNTS[^{]*\{([\s\S]*?)\};/);
if (!countsBlock) {
  console.error('Could not find SLIDE_AUDIO_COUNTS in audioRegistry.ts');
  process.exit(1);
}
const counts = {};
for (const m of countsBlock[1].matchAll(/(\d+):\s*(\d+)/g)) {
  counts[m[1]] = parseInt(m[2], 10);
}

const expectedSlideFiles = new Set();
for (const [lesson, n] of Object.entries(counts)) {
  for (let s = 1; s <= n; s++) expectedSlideFiles.add(`${lesson}.${s}.mp3`);
}

const missingOnDisk = [...expectedSlideFiles].filter(f => !slideFiles.includes(f));
const notInRegistry = slideFiles.filter(f => !expectedSlideFiles.has(f));

console.log('=== Slide narration ===');
console.log(`Registry expects: ${expectedSlideFiles.size} files, on disk: ${slideFiles.length}`);
if (missingOnDisk.length) console.log('❌ In registry but MISSING on disk:', missingOnDisk.join(', '));
if (notInRegistry.length) console.log('❌ On disk but NOT in registry:', notInRegistry.join(', '));
if (!missingOnDisk.length && !notInRegistry.length) console.log('✅ All slide files wired correctly');

// --- 2. Word coverage from wordAudioMap.ts ---
const mapSrc = fs.readFileSync(path.resolve('src/data/wordAudioMap.ts'), 'utf-8');
const mappedFiles = new Set();
for (const m of mapSrc.matchAll(/audioUrl\('([^']+)'\)/g)) {
  mappedFiles.add(m[1]);
}

const wordFilesSet = new Set(wordFiles);
const mapMissingOnDisk = [...mappedFiles].filter(f => !wordFilesSet.has(f));
const notInMap = wordFiles.filter(f => !mappedFiles.has(f));

console.log('\n=== Word audio ===');
console.log(`Map has: ${mappedFiles.size} entries, on disk: ${wordFiles.length}`);
if (mapMissingOnDisk.length) console.log('❌ In map but MISSING on disk:', mapMissingOnDisk.join(', '));
if (notInMap.length) console.log('❌ On disk but NOT in map:', notInMap.join(', '));
if (!mapMissingOnDisk.length && !notInMap.length) console.log('✅ All word files wired correctly');
