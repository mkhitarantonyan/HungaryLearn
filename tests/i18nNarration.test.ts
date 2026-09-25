import assert from 'node:assert/strict';
import test from 'node:test';
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
    es: { available: false, assetNamespace: 'narration/es' },
  });
  assert.equal(isNarrationAvailable('ru'), true);
  assert.equal(isNarrationAvailable('en'), false);
  assert.equal(isNarrationAvailable('es'), false);

  const slide = { id: 1, eyebrow: '', title: '', subtitle: '' } satisfies SlideData;
  assert.ok(getNarrationSource(1, 'ru', 1));
  assert.equal(getNarrationSource(1, 'en', 1), null);
  assert.equal(getNarrationSource(1, 'es', 1), null);
  assert.deepEqual(getSlideNarrativeSequence(slide, 1, 'en'), []);
  assert.deepEqual(getSlideNarrativeSequence(slide, 1, 'es'), []);
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
