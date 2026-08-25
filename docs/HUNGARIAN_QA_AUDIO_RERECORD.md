# Hungarian QA: slide narration rerecord list

Status after the content patch and the completed rerecord pass:

- Listening audio: **SYNCHRONIZED**
- Word audio: **UNCHANGED**
- Slide narration: **22 RERECORDED ASSETS SYNCHRONIZED; RELEASE FOLLOW-UP REQUIRED FOR `1.11.mp3`**

The list was derived by comparing the pre-patch and post-patch learner-facing slide fields (`title`, `subtitle`, and `body`), then intersecting the changed slide keys with `PRESENT_SLIDE_AUDIO` in `src/data/slideAudioManifest.ts` and the physical files in `public/audio`. Quiz and activity data are not treated as slide narration text.

All 22 MP3 files listed below were subsequently rerecorded from the corrected
slide text. `src/data/slideAudioManifest.ts` was regenerated from their current
content hashes, and the slide-audio validation confirms that all referenced
narration files are present.

| Lesson | Slide | Filename | Old learner-facing text (changed segment) | New learner-facing text (changed segment) | Reason |
|---:|---:|---|---|---|---|
| 7 | 10 | `7.10.mp3` | «Отдельная запись … ещё не опубликована, поэтому аудирование пока недоступно.» | «Прослушайте запись и ответьте на вопросы по содержанию.» | Published Listening warning was removed. |
| 8 | 10 | `8.10.mp3` | «Отдельная запись … ещё не опубликована, поэтому аудирование пока недоступно.» | «Прослушайте запись и выберите ответы по содержанию.» | Published Listening warning was removed. |
| 10 | 10 | `10.10.mp3` | «Отдельная запись … ещё не опубликована, поэтому аудирование пока недоступно.» | «Прослушайте запись и выполните задание на понимание.» | Published Listening warning was removed. |
| 12 | 7 | `12.7.mp3` | «Определи отношение… Отдельная запись … ещё не опубликована…» | «Прослушай короткий разговор и определи отношение, цель и источник.» | Published Listening warning and task wording changed. |
| 13 | 8 | `13.8.mp3` | «Отличи сегодняшнее действие… Отдельная запись … ещё не опубликована…» | «Прослушай запись, отличи сегодняшнее действие от вчерашнего и услышь маркер времени.» | Published Listening warning and task wording changed. |
| 14 | 7 | `14.7.mp3` | «Отдельная запись для аудирования ещё не опубликована, поэтому задание пока недоступно.» | «Прослушай разговор и ответь на вопросы, затем выполни задание на говорение.» | Published Listening warning was replaced with the current task. |
| 17 | 7 | `17.7.mp3` | Closing warning that the recording was not published. | Warning removed; the existing listening guidance remains. | Published Listening warning was stale. |
| 18 | 8 | `18.8.mp3` | Closing warning that the recording was not published. | Warning removed; the existing modal-listening guidance remains. | Published Listening warning was stale. |
| 19 | 9 | `19.9.mp3` | «В записи прозвучит…» plus an unavailable-recording warning. | «Прослушай короткий рассказ…» with no unavailable warning. | Published Listening wording changed. |
| 20 | 2 | `20.2.mp3` | Absolute final-consonant algorithm for choosing `-t` versus `-ott/-ett/-ött`. | The model depends on the verb and stem type; forms should be learned with the verb. | The old rule was linguistically overbroad. |
| 21 | 3 | `21.3.mp3` | «Придаточные предложения с hogy» presented as a general definite-conjugation trigger. | Narrow guidance for object content clauses after a suitable transitive verb. | Avoids a false universal rule. |
| 21 | 6 | `21.6.mp3` | Universal suffix claim and `Mosakszom.` | The studied verbs are intransitive in these meanings; `Mosakodom.` | Corrects both scope and the taught form. |
| 21 | 7 | `21.7.mp3` | Claimed that `hallgatni` had no direct object and that a subordinate clause itself caused the definite form. | `zenét` is the indefinite direct object of `hallgatni`; the embedded question supplies object content in the second example. | Corrects syntactic explanations. |
| 22 | 5 | `22.5.mp3` | `legyünk!` → «будемте!» | `legyünk!` → «давайте будем!» | Corrects the Russian translation. |
| 23 | 2 | `23.2.mp3` | Claimed `kérnék` was already seen in L15. | L15 had `kérek`; the slide now compares `kérek → kérnék`. | Corrects the lesson reference. |
| 24 | 6 | `24.6.mp3` | Suggested that a subordinate clause/question/negation rule itself separates the prefix. | A subordinate clause alone does not force separation; its internal focus/question/negation rules apply. | Narrows the igekötő rule. |
| 25 | 2 | `25.2.mp3` | Referred to L9 for the nominal predicate and claimed `-ként` came from L16. | Refers to L2 for the nominal-predicate pattern and introduces `-ként` locally as «в качестве / в роли». | Corrects two lesson references. |
| 26 | 2 | `26.2.mp3` | Referred to L15 for possessive body-part forms. | Refers to the possessive forms from L8. | Corrects the lesson reference. |
| 26 | 7 | `26.7.mp3` | Claimed temporal `-ig` came from L11. | Explains `három napig` locally as «в течение трёх дней». | Removes a false lesson reference. |
| 27 | 3 | `27.3.mp3` | `vágány` → «путь / платформа». | `vágány` → «железнодорожный путь / номер пути». | Corrects the Russian meaning. |
| 28 | 3 | `28.3.mp3` | Past `-t / -tt`; conditional only `-na/-ne`. | Past `-t / -ott/-ett/-ött` by verb model; conditional `-na/-ne/-ná/-né` plus personal endings. | Synchronizes the summary with L20/L23. |
| 28 | 6 | `28.6.mp3` | Imprecise negative/modal igekötő wording. | Neutral negative places the separated prefix after the finite verb; modal examples are `El akarok menni.` / `Nem akarok elmenni.` | Corrects word-order guidance. |

## Changed slide text that does not require rerecording

| Lesson | Slide | Filename | Change | Decision |
|---:|---:|---|---|---|
| 27 | 4 | `27.4.mp3` | Visible `Retúr jegyet kérek.` was corrected to `Retúrjegyet kérek.`; `data-speak-text` was already `Retúrjegyet kérek.` | No rerecord: this is an orthographic spacing correction and the spoken output is unchanged. |

The 22 listed narration assets are now synchronized with the updated slide text.

## Release follow-up: `1.11.mp3`

The stale L1 summary sentence was corrected to match the published state of all
three Listening recordings. The existing slide narration no longer matches the
learner-facing text, so `public/audio/1.11.mp3` is explicitly marked **RERECORD
REQUIRED**. This change intentionally does not edit, replace, or generate that
MP3; the narration manifest remains unchanged until the real rerecord is added.
