import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import {
  buildListeningAssets,
  collectListeningCoverage,
  collectListeningPlan,
  INTENTIONAL_SHARED_LISTENING_ASSETS,
  LISTENING_AUDIO_ROOT,
  validateListeningPlan,
  type ListeningAssetPlan,
  type ListeningPlanEntry,
} from './listeningPlan';

const docsDirectory = path.resolve('docs');
const jsonPath = path.join(docsDirectory, 'listening-audio-plan.json');
const markdownPath = path.join(docsDirectory, 'LISTENING_AUDIO_PLAN.md');

function countAssetTypes(assets: readonly ListeningAssetPlan[]): Record<string, number> {
  const counts: Record<string, number> = {
    dialogue: 0,
    monologue: 0,
    token_sequence: 0,
    dictation: 0,
  };
  for (const asset of assets) counts[asset.type] += 1;
  return counts;
}

function formatEntry(entry: ListeningPlanEntry): string {
  const objectiveText = entry.objectiveIds.length > 0
    ? `${entry.evidenceRelationship}: ${entry.objectiveIds.join(', ')}`
    : 'practice_only: not used as an ExitCheck requirement';
  const speakerText = entry.speakers.length > 0 ? entry.speakers.join(', ') : '—';
  const questions = entry.questions
    .map((question, index) => `${index + 1}. ${question.prompt} — **${question.correctAnswer}**`)
    .join('\n');

  return `### Lesson ${entry.lesson} · ${entry.activityId}

- Lesson location: slide ${entry.slideId}, activity ${entry.activityIndex + 1}
- Title: ${entry.title}
- Filename: \`${entry.filename}\`
- Type: \`${entry.type}\`
- Speakers: ${speakerText}
- Questions: ${entry.questionCount}
- Pass requirement: ${entry.passCount}/${entry.questionCount}
- Current asset status: \`${entry.audioStatus}\`
- Objective/evidence: ${objectiveText}

Transcript (exact future recording stimulus):

\`\`\`text
${entry.transcript}
\`\`\`

Questions and intended answers:

${questions}
`;
}

async function main(): Promise<void> {
  const activities = await collectListeningPlan();
  const coverage = await collectListeningCoverage();
  const structuralErrors = validateListeningPlan(activities);
  if (structuralErrors.length > 0) {
    throw new Error(`Listening plan is invalid:\n${structuralErrors.join('\n')}`);
  }

  const assets = buildListeningAssets(activities);
  const typeCounts = countAssetTypes(assets);
  const missingFiles = assets
    .filter((asset) => asset.audioStatus === 'missing')
    .map((asset) => `${LISTENING_AUDIO_ROOT}/${asset.filename}`);

  const document = {
    schemaVersion: 1,
    generatedFrom: 'src/data/lessons/lesson1.ts ... lesson28.ts',
    audioRoot: LISTENING_AUDIO_ROOT,
    summary: {
      lessons: coverage.length,
      lessonsWithListening: coverage.filter((entry) => entry.hasListening).length,
      listeningActivities: activities.length,
      uniqueAssets: assets.length,
      ...typeCounts,
    },
    intentionalSharedAssets: INTENTIONAL_SHARED_LISTENING_ASSETS,
    coverage,
    activities,
    assets,
    missingFiles,
  };

  const coverageRows = coverage
    .map((entry) => `| ${entry.lesson} | ${entry.hasListening ? 'HAS_LISTENING' : 'NO_LISTENING'} | ${entry.activityCount} | ${entry.listeningObjectiveIds.join(', ') || '—'} | ${entry.absenceAssessment ?? 'Covered by lesson source.'} |`)
    .join('\n');
  const inventoryRows = activities
    .map((entry) => `| ${entry.lesson} | ${entry.activityId} | ${entry.assetId} | ${entry.type} | ${entry.questionCount} | ${entry.passCount} | ${entry.audioStatus} |`)
    .join('\n');
  const sharedRows = INTENTIONAL_SHARED_LISTENING_ASSETS
    .map((policy) => `| ${policy.assetId} | ${policy.activityIds.join(', ')} | ${policy.reason} |`)
    .join('\n');
  const missingRows = assets
    .filter((asset) => asset.audioStatus === 'missing')
    .map((asset) => `- L${asset.lessonNumbers.join('/L')} \`${LISTENING_AUDIO_ROOT}/${asset.filename}\``)
    .join('\n');

  const markdown = `# Listening Audio Plan

Generated from the lesson source. Do not edit the inventory by hand; run \`npm run export:listening\`.

## Summary

- Lessons audited: ${coverage.length}
- Lessons with Listening: ${coverage.filter((entry) => entry.hasListening).length}
- Listening activities: ${activities.length}
- Unique future MP3 assets: ${assets.length}
- Dialogue assets: ${typeCounts.dialogue}
- Monologue assets: ${typeCounts.monologue}
- Token-sequence assets: ${typeCounts.token_sequence}
- Dictation assets: ${typeCounts.dictation}

## All 28 lessons

| Lesson | Coverage | Activities | Listening objectives | Assessment |
| ---: | --- | ---: | --- | --- |
${coverageRows}

## Listening inventory

| Lesson | Activity | assetId | Type | Questions | Pass | Status |
| ---: | --- | --- | --- | ---: | ---: | --- |
${inventoryRows}

## Intentional shared assets

| assetId | Activities | Reason |
| --- | --- | --- |
${sharedRows}

## MISSING LISTENING AUDIO

${missingRows}

## Activity details

${activities.map(formatEntry).join('\n\n')}

## Hungarian QA

No obvious structural Hungarian issues found by automated checks. Native Hungarian QA is still required before final release.
`;

  mkdirSync(docsDirectory, { recursive: true });
  writeFileSync(jsonPath, `${JSON.stringify(document, null, 2)}\n`, 'utf8');
  writeFileSync(markdownPath, markdown, 'utf8');

  console.log(`Exported ${activities.length} Listening activities and ${assets.length} unique assets.`);
  console.log(jsonPath);
  console.log(markdownPath);
}

void main();
