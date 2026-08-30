# Firebase + Lemon Squeezy setup

## Architecture

HungaryLearn uses Firebase as its only backend and data platform:

- Firebase Hosting serves the Vite SPA, images and canonical MP3 files.
- Firebase Authentication owns Email/Password accounts and sessions.
- Cloud Firestore stores profiles, entitlements, progress/SRS, billing state and override metadata.
- one HTTPS Cloud Function handles authenticated API, paid lessons, billing, admin and audio overrides.
- Cloud Storage is private and contains only rare admin audio overrides.
- Lemon Squeezy is the only commercial subscription provider.

Hosting rewrites `/api/**` to the `api` Function before the SPA fallback. L1–L2 are free client content. L3–L28 exist only in the server build and are returned after Firebase token verification and the canonical server-side entitlement check.

Static course audio stays in `public/audio`, is copied to `dist/audio` by the frontend build, and is served by Hosting as `/audio/*.mp3`. Do not upload this canonical audio tree to Cloud Storage.

## Firestore model and security

- `users/{uid}` — e-mail, display name and trusted timestamps.
- `entitlements/{uid}` — status, access expiry, privilege and Lemon metadata.
- `progress/{uid}` — viewed slides, passed quizzes, SRS cards and notes.
- `billingSubscriptions/{subscriptionId}` — normalized and raw commercial state.
- `billingWebhookEvents/{sha256(rawBody)}` — transactional replay protection.
- `wordOverrides/{hash}` and `audioOverrides/{hash}` — admin-owned override metadata.

The first authenticated `/api/auth/me` request transactionally creates the user profile and a default entitlement with `subscriptionStatus: unpaid`, `isPrivileged: false`, `provider: null` and `accessUntil: null`. There is no trial.

Firestore rules allow a learner to read only their own profile and entitlement, and read/write only their own validated progress. Clients cannot write billing, entitlement, privilege, admin or override data. Admin endpoints require the custom claim `admin: true`. Storage rules deny all direct client access; Functions use the Admin SDK.

## Create the Firebase project

1. Firebase Console → **Add project** and create the real production project.
2. Project overview → **Upgrade** → choose the Blaze plan. Cloud Functions deployment requires billing.
3. Google Cloud Console → Billing → **Budgets & alerts** → create a budget and notification thresholds.
4. Build → Authentication → **Get started** → Sign-in method → **Email/Password** → Enable.
5. Build → Firestore Database → **Create database** → Production mode → choose an appropriate European location.
6. Build → Storage → **Get started**. Keep the committed deny-all client rules.
7. Project settings → General → Your apps → **Web** → Register app. Copy its public web configuration into an uncommitted `.env.local` using `.env.example`.
8. Copy `.firebaserc.example` to `.firebaserc` and replace the placeholder project ID.

Required public values:

```text
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

## Configure Functions and secrets

```powershell
firebase login
firebase use YOUR_FIREBASE_PROJECT_ID
firebase functions:secrets:set LEMONSQUEEZY_API_KEY
firebase functions:secrets:set LEMONSQUEEZY_WEBHOOK_SECRET
```

The first Functions deployment prompts for non-secret parameters:

- `APP_URL` — the final HTTPS origin without a trailing slash.
- `LEMONSQUEEZY_STORE_ID` — the real store ID.
- `LEMONSQUEEZY_VARIANT_ID` — the real monthly variant ID.
- `LEMONSQUEEZY_TEST_MODE` — `true` during test mode; switch to `false` only together with live IDs and secrets.

Never add API keys, signing secrets or service-account JSON to a `VITE_*` variable or commit them.

## Configure Lemon Squeezy

1. Enable **Test Mode**.
2. Create a monthly subscription product/variant priced at **44 500 HUF**, with no trial.
3. Record its Store ID and Variant ID.
4. Settings → API → create an API key.
5. Settings → Webhooks → add `https://YOUR_DOMAIN/api/webhooks/lemonsqueezy` and record its signing secret.
6. Subscribe to `subscription_created`, `subscription_updated`, `subscription_cancelled`, `subscription_resumed`, `subscription_expired`, `subscription_paused`, `subscription_unpaused`, `subscription_payment_success`, `subscription_payment_failed`, `subscription_payment_recovered` and `order_refunded`.

Checkout is created only by the authenticated Function. The Function derives UID and e-mail from the verified Firebase token and places that UID in Lemon custom data. The return query `?payment=success` displays a pending message only. Access changes exclusively after a valid signed webhook.

Webhook verification uses the exact raw request bytes, HMAC-SHA256, a length check and `timingSafeEqual`. Store and variant must match configuration. A deterministic Firestore marker makes duplicate delivery idempotent. `on_trial` normalizes to unpaid. Cancellation retains access only until Lemon `ends_at`.

## Admin

Create the Firebase account first, then grant its custom claim locally:

```powershell
$env:GOOGLE_APPLICATION_CREDENTIALS = "C:\secure\firebase-admin-service-account.json"
npm run firebase:set-admin -- --email="REAL_ADMIN_EMAIL"
```

Point the environment variable to a service-account JSON stored outside the repository, or authenticate Application Default Credentials with Google Cloud CLI. The account must sign in again because existing refresh tokens are revoked. Use `--revoke` to remove the claim.

## Local validation

Firestore Emulator requires Java. On Windows install Microsoft OpenJDK 21, open a new PowerShell window and verify it:

```powershell
winget install --exact --id Microsoft.OpenJDK.21 --accept-package-agreements --accept-source-agreements
java -version
```

Then run:

```powershell
npm ci
npm ci --prefix functions
npm test
npm run test:rules
npm run validate:lessons
npm run validate:listening
npm run validate:vocabulary
npm run lint
npm run build
npm run functions:typecheck
npm run functions:build
npm run audit:legacy
git diff --check
```

Use `npm run emulators` for interactive Auth/Firestore/Functions/Storage/Hosting smoke tests. Register a fresh user and confirm that `/api/auth/me` creates both Firestore documents. Verify L1–L2 anonymously, L3 as anonymous/unpaid/active/privileged, progress and SRS persistence, admin claim enforcement, and audio overrides.

## Test Mode and production launch

Before live payments verify: new subscription, renewal/update, cancellation, resume, payment failure/recovery, expiration and refund. Confirm invalid signatures, replays, wrong store and wrong variant cannot change entitlement. Test records remain marked `testMode: true`.

For live launch create/select the live Lemon variant and webhook, update the four Lemon values as one change, set `LEMONSQUEEZY_TEST_MODE=false`, and deploy Functions. Never mix test credentials or IDs with live configuration.

Deploy in reviewable stages:

```powershell
firebase deploy --only firestore
firebase deploy --only storage
firebase deploy --only functions
firebase deploy --only hosting
```

After each stage, inspect Firebase logs and perform the corresponding smoke test. A final `firebase deploy` is optional only after all stages are known-good.

## Custom domain and DNS

Firebase Console → Hosting → **Add custom domain**. Enter the final domain, publish the exact TXT ownership record Firebase displays, then publish the exact A/AAAA records it displays. Wait for verification and Firebase-managed TLS. Set `APP_URL` to that HTTPS origin, update the Lemon webhook URL and redeploy Functions.

## Rollback

Keep a local source archive and the last known-good build before first deployment. If a code release fails, roll Hosting back to the previous release in Firebase Console, redeploy the last known-good Functions source, and temporarily disable the Lemon webhook while investigating. Do not delete Firestore billing or entitlement records. Restore webhook delivery only after signature, idempotency and access smoke tests pass again.
