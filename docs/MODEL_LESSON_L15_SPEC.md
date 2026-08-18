# MODEL LESSON L15 — SPECIFICATION (Integrated Communication Lesson · A2)

> **Status:** **L15 PILOT — FROZEN / APPROVED AS MODEL LESSON** (pilot реализован).
> Этот документ — source of truth для реализованного L15; далее не переписывается.
>
> **Hard constraints (this phase):**
> - НЕ изменять `lesson15.ts`, React components, `types.ts`, audio files, SRS.
> - НЕ создавать экзамены, НЕ реализовывать L15.
> - Разрешено создать только этот файл: `docs/MODEL_LESSON_L15_SPEC.md`.
>
> **Маркеры:**
> - `FACT` — подтверждено чтением кода репозитория.
> - `TARGET` — целевое состояние, которое должна дать будущая реализация.
> - `NEW REQUIREMENT` — то, чего в коде сейчас нет; должно быть добавлено на фазе реализации.

---

## 0. SOURCE OF TRUTH

Использованы фактически прочитанные источники:

- `docs/CURRICULUM_BLUEPRINT.md` (Revision 2 — APPROVED WITH REQUIRED CORRECTIONS).
- `docs/CURRICULUM_AUDIT.md`.
- `src/data/lessons/lesson15.ts` (прочитан полностью).
- `src/types.ts` (`SlideData`, `Lesson`, `VocabularyItem`, `QuizQuestion`, `LearningObjective`, `Skill`).
- `src/utils/lessonQuizAndVocab.ts` (`getLessonVocabulary`, `getLessonQuiz`, `LESSON_VOCABULARY_MAP`).
- `src/data/lessonTranslations.ts` (`LESSON_TRANSLATION_MAP[15]`).
- `src/utils/audioRegistry.ts` (slide MP3), `src/utils/audioConfig.ts`, `src/data/wordAudioMap.ts`.
- `src/components/SlideContent.tsx`, `SpeechButton.tsx`, `AudioRecorder.tsx`, `LessonQuizModal.tsx`,
  `WordTrainerModal.tsx`, `TranslationTrainerModal.tsx`, `ReviewWarmup.tsx` (назначение проверено).

Ничего не придумано: всё, помеченное `FACT`, взято из этих файлов.

---

## 1. MODEL LESSON GOAL

**Archetype (Blueprint §7A):** №6 — Integrated Communication Lesson.

**Главная коммуникативная цель (ученик может):**
1. понять простое меню (reading);
2. сделать заказ (speaking);
3. ответить на уточняющий вопрос официанта (interaction);
4. сообщить предпочтение (speaking);
5. попросить счёт (speaking / chunk);
6. понять основную информацию короткого диалога «официант–клиент» (listening).

**Грамматическая цель:** дательный падеж `-nak/-nek`, конструкция обладания `nekem van`,
отрицание `nincs`.

**Правило интеграции (две линии):**
- **Линия A — LANGUAGE SYSTEM:** dative / possession / negation (`-nak/-nek`, `nekem van`, `nincs`,
  косвенное дополнение `adok … valakinek`).
- **Линия B — COMMUNICATIVE SCENARIO:** restaurant / food / ordering.

Дательный **НЕ притягивается искусственно** к каждой restaurant-активности. Естественные
точки пересечения линий:
1. грамматический блок сам по себе (линия A, вне ресторана);
2. **`Ízlik nekem a…`** — dative experiencer + food subject: естественная точка recycling
   «accusative (L7) + dative (L15)» для objective `l15_express-likes` (см. §7, USE 3);
3. possession-примеры с едой в controlled practice («Nekem van egy almám»);
4. «Mit ajánl **nekem**?» — опциональная реплика **ученика** официанту (см. §14).

---

## 2. AUDIT CURRENT L15 (FACT → решение)

| # | Элемент | Текущее состояние (FACT) | Решение | Rationale |
|---|---|---|---|---|
| 1 | Slides (12) | 1 dative; 2 pronouns; 3 nekem van; 4 nincs; 5 adok…-nak; 6 food vocab; 7 restaurant phrases; 8 dialogue; 9 practice sentences; 10 tasks; 11 foreshadow; 12 summary | **KEEP** (переиспользовать как контент-базу) | сильная структура «форма → значение → применение» |
| 2 | Grammar | -nak/-nek, nekem van, nincs, adok valakinek | **KEEP** + **MODIFY** (подать как FORM/MEANING/USE/CONTRAST/EXAMPLE) | грамматика корректна, но подана таблично |
| 3 | Vocabulary (inline, 8) | leves, hús, hal, zöldség, sajt, saláta, desszert, víz | **KEEP** | реально полезная ресторанная лексика |
| 4 | Vocabulary (map, 6) | nekem, neked, adok, kell, házam, étterem | **KEEP** (SRS-карточки) | это SRS-единицы + supporting |
| 5 | Quiz (inline, 6) | 1501–1506 | **KEEP как Retrieval Checkpoint** (1506 — REWRITE) | см. §18 |
| 6 | Objectives (5) | name-food, form-dative, use-have-construction, express-likes, order-food | **KEEP**; `express-likes` требует ADD-контента | см. §2.1 |
| 7 | Reading | диалог (слайд 8) как exposure | **MODIFY** (добавить функциональный текст — menu + comprehension) | menu = reading, не listening |
| 8 | Listening | только озвучка слайдов/слов | **ADD** (отдельный listening stimulus + вопросы) | listening отсутствует как навык |
| 9 | Speaking | «прочитайте диалог вслух», «составьте заказ» (слайд 8 task) | **MODIFY** (guided production + interaction + запись) | чтение ≠ speaking production |
| 10 | Writing | отсутствует | **ADD** (functional writing) | writing отсутствует в уроке |
| 11 | Audio | 12 slide MP3 (`15.1..15.12`), TTS по кнопкам | **KEEP** + **ADD** (listening dialogue asset) | см. §20 |
| 12 | Examples | háznak, kertnek, anyának; nekem…; Nekem van…; Nincs…; Adok… | **KEEP** | примеры корректны и естественны |

### 2.1 Покрытие objectives (текущий evidenceMode)

| Objective | Текущее evidence (FACT) | evidenceMode | Вывод |
|---|---|---|---|
| l15_name-food | чтение словаря (слайд 6), повтор вслух | **PARTIAL** | узнавание есть, продукция частичная |
| l15_form-dative | quiz 1501 (single-choice) | **PARTIAL** | только controlled recognition, нет продукции |
| l15_use-have-construction | quiz 1502/1503 + translation t1/t3 | **PARTIAL** | recognition/translation, нет свободной продукции |
| l15_express-likes | **отсутствует** в слайдах (`szeretem`/`ízlik`) | **NONE** | GAP → закрывается contrast «Szeretem a… / Ízlik nekem a…» (§7 USE 3, §13, §16) |
| l15_order-food | чтение диалога + «составьте заказ» (слайд 8) | **PARTIAL** | репетиция, не interaction |

---

## 3. EVIDENCE TYPES (не путать)

| Тип | Определение | Пример в L15 |
|---|---|---|
| **EXPOSURE** | контент на экране без задания | готовый диалог, меню, таблицы |
| **PRACTICE** | отработка без фиксации результата | прочитать диалог вслух, выбрать суффикс |
| **ASSESSMENT EVIDENCE** | измеримый результат, доказывающий objective | ответить на вопросы к меню, заказать еду |

**Правила не-смешения:**
- готовый диалог на экране = **exposure**;
- прочитать готовый диалог = **pronunciation/rehearsal** (PRACTICE);
- выбрать текстовый ответ = **reading/recognition** (PRACTICE);
- прослушать MP3 и ответить = **listening comprehension** (ASSESSMENT EVIDENCE);
- самостоятельно заказать еду = **speaking production** (ASSESSMENT EVIDENCE);
- отреагировать на вопрос официанта = **interaction** (ASSESSMENT EVIDENCE).

Каждая activity в §5–§18 помечена `evidenceMode: DIRECT | PARTIAL | NONE`.

---

## 4. TARGET LESSON STRUCTURE

Педагогическая последовательность (НЕ 15 отдельных экранов; блоки группируются разумно):

```
1  Recall                (SRS warmup, 5 items)          — экран A
2  Context / Mission     (ввод в сценарий ресторана)     — экран A (вместе с 1)
3  Input                 (диалог официант–клиент)        — экран B
4  Comprehension         (gist + детали по диалогу)      — экран B
5  Grammar Block A       (-nak/-nek, nekem van, nincs)   — экран C
6  Controlled Practice   (3 типа)                        — экран C
7  Vocabulary            (core/supporting/passive)       — экран D
8  Reading               (MENU + вопросы)                — экран D
9  Listening             (аудио-диалог + вопросы)        — экран E
10 Guided Production     (model→substitution→guided→indep)— экран F
11 Interaction           (restaurant role-play)          — экран F
12 Writing               (functional order message)      — экран G
13 Exit Check            (objective→evidence)            — экран G
14 Feedback              (rubric + self-review)          — экраны F/G
15 Spaced Review handoff (SRS retention)                 — после урока
```

Группировка: A (1–2), B (3–4), C (5–6), D (7–8), E (9), F (10–11+14), G (12–13+14), SRS (15).

---

## 5. RECALL (5 mixed items)

Возвращается только материал, реально нужный L15. Материал L15 заранее НЕ объясняется.

| # | Тип | Prompt | Answer | Prereq (FACT) | evidenceMode |
|---|---|---|---|---|---|
| R1 | fill-gap | «Kérek egy ___» (leves → винительный) | levest | L7 (-t) | DIRECT |
| R2 | fill-gap | «Van egy ___» (testvér + -em) | testvérem | L8 (possessive) | DIRECT |
| R3 | single-choice | «___ kávé» (2) | két kávé | L5 (numbers) | DIRECT |
| R4 | hu→ru | «Jó napot!» | Добрый день! | L2 (politeness) | DIRECT |
| R5 | fill-gap | «Szeretem az ___» (alma → вин.) | almát | L7 (chunk «szeretem») | DIRECT |

---

## 6. INPUT — ресторанный контекст (диалог)

**evidenceMode: NONE** (это exposure; проверка понимания — в Comprehension).

```
Pincér:  Jó estét! Mit kér?
Vendég:  Jó estét! Kérek egy gulyáslevest és egy ásványvizet.
Pincér:  Még valamit?
Vendég:  Igen, egy salátát is kérek.
Pincér:  Rendben, hozom rögtön.
…
Vendég:  Elnézést, a számlát kérem!
Pincér:  Természetesen, azonnal hozom.
```

**Comprehension (по этому диалогу, текстовый выбор — evidenceMode PARTIAL):**
1. «Mit kér a vendég először?» → gulyáslevest és ásványvizet.
2. «Mit kér még a vendég?» → salátát.
3. «Mit kér a végén?» → a számlát.

---

## 7. GRAMMAR BLOCK A — FORM / MEANING / USE / CONTRAST / EXAMPLE

**evidenceMode: NONE** (exposure; практика — в §8).

- **FORM:** `-nak` (back-vowel) / `-nek` (front-vowel), присоединяется напрямую: `ház → háznak`,
  `kert → kertnek`, `anya → anyának`. Местоимения: `nekem, neked, neki, nekünk, nektek, nekik`.
- **MEANING:** «кому? / для кого?» — адресат действия.
- **USE 1 — обладание:** `[dative owner] + van/vannak + [существительное + притяж. суффикс]`.
  `Nekem van egy házam.` / `Neked van egy autód.` / `Neki van egy testvére.`
- **USE 2 — косвенное дополнение при глаголах передачи:** `Adok egy könyvet a barátomnak.`
- **CONTRAST — отрицание:** не `nem van`, а особое слово `nincs` (ед.ч.) / `nincsenek` (мн.ч.):
  `Nincs autóm.` / `Nincsenek gyerekei.`
- **USE 3 — communicative contrast (preference):** `Szeretem + accusative` = «мне вообще нравится /
  я люблю X»; `Ízlik + food as subject (+ optional dative experiencer)` = «X мне нравится на вкус».
  Примеры: `Szeretem a gulyáslevest.` / `Ízlik nekem a gulyásleves.` / `Nem ízlik nekem a hal.`
  Это **communicative chunk** + recycling (accusative L7 + dative L15), а НЕ новый grammar topic.
- **EXAMPLE (естественные):** сохраняются примеры текущего урока (FACT) — они корректны.

> Блок подаётся как объяснение в контексте, а не как голая таблица: каждая форма сопровождается
> примером-предложением, а не только парадигмой.

---

## 8. CONTROLLED PRACTICE (минимум 3 типа)

**evidenceMode: DIRECT** (это practice-порог, не mastery — см. §19).

### CP1 — suffix selection
«Выбери правильный суффикс дательного падежа»:
1. ház → `-nak` / `-nek` → **-nak** (back)
2. kert → `-nak` / `-nek` → **-nek** (front)
3. anya → `-nak` / `-nek` → **-nak** (back)

### CP2 — sentence completion (fill-gap)
1. «Nekem van egy ___» (könyv → ) → **könyvem**
2. «Neked van egy ___» (autó → ) → **autód**
3. «___ autóm» (отрицание «у меня нет машины» → ) → **Nincs**

### CP3 — meaning/context choice
«Выбери корректный вариант»:
1. «У меня нет времени» → `Nincs időm.` / `Nem van időm.` → **Nincs időm.**
2. «Даю кофе маме» → `Adok egy kávét az anyámnak.` / `Adok egy kávét az anyám.` → **anyámnak**

**Data model вариантов (NEW REQUIREMENT, не менять types.ts сейчас):**
- `single-choice` — выбор одного варианта (как текущий `QuizQuestion`).
- `fill-gap` — пропуск с ожидаемым ответом (текст, с accept-списком).
- `text-input` — свободный короткий ввод с нормализацией (для R5/CP2).

---

## 9. VOCABULARY (A–E)

Не считать словоформу новой лексемой: `leves → levest`, `saláta → salátát`, `ház → házam/háznak`
— это словоформы одного lexeme. Количество не фиксировано — только реально необходимые единицы.

### 9.1 A. FOOD CORE (active — производится в речи)

| lexeme | translation | partOfSpeech | role | active/passive | existing/new | first use | production requirement |
|---|---|---|---|---|---|---|---|
| leves | суп | noun | order item | active | existing (L15 v1) | §6 input | сказать в заказе |
| saláta | салат | noun | order item | active | existing (v6) | §6 input | сказать в заказе |
| víz | вода | noun | drink | active | existing (v8) | §6 input | сказать в заказе |
| kávé | кофе | noun | drink | active | existing (t2) | §11 menu | сказать в заказе |
| sajt | сыр | noun | food | active | existing (v5) | §11 menu | узнавать + сказать |
| hal | рыба | noun | food | active | existing (v3) | §11 menu | узнавать + сказать |
| hús | мясо | noun | food | active | existing (v2) | §11 menu | узнавать + сказать |
| zöldség | овощи | noun | food | active | existing (v4) | §11 menu | узнавать + сказать |
| étterem | ресторан | noun | place | active | existing (map v6) | §12 listening | узнавать |
| desszert | десерт | noun | food | active | existing (v7) | §11 menu | узнавать |

### 9.2 B. FUNCTIONAL CORE (функциональные слова ресторана)

| lexeme | translation | partOfSpeech | role | active/passive | existing/new | first use | production requirement |
|---|---|---|---|---|---|---|---|
| kér | просить/заказывать | verb | order | active | existing (slide 7, dialogue) | §6 input | «Kérek egy…» / «A számlát kérem» |
| számla | счёт | noun | bill | active | existing (slide 7) | §6 input | «A számlát kérem» |
| étlap | меню | noun | reading object | passive | NEW | §11 menu | читать (узнавание) |
| ital | напиток | noun | category/drink | passive | NEW | §11 menu (Italok) | узнавание (опц. «Egy italt kérek») |
| főétel | основное блюдо | noun | category | passive | NEW | §12 listening («És főételt?») | узнавание |

### 9.3 C. SUPPORTING GRAMMAR (не продуктивная ресторанная лексика)

| lexeme | translation | role | existing/new |
|---|---|---|---|
| nekem / neked | мне / тебе | dative pronoun / experiencer | existing (map v1/v2) |
| ad | давать | verb of giving | existing (map v3 `adok`) |
| nincs | нет (отрицание van) | negation | existing (slide 4) |
| ház / anya / barát | дом / мать / друг | dative examples | existing |
| szeret | любить | preference (chunk «Szeretem») | existing (L7 chunk) |
| ízlik | быть по вкусу | preference (chunk «Ízlik nekem») | NEW (chunk) |

### 9.4 D. PASSIVE MENU VOCABULARY (menu reading only)

`gulyásleves, rántott sajt, sült csirke, grillezett hal, ásványvíz, narancslé, forint,
szénsavmentes víz, vegetáriánus`.

### 9.5 E. COLLOCATIONS / CHUNKS (см. §10)

---

## 10. COLLOCATIONS / CHUNKS (учить как готовые блоки)

| Chunk | Значение | Грамматика (НЕ разбираем сейчас) | Prereq |
|---|---|---|---|
| Kérek… | Я прошу / Мне, пожалуйста | indefinite conjugation | L4 (наст. время) |
| Szeretnék… | Я хотел бы | conditional (полно в L23) | chunk |
| Mit kér? | Что вы хотите? | question | chunk |
| Még valamit? | Что-нибудь ещё? | accusative `valamit` | chunk |
| A számlát kérem. | Счёт, пожалуйста | accusative `számlát` | L7 (-t) |
| Köszönöm. | Спасибо | — | L2 |
| Mennyibe kerül…? | Сколько стоит…? | — | chunk |
| Mit ajánl? | Что посоветуете? | indefinite | chunk |

> «Szeretnék» уже встречается в L15 (слайд 7, как chunk с пометкой «условное разберём в L23»).
> Полный разбор условного здесь НЕ даётся.

---

## 11. READING — MENU (functional text)

**Menu = READING. НЕ использовать menu как listening.** `evidenceMode: DIRECT`.

```
ÉTLAP
🌱 = vegetáriánus

Levesek
  Gulyásleves ……… 1850 Ft
  Zöldségleves 🌱 … 1250 Ft

Főételek
  Rántott sajt 🌱 …… 2200 Ft
  Sült csirke ……… 2600 Ft
  Grillezett hal …… 2900 Ft

Italok
  Ásványvíz ……… 550 Ft
  Kávé ………… 700 Ft
  Narancslé ……… 800 Ft
```

**Вопросы к меню (4 типа):**
1. **explicit information:** «Melyik kategóriában van az ásványvíz?» → Italok.
2. **price lookup:** «Mennyibe kerül a gulyásleves?» → 1850 Ft.
3. **choice based on requirement:** «Mit rendelhet egy vegetáriánus vendég?» → Zöldségleves és rántott sajt (позиции с 🌱).
4. **simple inference:** «Melyik olcsóbb: a kávé vagy a narancslé?» → a kávé (700 Ft).

> Выбран вариант **A**: меню явно маркирует вегетарианские позиции (🌱), поэтому вопрос 3 отвечается
> прямо по меню — внешние знания не требуются. Это authentic functional-reading feature.

> Решение по ценам: числа свыше 100 читаются как письменные цифры (пассивное чтение), произносить
> их вслух НЕ требуется — это не противоречит L5 (числа 1–100 в продукции).

---

## 12. LISTENING — отдельный audio stimulus

**Listening = отдельный аудио, НЕ «audio menu». Transcript скрыт до ответа.**

`evidenceMode: DIRECT`.

**Script (25–35 секунд, 2 роли) — заканчивается подтверждением заказа, без просьбы счёта:**

```
Pincér:  Jó estét! Mit kér?
Vendég:  Szeretnék egy gulyáslevest és egy limonádét.
Pincér:  Sajnos nincs limonádé, csak narancslé van.
Vendég:  Rendben, akkor egy narancslevet kérek.
Pincér:  És főételt?
Vendég:  Igen, egy rántott sajtot kérek.
Pincér:  Rendben, hozom rögtön.
```

> Хронология естественная: заказ → недоступный напиток → замена → основное блюдо → подтверждение.
> «A számlát kérem» здесь **не** звучит — этот target проверяется позже в role-play (§14).

**Comprehension questions (3–5):**
1. **gist:** «Hol játszódik a párbeszéd?» → étteremben.
2. **specific information:** «Mit szeretne inni a vendég?» → limonádét.
3. **specific information (negation):** «Mi nincs az étteremben?» → limonádé (csak narancslé van).
4. **order item:** «Milyen főételt kér a vendég?» → rántott sajtot.

**Listening replay (обучение, не экзамен):**
- первый проход → gist (вопрос 1);
- второй проход → детали (вопросы 2–4);
- повтор разрешён без жёсткого exam-style лимита;
- transcript показывается **только после ответа**.

> **AUDIO ASSET REQUIRED.** Нет MP3 сейчас → НЕ создавать fake URL. Скрипт выше — точный текст для
> будущей записи (см. §20).

---

## 13. GUIDED PRODUCTION (model → substitution → guided → independent)

**evidenceMode: PARTIAL → DIRECT** (по мере роста самостоятельности).

| Step | Prompt | Learner | Прогрессия |
|---|---|---|---|
| Model | «Kérek egy levest.» | повторяет/читает | model |
| Substitution | «Kérek egy ______.» (saláta / kávé / hal) | «Kérek egy salátát / kávét / halat.» | substitution |
| Guided | «Mit kér inni?» (модель: «Egy ásványvizet kérek.») | отвечает по образцу | guided response |
| Preference | «Szeretem a gulyáslevest. / Ízlik nekem a leves. / Nem ízlik nekem a hal.» (модель) | «Szeretem a ___. / Ízlik nekem a ___.» | guided preference (recycling: accusative + dative) |
| Independent | «Mit kér?» | свободный ответ | independent |

---

## 14. INTERACTION — RESTAURANT ROLE-PLAY

**Главная Mission.** Сценарий изменяется. Чтение готового диалога **НЕ** считается role-play mastery.

**evidenceMode (CURRENT IMPLEMENTATION): PARTIAL.**

AudioRecorder доказывает факт выполнения записи, но приложение **не оценивает** содержание речи
автоматически. При завершении: `completed: true`, `passed: false`, `evidenceMode: 'partial'`;
`recordingCompleted: true` — только потому, что обязательные recorded turns на фактически пройденном
пути были выполнены и гейтированы (перейти дальше без записи нельзя).

**TARGET:** DIRECT evidence возможно только после teacher/system evaluation, которого сейчас нет.

Сценарий (реплики официанта — стимулы; реплики ученика — свободные):

```
W1 (waiter):  Jó estét! Mit kér?
L1 (learner): [заказывает блюдо и напиток; может добавить «Mit ajánl nekem?»]
W2:           Még valamit?
L2:           [отвечает: да/нет, добавляет; может выразить предпочтение «Szeretem a… / Nem ízlik nekem a…»]
W3:           Sajnos nincs limonádé, csak narancslé van.
L3:           [реагирует на отказ — переспрашивает/меняет выбор]
W4:           Rendben, hozom rögtön.
W5:           Kér még valamit?
L5:           [Nem, köszönöm. A számlát kérem.]  ← learner сам просит счёт
```

> **Role ownership:** «Mit ajánl **nekem**?» — реплика **ученика** официанту (ученик спрашивает
> рекомендацию), а не реплика официанта клиенту. «Kér még valamit?» — реплика **официанта**;
> «A számlát kérem.» — реплика **ученика** (это и есть target «ask for the bill»). Дательный не
> вставляется в каждую реплику.

---

## 15. SPEAKING (AudioRecorder reuse + rubric)

**FACT (реализовано):** `AudioRecorder` интегрирован в `RolePlay`. Recorded turns гейтированы —
перейти дальше нельзя, пока запись не создана. Поддерживаются playback и retry.

**FACT (не реализовано):** явная аналитическая teacher rubric не реализована. Поэтому
`selfReviewed` **не** выставляется автоматически в `true` (пользователь отдельную speaking rubric
не выполняет).

**Rubric (A2, из Blueprint §9.5, TARGET для будущего):** Task completion · Interaction · Fluency ·
Intelligibility · Vocabulary · Grammar. Ошибки оцениваются по влиянию на коммуникацию, а не счётом.

---

## 16. WRITING — functional writing (не «essay о ресторане»)

**evidenceMode (CURRENT IMPLEMENTATION): PARTIAL.**

Пользователь пишет текст и выполняет self-review rubric, но автоматической языковой оценки нет:
`completed ≠ passed` (`completed: true`, `passed: false`, `evidenceMode: 'partial'`).

**TARGET DIRECT:** только после teacher/system qualified evaluation.

**Prompt:** «Напиши короткое сообщение другу перед походом в ресторан (3–4 фразы): что ты
любишь/не любишь и что хотел бы заказать.»

**Model answer (только известные или chunked формы):**

```
Szeretem a gulyáslevest.
A halat nem szeretem.
Szeretnék egy salátát.
Egy ásványvizet kérek.
```

**Rubric:** task completion · clarity · target grammar (`Szeretem` + accusative, `Szeretnék` chunk,
вежливые chunks) · vocabulary (еда/напитки) · communicative adequacy.

> Выбран естественный A2 writing task — сообщение другу, а не «заказ официанту» со standalone
> «Nem, köszönöm» (неестественно в письменном контексте). Это даёт **дополнительное evidence для
> `l15_express-likes`** через contrast «Szeretem a… / A … nem szeretem».

---

## 17. EXIT CHECK (objective → evidence)

**Exit Check ≠ старый quiz.** Он доказывает lesson objectives. Минимум: Reading, Grammar, Listening,
Speaking/interaction. Writing — отдельное evidence.

| Objective | Target evidence | evidenceMode |
|---|---|---|
| l15_name-food | Reading (menu) — опознаёт блюда; Speaking — называет заказ | DIRECT |
| l15_form-dative | Controlled Practice (CP1 suffix selection) | DIRECT |
| l15_use-have-construction | Controlled Practice (CP2 nekem van / nincs) | DIRECT |
| l15_express-likes | Guided preference + Writing (сообщение) — «Szeretem a… / Ízlik nekem a…» | PARTIAL (requires review) |
| l15_order-food | Interaction role-play | PARTIAL (requires review) |
| l15_understand-restaurant-dialogue | Listening (аудио-диалог) — comprehension | DIRECT (NONE, пока MP3 отсутствует) |

**Состав Exit Check:**
1. Reading — 3 вопроса к меню (explicit/price/choice);
2. Grammar — 2 fill-gap (dative, nincs);
3. Listening — 4 вопроса к аудио-диалогу;
4. Speaking/interaction — 3 реплики role-play;
5. Writing (отдельно) — сообщение другу по rubric.

---

## 18. CURRENT QUIZ → RETRIEVAL CHECKPOINT

Существующий quiz **НЕ удаляется**. Новая роль — **Retrieval Checkpoint** (память/форма), НЕ proof
of full lesson mastery.

| Q | Вопрос | Решение | Rationale |
|---|---|---|---|
| 1501 | суффикс -nak/-nek | **KEEP** | retrieval формы |
| 1502 | «Nekem van egy autóm» | **KEEP** | retrieval конструкции |
| 1503 | nincs vs nem van | **KEEP** | retrieval отрицания |
| 1504 | «Kérem a számlát» | **KEEP** | retrieval chunk |
| 1505 | «Ajándékot adok anyámnak» | **KEEP** | retrieval дательного |
| 1506 | «в каком уроке притяжат. суффиксы» | **REWRITE** | мета-вопрос о номере урока ≠ retrieval языка → заменить на языковой: «Nekem van egy ___» (ház → házam) |

---

## 19. MASTERY (для L15)

| Уровень | Критерий (RECOMMENDATION) | Источник |
|---|---|---|
| **Practice readiness** | CP1–CP3 ≥80% + vocabulary recognition | controlled practice |
| **Retention evidence** | Retrieval Checkpoint (старый quiz) + SRS «good/easy» | SRS = **memory only** |
| **Mastery evidence** | (1) reading comprehension (menu), (2) correct functional grammar use (dative/nincs), (3) independent restaurant interaction | Exit Check + role-play |

> SRS self-rating ≠ mastery. Один успешный ответ ≠ mastery. Mastery требует comprehension +
> корректного функционального грамматического использования + самостоятельной интеракции.

---

## 20. AUDIO ARCHITECTURE

### 20.1 Переиспользование (FACT)

- Slide MP3 `15.1..15.12` — озвучка слайдов (остаётся).
- TTS по `speak-btn` (`data-speak-text`) — озвучка слов/фраз (остаётся).
- `AudioRecorder` — запись речи ученика (переиспользуется в speaking).

### 20.2 Новые audio assets (NEW REQUIREMENT, файлы сейчас НЕ создавать)

| logical ID | purpose | speaker | script | duration target | transcript visibility |
|---|---|---|---|---|---|
| `l15_listening_restaurant` | listening comprehension | pincér + vendég (2 голоса или 1 с паузами) | см. §12 | 25–35 с | **после ответа** |
| `l15_roleplay_waiter_w3` (optional) | стимул role-play «Sajnos nincs limonádé…» | pincér | «Sajnos nincs limonádé, csak narancslé van.» | 4–6 с | сразу (это стимул, не comprehension) |

> Waiter-стимулы role-play могут быть покрыты TTS (`speak-btn`); отдельный MP3 необязателен.
> Для `l15_listening_restaurant` MP3 обязателен. **Fake URL не создаётся.**

---

## 21. UI REQUIREMENTS

### 21.1 Переиспользование (FACT — существуют)

| Блок | Компонент | Использование в L15 |
|---|---|---|
| слайды/контент | `SlideContent` | слайды Input/Grammar/Vocabulary |
| озвучка слов | `SpeechButton` | слова/фразы TTS |
| запись речи | `AudioRecorder` | speaking activity |
| retrieval checkpoint | `LessonQuizModal` | старый quiz (новая роль) |
| vocabulary cards | `WordTrainerModal` | core vocabulary |
| translation | `TranslationTrainerModal` | перевод t1–t4 (practice) |
| SRS warmup | `ReviewWarmup` | Recall + Spaced Review handoff |

### 21.2 Новые блоки (реализованы в pilot)

| Блок | Назначение | evidenceMode |
|---|---|---|
| `ReadingTask` | menu + вопросы (explicit/price/choice/inference) | DIRECT |
| `ListeningTask` | аудио-стимул + вопросы, transcript после ответа, replay | DIRECT |
| `ControlledPractice` | single-choice / fill-gap / text-input | DIRECT |
| `RolePlay` | изменяющийся диалог с репликами официанта | PARTIAL (requires review) |
| `WritingTask` | функциональный заказ + rubric | PARTIAL (requires review) |
| `ExitCheck` | агрегатор objective→evidence | — |

> Не создавать параллельный UI-framework: новые блоки используют существующую дизайн-систему
> (`SlideContent`, `SpeechButton`, модальные окна) и существующие стили.

---

## 22. DATA MODEL DELTA (CURRENT LIMITATION → REQUIRED TYPE CHANGE)

`types.ts` НЕ менять сейчас. Описывается только требуемое изменение (без `any`).

| Новый activity type | Текущее ограничение (FACT) | Требуемое изменение (NEW REQUIREMENT) |
|---|---|---|
| ReadingTask | `SlideData` не несёт вопросы к тексту | `ReadingTaskData { kind:'reading'; text:string; questions: ReadingQuestion[] }` |
| ListeningTask | нет типа аудио-стимула с транскриптом | `ListeningTaskData { kind:'listening'; assetId:string; transcript:string; questions: ListeningQuestion[] }` |
| ControlledPractice | `QuizQuestion` только single-choice | discriminated union `Exercise { kind:'singleChoice'\|'fillGap'\|'textInput'; … }` |
| RolePlay | нет диалогового типа с ветвлением | `RolePlayData { kind:'rolePlay'; startTurnId:string; turns: RolePlayTurn[] }`; `RolePlayTurn { id:string; speaker:'waiter'\|'learner'; prompt:string; responseMode:'choice'\|'systemCategory'\|'recorded'; next?:string; branches?: RolePlayBranch[] }`; `RolePlayBranch { choice?:string; condition?:string; nextTurnId:string }` |
| WritingTask | нет типа письма | `WritingTaskData { kind:'writing'; prompt:string; rubric: string[] }` |
| ExitCheck | нет агрегатора objective→evidence | `EvidenceKind = 'reading'\|'listening'\|'grammar'\|'vocabulary'\|'speaking'\|'interaction'\|'writing'\|'pronunciation'`; `ExitCheckData { kind:'exitCheck'; checks:{ objectiveId:string; activityId:string; evidenceKind:EvidenceKind }[] }` |

> Все новые типы — discriminated union с полем `kind`; `any` не используется.

**RolePlay branching (NEW REQUIREMENT):**
- `turns[]` недостаточен для заявления «scenario changes». Нужна поддержка branching/state transitions.
- Для pilot допустима **controlled branching**: `responseMode: 'choice'` (ученик выбирает ответ)
  или `'systemCategory'` (система/учитель классифицирует ответ по категориям) → `branches[]` ведут
  к `nextTurnId`.
- **НЕ обещать** автоматическое понимание свободной речи (NLP) — его нет.

**ExitCheck traceability (NEW REQUIREMENT):**
- `evidenceKind` — строгий union `EvidenceKind`, а не `string`.
- Каждая проверка ссылается на `objectiveId` + `activityId` + `evidenceKind` → evidence traceable
  от objective к конкретной activity.

---

## 23. ACCESSIBILITY (NEW REQUIREMENT для реализации)

- keyboard: все интерактивные блоки доступны с клавиатуры (фокус, Enter/Space);
- focus: видимый focus-контур на кнопках/полях;
- audio labels: каждый аудио-контрол имеет `aria-label` («Прослушать диалог», «Записать ответ»);
- transcript availability: transcript listening-задания доступен **после** ответа, с текстовой альтернативой;
- text alternatives: меню/диалоги имеют текстовую версию (не только изображение);
- `aria-live`: объявление результата («Правильно/Попробуйте ещё») и смены реплик role-play.

**Accessibility policy для listening:**
- transcript остаётся **скрыт до обычной попытки прослушивания** (не ломать listening construct
  выдачей transcript обычному пользователю);
- transcript доступен **после submission**;
- prerecorded audio имеет text alternative (transcript/описание);
- если пользователь не может выполнять auditory task → приложение предоставляет
  **accommodation / alternate pathway**;
- **alternate pathway НЕ считается direct listening evidence** (evidenceKind для него ≠ `listening`
  или помечается как adapted).

---

## 24. MOBILE / RESPONSIVE (NEW REQUIREMENT для реализации)

Целевые брейкпоинты: **320 / 375 / 768 / 1024 / 1440**.

| Зона | Требование |
|---|---|
| Menu | на 320–375 — меню остаётся одноколоночным; выравнивание цен читаемое, без горизонтального overflow, минимальный читаемый размер шрифта |
| Audio | кнопки прослушивания ≥44px, прогресс/повтор на одной строке |
| Role-play | реплики официанта сверху, поле ответа снизу; фиксированная кнопка «Ответить» |
| Long answers | textarea авто-рост; на 320–375 — клавиатура не перекрывает поле (scroll-into-view) |
| Exit check | компактная сводка, без горизонтального скролла таблиц |

---

## 25. HUNGARIAN LANGUAGE QA

Все венгерские строки проверены; решения задокументированы.

| Строка | Проверка | Вердикт |
|---|---|---|
| «Jó estét! Mit kér?» | naturalness, register | OK (вежливо, естественно) |
| «Kérek egy gulyáslevest és egy ásványvizet.» | accusative -t, word order | OK |
| «Még valamit?» | chunk | OK |
| «Kér még valamit?» | register, naturalness, **role: официант** | OK |
| «Elnézést, a számlát kérem!» | politeness, accusative `számlát`, **role: ученик** | OK |
| «Rendben, hozom rögtön.» | definite conjugation `hozom` (объект «заказ» подразумевается) | OK, естественно |
| «háznak / kertnek / anyának» | vowel harmony (back/front), suffix selection | OK |
| «nekem…nekik» | dative pronouns | OK |
| «Nekem van egy házam.» | possession (dative + possessive) | OK |
| «Nincs autóm. / Nincsenek gyerekei.» | negation, no `nem van` | OK |
| «Adok egy kávét az anyámnak.» | dative + accusative, order | OK |
| «A könyvet a barátomnak adom.» | definite conjugation `adom` + definite object | OK |
| «Sajnos nincs limonádé, csak narancslé van.» | negation, naturalness, chronology | OK |
| «Mit ajánl?» | register, indefinite | OK — реплика **ученика** официанту |
| «Mit ajánl nekem?» | dative + **role ownership** | OK — реплика **ученика** официанту |
| «Szeretem a gulyáslevest.» | definite conjugation + accusative | OK |
| «A halat nem szeretem.» | word order (focus), negative | OK |
| «Egy salátát szeretnék.» | `szeretnék` chunk + accusative | OK |
| «Egy ásványvizet kérek.» | word order, naturalness | OK |
| «Ízlik nekem a gulyásleves. / Nem ízlik nekem a hal.» | dative experiencer + food subject | OK |
| menu items (Gulyásleves…Narancslé) | collocations, spelling | OK |
| «Mennyibe kerül…?» | collocation | OK |

**Role ownership / chronology / contrast (итог):**
- Официант: «Jó estét!», «Mit kér?», «Még valamit?», «Kér még valamit?», «Sajnos nincs…»,
  «Rendben, hozom rögtön.» — **никогда** не просит счёт.
- Ученик: «Kérek…», «Szeretnék…», «Mit ajánl nekem?», «A számlát kérem.»
- Contrast `Szeretem + accusative` vs `Ízlik nekem + subject` — корректный и естественный.
- Хронология listening: заказ → недоступный напиток → замена → основное блюдо → подтверждение
  (без просьбы счёта).

> Правило: при сомнении выбран более простой естественный вариант (например, «hozom rögtön»
> вместо более сложных форм).

---

## 26. ACCEPTANCE CRITERIA

- [x] все current objectives учтены (§2.1, §17)
- [x] каждый objective имеет direct target evidence (§17)
- [x] menu используется как reading, не listening (§11)
- [x] отдельный listening stimulus существует в spec (§12)
- [x] transcript скрыт до ответа (§12, §20)
- [x] grammar не искусственно притянута к restaurant (§1, §14)
- [x] controlled practice существует (§8)
- [x] guided production существует (§13)
- [x] interaction существует (§14)
- [x] speaking rubric существует (§15)
- [x] functional writing существует (§16)
- [x] exit check существует (§17)
- [x] old quiz имеет новую роль (§18)
- [x] SRS = retention, не mastery (§19)
- [x] audio assets определены (§20)
- [x] no fake URLs (§12, §20)
- [x] no fake scoring (§15)
- [x] Hungarian QA выполнен (§25)

---

## FINAL OUTPUT SUMMARY

**1. Current L15 summary**
12 слайдов (dative → pronouns → nekem van → nincs → adok…-nak → food vocab → restaurant phrases →
dialogue → practice → tasks → foreshadow → summary); 8 inline vocab; 6 inline quiz; 6 map-vocab
(SRS); 4 translations; 12 slide MP3 + TTS. Грамматика корректна, коммуникативная линия слабая:
listening отсутствует, writing отсутствует, interaction нет, `express-likes` без контента.

**2. Problems found**
listening отсутствует; writing отсутствует; interaction нет (только репетиция); objective
`l15_express-likes` без реализующего контента (`szeretem`/`ízlik` не в слайдах); quiz — только
single-choice recognition; SRS-словарь (map) и inline-словарь не связаны; нет comprehension-вопросов.

**3. Target lesson architecture**
Integrated Communication (archetype 6): Recall → Context → Input → Comprehension → Grammar A →
Controlled → Vocabulary → Reading → Listening → Guided → Interaction → Writing → Exit → Feedback →
Spaced Review. Сгруппировано в 7 экранов + SRS.

**4. Exact activities**
Recall (5 mixed), Input-диалог + comprehension (3), Grammar block, Controlled (CP1–CP3), Vocabulary,
Reading menu + 4 вопроса, Listening dialogue + 4 вопроса, Guided production (5 шагов: + preference),
Role-play (5 реплик официанта + twist), Speaking (record/playback/retry/submit + rubric),
Writing (сообщение другу + rubric), Exit check (reading/grammar/listening/speaking + writing).

**5. Exact Hungarian content**
См. §5–§16: recall items, input-диалог, menu, listening script, grammar examples, CP-задания,
guided prompts, role-play сценарий, writing model. Всё проверено (§25).

**6. Required component changes (будущая фаза, не сейчас)**
Новые: `ReadingTask`, `ListeningTask`, `ControlledPractice`, `RolePlay`, `WritingTask`, `ExitCheck`.
Переиспользуются: `SlideContent`, `SpeechButton`, `AudioRecorder`, `LessonQuizModal`,
`WordTrainerModal`, `TranslationTrainerModal`, `ReviewWarmup`.

**7. Required type changes (будущая фаза, не сейчас)**
Discriminated unions для Reading/Listening/Controlled/RolePlay/Writing/ExitCheck (§22); без `any`.

**8. Required audio assets**
`l15_listening_restaurant` (MP3, 25–35 с, transcript после ответа) — обязателен;
`l15_roleplay_waiter_w3` — опционален (можно TTS).

**9. Objective → Evidence matrix**
См. §17: name-food → Reading+Speaking; form-dative → CP1; use-have-construction → CP2;
express-likes → Guided preference + Writing; order-food → Role-play;
understand-restaurant-dialogue → Listening (NONE до публикации MP3).

**10. Risks**
Дательный притянут искусственно (митигировано §1/§14); числа цен >100 за пределами L5 (митигировано
§11 — пассивное чтение); «szeretnék» — условное как chunk (митигировано §10 — не разбираем);
AudioRecorder переиспользован, но submit/self-review требует новой обёртки (§15).

**11. Implementation files for NEXT phase**
`src/data/lessons/lesson15.ts` (новые activity-данные), `src/types.ts` (новые типы), новые
components (`ReadingTask`, `ListeningTask`, `ControlledPractice`, `RolePlay`, `WritingTask`,
`ExitCheck`), `src/utils/audioRegistry.ts` / `wordAudioMap.ts` (новый asset `l15_listening_restaurant`),
`src/utils/lessonQuizAndVocab.ts` (rewrite 1506, связать SRS с inline-словарём). **Код сейчас не меняется.**

---

## FINAL PATCH SUMMARY

**Status: APPROVED FOR PILOT IMPLEMENTATION** (все 10 correction groups закрыты).

1. **Dative + food preference:** добавлен contrast `Szeretem + accusative` vs `Ízlik nekem + subject`
   (communicative chunk + recycling accusative L7 + dative L15). Обновлено: §1 (точки интеграции),
   §2.1 (express-likes), §7 (USE 3), §13 (шаг Preference), §17 (evidence express-likes).
2. **Role-play language:** удалена реплика официанта «A számlát kérem?»; заменена на
   «Kér még valamit?» → learner: «Nem, köszönöm. A számlát kérem.». «Mit ajánl nekem?» зафиксирована
   как реплика **ученика** официанту (§14).
3. **Listening scenario:** удалена просьба счёта; диалог заканчивается подтверждением заказа
   (order → недоступный напиток → замена → основное блюдо → подтверждение). «A számlát kérem»
   перенесено в role-play (§12).
4. **Vegetarian reading:** выбран вариант A — в меню добавлена легенда `🌱 = vegetáriánus` и
   помечены позиции; вопрос 3 отвечается прямо по меню, без внешних знаний (§11).
5. **Vocabulary rebalance:** §9 переразбит на A. FOOD CORE, B. FUNCTIONAL CORE (kér, számla, étlap,
   ital, főétel), C. SUPPORTING GRAMMAR (+ szeret/ízlik), D. PASSIVE MENU, E. COLLOCATIONS; у каждой
   лексемы role / active-passive / existing-new / first use / production requirement.
6. **Writing task:** заменён на сообщение другу («что любишь/не любишь, что хотел бы заказать»);
   model использует только известные/chunked формы; даёт evidence для `l15_express-likes` (§16).
7. **RolePlay data model:** `turns[]` заменён на ветвящуюся модель `RolePlayTurn`/`RolePlayBranch`
   (responseMode: choice / systemCategory / recorded); controlled branching; без NLP-обещаний (§22).
8. **Exit check typing:** `evidenceKind: string` заменён на typed union `EvidenceKind` (8 значений);
   check ссылается на `objectiveId` + `activityId` + `evidenceKind` (§22).
9. **Accessibility listening:** transcript скрыт до обычной попытки; доступен после submission;
   prerecorded audio имеет text alternative; предусмотрен alternate pathway, который **не** считается
   direct listening evidence (§23).
10. **Mobile:** убран «крупный тач-таргет для цен»; заменено на readable price alignment, no
    horizontal overflow, minimum readable font, одноколоночное меню на узких экранах (§24).
11. **QA:** §25 расширен строками для «Mit ajánl?», «Mit ajánl nekem?», «Kér még valamit?»,
    «A számlát kérem.», «Ízlik nekem…», «Szeretem…» + итог по role ownership / chronology / contrast.
12. **Status:** APPROVED FOR PILOT IMPLEMENTATION; FINAL PATCH SUMMARY добавлен в конец документа.

**Код, `lesson15.ts`, components, `types.ts`, audio и SRS не изменялись.**

---

## FREEZE NOTE (после pilot-реализации)

**L15 PILOT STATUS: FROZEN / APPROVED AS MODEL LESSON.** Архитектура L15 больше не переписывается.

Отличия реализованного pilot от первоначальной spec (зафиксированы как source-of-truth sync):

1. **Speaking evidence honesty (§15, RolePlay):** автоматическая оценка речи отсутствует, поэтому
   `finish()` role-play выставляет `completed: true, evidenceMode: 'partial', passed: false,
   recordingCompleted: true`; `selfReviewed` **не** фабрикуется (explicit self-review rubric в
   role-play нет). Exit Check отображает PARTIAL completed как «требует проверки», а не «met».
2. **Listening scenario (§12):** реализован сценарий с limonádé («Sajnos nincs limonádé, csak
   narancslé van.») вместо ásványvíz/szénsavmentes; вопросы соответствуют реализованному коду.
   `l15_listening_restaurant` MP3 по-прежнему отсутствует → evidence `NONE` до публикации.
3. **Objectives (§17):** `l15_order-food` = speaking/interaction (ролевая игра), listening
   **не** является evidence для order-food; добавлен `l15_understand-restaurant-dialogue`
   (listening comprehension) — итого 6 objectives в L15.
4. **Writing (§16):** model answer использует «Egy ásványvizet kérek.» (вместо
   «Inni ásványvizet kérek.»).
