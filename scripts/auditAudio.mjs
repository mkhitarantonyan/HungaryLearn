import fs from 'fs';
import path from 'path';

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
console.log(`Всего файлов слайдов: ${slideFiles.length}`);
console.log(`Всего файлов слов: ${wordFiles.length}`);
console.log(`Неизвестных файлов: ${unknownFiles.length}`);
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
  const status = missing.length > 0 ? `  ❌ НЕТ: слайды ${missing.join(', ')}` : '  ✅';
  console.log(`Урок ${lesson}: ${slides.length} слайдов (макс: ${maxSlide})${status}`);
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
  
  const allLessonIds = new Set([...Object.keys(codeCounts).map(Number), ...lessons]);
  for (const lid of [...allLessonIds].sort((a, b) => a - b)) {
    const codeVal = codeCounts[lid];
    const diskVal = lessonMap.has(lid) ? lessonMap.get(lid).length : 0;
    const match = codeVal === diskVal;
    console.log(`Урок ${lid}: в коде=${codeVal ?? '—'}, на диске=${diskVal} ${match ? '✅' : '❌ РАСХОЖДЕНИЕ'}`);
  }
}

console.log('\n=== Проверка wordAudioMap.ts ===');
const wordMapPath = path.resolve('src/data/wordAudioMap.ts');
const wordMapSrc = fs.readFileSync(wordMapPath, 'utf-8');
const mappedWordFiles = new Set();
for (const m of wordMapSrc.matchAll(/audioUrl\('([^']+)'\)/g)) {
  mappedWordFiles.add(m[1]);
}

const wordFilesSet = new Set(wordFiles);
const wordMapMissing = wordFiles.filter(f => !mappedWordFiles.has(f));
const wordFilesMissing = [...mappedWordFiles].filter(f => !wordFilesSet.has(f));

if (wordMapMissing.length) console.log('❌ Файлы на диске, но НЕ в wordAudioMap:', wordMapMissing.join(', '));
if (wordFilesMissing.length) console.log('❌ Есть в wordAudioMap, но НЕ на диске:', wordFilesMissing.join(', '));
if (!wordMapMissing.length && !wordFilesMissing.length) console.log('✅ Все word-файлы совпадают с wordAudioMap');

console.log('\n=== Проверка регистра имён файлов ===');
const caseIssues = [];
for (const f of wordFiles) {
  if (mappedWordFiles.has(f)) continue;
  if (mappedWordFiles.has(f.toLowerCase())) {
    caseIssues.push(`${f} (на диске) vs ${f.toLowerCase()} (в коде)`);
  }
}
if (caseIssues.length) {
  console.log('❌ Проблемы регистра:');
  caseIssues.forEach(i => console.log(`   ${i}`));
} else {
  console.log('✅ Регистр везде совпадает');
}

console.log('\n=== Проверка венгерской диакритики ===');
const huFiles = wordFiles.filter(f => /[őóúéáíöüŐÓÚÉÁÍÖÜ]/.test(f));
console.log(`Файлов с диакритикой: ${huFiles.length}`);
if (huFiles.length > 0) {
  console.log('Примеры:', huFiles.slice(0, 5).join(', ') + (huFiles.length > 5 ? '...' : ''));
}