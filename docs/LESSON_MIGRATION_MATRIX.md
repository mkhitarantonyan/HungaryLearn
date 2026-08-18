# HungaryLearn lesson migration matrix

Status: FROZEN / APPROVED FOR IMPLEMENTATION

Scope: all 28 lessons audited; L15 is the frozen reference model and is excluded from migration edits

Planning baseline: current workspace as inspected on 2026-08-15

## 1. Baseline verification and source-of-truth decisions

The audit covered CURRICULUM_AUDIT.md, CURRICULUM_BLUEPRINT.md, MODEL_LESSON_L15_SPEC.md, all lesson1.ts through lesson28.ts modules, lesson translations, vocabulary/SRS utilities, rendering and activity components, validation scripts, lesson tests, quizzes, tasks, and the current audio manifest.

Verified baseline:

- There are 28 lesson modules and 139 objective records.
- L15 has six objectives and is FINAL FROZEN / APPROVED MODEL LESSON.
- The remaining migration scope is 27 lessons and 133 objectives.
- L15 alone currently uses the generic activity architecture: ReadingTask, ListeningTask, ControlledPractice, RolePlay, WritingTask, and ExitCheck.
- The referenced L15 asset l15_listening_restaurant is still marked missing; therefore its listening objective still has no direct listening evidence. This is a dependency to resolve without refactoring L15.
- Session state and finished ActivityEvidence are distinct. A recording, self-rating, narration, read-aloud, activity completion, or whole-quiz completion is not proof of mastery.
- Existing quizzes remain retrieval checkpoints. A narrowly aligned, reliably auto-checked answer may contribute direct evidence, but a quiz badge or total score does not establish every lesson objective.
- Inline lesson vocabulary and LESSON_VOCABULARY_MAP remain separate systems. SRS migration is out of scope for this phase.

Workspace contradictions resolved for this plan:

1. CURRICULUM_AUDIT.md describes an earlier state in which all 28 lessons lacked listening and L15 had five objectives. Current lesson data, tests, the blueprint, and the frozen L15 specification show six L15 objectives and the generic activity pilot. The current files and frozen L15 specification take precedence; the older audit is treated as historical evidence.
2. The older audit counts explicit writing much more narrowly than the current lesson modules. Many current lessons now contain homework or free-response prompts. Those prompts count as practice only: they do not capture or qualify evidence and are classified PARTIAL.
3. LESSONS_META titles for L2-L9 do not match the corresponding current lesson modules. Migration must use lesson module IDs, objectives, and actual titles, not stale display metadata.
4. L15 contains a structurally valid ListeningTask but its MP3 is missing. No narration or TTS fallback may be counted as listening mastery.

No change to L15, source code, tests, scripts, translations, audio, or the curriculum blueprint is authorized by this plan.

## 2. Audit totals and evidence rules

| Metric | Result |
|---|---:|
| Lessons reviewed | 28 |
| Lessons in migration scope | 27 |
| Objectives reviewed | 139 |
| Frozen L15 objectives | 6 |
| Non-L15 objectives in the objective matrix | 133 |
| Current non-L15 DIRECT objectives | 0 |
| Current non-L15 PARTIAL objectives | 123 |
| Current non-L15 NONE objectives | 10 |
| Target non-L15 overall DIRECT objectives | 63 |
| Target non-L15 overall PARTIAL objectives | 70 |
| P0 lessons | 14 |
| P1 lessons | 13 |
| P2 lessons | 0 |
| LOW-complexity lessons | 1 |
| MEDIUM-complexity lessons | 2 |
| HIGH-complexity lessons | 24 |

Evidence vocabulary used throughout:

- EXPOSURE: the learner can see or hear the material, including slide narration or TTS.
- PRACTICE: the learner attempts a task, but the result is not reliably judged.
- RETRIEVAL: the learner recalls material in a checkpoint or quiz.
- DIRECT: the task measures the stated objective and the response is reliably auto-checked or reviewed by a qualified evaluator.
- PARTIAL: there is meaningful performance evidence, but it is incomplete, indirect, unqualified, or covers only part of a mixed objective.
- NONE: no valid evidence exists for the objective as stated.

For a mixed objective, the matrix uses PARTIAL when one claimed skill has valid practice but another claimed skill has NONE. The target remains PARTIAL when open speaking or writing is collected without qualified review. This prevents a directly scored listening question from silently upgrading an unreviewed speaking performance.

In the Objective Evidence Matrix, the Target column is the overall objective status. Composite rows use the notation PARTIAL: DIRECT(skill) + PARTIAL(skill). The component before the colon records what is genuinely qualified; the overall status remains PARTIAL until every skill explicitly claimed by the objective has qualified evidence. A narrow grammar or receptive objective may remain DIRECT when its entire stated performance is reliably measured by constrained tasks.

## 3. Reference model and migration guardrails

L15 is a model for evidence flow, not a literal slide template. Each migration should reuse these architectural principles:

1. Preserve the lesson ID, objective IDs, learning sequence, and approved curriculum boundary.
2. Map each objective to one or more purposeful activities and to an ExitCheck reference.
3. Keep runtime progress separate from completed evidence.
4. Use ListeningTask only with a published, pedagogically valid recording when listening evidence is claimed.
5. Use ControlledPractice for narrow answers that can be checked reliably.
6. Treat RolePlay, AudioRecorder, and open WritingTask as PARTIAL unless a qualified human or system reviews the performance.
7. Keep the existing quiz as a retrieval checkpoint after practice; clean only defective questions.
8. Do not migrate SRS, rename objectives, split lesson IDs, or copy restaurant-specific L15 content.
9. L12, L20, and L24 remain single lesson IDs but must be presented as two pedagogical blocks.
10. Preserve the definite-conjugation spiral: L7 preview, L13 contrast, L20 full past treatment, L21 consolidation.

Two archetype changes are proposed:

- L21: current Blueprint Archetype 2, Grammar Introduction; target Archetype 3, Grammar + Communication. The lesson is consolidation and its apply-conjugation objective requires contextual oral and written choice, not another form-only introduction.
- L24: current Blueprint Archetype 2 in two blocks; target Archetype 3 in two blocks. All five objectives culminate in connecting ideas, expressing cause, and expressing contrast, so connected production is essential.

All other Blueprint archetype assignments are retained.

## 4. Master lesson migration matrix

Allowed activity decisions are used verbatim: REQUIRED, OPTIONAL, NOT NEEDED, and EXISTING / KEEP.

| Lesson | Actual title | Blueprint archetype: current -> target | Main Can-Do | Current strengths | Current gaps | ReadingTask | ListeningTask | Controlled Practice | Speaking / Recording | RolePlay | WritingTask | ExitCheck | Pronunciation / phonology | Current objective evidence | Target evidence | Existing quiz role | New audio required? | Vocabulary action | Priority | Complexity | Main implementation note |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| L1 | Üdvözöllek! | 1 -> 1 | Distinguish core Hungarian sound contrasts and read unfamiliar words aloud | Strong alphabet, vowel-length, stress, and recording foundation | No real sound discrimination; legacy gy/ty/ny/ly grouping is misleading; a/á and e/é are treated too much as duration-only; recording is not evaluated | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | NOT NEEDED | NOT NEEDED | REQUIRED | EXISTING / KEEP | 3 PARTIAL, 2 NONE | Direct discrimination plus partial production | Retrieval Checkpoint | Yes | KEEP | P0 | HIGH | Teach gy /ɟ/, ty /c/, ny /ɲ/; teach j and ly as /j/ in modern standard Hungarian; contrast vowel quality as well as length; recording completion never proves pronunciation |
| L2 | Köszönés & lenni | 6 light A0 -> 6 light A0 | Greet, introduce oneself, and exchange basic personal information | Useful formulae, lenni paradigm, short dialogue | No real listening or qualified interaction evidence; chunks need clearer status | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct forms/listening plus partial interaction | Retrieval Checkpoint | Yes | ADD CHUNKS; ADD FUNCTIONAL CORE | P1 | HIGH | Keep country/profession forms as chunks; do not imply taught case paradigms |
| L3 | Főnév, névelő, többes szám | 2 -> 2 | Choose a/az and form basic plurals in short phrases | Clear article/plural rule and no-number plural rule | Sparse a/az discrimination; written output is uncollected; duplicate quiz options | REQUIRED | NOT NEEDED | REQUIRED | OPTIONAL | NOT NEEDED | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct controlled and reading evidence | Retrieval Checkpoint | No | REBALANCE; CATEGORY CLEANUP | P1 | LOW | Add auto-checked a/az and plural input; classify endings as morphology, not lexemes |
| L4 | Jelen idő | 2 -> 2 | Conjugate common present-tense verbs and form simple questions | Useful paradigm, negation, questions, and -ik preview | Sentence production unscored; no aural recognition | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct forms/recognition plus partial speech | Retrieval Checkpoint | Yes | REBALANCE; ADD FUNCTIONAL CORE | P1 | HIGH | Mark -ik as preview and connect forward to L14 |
| L5 | Számok, idő, napok | 6 -> 6 | Understand and state numbers, dates, days, and times in a simple exchange | Functional number/time/date coverage and existing writing prompts | No number/time audio discrimination or dictation; dialogue performance unqualified | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL with listening subskills NONE | Direct listening/controlled evidence plus partial dialogue | Retrieval Checkpoint | Yes | ADD FUNCTIONAL CORE; ADD CHUNKS | P0 | HIGH | Use short recorded prompts for numbers, dates, and time; clarify ordinal/date conventions |
| L6 | A0 összefoglaló | 7 -> 7 | Combine A0 sound, form, number, and personal-introduction skills | Broad review, self-rating, writing, and phone recording | Review and assessment blur; no mini-listening; self-rating is not mastery | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | 5 PARTIAL with listening gaps | Direct selected skills plus partial integrated production | Retrieval Checkpoint | Yes | REBALANCE; CATEGORY CLEANUP | P0 | HIGH | Build a low-stakes review circuit, not a mock exam; preserve reflection separately |
| L7 | A tárgyeset | 2 -> 2 | Recognize and use the accusative in basic object sentences | Good suffix introduction and definite-conjugation preview | No aural nominative/accusative evidence; Q703 is linguistically wrong | REQUIRED | REQUIRED | REQUIRED | REQUIRED | NOT NEEDED | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL, 1 NONE | Direct form/listening evidence plus partial speech | Retrieval Checkpoint | Yes | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | P0 | HIGH | Correct quiz later; preserve L7 as preview and use Látlak téged only after the -lak/-lek scope is explained |
| L8 | A család & Birtokos ragozás | 3 -> 3 | Identify possession and describe a family in four or five sentences | Natural family context and useful possessive table | No owner-identification audio; free description unreviewed; plural possession creeps into quiz | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct forms/listening plus partial family description | Retrieval Checkpoint | Yes | ADD FUNCTIONAL CORE; ADD CHUNKS | P1 | HIGH | Keep productive scope singular unless plural possession is explicitly labeled enrichment |
| L9 | Melléknevek & Összehasonlítás | 3 -> 3 | Compare people, places, or objects with basic degree forms | Concrete examples, colors, comparative and superlative forms | Production is unscored and vocabulary recycling is thin | OPTIONAL | NOT NEEDED | REQUIRED | REQUIRED | NOT NEEDED | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct forms plus partial comparison production | Retrieval Checkpoint | No | KEEP; ADD FUNCTIONAL CORE | P1 | MEDIUM | Add constrained comparisons before the open comparison |
| L10 | Helyhatározók I | 2 -> 2 | Choose and use the three inner-location cases | Strong three-dimensional case model and contrast table | No scored case choice, map task, or real listening; one quiz distractor is ambiguous | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct case selection/listening plus partial speech | Retrieval Checkpoint | Yes | REBALANCE; ADD CHUNKS | P1 | HIGH | Keep source-location-goal contrast constant across every activity |
| L11 | Helyhatározók II | 2 -> 2 | Choose and use the three surface-location cases | Clear parallel with L10 and useful city examples | Historical explanation and quiz wording need QA; production unqualified | REQUIRED | NOT NEEDED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct selection/reading plus partial production | Retrieval Checkpoint | No | REBALANCE; ADD CHUNKS | P1 | MEDIUM | Test meaning in context rather than whether a grammatical sentence belongs to a named group |
| L12 | Helyhatározók III | 2, two blocks -> 2, two blocks | Use near-location cases, then selected postpositions, without mixing the systems | Rich 3x3 paradigm, postpositions, and pronominal forms | Severe load; cases and postpositions compete; no aural location task | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL with listening subskill NONE | Direct block-level evidence plus partial dialogue | Retrieval Checkpoint | Yes | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | P0 | HIGH | Block A: -nál/-hoz/-tól; Block B: selected postpositions; separate ExitCheck items |
| L13 | A múlt idő | 3 -> 3 | Form introductory past forms and give a short account of yesterday | Past-tense entry, volt, reading, and productive prompts | Boundary with L20 is unclear; no tense listening; duplicate quiz distractors | REQUIRED | REQUIRED | REQUIRED | REQUIRED | NOT NEEDED | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL | Direct introductory forms/listening plus partial mini-story | Retrieval Checkpoint | Yes | REBALANCE; ADD CHUNKS | P1 | HIGH | Label definite-past material as preview and reserve full contrast/irregular system for L20 |
| L14 | Napi rutin | 3 -> 3 | Describe a daily routine with time expressions and common -ik verbs | Strong routine sequence, rewriting, questions, and existing recording | Recorded answers and homework are unreviewed; no routine audio comprehension | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL | Direct form/listening plus partial routine narrative | Retrieval Checkpoint | Yes | KEEP; ADD CHUNKS | P1 | HIGH | Make the L4 -> L14 -ik spiral explicit, including eszik as an irregular high-frequency item |
| L16 | Vásárlás és eszközhatározó | 3 -> 3 | Shop for an item and use -val/-vel forms in context | Transactional setting, money language, and assimilation explanation | No published shopping audio; pronunciation and role performance unqualified | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | 5 PARTIAL with listening subskills NONE | Direct listening/forms plus partial roleplay | Retrieval Checkpoint | Yes | REBALANCE; ADD FUNCTIONAL CORE; ADD CHUNKS | P1 | HIGH | Closest non-frozen reuse of the L15 integrated flow; add consonant-assimilation contrast work |
| L17 | Időjárás és évszakok | 6 -> 6 | Understand a short forecast and describe or compare weather | Useful weather/seasons domain and comparison prompts | No forecast recording or comprehension questions; output unreviewed | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | NOT NEEDED | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL, 1 NONE | Direct forecast/forms plus partial report | Retrieval Checkpoint | Yes | ADD FUNCTIONAL CORE; ADD PASSIVE INPUT | P0 | HIGH | Use one short forecast with gist, day, temperature, and detail questions |
| L18 | Módbeli segédigék | 3 -> 3 | Express ability, necessity, and desire with the correct infinitive pattern | Broad modal inventory and a personal-infinitive explanation | Paradigm scope is under-controlled; no modal listening; morphology dominates vocabulary | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL, 1 NONE | Direct form/listening plus partial functional production | Retrieval Checkpoint | Yes | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | P0 | HIGH | Teach personal infinitive forms explicitly in a bounded paradigm before open use |
| L19 | A jövő idő | 3 -> 3 | Distinguish plans and predictions and form future constructions | Useful plans/predictions frame and fog paradigm | No aural tense distinction; definite fog forms need preview labeling | REQUIRED | REQUIRED | REQUIRED | REQUIRED | NOT NEEDED | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct tense/form evidence plus partial plans and predictions | Retrieval Checkpoint | Yes | ADD FUNCTIONAL CORE; ADD CHUNKS | P1 | HIGH | Contrast present-for-plans and fog future in one timeline activity |
| L20 | A múlt idő | 2, two blocks -> 2, two blocks | Build regular and irregular past forms, then narrate a short past event | Full paradigms, irregular forms, and narrative prompts | High structural load; no comprehension evidence; open narrative unreviewed | REQUIRED | REQUIRED | REQUIRED | REQUIRED | NOT NEEDED | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL, 1 NONE | Direct forms/comprehension plus partial narrative | Retrieval Checkpoint | Yes | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | P0 | HIGH | Block A: regular/irregular formation; Block B: definite/indefinite past in narrative context |
| L21 | Alanyi és tárgyas ragozás II | 2 -> 3 | Choose conjugation from context and use object pronouns and -lak/-lek | Important consolidation of conjugation, object pronouns, and -lak/-lek | Still form-heavy; no aural context; connected application is unqualified | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL, 1 NONE | Direct contextual choices plus partial dialogue | Retrieval Checkpoint | Yes | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | P0 | HIGH | Resolve the L7/L13/L20 spiral here; teach Látlak téged as the explicit contrast to L7's defective quiz |
| L22 | A felszólító mód | 3 -> 3 | Understand instructions and give direct or polite requests | Rich imperative forms, register contrasts, recipe and request prompts | No real command audio/response; polite request performance unqualified; weak quiz distractor | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | 4 PARTIAL, 1 NONE | Direct command/form evidence plus partial requests | Retrieval Checkpoint | Yes | REBALANCE; ADD CHUNKS | P0 | HIGH | Separate form accuracy, command comprehension, and register-appropriate interaction |
| L23 | A feltételes mód | 3 -> 3 | Form conditionals and use them for wishes and polite hypotheticals | Useful wishes, lenne, if-clauses, and productive prompts | No real listening or interaction evidence; duplicate quiz options | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct forms/comprehension plus partial interaction | Retrieval Checkpoint | Yes | REBALANCE; ADD CHUNKS | P1 | HIGH | Move from form choice to one constrained request exchange and one open hypothetical |
| L24 | Összetett mondatok | 2, two blocks -> 3, two blocks | Connect ideas with cause and contrast in speech and writing | Broad conjunction set and many combination prompts | High load; no true reading comprehension or collected connected production | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | REQUIRED | 5 PARTIAL | Direct connector choices plus partial connected production | Retrieval Checkpoint | No | CATEGORY CLEANUP; ADD FUNCTIONAL CORE | P0 | HIGH | Block A: coordination/cause; Block B: contrast/subordination; use paragraph-level evidence |
| L25 | Munka és karrier | 6 -> 6 | Describe work and skills, write a short profile, and handle an interview | Authentic domain, CV headings, languages and skills | Interview is not interactive; CV is homework only; vocabulary is too thin | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL | Direct comprehension/vocabulary plus partial CV and interview | Retrieval Checkpoint | Yes | ADD FUNCTIONAL CORE; ADD CHUNKS; ADD PASSIVE INPUT | P1 | HIGH | Use a two-speaker interview and a structured profile form before open roleplay |
| L26 | Egészség és orvos | 6 -> 6 | Explain symptoms and understand basic medical or pharmacy advice | Useful doctor/pharmacy language and an existing legacy roleplay | No real advice audio; roleplay and symptom writing produce no qualified evidence; ambiguous quiz | REQUIRED | REQUIRED | REQUIRED | EXISTING / KEEP | EXISTING / KEEP | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL, 1 NONE | Direct advice/vocabulary plus partial roleplay | Retrieval Checkpoint | Yes | ADD FUNCTIONAL CORE; ADD CHUNKS; ADD PASSIVE INPUT | P0 | HIGH | Preserve the scenario but migrate it to evidence-aware RolePlay; avoid diagnosing beyond lesson language |
| L27 | Utazás és közlekedés | 6 -> 6 | Buy tickets, book a room, and ask for directions in short exchanges | Strong station, hotel, and directions scenarios | Only a legacy hotel roleplay; no audio; vocabulary and response coverage are thin | REQUIRED | REQUIRED | REQUIRED | EXISTING / KEEP | EXISTING / KEEP | REQUIRED | REQUIRED | OPTIONAL | 5 PARTIAL with listening subskills NONE | Direct comprehension plus partial transactional roleplays | Retrieval Checkpoint | Yes | ADD FUNCTIONAL CORE; ADD CHUNKS; ADD PASSIVE INPUT | P0 | HIGH | Reuse one roleplay shell across ticket, hotel, and directions with scenario-specific criteria |
| L28 | A B1 szint összefoglalása | 8 -> 8 | Integrate B1 reading, listening, form choice, speaking, and writing in a low-stakes capstone | Honest completion language and broad grammar map | Grammar-heavy final task; no integrated activities; self-assessment is not evidenced; untaught prefix quiz item | REQUIRED | REQUIRED | REQUIRED | REQUIRED | OPTIONAL | REQUIRED | REQUIRED | OPTIONAL | 4 PARTIAL, 1 NONE | Direct receptive/form components plus partial productive capstone | Retrieval Checkpoint | Yes | REBALANCE; CATEGORY CLEANUP; ADD PASSIVE INPUT | P0 | HIGH | Build a capstone portfolio, not an exam; report evidence by objective and retain honest completion wording |

## 5. Objective Evidence Matrix

This is the complete non-L15 inventory: 133 rows, one per objective. Primary skill is the skill that determines the evidence design; mixed skills remain visible in the objective text and target activity. Current DIRECT is intentionally zero because legacy tasks do not create qualified ActivityEvidence and the existing quizzes sample only narrow retrieval. Target DIRECT means the stated criterion can be auto-checked reliably. Target PARTIAL means open production is collected but still requires qualified review for mastery.

### A0 objectives: L1-L6

| Lesson | Objective ID | Objective text | Primary skill | Current activity / evidence | Current | Target activity | Target | Completion criterion |
|---|---|---|---|---|---|---|---|---|
| L1 | l1_distinguish-s-sz | Различать на слух и при чтении шипящие согласные s [ʃ] и sz [s] в словах. | Listening | Explanation, repetition, text quiz; no audio-choice task | NONE | ListeningTask l1_listening_s_sz plus letter-choice ControlledPractice | DIRECT | At least 8/10 unseen tokens identified, including both sounds |
| L1 | l1_distinguish-soft-consonants | Произносить мягкие согласные gy, ty, ny, ly и отличать их от твёрдых аналогов. | Pronunciation | Repeat/card practice and recorder; legacy wording wrongly groups ly with gy/ty/ny; no correctness judgement | PARTIAL | Corrected discrimination for gy /ɟ/, ty /c/, ny /ɲ/, and j~ly /j/, plus guided AudioRecorder; explicitly distinguish this from Russian palatalization | PARTIAL: DIRECT(listening) + PARTIAL(pronunciation) | Discrimination at least 8/10; gy/ty/ny and j/ly categories correct; recorded production awaits review |
| L1 | l1_distinguish-long-vowels | Различать долгие и краткие гласные (a/á, e/é, o/ó, ö/ő, u/ú, ü/ű) на слух и в написании. | Listening | Explanation and repetition; no real minimal-pair evidence; a/á and e/é are inadequately framed as duration-only | NONE | ListeningTask l1_listening_vowel_length plus orthographic choice, explicitly testing quality as well as duration for a/á and e/é | DIRECT | At least 8/10 vowel contrasts identified and written, including quality-sensitive a/á and e/é items |
| L1 | l1_apply-stress | Определять ударение (всегда на первом слоге) и произносить слова с ударением на первом слоге. | Pronunciation | Rule-recall quiz and read-aloud recording | PARTIAL | ControlledPractice on the initial-stress rule, model audio as exposure/reference, and recorded five-word read-aloud | PARTIAL: DIRECT(rule knowledge) + PARTIAL(pronunciation) | Initial-stress rule selected correctly; oral realization awaits qualified review |
| L1 | l1_read-aloud | Читать вслух простые венгерские слова по буквенно-звуковым правилам. | Reading / pronunciation | Existing sentence recording without evaluation | PARTIAL | AudioRecorder with five unseen decodable words and reviewer rubric | PARTIAL: PARTIAL(read-aloud/pronunciation/speaking) | Recording contains all five items; DIRECT only after qualified phonological review |
| L2 | l2_greet-introduce | Употреблять приветствия и прощания (Szia!, Jó napot!, Viszlát!) в коротком диалоге. | Speaking | Read/repeat dialogue and formula exposure | PARTIAL | ListeningTask l2_listening_introduction plus guided formal/informal RolePlay and recording | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Greeting/register questions pass; appropriate opening and closing are recorded in two contexts and await review |
| L2 | l2_use-pronouns | Узнавать и использовать личные местоимения én, te, ő, mi, ti, ők. | Grammar | Explanation, legacy exercises, retrieval quiz | PARTIAL | ControlledPractice: match referent, choose pronoun, complete short sentence | DIRECT | At least 5/6 referents and 4/5 sentence choices correct |
| L2 | l2_conjugate-lenni | Спрягать глагол lenni (vagyok, vagy, van, vagyunk, vagytok, vannak) в настоящем времени. | Grammar | Table, unscored conjugation prompt, quiz sample | PARTIAL | ControlledPractice fill gaps across all six persons | DIRECT | All six forms correct after normalization |
| L2 | l2_introduce-self | Представляться: называть имя и страну по образцу «A nevem…», «Magyar vagyok». | Speaking / writing | Template, oral prompt, five-sentence homework | PARTIAL | Structured WritingTask plus short recorded self-introduction | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Name and origin expressed in two complete clauses; both products await qualified review |
| L2 | l2_ask-answer-questions | Задавать и отвечать на простые вопросы (Hogy vagy?, Ki vagy te?). | Interaction | Dialogue reading only; no heard prompt or turn-taking evidence | PARTIAL | ListeningTask l2_listening_introduction plus two-turn RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Both prompts understood; two relevant responses recorded; interaction awaits review |
| L3 | l3_choose-article | Выбирать определённый артикль a или az перед словами, начинающимися с гласной или согласной. | Grammar | Rule explanation and sparse quiz retrieval | PARTIAL | ControlledPractice with balanced a/az initial-sound items | DIRECT | At least 8/10 choices correct |
| L3 | l3_form-plural | Образовывать множественное число существительных с помощью -k и связующих гласных. | Grammar | Oral formation, exercises, homework, quiz sample | PARTIAL | ControlledPractice exact-input plural set | DIRECT | At least 8/10 frequent noun plurals correct after normalization |
| L3 | l3_use-egy | Употреблять неопределённый артикль egy для обозначения одного предмета. | Grammar | Explanation and unscored oral examples | PARTIAL | Context-choice ControlledPractice contrasting a/az/egy plus two prompted spoken phrases | PARTIAL: DIRECT(grammar) + PARTIAL(speaking) | At least 5/6 choices correct; spoken use is submitted and awaits review |
| L3 | l3_plural-nouns-reading | Читать и понимать существительные во множественном числе в коротком тексте. | Reading | Read-aloud exposure; no comprehension questions | PARTIAL | Short ReadingTask with plural identification and meaning questions | DIRECT | At least 4/5 plural referents and two gist details correct |
| L3 | l3_write-plural | Писать короткие фразы с артиклями и существительными во множественном числе. | Writing / grammar | Ten-pair homework prompt; output not captured | PARTIAL | Constrained text-input ControlledPractice with article+noun phrases | DIRECT | Four of five phrases match accepted normalized forms |
| L4 | l4_conjugate-present | Спрягать правильные глаголы в настоящем времени (неопределённое спряжение). | Grammar | Paradigm, legacy exercises, quiz retrieval | PARTIAL | ControlledPractice across persons and vowel classes | DIRECT | At least 8/10 forms correct |
| L4 | l4_use-verbs-context | Употреблять изученные глаголы (olvas, ír, beszél, tanul) в простых предложениях. | Writing | Oral/written sentence prompt without captured result | PARTIAL | Constrained sentence-build ControlledPractice, short WritingTask, and optional spoken sample | PARTIAL: DIRECT(grammar/writing) + PARTIAL(speaking) | Four constrained written prompts correct; spoken use awaits review |
| L4 | l4_recognize-forms | Распознавать формы настоящего времени на слух и в тексте. | Listening | Text examples and quiz; no audio form recognition | PARTIAL | ListeningTask l4_listening_present_forms plus parallel text matching | DIRECT | At least 8/10 heard or read forms mapped to the correct person |
| L4 | l4_build-sentences | Составлять простые утвердительные и отрицательные предложения с nem. | Writing / grammar | Dialogue-writing and exercise prompts, unscored | PARTIAL | Controlled sentence ordering and exact negative transformation plus optional spoken pair | PARTIAL: DIRECT(grammar/writing) + PARTIAL(speaking) | Four of five transformations correct; spoken sentence building awaits review |
| L4 | l4_ask-questions | Строить общие вопросы с помощью интонации и порядка слов. | Speaking / grammar | Explanation and oral prompt; no review | PARTIAL | Written question transformation plus recorded question pair | PARTIAL: DIRECT(grammar) + PARTIAL(speaking/intonation) | Written order correct in four of five; oral intonation awaits qualified review |
| L5 | l5_count-1-100 | Называть числа от 1 до 100 и понимать их на слух. | Listening / speaking | Naming and quiz practice; no recorded number comprehension | PARTIAL | ListeningTask l5_listening_time plus exact heard-number entry and prompted spoken naming | PARTIAL: DIRECT(listening/reading) + PARTIAL(speaking) | At least 8/10 heard numbers entered correctly; spoken naming awaits review |
| L5 | l5_tell-time | Сообщать время (Hány óra van?) и понимать указание времени на слух. | Listening / speaking | Time explanation and unqualified dialogue prompt | PARTIAL | Heard-time selection plus recorded two-item answer | PARTIAL: DIRECT(listening) + PARTIAL(speaking) | Four of five heard times selected; two spoken answers stored for review |
| L5 | l5_name-days | Называть дни недели и месяцы в правильной последовательности. | Vocabulary / sequencing | Tables, oral naming, quiz retrieval | PARTIAL | Controlled reading/sequencing and missing-item task plus spoken sequence sample | PARTIAL: DIRECT(reading/writing) + PARTIAL(speaking) | Full weekday order and at least 10/12 months correct in controlled work; spoken sequence awaits review |
| L5 | l5_write-numbers | Записывать числа словами. | Writing / grammar | Legacy written prompt without evidence | PARTIAL | Exact-input number dictation and numeral-to-word conversion | DIRECT | At least 8/10 normalized word forms correct |
| L5 | l5_use-time-in-speech | Употреблять числа, дни недели и время в коротких диалогах. | Interaction | Dialogue-writing prompt without turn evidence | PARTIAL | ListeningTask l5_listening_time plus guided schedule RolePlay with recording | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Relevant day/time details understood; two exchanges recorded and await review |
| L6 | l6_review-alphabet | Применять правила чтения и произношения уровня A0 без ошибок. | Pronunciation / reading | Read-aloud and self-recording; no judgement | PARTIAL | Mixed decoding task plus AudioRecorder rubric sample | PARTIAL: DIRECT(reading/decoding) + PARTIAL(pronunciation) | Text choices pass at least 8/10; pronunciation awaits review |
| L6 | l6_review-verb-conj | Спрягать глаголы в настоящем времени и строить с ними предложения. | Grammar / writing | Mixed legacy sentences and quiz retrieval | PARTIAL | Cumulative ControlledPractice with form and sentence items | DIRECT | At least 8/10 mixed items correct |
| L6 | l6_review-numbers | Использовать числа, время и дни недели в мини-диалогах. | Interaction | Oral reproduction; no real listening or turn evidence | PARTIAL | ListeningTask l6_listening_a0_review plus schedule RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Receptive questions pass 4/5; two-turn production stored for review |
| L6 | l6_review-plural | Образовывать множественное число и правильно выбирать артикли a/az/egy. | Grammar / writing | Mixed exercise and quiz retrieval | PARTIAL | Cumulative exact-input and article-choice ControlledPractice | DIRECT | At least 8/10 mixed plural/article items correct |
| L6 | l6_self-assess | Строить короткие монологи о себе, объединяя материал уровня A0. | Speaking / writing | Eight-sentence prompt, self-rating, phone recording | PARTIAL | Short profile WritingTask, recorded monologue, separate reflection checklist | PARTIAL: PARTIAL(writing) + PARTIAL(speaking); reflection is non-mastery | Profile covers four required facts; recording stored; self-rating never marks mastery |

### A1 objectives: L7-L14

| Lesson | Objective ID | Objective text | Primary skill | Current activity / evidence | Current | Target activity | Target | Completion criterion |
|---|---|---|---|---|---|---|---|---|
| L7 | l7_form-accusative | Образовывать винительный падеж с помощью -t и связующих гласных. | Grammar | Formation drills and quiz retrieval, uninstrumented | PARTIAL | ControlledPractice exact-input accusatives | DIRECT | At least 8/10 accepted forms correct |
| L7 | l7_use-accusative-object | Употреблять прямое дополнение в винительном падеже в предложении. | Grammar / speaking | Translation and sentence prompts without qualified result | PARTIAL | Context completion plus recorded object sentences | PARTIAL: DIRECT(grammar) + PARTIAL(speaking) | Four of five constrained sentences use the correct object form; spoken use awaits review |
| L7 | l7_distinguish-nom-acc | Различать именительный и винительный падеж в тексте. | Reading / grammar | Read-and-find prompt without check | PARTIAL | ReadingTask token classification and referent questions | DIRECT | At least 8/10 nouns classified correctly |
| L7 | l7_listen-accusative | Понимать формы винительного падежа на слух. | Listening | Narration/read-aloud only | NONE | ListeningTask l7_listening_accusative | DIRECT | At least 4/5 heard objects selected correctly |
| L7 | l7_translate-acc | Переводить простые фразы с винительным падежом. | Writing / reading | Legacy translation prompt, no captured answers | PARTIAL | Constrained text-input translation with accepted variants | DIRECT | Four of five phrases match validated normalized answers |
| L8 | l8_name-family | Называть членов семьи по-венгерски. | Vocabulary / speaking | Word list, oral prompt, quiz retrieval | PARTIAL | Picture/text matching, exact typed naming, and short naming recording | PARTIAL: DIRECT(reading/writing) + PARTIAL(speaking) | Controlled recognition/naming passes 8/10; spoken naming stored for review |
| L8 | l8_form-possessive | Образовывать притяжательные формы 1-го, 2-го и 3-го лица единственного числа (házam, házad, háza). | Grammar | Table, exercises, quiz sample | PARTIAL | ControlledPractice across three singular possessors | DIRECT | At least 8/10 singular possessive forms correct |
| L8 | l8_use-possessive | Употреблять притяжательные суффиксы «мой», «твой», «его» в описании семьи. | Writing / speaking | Three-sentence and family-tree prompts, unreviewed | PARTIAL | Constrained family captions plus short written and spoken family use | PARTIAL: DIRECT(grammar/constrained writing) + PARTIAL(speaking/open writing) | Four of five captions use the intended possessor; open description awaits review |
| L8 | l8_distinguish-possessors | Различать на слух и в тексте, к какому лицу относится притяжательная форма. | Listening | Text recognition only; no audio evidence | PARTIAL | ListeningTask l8_listening_possessives plus text matching | DIRECT | At least 8/10 forms mapped to first, second, or third person |
| L8 | l8_describe-family | Составлять связное описание своей семьи с притяжательными формами. | Speaking / writing | Read-then-tell and homework description; no evidence review | PARTIAL | Four-to-five-sentence WritingTask plus recording | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Four linked sentences and two possessive forms present; both products await review |
| L9 | l9_use-adjectives | Согласовывать прилагательное с существительным в атрибутивной позиции. | Grammar / writing | Examples, exercises, quiz retrieval | PARTIAL | ControlledPractice adjective+noun selection | DIRECT | At least 5/6 contexts correct |
| L9 | l9_form-comparative | Образовывать сравнительную степень прилагательных с помощью -bb и связующих гласных. | Grammar | Formation prompts and quiz sample | PARTIAL | Exact-input comparative set | DIRECT | At least 8/10 frequent comparative forms correct |
| L9 | l9_form-superlative | Образовывать превосходную степень прилагательных с помощью leg-. | Grammar | Formation prompts and quiz sample | PARTIAL | Exact-input superlative set | DIRECT | At least 5/6 forms correct |
| L9 | l9_use-mint | Строить сравнительные конструкции со словом mint. | Grammar / speaking | Oral examples without captured result | PARTIAL | Sentence-ordering/choice ControlledPractice plus two spoken comparisons | PARTIAL: DIRECT(grammar) + PARTIAL(speaking) | Four of five written structures correct; spoken comparisons await review |
| L9 | l9_compare-people | Описывать и сравнивать людей и предметы в устной и письменной речи. | Speaking / writing | Five-sentence homework, unreviewed | PARTIAL | Three-to-five-sentence WritingTask plus recording | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Two entities, three comparison criteria, and one superlative included; both products require review |
| L10 | l10_distinguish-inner-cases | Различать значения «где?», «куда?» и «откуда?» для внутренних падежей. | Grammar | Contrast table and unscored exercises | PARTIAL | Meaning-to-case ControlledPractice | DIRECT | At least 8/10 location/goal/source choices correct |
| L10 | l10_form-inessive | Образовывать падеж -ban/-ben для ответа на вопрос «где?». | Grammar / writing | Formation drill and quiz sample | PARTIAL | Exact-input form practice | DIRECT | At least 5/6 forms correct |
| L10 | l10_form-illative | Образовывать падеж -ba/-be для ответа на вопрос «куда?». | Grammar / writing | Formation drill and quiz sample | PARTIAL | Exact-input form practice | DIRECT | At least 5/6 forms correct |
| L10 | l10_form-elative | Образовывать падеж -ból/-ből для ответа на вопрос «откуда?». | Grammar / writing | Formation drill and quiz sample | PARTIAL | Exact-input form practice | DIRECT | At least 5/6 forms correct |
| L10 | l10_use-inner-cases | Употреблять внутренние падежи при описании местоположения и движения. | Grammar / communication | Route/origin prompts; no real audio or scored production | PARTIAL | ListeningTask l10_listening_inner_locations, map completion, and recorded route response | PARTIAL: DIRECT(listening/grammar/writing) + PARTIAL(speaking) | At least 4/5 heard locations and four of five map sentences correct; spoken description awaits review |
| L11 | l11_distinguish-surface-cases | Различать значения «где?», «куда?» и «откуда?» для падежей поверхности. | Grammar | Contrast table and legacy tasks | PARTIAL | Meaning-to-case ControlledPractice | DIRECT | At least 8/10 location/goal/source choices correct |
| L11 | l11_form-superessive | Образовывать падеж -n/-on/-en/-ön для ответа на вопрос «где?». | Grammar / writing | Formation drill and quiz retrieval | PARTIAL | Exact-input form practice | DIRECT | At least 5/6 forms correct |
| L11 | l11_form-sublative | Образовывать падеж -ra/-re для ответа на вопрос «куда?». | Grammar / writing | Formation drill and quiz retrieval | PARTIAL | Exact-input form practice | DIRECT | At least 5/6 forms correct |
| L11 | l11_form-delative | Образовывать падеж -ról/-ről для ответа на вопрос «откуда?». | Grammar / writing | Formation drill and quiz retrieval | PARTIAL | Exact-input form practice | DIRECT | At least 5/6 forms correct |
| L11 | l11_use-surface-cases | Описывать расположение предметов на поверхности в устной и письменной речи. | Speaking / writing | City/object comparison and homework, unreviewed | PARTIAL | Image-based captions plus recorded description | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Four relevant surface-case sentences submitted in both modes; open production awaits review |
| L12 | l12_distinguish-near-cases | Различать падежи со значениями «у/около», «к» и «от». | Grammar | 3x3 table and exercises mixed with postpositions | PARTIAL | Block A meaning-to-case ControlledPractice | DIRECT | At least 8/10 near-location choices correct |
| L12 | l12_form-adessive | Образовывать падеж -nál/-nél для значения «у кого/чего». | Grammar / writing | Formation and translation prompts | PARTIAL | Block A exact-input forms | DIRECT | At least 5/6 forms correct |
| L12 | l12_form-allative | Образовывать падеж -hoz/-hez/-höz для значения «к кому/чему». | Grammar / writing | Formation and translation prompts | PARTIAL | Block A exact-input forms | DIRECT | At least 5/6 forms correct |
| L12 | l12_form-ablative | Образовывать падеж -tól/-től для значения «от кого/чего». | Grammar / writing | Formation and translation prompts | PARTIAL | Block A exact-input forms | DIRECT | At least 5/6 forms correct |
| L12 | l12_use-near-cases | Употреблять падежи группы «около/рядом» в диалогах. | Interaction | Dialogue/homework prompts; narration only | PARTIAL | ListeningTask l12_listening_near_locations plus guided spoken and short written exchange | PARTIAL: DIRECT(listening) + PARTIAL(speaking/writing) | Four of five heard relations correct; two relevant turns in both modes await review |
| L13 | l13_form-past | Образовывать прошедшее время глаголов с помощью -t/-tt. | Grammar / writing | Paradigm, conjugation and quiz retrieval | PARTIAL | Introductory ControlledPractice limited to taught pattern | DIRECT | At least 8/10 in-scope forms correct |
| L13 | l13_use-volt | Употреблять формы глагола lenni в прошедшем времени (volt, voltak). | Grammar / writing | Table, translations, quiz retrieval | PARTIAL | Contextual fill-gap task | DIRECT | At least 5/6 contexts correct |
| L13 | l13_distinguish-present-past | Различать настоящее и прошедшее время на слух и в тексте. | Listening / reading | Text marking and quiz; no audio | PARTIAL | ListeningTask l13_listening_tense_contrast plus text classification | DIRECT | At least 8/10 heard/read clauses classified correctly |
| L13 | l13_tell-past | Рассказывать о прошедших событиях в простых предложениях. | Speaking / writing | Four-sentence and long essay prompts; no review | PARTIAL | Four-to-five-sentence WritingTask plus recorded mini-story | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Four ordered past clauses submitted in both modes; open accuracy/coherence awaits review |
| L14 | l14_describe-routine | Описывать распорядок дня с временными выражениями. | Speaking / writing | Person rewrite, ten-sentence text/voice homework | PARTIAL | Six-to-eight-sentence WritingTask plus recording | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Six ordered actions and three time expressions present in both modes; review required |
| L14 | l14_form-reflexive | Образовывать возвратные глаголы с помощью -kodik/-kedik/-ködik. | Grammar / writing | Explanation, transformations, quiz sample | PARTIAL | Exact-input ControlledPractice with bounded verb set | DIRECT | At least 5/6 forms correct |
| L14 | l14_use-reflexive | Употреблять возвратные глаголы (mosakodik, öltözködik) в настоящем времени. | Grammar / speaking | Routine rewrite and oral questions, unscored | PARTIAL | Contextual ControlledPractice plus recording | PARTIAL: DIRECT(grammar) + PARTIAL(speaking) | Four of five constrained person/form contexts correct; spoken use awaits review |
| L14 | l14_tell-routine-time | Сообщать, во сколько и что делает человек (время + действие). | Speaking / listening | Recorded answers without source audio or evaluation | PARTIAL | ListeningTask l14_listening_routine plus recorded schedule response | PARTIAL: DIRECT(listening) + PARTIAL(speaking) | Four of five times/actions extracted; spoken response awaits review |

### A2 objectives: L16-L20

| Lesson | Objective ID | Objective text | Primary skill | Current activity / evidence | Current | Target activity | Target | Completion criterion |
|---|---|---|---|---|---|---|---|---|
| L16 | l16_form-instrumental | Образовывать творительный падеж с помощью -val/-vel. | Grammar / writing | Formation drills and quiz retrieval | PARTIAL | Exact-input ControlledPractice | DIRECT | At least 8/10 forms correct |
| L16 | l16_apply-assimilation | Применять ассимиляцию согласных в -val/-vel (например, busz → busszal). | Grammar / pronunciation | Explanation and written tasks; no spoken judgement | PARTIAL | Spelling transformation plus optional contrast recording | DIRECT | At least 8/10 written assimilated forms correct; speech remains separately reviewable |
| L16 | l16_use-instrumental | Использовать творительный падеж для указания средства и сопровождения. | Grammar / speaking | Read/find, translation, and oral prompts, unscored | PARTIAL | Context-choice and sentence-completion ControlledPractice plus spoken response | PARTIAL: DIRECT(grammar) + PARTIAL(speaking) | Four of five means/accompaniment contexts correct; spoken use awaits review |
| L16 | l16_shop-dialogue | Вести диалог в магазине: спрашивать цену, количество и оплату. | Interaction | Mini-dialogue instruction; no source audio or qualified evidence | PARTIAL | ListeningTask l16_listening_shopping plus guided RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Four of five details understood and three required functions recorded; speech awaits review |
| L16 | l16_count-money | Называть цены и денежные суммы. | Listening / speaking | Read numbers and legacy oral practice; no aural checking | PARTIAL | Price listening and exact numeric entry plus spoken checkout prompt | PARTIAL: DIRECT(listening/reading) + PARTIAL(speaking) | Four of five heard prices entered correctly; spoken prices stored for review |
| L17 | l17_describe-weather | Описывать погоду (Esik az eső, Süt a nap). | Speaking / writing | Describe-current-weather prompt, unreviewed | PARTIAL | Four-sentence WritingTask plus short weather recording | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Four relevant weather statements submitted in both modes; open accuracy awaits review |
| L17 | l17_name-seasons | Называть времена года и месяцы. | Vocabulary / speaking | Word list, reading, and quiz retrieval | PARTIAL | Season/month matching and sequencing plus spoken naming | PARTIAL: DIRECT(reading) + PARTIAL(speaking) | All four seasons and at least 10/12 months mapped; spoken naming awaits review |
| L17 | l17_use-seasonal-adverbials | Употреблять формы tavasszal, nyáron, ősszel, télen. | Grammar / writing | Explanation and exercises, uninstrumented | PARTIAL | Contextual fill-gap ControlledPractice | DIRECT | At least 5/6 contexts correct |
| L17 | l17_compare-seasons | Сравнивать погоду в разные времена года. | Speaking / writing | Seasonal homework prompt, unreviewed | PARTIAL | Three-to-five-sentence comparison WritingTask plus recording | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Two seasons and three comparison points included in both modes; review required |
| L17 | l17_understand-forecast | Понимать прогноз погоды на слух. | Listening | No forecast recording or comprehension task | NONE | ListeningTask l17_listening_weather | DIRECT | Gist, day, temperature, and two details: at least 4/5 correct |
| L18 | l18_form-infinitive | Образовывать инфинитив глаголов с помощью -ni. | Grammar / writing | Explanation and translation exercises | PARTIAL | Exact-input base infinitive ControlledPractice | DIRECT | At least 8/10 forms correct |
| L18 | l18_use-modal-verbs | Употреблять модальные глаголы kell, lehet, tud, szeretne, akar с инфинитивом. | Grammar / production | Dialogue marking and open prompts, unscored | PARTIAL | Bounded modal+infinitive choice/construction plus short written and spoken use | PARTIAL: DIRECT(grammar) + PARTIAL(writing/speaking) | At least 8/10 constrained combinations correct; open production awaits review |
| L18 | l18_express-necessity | Выражать необходимость (kell) и возможность (lehet, tud). | Writing / speaking | Translation and personal questions without review | PARTIAL | Scenario-to-function ControlledPractice then short written and spoken response | PARTIAL: DIRECT(function/grammar) + PARTIAL(writing/speaking) | Four of five constrained functions correct; open responses await review |
| L18 | l18_express-desire | Выражать желание и намерение (szeretne, akar). | Writing / speaking | Homework sentences without captured evidence | PARTIAL | Scenario-to-function ControlledPractice then short written and spoken response | PARTIAL: DIRECT(function/grammar) + PARTIAL(writing/speaking) | Four of five constrained functions correct; open responses await review |
| L18 | l18_understand-modals | Понимать конструкции с модальными глаголами на слух. | Listening | Narration only; no comprehension evidence | NONE | ListeningTask l18_listening_modals | DIRECT | At least 4/5 heard intentions, abilities, or obligations identified |
| L19 | l19_form-future | Образовывать будущее время с помощью fog + инфинитив. | Grammar / writing | Paradigm, translations, and quiz retrieval | PARTIAL | Controlled form-building task | DIRECT | At least 8/10 future constructions correct |
| L19 | l19_conjugate-fog | Спрягать вспомогательный глагол fog по лицам. | Grammar / writing | Table and legacy exercises | PARTIAL | Six-person fill-gap task | DIRECT | All six in-scope forms correct |
| L19 | l19_use-future-plans | Рассказывать о планах и намерениях в будущем времени. | Speaking / writing | Read-then-tell and written homework, unreviewed | PARTIAL | Four-to-six-sentence plans WritingTask plus recording | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Three future plans and two time markers present in both modes; review required |
| L19 | l19_distinguish-tenses | Различать настоящее, прошедшее и будущее время на слух и в тексте. | Listening / reading | Text contrast and quiz; no audio | PARTIAL | ListeningTask l19_listening_future plus parallel reading sort | DIRECT | At least 8/10 clauses classified correctly |
| L19 | l19_make-predictions | Делать прогнозы и предположения о будущем. | Speaking / writing | Open prediction prompt, unreviewed | PARTIAL | Three-prediction WritingTask plus recording | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Three relevant predictions submitted in both modes; open accuracy awaits review |
| L20 | l20_form-past-regular | Образовывать прошедшее время правильных глаголов (-t/-ott/-ett/-ött). | Grammar / writing | Full paradigms, drills, and quiz retrieval | PARTIAL | Block A exact-input regular-past task | DIRECT | At least 8/10 in-scope forms correct |
| L20 | l20_form-past-irregular | Образовывать прошедшее время частых неправильных глаголов (volt, ment, evett). | Grammar / writing | List, formation exercises, quiz sample | PARTIAL | Block A frequency-bounded irregular task | DIRECT | At least 8/10 taught irregular forms correct |
| L20 | l20_use-definite-indefinite | Выбирать определённое или неопределённое спряжение в прошедшем времени. | Grammar / writing | Dense table and unscored exercises | PARTIAL | Block B contextual object/conjugation choices | DIRECT | At least 8/10 contexts correct |
| L20 | l20_narrate-past | Рассказывать о событиях прошлого в связном рассказе. | Speaking / writing | Five-sentence oral and six-to-ten-sentence writing prompts | PARTIAL | Six-to-eight-sentence WritingTask plus recorded mini-narrative | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Ordered beginning, two events, and ending present in both modes; review required |
| L20 | l20_understand-past-texts | Понимать тексты и устную речь в прошедшем времени. | Reading / listening | Text exposure/read-aloud; no meaning questions or source audio | NONE | ReadingTask plus ListeningTask l20_listening_past_story | DIRECT | Gist and at least four of six cross-modal detail questions correct |

### B1 objectives: L21-L28

| Lesson | Objective ID | Objective text | Primary skill | Current activity / evidence | Current | Target activity | Target | Completion criterion |
|---|---|---|---|---|---|---|---|---|
| L21 | l21_choose-conjugation | Выбирать определённое или неопределённое спряжение в зависимости от дополнения. | Grammar / writing | Explanation, form choices, and quiz retrieval | PARTIAL | Contextual ControlledPractice with explicit object types | DIRECT | At least 8/10 contexts correct |
| L21 | l21_use-object-pronouns | Употреблять формы engem и téged в роли прямого дополнения. | Grammar / speaking | Form examples and legacy exercises | PARTIAL | Context choice and constrained response plus spoken object-pronoun use | PARTIAL: DIRECT(grammar) + PARTIAL(speaking) | Four of five constrained responses correct; spoken use awaits review |
| L21 | l21_form-lak-lek | Образовывать форму -lak/-lek со значением «я тебя». | Grammar / writing | Paradigm and quiz sample | PARTIAL | Exact-input -lak/-lek transformations | DIRECT | At least 5/6 forms correct |
| L21 | l21_distinguish-conjugations | Различать определённое и неопределённое спряжение на слух. | Listening | Narration only; no aural context questions | NONE | ListeningTask l21_listening_conjugation | DIRECT | At least 4/5 heard contexts classified correctly |
| L21 | l21_apply-conjugation | Применять оба спряжения в связной устной и письменной речи. | Speaking / writing | Contextual form prompts, no connected qualified product | PARTIAL | Five-to-six-line WritingTask plus recorded mini-dialogue | PARTIAL: PARTIAL(grammar/writing) + PARTIAL(speaking) | Both conjugations used in relevant contexts; connected production awaits review |
| L22 | l22_form-imperative | Образовывать повелительное наклонение с помощью -j- и его ассимиляции. | Grammar / writing | Paradigms, exercises, quiz retrieval | PARTIAL | Exact-input ControlledPractice grouped by pattern | DIRECT | At least 8/10 in-scope imperative forms correct |
| L22 | l22_use-imperative | Отдавать команды, просьбы и советы в повелительном наклонении. | Speaking / writing | Recipe/request prompts, unreviewed | PARTIAL | Function-labelled constrained response plus open written and recorded instructions | PARTIAL: DIRECT(function selection) + PARTIAL(writing/speaking) | Three relevant commands/advice items submitted; open production awaits review |
| L22 | l22_form-let | Использовать формы légy и legyen («будь», «пусть будет»). | Grammar / speaking | Explanation and quiz retrieval | PARTIAL | Contextual fill-gap/choice plus two spoken prompts | PARTIAL: DIRECT(grammar) + PARTIAL(speaking) | At least 5/6 contexts correct; spoken use awaits review |
| L22 | l22_polite-requests | Вежливо формулировать просьбы с помощью повелительного наклонения. | Speaking | Politeness explanation and creation prompt | PARTIAL | Register-aware RolePlay with two requests | PARTIAL: PARTIAL(speaking/register) | Two context-appropriate requests recorded; register accuracy awaits review |
| L22 | l22_understand-commands | Понимать команды и указания на слух. | Listening | No real command recording or response task | NONE | ListeningTask l22_listening_instructions | DIRECT | Correctly sequence at least four of five heard instructions |
| L23 | l23_form-conditional | Образовывать условное наклонение с помощью -na/-ne. | Grammar / writing | Paradigm, translations, quiz retrieval | PARTIAL | Exact-input ControlledPractice by person/pattern | DIRECT | At least 8/10 forms correct |
| L23 | l23_use-lenne | Употреблять форму lenne («был бы»). | Grammar / writing | Examples, exercises, quiz sample | PARTIAL | Contextual fill-gap task | DIRECT | At least 5/6 contexts correct |
| L23 | l23_build-if-clauses | Строить условные предложения с союзом ha. | Grammar / writing | Translation and open creation prompts | PARTIAL | Clause pairing/order, short WritingTask, and spoken clause pair | PARTIAL: DIRECT(grammar/constrained writing) + PARTIAL(open writing/speaking) | Four of five clause pairs match; open written/spoken production awaits review |
| L23 | l23_express-wishes | Выражать желания и вежливые просьбы в условном наклонении. | Interaction / writing | Open personal and polite request prompts, unreviewed | PARTIAL | Guided request RolePlay plus three-sentence WritingTask | PARTIAL: PARTIAL(writing) + PARTIAL(speaking/interaction) | One wish and two polite requests submitted in both modes; open accuracy awaits review |
| L23 | l23_understand-conditional | Понимать условные конструкции на слух и в тексте. | Listening / reading | Text recognition only; no source audio | PARTIAL | ListeningTask l23_listening_conditional plus short ReadingTask | DIRECT | At least 4/5 conditions and outcomes matched |
| L24 | l24_use-conjunctions | Использовать союзы és, de, mert, hogy, bár, ha для соединения предложений. | Grammar / writing | Combination drills and quiz retrieval | PARTIAL | Block A/B connector choice and sentence merge | DIRECT | At least 8/10 connector choices correct |
| L24 | l24_build-complex-sentences | Строить сложносочинённые и сложноподчинённые предложения. | Writing / speaking | Legacy merges and homework; no collected connected product | PARTIAL | Controlled merges, connected WritingTask, and recorded sentence set | PARTIAL: DIRECT(grammar) + PARTIAL(writing/speaking) | At least four complex sentences with two relation types submitted in both modes; review required |
| L24 | l24_express-cause | Выражать причину с помощью союза mert. | Grammar / production | Translation and creation prompts, unreviewed | PARTIAL | Cause/effect matching and exact merge plus open written/spoken reason | PARTIAL: DIRECT(grammar) + PARTIAL(writing/speaking) | Four of five constrained cause links correct; open production awaits review |
| L24 | l24_express-contrast | Выражать противопоставление с de и уступку с bár. | Grammar / production | Translation and creation prompts, unreviewed | PARTIAL | Contrast/concession matching and merge plus open written/spoken contrast | PARTIAL: DIRECT(grammar) + PARTIAL(writing/speaking) | Four of five constrained de/bár contexts correct; open production awaits review |
| L24 | l24_connect-ideas | Связывать мысли в устном рассказе с помощью союзов. | Speaking / writing | Six-sentence homework only | PARTIAL | Six-to-eight-sentence WritingTask plus recorded opinion | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | At least three different connectors used coherently in both modes; qualified review required |
| L25 | l25_name-professions | Называть профессии и места работы по-венгерски. | Vocabulary / speaking | Thin word set and oral prompt | PARTIAL | Profession/workplace matching, exact typed naming, and short spoken response | PARTIAL: DIRECT(reading/writing) + PARTIAL(speaking) | Controlled matching/naming passes 8/10; spoken naming awaits review |
| L25 | l25_ask-answer-job | Задавать и отвечать на вопрос «Mivel foglalkozol?». | Interaction | Single oral question and dialogue exposure | PARTIAL | ListeningTask l25_listening_interview plus guided exchange | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Prompt understood and two relevant turns recorded; interaction awaits review |
| L25 | l25_describe-skills | Описывать свои навыки и рабочие обязанности. | Speaking / writing | Languages prompt and oral CV, unreviewed | PARTIAL | Structured skills WritingTask plus recorded answer | PARTIAL: PARTIAL(writing) + PARTIAL(speaking) | Three skills/duties supported in both modes; review required |
| L25 | l25_write-cv | Составлять краткое резюме (önéletrajz) с личными данными. | Writing | Mini-CV homework; output not captured | PARTIAL | Structured WritingTask with personal, education, skills, and experience fields | PARTIAL: PARTIAL(writing) | All required sections completed; language/content awaits review |
| L25 | l25_interview-dialogue | Участвовать в диалоге-собеседовании. | Interaction | Read dialogue and answer prompt; no turn evidence | PARTIAL | Interview listening plus three-turn RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Listening questions pass; three relevant responses recorded and await review |
| L26 | l26_name-body-symptoms | Описывать симптомы и части тела (Fáj a fejem). | Speaking / writing | Vocabulary, read dialogue, and open prompt | PARTIAL | Symptom/body matching plus short written and spoken response | PARTIAL: DIRECT(vocabulary/reading) + PARTIAL(writing/speaking) | Controlled matching passes 8/10; two symptom statements in both modes await review |
| L26 | l26_express-pain | Выражать боль и недомогание (Fáj a…, lázam van). | Speaking / writing | Legacy roleplay and sick-message prompt | PARTIAL | Scenario-function ControlledPractice plus written response and recording | PARTIAL: DIRECT(function selection) + PARTIAL(writing/speaking) | Constrained functions correct; three open symptom statements await review |
| L26 | l26_doctor-dialogue | Вести диалог с врачом: отвечать на вопросы о состоянии. | Interaction | Existing legacy roleplay instruction; no ActivityEvidence | PARTIAL | ListeningTask l26_listening_health_help plus migrated doctor RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Four details understood and three relevant responses recorded; review required |
| L26 | l26_pharmacy | Объяснять в аптеке, какое лекарство нужно (gyógyszertár). | Interaction | Phrase exposure and oral prompt only | PARTIAL | ListeningTask l26_listening_health_help plus guided pharmacy RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Pharmacy prompts understood; need, symptom, and clarification functions recorded and await review |
| L26 | l26_understand-advice | Понимать рекомендации врача на слух. | Listening | Narration only; no advice comprehension task | NONE | ListeningTask l26_listening_health_help, advice question set | DIRECT | At least 4/5 recommendations or dosage details identified |
| L27 | l27_name-transport | Называть виды транспорта и использовать творительный падеж (busszal). | Vocabulary / grammar | Word list, form examples, quiz retrieval | PARTIAL | Transport matching, instrumental exact input, and spoken naming | PARTIAL: DIRECT(grammar/writing) + PARTIAL(speaking) | At least 8/10 controlled items correct; spoken naming/form use awaits review |
| L27 | l27_buy-tickets | Покупать билеты (retúrjegy, menetjegy) и уточнять детали поездки. | Interaction | Station phrases and task prompt; no real audio/role evidence | PARTIAL | ListeningTask l27_listening_station plus ticket RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Date/time/platform understood and three purchase functions recorded; review required |
| L27 | l27_book-room | Бронировать номер в гостинице (foglalás). | Interaction / writing | Existing hotel roleplay and homework prompt | PARTIAL | Structured booking WritingTask plus migrated RolePlay | PARTIAL: PARTIAL(writing) + PARTIAL(speaking/interaction) | Dates, room, nights, and one question supplied in both modes; open language awaits review |
| L27 | l27_ask-directions | Спрашивать и объяснять дорогу. | Interaction | Phrase exposure and oral prompt; no heard route | PARTIAL | Route ListeningTask plus map-based RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Heard destination reached and two route turns recorded; speech awaits review |
| L27 | l27_travel-dialogue | Вести диалог на вокзале и в гостинице. | Interaction | Hotel-only legacy roleplay; station remains exposure/practice | PARTIAL | Station and hotel ListeningTasks plus scenario-select RolePlay | PARTIAL: DIRECT(listening) + PARTIAL(speaking/interaction) | Listening questions pass; one complete three-turn scenario awaits qualified review |
| L28 | l28_review-agglutination | Анализировать агглютинацию: собирать и разбирать слова по морфемам. | Grammar / reading | Grammar map and quiz retrieval | PARTIAL | Morpheme segmentation and construction ControlledPractice | DIRECT | At least 8/10 analyses correct |
| L28 | l28_review-cases | Применять систему местных и грамматических падежей. | Grammar / writing | Broad final exercises, uninstrumented | PARTIAL | Mixed contextual case ControlledPractice | DIRECT | At least 8/10 representative contexts correct |
| L28 | l28_review-moods | Различать и использовать изъявительное, повелительное и условное наклонения. | Grammar / production | Final grammar prompts and quiz retrieval | PARTIAL | Mood identification/conversion plus short written and spoken response | PARTIAL: DIRECT(grammar/constrained writing) + PARTIAL(speaking) | At least 8/10 constrained mood items correct; spoken use awaits review |
| L28 | l28_integrate-skills | Строить связные высказывания, объединяя весь материал уровня B1. | Integrated production | Ten-sentence essay prompt; no receptive capstone or evidence graph | PARTIAL | ReadingTask and ListeningTask as separate capstone evidence, plus WritingTask and recording for this objective | PARTIAL: PARTIAL(writing) + PARTIAL(speaking); receptive evidence tracked separately | Receptive components pass separately; connected oral/written products await review |
| L28 | l28_self-assess | Оценивать свой уровень и определять темы для повторения. | Reflection | Recommendations only; no real checklist or evidence-based reflection | NONE | Objective-linked evidence summary plus written and spoken reflection checklist | PARTIAL: PARTIAL(reflection/writing/speaking); non-mastery | Learner identifies two strengths, two review needs, and one next action; self-rating never marks language mastery |

## 6. A0 migration plan: L1-L6

| Lesson | Target learning sequence | Dependency and scope control | Lesson-level acceptance |
|---|---|---|---|
| L1 | Corrected sound model -> real discrimination -> orthographic choice -> guided read-aloud -> ExitCheck | Requires new human-recorded minimal pairs and word tokens. Teach gy /ɟ/, ty /c/, ny /ɲ/ separately from j/ly /j/. If “soft” is retained as a Russian-facing approximation for gy/ty/ny, state explicitly that it is not Russian consonant palatalization. Teach a/á and e/é quality as well as duration. TTS may remain exposure only. | All five objectives reference evidence; no recorder completion is reported as pronunciation mastery. |
| L2 | Functional chunks -> lenni/pronoun control -> short introduction listening -> guided self-introduction exchange -> ExitCheck | Country/profession forms remain unanalyzed chunks. Formal/informal register is explicit. | Six-person lenni evidence is direct; two production objectives remain partial pending review. |
| L3 | a/az discrimination -> egy contrast -> plural formation -> short reading -> constrained phrase writing -> ExitCheck | Keep singular after numerals as a visible scope rule. Do not turn suffixes into SRS lexemes. | Every article/plural objective has auto-checkable evidence; duplicate quiz options are removed later. |
| L4 | Present paradigm -> affirmative/negative build -> audio/text recognition -> question formation -> short exchange -> ExitCheck | -ik is a preview here and is linked explicitly to L14. | Form and recognition evidence is direct; oral intonation remains partial without review. |
| L5 | Number recognition -> written numbers -> days/months sequence -> heard time/date -> schedule exchange -> ExitCheck | Recycle L2 question/answer and L4 present tense. Avoid expanding into a full ordinal-number lesson. | Listening is based on recording, not narration; dialogue evidence stays partial. |
| L6 | Mixed receptive warm-up -> four short controlled stations -> A0 mini-listening -> written/oral personal profile -> evidence-based reflection -> ExitCheck | Depends on completed L1-L5 migrations. It is review/consolidation, not summative certification. | Direct evidence is preserved per component; self-assessment and open production are never auto-promoted. |

A0 lesson migration deliberately starts with L3 and L4, where the generic ControlledPractice path can be proven with low content risk. The separate Phase 3A shared-activity prerequisite must finish before L3. L1's audio-specific work follows after the ListeningTask asset pipeline is ready; L6 is last because it depends on all other A0 evidence mappings.

## 7. A1 migration plan: L7-L14

| Lesson | Target learning sequence | Dependency and scope control | Lesson-level acceptance |
|---|---|---|---|
| L7 | Accusative meaning -> form -> text identification -> audio recognition -> constrained object sentences -> ExitCheck | Definite conjugation is preview only. Q703 must be corrected; -lak/-lek remains taught fully in L21. | Aural accusative evidence is direct and the bad quiz answer is absent. |
| L8 | Family core -> singular possessive forms -> heard/read possessor identification -> captions -> four-to-five-sentence family description -> ExitCheck | Productive scope is 1st/2nd/3rd singular. Plural possession is enrichment, not a pass requirement. | Three singular possessors are directly checked; family production is stored as partial. |
| L9 | Adjective+noun use -> comparative -> superlative -> mint -> constrained comparison -> open comparison -> ExitCheck | Recycle familiar L5/L8 nouns instead of adding a large new list. | Form objectives are direct; open comparison is partial and explicitly reviewable. |
| L10 | Location/goal/source concept -> each inner case -> map/text practice -> short location audio -> route/origin response -> ExitCheck | Establish the case-family interaction pattern reused in L11/L12. | Meaning and form are separately checked; ambiguous distractor does not survive cleanup. |
| L11 | Contrast with L10 -> each surface case -> contextual reading -> image/city description -> ExitCheck | Avoid simplistic historical claims. A grammatical sentence is not marked wrong merely because it illustrates another case family. | All four grammar objectives direct; open description partial. |
| L12 | Block A near-location cases -> Block A checkpoint -> Block B selected postpositions -> dialogue/listening -> final ExitCheck | One lesson ID, two visible blocks. Do not interleave full pronominal paradigms, postpositions, and three case rows in one practice set. | ExitCheck identifies block and objective; the near-case dialogue cannot pass on form quiz alone. |
| L13 | Introductory past marker/form -> volt -> present/past text and audio contrast -> four-clause mini-story -> ExitCheck | L13 introduces frequent regular forms and volt; L20 owns full irregular and definite/indefinite past. | Boundary is labeled on slides and in activities; duplicate quiz options removed later. |
| L14 | L4 -ik retrieval -> reflexive pattern -> routine audio sequence -> timed routine writing/speaking -> ExitCheck | Explicitly connect frequent -ik verbs; eszik is labeled irregular rather than generalized from the reflexive pattern. | Heard times/actions are direct; connected routine production remains partial. |

The A1 case family should reuse one stable interaction grammar: first identify where/to/from, then choose a case family, then form the suffix, then use it in a situation. This prevents L10-L12 from becoming three unrelated suffix tables.

## 8. A2 migration plan: L16-L20

L15 remains between L14 and L16 as the frozen approved model. No A2 migration may modify its objectives, activities, data graph, quiz, or slide structure.

| Lesson | Target learning sequence | Dependency and scope control | Lesson-level acceptance |
|---|---|---|---|
| L16 | Shopping input -> -val/-vel form -> written assimilation -> price listening -> guided purchase roleplay -> writing -> ExitCheck | Reuse L15 activity flow without copying restaurant-specific structures. Recycle money from L5. | Assimilated spelling is direct; shopping listening direct; roleplay partial. |
| L17 | Weather core -> seasonal forms -> forecast gist/detail -> comparison -> weather report -> ExitCheck | Recycle L9 comparison and L5 months. Keep passive forecast vocabulary separate from productive core. | Published forecast is required; no TTS-only pass path. |
| L18 | Infinitive base -> bounded modal functions -> personal-infinitive pattern -> audio function recognition -> guided personal responses -> ExitCheck | Explicitly delimit which personal infinitive forms are productive. Avoid presenting every modal pattern as identical. | Base and personal forms have separate controlled items; listening is direct. |
| L19 | Timeline contrast -> fog paradigm -> present-for-plan vs fog future -> audio/text tense sort -> plans/predictions production -> ExitCheck | Definite fog forms are labeled preview if not fully practiced. Recycle L18 infinitives. | Receptive tense contrast is direct; plans/predictions remain partial. |
| L20 | Block A regular/irregular formation -> checkpoint -> Block B past conjugation choice -> past reading/listening -> narrative -> ExitCheck | One lesson ID, two blocks. Depends on L13 introduction and the L7/L13 preview path; feeds L21 consolidation. | No comprehension objective passes on mere read-aloud; narrative is collected but partial. |

A2 first implements L16 because its transaction pattern is closest to the already-proven L15 architecture. L20 is deliberately last because it depends on the full conjugation spiral and needs the largest internal restructure.

## 9. B1 migration plan: L21-L28

| Lesson | Target learning sequence | Dependency and scope control | Lesson-level acceptance |
|---|---|---|---|
| L21 | Object/context diagnostic -> indefinite/definite choice -> engem/téged -> -lak/-lek -> aural distinction -> connected application -> ExitCheck | Culminates L7 preview, L13 contrast, and L20 full past system. Archetype changes from 2 to 3. | Látlak téged contrast is correct; listening is direct; connected production partial. |
| L22 | Imperative pattern groups -> légy/legyen -> heard instruction sequence -> command/advice practice -> polite request roleplay -> ExitCheck | Keep morphology, comprehension, and register as distinct objectives. | Ambiguous Mondjad distractor is repaired later; no command objective passes without audio. |
| L23 | Conditional forms -> lenne -> ha clause pairing -> listening/reading -> wishes and polite request exchange -> ExitCheck | Recycle L22 politeness and prepare L24 clause connections. | Duplicate quiz options removed later; open interaction remains partial. |
| L24 | Block A coordination/cause -> checkpoint -> Block B contrast/subordination -> short reading -> connected paragraph/oral opinion -> ExitCheck | One lesson ID, two blocks; archetype changes 2 to 3. Keep the six listed connectors as productive core. | Cause/contrast choices are direct; paragraph/oral cohesion requires review. |
| L25 | Profession/workplace input -> interview listening -> skills profile -> structured CV -> interview roleplay -> ExitCheck | Recycle L23 polite questions and L24 connectors. Expand functional chunks before low-frequency job nouns. | CV and interview are captured separately; neither is auto-passed. |
| L26 | Symptom/body core -> doctor listening -> advice questions -> symptom response -> doctor/pharmacy roleplays -> short message -> ExitCheck | Keep medical scope to language for basic help-seeking; do not add diagnosis or safety claims. | Advice comprehension is direct; both roleplays remain partial without review. |
| L27 | Transport core -> station listening/ticket task -> hotel listening/booking -> directions map -> selected roleplay -> ExitCheck | Reuse L16 transactional criteria and L26 roleplay shell; do not require all three scenarios in one recording. | Each functional objective has its own evidence reference; one scenario cannot satisfy all five. |
| L28 | Evidence inventory -> integrated B1 reading/listening -> mixed form choice -> connected writing -> connected recording -> reflection and next step -> ExitCheck | Capstone is low-stakes and portfolio-like, not a mock exam. Remove verb-prefix retrieval that was never taught as an objective. | Direct receptive/form evidence is separated from partial production and reflection. |

B1 implementation starts with L22 and L23 to establish reusable form-to-function and register-aware RolePlay patterns, then resolves L21's cross-level conjugation spiral. L24 follows as the bridge to connected production; domain scenarios come next; L28 is last.

## 10. Listening asset and question plan

Every row below requires a published recording before DIRECT listening evidence is possible. Slide narration, browser TTS, transcript reading, or a missing-file fallback is exposure only. Asset IDs are proposed identifiers, not claims that files exist. The final plan contains 27 required new audio assets across 23 lessons; standalone l1_listening_stress has been removed.

| Lesson / objective IDs | Proposed asset ID | Purpose | Duration | Speakers | Question types | Evidence | Required? |
|---|---|---|---:|---:|---|---|---|
| L1 / l1_distinguish-s-sz | l1_listening_s_sz | s/sz token and minimal-pair discrimination | 15-25 s | 1 | forced choice, orthographic match | DIRECT | Yes |
| L1 / l1_distinguish-soft-consonants | l1_listening_soft_consonants | Distinguish gy /ɟ/, ty /c/, ny /ɲ/, and the j~ly /j/ spelling pair without a false hard/soft analogue model | 15-25 s | 1 | sound-to-grapheme, category match, j/ly spelling recognition | DIRECT receptive sub-evidence | Yes |
| L1 / l1_distinguish-long-vowels | l1_listening_vowel_length | Discriminate vowel quantity and the quality differences in a/á and e/é | 20-30 s | 1 | minimal-pair choice, exact grapheme | DIRECT | Yes |
| L2 / l2_greet-introduce, l2_ask-answer-questions | l2_listening_introduction | Identify greeting register, name, origin, and response | 20-30 s | 2 | gist, detail, register choice | DIRECT receptive sub-evidence | Yes |
| L4 / l4_recognize-forms | l4_listening_present_forms | Map heard present forms to person/action | 15-25 s | 1 | person choice, form/action match | DIRECT | Yes |
| L5 / l5_count-1-100, l5_tell-time, l5_use-time-in-speech | l5_listening_time | Understand numbers, dates, days, and times | 25-35 s | 1 | exact entry, schedule selection, detail | DIRECT receptive sub-evidence | Yes |
| L6 / l6_review-numbers | l6_listening_a0_review | Mini A0 introduction and schedule review | 25-35 s | 2 | gist, name/time/day extraction | DIRECT receptive sub-evidence | Yes |
| L7 / l7_listen-accusative | l7_listening_accusative | Identify the heard direct object | 15-25 s | 1 | object choice, nominative/accusative contrast | DIRECT | Yes |
| L8 / l8_distinguish-possessors | l8_listening_possessives | Identify owner from singular possessive forms | 20-30 s | 1 | person match, family detail | DIRECT | Yes |
| L10 / l10_use-inner-cases | l10_listening_inner_locations | Understand inner location, goal, and source | 20-30 s | 1 | map point, where/to/from classification | DIRECT receptive sub-evidence | Yes |
| L12 / l12_use-near-cases | l12_listening_near_locations | Understand near-location relations in a short exchange | 20-30 s | 2 | relation match, destination/source detail | DIRECT receptive sub-evidence | Yes |
| L13 / l13_distinguish-present-past | l13_listening_tense_contrast | Distinguish current and past events | 20-30 s | 1 | tense classification, time-marker detail | DIRECT | Yes |
| L14 / l14_tell-routine-time | l14_listening_routine | Reconstruct a daily routine and times | 25-35 s | 1 | ordering, time/action extraction | DIRECT receptive sub-evidence | Yes |
| L16 / l16_shop-dialogue, l16_count-money | l16_listening_shopping | Understand product, quantity, price, and payment | 25-35 s | 2 | gist, price entry, detail | DIRECT receptive sub-evidence | Yes |
| L17 / l17_understand-forecast | l17_listening_weather | Understand a short forecast | 25-40 s | 1 | gist, day, temperature, two details | DIRECT | Yes |
| L18 / l18_understand-modals | l18_listening_modals | Identify ability, necessity, possibility, desire, or intent | 20-30 s | 2 | function choice, speaker match | DIRECT | Yes |
| L19 / l19_distinguish-tenses | l19_listening_future | Distinguish present plan, past event, and fog future | 25-35 s | 1-2 | tense sort, plan/prediction detail | DIRECT | Yes |
| L20 / l20_understand-past-texts | l20_listening_past_story | Understand connected past narration | 35-50 s | 1 | gist, sequencing, detail | DIRECT | Yes |
| L21 / l21_distinguish-conjugations | l21_listening_conjugation | Infer conjugation choice from object/context | 20-30 s | 1 | context classification, object match | DIRECT | Yes |
| L22 / l22_understand-commands | l22_listening_instructions | Follow a short instruction sequence and register | 20-30 s | 1 | ordering, action selection, register | DIRECT | Yes |
| L23 / l23_understand-conditional | l23_listening_conditional | Match conditions, results, wishes, and polite requests | 25-35 s | 2 | clause match, function, detail | DIRECT | Yes |
| L25 / l25_ask-answer-job, l25_interview-dialogue | l25_listening_interview | Understand role, skills, and experience in an interview | 35-50 s | 2 | gist, speaker detail, information extraction | DIRECT receptive sub-evidence | Yes |
| L26 / l26_doctor-dialogue, l26_pharmacy, l26_understand-advice | l26_listening_health_help | Understand a short doctor consultation followed by a pharmacy exchange: symptoms, questions, advice, needed medicine, clarification, and dosage | 45-60 s | 2-3 | gist, symptom/detail, advice, pharmacy-prompt and dosage selection | DIRECT receptive sub-evidence | Yes |
| L27 / l27_buy-tickets, l27_travel-dialogue | l27_listening_station | Understand a ticket exchange or short station announcement | 25-40 s | 1-2 | time/platform/detail, intent | DIRECT receptive sub-evidence | Yes |
| L27 / l27_book-room, l27_travel-dialogue | l27_listening_hotel | Understand dates, room type, nights, and confirmation | 30-45 s | 2 | form completion, detail, gist | DIRECT receptive sub-evidence | Yes |
| L27 / l27_ask-directions | l27_listening_directions | Follow a short route on a simple map | 20-35 s | 1 | map path, sequence, destination | DIRECT receptive sub-evidence | Yes |
| L28 / l28_integrate-skills | l28_listening_b1_profile | Understand connected B1-level personal or functional speech | 45-60 s | 1-2 | gist, inference, detail, sequencing | DIRECT receptive component | Yes |

Asset production gates:

- Record natural Hungarian speech with pedagogically controlled speed; do not use unnatural spelling-dictation prosody unless dictation is the explicit task.
- L1 phonology QA must verify gy /ɟ/, ty /c/, ny /ɲ/, modern standard j/ly /j/, the difference from Russian palatalization, and both quality and duration in a/á and e/é.
- Validate transcript, timing, answer key, distractors, and target level with a qualified Hungarian reviewer.
- Keep transcripts available for accessibility and post-attempt review, but do not expose them before a scored listening attempt when they reveal answers.
- Verify manifest entry, published status, file existence, load success, replay behavior, and fallback semantics.
- Resolve the frozen L15 missing MP3 as a separate asset-only dependency. Do not edit the L15 lesson definition to work around it.

## 11. Speaking and interaction plan

AudioRecorder is required only where a stored performance materially helps review or reflection. Its existence proves submission, not linguistic quality. DIRECT speaking requires qualified human or system review against the stated criterion.

| Lesson / objective IDs | Speaking or interaction task | Interaction required? | Recording | Target evidence | Qualified review needed for DIRECT? |
|---|---|---|---|---|---|
| L1 / gy-ty-ny and j-ly model, stress, read-aloud | Five-word guided read-aloud using the corrected phonological categories | No | Required | PARTIAL | Yes, phonological rubric |
| L2 / greet, introduce, ask-answer | Formal/informal greeting and two-turn introduction | Yes | Required | PARTIAL | Yes |
| L3 / use-egy | Say two prompted one-item phrases after direct text practice | No | Not required | PARTIAL practice only | Yes |
| L4 / use-verbs, build-sentences, ask-questions | Four statements plus two yes/no questions | Optional paired exchange | Optional | PARTIAL | Yes, including intonation |
| L5 / count, time, dialogue | Schedule-information exchange | Yes | Required | PARTIAL | Yes |
| L6 / review-numbers, self-assess | A0 personal mini-monologue and schedule response | Optional prompt-response | Required | PARTIAL | Yes |
| L7 / use-accusative-object | Three prompted object sentences | No | Optional | PARTIAL | Yes |
| L8 / name/use/describe family | Four-to-five-sentence family description | Optional follow-up question | Required | PARTIAL | Yes |
| L9 / mint, compare | Compare two familiar people/items on three criteria | No | Optional | PARTIAL | Yes |
| L10 / use-inner-cases | Map-based where/to/from response | Optional | Optional | PARTIAL | Yes |
| L11 / use-surface-cases | Describe four object/city locations | Optional | Optional | PARTIAL | Yes |
| L12 / use-near-cases | Two-turn near-location exchange after Block B | Yes | Required | PARTIAL | Yes |
| L13 / tell-past | Four-clause yesterday mini-story | No | Required | PARTIAL | Yes |
| L14 / describe/tell routine | Six-action routine with times | Optional follow-up | Required | PARTIAL | Yes |
| L16 / use-instrumental, shop-dialogue, money | Guided purchase with item, amount, price, payment | Yes | Required | PARTIAL | Yes |
| L17 / describe/compare weather | Short weather report and one comparison | No | Required | PARTIAL | Yes |
| L18 / modal objectives | Respond to ability, necessity, and desire scenarios | Optional | Optional | PARTIAL | Yes |
| L19 / plans, predictions | Three plans and two predictions | No | Required | PARTIAL | Yes |
| L20 / narrate-past | Connected past mini-narrative | No | Required | PARTIAL | Yes |
| L21 / object pronouns, apply conjugation | Mini-dialogue using both conjugations and -lak/-lek | Optional | Required | PARTIAL | Yes |
| L22 / use imperative, polite requests | Instruction sequence and polite request exchange | Yes | Required | PARTIAL | Yes, form and register |
| L23 / if-clauses, wishes | One hypothetical and two polite requests | Yes | Required | PARTIAL | Yes |
| L24 / complex sentences, connect ideas | One-minute opinion using cause and contrast | Optional discussion | Required | PARTIAL | Yes, cohesion rubric |
| L25 / job, skills, interview | Three-turn job interview | Yes | Required | PARTIAL | Yes |
| L26 / symptoms, doctor, pharmacy | Choose one doctor or pharmacy scenario | Yes | Required | PARTIAL | Yes |
| L27 / ticket, hotel, directions, dialogue | Choose one complete transactional scenario | Yes | Required | PARTIAL | Yes |
| L28 / moods, integrate, reflect | Two-minute connected B1 portfolio reflection | Optional follow-up | Required | PARTIAL | Yes |

Reusable speaking rubrics should be short and criterion-based: task completion, intelligibility, target form/function, interaction relevance, and connectedness where appropriate. They must not generate a pass from duration, file presence, or learner self-rating.

## 12. Writing plan

Open writing is PARTIAL until qualified review. Exact-input forms may be DIRECT when accepted answers are complete, normalized narrowly, and language-QA approved.

| Lesson / objective IDs | Writing task and expected scope | Evidence mode | Review requirement |
|---|---|---|---|
| L1 | No new writing product; orthographic choices stay in ControlledPractice | DIRECT for exact choices | Automated |
| L2 / pronouns, lenni, introduce | Structured personal profile, 3-4 clauses | PARTIAL | Qualified review for open clauses |
| L3 / articles/plurals | Five constrained article+noun phrases | DIRECT | Validated accepted variants |
| L4 / verbs/sentences | Four statements, one negation, one question; exact transformations before open text | DIRECT for constrained; PARTIAL for open | Automated plus optional review |
| L5 / numbers/time | Number dictation and a 3-line schedule note | DIRECT for dictation; PARTIAL for note | Automated plus review |
| L6 / A0 integration | Four-to-six-sentence personal profile | PARTIAL | Qualified review |
| L7 / accusative | Five constrained object phrases/sentences | DIRECT | Validated accepted variants |
| L8 / possession/family | Four-to-five-sentence family description | PARTIAL | Qualified review |
| L9 / comparison | Three-to-five comparison sentences | PARTIAL | Qualified review |
| L10 / inner cases | Five map-based location/goal/source answers | DIRECT when constrained | Automated |
| L11 / surface cases | Four image/city location sentences | PARTIAL | Qualified review |
| L12 / near cases | Block A three exact case answers; Block B three location descriptions | DIRECT then PARTIAL | Automated plus review |
| L13 / past | Four-to-five-sentence yesterday account | PARTIAL | Qualified review |
| L14 / routine | Six-to-eight ordered routine sentences with times | PARTIAL | Qualified review |
| L16 / shopping/instrumental | Short purchase note or four-line written exchange | PARTIAL | Qualified review |
| L17 / weather | Four-to-five-sentence report/comparison | PARTIAL | Qualified review |
| L18 / modals | Five function-labelled modal responses | DIRECT when constrained | Automated; review only open extension |
| L19 / future | Four-to-six-sentence plans message and three predictions | PARTIAL | Qualified review |
| L20 / past narrative | Six-to-eight-sentence connected account | PARTIAL | Qualified review |
| L21 / conjugation | Five-to-six-line contextual mini-dialogue | PARTIAL | Qualified review |
| L22 / imperative | Five-to-six-item instruction/advice message | PARTIAL | Qualified review |
| L23 / conditional | One wish, two polite requests, and two ha clauses | PARTIAL | Qualified review |
| L24 / conjunctions | Six-to-eight-sentence paragraph using cause and contrast | PARTIAL | Qualified cohesion review |
| L25 / career | Structured mini-CV or profile: personal data, education, skills, experience | PARTIAL | Qualified review |
| L26 / health | Three-to-four-line symptom/help message | PARTIAL | Qualified review; no medical correctness inference |
| L27 / travel | Booking message or short itinerary/directions response | PARTIAL | Qualified review |
| L28 / integrated capstone | Connected B1 text with prompt-specific beginning, support, and conclusion | PARTIAL | Qualified review |

## 13. Pronunciation and phonology plan

Pronunciation work follows the Blueprint progression from word-level discrimination and production to phrase/connected-speech prosody. It is REQUIRED only where it serves an explicit objective or a high-impact morphophonological pattern.

| Lessons | Status | Focus and format | Evidence rule |
|---|---|---|---|
| L1 | REQUIRED, preserve and strengthen | Real s/sz discrimination; gy /ɟ/, ty /c/, ny /ɲ/ distinct from j/ly /j/; explicitly not Russian-style palatalization; vowel quality plus duration for a/á and e/é; initial-stress rule practice and word-level recording | Sound discrimination and stress-rule knowledge may be DIRECT; model stress audio is exposure; recorded production is PARTIAL without review |
| L2 | OPTIONAL | Greeting register and short phrase intonation | Recording is PARTIAL |
| L3 | OPTIONAL | a/az initial-sound awareness and plural endings in short phrases | Use as practice, not a pronunciation objective |
| L4 | OPTIONAL | Yes/no question intonation; short present-tense clauses | Written question form may be direct; intonation requires review |
| L5 | OPTIONAL | Number and time chunk rhythm | Heard-number answers direct; spoken delivery partial |
| L6 | REQUIRED review | Unseen word decoding plus short connected A0 monologue | Text choices direct; oral sample partial |
| L7 | OPTIONAL | Audible object endings in phrase context | Listening distinction direct; speech partial |
| L8 | OPTIONAL | Possessive endings in family phrases | Listening/person match direct; speech partial |
| L9 | OPTIONAL | Comparative -bb and phrase stress | Practice only unless reviewed |
| L10-L12 | OPTIONAL | Suffix vowel length/harmony and location-phrase rhythm | Form evidence comes from text; recordings remain partial |
| L13 | OPTIONAL | Past -t/-tt endings in short clauses | Aural tense classification direct; production partial |
| L14 | OPTIONAL | Frequent -ik and reflexive clusters in connected routine speech | Recording requires review |
| L16 | REQUIRED | -val/-vel consonant assimilation: spelling contrast then word/phrase recording | Written assimilation direct; pronunciation partial |
| L17 | OPTIONAL | Weather phrase rhythm and long vowels in existing core words | Practice only unless reviewed |
| L18 | OPTIONAL | Infinitive endings and modal+infinitive phrase grouping | Practice only unless reviewed |
| L19 | OPTIONAL | fog + infinitive phrase grouping and prediction intonation | Practice only unless reviewed |
| L20 | OPTIONAL | Past endings and connected narrative chunking | Receptive questions direct; narrative speech partial |
| L21 | OPTIONAL | -lak/-lek and object-pronoun phrase contrast | Text form direct; speech partial |
| L22 | REQUIRED | Imperative assimilation and direct-versus-polite request intonation | Written form/listening direct; production partial |
| L23 | OPTIONAL | Conditional suffix clarity and polite-request intonation | Form direct; spoken register partial |
| L24 | REQUIRED | Clause boundaries, cause/contrast prominence, and connected-speech pacing | Connected production requires qualified review |
| L25-L27 | OPTIONAL | Functional question, confirmation, and clarification intonation | Roleplay recordings remain partial |
| L28 | OPTIONAL recycle | No new phonology; reuse connected-speech criteria from L24-L27 | Capstone recording remains partial |

All proposed Hungarian examples in this plan are either objective text or forms already present in the audited lesson files. New audio scripts, accepted answers, and future distractors require a dedicated Hungarian language QA pass before publication.

## 14. Vocabulary cleanup and functional-language plan

Current count is the effective vocabulary set seen by the lesson today. This plan does not migrate or merge the SRS system. Morphological forms may remain visible in lesson support, but should not inflate the productive lexeme target.

| Lesson | Current effective items | Action | Productive core / passive-input decision |
|---|---:|---|---|
| L1 | 6 mapped | KEEP | Keep as sound exemplars; add no lexical burden |
| L2 | 6 mapped | ADD CHUNKS; ADD FUNCTIONAL CORE | Productive greetings, name/origin, two questions; other country/profession variants may be passive chunks |
| L3 | 6 mapped | REBALANCE; CATEGORY CLEANUP | Productive common nouns and articles; label plural endings as morphology |
| L4 | 6 mapped | REBALANCE; ADD FUNCTIONAL CORE | Productive high-frequency verbs and question/negative chunks; keep paradigm forms out of lexeme counts |
| L5 | 6 mapped | ADD FUNCTIONAL CORE; ADD CHUNKS | Productive number/time/day chunks; months primarily recognition first |
| L6 | 6 mapped | REBALANCE; CATEGORY CLEANUP | Recycle L1-L5 only; add no new productive set |
| L7 | 6 mapped | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | Productive object verbs+nouns; suffix variants are morphology, not vocabulary |
| L8 | 6 mapped | ADD FUNCTIONAL CORE; ADD CHUNKS | Productive close-family nouns and singular possessive chunks; wider kinship passive |
| L9 | 16 inline | KEEP; ADD FUNCTIONAL CORE | Productive frequent adjectives/comparison chunks; colors recycle as support |
| L10 | 16 inline | REBALANCE; ADD CHUNKS | Productive hol/hová/honnan and frequent places; case forms grouped under lexemes |
| L11 | 16 inline | REBALANCE; ADD CHUNKS | Productive surface-location chunks; geography/city forms grouped rather than counted separately |
| L12 | 16 inline | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | Block A case exemplars productive; selected Block B postpositions productive; pronominal forms/passive extras limited |
| L13 | 16 inline | REBALANCE; ADD CHUNKS | Productive time markers and frequent past chunks; conjugated forms grouped under verbs |
| L14 | 16 inline | KEEP; ADD CHUNKS | Productive daily actions/time chunks; explicitly recycle L4 -ik verbs |
| L16 | 8 inline | REBALANCE; ADD FUNCTIONAL CORE; ADD CHUNKS | Productive purchase, price, quantity, payment; assimilated forms remain morphology |
| L17 | 8 inline | ADD FUNCTIONAL CORE; ADD PASSIVE INPUT | Productive core weather/season phrases; forecast-only detail words passive |
| L18 | 8 inline | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | Productive modal functions and frequent infinitives; personal endings are morphology |
| L19 | 5 inline | ADD FUNCTIONAL CORE; ADD CHUNKS | Productive plan/prediction time markers and fog+infinitive chunks |
| L20 | 5 inline | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | Productive narrative markers/frequent irregulars; full paradigms not lexeme inventory |
| L21 | 4 inline | REBALANCE; CATEGORY CLEANUP; ADD CHUNKS | Productive object-pronoun and -lak/-lek chunks; recycle prior verbs |
| L22 | 4 inline | REBALANCE; ADD CHUNKS | Productive command, advice, and polite-request chunks; morphology separate |
| L23 | 3 inline | REBALANCE; ADD CHUNKS | Productive wish/polite hypothetical chunks; recycle L18/L22 verbs |
| L24 | 4 inline | CATEGORY CLEANUP; ADD FUNCTIONAL CORE | Productive six-connector core; other discourse markers passive input |
| L25 | 4 inline | ADD FUNCTIONAL CORE; ADD CHUNKS; ADD PASSIVE INPUT | Productive job/skills/interview functions; broader profession list passive |
| L26 | 4 inline | ADD FUNCTIONAL CORE; ADD CHUNKS; ADD PASSIVE INPUT | Productive symptoms, pain/help and clarification; extra medical nouns passive |
| L27 | 4 inline | ADD FUNCTIONAL CORE; ADD CHUNKS; ADD PASSIVE INPUT | Productive ticket/booking/directions functions; transport inventory passive beyond core |
| L28 | 3 inline | REBALANCE; CATEGORY CLEANUP; ADD PASSIVE INPUT | No new productive lexemes; recycle and diagnose gaps from earlier evidence |

Vocabulary implementation rule: every productive item must appear in a meaningful controlled task and later situation; every passive-only item must appear in input with no claim that the learner can produce it. Repeated inflected forms, suffix rows, and entire paradigms must be counted as morphology, not new lexemes.

## 15. Existing quiz cleanup plan

The quiz remains a Retrieval Checkpoint after lesson activities. Cleanup should preserve valid questions and IDs where possible, change only defective content, and add regression tests for answer-key uniqueness and linguistic ambiguity. L15 is frozen and excluded.

| Lesson / question | Category | Problem | Required cleanup |
|---|---|---|---|
| L2 / Q206 | META | Asks about course/lesson organization rather than a learning objective | Replace with an objective-aligned greeting, pronoun, or lenni retrieval item |
| L3 / Q303 | DUPLICATE | Options repeat almák, so distractors are not meaningful | Supply unique, language-QA-approved distractors |
| L5 / Q506 | META | Tests lesson metadata rather than number/time skill | Replace with a number, day, date, or time retrieval item |
| L6 / Q604 | DUPLICATE | Repeats the defective L3 plural options | Replace with unique cumulative plural/article distractors |
| L6 / Q608 | META | Tests course-topic knowledge rather than A0 skill | Replace with an objective-linked cumulative item |
| L7 / Q703 | LANGUAGE QA | Accepted Látom téged conflicts with the correct -lak/-lek form taught later | Correct to Látlak téged and align explanation with the L7-preview/L21-full-treatment boundary |
| L7 / Q706 | META | Tests lesson metadata | Replace with an accusative retrieval item |
| L8 / Q805 | PEDAGOGICALLY MISALIGNED | Tests plural possession házaim beyond the stated singular productive scope | Replace with a 1st/2nd/3rd singular possessor item or label enrichment outside scoring |
| L8 / Q806 | META | Tests lesson metadata | Replace with a family/possessive retrieval item |
| L9 / Q906 | META | Tests lesson metadata | Replace with a comparison retrieval item |
| L10 / Q1005 | WEAK DISTRACTOR | A boltban megyek can be grammatical with a different intended meaning | Rewrite stem/context so only the target location/goal interpretation is plausible |
| L10 / Q1006 | LANGUAGE QA | Claims a harmony prerequisite from L2 although current L2 is greetings/lenni | Replace the premise or point to the actual taught prerequisite |
| L11 / Q1104 | LANGUAGE QA | Historical/open-surface explanation is oversimplified | Replace with a contextual meaning/form question |
| L11 / Q1105 | WEAK DISTRACTOR | A szobában vagyok is grammatical, merely not a surface-case example | Ask for the correct case family or use an unambiguously incorrect form |
| L11 / Q1106 | META | Tests lesson metadata | Replace with a surface-case retrieval item |
| L12 / Q1206 | META | Tests lesson metadata | Replace with a near-case or postposition item tied to the correct block |
| L13 / Q1301 | DUPLICATE | Multiple vártam options collapse the choice | Supply unique forms from the taught introductory scope |
| L13 / Q1302 | DUPLICATE | Repeated dolgozott option | Supply unique person/tense distractors |
| L13 / Q1304 | DUPLICATE | Repeated Nem voltam otthon option | Supply unique polarity/person distractors |
| L13 / Q1306 | META | Tests lesson metadata | Replace with introductory past/volt retrieval |
| L14 / Q1406 | META | Tests lesson metadata | Replace with routine/reflexive retrieval |
| L16 / Q1605 | DUPLICATE | barátommal appears repeatedly | Supply unique assimilation/case distractors |
| L18 / Q1801 | DUPLICATE | All options are tanulni | Supply unique infinitive/base/personal-form distractors |
| L20 / Q2001 | LANGUAGE QA | The linking-vowel rule is over-broad and needs native review | Rewrite around validated example sets or ask a contextual form question |
| L20 / Q2006 | META | Tests lesson metadata | Replace with regular/irregular or past-conjugation retrieval |
| L22 / Q2203 | WEAK DISTRACTOR; LANGUAGE QA | Mondjad meg neki! is a grammatical alternate, not a safe wrong answer | Use an unambiguous non-imperative or wrong-person distractor |
| L23 / Q2305 | DUPLICATE | All options are tanulnánk | Supply unique person/mood distractors |
| L25 / Q2506 | META; PEDAGOGICALLY MISALIGNED | References prior-lesson/course structure rather than a career objective | Replace with job/skills/interview retrieval |
| L26 / Q2605 | WEAK DISTRACTOR; LANGUAGE QA | fejfájás ellen and fejfájásra can both be idiomatic | Add a disambiguating context or replace the distractor |
| L28 / Q2805 | PEDAGOGICALLY MISALIGNED | Verb-prefix retrieval is not supported by a current course objective sequence | Replace with a taught B1 objective or explicitly add prerequisite teaching in a future curriculum phase |
| L28 / Q2806 | META | Tests course-completion policy rather than B1 skill | Replace with an integrated objective-linked retrieval item |

## 16. Priority summary

Priority applies to lesson migration as a whole, not to how urgently a learner should study the lesson.

| Priority | Count | Lessons | Rationale |
|---|---:|---|---|
| P0 | 14 | L1, L5, L6, L7, L12, L17, L18, L20, L21, L22, L24, L26, L27, L28 | At least one claimed skill has NONE-valid sub-evidence, or there is an important language, scope, overload, or capstone defect |
| P1 | 13 | L2, L3, L4, L8, L9, L10, L11, L13, L14, L16, L19, L23, L25 | Meaningful practice exists, but objective evidence and lesson coherence need systematic migration |
| P2 | 0 | None | No lesson is mere polish: all 27 still lack full objective-to-ActivityEvidence coverage |

P0 reasons by lesson:

| Lesson | P0 trigger |
|---|---|
| L1 | Core listening discrimination objectives have NONE evidence |
| L5 | Explicit number/time listening claims have no real audio evidence |
| L6 | Review claims integrated skills, but lacks mini-listening and qualified evidence; self-rating can be mistaken for mastery |
| L7 | Listening objective has NONE evidence and Q703 contains a substantive Hungarian error |
| L12 | Case/postposition overload requires two blocks; claimed dialogue/listening has no real audio |
| L17 | Forecast-listening objective has NONE evidence |
| L18 | Modal-listening objective has NONE evidence and personal-infinitive scope needs stronger pedagogy |
| L20 | Reading/listening comprehension objective has NONE evidence and the lesson is structurally overloaded |
| L21 | Aural conjugation objective has NONE evidence and the multi-lesson spiral needs resolution |
| L22 | Command-comprehension objective has NONE evidence and a quiz distractor is linguistically unsafe |
| L24 | Major overload plus no collected connected production despite five communication-facing objectives |
| L26 | Advice-listening objective has NONE evidence; core roleplay remains legacy-only |
| L27 | Multiple functional listening claims lack real audio and one legacy roleplay cannot cover all scenarios |
| L28 | Integrated capstone and self-assessment are not evidenced; one quiz item tests untaught content |

## 17. Complexity summary

| Complexity | Count | Lessons | Basis |
|---|---:|---|---|
| LOW | 1 | L3 | Existing concepts can migrate with generic reading/controlled/writing evidence and no new audio |
| MEDIUM | 2 | L9, L11 | Multiple activity types and content QA, but no new audio asset or major architecture |
| HIGH | 24 | All remaining non-L15 lessons | New listening stimulus, major communicative scenario, substantial restructure, or review/capstone architecture |

Migration complexity above is the combined delivery label retained from the approved matrix. The dimensions below separate shared-code risk from content/asset production.

Asset dependency definitions:

- NONE: no new required recording.
- AUDIO: a new recording of already-approved isolated forms, numbers, or sentence material; technical/audio QA still applies.
- AUDIO + HUNGARIAN QA: a new phonetic model, dialogue, connected script, or linguistically sensitive recording that requires dedicated qualified Hungarian review before production.

| Phase / lesson | Code complexity | Asset dependency | Explanation |
|---|---|---|---|
| Phase 3A | HIGH | NONE | Shared ReadingTask type/renderer generalization with frozen L15 compatibility; excluded from lesson totals |
| L1 | MEDIUM | AUDIO + HUNGARIAN QA | Phonetic model, discrimination questions, and corrected learner-facing explanation |
| L2 | MEDIUM | AUDIO + HUNGARIAN QA | Dialogue listening, roleplay, and structured production |
| L3 | LOW | NONE | Uses prose mode delivered by Phase 3A and existing generic evidence paths |
| L4 | LOW | AUDIO | Isolated present-form recognition plus existing controlled/recording paths |
| L5 | MEDIUM | AUDIO | Number/time listening and exact answer normalization |
| L6 | HIGH | AUDIO + HUNGARIAN QA | Cross-lesson review graph, dialogue input, production, and reflection separation |
| L7 | LOW | AUDIO | Bounded accusative recognition with a language correction |
| L8 | MEDIUM | AUDIO + HUNGARIAN QA | Short family input and composite spoken/written evidence |
| L9 | LOW | NONE | Existing controlled and production components are sufficient |
| L10 | MEDIUM | AUDIO + HUNGARIAN QA | Contextual location input and map-linked evidence |
| L11 | LOW | NONE | Contextual reading/controlled work plus existing production components |
| L12 | HIGH | AUDIO + HUNGARIAN QA | Two-block structure and new near-location dialogue |
| L13 | MEDIUM | AUDIO | Short tense-contrast sentences plus L13/L20 boundary work |
| L14 | MEDIUM | AUDIO + HUNGARIAN QA | Connected routine input and two-mode production |
| L16 | MEDIUM | AUDIO + HUNGARIAN QA | Shopping dialogue, roleplay, price input, and assimilation |
| L17 | MEDIUM | AUDIO + HUNGARIAN QA | New natural forecast and receptive-to-productive flow |
| L18 | MEDIUM | AUDIO + HUNGARIAN QA | Modal dialogue plus personal-infinitive scope |
| L19 | MEDIUM | AUDIO + HUNGARIAN QA | Tense contrast in plans/predictions and connected production |
| L20 | HIGH | AUDIO + HUNGARIAN QA | Two blocks, reading/listening comprehension, and narrative |
| L21 | HIGH | AUDIO + HUNGARIAN QA | Cross-level conjugation consolidation and contextual audio |
| L22 | MEDIUM | AUDIO + HUNGARIAN QA | Instructions, imperative morphophonology, and register-aware roleplay |
| L23 | MEDIUM | AUDIO + HUNGARIAN QA | Conditional dialogue and polite interaction |
| L24 | HIGH | NONE | Two-block connected-writing/speaking restructure without required new audio |
| L25 | MEDIUM | AUDIO + HUNGARIAN QA | Interview script, CV, and roleplay |
| L26 | MEDIUM | AUDIO + HUNGARIAN QA | Doctor/pharmacy health-help recording and safety-sensitive roleplays |
| L27 | HIGH | AUDIO + HUNGARIAN QA | Three audio situations and multi-scenario roleplay |
| L28 | HIGH | AUDIO + HUNGARIAN QA | Integrated capstone input, production portfolio, and reflection |

Dimension totals for the 27 lessons:

- Code complexity: LOW 5, MEDIUM 15, HIGH 7.
- Asset dependency: NONE 4, AUDIO 4, AUDIO + HUNGARIAN QA 19.

Every HIGH assignment has an explicit reason:

| Lesson | Why HIGH |
|---|---|
| L1 | Three required phonological recordings and discrimination design; stress model audio is optional exposure |
| L2 | New two-speaker input plus interaction and structured production |
| L4 | New form-recognition audio and mixed spoken/written question evidence |
| L5 | New number/time audio whose answer normalization must remain exact |
| L6 | Cross-lesson review graph, new audio, recording, writing, and reflection separation |
| L7 | New aural case task plus language correction and spiral boundary |
| L8 | New possessor audio plus connected family production |
| L10 | New location audio and reusable map/case-family interaction |
| L12 | New dialogue audio and two-block restructure |
| L13 | New tense audio plus L13/L20 scope boundary |
| L14 | New routine audio and connected oral/written production |
| L16 | New shopping audio, roleplay, money input, and assimilation work |
| L17 | New forecast asset and receptive-to-productive integrated flow |
| L18 | New modal audio plus personal-infinitive instructional restructure |
| L19 | New tense audio and plan/prediction contrast |
| L20 | New connected listening/reading and two-block past-system restructure |
| L21 | New contextual audio and cross-level conjugation consolidation |
| L22 | New instruction audio, imperative morphophonology, and register-aware roleplay |
| L23 | New conditional dialogue and interactive polite requests |
| L24 | Two-block restructure and paragraph/connected-speech evidence |
| L25 | New interview audio, structured CV, and major roleplay |
| L26 | New doctor/advice audio and two safety-sensitive roleplays |
| L27 | Three audio situations and reusable multi-scenario roleplay architecture |
| L28 | New integrated listening plus capstone evidence portfolio and reflection |

## 18. Cross-lesson dependencies and risk register

### Dependency map

| Upstream | Downstream | Dependency to preserve |
|---|---|---|
| L1-L5 | L6 | A0 review must reuse the migrated evidence patterns and vocabulary |
| L4 | L14 | Basic -ik preview develops into routine/reflexive use; eszik remains explicit irregular content |
| L5 | L16, L17 | Money, number, time, and month vocabulary is recycled in shopping and weather |
| L7 | L13 | Definite-conjugation preview is reinforced in introductory past contexts |
| L13 | L20 | Introductory past precedes the full regular/irregular and past-conjugation system |
| L20 | L21 | Full past contrast feeds definite/indefinite consolidation |
| L7, L13, L20 | L21 | One intentional definite-conjugation spiral; no premature claim of full mastery |
| L10 | L11 | Stable location/goal/source framework reused across case families |
| L10, L11 | L12 | Near cases are taught as the third family before selected postpositions |
| L9 | L17 | Comparison language is recycled for seasons/weather |
| frozen L15 | L16 | Reuse evidence architecture, not content or a literal slide template |
| L18 | L19 | Infinitive competence supports fog + infinitive |
| L22 | L23 | Polite request/register work supports conditional politeness |
| L23 | L24 | ha clauses and communicative functions support complex sentence connection |
| L24 | L25-L28 | Connected cause/contrast supports B1 domain production and capstone |
| L16, L26 | L27 | Transaction and roleplay interaction patterns are reused in travel |
| L21-L27 | L28 | Capstone samples prior evidence; it does not introduce a new grammar unit |

### Risk register

| Rank | Risk | Impacted scope | Mitigation / release gate |
|---:|---|---|---|
| 1 | Audio pipeline or asset gap produces exposure-only fallback while UI implies listening mastery | 23 migrated lessons plus frozen L15 missing MP3 | Published status must require file existence, playable load, validated transcript/questions, and a real answer set; missing audio can never yield DIRECT |
| 2 | Evidence inflation from completion, recording existence, quiz total, narration, or self-rating | All lessons | Central evidence tests must assert DIRECT/PARTIAL semantics; ExitCheck reports objective evidence, not activity completion |
| 3 | Accidental change to frozen L15 while generalizing infrastructure | L15 and shared components | Snapshot L15 data/behavior before each batch; require zero lesson15.ts and MODEL_LESSON_L15_SPEC.md diff |
| 4 | Generic components are not yet generic enough for all target tasks, especially menu-shaped ReadingTask data | Phase 3A, then L3, L7, L10-L14, L20, L23-L28 | Complete bounded Phase 3A before L3: backward-compatible generic prose mode, frozen L15 menu behavior, and compatibility fixtures |
| 5 | Hungarian answer keys, scripts, or distractors contain errors or multiple valid answers | All new content; especially L7, L20, L22, L26 | Native/qualified Hungarian QA is a publication gate; test option uniqueness and accepted-answer normalization |
| 6 | L12/L20/L24 overload returns because both blocks are rendered as one dense sequence | L12, L20, L24 | Visible block boundaries, block-level practice, and separate ExitCheck mapping |
| 7 | Stale LESSONS_META labels cause the migrated activity to appear under the wrong title | L2-L9 | Reconcile metadata titles with module titles before production rollout; keep IDs unchanged |
| 8 | Answer normalization accepts linguistically invalid forms or rejects valid accents/spacing | Controlled text-input activities | Per-item accepted answers, narrow normalization, negative tests, and language review |
| 9 | Session-only ActivityEvidence is interpreted as durable mastery history | All lessons | Keep phase-one reporting explicitly session-scoped; do not promise persistence until a separate product decision |
| 10 | Inline vocabulary and SRS map drift further during content edits | All lessons | Do not migrate SRS in this phase; document productive/passive/morphology categories and test effective vocabulary counts |
| 11 | A roleplay rubric becomes a hidden automated pass based on duration or number of turns | L2, L5, L6, L8, L10-L12, L14, L16, L18, L21-L27 | RolePlay remains PARTIAL without a qualified evaluator; turn count is completion only |
| 12 | Capstone becomes a high-stakes mock exam or overclaims B1 certification | L28 | Use portfolio language, objective-by-objective evidence, reflection, and honest completion wording |

The top five risks are ranks 1-5: audio validity, evidence inflation, L15 regression, component generality, and Hungarian language QA.

## 19. Exact implementation order

### Phase 3A — Shared Activity Generalization

Phase 3A is a bounded infrastructure prerequisite, not a lesson migration and not part of the 27-lesson count. It must complete before L3.

Purpose: generalize ReadingTask for ordinary prose/content while preserving the frozen L15 menu mode.

Phase 3A requirements:

- backward-compatible activity and ReadingTask types;
- existing L15 menu mode and behavior unchanged;
- a generic prose/content reading mode;
- no lesson content migration;
- compatibility tests for both menu and prose modes;
- no changes to L15 lesson data or MODEL_LESSON_L15_SPEC.md.

Phase 3A completion gate: shared-code tests pass, a prose-mode fixture renders and produces evidence correctly, the L15 compatibility fixture is unchanged, and no lesson module has been migrated.

The conceptual implementation order is:

Phase 3A -> L3 -> L4 -> L2 -> L5 -> L1 -> L6 -> L7 -> L10 -> L11 -> L8 -> L9 -> L14 -> L13 -> L12 -> L16 -> L17 -> L18 -> L19 -> L20 -> L22 -> L23 -> L21 -> L24 -> L25 -> L26 -> L27 -> L28

After Phase 3A, the exact lesson implementation order remains:

L3 -> L4 -> L2 -> L5 -> L1 -> L6 -> L7 -> L10 -> L11 -> L8 -> L9 -> L14 -> L13 -> L12 -> L16 -> L17 -> L18 -> L19 -> L20 -> L22 -> L23 -> L21 -> L24 -> L25 -> L26 -> L27 -> L28

This is an engineering rollout order, not a learner sequence.

| Level | Exact order | Safest first | Last and why |
|---|---|---|---|
| A0 | Phase 3A, then L3 -> L4 -> L2 -> L5 -> L1 -> L6 | Phase 3A isolates shared ReadingTask generalization; L3 then proves controlled answers and prose reading with no audio; L4 adds the first audio/form combination | L6 depends on all A0 evidence; L1 is placed late enough for the audio pipeline but before the review |
| A1 | L7 -> L10 -> L11 -> L8 -> L9 -> L14 -> L13 -> L12 | L7 is structurally bounded and fixes a P0 language/evidence defect; L10/L11 establish the reusable case-family pattern | L12 is the largest two-block restructure and depends on the location interaction pattern |
| A2 | L16 -> L17 -> L18 -> L19 -> L20 | L16 is closest to frozen L15's integrated flow and can prove safe component reuse | L20 depends on L13 and needs two blocks plus connected comprehension/narration |
| B1 | L22 -> L23 -> L21 -> L24 -> L25 -> L26 -> L27 -> L28 | L22/L23 establish reusable form-to-function and register-aware roleplay patterns | L28 depends on every prior B1 evidence type and is the capstone |

Batch gates:

1. Do not start L3 until Phase 3A passes its compatibility gate; Phase 3A must not migrate lesson content.
2. Do not start the next lesson until the current lesson passes its objective graph, language QA, automated tests, and manual evidence-semantics review.
3. Do not start L6, L12, L20, L24, or L28 until their prerequisite patterns have shipped without L15 regression.
4. Produce and QA audio before marking a lesson complete; placeholder or TTS-only listening leaves the lesson unfinished.
5. A P1 lesson may precede a P0 lesson only where it proves infrastructure needed to implement the P0 safely, as in L3 before L1/L5 and L16 before L17/L18.

## 20. Implementation and validation plan

### Per-lesson implementation workflow

Before the per-lesson workflow, complete Phase 3A exactly as specified in Section 19. This document does not authorize implementing it during the documentation freeze.

1. Snapshot lesson ID, title, objective IDs/count, slide IDs, quiz IDs/count, effective vocabulary count, and L15 regression baseline.
2. Confirm the master row, objective rows, and required asset rows for that lesson.
3. Make the smallest shared type/renderer change needed, preserving L15's exact behavior.
4. Add lesson activities in pedagogical order and wire every activity to existing objective IDs.
5. Add ExitCheck references only after the producing activity exists and its evidence kind is honest.
6. Add and validate published audio, transcript, questions, and answer keys.
7. Apply the listed quiz and vocabulary cleanup without expanding the lesson scope.
8. Run automated validation, language QA, render/interaction QA, and evidence-semantics QA.
9. Recheck L15 for zero content/behavior drift.
10. Ship one lesson, observe defects, then begin the next item in the exact order.

### Automated checks

- npm run validate:lessons
- npm test
- npm run lint
- npm run build
- Objective IDs remain unique and all references resolve.
- Course objective total remains 139 and frozen L15 remains six unless a separately approved curriculum change occurs.
- The 133 non-L15 objectives reconcile to 63 overall DIRECT and 70 overall PARTIAL targets; every overall-PARTIAL row exposes its component evidence.
- No objective with an unreviewed explicitly claimed speaking skill is overall DIRECT.
- Every migrated objective has at least one evidence-producing activity and an ExitCheck reference.
- No ExitCheck can upgrade PARTIAL RolePlay/Writing/recording evidence to DIRECT.
- ListeningTask with missing or unpublished audio cannot produce DIRECT evidence.
- The required-audio plan contains 27 assets across 23 lessons; standalone L1 stress audio is not required.
- Activity state resets correctly between lessons and distinguishes in-progress from finished evidence.
- Existing quizzes have one correct answer, unique meaningful options, and no metadata questions.
- Accepted-answer normalization has positive and negative tests, including accents, spacing, and invalid near-matches.
- L12/L20/L24 block references do not cross-wire objectives.
- L28 reports direct receptive/form evidence separately from partial productive evidence.
- Phase 3A prose mode and frozen L15 menu mode both pass compatibility tests before L3 begins.

### Manual and language QA

- Render every affected activity on desktop and mobile widths.
- Check keyboard navigation, focus order, labels, error messages, transcript access, replay controls, and recorder-permission failure.
- Verify that skip, retry, reveal transcript, and abandoned activity states do not manufacture evidence.
- Have a qualified Hungarian reviewer approve every new script, transcript, answer, accepted variant, distractor, functional chunk, and pronunciation target.
- Verify level-appropriate naturalness, speech rate, register, speaker distinction, and cultural safety.
- Confirm that medical and career scenarios teach language functions only and do not imply professional advice or certification.
- Compare lesson module titles against display metadata before rollout.

## 21. Definition of Done

A migrated lesson is done only when all conditions below are true:

- Its lesson ID and objective IDs are unchanged.
- Every objective appears in the Objective Evidence Matrix and maps to at least one implemented activity and one ExitCheck reference.
- The lesson follows its target archetype and the approved scope boundary.
- Existing useful exposition and tasks are preserved or deliberately converted; no content is silently discarded.
- Required activities in the master matrix exist; optional activities are either implemented with a reason or explicitly deferred.
- DIRECT evidence is limited to reliably checked objective performance.
- For a mixed objective, component evidence is retained separately and the overall status is PARTIAL whenever any explicitly claimed skill remains PARTIAL or NONE.
- Open RolePlay, AudioRecorder, and WritingTask evidence remains PARTIAL unless qualified review is present.
- Required listening uses a published, playable recording with validated transcript, question set, answer key, and manifest entry.
- TTS/narration/read-aloud is never the sole evidence for a listening objective.
- The existing quiz remains a retrieval checkpoint and all listed defective questions for that lesson are cleaned.
- Productive, passive-input, morphology, and functional-chunk vocabulary decisions are reflected without migrating SRS.
- New Hungarian content has passed qualified language QA.
- Automated validator, tests, lint, and build pass.
- Desktop/mobile rendering, accessibility, recorder failure, retry, skip, and evidence-state paths have been manually checked.
- L15 lesson data, objective graph, activity semantics, quiz, and frozen specification have no intentional diff.

The whole migration is done only when:

- Phase 3A is complete, backward compatible, and has not changed L15 data/spec or migrated lesson content.
- All 27 non-L15 lessons meet the per-lesson Definition of Done in the exact implementation order.
- All 133 non-L15 objectives have implemented traceable evidence.
- All 27 required new audio assets across 23 lessons are either published and QA-approved or the associated listening objective remains explicitly not done.
- The separate frozen-L15 missing audio dependency is resolved without refactoring L15.
- Priority counts reconcile to P0=14, P1=13, P2=0 and complexity counts reconcile to LOW=1, MEDIUM=2, HIGH=24.
- L12, L20, and L24 retain their lesson IDs and have two visible pedagogical blocks.
- The L7 -> L13 -> L20 -> L21 conjugation spiral and L4 -> L14 -ik connection are visible and tested.
- L28 remains a low-stakes integrated portfolio/capstone, not a B1 certification claim.
- No SRS migration or unrelated curriculum redesign has entered the phase.

## 22. Final verification checklist and implementation decisions

Document completeness:

- [x] All 28 lesson modules were reviewed.
- [x] The 27 non-L15 lessons appear once in the master matrix.
- [x] All 133 non-L15 objectives appear once in the objective matrix.
- [x] L15 is documented only as the frozen reference and dependency.
- [x] Every lesson has an activity decision, evidence direction, quiz role, audio decision, vocabulary action, priority, complexity, and implementation note.
- [x] Listening, speaking, writing, pronunciation, vocabulary, and quiz plans are separated.
- [x] Mixed-objective targets expose component evidence and remain overall PARTIAL when any claimed skill is unqualified.
- [x] L1 phonology corrects gy/ty/ny versus j/ly, Russian-palatalization framing, and a/á/e/é quality.
- [x] Required audio reconciles to 27 assets across 23 lessons with no standalone stress asset.
- [x] P0/P1/P2 and LOW/MEDIUM/HIGH totals reconcile.
- [x] Code complexity and asset dependency are reported separately.
- [x] The implementation order is exact and dependency-aware.
- [x] Phase 3A is documented as a bounded prerequisite before L3.
- [x] Validation gates and Definition of Done are explicit.

Implementation defaults that remove ambiguity:

1. Generalize ReadingTask only in Phase 3A before L3; preserve backward compatibility and L15 behavior with tests.
2. Keep ActivityEvidence session-scoped in this migration. Durable learner-history storage is a separate product project.
3. Keep open production PARTIAL by default. Do not delay content migration waiting for an automated speech/writing evaluator.
4. Use MP3/published manifest assets for required listening unless the existing audio pipeline adopts another tested format before implementation.
5. Reconcile stale L2-L9 display metadata as a bounded rollout prerequisite, without renaming lesson IDs or objectives.
6. Treat the L15 missing recording as an asset-only repair under the frozen spec; no lesson15.ts refactor is required or allowed.
7. Keep Phase 3A separate from L3: prove ordinary prose mode and the L15 menu compatibility fixture before any lesson content migration.
8. Keep this document as the planning baseline. Any objective addition/removal, archetype change beyond L21/L24, lesson split, SRS work, or evidence-policy change requires a separately reviewed plan update.

Freeze statement: this matrix is FROZEN / APPROVED FOR IMPLEMENTATION. Phase 3A and lesson implementation are explicitly outside this documentation-only patch.
