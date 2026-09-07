# Отчёт: подготовка новой тарифной сетки Magyaro

> Обновление 07.09.2026: последующая задача завершила разбор 50 failures. Полный suite — **668/668 PASS**. Подробная классификация, исторические diff и результаты проверок: [аудит исправлений](test-suite-repair/REPORT_RU.md). Приведённые ниже 618/50 — исторический результат первого этапа. Deploy/push не выполнялись.


Дата: 7 сентября 2026.

Код подготовлен. Реальные новые Lemon Variant ID не добавлялись; production environment не изменялся. Deploy, push, создание продуктов и платежи не выполнялись. Существующие пользовательские изменения уроков 18–19, wordAudioMap и аудио сохранены. Побочные изменения генерируемых файлов после npm run build восстановлены до состояния перед задачей.

## 1. Изменённые и добавленные файлы

### Frontend

- [src/config/pricing.ts](C:/Users/user/Desktop/HungaryLearn-main/src/config/pricing.ts)
- [src/pages/PricingPage.tsx](C:/Users/user/Desktop/HungaryLearn-main/src/pages/PricingPage.tsx)
- [src/components/UserAuthModal.tsx](C:/Users/user/Desktop/HungaryLearn-main/src/components/UserAuthModal.tsx)
- [src/utils/userStore.ts](C:/Users/user/Desktop/HungaryLearn-main/src/utils/userStore.ts)
- [src/pages/LegalPages.tsx](C:/Users/user/Desktop/HungaryLearn-main/src/pages/LegalPages.tsx)

### Backend

- [functions/src/billing/plans.ts](C:/Users/user/Desktop/HungaryLearn-main/functions/src/billing/plans.ts)
- [functions/src/billing/params.ts](C:/Users/user/Desktop/HungaryLearn-main/functions/src/billing/params.ts)
- [functions/src/billing/lemon.ts](C:/Users/user/Desktop/HungaryLearn-main/functions/src/billing/lemon.ts)
- [functions/src/billing/routes.ts](C:/Users/user/Desktop/HungaryLearn-main/functions/src/billing/routes.ts)
- [functions/src/billing/webhook.ts](C:/Users/user/Desktop/HungaryLearn-main/functions/src/billing/webhook.ts)

### Конфигурация

- [functions/.env.example](C:/Users/user/Desktop/HungaryLearn-main/functions/.env.example)
- [functions/functions.yaml](C:/Users/user/Desktop/HungaryLearn-main/functions/functions.yaml)
- [.github/workflows/firebase-hosting-merge.yml](C:/Users/user/Desktop/HungaryLearn-main/.github/workflows/firebase-hosting-merge.yml)

### Документация

- [PRODUCTION_LAUNCH.md](C:/Users/user/Desktop/HungaryLearn-main/PRODUCTION_LAUNCH.md)
- [PRODUCTION_AUDIT_RU.md](C:/Users/user/Desktop/HungaryLearn-main/PRODUCTION_AUDIT_RU.md)
- [docs/FIREBASE_LEMONSQUEEZY_SETUP.md](C:/Users/user/Desktop/HungaryLearn-main/docs/FIREBASE_LEMONSQUEEZY_SETUP.md)
- [docs/PRICING_MIGRATION_REPORT_RU.md](C:/Users/user/Desktop/HungaryLearn-main/docs/PRICING_MIGRATION_REPORT_RU.md)

### Тесты

- [tests/lemonPlans.test.ts](C:/Users/user/Desktop/HungaryLearn-main/tests/lemonPlans.test.ts)
- [tests/lemonBillingRoutes.test.ts](C:/Users/user/Desktop/HungaryLearn-main/tests/lemonBillingRoutes.test.ts)
- [tests/lemonFrontend.test.ts](C:/Users/user/Desktop/HungaryLearn-main/tests/lemonFrontend.test.ts)
- [tests/lemonWebhook.test.ts](C:/Users/user/Desktop/HungaryLearn-main/tests/lemonWebhook.test.ts)

## 2. Цены и UI

Единственный frontend-источник цен — `src/config/pricing.ts`. Тип BillingPlanKey ограничен monthly / quarterly / yearly. Конфиг содержит все запрошенные поля; формат Ft, эквиваленты и экономия вычисляются централизованно.

| Тариф | Цена периода | Эквивалент в месяц | Экономия | Отметка |
|---|---:|---:|---:|---|
| 1 месяц | 8 990 Ft | 8 990 Ft | 0 Ft | — |
| 3 месяца | 22 990 Ft | ≈ 7 663 Ft | 3 980 Ft | Самый популярный |
| 1 год | 64 990 Ft | ≈ 5 416 Ft | 42 890 Ft | Лучшая цена |

Pricing page показывает три карточки с одинаковыми Premium features. В кабинете по умолчанию выбран quarterly; кнопка отражает полную цену периода. Для управляемых Lemon подписок используется Customer Portal, для privileged сохраняется административный доступ. Ветвление Portal опирается на серверный subscriptionStatus, поэтому временно просроченная дата отображения не открывает повторный checkout. Высокое содержимое кабинета прокручивается внутри viewport.

Billing details и legal text описывают продление на выбранный период 1 month / 3 months / 1 year. Юридический текст ссылается на выбранный тариф и сумму в checkout. Политика возврата 14 дней сохранена.

## 3. Frontend API

`createLemonCheckout(plan: BillingPlanKey)` валидирует ключ во время выполнения и отправляет POST `/api/billing/create-checkout`, Content-Type application/json, тело только `{ plan }`. Существующий API-клиент добавляет Firebase Bearer token. `variantId` не отправляется. Сообщение backend при 503 показывается в кабинете; перенаправления нет.

## 4. Выбор Variant ID на сервере

После requireAuth сервер принимает только объект с единственным полем plan и одним из трёх разрешённых значений. Неизвестные значения, произвольные ключи и дополнительные поля (включая variantId) дают 400.

Сервер сопоставляет monthly / quarterly / yearly исключительно с соответствующими Firebase defineString params. Пустой или некорректный выбранный ID даёт 503: «Этот тариф пока недоступен для оформления.» Запрос к Lemon в этом случае не выполняется.

Общие API key, Store ID, APP_URL и test mode отделены от checkout variant. Это позволяет Customer Portal и hydration работать независимо от заполнения новых ID. Проверка повторной подписки и обработка ошибок Lemon сохранены.

Старый `LEMONSQUEEZY_VARIANT_ID` оставлен исключительно для Customer Portal существующих подписок. Он не является fallback нового checkout. Allowlist строится по трём plan params; числовой ID 2097546 теперь входит в него как подтверждённый quarterly ID.

## 5. Webhook и доступ

Webhook принимает только ID из трёх новых серверных параметров. Пустой список, variant вне текущего списка, другой Store ID и несовпадение test/live не изменяют entitlement.

Проверка подписи rawBody/HMAC/timingSafeEqual не изменялась. Firebase UID binding, восстановление UID из billingSubscriptions, hydration, транзакционная дедупликация, refund handling и сохранение известных billing IDs сохранены. Entitlement продолжает хранить status, accessUntil, variantId и testMode. Все тарифы используют существующий trusted hasPaidAccess; plan key не выдаёт доступ.

**Уточнение владельца по LIVE ID:** принимать строго monthly 2100676, quarterly 2097546, yearly 2100672. Ранее обсуждавшееся исключение «старого variant» не применяется к 2097546, поскольку этот номер подтверждён для quarterly. Другие номера вне allowlist игнорируются.

## 6. Подтверждённая production-конфигурация

Production workflow и локальный игнорируемый env используют:

```dotenv
LEMONSQUEEZY_VARIANT_ID_MONTHLY=2100676
LEMONSQUEEZY_VARIANT_ID_QUARTERLY=2097546
LEMONSQUEEZY_VARIANT_ID_YEARLY=2100672
```

Workflow явно записывает эти публичные ID, Store 461197, APP_URL=https://hungarylearn.web.app и TEST_MODE=false в functions/.env.hungarylearn. GitHub Actions variables для ID больше не требуются. Бизнес-логика получает значения через Firebase params, без hardcoded ID. Defaults params остаются пустыми для неконфигурированных сред. API key и webhook secret остаются в Firebase Secret Manager.

## 7. Проверки

| Проверка | Результат |
|---|---|
| npm run functions:typecheck | Успешно |
| npm run functions:build | Успешно, manifest обновлён |
| npx tsc --noEmit | Успешно |
| npm run build | Успешно, public bundle audit пройден: тела L3–L28 отсутствуют |
| Целевые lemon / firebaseBillingBoundary / subscriptionAccess / paidLessonAccess tests | 50 / 50 успешно |
| ESLint изменённых TS/TSX и billing tests | 0 ошибок, 0 предупреждений |
| git diff --check | Успешно |
| npm test, итоговый запуск | 618 успешно, 50 ошибок, всего 668 |
| Браузер: desktop 1280 px | 3 карточки в ряд, без горизонтального overflow |
| Браузер: tablet 768 px и mobile 375 px | Responsive layout, scrollWidth равен clientWidth |

Целевые тесты покрывают передачу plan без variantId, 400/401/503, каждое сопоставление, отсутствие fallback, дубликаты подписок, Portal, подписи, все три variants, запрет legacy/unknown, Store и test/live mismatch, дедупликацию, refund/hydration, paid-access boundary, default quarterly и Portal/privileged UI.

Первые запуски esbuild в Windows sandbox получили Access is denied. Повторные локальные запуски с разрешённым расширенным доступом прошли; deploy не выполнялся. Vite сообщил предупреждения о размере существующего bundle и смешанных static/dynamic imports.

Ошибки полного suite находятся в проверках контента, аудио и зафиксированных исторических хешей, а не в изменённых billing-тестах. Отдельная baseline-проверка до изменений тарифов не запускалась; эти ошибки не исправлялись в рамках задачи. Распределение:

| Файл тестов | Ошибок |
|---|---:|
| clickableAudioCoverage.test.ts | 1 |
| lesson18Migration.test.ts | 1 |
| lesson19Migration.test.ts | 1 |
| lesson1Migration.test.ts | 9 |
| lesson5Migration.test.ts | 2 |
| lesson6Migration.test.ts | 4 |
| lesson7Migration.test.ts | 1 |
| lesson8Migration.test.ts | 1 |
| lesson9Migration.test.ts | 2 |
| lessonActivities.test.ts | 14 |
| listeningArchitecture.test.ts | 1 |
| p1Foundation.test.ts | 6 |
| p2Lessons.test.ts | 2 |
| p3Lessons.test.ts | 2 |
| p4Lessons.test.ts | 2 |
| p5Lessons.test.ts | 1 |

Исторические сырые логи `billing-full-test.log` и `billing-targeted-test.log` при очистке перед push перенесены во внешний резервный архив. Актуальные структурированные результаты сохранены в `test-suite-repair/validation-results.json`.

## 8. Старый checkout

Fallback на старую цену полностью отсутствует. Без нового ID соответствующий тариф закрыт для оформления. Старый ID сохранён только для управления уже существующими подписками.

## 9. Следующие ручные шаги

1. Проверить три уже созданных LIVE subscription variants в существующем Lemon Store: 8 990 Ft / 1 month, 22 990 Ft / 3 months, 64 990 Ft / 1 year, без trial. Убедиться в правильных валюте, полной цене периода и renewal interval.
2. Production ID уже заданы в workflow и локальном env. Store ID, API key, webhook secret и Firebase project сохранены.
3. Учитывать повторное использование 2097546 для quarterly: его события принимаются; другие ID вне allowlist игнорируются.
4. В отдельном test-окружении проверить каждый тариф, checkout price/period, подписанный webhook, entitlement, Portal, отмену и возвраты. Не смешивать Test и Live параметры.
5. Разобрать ошибки полного suite до production publication; deploy/push выполнить отдельно после решения владельца. Затем провести контролируемую Live smoke-проверку каждого настроенного тарифа.
