import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import ts from 'typescript';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(.:)/, '$1');
const srcRoot = join(root, 'src');
const cyrillic = /[А-Яа-яЁё]/u;

function filesBelow(directory: string): string[] {
  return readdirSync(directory).flatMap((name) => {
    const path = join(directory, name);
    return statSync(path).isDirectory() ? filesBelow(path) : [path];
  });
}

function category(path: string): 'lesson content' | 'admin' | 'legal' | 'UI' | 'developer/internal' {
  const normalized = path.replaceAll('\\', '/');
  if (normalized.includes('/data/lessons/') || normalized.includes('/data/lessonData.')) return 'lesson content';
  if (
    normalized.includes('/admin/') ||
    normalized.includes('/pages/admin/') ||
    /\/components\/(?:Admin|ConfirmDialog|EditWordModal|SlideAudioModal)/u.test(normalized)
  ) return 'admin';
  if (normalized.endsWith('/pages/LegalPages.tsx')) return 'legal';
  if (normalized.includes('/components/') || normalized.includes('/pages/') || normalized.endsWith('/App.tsx')) return 'UI';
  return 'developer/internal';
}

const findings = new Map<string, Set<string>>();
const uniqueText = new Map<string, Set<string>>();
for (const path of filesBelow(srcRoot).filter((file) => ['.ts', '.tsx'].includes(extname(file)))) {
  const source = readFileSync(path, 'utf8');
  const sourceFile = ts.createSourceFile(path, source, ts.ScriptTarget.Latest, true, path.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const visit = (node: ts.Node): void => {
    const isTextNode =
      ts.isStringLiteral(node) ||
      ts.isNoSubstitutionTemplateLiteral(node) ||
      ts.isJsxText(node) ||
      ts.isTemplateHead(node) ||
      ts.isTemplateMiddle(node) ||
      ts.isTemplateTail(node);
    if (isTextNode && cyrillic.test(node.text)) {
      const key = category(path);
      const item = `${relative(root, path)}:${sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1}\t${node.text.replaceAll(/\s+/g, ' ').slice(0, 180)}`;
      const bucket = findings.get(key) ?? new Set<string>();
      bucket.add(item);
      findings.set(key, bucket);
      const textBucket = uniqueText.get(key) ?? new Set<string>();
      textBucket.add(node.text.replaceAll(/\s+/g, ' ').trim());
      uniqueText.set(key, textBucket);
    }
    ts.forEachChild(node, visit);
  };
  visit(sourceFile);
}

let total = 0;
for (const name of ['UI', 'lesson content', 'admin', 'developer/internal', 'legal']) {
  const items = [...(findings.get(name) ?? [])];
  total += items.length;
  const texts = [...(uniqueText.get(name) ?? [])];
  const characters = texts.reduce((sum, value) => sum + value.length, 0);
  console.log(`${name}: ${items.length} occurrences, ${texts.length} unique strings, ${characters} characters`);
  if (process.argv.includes('--details')) items.forEach((item) => console.log(`  ${item}`));
}
console.log(`total: ${total}`);
