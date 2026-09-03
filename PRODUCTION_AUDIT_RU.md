# Magyaro — аудит готовности к production

Дата аудита: 2026-09-02

## Итог

Архитектуру Firebase + Lemon Squeezy переделывать не нужно. Она уже построена правильно: Firebase Authentication выдаёт ID token, `/api/*` проверяет Bearer token через Firebase Admin, Firestore хранит серверный entitlement, а Lemon Squeezy webhook является источником истины для платного доступа.

Blaze уже включён. Основной остаток — Live-конфигурация Lemon Squeezy, production secrets/params, первый Firebase deploy и end-to-end smoke test.

## Что было усилено в коде этим аудитом

1. Test и Live Lemon Squeezy теперь жёстко разделены при выдаче доступа. Старый Test-mode entitlement не сможет открыть платные уроки в Live.
2. `LEMONSQUEEZY_TEST_MODE` больше не имеет опасного молчаливого default=true: среда должна быть указана явно.
3. Проверяется production `APP_URL`: в Live разрешён только HTTPS.
4. Проверяется наличие Lemon API key и валидность Store/Variant ID.
5. Повторный checkout блокируется, если у пользователя уже есть управляемая подписка в той же Lemon-среде.
6. Customer Portal нельзя открыть через Test subscription при Live-конфигурации и наоборот.
7. Webhook проверяет точное Test/Live окружение и отклоняет payload без явного `test_mode`.
8. Частичный refund не лишает доступа; полный refund обрабатывается отдельно.
9. Добавлена обработка `subscription_payment_refunded`.
10. Для recurring subscription-invoice webhook добавлен fallback Firebase UID через сохранённый `billingSubscriptions/{subscriptionId}`. Это защищает от случая, когда invoice webhook не содержит checkout `custom_data`.
11. Из webhook update не стираются уже известные Lemon IDs только потому, что поздний payload не прислал поле.
12. Добавлены/усилены тесты billing boundary, refund, Test/Live и конфигурации.
13. Добавлены `.env.example` и `functions/.env.example` без секретов.
14. Добавлена отсутствовавшая реализация `scripts/set-firebase-admin.ts` для уже существующего npm script.
15. `.gitignore` усилен против Firebase Admin/service-account/private-key файлов.

## Важное по безопасности

В исходный загруженный архив случайно попал `functions/.secret.local`. Значения здесь не повторяются и в исправленный пакет не включены. Тем не менее TEST Lemon API key и TEST webhook secret из этого файла лучше считать раскрытыми и заменить перед дальнейшим использованием Test mode.

Для production в любом случае создать:

- новый **Live API key**;
- новый **Live webhook signing secret**.

Ни один из них не хранить в Git или frontend `.env`.

## Что уже готово

- Firebase project: `hungarylearn`.
- Blaze billing: включён.
- Firebase Auth flow.
- `/api/auth/me` и Bearer ID-token verification.
- Firestore server-authoritative profile/entitlement model.
- Firestore rules: browser не может сам выдать себе entitlement.
- Firebase Functions v2 API в `europe-west1`.
- Hosting rewrite `/api/** -> api`.
- Lemon checkout создаётся сервером и получает Firebase UID из проверенного токена.
- Firebase UID передаётся в Lemon checkout custom data.
- Lemon webhook HMAC SHA-256 проверяется по `X-Signature` и raw body.
- Webhook idempotency marker хранится в Firestore transaction.
- Subscription/customer portal flow.
- Test-mode Lemon интеграция уже была проверена до этого аудита.

## Что ещё нужно сделать вручную

### 1. Lemon Squeezy Live

Если Store ещё не активирован, сначала **Activate your store** и пройти business questionnaire + identity verification.

После появления Live mode:

1. Переключиться в Live mode.
2. Скопировать Test product в Live или создать финальный Live product.
3. Проверить итоговую цену. Сейчас UI показывает `44 500 Ft / месяц` статически; Live variant должен иметь ту же цену до отдельного изменения UI.
4. Записать новый Live Store ID.
5. Записать новый Live Variant ID.
6. Создать новый Live API key.
7. Подготовить новый random webhook signing secret.

Test Store/Variant/API key нельзя использовать в production.

### 2. Firebase Storage

Admin audio override API использует default Firebase Storage bucket. Если Storage для проекта ещё не инициализирован:

Firebase Console → Storage → Get started → создать default bucket.

Client rules остаются deny-all; backend Admin SDK работает независимо от client rules.

### 3. Production Firebase Web config

В production Vite env должны быть заполнены:

```text
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_APP_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_USE_FIREBASE_EMULATORS=false
```

Это Firebase Web config, а не Admin private key.

### 4. Firebase Secret Manager

Из корня проекта:

```powershell
firebase login
firebase use hungarylearn
firebase functions:secrets:set LEMONSQUEEZY_API_KEY
firebase functions:secrets:set LEMONSQUEEZY_WEBHOOK_SECRET
```

Вводить только LIVE значения.

### 5. Non-secret Functions params

Первый Functions deploy запросит значения, если их ещё нет:

```text
LEMONSQUEEZY_STORE_ID=<LIVE Store ID>
LEMONSQUEEZY_VARIANT_ID=<LIVE Variant ID>
APP_URL=https://hungarylearn.web.app
LEMONSQUEEZY_TEST_MODE=false
```

`LEMONSQUEEZY_TEST_MODE=false` критичен.

### 6. Проверки на локальном компьютере

После применения исправленных файлов выполнить:

```powershell
npm test
npm run test:rules
npm run lint
npm run functions:typecheck
npm run build
npm run functions:build
```

Этот аудит не заменяет эти команды: в sandbox не удалось установить полный npm dependency tree, поэтому полный suite после изменений здесь не запускался. Синтаксис изменённых TypeScript файлов проверен отдельно, а ключевая billing-логика прошла изолированные runtime assertions.

### 7. Первый deploy

```powershell
firebase deploy --only firestore:rules,firestore:indexes,storage,functions,hosting
```

Проверить:

```text
https://hungarylearn.web.app/
https://hungarylearn.web.app/api/health
```

`/api/health` должен вернуть 200.

### 8. Live webhook Lemon Squeezy

После появления production URL создать webhook в **Live mode**:

```text
https://hungarylearn.web.app/api/webhooks/lemonsqueezy
```

Signing secret — тот же LIVE secret, который записан в Firebase Secret Manager.

События:

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

### 9. Реальный smoke test

На новом обычном Firebase user:

1. зарегистрироваться;
2. проверить `/api/auth/me` = 200;
3. убедиться, что платные уроки закрыты;
4. сделать один реальный Live checkout;
5. проверить успешную доставку webhook;
6. проверить `entitlements/{uid}`;
7. refresh/re-login → `paidAccess: true`;
8. открыть платный урок;
9. открыть Customer Portal;
10. проверить отмену и окончание grace period.

## Решение, которое осталось за владельцем продукта

Сейчас `past_due` и `paused` **не дают платный доступ**. `active` даёт доступ, а `cancelled` сохраняет доступ до `accessUntil`.

Это строгая политика. Её не меняли автоматически, потому что это бизнес-решение, а не техническая ошибка.

## Что не нужно делать

- Не создавать новый Firebase проект.
- Не менять Auth архитектуру.
- Не переносить Admin service-account JSON в production.
- Не хранить Lemon secrets в Vite/frontend env.
- Не давать frontend право писать `entitlements`.
- Не заменять Firebase Hosting rewrite прямым публичным Functions URL без причины.
- Не использовать Test Lemon IDs/API key в Live.
