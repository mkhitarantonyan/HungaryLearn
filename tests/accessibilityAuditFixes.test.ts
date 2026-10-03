import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const readSource = (relativePath: string) =>
  readFileSync(new URL(`../${relativePath}`, import.meta.url), 'utf8');

test('narrow screens can reflow below 320 CSS pixels without a forced horizontal canvas', () => {
  const globalCss = readSource('src/index.css');
  const preloaderCss = readSource('src/components/AppPreloader.css');

  assert.doesNotMatch(globalCss, /min-width:\s*320px/);
  assert.doesNotMatch(preloaderCss, /min-width:\s*320px/);
});

test('keyboard focus uses a fully opaque high-contrast indicator', () => {
  const globalCss = readSource('src/index.css');

  assert.match(globalCss, /:focus-visible\s*\{[\s\S]*outline:\s*3px solid #0d5ed0/i);
  assert.doesNotMatch(globalCss, /:focus-visible\s*\{[\s\S]{0,120}rgba\(17,\s*110,\s*238,\s*0\.34\)/i);
});

test('audited overlays are modal dialogs with shared focus containment', () => {
  const focusHook = readSource('src/hooks/useDialogFocus.ts');
  const drawer = readSource('src/components/SlideDrawer.tsx');
  const auth = readSource('src/components/UserAuthModal.tsx');
  const warmup = readSource('src/components/ReviewWarmup.tsx');
  const onboarding = readSource('src/components/LanguageOnboarding.tsx');

  assert.match(focusHook, /event\.key === 'Escape'/);
  assert.match(focusHook, /event\.key !== 'Tab'/);
  assert.match(focusHook, /sibling\.inert = true/);
  assert.match(focusHook, /data-dialog-return-focus/);

  for (const component of [drawer, auth, warmup]) {
    assert.match(component, /useDialogFocus\(/);
    assert.match(component, /role="dialog"/);
    assert.match(component, /aria-modal="true"/);
    assert.match(component, /tabIndex=\{-1\}/);
  }

  assert.match(onboarding, /useDialogFocus\(!preferenceSelected, null/);
  assert.match(onboarding, /role="dialog"/);
});

test('warm-up controls expose audio, progress and result changes to assistive technology', () => {
  const warmup = readSource('src/components/ReviewWarmup.tsx');

  assert.match(warmup, /aria-label=\{t\('pronunciation\.play'/);
  assert.match(warmup, /role="progressbar"/);
  assert.match(warmup, /aria-valuenow=\{gradedCount\}/);
  assert.match(warmup, /role="status"/);
  assert.match(warmup, /firstGradeButtonRef\.current\?\.focus\(\)/);
});

test('the app offers a localized skip link and one lesson-page h1', () => {
  const routes = readSource('src/AppRoutes.tsx');
  const app = readSource('src/App.tsx');
  const header = readSource('src/components/Header.tsx');

  assert.match(routes, /<SkipLink \/>/);
  assert.match(app, /id="main-content"/);
  assert.match(app, /<h2 className="text-2xl md:text-4xl/);
  assert.match(header, /<h1 className=/);
});
