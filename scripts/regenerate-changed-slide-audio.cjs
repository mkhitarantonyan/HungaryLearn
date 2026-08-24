const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Генерирует ТОЛЬКО слайды, которые нужно переозвучить.
// Итоговые MP3 сразу кладутся в public/audio и заменяют существующие N.S.mp3.
//
// Голоса сохранены как в исходном скрипте:
//   Hungarian: hu-HU-TamasNeural
//   Russian:   ru-RU-DmitryNeural
//
// Запуск из корня проекта:
//   node scripts/regenerate-changed-slide-audio.cjs
//
// Требования:
//   edge-tts должен быть доступен из командной строки.

const OUTPUT_DIR = path.resolve(process.cwd(), 'public', 'audio');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

function sleep(ms) {
    const sab = new SharedArrayBuffer(4);
    const view = new Int32Array(sab);
    Atomics.wait(view, 0, 0, ms);
}

function generateWithRetry(voice, text, outFile, maxRetries = 5) {
    if (!/\p{L}/u.test(text)) {
        throw new Error(`Фрагмент без букв, нечего озвучивать: "${text}"`);
    }

    let lastError;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            execFileSync('edge-tts', [
                '--voice', voice,
                `--text=${text}`,
                '--write-media', outFile
            ], {
                stdio: ['ignore', 'ignore', 'pipe'],
                timeout: 20000,
                killSignal: 'SIGKILL'
            });
            return;
        } catch (err) {
            lastError = err;
            const msg = (err.stderr ? err.stderr.toString() : err.message);
            const isNoAudio = msg.includes('NoAudioReceived') || msg.includes('No audio was received');
            const isTimeout = err.signal === 'SIGKILL' || err.code === 'ETIMEDOUT' || err.killed;

            if (attempt < maxRetries) {
                console.warn(
                    `  ⚠ Попытка ${attempt}/${maxRetries} не удалась` +
                    `${isNoAudio ? ' (NoAudioReceived, сервер не ответил)' : ''}` +
                    `${isTimeout ? ' (завис — превышен таймаут, процесс убит)' : ''}, жду и повторяю...`
                );
                sleep(1500 * attempt);
            }
        }
    }
    throw lastError;
}

const slides = [
    {
        "lesson": 1,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Első szavak"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Первые 10 слов для практики чтения"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Прослушайте каждое слово, затем скройте переводы и проверьте узнавание. Карточки помогают тренироваться, но не оценивают произношение."
            }
        ]
    },
    {
        "lesson": 1,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Öt szó hangosan"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Запишите пять декодируемых слов"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Прочитайте все пять слов одним заданием и остановите запись. Наличие записи подтверждает попытку, но не правильность произношения."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Пять обязательных слов"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "gyár · tyúk · nyolc · játék · folyó"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "завод · курица · восемь · игра · река"
            }
        ]
    },
    {
        "lesson": 1,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Что подтверждено в уроке"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "После урока пройдите короткую проверку. Задания на слух будут доступны после публикации трёх записей; произношение по вашей записи требует отдельной проверки."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Венгерский алфавит традиционно содержит 44 буквы/буквенные единицы , включая диграфы и триграф"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "dzs;"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "это не подсчёт звуков."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "s = /ʃ/ ,"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "а"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "sz = /s/ . gy = /ɟ/ , ty = /c/ , ny = /ɲ/ —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "отдельные венгерские фонемы."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "j = ly = /j/"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "в современном стандартном произношении; различие остаётся в написании. У"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "a/á"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "e/é"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "важны качество и длительность; в остальных изученных парах долгота остаётся центральной. В изолированном слове основное лексическое ударение начинается на первом слоге."
            }
        ]
    },
    {
        "lesson": 2,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Párbeszéd"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Первый диалог"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "A: Szia! Hogy hívnak? B: Szia! Annának hívnak. És téged? A: Engem Mkhitárnak hívnak. Honnan vagy? B: Örményországból vagyok, de Budapesten élek. A: Nagyon örülök! Mi a foglalkozásod? B: Programozó vagyok. És te?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Готовые блоки:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Honnan vagy?, Örményországból vagyok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Budapesten élek"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "используйте целиком. Формальные правила падежных форм будут позже. Задание 3. Прочитайте диалог вслух 2 раза: один раз за A, один раз за B."
            }
        ]
    },
    {
        "lesson": 2,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Краткое содержание 2-го урока"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Основные приветствия: официальные и неофициальные Личные местоимения:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "én, te, ő, mi, ti, ők"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Глагол «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "lenni»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "в настоящем времени:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "vagyok, vagy, van, vagyunk, vagytok, vannak"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "При описании с помощью прилагательного в 3-м лице «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "van/vannak»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "опускается Вопрос — интонацией, отрицание — с помощью «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "nem»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Домашнее задание: напишите рассказ о себе из 5 предложений на венгерском языке и читайте его вслух каждый день, пока произношение не станет плавным."
            }
        ]
    },
    {
        "lesson": 3,
        "id": 3,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Az egy"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "«egy» —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и «один», и неопределенный артикль"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Устная практика: оглянись вокруг и назови два предмета по модели «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "egy +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "существительное». Запись не требуется."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "egy"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "означает и число «один», и служит в качестве неопределенного артикля («"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "a/an»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "в английском)."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "egy ház ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "какой-то дом / один дом)"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "egy könyv ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "какая-то книга) Важно: в изучаемом значении"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "egy"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "употребляется только с существительным в единственном числе. С формами множественного числа"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "egy"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "не используется. Наличие или отсутствие"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "a/az"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "перед существительным во множественном числе зависит от определённости и контекста. Не применяйте правило «множественное число = без артикля»."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Vannak könyvek. ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Есть книги.) A"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "könyvek az asztalon vannak. ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Книги находятся на столе.)"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Szeretem a könyveket. ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Я люблю книги.)"
            }
        ]
    },
    {
        "lesson": 3,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Краткое содержание 3-го урока"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Венгерское существительное не имеет рода Определенный артикль:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "a ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "перед согласной) /"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "az ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "перед гласной) Неопределенный артикль:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "egy ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "также «один») Множественное число: -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "k ,"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "с соединительной гласной (-"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ok/-ek/-ök)"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "или с удлинением"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "a→á/e→é"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Некоторые слова имеют неправильное множественное число (группа -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ak) —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "учить отдельно После числа существительное остается в единственном числе Домашнее задание: запишите 10 предметов из вашего дома в единственном и множественном числе, рядом друг с другом. В следующем уроке мы перейдем к спряжению в настоящем времени — это первый шаг к построению полноценных предложений."
            }
        ]
    },
    {
        "lesson": 4,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверь себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проспрягайте глагол «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "szeret» ("
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "любить) во всех 6 лицах Какая форма правильная: «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "te olvassz»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "или «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "te olvasol»?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Объясните почему Образуйте форму «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "én»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "от глагола «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "lakik»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Мы каждый день учим венгерский» Выберите правильное окончание: «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mi ott __ (dolgoz-)»"
            }
        ]
    },
    {
        "lesson": 4,
        "id": 12,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Краткое содержание 4-го урока"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Устная практика: произнеси утверждение, отрицание и вопрос. Затем сравни свою запись с образцом."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Окончания неопределенного спряжения: -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ok/-ek/-ök, -sz, —, -unk/-ünk, -tok/-tek/-tök, -nak/-nek"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "В 3-м лице ("
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ő)"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "нет никаких окончаний В основах на шипящие/свистящие -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "sz"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "для «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "te»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "становится -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ol/-el/-öl -ik"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "глаголы здесь только предварительно: в изучаемых примерах"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "én dolgozom / lakom;"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "особые формы нужно проверять, а систематизация продолжится в уроке 14 Домашнее задание: выберите 5 новых глаголов, письменно проспрягайте каждый из них во всех 6 лицах. В следующем уроке мы перейдем к числам, времени и дням недели — вы научитесь говорить о том, когда вы что-либо делаете."
            }
        ]
    },
    {
        "lesson": 5,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hallás utáni számok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Десять услышанных чисел"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Прослушай блок A и введи каждое число по-венгерски. Задание станет доступно после публикации отдельной записи."
            }
        ]
    },
    {
        "lesson": 5,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Dátum és program"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Дата, день и время в одном расписании"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Прослушай блок B и выбери точные детали даты и расписания. Ответы нужно найти именно в аудиозаписи, а не в календаре."
            }
        ]
    },
    {
        "lesson": 5,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Rövid időpont-egyeztetés"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Числа, время и два обмена о встрече"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Запиши короткие образцы, затем прослушай их и сравни с моделями урока."
            }
        ]
    },
    {
        "lesson": 5,
        "id": 12,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Числа, календарь, время и"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "evidence"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Числа 1–100:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "kettő / két, tizen-, huszon-,"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "десятки,"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "száz"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Дни недели и месяцы в последовательности Венгерская письменная дата и один"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "spoken-date chunk Hány óra van? / óra van / -kor"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "для времени действия"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "perc ="
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "минута;"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "másodperc ="
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "секунда"
            }
        ]
    },
    {
        "lesson": 6,
        "id": 2,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Kiejtés és olvasás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Звуки и чтение из урока 1"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Повтори:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "s = /ʃ/ , sz = /s/ , gy = /ɟ/ , ty = /c/ , ny = /ɲ/ , j = ly = /j/ ."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Долгие гласные значимы, а основное ударение падает на первый слог."
            }
        ]
    },
    {
        "lesson": 6,
        "id": 6,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hallás utáni ismétlés"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Короткое знакомство и расписание"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Прослушай мини-диалог и ответь на пять вопросов, затем выполни ролевой диалог о расписании. Аудирование станет доступно после публикации отдельной записи. Текст диалога можно использовать для подготовки."
            }
        ]
    },
    {
        "lesson": 6,
        "id": 7,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Az én profilom"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Письменный и устный рассказ о себе"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Сначала напиши короткий профиль, затем запиши те же данные устно. Используй только структуры уроков 1–5."
            }
        ]
    },
    {
        "lesson": 6,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mit mutat az ExitCheck?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Что уже получается и что повторить"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Посмотри на результаты и отметь, что уже можно проверить прямо сейчас: Проверено в уроке — спряжение, множественное число, артикли и чтение слов. Для самопроверки — произношение, письмо и говорение; их полезно переслушать или показать преподавателю."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "MISSING —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "например, ещё не опубликованное аудио для аудирования. Ответь себе на три вопроса: какие две области ощущаются сильными? какую одну область повторить? какое одно следующее действие выбрать? Эта рефлексия — не оценка мастерства: галочки и самооценка никогда не повышают уровень владения языком."
            }
        ]
    },
    {
        "lesson": 6,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Az A0 ismétlés vége"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Честное завершение обзора A0"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Ты завершил обзор материала A0."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ExitCheck"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "показывает, какие компоненты подтверждены напрямую, какие требуют проверки и что стоит повторить. Автоматически проверяется : чтение слов, спряжение, множественное число и артикли. Проверь самостоятельно : произношение, письмо и говорение."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "MISSING :"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "аудирование остаётся открытым до публикации"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "MP3."
            }
        ]
    },
    {
        "lesson": 7,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Fordítás és beszéd"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Точные фразы и запись"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Сначала введи пять коротких переводов. Затем запиши три модели и сравни речь с написанными формами."
            }
        ]
    },
    {
        "lesson": 7,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hallásértés"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Только по реальной записи"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Отдельная запись для этого задания ещё не опубликована, поэтому аудирование пока недоступно."
            }
        ]
    },
    {
        "lesson": 7,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Что подтверждено"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Прямое дополнение обычно получает окончание -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "t ."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "После согласных выбор голого -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "t"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "или соединительной гласной частично лексический: учи частые пары."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Látlak. —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "основная форма «Я вижу тебя». Письменные формы проверяются в уроке; устную запись сравни с образцом. Аудирование откроется после публикации записи."
            }
        ]
    },
    {
        "lesson": 8,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Írás: a családom"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Описание из 4–5 предложений"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Используй минимум две притяжательные формы. После написания проверь окончания по таблице урока."
            }
        ]
    },
    {
        "lesson": 8,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Beszéd: a családom"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Короткое устное описание"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Наличие записи не доказывает языковую правильность без проверки."
            }
        ]
    },
    {
        "lesson": 8,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hallásértés"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Только по специальной записи"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Отдельная запись для этого задания ещё не опубликована, поэтому аудирование пока недоступно."
            }
        ]
    },
    {
        "lesson": 8,
        "id": 12,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверь пять целей"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Продуктивная тема: один предмет и владельцы"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "én/te/ő."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Владелец отмечается на существительном:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "házam, házad, háza."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Семейные формы:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "anyám/anyád/anyja, apám/apád/apja, testvérem/testvéred/testvére."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Явное местоимение служит контрасту. Описание семьи: 4–5 предложений и минимум две притяжательные формы."
            }
        ]
    },
    {
        "lesson": 9,
        "id": 7,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Párbeszéd"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "В магазине одежды"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "A: Tetszik ez a piros kabát? B: Szép, de a kék kabát szebb és olcsóbb. A: Tényleg? És a fekete kabát? B: Az a legdrágább. A kék a legjobb választás."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Диалог даёт контекст, но само чтение вслух не считается доказательством владения материалом."
            }
        ]
    },
    {
        "lesson": 9,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Итоги 9-го урока"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Перед существительным прилагательное обычно не получает суффиксы числа и падежа: их несёт существительное Частые сравнительные формы нужно узнавать и образовывать по изученным моделям Стабильная конструкция сравнения: X + сравнительная форма +"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "mint + Y"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Превосходная степень:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "leg- +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "сравнительная форма ("
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "jobb → legjobb)"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Коротко сравнивай людей, места и предметы в устной и письменной речи В следующем уроке начнётся новая тема — выражение местоположения и направления."
            }
        ]
    },
    {
        "lesson": 10,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hol vagy most?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Понимаем пространственные отношения в диалоге"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Прочитай диалог и проследи три отношения: место внутри, цель внутрь и источник изнутри."
            }
        ]
    },
    {
        "lesson": 10,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Írás és beszéd"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Точные предложения и короткая запись"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Письменная часть проверяет пять коротких ситуаций. После записи трёх ответов прослушай их и сверь падежные формы с моделями."
            }
        ]
    },
    {
        "lesson": 10,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hallásértés"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Только по реальной записи"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Отдельная запись для этого задания ещё не опубликована, поэтому аудирование пока недоступно."
            }
        ]
    },
    {
        "lesson": 10,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверь пять целей"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hol? —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "место внутри: -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ban/-ben . Hová? —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "цель внутрь: -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ba/-be . Honnan? —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "источник изнутри: -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ból/-ből ."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Падеж выбирается по пространственному отношению, а не просто по типу глагола."
            }
        ]
    },
    {
        "lesson": 11,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Írás és beszéd"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Точные предложения и запись для проверки"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Пять коротких письменных ситуаций проверяются в уроке. После записи трёх ответов прослушай их и сверь окончания с моделями."
            }
        ]
    },
    {
        "lesson": 11,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверь пять целей"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hol? —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "место: -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "n/-on/-en/-ön . Hová? —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "цель: -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ra/-re . Honnan? —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "источник: -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ról/-ről ."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Сначала выбирай отношение и пространственную семью, затем формируй слово."
            }
        ]
    },
    {
        "lesson": 12,
        "id": 7,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Kihez? Kinél? Kitől?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Короткий обмен на слух"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Определи отношение, цель и источник в коротком разговоре. Отдельная запись для задания ещё не опубликована, поэтому аудирование пока недоступно."
            }
        ]
    },
    {
        "lesson": 12,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Írás és beszéd"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Письмо и говорение"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Используй ядро урока в коротком обмене. Открытые ответы требуют проверки и не становятся автоматически правильными после отправки или записи."
            }
        ]
    },
    {
        "lesson": 12,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Személyes alakok és idő"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Личные формы и временные"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "chunks — enrichment"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Дополнительное распознавание:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "nálam/nálad/nála; hozzám/ hozzád /hozzá; tőlem/tőled/tőle."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "У этих падежных форм есть личные формы:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "nálam «"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "у меня»,"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "hozzám «"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "ко мне»,"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tőlem «"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "от меня». Полезные временные"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "chunks: kilenctől —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "с девяти часов;"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ebéd előtt —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "до обеда;"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ebéd után —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "после обеда;"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "két nap múlva —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "через два дня. Эти формы даны для знакомства. В обязательных упражнениях урока они не проверяются."
            }
        ]
    },
    {
        "lesson": 12,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Три отношения в практическом контексте"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hol? — -nál/-nél Hová? — -hoz/-hez/-höz Honnan? — -tól/-től"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Выбранные послелоги и личные формы остаются дополнительным материалом Следующий урок вводит прошедшее время. В"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L12"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "остаёмся в настоящем времени и работаем с местом и направлением."
            }
        ]
    },
    {
        "lesson": 13,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Ma vagy tegnap?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Настоящее и прошлое на слух"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Отличи сегодняшнее действие от вчерашнего и услышь маркер времени. Отдельная запись для задания ещё не опубликована, поэтому аудирование пока недоступно."
            }
        ]
    },
    {
        "lesson": 13,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Kitekintés: tárgyas ragozás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Короткий взгляд вперёд"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "На будущее: определённость дополнения может влиять на спряжение. В некоторых лицах формы совпадают:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Olvastam egy könyvet / Olvastam a könyvet"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "не показывает различие парадигм. Пока достаточно заметить этот контраст. Полная система относится к уроку 20."
            }
        ]
    },
    {
        "lesson": 13,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mesélj a tegnapról!"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Устный рассказ"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Расскажи о прошлом событии. Сам факт записи не доказывает языковую правильность."
            }
        ]
    },
    {
        "lesson": 13,
        "id": 12,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Впереди урок 14"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Частотные формы прошлого Формы"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "volt"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "в контексте Настоящее и прошлое в тексте Короткий рассказ о прошлом Урок 14 завершит уровень A1. Полная система прошедшего времени будет в уроке 20."
            }
        ]
    },
    {
        "lesson": 14,
        "id": 7,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mikor kelsz fel?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Расписание в вопросах и ответах"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "A: Hány órakor kelsz fel általában? B: Általában hét órakor kelek fel. A: És mikor fekszel le? B: Általában éjfél körül fekszem le."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Отдельная запись для аудирования ещё не опубликована, поэтому задание пока недоступно."
            }
        ]
    },
    {
        "lesson": 14,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Итоги урока 14"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "-ik"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "обозначает класс глагола, а не автоматическое возвратное значение Формы изученных"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "routine-"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "глаголов употребляются как готовые словарные модели Время и последовательность связывают действия в рассказ о дне"
            }
        ]
    },
    {
        "lesson": 16,
        "id": 12,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверка целей"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Ты потренировал формы -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "val/-vel,"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "письменную ассимиляцию, средство и сопровождение, а также короткую покупку с ценой, количеством и оплатой. В следующем уроке — погода и времена года."
            }
        ]
    },
    {
        "lesson": 17,
        "id": 7,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Időjárás-jelentés"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Понимаем короткий прогноз на слух"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "В коротком прогнозе ищи пять вещей: место, день, облачность/осадки, температуру и ещё одну погодную деталь . Полезные опоры:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ma —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "сегодня,"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "holnap —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "завтра,"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "délután —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "после полудня,"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "este —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "вечером,"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "napos —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "солнечный."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Holnap ... lesz"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "встречается здесь как готовая форма для понимания прогноза. Будущее время с"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fog +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив будет в"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L19."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Отдельная запись для этого задания ещё не опубликована, поэтому аудирование пока недоступно."
            }
        ]
    },
    {
        "lesson": 17,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Kiegészítő szókincs"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Ещё погодные слова для узнавания"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "vihar —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "буря / шторм"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "köd —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "туман"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "szivárvány —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "радуга"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "hőség —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "жара Это расширение словаря. Эти четыре слова не являются отдельной обязательной целью"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L17."
            }
        ]
    },
    {
        "lesson": 17,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверка целей 17-го урока"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Базовые погодные модели:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Süt a nap, Esik az eső, Fúj a szél, Havazik"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Температура:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Hány fok van? / Húsz fok van; Meleg van / Hideg van"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Сезоны и 12 месяцев"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tavasszal, nyáron, ősszel, télen"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Сравнение сезонов через знакомую модель -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "bb + mint"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Короткий прогноз на слух станет доступен после публикации отдельной записи Домашнее задание. Напиши и запиши 3–5 предложений, сравнивая погоду минимум в двух сезонах."
            }
        ]
    },
    {
        "lesson": 18,
        "id": 4,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Személyragos főnévi igenév"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Продуктивно только ограниченный набор"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Кто"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "menni dolgozni tanulni én mennem kell dolgoznom kell tanulnom kell te menned kell dolgoznod kell tanulnod kell ő mennie kell dolgoznia kell tanulnia kell"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Граница урока: в упражнениях формируем только"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "én/te/ő"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "с"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "menni, dolgozni"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tanulni."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Формы"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "mennünk, mennetek, menniük"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "пока достаточно узнавать."
            }
        ]
    },
    {
        "lesson": 18,
        "id": 7,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mit jelent a mondat?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Необходимость, способность, разрешение и желание"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Сначала определи функцию, затем выбери конструкцию: Нужно мне/тебе/ему сделать → личный инфинитив +"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "kell"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Умею / способен →"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tud +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив Можно / разрешено в ситуации →"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "lehet +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив Хотел(а) бы →"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "szeretnék +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив Хочу / намерен прямо →"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "akarok +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив После упражнений используй эти модели в собственных письменных и устных фразах."
            }
        ]
    },
    {
        "lesson": 18,
        "id": 8,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mit kell, lehet, tud és akar?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Узнаём функцию на слух"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "В коротком диалоге слушай не отдельное «модальное слово», а связку целиком: что человек должен сделать, что умеет/может, что разрешено и чего он хочет . Отдельная запись для этого задания ещё не опубликована, поэтому аудирование пока недоступно."
            }
        ]
    },
    {
        "lesson": 18,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Öt rövid válasz"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Пять функций в собственных фразах"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Теперь используй модели в своих коротких фразах: необходимость, способность, разрешение/возможность, вежливое желание и прямое желание. После написания проверь, соответствует ли каждая конструкция нужному смыслу."
            }
        ]
    },
    {
        "lesson": 18,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mondd el!"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Короткие модальные фразы вслух"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Запиши 4–5 коротких фраз, используя модели"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L18."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Смысл важнее скорости: каждая конструкция должна выполнять свою функцию. Прослушай запись и проверь, ясно ли различаются необходимость, способность, возможность и желание."
            }
        ]
    },
    {
        "lesson": 18,
        "id": 12,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверка целей 18-го урока"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Базовые инфинитивы на -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ni"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и частые формы"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "menni, enni, inni, lenni"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Ограниченная модель личного инфинитива с"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "kell: mennem/menned/mennie"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и изученные аналоги"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tud +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив — способность;"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "lehet +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив — разрешение/ситуационная возможность"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "szeretnék +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив — вежливое желание;"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "akarok +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив — прямое желание/намерение Модальные значения на слух будут проверяться по отдельной записи Домашнее задание. Напиши и запиши пять коротких фраз: с"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "kell, tud, lehet, szeretnék"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "akarok."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Не ставь личный инфинитив после"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tud/lehet/szeretnék/akarok:"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "модель"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "mennem kell"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "относится к"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "kell."
            }
        ]
    },
    {
        "lesson": 19,
        "id": 3,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fogok, fogsz, fog..."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Продуктивно: неопределённая парадигма"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Лицо Форма Пример"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "én fogok tanulni fogok te fogsz dolgozni fogsz ő fog utazni fog mi fogunk főzni fogunk ti fogtok tanulni fogtok ők fognak dolgozni fognak"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Главное в"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L19:"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "эти шесть неопределённых форм нужно уметь образовать. С определёнными формами"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fog"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "познакомимся на следующем слайде."
            }
        ]
    },
    {
        "lesson": 19,
        "id": 4,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fogok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "или"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fogom?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Пока учимся узнавать контраст"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Знакомый контраст объекта влияет и на форму"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fog ."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Сравни:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Olvasni fogok egy könyvet. —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Я буду читать одну / какую-то книгу."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "El fogom olvasni a könyvet. —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Я прочитаю эту / определённую книгу. Можно встретить формы"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fogom, fogod, fogja, fogjuk, fogjátok, fogják ."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Они принадлежат определённому спряжению. Граница"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L19:"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "здесь достаточно узнавать этот контраст и форму"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fogom"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "в знакомом контексте. Полное продуктивное владение системой определённого/неопределённого спряжения не является условием прохождения"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L19."
            }
        ]
    },
    {
        "lesson": 19,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mikor történik?"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Прошлое, настоящее, планы и прогноз на слух"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "В записи прозвучит короткий рассказ: одно событие произошло вчера, одно происходит сегодня, остальные относятся к будущему. Отдельная запись для этого задания ещё не опубликована, поэтому аудирование пока недоступно."
            }
        ]
    },
    {
        "lesson": 19,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Tervek és jóslatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Три плана и три простых прогноза"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Теперь используем будущее не только в таблице. Сначала сформулируй реальные планы, затем простые предположения о будущем. Опора для плана:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Jövő héten ... fogok. / Szombaton ... megyek."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Опора для прогноза:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Szerintem +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "инфинитив +"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fog."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "После выполнения перечитай и прослушай ответы: проверь маркеры времени и формы"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fog."
            }
        ]
    },
    {
        "lesson": 19,
        "id": 11,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Összefoglalás"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Что должно остаться после"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L19"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Явное будущее: инфинитив +"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fog ."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Основная неопределённая парадигма:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fogok, fogsz, fog, fogunk, fogtok, fognak ."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Отрицание:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "nem"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "перед"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fog-"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "формой. Настоящее время с будущим маркером тоже может выражать план."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "szerintem +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "конструкция с"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fog"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "даёт простую модель прогноза. Определённые формы"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fogom..."
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "пока достаточно узнавать."
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "L20"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "продолжит временную систему: там систематизируем прошедшее время и оба типа спряжения."
            }
        ]
    },
    {
        "lesson": 20,
        "id": 10,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверьте себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Поставьте в прошедшее время: „"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tanulok“, „dolgozom“, „vagyok“"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Мы вчера видели этот фильм» (определённое спряжение) Спрягайте „"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "eszik“"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "в прошедшем времени всеми 6 лицами (неопределённое) Объясните, почему у"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ő-"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "формы нет личного окончания в прошедшем времени Составьте рассказ из 6 предложений о вашем прошлом отпуске"
            }
        ]
    },
    {
        "lesson": 21,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверьте себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Выберите правильную форму: „"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Látom / látok engem?“"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Я вижу тебя» (используйте форму -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "lak/-lek)"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Я знаю, что ты прав» (обратите внимание на придаточное) Почему в „"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Látom Pétert”"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "используется определённое спряжение, а в „"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Látok egy embert” —"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "неопределённое? Составьте 3 предложения с формой -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "lak/-lek"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "для разных глаголов"
            }
        ]
    },
    {
        "lesson": 22,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверьте себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Образуйте повелительное наклонение ("
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "te,"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "неопределённое) от:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tanul, ír, olvas, hoz, mutat"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Образуйте повелительное наклонение ("
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "te,"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "определённое) от:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "olvas, ír, mond"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Будьте добры, дайте один чай» (вежливая форма"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Ön)"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Объясните ассимиляцию в словах „"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "hozz!“, „olvass!“, „mutass!“"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Составьте 3 вежливых просьбы для ресторана или магазина"
            }
        ]
    },
    {
        "lesson": 23,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверьте себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Образуйте условную форму (1-е л. ед.ч., неопределённая) от:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tanul, dolgozik, utazik, van"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Если бы у меня было время, я прочитал бы эту книгу» Составьте вежливую просьбу в кафе с помощью"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "kérhetnék"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Было бы хорошо поехать в Будапешт» Составьте предложение на тему «Что бы я сделал, если бы выиграл в лотерею» (1-2 предложения)"
            }
        ]
    },
    {
        "lesson": 24,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверьте себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Соедините два предложения с помощью"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "mert: „Nem jöttem“ + „Sok dolgom volt“"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Соедините с помощью"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ezért: „Esik az eső“ + „Nem megyünk ki“"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Он пришёл, чтобы помочь» (помните про"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "hogy +"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "повелительное наклонение!) Переведите: «Я знаю, что ты здесь» Составьте сложное предложение с 2 союзами (например,"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "mert"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ezért)"
            }
        ]
    },
    {
        "lesson": 25,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверьте себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Ответьте на вопрос „"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Mivel foglalkozol?“"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "двумя способами (через або через -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ként)"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Назовите 5 офисных терминов (коллега, зарплата, совещание, офис, начальник) Переведите: «У меня 3 года опыта в сфере программирования» Переведите: «Проект будет готов к понедельнику» Составьте краткое устное резюме из 4 предложений про себя"
            }
        ]
    },
    {
        "lesson": 26,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверьте себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Скажите «У меня болит...» для слов:"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "fej, torok, has, fog, hát"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «У меня температура и насморк» Как попросить в аптеке «что-нибудь от кашля»? Переведите инструкцию врача: «Принимайте это лекарство два раза в день» Составьте диалог из 4 предложений между врачом и пациентом"
            }
        ]
    },
    {
        "lesson": 27,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Gyakorlatok"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Проверьте себя"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Назовите 5 видов транспорта с суффиксом -"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "val/-vel"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Купите в кассе билет туда-обратно до Будапешта Забронируйте номер в отеле на 3 ночи для 2 человек Спросите дорогу у прохожего до ближайшего метро Переведите: «Поезд отправляется со 2-го пути»"
            }
        ]
    },
    {
        "lesson": 28,
        "id": 9,
        "segments": [
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Záróteszt"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Финальный самоконтроль B1"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Напишите 3 формы глагола"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "tanul:"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "прошедшее ("
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ő),"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "повелительное ("
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ő),"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "условное ("
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ő)"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Составьте условное предложение с"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "ha"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "lenne"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Объясните разницу между «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Tudom, hogy jön»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "и «"
            },
            {
                "lang": "hu",
                "voice": "hu-HU-TamasNeural",
                "text": "Azt akarom, hogy jöjjön»"
            },
            {
                "lang": "ru",
                "voice": "ru-RU-DmitryNeural",
                "text": "Переведите: «Если бы у меня было время, я поехал бы в Будапешт» Напишите сочинение о себе из 10 предложений (имя, профессия, где живете, почему учите венгерский, планы)"
            }
        ]
    }
];

console.log(`Запуск переозвучки ${slides.length} изменённых слайдов...`);
console.log(`Папка назначения: ${OUTPUT_DIR}`);

slides.forEach(slide => {
    const finalName = `${slide.lesson}.${slide.id}.mp3`;
    const finalPath = path.join(OUTPUT_DIR, finalName);

    console.log(`\n--- Урок ${slide.lesson}, слайд ${slide.id} → ${finalName} ---`);

    const tempFiles = [];

    slide.segments.forEach((segment, index) => {
        const tempPath = path.join(
            OUTPUT_DIR,
            `.__temp_${slide.lesson}_${slide.id}_part_${index}.mp3`
        );

        console.log(
            `Генерация фрагмента ${index + 1}/${slide.segments.length} ` +
            `(${segment.lang}, ${segment.voice})...`
        );

        try {
            generateWithRetry(segment.voice, segment.text, tempPath);
            tempFiles.push(tempPath);
        } catch (error) {
            console.error(
                `❌ Не удалось сгенерировать фрагмент ` +
                `(урок ${slide.lesson}, слайд ${slide.id}, часть ${index + 1}): "${segment.text}"`
            );
            console.error(error.stderr ? error.stderr.toString() : error.message);

            // Не перезаписываем старый итоговый MP3 неполным файлом.
            tempFiles.forEach(file => {
                if (fs.existsSync(file)) fs.unlinkSync(file);
            });
            throw error;
        }

        sleep(300);
    });

    if (tempFiles.length === slide.segments.length && tempFiles.length > 0) {
        // Сохраняем поведение исходного скрипта: MP3-фрагменты склеиваются
        // последовательным объединением буферов.
        const finalBuffer = Buffer.concat(tempFiles.map(file => fs.readFileSync(file)));

        // Сначала пишем временный итоговый файл, затем атомарно заменяем N.S.mp3.
        const stagedPath = `${finalPath}.new`;
        fs.writeFileSync(stagedPath, finalBuffer);
        fs.renameSync(stagedPath, finalPath);

        tempFiles.forEach(file => {
            if (fs.existsSync(file)) fs.unlinkSync(file);
        });

        console.log(`✅ ${finalName} создан/заменён`);
    }
});

console.log('\n🎉 Переозвучка всех выбранных слайдов завершена.');
