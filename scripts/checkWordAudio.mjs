import fs from 'fs';
import path from 'path';

const audioDir = path.resolve('public/audio');
const wordFiles = fs.readdirSync(audioDir).filter(f => f.endsWith('.mp3') && !/^\d+\.\d+\.mp3$/.test(f));

const mapSrc = fs.readFileSync(path.resolve('src/data/wordAudioMap.ts'), 'utf-8');
const mappedFiles = new Set();

for (const m of mapSrc.matchAll(/audioUrl\('([^']+)'\)/g)) {
  mappedFiles.add(m[1]);
}

console.log('=== Checking word audio mapping ===');
console.log(`Word files on disk: ${wordFiles.length}`);
console.log(`Files in audioUrl(): ${mappedFiles.size}`);

const onDiskOnly = wordFiles.filter(f => !mappedFiles.has(f));
const inMapOnly = [...mappedFiles].filter(f => !wordFiles.includes(f));

if (onDiskOnly.length) {
  console.log(`\n❌ On disk but NOT in audioUrl() (${onDiskOnly.length}):`);
  onDiskOnly.forEach(f => console.log(`  ${f}`));
}

if (inMapOnly.length) {
  console.log(`\n❌ In audioUrl() but NOT on disk (${inMapOnly.length}):`);
  inMapOnly.forEach(f => console.log(`  ${f}`));
}

if (!onDiskOnly.length && !inMapOnly.length) {
  console.log('\n✅ All word audio files are connected!');
}
