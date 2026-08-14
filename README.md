# HungaryLearn

Интерактивный курс венгерского языка (A0 → B1): 28 уроков, аудио, тренажёры слов и перевода, spaced repetition, подписка через Stripe.

## Architecture

- **Frontend:** React 19 + Vite + React Router
- **Backend:** Express (`server.ts`) — сессии студентов и админа, прогресс, Stripe webhook, admin audio overrides
- **Data:** уроки в `src/data/lessons/`, локальная БД в `data/db.json` (не коммитится)

## Environment variables

Скопируйте `.env.example` в `.env` и заполните:

| Variable | Purpose |
|---|---|
| `APP_URL` | Публичный URL приложения (обязателен в production для Stripe redirect) |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD_HASH` | Вход в админ-панель (`ADMIN_PASSWORD_HASH` обязателен в production) |
| `STRIPE_SECRET_KEY` / `STRIPE_WEBHOOK_SECRET` / `STRIPE_PRICE_ID` | Платежи |
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

- Файл: `data/db.json` (создаётся автоматически)
- Backup: `data/db.json.bak`
- Сброс локальной БД: удалите `data/db.json` и перезапустите сервер

## Security checklist

- [ ] `ADMIN_PASSWORD_HASH` задан в production
- [ ] `.env` не включён в архив/репозиторий
- [ ] `APP_URL` указывает на реальный домен
- [ ] Stripe webhook secret настроен

## Content editing

Уроки: `src/data/lessons/lessonN.ts`. После изменений запустите `npm run validate:lessons`.
