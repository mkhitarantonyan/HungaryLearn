import assert from 'node:assert/strict';
import test from 'node:test';
import {
  findReviewStateForCard,
  getCanonicalCardIdForVocabulary,
  LESSON_VOCABULARY_MAP,
  resolveVocabularyCard,
  VOCABULARY_ENTRIES,
  VOCABULARY_LEXEMES,
} from '../src/data/vocabularyCatalog';
import {
  countDueCards,
  createInitialCardState,
  getAllVocabularyCards,
  getWarmupSession,
  gradeCard,
} from '../src/utils/spacedRepetition';
import { normalizeVocabularyIdentity } from '../scripts/vocabularyPlan';
import type { ReviewCardState } from '../src/types';

test('getAllVocabularyCards returns the complete canonical SRS corpus in curriculum order', () => {
  const cards = getAllVocabularyCards();
  assert.equal(cards.length, 184);
  assert.deepEqual(cards.map((card) => card.lessonIntroduced), [...cards].map((card) => card.lessonIntroduced).sort((a, b) => a - b));
});

test('all canonical card IDs are unique and stable-looking', () => {
  const ids = getAllVocabularyCards().map((card) => card.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every((id) => /^card_[a-z0-9][a-z0-9_-]*$/.test(id)));
});

test('all canonical lexeme IDs are unique', () => {
  const ids = VOCABULARY_LEXEMES.map((lexeme) => lexeme.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('recycled vocabulary resolves to one card instead of duplicate cards', () => {
  const lexeme = VOCABULARY_LEXEMES.find((item) => item.lemma === 'pályaudvar');
  assert.deepEqual(lexeme?.usedInLessons, [11, 27]);
  assert.equal(getAllVocabularyCards().filter((card) => card.lexemeId === lexeme?.id).length, 1);
});

test('card identity uses the lemma while display keeps the taught curriculum form', () => {
  const cardId = getCanonicalCardIdForVocabulary('l7_v4');
  const card = resolveVocabularyCard(cardId!);
  assert.equal(card?.hu, 'látom');
  assert.equal(card?.baseWord, 'lát');
  assert.equal(card?.ru, 'я вижу (его/её/это)');
});

test('Hungarian diacritics are preserved in lexical identity', () => {
  assert.notEqual(normalizeVocabularyIdentity('kor'), normalizeVocabularyIdentity('kör'));
  assert.ok(VOCABULARY_LEXEMES.some((lexeme) => lexeme.lemma === 'ősz'));
  assert.ok(!VOCABULARY_LEXEMES.some((lexeme) => lexeme.lemma === 'osz'));
});

test('a curriculum phrase remains one vocabulary and SRS unit', () => {
  const entry = VOCABULARY_ENTRIES.find((item) => item.hu === 'Hogy vagy?');
  assert.ok(entry?.cardId);
  assert.equal(resolveVocabularyCard(entry.cardId)?.hu, 'Hogy vagy?');
});

test('explicitly excluded target vocabulary does not enter SRS', () => {
  assert.equal(getCanonicalCardIdForVocabulary('l5_v3'), null);
  assert.equal(getCanonicalCardIdForVocabulary('l5_v4'), null);
  assert.ok(!getAllVocabularyCards().some((card) => card.sourceVocabularyIds.includes('l5_v3')));
});

test('an existing legacy ReviewCardState continues to resolve', () => {
  const legacyState = { ...createInitialCardState('l4_v3', 4), reps: 7 };
  const canonical = resolveVocabularyCard('l4_v3');
  assert.equal(canonical?.hu, 'dolgozik');
  assert.equal(findReviewStateForCard(canonical!.id, { l4_v3: legacyState })?.reps, 7);
});

test('unknown and orphan review states are ignored without mutation or crash', () => {
  const orphan = createInitialCardState('removed_card', 1);
  const states = { removed_card: orphan };
  const before = JSON.stringify(states);
  assert.equal(resolveVocabularyCard('removed_card'), null);
  assert.doesNotThrow(() => countDueCards(states, [1]));
  assert.equal(JSON.stringify(states), before);
});

test('simplified SM-2 scheduling behavior remains unchanged', () => {
  const initial = createInitialCardState('card_l1_v1', 1);
  const good = gradeCard(initial, 'good');
  assert.deepEqual({ intervalDays: good.intervalDays, easeFactor: good.easeFactor, reps: good.reps }, { intervalDays: 1, easeFactor: 2.5, reps: 1 });
  const again = gradeCard({ ...initial, intervalDays: 9, easeFactor: 2.5, reps: 4 }, 'again');
  assert.deepEqual({ intervalDays: again.intervalDays, easeFactor: again.easeFactor, reps: again.reps }, { intervalDays: 0, easeFactor: 2.3, reps: 0 });
});

test('all 28 lessons have target vocabulary and generated inventory coverage', () => {
  assert.equal(Object.keys(LESSON_VOCABULARY_MAP).length, 28);
  for (let lesson = 1; lesson <= 28; lesson += 1) {
    assert.ok((LESSON_VOCABULARY_MAP[lesson]?.length ?? 0) > 0, `L${lesson}`);
  }
  assert.equal(VOCABULARY_ENTRIES.length, 237);
});

test('due-date parsing handles new, due-now, and future cards with ISO timestamps', () => {
  const lessonOneCards = getAllVocabularyCards().filter((card) => card.lessonIntroduced === 1);
  const future = new Date(Date.now() + 86_400_000).toISOString();
  const past = new Date(Date.now() - 60_000).toISOString();
  const states: Record<string, ReviewCardState> = Object.fromEntries(
    lessonOneCards.map((card) => [card.id, { ...createInitialCardState(card.id, 1), dueDate: future }]),
  );
  states[lessonOneCards[0].id] = { ...states[lessonOneCards[0].id], dueDate: past };
  const session = getWarmupSession(states, [1], 20);
  assert.deepEqual(session.map((card) => card.state.cardId), [lessonOneCards[0].id]);
});

test('vocabulary architecture has no Listening, narration, or MP3 fallback fields', () => {
  const serialized = JSON.stringify({ entries: VOCABULARY_ENTRIES, cards: getAllVocabularyCards() });
  assert.doesNotMatch(serialized, /audioStatus|assetId|\.mp3|speechSynthesis/i);
});
