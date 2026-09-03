import { applicationDefault, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const email = process.argv[2]?.trim();
const remove = process.argv.includes('--remove');

if (!email || !email.includes('@')) {
  console.error('Usage: npm run firebase:set-admin -- user@example.com [--remove]');
  process.exit(2);
}

if (getApps().length === 0) initializeApp({ credential: applicationDefault() });

const auth = getAuth();
const user = await auth.getUserByEmail(email);
const existingClaims = user.customClaims || {};
const nextClaims = { ...existingClaims } as Record<string, unknown>;

if (remove) delete nextClaims.admin;
else nextClaims.admin = true;

await auth.setCustomUserClaims(user.uid, nextClaims);
console.log(`${remove ? 'Removed' : 'Granted'} Firebase admin claim for ${email} (${user.uid}).`);
console.log('The user must refresh their ID token (sign out/in is the simplest way) before the claim appears in the browser.');
