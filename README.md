# HungaryLearn

Интерактивный курс венгерского языка A0–B1: 28 уроков, recorded audio, quizzes, SRS, listening, writing, speaking и role play.

## Production architecture

- React 19 + Vite on Firebase Hosting.
- Firebase Authentication (Email/Password).
- Cloud Firestore for profiles, progress/SRS, entitlements and admin overrides.
- one HTTPS Cloud Function (`europe-west1`, min instances 0) for trusted API work.
- Lemon Squeezy checkout, subscription portal and signed webhooks.
- Canonical course MP3 files are served directly from `public/audio`; Firebase Storage is private and used only for rare admin overrides.

L1–L2 are local and free. L3–L28 stay outside the browser bundle and are returned only by `/api/lessons/:lessonNumber` after Firebase token and server-owned entitlement checks. There is no trial access.

## Local validation

```powershell
npm install
npm test
npm run validate:lessons
npm run validate:listening
npm run build
npm run functions:typecheck
npm run functions:build
npm run lint
npm run audit:legacy
```

Use `npm run emulators` for the integrated Hosting/Auth/Firestore/Functions/Storage emulators. `npm run dev` is a frontend-only Vite server and proxies API requests to the Hosting emulator on port 5000.

## Setup and deployment

The complete Firebase/Lemon Squeezy setup, rollback, console clicks and production checklist are in [docs/FIREBASE_LEMONSQUEEZY_SETUP.md](docs/FIREBASE_LEMONSQUEEZY_SETUP.md).

Never commit `.env`, service-account JSON, Lemon API keys or webhook secrets. Firebase web configuration is public by design; server secrets must be stored with Firebase Secret Manager.

## Content editing

Lesson source remains under `src/data/lessons/`. Run `npm run validate:lessons` and the full validation suite after content changes. Do not add browser TTS fallbacks: all learner-facing audio must resolve to a recorded physical file or a validated admin override.
