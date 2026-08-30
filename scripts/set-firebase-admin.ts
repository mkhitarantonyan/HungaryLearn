import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

const email = process.argv.find((value) => value.startsWith('--email='))?.slice('--email='.length).trim().toLowerCase();
const revoke = process.argv.includes('--revoke');
if (!email) throw new Error('Usage: npm run firebase:set-admin -- --email=admin@example.com [--revoke]');
if (getApps().length === 0) {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  initializeApp(raw ? { credential: cert(JSON.parse(raw)) } : undefined);
}
const auth = getAuth();
const user = await auth.getUserByEmail(email);
const claims = { ...(user.customClaims || {}) };
if (revoke) delete claims.admin;
else claims.admin = true;
await auth.setCustomUserClaims(user.uid, claims);
await auth.revokeRefreshTokens(user.uid);
console.log(`${revoke ? 'Removed' : 'Granted'} admin claim for ${email}. The user must sign in again.`);
