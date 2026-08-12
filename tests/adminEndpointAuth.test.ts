import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidAdminSession, isValidUserSession } from '../src/utils/adminSessions.ts';

test('unknown token is not a valid admin session', () => {
  const sessions = new Map();
  assert.equal(isValidAdminSession('nonexistent-token', sessions), false);
});

test('expired session is rejected', () => {
  const sessions = new Map([
    ['expired-token', { token: 'expired-token', createdAt: Date.now() - 10000, expiresAt: Date.now() - 1000 }],
  ]);
  assert.equal(isValidAdminSession('expired-token', sessions), false);
});

test('valid session is accepted', () => {
  const future = Date.now() + 10000;
  const sessions = new Map([
    ['valid-token', { token: 'valid-token', createdAt: Date.now(), expiresAt: future }],
  ]);
  assert.equal(isValidAdminSession('valid-token', sessions), true);
});

test('undefined token is rejected', () => {
  const sessions = new Map();
  assert.equal(isValidAdminSession(undefined, sessions), false);
});

test('empty string token is rejected', () => {
  const sessions = new Map();
  assert.equal(isValidAdminSession('', sessions), false);
});

test('user session validation works similarly', () => {
  const future = Date.now() + 10000;
  const sessions = new Map([
    ['user-token', { token: 'user-token', userId: 'user123', createdAt: Date.now(), expiresAt: future }],
  ]);
  assert.equal(isValidUserSession('user-token', sessions), true);
});

test('expired user session is rejected', () => {
  const sessions = new Map([
    ['expired-user', { token: 'expired-user', userId: 'user123', createdAt: Date.now() - 10000, expiresAt: Date.now() - 1000 }],
  ]);
  assert.equal(isValidUserSession('expired-user', sessions), false);
});