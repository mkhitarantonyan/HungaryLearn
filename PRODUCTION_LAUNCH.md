# Magyaro production launch — Firebase + Lemon Squeezy

This repository uses separate Cloud Functions for the core application and billing. `api` serves Auth/Admin/Lessons/Progress/Audio without Lemon secrets; `billing` serves Lemon checkout, Customer Portal, and webhook routes and is the only Function bound to Lemon secrets.

## 0. Security first

- Never commit or upload `firebase-adminsdk*.json`, service-account JSON, `.secret.local`, `.env.local`, `.env.hungarylearn`, private keys, Lemon API keys, or webhook signing secrets.
- The browser `VITE_FIREBASE_*` values are Firebase Web SDK identifiers and belong in the client build; the Firebase Admin service-account JSON does not.
- Production Cloud Functions use Application Default Credentials automatically. `GOOGLE_APPLICATION_CREDENTIALS` is only for local development/admin scripts and must not be deployed.

## 1. Prerequisites

- Firebase project: `hungarylearn`
- Billing plan: Blaze
- Firebase CLI logged into the Google account that owns the project
For the core/admin deploy, only Firebase/Blaze access is required. Before deploying the separate `billing` Function, additionally prepare:

- Three live Lemon Squeezy subscription variants (required to enable checkout; empty IDs keep checkout closed)
- A live Lemon Squeezy API key
- The existing production webhook signing secret (keep it in Firebase Secret Manager)

From the repository root:

```powershell
firebase login
firebase use hungarylearn
```

## 2. Firebase Web client configuration

Keep the existing working Firebase Web SDK values in the root Vite env file used for the production build. Required names:

```text
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_USE_FIREBASE_EMULATORS=false
```

For production, `VITE_USE_FIREBASE_EMULATORS` must not be `true`.

### Firebase Storage prerequisite

The admin audio-override API uses the Admin SDK default Storage bucket (`storage.bucket()`). If Firebase Storage has not yet been initialized for this project, create the default bucket in **Firebase Console → Storage → Get started** before deploying `storage.rules`. Client Storage access remains denied by `storage.rules`; the trusted Function uses the Admin SDK.

## 3. Lemon Squeezy live configuration

Create the three live variants before enabling purchases. Both Functions can build/deploy with empty new Variant IDs; the corresponding checkout returns 503 until configured. Keep the existing store and Secret Manager secrets. Record:

- Live Store ID
- Monthly, Quarterly and Yearly Live Variant IDs
- Live API key

Use Live Variant IDs only in production and Test Variant IDs only in the test environment.

The frontend price source is `src/config/pricing.ts`: Monthly **8 990 Ft / 1 month**, Quarterly **22 990 Ft / 3 months**, Yearly **64 990 Ft / 1 year**. All variants grant the same Premium features. Match each full-period amount and renewal interval in Lemon, with no trial.

### Secrets

Run these from the repository root. The CLI will prompt for each value; do not paste values into source files.

```powershell
firebase functions:secrets:set LEMONSQUEEZY_API_KEY
firebase functions:secrets:set LEMONSQUEEZY_WEBHOOK_SECRET
```

Keep the existing working Live API key and webhook signing secret in Firebase Secret Manager. This pricing migration does not rotate secrets.

### Non-secret parameters

`LEMONSQUEEZY_STORE_ID`, the three `LEMONSQUEEZY_VARIANT_ID_*` parameters below, `APP_URL`, and `LEMONSQUEEZY_TEST_MODE` are Firebase parameterized configuration. They have production-safe defaults so the core/admin `api` Function can deploy without Lemon configuration: empty Store/Variant values make billing fail closed, `APP_URL` defaults to the Firebase Hosting URL, and Test mode defaults to `false`. The approved LIVE IDs are configured in the production workflow and local ignored `functions/.env.hungarylearn`; no fallback checkout is available.

Enter:

```text
LEMONSQUEEZY_STORE_ID=<LIVE store id>
LEMONSQUEEZY_VARIANT_ID_MONTHLY=2100676
LEMONSQUEEZY_VARIANT_ID_QUARTERLY=2097546
LEMONSQUEEZY_VARIANT_ID_YEARLY=2100672
APP_URL=https://hungarylearn.web.app
LEMONSQUEEZY_TEST_MODE=false
```

For the first smoke test, `https://hungarylearn.web.app` is a valid APP_URL. After a custom Magyaro domain is attached, change APP_URL to the canonical HTTPS domain and redeploy Functions.

## 4. Build and validate before deployment

```powershell
npm test
npm run test:rules
npm run lint
npm run functions:typecheck
npm run build
npm run functions:build
```

Do not deploy if any required check fails.

## 5. Production deploy

The core/admin backend can be deployed before Lemon activation:

```powershell
firebase deploy --only functions:api
```

After Live Lemon secrets and parameters are configured, deploy the complete stack:

```powershell
firebase deploy --only firestore:rules,firestore:indexes,storage,functions,hosting
```

After deployment verify:

```text
https://hungarylearn.web.app/
https://hungarylearn.web.app/api/health
```

`/api/health` must return HTTP 200.

## 6. Create the LIVE Lemon Squeezy webhook

In Lemon Squeezy Live mode go to **Settings → Webhooks → Create webhook**.

Callback URL:

```text
https://hungarylearn.web.app/api/webhooks/lemonsqueezy
```

Signing secret: use exactly the same production secret entered into Firebase Secret Manager.

Enable these events:

```text
subscription_created
subscription_updated
subscription_cancelled
subscription_resumed
subscription_expired
subscription_paused
subscription_unpaused
subscription_payment_success
subscription_payment_failed
subscription_payment_recovered
subscription_payment_refunded
order_refunded
```

Do not point a Test-mode webhook at production. Test and Live webhooks are separate in Lemon Squeezy.

## 7. Firebase Authentication production domain

Firebase Console → Authentication → Settings → Authorized domains.

Before using a custom domain, the Firebase-provided domains are already part of the project. When the Magyaro custom domain is attached, add that domain here as well.

## 8. End-to-end smoke test

Use a new non-admin user on the deployed site.

1. Register.
2. Confirm `/api/auth/me` returns 200 after login.
3. Confirm lessons 1–2 are accessible and paid lessons remain locked.
4. Check all three plans: verify the exact price, renewal interval and **Live** mode. With an empty ID, expect 503 and no redirect.
5. Complete one real low-risk production payment only when the product/price is final.
6. In Lemon Squeezy Webhooks, verify a successful delivery to the production callback URL.
7. In Firestore verify `entitlements/{uid}` contains the Lemon provider data and a paid status.
8. Refresh/re-login and verify `/api/auth/me` reports `paidAccess: true`.
9. Verify the customer portal opens.
10. Test cancellation/grace-period behavior before public launch.

For refunds, the backend ignores partial refunds for access control and revokes paid access on full refunds. Full renewal-invoice refunds are handled separately from initial order refunds.

### Access policy that is intentionally unchanged

The current server policy grants paid lesson access only for `active` subscriptions and `cancelled` subscriptions whose `accessUntil` is still in the future. `past_due` and `paused` currently do **not** grant paid access. This is stricter than a typical dunning grace-period policy; change it only as an explicit product decision, not as part of deployment.

## 9. Custom domain / Magyaro brand

After the default Firebase-hosted smoke test passes:

1. Attach the final Magyaro domain in Firebase Hosting.
2. Wait for SSL provisioning.
3. Add the custom domain to Firebase Authentication Authorized domains.
4. Change `APP_URL` to the final HTTPS domain.
5. Update Lemon Squeezy product/store branding and checkout copy to Magyaro.
6. Update the webhook callback URL to the canonical custom-domain URL if desired (the Firebase default URL may also remain as the webhook endpoint).
7. Redeploy Functions after changing APP_URL.

## 10. Local development remains test-only

Keep local Lemon values in `functions/.env.local` and local secrets in `functions/.secret.local` (both gitignored). Local configuration should use `LEMONSQUEEZY_TEST_MODE=true` and Test-mode Store/Variant IDs.

Do not copy production secrets into local files unless you intentionally need a controlled production diagnostic.

## Pricing migration / GitHub Actions

The merge workflow writes the approved non-secret LIVE parameters directly to `functions/.env.hungarylearn`: Store 461197, monthly 2100676, quarterly 2097546, yearly 2100672, TEST_MODE=false. It does not depend on repository Actions variables for these IDs. API key and webhook secret remain Firebase Secret Manager secrets.

The old `LEMONSQUEEZY_VARIANT_ID` parameter is retained only for Customer Portal compatibility, never as a checkout fallback. The webhook accepts only the three configured plan IDs. The approved quarterly ID 2097546 is also the previous numeric ID, so events with this ID are now allowlisted; it must not be rejected merely because it existed before migration. Unknown IDs remain ignored. The Store ID and Firebase project are unchanged.

The browser sends only `{ plan: 'monthly' | 'quarterly' | 'yearly' }`. Invalid bodies, extra fields and client `variantId` return 400; a missing/malformed selected Variant ID returns 503 without contacting Lemon. Webhooks accept only configured new IDs, the configured store and exact test/live mode. Signature, UID binding, deduplication and refund rules remain in place.
