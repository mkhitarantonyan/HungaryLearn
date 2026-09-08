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

## Local development

Prerequisites: Node.js 22 and Java 21 or newer. The local `demo-hungarylearn` project does not require `firebase login`.

```powershell
npm ci
npm run dev:full
```

Open `http://127.0.0.1:5173`. This starts Vite with HMR plus the Firebase Auth, Functions, Firestore, Hosting, and Storage emulators. The Emulator UI is available at `http://127.0.0.1:4000`, and `http://127.0.0.1:5173/api/health` verifies the complete Vite → Hosting Emulator → local `api` Function path.

The command uses the isolated `demo-hungarylearn` project, forces the Firebase client and Admin SDK to use local emulators, clears `GOOGLE_APPLICATION_CREDENTIALS` for its child processes, and does not start the billing Function. Firebase demo projects have no live resources, so production Firebase data and Lemon Squeezy cannot be reached. Press `Ctrl+C` once to stop Vite and every emulator. Fixed ports are listed at startup; if one is occupied, the command exits with a clear error instead of choosing another port.

`dev:full` supplies safe local Firebase Web SDK placeholders, so `.env.local`, Admin credentials, and billing secrets are not required. `.env.example` remains the template for production builds and production-like preview commands.

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

`npm run dev` remains a frontend-only Vite server and requires an explicitly enabled emulator environment. Use `npm run dev:full` for the complete local stack.
`npm run site` remains a separate production-like Hosting/Functions mode and may require `GOOGLE_APPLICATION_CREDENTIALS`; it is not needed for normal development.

## Setup and deployment

The complete Firebase/Lemon Squeezy setup, rollback, console clicks and production checklist are in [docs/FIREBASE_LEMONSQUEEZY_SETUP.md](docs/FIREBASE_LEMONSQUEEZY_SETUP.md).

Never commit `.env`, service-account JSON, Lemon API keys or webhook secrets. Firebase web configuration is public by design; server secrets must be stored with Firebase Secret Manager.

## Content editing

Lesson source remains under `src/data/lessons/`. Run `npm run validate:lessons` and the full validation suite after content changes. Do not add browser TTS fallbacks: all learner-facing audio must resolve to a recorded physical file or a validated admin override.
