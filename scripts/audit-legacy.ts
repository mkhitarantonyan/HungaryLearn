import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve('.');
const sourceRoots = ['src', path.join('functions', 'src')];
const sourceExtensions = new Set(['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs', '.json']);

interface Check {
  label: string;
  patterns: RegExp[];
}

const checks: Check[] = [
  { label: 'Supabase runtime', patterns: [/supabase/i, /storage\.supabase/i] },
  { label: 'PostgreSQL runtime', patterns: [/postgres(?:ql)?/i, /from\s+['"]pg['"]/i, /\b(?:Pool|createPool)\s*\(/] },
  { label: 'DATABASE_URL runtime', patterns: [new RegExp(`DATABASE_${'URL'}`)] },
  { label: 'Stripe runtime', patterns: [/stripe/i] },
  { label: 'browser TTS runtime', patterns: [new RegExp(`speech${'Synthesis'}`, 'i'), /SpeechSynthesisUtterance/] },
];

function filesUnder(directory: string): string[] {
  const absolute = path.join(root, directory);
  const output: string[] = [];
  for (const entry of readdirSync(absolute)) {
    const item = path.join(absolute, entry);
    if (statSync(item).isDirectory()) output.push(...filesUnder(path.relative(root, item)));
    else if (sourceExtensions.has(path.extname(item))) output.push(item);
  }
  return output;
}

const runtimeFiles = [
  ...sourceRoots.flatMap(filesUnder),
  path.join(root, 'package.json'),
  path.join(root, '.env.example'),
  path.join(root, 'firebase.json'),
];

let failed = false;
for (const check of checks) {
  const hits: string[] = [];
  for (const file of runtimeFiles) {
    const lines = readFileSync(file, 'utf8').split(/\r?\n/);
    lines.forEach((line, index) => {
      if (check.patterns.some((pattern) => pattern.test(line))) {
        hits.push(`${path.relative(root, file)}:${index + 1}`);
      }
    });
  }
  console.log(`${check.label}: ${hits.length}`);
  if (hits.length) {
    failed = true;
    for (const hit of hits) console.error(`  ${hit}`);
  }
}

const packageJson = JSON.parse(readFileSync(path.join(root, 'package.json'), 'utf8')) as {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};
const directPackages = Object.keys({ ...packageJson.dependencies, ...packageJson.devDependencies });
const forbiddenDirectPackages = directPackages.filter((name) => (
  name === 'pg'
  || name.startsWith('@types/pg')
  || name.startsWith('@supabase/')
  || name === 'stripe'
));
console.log(`Legacy direct dependencies: ${forbiddenDirectPackages.length}`);
if (forbiddenDirectPackages.length) {
  failed = true;
  for (const name of forbiddenDirectPackages) console.error(`  ${name}`);
}

const intentionalTestAssertions = filesUnder('tests').reduce((count, file) => {
  const source = readFileSync(file, 'utf8');
  return count + (source.match(/speechSynthesis|SpeechSynthesisUtterance/g)?.length || 0);
}, 0);
console.log(`Intentional negative TTS assertions in tests: ${intentionalTestAssertions}`);

if (failed) {
  console.error('Legacy production audit FAILED.');
  process.exitCode = 1;
} else {
  console.log('Legacy production audit PASS.');
}
