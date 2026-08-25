# HungaryLearn

Интерактивный курс венгерского языка (A0 → B1): 28 уроков, аудио, тренажёры слов и перевода, spaced repetition, подписка через Stripe.

## Architecture

- **Frontend:** React 19 + Vite + React Router
- **Backend:** Express (`server.ts`) — сессии студентов и админа, прогресс, Stripe webhook, admin audio overrides
- **Data:** уроки в `src/data/lessons/`, постоянные данные в PostgreSQL

## Environment variables

Скопируйте `.env.example` в `.env` и заполните:

| Variable | Purpose |
|---|---|
| `NODE_ENV` | В production должно быть `production` (статический `dist` и secure cookies) |
| `APP_URL` | Публичный HTTPS URL приложения (обязателен в production для Stripe redirect) |
| `DATABASE_URL` | Server-side PostgreSQL connection string (обязателен всегда) |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD_HASH` | Вход в админ-панель (`ADMIN_PASSWORD_HASH` обязателен в production) |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` | Обязательны для production-платежей и проверки webhook |
| `STRIPE_PRICE_ID` | Опциональный dashboard Price; без него сервер использует встроенный recurring price `$9.99 USD` |
| `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_AUDIO_BUCKET` | Обязательны для admin audio overrides; только server-side |
| `VITE_AUDIO_BASE_URL` | Базовый URL для аудио в облаке (опционально) |

## Development

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

Первые два урока доступны без регистрации на `/lessons`.

## Scripts

```bash
npm test              # unit tests
npm run lint          # TypeScript + ESLint
npm run build         # Vite client + server bundle
npm run dev           # dev server with HMR
npm run validate:lessons  # проверка метаданных уроков
npm run generate:manifest # пересборка audio manifest
```

## Production build

```bash
npm run build
npm start
```

## Production deployment

1. Создайте PostgreSQL/Supabase database и примените по порядку SQL из `supabase/migrations/`. Перед unique-index проверьте, что нет дубликатов `lower(email)`.
2. Задайте server-side variables из `.env.example`: как минимум `NODE_ENV=production`, `DATABASE_URL`, `APP_URL` и `ADMIN_PASSWORD_HASH`. Для платежей обязательны `STRIPE_SECRET_KEY` и `STRIPE_WEBHOOK_SECRET`; задайте `STRIPE_PRICE_ID`, если должен использоваться Price из Stripe Dashboard. Для admin audio overrides нужны server-side `SUPABASE_*`.
3. Выполните `npm install`, затем `npm run build`; разверните весь `dist/` вместе с Express server bundle и запустите `npm start`.
4. Оставьте аудио в `public/audio/` для same-origin deployment либо заранее загрузите его командой `npm run audio:migrate` и задайте публичный `VITE_AUDIO_BASE_URL` **до** build.
5. Настройте Stripe webhook на `POST <APP_URL>/api/webhook/stripe` и включите события из раздела ниже.
6. Проверьте `/api/health`, регистрацию/вход, сохранение прогресса, оплату, admin users и загрузку narration/Listening MP3.

Frontend и API рассчитаны на один origin. Отдельный static-only frontend без Express API не является поддерживаемой production-схемой.

## Stripe setup

1. Создайте Product + Price в Stripe Dashboard
2. Укажите `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`
3. Webhook endpoint: `POST /api/webhook/stripe`
4. События: `checkout.session.completed`, `invoice.payment_succeeded`, `invoice.payment_failed`, `customer.subscription.deleted`

## Admin auth

- В production используйте только `ADMIN_PASSWORD_HASH` (bcrypt)
- Админ-панель: `/admin`

## Audio

- **Local:** файлы в `public/audio/` (см. `public/audio/README.txt`)
- **Cloud:** задайте `VITE_AUDIO_BASE_URL` для CDN/GCS

## Database

- PostgreSQL обязателен; filesystem fallback отсутствует.
- Canonical schema: `supabase/migrations/20260822134454_app_users_email_unique.sql`.
- `DATABASE_URL` хранится только на сервере. Миграция включает таблицы пользователей, сессий, прогресса/SRS, Stripe idempotency и admin overrides; browser-доступ к ним закрыт RLS.

## Security checklist

- [ ] `ADMIN_PASSWORD_HASH` задан в production
- [ ] `.env` не включён в архив/репозиторий
- [ ] `APP_URL` указывает на реальный домен
- [ ] migration применена, `/api/health` возвращает connected
- [ ] Stripe webhook secret настроен

## Content editing

Уроки: `src/data/lessons/lessonN.ts`. После изменений запустите `npm run validate:lessons`.
