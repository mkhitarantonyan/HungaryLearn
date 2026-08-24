import path from 'node:path';
import {
  collectListeningPlan,
  LISTENING_AUDIO_ROOT,
  validateListeningFiles,
} from './listeningPlan';

async function main(): Promise<void> {
  const entries = await collectListeningPlan();
  const result = validateListeningFiles(entries, path.resolve(LISTENING_AUDIO_ROOT));

  console.log('LISTENING AUDIO VALIDATION');
  for (const check of result.checks) {
    console.log(`L${check.lesson}\t${check.filename}\t${check.status}`);
  }

  const missing = result.checks.filter((check) => check.status === 'MISSING');
  console.log('\nMISSING LISTENING AUDIO');
  for (const check of missing) {
    console.log(`L${check.lesson}\t${check.filename}`);
  }

  for (const warning of result.warnings) console.warn(`WARNING: ${warning}`);
  for (const error of result.errors) console.error(`ERROR: ${error}`);

  console.log(
    `\n${entries.length} activities, ${result.checks.length} unique assets, `
      + `${missing.length} missing, ${result.warnings.length} warnings, ${result.errors.length} errors.`
  );

  if (result.errors.length > 0) process.exitCode = 1;
}

void main();
