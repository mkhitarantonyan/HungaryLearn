const fs = require('fs');
const path = require('path');

const audioDir = path.resolve('public/audio');
const allFiles = fs.readdirSync(audioDir);

const slidePattern = /^(\d+)\.(\d+)\.mp3$/;
const slideFiles = [];
const wordFiles = [];
const unknownFiles = [];

for (const f of allFiles) {
  const match = f.match(slidePattern);
  if (match) {
    slideFiles.push({ lesson: parseInt(match[1], 10), slide: parseInt(match[2], 10), name: f });
  } else if (f.endsWith('.mp3')) {
    wordFiles.push(f);
  } else if (f !== 'README.txt') {
    unknownFiles.push(f);
  }
}

const lessonMap = new Map();
for (const sf of slideFiles) {
  if (!lessonMap.has(sf.lesson)) lessonMap.set(sf.lesson, []);
  lessonMap.get(sf.lesson).push(sf.slide);
}

const lessons = [...lessonMap.keys()].sort((a, b) => a - b);

console.log('=== АУДИТ СЛАЙД-ФАЙЛОВ ===\n');
console.log('Всего файлов слайдов:', slideFiles.length);
console.log('Всего файлов слов:', wordFiles.length);
console.log('Неизвестных файлов:', unknownFiles.length);
if (unknownFiles.length) {
  console.log('Неизвестные:', unknownFiles.join(', '));
}

console.log('\n--- Детализация по урокам ---');
for (const lesson of lessons) {
  const slides = lessonMap.get(lesson);
  const maxSlide = Math.max(...slides);
  const missing = [];
  for (let s = 1; s <= maxSlide; s++) {
    if (!slides.includes(s)) missing.push(s);
  }
  const status = missing.length > 0 ? '  \x1b[31mНЕТ: ' + missing.join(', ') + '\x1b[0m' : '  \x1b[32mOK\x1b[0m';
  console.log('Урок ' + lesson + ': ' + slides.length + ' слайдов (макс: ' + maxSlide + ')' + status);
}

console.log('\n=== Сравнение с SLIDE_AUDIO_COUNTS в коде ===');
const registryPath = path.resolve('src/utils/audioRegistry.ts');
const registrySrc = fs.readFileSync(registryPath, 'utf-8');
const countsMatch = registrySrc.match(/SLIDE_AUDIO_COUNTS[^{]*\{([\s\S]*?)\};/);
if (countsMatch) {
  const codeCounts = {};
  for (const m of countsMatch[1].matchAll(/(\d+):\s*(\d+)/g)) {
    codeCounts[parseInt(m[1], 10)] = parseInt(m[2], 10);
  }
  
  const allLids = new Set([...Object.keys(codeCounts).map(Number), ...lessons]);
  for (const lid of [...allLids].sort((a, b) => a - b)) {
    const cv = codeCounts[lid];
    const dv = lessonMap.has(lid) ? lessonMap.get(lid).length : 0;
    const ok = cv === dv;
    const mark = ok ? '\x1b[32mOK\x1b[0m' : '\x1b[31mMISMATCH\x1b[0m';
    console.log('Урок ' + lid + ': код=' + (cv != null ? cv : '—') + ', диск=' + dv + ' ' + mark);
  }
}

console.log('\n=== Проверка wordAudioMap.ts ===');
const wordMapPath = path.resolve('src/data/wordAudioMap.ts');
const wordMapSrc = fs.readFileSync(wordMapPath, 'utf-8');
const mappedWordFiles = new Set();
for (const m of wordMapSrc.matchAll(/audioUrl\('([^']+)'\)/g)) {
  mappedWordFiles.add(m[1]);
}

const wfSet = new Set(wordFiles);
const missingFromMap = wordFiles.filter(function(f) { return !mappedWordFiles.has(f); });
const missingFromDisk = [...mappedWordFiles].filter(function(f) { return !wfSet.has(f); });

if (missingFromMap.length > 0) console.log('\x1b[31mФайлы на диске, но НЕ в wordAudioMap:\x1b[0m', missingFromMap.join(', '));
if (missingFromDisk.length > 0) console.log('\x1b[31mВ wordAudioMap, но НЕТ на диске:\x1b[0m', missingFromDisk.join(', '));
if (missingFromMap.length === 0 && missingFromDisk.length === 0) console.log('\x1b[32mВсе word-файлы совпадают с wordAudioMap\x1b[0m');

console.log('\n=== Проверка регистра имён файлов ===');
const caseIssues = [];
for (const f of wordFiles) {
  if (mappedWordFiles.has(f)) continue;
  if (mappedWordFiles.has(f.toLowerCase())) {
    caseIssues.push(f + ' (диск) vs ' + f.toLowerCase() + ' (код)');
  }
}
if (caseIssues.length > 0) {
  console.log('\x1b[31mПроблемы регистра:\x1b[0m');
  caseIssues.forEach(function(i) { console.log('   ' + i); });
} else {
  console.log('\x1b[32mРегистр везде совпадает\x1b[0m');
}

console.log('\n=== Венгерская диакритика ===');
const huFiles = wordFiles.filter(function(f) { return /[őóúéáíöüŐÓÚÉÁÍÖÜ]/.test(f); });
console.log('Файлов с диакритикой:', huFiles.length);
if (huFiles.length > 0) {
  console.log('Примеры:', huFiles.slice(0, 5).join(', ') + (huFiles.length > 5 ? '...' : ''));
}

// Generate SLIDE_AUDIO_COUNTS
console.log('\n=== Сгенерированный SLIDE_AUDIO_COUNTS ===');
const entries = [];
for (const lesson of [...lessons].sort((a, b) => a - b)) {
  const count = lessonMap.get(lesson).length;
  entries.push('  ' + lesson + ': ' + count);
}
console.log('{\n' + entries.join(',\n') + '\n}');
