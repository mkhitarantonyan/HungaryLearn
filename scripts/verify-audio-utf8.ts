import fs from 'fs';
import path from 'path';
import { wordAudioMap } from '../src/data/wordAudioMap';
import { SLIDE_AUDIO_COUNTS } from '../src/data/slideAudioManifest';

const audioDir = path.resolve('public/audio');

if (!fs.existsSync(audioDir)) {
  console.error('Directory public/audio does not exist!');
  process.exit(1);
}

const diskFiles = fs.readdirSync(audioDir);
const diskFilesSet = new Set(diskFiles);
const diskFilesNormalizedMap = new Map<string, string>();

for (const file of diskFiles) {
  diskFilesNormalizedMap.set(file.normalize('NFC'), file);
  diskFilesNormalizedMap.set(file.toLowerCase().normalize('NFC'), file);
}

console.log('=== 1. ПРОВЕРКА UTF-8 И ДИАКРИТИКИ ВЕНГЕРСКИХ СЛОВ ===');
let wordIssues = 0;
for (const [word, url] of Object.entries(wordAudioMap)) {
  const fileName = url.replace(/^.*\/audio\//, '');
  const nfcFileName = fileName.normalize('NFC');
  
  if (!diskFilesSet.has(fileName)) {
    if (diskFilesNormalizedMap.has(nfcFileName)) {
      console.warn(`⚠️ Проблема кодировки UTF-8 / NFD: "${fileName}" -> на диске как "${diskFilesNormalizedMap.get(nfcFileName)}"`);
      wordIssues++;
    } else {
      console.error(`❌ Слово "${word}" указывает на файл "${fileName}", но файл ОТСУТСТВУЕТ на диске!`);
      wordIssues++;
    }
  }
}
if (wordIssues === 0) {
  console.log(`✅ Все ${Object.keys(wordAudioMap).length} слов из wordAudioMap.ts совпадают с файлами на диске!`);
}

console.log('\n=== 2. ПРОВЕРКА ФАЙЛОВ СЛАЙДОВ ===');
let slideIssues = 0;
let totalExpectedSlides = 0;
let totalMissingSlides = 0;

for (const [lessonStr, count] of Object.entries(SLIDE_AUDIO_COUNTS)) {
  const lesson = parseInt(lessonStr, 10);
  for (let slide = 1; slide <= count; slide++) {
    totalExpectedSlides++;
    const expectedName = `${lesson}.${slide}.mp3`;
    if (!diskFilesSet.has(expectedName)) {
      console.error(`❌ Урок ${lesson}, слайд ${slide} — файла нет (${expectedName})`);
      slideIssues++;
      totalMissingSlides++;
    }
  }
}

if (slideIssues === 0) {
  console.log(`✅ Все ${totalExpectedSlides} файлов слайдов присутствуют на диске и готовы к проигрыванию!`);
} else {
  console.log(`⚠️ Итого отсутствует ${totalMissingSlides} файлов слайдов из ${totalExpectedSlides}.`);
}
