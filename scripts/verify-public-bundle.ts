import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { LESSONS_META } from '../src/data/lessons/index.ts';
import { loadServerLesson } from '../src/server/lessonLoader.ts';

const distAssets = path.resolve('dist/assets');
const jsFiles = (await readdir(distAssets)).filter((file) => file.endsWith('.js'));
const bundle = (await Promise.all(jsFiles.map((file) => readFile(path.join(distAssets, file), 'utf8')))).join('\n');
const publicMetadata = JSON.stringify([
  LESSONS_META,
  await loadServerLesson(1),
  await loadServerLesson(2),
]);
const leaks: Array<{ lesson: number; sample: string }> = [];
for (let lessonNumber = 3; lessonNumber <= 28; lessonNumber += 1) {
  const lesson = await loadServerLesson(lessonNumber);
  const strings: string[] = [];
  const visit = (value: unknown): void => {
    if (typeof value === 'string' && value.length >= 70 && !publicMetadata.includes(value)) strings.push(value);
    else if (Array.isArray(value)) value.forEach(visit);
    else if (value && typeof value === 'object') Object.values(value).forEach(visit);
  };
  visit(lesson?.slides);
  visit(lesson?.vocabulary);
  visit(lesson?.quiz);
  const leaked = strings.find((value) => bundle.includes(value));
  if (leaked) leaks.push({ lesson: lessonNumber, sample: leaked.slice(0, 80) });
}
if (leaks.length) throw new Error(`Paid lesson content leaked into browser bundle: ${JSON.stringify(leaks)}`);
console.log(`Public bundle audit passed: L3-L28 lesson bodies are absent (${jsFiles.length} JS assets checked).`);
