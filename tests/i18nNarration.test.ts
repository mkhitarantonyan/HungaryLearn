import assert from 'node:assert/strict';
import test from 'node:test';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import {
  DEFAULT_LANGUAGE,
  I18nProvider,
  LANGUAGE_SELECTED_STORAGE_KEY,
  LANGUAGE_STORAGE_KEY,
  SUPPORTED_LANGUAGES,
  resolveInitialLanguage,
  persistLanguageSelection,
  translate,
  useI18n,
} from '../src/i18n/index.tsx';
import { TARGET_LANGUAGE } from '../src/i18n/types.ts';
import {
  NARRATION_CONFIG,
  getNarrationSource,
  isNarrationAvailable,
} from '../src/config/narration.ts';
import { getSlideNarrativeSequence } from '../src/utils/slideNarrator.ts';
import { getLocalizedWordTranslation } from '../src/i18n/content.ts';
import type { SlideData } from '../src/types.ts';
import { getAudioFileUrl } from '../src/utils/audioRegistry.ts';
import { SPANISH_NARRATION_VERSIONS } from '../src/data/spanishNarrationManifest.ts';
import { LESSONS_META, loadLesson } from '../src/data/lessons/index.ts';

test('language preference resolution is stored-choice first with Russian fallback', () => {
  assert.equal(LANGUAGE_STORAGE_KEY, 'hungarylearn:language:v1');
  assert.equal(LANGUAGE_SELECTED_STORAGE_KEY, 'hungarylearn:instruction-language-selected:v1');
  assert.equal(TARGET_LANGUAGE, 'hu');
  assert.deepEqual(SUPPORTED_LANGUAGES, ['ru', 'en', 'es']);
  assert.equal(DEFAULT_LANGUAGE, 'ru');
  assert.equal(resolveInitialLanguage('es', 'en-US'), 'es');
  assert.equal(resolveInitialLanguage(null, 'en-GB'), 'en');
  assert.equal(resolveInitialLanguage(null, 'es_ES'), 'es');
  assert.equal(resolveInitialLanguage(null, 'de-DE'), 'ru');
  assert.equal(resolveInitialLanguage('unknown', 'de-DE'), 'ru');
});

test('an explicit onboarding or menu choice persists the instruction language', () => {
  const values = new Map<string, string>();
  persistLanguageSelection({ setItem: (key, value) => { values.set(key, value); } }, 'es');
  assert.equal(values.get(LANGUAGE_STORAGE_KEY), 'es');
  assert.equal(values.get(LANGUAGE_SELECTED_STORAGE_KEY), 'true');
});

function TranslationProbe() {
  const { language, t } = useI18n();
  return React.createElement('div', null, `${language}:${t('onboarding.title')}:${t('navigation.next')}`);
}

test('provider renders visibly different EN and ES interface copy without reload', () => {
  const english = renderToStaticMarkup(React.createElement(I18nProvider, { initialLanguage: 'en', initialPreferenceSelected: true, children: React.createElement(TranslationProbe) }));
  const spanish = renderToStaticMarkup(React.createElement(I18nProvider, { initialLanguage: 'es', initialPreferenceSelected: true, children: React.createElement(TranslationProbe) }));
  assert.match(english, /Which language would you like to use to learn Hungarian\?/u);
  assert.doesNotMatch(english, /На каком языке/u);
  assert.match(spanish, /¿En qué idioma quieres aprender húngaro\?/u);
  assert.doesNotMatch(spanish, /На каком языке/u);
  assert.notEqual(english, spanish);
});

test('all supported locales render translated interface text without exposing keys', () => {
  for (const language of SUPPORTED_LANGUAGES) {
    const value = translate(language, 'narration.title');
    assert.ok(value.length > 0);
    assert.notEqual(value, 'narration.title');
    assert.equal(translate(language, 'progress.slide', { current: 2, total: 10 }).includes('{'), false);
  }
});

test('narration capability is locale-driven and RU assets stay separate from pronunciation', () => {
  assert.deepEqual(NARRATION_CONFIG, {
    ru: { available: true, assetNamespace: null },
    en: { available: false, assetNamespace: 'narration/en' },
    es: { available: true, assetNamespace: 'narration/es' },
  });
  assert.equal(isNarrationAvailable('ru'), true);
  assert.equal(isNarrationAvailable('en'), false);
  assert.equal(isNarrationAvailable('es'), true);

  const slide = { id: 1, eyebrow: '', title: '', subtitle: '' } satisfies SlideData;
  assert.ok(getNarrationSource(1, 'ru', 1));
  assert.equal(getNarrationSource(1, 'en', 1), null);
  assert.match(getNarrationSource(1, 'es', 1)?.url ?? '', /^\/audio\/narration\/es\/1\.1\.mp3\?v=[a-f0-9]{12}$/u);
  assert.equal(getNarrationSource(1, 'es', 12), null);
  assert.deepEqual(getSlideNarrativeSequence(slide, 1, 'en'), []);
  assert.deepEqual(getSlideNarrativeSequence(slide, 1, 'es'), [{ key: 'narration/es/l1_s1' }]);
});

test('every Spanish slide has its own nonempty, versioned MP3 without falling back to Russian', async () => {
  const dir = new URL('../public/audio/narration/es/', import.meta.url);
  const names = readdirSync(dir).filter(name => name.endsWith('.mp3'));
  const expected = new Set<string>();

  for (const meta of LESSONS_META) {
    const lesson = await loadLesson(meta.number);
    assert.ok(lesson, `Lesson ${meta.number} is loadable`);
    for (const slide of lesson.slides) {
      const key = `${meta.number}.${slide.id}`;
      const name = `${key}.mp3`;
      expected.add(name);
      assert.ok(names.includes(name), `Missing Spanish narration: ${name}`);
      const contents = readFileSync(new URL(name, dir));
      assert.ok(contents.length > 0, `Empty Spanish narration: ${name}`);
      const version = createHash('sha256').update(contents).digest('hex').slice(0, 12);
      assert.equal(SPANISH_NARRATION_VERSIONS[key], version, `Stale Spanish narration manifest: ${name}`);
      const source = getNarrationSource(meta.number, 'es', slide.id);
      assert.equal(source?.audioKey, `narration/es/l${meta.number}_s${slide.id}`);
      assert.equal(source?.url, `/audio/narration/es/${name}?v=${version}`);
      assert.notEqual(source?.url, getNarrationSource(meta.number, 'ru', slide.id)?.url);
    }
  }

  assert.deepEqual(new Set(names), expected, 'Spanish narration has unexpected or duplicate slide files');
  assert.equal(Object.keys(SPANISH_NARRATION_VERSIONS).length, expected.size);
});

test('localized vocabulary metadata falls back to the existing Russian meaning', () => {
  const item = { ru: 'дом', translations: { en: 'house' } };
  assert.equal(getLocalizedWordTranslation(item, 'en'), 'house');
  assert.equal(getLocalizedWordTranslation(item, 'es'), 'дом');
  assert.equal(getLocalizedWordTranslation(item, 'ru'), 'дом');
});

test('Hungarian pronunciation assets are independent of instruction language', () => {
  const source = getAudioFileUrl('alma');
  assert.ok(source?.includes('alma.mp3'));
  for (const language of SUPPORTED_LANGUAGES) {
    assert.equal(getAudioFileUrl('alma'), source, `${language} changed Hungarian pronunciation audio`);
  }
});
