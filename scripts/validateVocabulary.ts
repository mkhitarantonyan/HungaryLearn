import assert from 'node:assert/strict';
import { buildVocabularyPlan, normalizeVocabularyIdentity } from './vocabularyPlan';
import {
  GENERATED_VOCABULARY_CARDS,
  GENERATED_VOCABULARY_ENTRIES,
  GENERATED_VOCABULARY_LEXEMES,
} from '../src/data/generatedVocabularyCatalog';
import {
  INTENTIONAL_ORPHAN_REVIEW_CARD_IDS,
  LEGACY_REVIEW_CARD_ALIASES,
  LEGACY_REVIEW_CARD_COUNT,
} from '../src/data/vocabularyLegacy';
import { createInitialCardState } from '../src/utils/spacedRepetition';
import { VOCABULARY_LEMMA_OVERRIDES, VOCABULARY_SRS_EXCLUSIONS } from '../src/data/vocabularyConfig';

const plan = await buildVocabularyPlan();
const errors: string[] = [];
const warnings: string[] = [...plan.qaFlags];

function duplicateValues(values: string[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const value of values) (seen.has(value) ? duplicates : seen).add(value);
  return [...duplicates];
}

for (const [label, ids] of [
  ['target vocabulary', plan.entries.map((entry) => entry.id)],
  ['canonical lexeme', plan.lexemes.map((lexeme) => lexeme.id)],
  ['SRS card', plan.cards.map((card) => card.id)],
] as const) {
  const duplicates = duplicateValues(ids);
  if (duplicates.length) errors.push(`Duplicate ${label} IDs: ${duplicates.join(', ')}`);
}

const entryIds = new Set(plan.entries.map((entry) => entry.id));
const lexemeIds = new Set(plan.lexemes.map((lexeme) => lexeme.id));
const cardIds = new Set(plan.cards.map((card) => card.id));
for (const configuredId of [...Object.keys(VOCABULARY_LEMMA_OVERRIDES), ...Object.keys(VOCABULARY_SRS_EXCLUSIONS)]) {
  if (!entryIds.has(configuredId)) errors.push(`${configuredId}: vocabulary metadata points to a nonexistent source item`);
}

for (const entry of plan.entries) {
  if (!entry.hu.trim()) errors.push(`${entry.id}: empty Hungarian text`);
  if (!entry.ru.trim()) errors.push(`${entry.id}: empty translation`);
  if (entry.lessonNumber < 1 || entry.lessonNumber > 28) errors.push(`${entry.id}: invalid lesson ${entry.lessonNumber}`);
  if (!lexemeIds.has(entry.lexemeId)) errors.push(`${entry.id}: missing lexeme ${entry.lexemeId}`);
  if (entry.cardId && !cardIds.has(entry.cardId)) errors.push(`${entry.id}: missing SRS card ${entry.cardId}`);
  if (/[<>]/.test(entry.hu) || /\r|\n/.test(entry.hu) || entry.hu !== entry.hu.trim() || /\s{2,}/.test(entry.hu)) {
    errors.push(`${entry.id}: malformed word/phrase "${entry.hu}"`);
  }
  if (!entry.srsEligible && !entry.srsExclusionReason?.trim()) errors.push(`${entry.id}: SRS exclusion has no reason`);
}

for (const card of plan.cards) {
  if (!/^[a-z0-9][a-z0-9_-]*$/.test(card.id)) errors.push(`${card.id}: unsafe SRS card ID`);
  if (!lexemeIds.has(card.lexemeId)) errors.push(`${card.id}: missing canonical lexeme ${card.lexemeId}`);
  for (const sourceId of card.sourceVocabularyIds) {
    if (!entryIds.has(sourceId)) errors.push(`${card.id}: missing source vocabulary ${sourceId}`);
  }
}

for (const lexeme of plan.lexemes) {
  if (!/^[a-z0-9][a-z0-9_-]*$/.test(lexeme.id)) errors.push(`${lexeme.id}: unsafe lexeme ID`);
  if (lexeme.lessonIntroduced < 1 || lexeme.lessonIntroduced > 28) errors.push(`${lexeme.id}: invalid lessonIntroduced`);
  const group = plan.entries.filter((entry) => entry.lexemeId === lexeme.id);
  if (group.length > 1) {
    const explicit = group.every((entry) => normalizeVocabularyIdentity(entry.lemma) === normalizeVocabularyIdentity(lexeme.lemma));
    if (!explicit) errors.push(`${lexeme.id}: duplicate lemma group is not explicit`);
    const translations = [...new Set(group.map((entry) => entry.ru.trim()))];
    if (translations.length > 1) warnings.push(`${lexeme.lemma}: curriculum forms have multiple translations (${translations.join(' | ')})`);
  }
}

const lexemesByTranslation = new Map<string, string[]>();
for (const lexeme of plan.lexemes) {
  const key = lexeme.translation.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('ru-RU');
  const lemmas = lexemesByTranslation.get(key) ?? [];
  lemmas.push(lexeme.lemma);
  lexemesByTranslation.set(key, lemmas);
}
for (const [translation, lemmas] of lexemesByTranslation) {
  if (lemmas.length > 1) warnings.push(`Translation-only duplicate "${translation}": ${lemmas.join(', ')}`);
}

for (const summary of plan.lessons) {
  const sameLessonGroups = plan.lexemes.filter((lexeme) => {
    const entries = plan.entries.filter((entry) => entry.lessonNumber === summary.lesson && entry.lexemeId === lexeme.id);
    return entries.length > 1;
  });
  for (const lexeme of sameLessonGroups) {
    warnings.push(`L${summary.lesson}: explicit variants grouped under ${lexeme.lemma}`);
  }
}

const aliasIds = Object.keys(LEGACY_REVIEW_CARD_ALIASES);
const orphanIds = [...INTENTIONAL_ORPHAN_REVIEW_CARD_IDS];
if (aliasIds.length + orphanIds.length !== LEGACY_REVIEW_CARD_COUNT) {
  errors.push(`Legacy compatibility covers ${aliasIds.length + orphanIds.length}/${LEGACY_REVIEW_CARD_COUNT} former cards`);
}
for (const [legacyId, canonicalId] of Object.entries(LEGACY_REVIEW_CARD_ALIASES)) {
  if (!cardIds.has(canonicalId)) errors.push(`${legacyId}: legacy alias target ${canonicalId} is missing`);
}
for (const id of orphanIds) {
  if (id in LEGACY_REVIEW_CARD_ALIASES) errors.push(`${id}: cannot be both an alias and intentional orphan`);
}

const reviewState = createInitialCardState(plan.cards[0].id, plan.cards[0].lessonIntroduced);
assert.deepEqual(Object.keys(reviewState).sort(), ['cardId', 'dueDate', 'easeFactor', 'intervalDays', 'lastReviewedAt', 'lessonNumber', 'reps']);

if (JSON.stringify(plan.entries) !== JSON.stringify(GENERATED_VOCABULARY_ENTRIES)) errors.push('Generated target entry catalog is stale; run npm run export:vocabulary');
if (JSON.stringify(plan.lexemes) !== JSON.stringify(GENERATED_VOCABULARY_LEXEMES)) errors.push('Generated lexeme catalog is stale; run npm run export:vocabulary');
if (JSON.stringify(plan.cards) !== JSON.stringify(GENERATED_VOCABULARY_CARDS)) errors.push('Generated SRS card catalog is stale; run npm run export:vocabulary');

function foldHungarianDiacritics(value: string): string {
  return normalizeVocabularyIdentity(value).normalize('NFD').replace(/\p{M}/gu, '');
}
const folded = new Map<string, string[]>();
for (const lexeme of plan.lexemes) {
  const key = foldHungarianDiacritics(lexeme.lemma);
  const values = folded.get(key) ?? [];
  values.push(lexeme.lemma);
  folded.set(key, values);
}
for (const values of folded.values()) {
  const identities = [...new Set(values.map(normalizeVocabularyIdentity))];
  if (identities.length > 1) warnings.push(`Suspicious diacritic variants (not merged): ${[...new Set(values)].join(', ')}`);
}

console.log(`Course totals: ${plan.entries.length} target entries, ${plan.lexemes.length} unique lexemes, ${plan.cards.length} SRS cards, ${plan.exclusions.length} excluded.`);
for (const lesson of plan.lessons) {
  console.log(`L${lesson.lesson}: target ${lesson.target}, new ${lesson.newLexemes}, recycled ${lesson.recycledLexemes}, SRS ${lesson.srsEligible}, excluded ${lesson.excluded}`);
}
for (const warning of [...new Set(warnings)]) console.warn(`WARN: ${warning}`);

if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.error(`Vocabulary validation failed with ${errors.length} error(s).`);
  process.exit(1);
}

console.log(`Vocabulary validation PASS: 28 lessons, ${Object.keys(LEGACY_REVIEW_CARD_ALIASES).length} legacy aliases, ${orphanIds.length} intentional orphans, 0 errors.`);
