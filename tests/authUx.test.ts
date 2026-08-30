import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { subscriptionDisplay } from '../src/utils/subscriptionValidity.ts';
import { validateRegistration, userAuthMessage } from '../src/utils/userStore.ts';

const now = new Date('2026-08-27T12:00:00.000Z');
const future = '2026-09-27T12:00:00.000Z';
const past = '2026-07-27T12:00:00.000Z';

test('registration validation covers required fields, e-mail, password length and confirmation', () => {
  assert.match(validateRegistration('', '', '') || '', /Заполните/);
  assert.match(validateRegistration('invalid', '123456', '123456') || '', /e-mail/);
  assert.match(validateRegistration('a@example.com', '12345', '12345') || '', /минимум 6/);
  assert.match(validateRegistration('a@example.com', '123456', '654321') || '', /не совпадают/);
  assert.equal(validateRegistration(' a@example.com ', '123456', '123456'), null);
});

test('Firebase user errors are translated without exposing raw codes', () => {
  assert.equal(userAuthMessage({ code: 'auth/invalid-credential' }, 'fallback'), 'Неверный e-mail или пароль.');
  assert.match(userAuthMessage({ code: 'auth/network-request-failed' }, 'fallback'), /Ошибка сети/);
  assert.match(userAuthMessage({ code: 'auth/too-many-requests' }, 'fallback'), /Слишком много попыток/);
});

test('normal user auth uses Firebase registration, login, logout and session restoration', () => {
  const store = readFileSync(new URL('../src/utils/userStore.ts', import.meta.url), 'utf8');
  const modal = readFileSync(new URL('../src/components/UserAuthModal.tsx', import.meta.url), 'utf8');
  assert.match(store, /createUserWithEmailAndPassword\(getFirebaseAuth\(\), email\.trim\(\), pass\)/);
  assert.match(store, /signInWithEmailAndPassword\(getFirebaseAuth\(\), email\.trim\(\), pass\)/);
  assert.match(store, /logoutUserServer[\s\S]*signOut\(getFirebaseAuth\(\)\)/);
  assert.match(store, /onAuthStateChanged\(getFirebaseAuth\(\)/);
  assert.doesNotMatch(store, /localStorage[\s\S]{0,120}(?:auth|session)|\/api\/auth\/(?:login|register|logout)/);
  assert.match(modal, /!authReady[\s\S]*Проверка аккаунта/);
  assert.match(modal, /mode === 'login'/);
  assert.match(modal, /mode === 'register'/);
});

test('account presentation distinguishes all supported access states', () => {
  assert.equal(subscriptionDisplay({ subscriptionStatus: 'unpaid', paidAccess: false }, now).status, 'unpaid');
  assert.equal(subscriptionDisplay({ subscriptionStatus: 'active', accessUntil: future, paidAccess: true }, now).status, 'active');
  assert.equal(subscriptionDisplay({ subscriptionStatus: 'cancelled', accessUntil: future, paidAccess: true }, now).status, 'cancelled');
  assert.equal(subscriptionDisplay({ subscriptionStatus: 'cancelled', accessUntil: past, paidAccess: false }, now).status, 'expired');
  assert.equal(subscriptionDisplay({ subscriptionStatus: 'expired', paidAccess: false }, now).status, 'expired');
  assert.equal(subscriptionDisplay({ subscriptionStatus: 'past_due', paidAccess: false }, now).status, 'past_due');
  assert.equal(subscriptionDisplay({ subscriptionStatus: 'paused', paidAccess: false }, now).status, 'paused');
  assert.equal(subscriptionDisplay({ subscriptionStatus: 'expired', paidAccess: false, isPrivileged: true }, now).status, 'privileged');
});

test('/admin waits for claim verification and never renders the dashboard while checking', () => {
  const guard = readFileSync(new URL('../src/components/AdminGuard.tsx', import.meta.url), 'utf8');
  const store = readFileSync(new URL('../src/utils/adminStore.ts', import.meta.url), 'utf8');
  assert.match(guard, /auth\.status === 'initializing' \|\| auth\.status === 'checking'/);
  assert.match(guard, /auth\.status !== 'authorized'/);
  assert.match(guard, /AdminLoginScreen/);
  assert.match(store, /getIdTokenResult\(options\.forceRefresh\)/);
  assert.match(store, /tokenResult\.claims\.admin !== true/);
  assert.match(store, /signOutNonAdmin/);
  assert.match(store, /publishAdminSnapshot\(\{ status: 'anonymous'/);
});

test('admin login form is accessible and supports password visibility and browser autofill', () => {
  const source = readFileSync(new URL('../src/components/AdminLoginForm.tsx', import.meta.url), 'utf8');
  const screen = readFileSync(new URL('../src/components/AdminLoginScreen.tsx', import.meta.url), 'utf8');
  assert.match(source, /htmlFor=\{emailId\}/);
  assert.match(source, /htmlFor=\{passwordId\}/);
  assert.match(source, /autoComplete="username"/);
  assert.match(source, /autoComplete="current-password"/);
  assert.match(source, /Показать пароль/);
  assert.match(source, /onSubmit=\{submit\}/);
  assert.match(screen, /Hungary<span[^>]*>Learn<\/span>/);
});

test('admin logout has no legacy endpoint and clears the authorized snapshot', () => {
  const store = readFileSync(new URL('../src/utils/adminStore.ts', import.meta.url), 'utf8');
  const layout = readFileSync(new URL('../src/layouts/AdminLayout.tsx', import.meta.url), 'utf8');
  assert.match(store, /await signOut\(getFirebaseAuth\(\)\)/);
  assert.match(store, /status: 'anonymous'/);
  assert.doesNotMatch(layout, /sendBeacon|admin\/logout|ADMIN_TIMEOUT|admin@/);
});

test('paid lesson error UI separates auth, paywall, unavailable and retry states', () => {
  const source = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
  assert.match(source, /status === 401[\s\S]*Сессия истекла/);
  assert.match(source, /status === 403[\s\S]*Нужна подписка/);
  assert.match(source, /status === 404[\s\S]*Урок недоступен/);
  assert.match(source, /Повторить/);
  assert.match(source, /Войти \/ Зарегистрироваться/);
});

test('learner-facing UI contains no trial offer', () => {
  const landing = readFileSync(new URL('../src/pages/LandingPage.tsx', import.meta.url), 'utf8');
  const account = readFileSync(new URL('../src/components/UserAuthModal.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(`${landing}\n${account}`, /trial|пробн/i);
  assert.match(landing, /Уроки 1–2 бесплатно/);
});
