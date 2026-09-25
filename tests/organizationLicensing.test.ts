import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  addCalendarMonthsToDateString,
  effectiveLicenseStatus,
  generateOrganizationKey,
  hashOrganizationKey,
  licenseGrantsAccess,
  normalizeOrganizationKey,
  parseLicenseCreate,
  parseOrganizationCreate,
  parseSeatCount,
} from '../src/server/organizationLicensing.ts';
import { evaluateAccessSources } from '../functions/src/domain/entitlements.ts';

test('organization payload is allowlisted and validates the required name', () => {
  assert.throws(() => parseOrganizationCreate({ name: ' ' }), /обязательное поле/);
  const parsed = parseOrganizationCreate({
    name: '  Test   Organization  ',
    contactEmail: 'Owner@Example.com',
    arbitraryAdmin: true,
  });
  assert.equal(parsed.name, 'Test   Organization');
  assert.equal(parsed.normalizedName, 'test organization');
  assert.equal(parsed.contactEmail, 'owner@example.com');
  assert.equal('arbitraryAdmin' in parsed, false);
  assert.throws(() => parseSeatCount({ seatsTotal: 0 }), /от 1/);
  assert.throws(() => parseSeatCount({ seatsTotal: 10_001 }), /10000/);
});

test('calendar month arithmetic is deterministic in UTC', () => {
  assert.equal(addCalendarMonthsToDateString('2026-09-08', 3), '2026-12-08');
  assert.equal(addCalendarMonthsToDateString('2026-01-31', 1), '2026-02-28');
  assert.equal(addCalendarMonthsToDateString('2024-01-31', 1), '2024-02-29');
  assert.equal(addCalendarMonthsToDateString('2024-02-29', 12), '2025-02-28');
});

test('license parser calculates three calendar months and keeps custom expiry explicit', () => {
  const parsed = parseLicenseCreate({
    displayName: 'Autumn 2026', seatsTotal: 10, startsAt: '2026-09-08', durationMonths: 3,
  }, new Date('2026-09-08T00:00:00.000Z'));
  assert.equal(parsed.startsAt.toISOString(), '2026-09-08T00:00:00.000Z');
  assert.equal(parsed.expiresAt.toISOString(), '2026-12-08T00:00:00.000Z');
  assert.equal(parsed.status, 'active');
  const custom = parseLicenseCreate({
    displayName: 'Custom', seatsTotal: 2, startsAt: '2026-09-08', durationMonths: 'custom', expiresAt: '2026-10-01',
  });
  assert.equal(custom.durationMonths, null);
  assert.equal(custom.expiresAt.toISOString(), '2026-10-01T00:00:00.000Z');
});

test('license access uses inclusive start and exclusive expiry', () => {
  const start = new Date('2026-09-08T00:00:00.000Z');
  const expiry = new Date('2026-12-08T00:00:00.000Z');
  assert.equal(effectiveLicenseStatus('scheduled', start, expiry, new Date('2026-09-07T23:59:59.999Z')), 'scheduled');
  assert.equal(effectiveLicenseStatus('scheduled', start, expiry, start), 'active');
  assert.equal(licenseGrantsAccess('active', 'active', start, expiry, new Date('2026-10-01T00:00:00.000Z')), true);
  assert.equal(licenseGrantsAccess('active', 'active', start, expiry, expiry), false);
  assert.equal(effectiveLicenseStatus('active', start, expiry, expiry), 'expired');
  assert.equal(licenseGrantsAccess('active', 'paused', start, expiry, new Date('2026-10-01T00:00:00.000Z')), false);
  assert.equal(licenseGrantsAccess('active', 'cancelled', start, expiry, new Date('2026-10-01T00:00:00.000Z')), false);
  assert.equal(licenseGrantsAccess('inactive', 'active', start, expiry, new Date('2026-10-01T00:00:00.000Z')), false);
});

test('organization keys are high-entropy, readable, case-insensitive and hashed', () => {
  const keys = Array.from({ length: 500 }, generateOrganizationKey);
  assert.equal(new Set(keys.map(item => item.plaintext)).size, keys.length);
  for (const item of keys) {
    assert.match(item.plaintext, /^MG-[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{4}(?:-[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{4}){3}$/);
    assert.equal(normalizeOrganizationKey(item.plaintext.toLowerCase()), item.normalized);
    assert.equal(item.hash, hashOrganizationKey(item.normalized));
    assert.doesNotMatch(item.plaintext, /[01OIL]/);
  }
  assert.equal(normalizeOrganizationKey('invalid'), null);
});

test('Lemon, organization and privileged access coexist without overwriting each other', () => {
  const now = new Date('2026-09-08T00:00:00.000Z');
  const lemon = { provider: 'lemonsqueezy' as const, subscriptionStatus: 'active' as const, accessUntil: '2026-10-08T00:00:00.000Z', testMode: false };
  assert.deepEqual(evaluateAccessSources(lemon, true, now, false), { privileged: false, lemon: true, organization: true, paidAccess: true });
  assert.equal(evaluateAccessSources(lemon, false, now, false).paidAccess, true);
  assert.equal(evaluateAccessSources({ subscriptionStatus: 'expired', isPrivileged: false }, true, now, false).paidAccess, true);
  assert.equal(evaluateAccessSources({ subscriptionStatus: 'expired', isPrivileged: true }, false, now, false).paidAccess, true);
  assert.equal(evaluateAccessSources({ subscriptionStatus: 'expired' }, false, now, false).paidAccess, false);
});

test('organization routes enforce server authorization and transactional security boundaries', () => {
  const routes = readFileSync(new URL('../functions/src/organizations/routes.ts', import.meta.url), 'utf8');
  const service = readFileSync(new URL('../functions/src/organizations/service.ts', import.meta.url), 'utf8');
  const domain = readFileSync(new URL('../src/server/organizationLicensing.ts', import.meta.url), 'utf8');
  const authRoutes = readFileSync(new URL('../functions/src/auth/routes.ts', import.meta.url), 'utf8');
  const lessonRoutes = readFileSync(new URL('../functions/src/lessons/routes.ts', import.meta.url), 'utf8');
  assert.match(routes, /use\('\/api\/admin', requireAuth, requireAdmin\)/);
  assert.match(routes, /redeem-organization-key', requireAuth/);
  assert.match(domain, /randomBytes\(1\)/);
  assert.match(service, /runTransaction/);
  assert.match(service, /where\('licenseId', '==', input\.licenseId\)/);
  assert.match(service, /activeSeatSnapshot\.size >= Number\(licenseData\.seatsTotal\)/);
  assert.match(service, /bumpLicenseCapacity\(transaction, licenseRef\)/);
  assert.match(service, /seatGuards\(\)\.doc\(userSeatGuardId\(input\.uid\)\)/);
  assert.match(service, /data\.status !== 'available'/);
  assert.match(service, /status: 'redeemed'/);
  assert.match(service, /keyHash: item\.hash/);
  assert.doesNotMatch(service, /transaction\.create\([^)]*,\s*\{[^}]*plaintext/s);
  assert.match(service, /Invalid or unavailable organization access code\./);
  assert.match(authRoutes, /evaluateAccessSources/);
  assert.match(lessonRoutes, /evaluateAccessSources/);
});

test('account deletion releases organization seats without reactivating redeemed keys', () => {
  const source = readFileSync(new URL('../functions/src/auth/accountDeletion.ts', import.meta.url), 'utf8');
  assert.match(source, /organizationSeats/);
  assert.match(source, /status: document\.data\(\)\.status === 'active' \? 'released'/);
  assert.match(source, /redeemedByUid: FieldValue\.delete\(\)/);
  assert.doesNotMatch(source, /status:\s*'available'/);
});
