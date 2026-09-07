# Аудит 50 failures HungaryLearn

Исходный свежий запуск: `test-repair-baseline.log` — 668 tests, 618 PASS, 50 FAIL. Таблица относится к этому запуску, а не к более старому `billing-full-test.log`.

| Категория | Failures | Вывод |
|---|---:|---|
| 1. Реальная pricing regression | 0 | Среди этих 50 не обнаружена |
| 2. Generated artifact / prebuild | 4 | 3 устаревших manifest hash-проверки + 1 несинхронный Listening export |
| 3. Старая цена / billing config | 0 | В этих 50 отсутствует |
| 4. Независимая ранее существовавшая проблема | 42 | Устаревшие текстовые/структурные ожидания и глобальные счётчики audio |
| 5. Реально изменённый защищённый lesson source | 4 | 4 stage-теста; в их циклах 13 уникальных изменённых уроков L7–L19 |

Категории первичные и взаимоисключающие. Manifest тоже имеет hash mismatch, но отнесён к generated artifacts. Эти несовпадения существовали до запуска build в данной работе. L7–L17 уже находятся в HEAD; L18–L19 были изменены до начала текущей работы. Пользователь явно распорядился сохранить текущие уроки и аудио.

## Все 50 failures

| № | Тест (исходное имя) | Категория | Причина и исправление |
|---:|---|---:|---|
| 1 | 19 - every learner-facing clickable pronunciation target has a physical mapped audio file | 4 | Устаревший счётчик clickable targets: 2097 вместо 2410. В свежем baseline все кнопки уже имели физические MP3 и mappings; сохранена исчерпывающая проверка каждой ссылки. |
| 2 | 149 - P5 L18 keeps boundaries, metadata, and excludes browser TTS/learner recording | 4 | L18: изменённая ранее формулировка границ -ni/modals; проверяется видимый текст и граница с L23. |
| 3 | 156 - P5 L19 preserves present-for-future truth and recognition-only definite fog boundary | 4 | L19: пересмотренный текст о present-for-future и recognition-only definite fog; смысловые ограничения сохранены. |
| 4 | 163 - frozen planning and translation files plus the approved narration manifest remain unchanged | 2 | Hash generated slideAudioManifest относится к старой версии аудио; проверяется соответствие каждой записи реальному MP3. |
| 5 | 166 - L1 says 44 letters/letter units, includes digraphs and dzs, and never says 44 sounds | 4 | L1: старый шаблон текста алфавита; отрицательный пример «не то же самое, что 44 звука» не является ошибочным утверждением. |
| 6 | 167 - L1 teaches gy /ɟ/, ty /c/, ny /ɲ/ as separate phonemes with bounded Russian approximations | 4 | L1: IPA и объяснения gy/ty/ny теперь оформлены иначе и обёрнуты clickable HTML. |
| 7 | 168 - L1 teaches j and ly as /j/ without an acoustic spelling contrast | 4 | L1: текст j/ly переработан; сохраняются одинаковый /j/ и отсутствие различения написания на слух. |
| 8 | 176 - stress uses direct rule practice with an obligatory explicit rule item and no listening asset | 4 | L1: «изолированном» заменено в activity на «отдельно произнесённом»; обязательный rule item сохранён. |
| 9 | 177 - L1 has no Recording activity and keeps read-aloud as optional text-only practice | 4 | L1: rubric устной самопрактики содержит 5 пунктов вместо 4 после переработки; evidence не добавляется. |
| 10 | 182 - L2/L5/L15 RolePlay and L4 sentence-reading are text-only | 4 | L4: устная практика стала optionalSpeaking вместо sentence-reading; text-only контракт сохранён. |
| 11 | 193 - L1 P1 adds bounded open Writing but no artificial RolePlay or fake listening evidence | 4 | L1: в Writing «3» заменено словом «три»; word bounds и partial evidence сохранены. |
| 12 | 196 - summary keeps corrected phonetic categories and does not group ly with gy/ty/ny | 4 | L1: summary phonetics представлен таблицей; тест проверяет видимый IPA вместо старого HTML. |
| 13 | 242 - date guidance is bounded, accurate, and contains no ISO shortcut | 4 | L5: компактная редакция изменила объяснение даты, сохранив ограниченный объём темы. |
| 14 | 243 - kettő/két and perc/másodperc are taught accurately | 4 | L5: в компактной редакции убрана тема секунд; проверяются kettő/két и отсутствие неверного перевода perc. |
| 15 | 251 - frozen planning docs, translations, approved narration manifest, and generator remain unchanged | 2 | Повтор старого hash generated manifest; остальные frozen hashes и hash генератора оставлены. |
| 16 | 266 - reflection hosts the scored P1 checkpoint but remains explicitly non-mastery | 4 | L6: переработан текст несертификационной рефлексии; activity checkpoint сохранён. |
| 17 | 271 - legacy out-of-scope A1+ forms are removed from learner-facing and scored content | 4 | L6: A1 примеры допускаются в явном нескоринговом preview; по-прежнему запрещены в A0 quiz/activity evidence. |
| 18 | 272 - L6 learner-facing text does not claim certification or A1 readiness | 4 | L6: изменён итоговый текст обзора; запреты заявлять certification/mastery сохранены. |
| 19 | 277 - L7 contextual practice has fourteen items at 11/14 without teaching the full conjugation system | 4 | L7: обновлена формулировка о последующем изучении полного спряжения. |
| 20 | 291 - L8 remains bounded to singular ownership and metadata/translations stay aligned | 4 | L8: Házaim recognition-only предупреждение находится в warn, а не body. |
| 21 | 293 - L9 exposes its intentional no-Listening communication sequence and valid ExitCheck | 4 | L9: из learner-facing текста убрана техническая фраза о Listening; проверяется реальное отсутствие activity/asset и корректность ExitCheck. |
| 22 | 299 - L9 keeps predicate plural optional, avoids fake audio fallback, and aligns metadata | 4 | L9: переработан optional plural preview; он по-прежнему не добавляет scored/evidence задание. |
| 23 | 373 - L3 removes the false plural article rule and keeps bounded safe examples | 4 | L3: объяснение артиклей и примеры переработаны; старые HTML regex не соответствуют текущему тексту. |
| 24 | 377 - l3_choose-article has balanced 8/10 DIRECT controlled evidence | 4 | L3: ранее расширено article exercise: 14 заданий, порог 10 вместо 10/8; проверяется и непрохождение на 9. |
| 25 | 380 - l3_write-plural has valid constrained 4/5 DIRECT written evidence | 4 | L3: ранее расширено written exercise: 8 заданий, порог 6 вместо 5/4; проверяется и непрохождение на 5. |
| 26 | 382 - l3_use-egy stays overall PARTIAL when only grammar has DIRECT evidence | 4 | L3: ранее расширено egy exercise: 10 заданий, порог 8 вместо 6/5; partial/direct semantics сохранены. |
| 27 | 395 - L4 frames -ik as a preview linked to L14, not as complete mastery | 4 | L4: граница -ik с L14 перенесена/переформулирована в note/warn. |
| 28 | 396 - eszik is explicitly special and never supports a false universal -ik rule | 4 | L4: eszik/eszem обёрнуты clickable HTML; сохраняется запрет универсального -ik алгоритма. |
| 29 | 404 - L4 short speaking practice is optional and text-only | 4 | L4: практика moved to optionalSpeaking; фиксированный старый slide/type заменён проверкой optional text-only data. |
| 30 | 433 - L2 third-person lenni explanation covers noun, nationality, and adjective predicates | 4 | L2: текущий пример именной группы Ő diák вместо Ő orvos; nationality/adjective и отсутствие van сохранены. |
| 31 | 434 - L2 location examples retain van and vannak | 4 | L2: van/vannak location explanations переписаны; видимые примеры проверяются независимо от tags. |
| 32 | 435 - L2 keeps the third-person rule bounded without a copula or location grammar detour | 4 | L2: старое ограничение длины/формулировки warning не соответствует переработке; проверяются учебные границы. |
| 33 | 436 - L2 labels case-marked country and location forms as whole chunks | 4 | L2: изменено объяснение готовых case-marked chunks. |
| 34 | 437 - L2 does not introduce elative or superessive paradigms or case tables | 4 | L2: изменён текст о будущих case rules; запрет вводить полные paradigms сохранён. |
| 35 | 458 - L2 open self-introduction WritingTask remains PARTIAL | 4 | L2: Writing теперь минимум 5 фраз + вопрос + прощание; self-assessed evidence остаётся PARTIAL. |
| 36 | 469 - slide audio manifest matches the approved regenerated narration inventory | 2 | Третий старый hash generated manifest; заменён проверкой inventory и версий из физических MP3. |
| 37 | 507 - generated JSON stays byte-semantically synchronized with lesson source | 2 | Generated Listening export отстал от уже изменённых уроков: 35 изменений title/prompt/placement; синхронизирован экспортером. |
| 38 | 526 - L1 preserves the required sound scope and uses short decoding instead of artificial RolePlay | 4 | L1: sound mappings теперь видимый табличный текст, без обязательного символа =. |
| 39 | 532 - Optional Speaking is text-only, non-scored, and outside the activity evidence graph | 4 | Optional Speaking: русская формулировка отсутствия микрофона/автооценки вместо обязательных английских слов; вне evidence graph. |
| 40 | 534 - L3 adds no accusative and L4 adds no premature full definite conjugation | 4 | L3: удалена техническая инструкция о запрете accusative; сохранена проверка отсутствия accusative objective/scored forms. |
| 41 | 536 - L6 integrates L1–L5 domains without claiming A0 certification | 4 | L6: изменена формулировка отсутствия certification; смысловое ограничение сохранено. |
| 42 | 538 - physical MP3 inventory and approved P6B assets remain byte-identical | 4 | Старое глобальное число MP3 1123; проверяются непустые файлы и неизменные hashes опубликованных Listening assets. |
| 43 | 539 - L7–L28 lesson sources are protected by their pre-P1 hashes | 5 | Старый pre-P1 source hash L7–L28 несовместим с позднейшими редакциями L7–L19. Полный аудит всех несовпадений приложен. |
| 44 | 544 - P2 listening audio inventory is unchanged and L9 has an explicit gap | 4 | Повтор глобального счётчика MP3; immutable Listening hashes и отсутствие L9 asset сохранены. |
| 45 | 545 - P2 does not alter protected lesson sources L11–L28 | 5 | Старый pre-P2 source hash L11–L28: позднейшие изменения L11–L19, не pricing. |
| 46 | 551 - P3 preserves byte-identical L12–L14 Listening MP3 and adds no MP3 | 4 | Повтор глобального MP3 count; точные Listening hashes L12–L14 сохранены. |
| 47 | 555 - P3 leaves L15–L27 and P6B lesson sources byte-identical | 5 | Старый pre-P3 source hash L15–L27: позднейшие изменения L15–L19, не pricing. |
| 48 | 564 - P4 preserves exact L15-L17 Listening contracts and physical MP3 hashes | 4 | Повтор глобального MP3 count; точные Listening contracts/hashes L15–L17 сохранены. |
| 49 | 566 - P4 leaves L18-L27, L28, and P6B L21-L24 source files byte-identical | 5 | Старый pre-P4 source hash L18–L28: сохранённые пользователем изменения L18–L19, не pricing. |
| 50 | 573 - P5 preserves exact L18–L20 Listening transcripts, assets, and SHA-256 | 4 | Повтор глобального MP3 count; точные Listening transcripts/assets/hashes L18–L20 сохранены. |

## Hash-аудит: каждый файл и diff

Полные ожидаемые и фактические SHA256, Git provenance и наличие точного исходника: [hash-mismatches.json](hash-mismatches.json). Архив исходных stage-проверок с оригинальными hashes: [historical-source-guards.md](historical-source-guards.md).

Для 7 файлов найден точный Git blob, дающий ожидаемый старый hash. Для остальных 7 ожидаемый blob не найден в доступной истории: diff от первой доступной версии явно обозначен как справочный, а не как точная реконструкция неизвестного исходника. Во всех случаях отдельно проверен diff к HEAD. Незакоммиченные правки: [L18 vs HEAD](lesson18-vs-HEAD.diff), [L19 vs HEAD](lesson19-vs-HEAD.diff); L7–L17 идентичны HEAD.

| Файл | Источник сравнения | Подтверждённое позднейшее изменение | Связь с pricing / решение |
|---|---|---|---|
| `src/data/lessons/lesson7.ts` — [diff](lesson7.diff) | Точный исторический blob 6249981ff1 | d86741d Complete lesson 7 pedagogical slide and audio review | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson8.ts` — [diff](lesson8-earliest-available.diff) | Первая доступная версия; точного blob нет | 66df354 Update lesson 8 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson9.ts` — [diff](lesson9-earliest-available.diff) | Первая доступная версия; точного blob нет | 2ba01bb Update lesson 9 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson10.ts` — [diff](lesson10-earliest-available.diff) | Первая доступная версия; точного blob нет | 2d0bc99 Update lesson 10 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson11.ts` — [diff](lesson11.diff) | Точный исторический blob 56060cfcd0 | 1b0a28b Update lesson 11 slides audio and clickable pronunciation | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson12.ts` — [diff](lesson12.diff) | Точный исторический blob 37a4ce5169 | aecfa9d Update lesson 12 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson13.ts` — [diff](lesson13-earliest-available.diff) | Первая доступная версия; точного blob нет | b1ae6e1 Update lesson 13 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson14.ts` — [diff](lesson14-earliest-available.diff) | Первая доступная версия; точного blob нет | d39e50b Update lesson 14 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson15.ts` — [diff](lesson15.diff) | Точный исторический blob b5fb04527e | 367df5f Update lessons 15-17 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson16.ts` — [diff](lesson16.diff) | Точный исторический blob 7e8cd0f579 | 367df5f Update lessons 15-17 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson17.ts` — [diff](lesson17.diff) | Точный исторический blob 41ea4749ee | 367df5f Update lessons 15-17 slides and audio | Не pricing. В HEAD; сохранено. |
| `src/data/lessons/lesson18.ts` — [diff](lesson18-earliest-available.diff) | Первая доступная версия; точного blob нет | d2a725c Naturalize L18 and L19 roleplay dialogues | Не pricing. Предшествующие незакоммиченные правки; сохранены по ответу пользователя. |
| `src/data/lessons/lesson19.ts` — [diff](lesson19-earliest-available.diff) | Первая доступная версия; точного blob нет | d2a725c Naturalize L18 and L19 roleplay dialogues | Не pricing. Предшествующие незакоммиченные правки; сохранены по ответу пользователя. |
| `src/data/slideAudioManifest.ts` — [diff](slideAudioManifest.diff) | Точный исторический blob 61bcbc144a | 367df5f Update lessons 15-17 slides and audio | Generated версии 22 MP3 L18–L19; необходимая синхронизация с сохранённым аудио. |

## Что изменено дополнительно

- `tests/fixtures/courseContracts.ts`: видимый текст без HTML wrappers; проверка manifest по каждому MP3; непустые audio files; идентичность номеров, slide/quiz IDs, валидность activities и objective/evidence references. Существующий пропуск L27 `l27_ask-directions` в ExitCheck не превращён в новый evidence: progress semantics сохранены.
- 15 существующих файлов тестов: clickableAudioCoverage; lesson1/5/6/7/8/9/18/19Migration; lessonActivities; p1Foundation; p2/p3/p4/p5Lessons. Обновлены устаревшие ожидания без изменения реализации lesson/activity.
- `src/data/slideAudioManifest.ts`: стандартная генерация cache versions 22 существующих MP3 уроков 18–19; состав и количество slide audio не изменены. Это runtime cache versions, не golden snapshots.
- `docs/listening-audio-plan.json`, `docs/LISTENING_AUDIO_PLAN.md`: exporter синхронизировал названия, формулировки вопросов и placement. Transcripts, ответы, asset IDs и audio status идентичны HEAD. [35 точных изменений JSON](listening-export-diff.json).
- Данный каталог: доказательства baseline, все 50 причин и исторические diff.

## Защита контента и восстановленные изменения

Проверены SHA256 2799 файлов, включая весь `src/data/lessons`, все физические файлы `public/audio`, wordAudioMap, narration manifest и lessonProgressCatalog. [Исходные hashes](initial-protected-files.json) и [финальное сравнение](final-protected-comparison.json). Все lesson files, audio bytes, wordAudioMap и progress catalog остаются побайтово идентичны началу работы. Единственное отличие в этом наборе — необходимый generated manifest.

Откат случайных lesson/audio изменений pricing не потребовался: таких изменений не обнаружено. Сохранены предшествующие правки L18–L19, 22 narration MP3 и связанные новые word MP3. Временно добавленные по старому логу 7 duplicate mapping entries удалены; wordAudioMap восстановлен точно до состояния начала работы (включая LF). Vocabulary prebuild не оставил содержательных изменений в Git diff.

Исторические golden значения не заменялись новыми hashes. Устаревшие stage-защиты L7–L19 архивированы с исходными значениями и заменены активными инвариантами после проверки истории. Это осознанное снятие устаревшего ограничения на ранее одобренные редакции, а не утверждение, что их source bytes не менялись. Действующие hashes L20–L28, planning docs, translations, generator и immutable Listening MP3 сохранены.

## Итоговые проверки

Результаты финальных команд фиксируются в `validation-results.json`. Полный npm test не содержит `.skip`, отмен или фильтрации failing tests. Lemon Variant IDs, цены и новая pricing architecture в данной работе не изменялись. Deploy и push не выполнялись.

| Команда | Результат |
|---|---|
| npm run functions:typecheck | PASS, exit 0 |
| npm run functions:build | PASS, exit 0 |
| npm run build (prebuild + postbuild) | PASS, exit 0; public bundle audit PASS |
| npm test | 668 PASS / 0 FAIL / 0 SKIP |
| Targeted billing/security | 77 PASS / 0 FAIL |
| Firestore Rules, локальный emulator | 4 PASS / 0 FAIL; CLI exit 0 при повторе с изолированной конфигурацией |
| npx tsc --noEmit | PASS |
| ESLint исправленных тестов | 0 errors / 0 warnings |
| validate:lessons | 28 уроков OK |
| validate:listening | 32 activities / 31 assets, 0 missing / warnings / errors |

Первый `npm run test:rules` выполнил 4/4 теста, но завершился exit 2 из-за timeout отправки Firebase CLI analytics уже после shutdown. Причина подтверждена `firebase-tools/lib/command.js` и debug log. Те же rules/tests повторены без изменений с отдельным `XDG_CONFIG_HOME` в системном TEMP (без пользовательского analytics opt-in); CLI завершился exit 0. Глобальные пользовательские настройки не менялись.

Frontend build сообщает существующее предупреждение о chunk >500 kB; ошибок сборки нет. Никакие lesson/audio файлы не менялись ради PASS. Никакие golden hashes не перезаписывались текущими значениями. Deploy: НЕ выполнялся. Push: НЕ выполнялся.

При последующей очистке перед push сырые `.log` и разовые PowerShell-скрипты убраны из проекта в резервный ZIP в системном TEMP. Структурированные результаты проверок, исходные hashes и все пофайловые diff сохранены в этом каталоге.
