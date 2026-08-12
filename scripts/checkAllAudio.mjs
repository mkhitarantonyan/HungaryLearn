import fs from 'fs';
import path from 'path';

const audioDir = path.resolve('public/audio');
const wordFiles = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3') && !/^\d+\.\d+\.mp3$/.test(f));

const mapSrc = fs.readFileSync(path.resolve('src/data/wordAudioMap.ts'), 'utf-8');
const mappedFiles = new Set();
for (const m of mapSrc.matchAll(/audioUrl\('([^']+)'\)/g)) {
  mappedFiles.add(m[1]);
}

console.log('=== Checking exact file name matches ===');

const onDiskOnly = wordFiles.filter(f => !mappedFiles.has(f));
const inMapOnly = [...mappedFiles].filter(f => !wordFiles.includes(f));

if (onDiskOnly.length) {
  console.log(`\n❌ Files on disk NOT in map (${onDiskOnly.length}):`);
  onDiskOnly.forEach(f => console.log(`  ${f}`));
}

if (inMapOnly.length) {
  console.log(`\n❌ Files in map NOT on disk (${inMapOnly.length}):`);
  inMapOnly.forEach(f => console.log(`  ${f}`));
}

// Check if there are any mp3 files that are NOT slide files and NOT word files
const nonSlideMp3 = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3') && !/^\d+\.\d+\.mp3$/.test(f));
console.log(`\nTotal MP3 files: ${fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3')).length}`);
console.log(`Slide files: ${fs.readdirSync(audioDir).filter(f => /^\d+\.\d+\.mp3$/.test(f)).length}`);
console.log(`Word files: ${nonSlideMp3.length}`);
