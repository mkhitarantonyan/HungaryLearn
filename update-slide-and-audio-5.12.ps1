$ErrorActionPreference = "Stop"

# Обновление итогового слайда 5.12 и его аудио.
# Скрипт:
# 1) обновляет только слайд 5.12 в lesson5.ts;
# 2) создаёт новое public/audio/5.12.mp3;
# 3) не показывает создание отдельных аудиофрагментов;
# 4) при временной ошибке Edge TTS молча повторяет запрос и пробует py -m edge_tts;
# 5) старое аудио заменяется только после успешного создания нового;
# 6) не создаёт резервную копию и не изменяет dist;
# 7) удаляет временные файлы и сам себя после успешного выполнения.

$Root = Split-Path -Parent $PSCommandPath
$LessonFile = Join-Path $Root "src\data\lessons\lesson5.ts"
$OutputFile = Join-Path $Root "public\audio\5.12.mp3"
$TempDir = Join-Path ([System.IO.Path]::GetTempPath()) ("hungarylearn-5.12-" + [guid]::NewGuid().ToString("N"))

$HuVoice = "hu-HU-TamasNeural"
$RuVoice = "ru-RU-DmitryNeural"
$MaxAttempts = 5

function Write-Utf8NoBom {
    param(
        [Parameter(Mandatory = $true)][string]$Path,
        [Parameter(Mandatory = $true)][string]$Content
    )

    [System.IO.File]::WriteAllText(
        $Path,
        $Content,
        [System.Text.UTF8Encoding]::new($false)
    )
}

function Test-GeneratedAudio {
    param([Parameter(Mandatory = $true)][string]$Path)

    return (
        (Test-Path -LiteralPath $Path) -and
        ((Get-Item -LiteralPath $Path).Length -gt 1000)
    )
}

function Invoke-EdgeTtsCommand {
    param(
        [Parameter(Mandatory = $true)][ValidateSet("exe", "module")][string]$Mode,
        [Parameter(Mandatory = $true)][string]$Text,
        [Parameter(Mandatory = $true)][string]$Voice,
        [Parameter(Mandatory = $true)][string]$Rate,
        [Parameter(Mandatory = $true)][string]$Destination
    )

    Remove-Item -LiteralPath $Destination -Force -ErrorAction SilentlyContinue

    if ($Mode -eq "exe") {
        & edge-tts `
            --voice $Voice `
            --rate=$Rate `
            --text $Text `
            --write-media $Destination *> $null

        return $LASTEXITCODE
    }

    & py -m edge_tts `
        --voice $Voice `
        --rate=$Rate `
        --text $Text `
        --write-media $Destination *> $null

    return $LASTEXITCODE
}

function Invoke-EdgeTtsQuietly {
    param(
        [Parameter(Mandatory = $true)][string]$Text,
        [Parameter(Mandatory = $true)][string]$Voice,
        [Parameter(Mandatory = $true)][string]$Rate,
        [Parameter(Mandatory = $true)][string]$Destination,
        [Parameter(Mandatory = $true)][int]$SegmentNumber
    )

    for ($Attempt = 1; $Attempt -le $MaxAttempts; $Attempt++) {
        $Succeeded = $false

        try {
            $ExitCode = Invoke-EdgeTtsCommand `
                -Mode "exe" `
                -Text $Text `
                -Voice $Voice `
                -Rate $Rate `
                -Destination $Destination

            if ($ExitCode -eq 0 -and (Test-GeneratedAudio -Path $Destination)) {
                $Succeeded = $true
            }
        }
        catch {
            $Succeeded = $false
        }

        if (-not $Succeeded) {
            try {
                $ExitCode = Invoke-EdgeTtsCommand `
                    -Mode "module" `
                    -Text $Text `
                    -Voice $Voice `
                    -Rate $Rate `
                    -Destination $Destination

                if ($ExitCode -eq 0 -and (Test-GeneratedAudio -Path $Destination)) {
                    $Succeeded = $true
                }
            }
            catch {
                $Succeeded = $false
            }
        }

        if ($Succeeded) {
            return
        }

        if ($Attempt -lt $MaxAttempts) {
            Start-Sleep -Seconds (4 * $Attempt)
        }
    }

    throw "Edge TTS не создал аудиофрагмент №$SegmentNumber после $MaxAttempts попыток."
}

try {
    if (-not (Test-Path -LiteralPath $LessonFile)) {
        throw "Не найден файл: $LessonFile"
    }

    # -------------------- 1. ОБНОВЛЕНИЕ СЛАЙДА 5.12 --------------------
    $Source = [System.IO.File]::ReadAllText($LessonFile, [System.Text.Encoding]::UTF8)

    $Pattern = '(?s)    \{\r?\n      id: 12,.*?\r?\n    \}(?=\r?\n  \],\r?\n  vocabulary:)'

    $Replacement = @'
    {
      id: 12,
      eyebrow: 'УРОК 5 · 12/12 · ИТОГИ',
      title: 'Összefoglalás',
      subtitle: 'Числа, календарь, дата, время и расписание',
      type: 'info',
      note: 'Итог проверяет не отдельные слова, а умение различать функции: самостоятельное число и число перед существительным, название дня и форму расписания, текущее время и время действия, письменную и произнесённую дату.',
      warn: 'Не смешивайте пары: kettő / két; hétfő / hétfőn; két óra van / kettőkor; augusztus 3. / augusztus harmadika; perc / másodperc.',
      task: 'Пройдите восемь итоговых блоков. Сначала отвечайте без ключа, затем исправьте ошибки полными венгерскими формами и повторите только проблемные темы.',
      activities: [L5_EXIT_CHECK],
      body: `
        <h4 class="font-bold text-[#57121C] text-lg mb-2">1. Числа от 1 до 100</h4>

        <table class="conj">
          <tr><th>Тема</th><th>Правило</th><th>Пример</th></tr>
          <tr>
            <td>самостоятельное число 2</td>
            <td><b>kettő</b></td>
            <td><button class="speak-btn" data-speak-text="Hány könyv van? Kettő." data-speak-lang="hu-HU">Hány könyv van? — Kettő.</button></td>
          </tr>
          <tr>
            <td>2 перед существительным</td>
            <td><b>két</b></td>
            <td><button class="speak-btn" data-speak-text="két könyv" data-speak-lang="hu-HU">két könyv</button></td>
          </tr>
          <tr>
            <td>11–19</td>
            <td><b>tizen-</b> + единица</td>
            <td><button class="speak-btn" data-speak-text="tizenhárom" data-speak-lang="hu-HU">tizenhárom</button></td>
          </tr>
          <tr>
            <td>21–29</td>
            <td><b>huszon-</b> + единица</td>
            <td><button class="speak-btn" data-speak-text="huszonnyolc" data-speak-lang="hu-HU">huszonnyolc</button></td>
          </tr>
          <tr>
            <td>30–90</td>
            <td>десяток + единица, одним словом</td>
            <td><button class="speak-btn" data-speak-text="negyvenhét" data-speak-lang="hu-HU">negyvenhét</button></td>
          </tr>
          <tr>
            <td>100</td>
            <td><b>száz</b></td>
            <td><button class="speak-btn" data-speak-text="száz" data-speak-lang="hu-HU">száz</button></td>
          </tr>
        </table>

        <div class="note">
          До 100 составные числа пишутся слитно:
          <span class="hu-word">tizennyolc, huszonnégy, harmincnyolc, nyolcvannégy</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">2. Дни недели и месяцы</h4>

        <p><b>Дни недели:</b></p>
        <p>
          <button class="speak-btn" data-speak-text="hétfő, kedd, szerda, csütörtök, péntek, szombat, vasárnap" data-speak-lang="hu-HU">
            hétfő · kedd · szerda · csütörtök · péntek · szombat · vasárnap
          </button>
        </p>

        <p><b>Формы расписания:</b></p>
        <p>
          <button class="speak-btn" data-speak-text="hétfőn, kedden, szerdán, csütörtökön, pénteken, szombaton, vasárnap" data-speak-lang="hu-HU">
            hétfőn · kedden · szerdán · csütörtökön · pénteken · szombaton · vasárnap
          </button>
        </p>

        <p><b>Месяцы:</b></p>
        <p>
          <button class="speak-btn" data-speak-text="január, február, március, április, május, június, július, augusztus, szeptember, október, november, december" data-speak-lang="hu-HU">
            január · február · március · április · május · június · július · augusztus · szeptember · október · november · december
          </button>
        </p>

        <div class="warn">
          Название дня и форма расписания — не одно и то же:
          <span class="hu-word">hétfő</span> — понедельник;
          <span class="hu-word">hétfőn</span> — в понедельник.
          Для воскресенья в активной модели используется
          <span class="hu-word">vasárnap</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">3. Письменная и произнесённая дата</h4>

        <table class="conj">
          <tr><th>Функция</th><th>Форма</th></tr>
          <tr>
            <td>письменная дата</td>
            <td><b>2026. augusztus 3.</b></td>
          </tr>
          <tr>
            <td>произнесённая дата</td>
            <td>
              <button class="speak-btn" data-speak-text="kétezer-huszonhat augusztus harmadika" data-speak-lang="hu-HU">
                kétezer-huszonhat augusztus harmadika
              </button>
            </td>
          </tr>
          <tr>
            <td>вопрос о полной дате</td>
            <td><button class="speak-btn" data-speak-text="Mi a mai dátum?" data-speak-lang="hu-HU">Mi a mai dátum?</button></td>
          </tr>
          <tr>
            <td>вопрос о числе месяца</td>
            <td><button class="speak-btn" data-speak-text="Hányadika van ma?" data-speak-lang="hu-HU">Hányadika van ma?</button></td>
          </tr>
        </table>

        <div class="warn">
          Нельзя читать дату как
          <s>kétezer-huszonhat augusztus három</s>.
          Для третьего числа месяца используется
          <span class="hu-word">harmadika</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">4. Текущее время и время действия</h4>

        <table class="conj">
          <tr><th>Вопрос или значение</th><th>Правильная форма</th></tr>
          <tr>
            <td>Который час?</td>
            <td><button class="speak-btn" data-speak-text="Hány óra van?" data-speak-lang="hu-HU">Hány óra van?</button></td>
          </tr>
          <tr>
            <td>Сейчас два часа.</td>
            <td><button class="speak-btn" data-speak-text="Két óra van." data-speak-lang="hu-HU">Két óra van.</button></td>
          </tr>
          <tr>
            <td>Сейчас три часа.</td>
            <td><button class="speak-btn" data-speak-text="Három óra van." data-speak-lang="hu-HU">Három óra van.</button></td>
          </tr>
          <tr>
            <td>в два часа</td>
            <td><button class="speak-btn" data-speak-text="kettőkor, két órakor" data-speak-lang="hu-HU">kettőkor / két órakor</button></td>
          </tr>
          <tr>
            <td>в три часа</td>
            <td><button class="speak-btn" data-speak-text="háromkor, három órakor" data-speak-lang="hu-HU">háromkor / három órakor</button></td>
          </tr>
          <tr>
            <td>полдень / полночь</td>
            <td><button class="speak-btn" data-speak-text="Dél van. Éjfél van." data-speak-lang="hu-HU">Dél van. / Éjfél van.</button></td>
          </tr>
        </table>

        <div class="note">
          <span class="hu-word">óra van</span> сообщает текущее время.
          Форма с <span class="hu-word">-kor</span> отвечает на вопрос
          <span class="hu-word">Mikor?</span> — когда происходит действие.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">5. Единицы времени</h4>

        <table class="conj">
          <tr><th>Слово</th><th>Значение</th><th>Пример</th></tr>
          <tr><td><b>nap</b></td><td>день</td><td>egy nap</td></tr>
          <tr><td><b>hét</b></td><td>неделя</td><td>két hét</td></tr>
          <tr><td><b>hónap</b></td><td>месяц</td><td>három hónap</td></tr>
          <tr><td><b>év</b></td><td>год</td><td>négy év</td></tr>
          <tr><td><b>óra</b></td><td>час</td><td>öt óra</td></tr>
          <tr><td><b>perc</b></td><td>минута</td><td>tíz perc</td></tr>
          <tr><td><b>másodperc</b></td><td>секунда</td><td>harminc másodperc</td></tr>
        </table>

        <div class="warn">
          <span class="hu-word">perc</span> не означает секунду.
          Секунда — <span class="hu-word">másodperc</span>.
          После точного числа существительное остаётся в единственном числе:
          <span class="hu-word">két hét, három hónap, tíz perc</span>.
        </div>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">6. Простое расписание</h4>

        <table class="conj">
          <tr><th>Структура</th><th>Пример</th></tr>
          <tr>
            <td>день + время + действие</td>
            <td><button class="speak-btn" data-speak-text="Hétfőn nyolckor magyarul tanulok." data-speak-lang="hu-HU">Hétfőn nyolckor magyarul tanulok.</button></td>
          </tr>
          <tr>
            <td>день + время + действие</td>
            <td><button class="speak-btn" data-speak-text="Szerdán háromkor dolgozom." data-speak-lang="hu-HU">Szerdán háromkor dolgozom.</button></td>
          </tr>
          <tr>
            <td>день + время + действие</td>
            <td><button class="speak-btn" data-speak-text="Pénteken öt órakor olvasok." data-speak-lang="hu-HU">Pénteken öt órakor olvasok.</button></td>
          </tr>
          <tr>
            <td>день + время + действие</td>
            <td><button class="speak-btn" data-speak-text="Szombaton tízkor írok." data-speak-lang="hu-HU">Szombaton tízkor írok.</button></td>
          </tr>
        </table>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">7. Итоговая самостоятельная проверка</h4>

        <ol class="tasklist">
          <li>22 как самостоятельное число → __________________</li>
          <li>22 книги → __________________</li>
          <li>в понедельник → __________________</li>
          <li>третий месяц года → __________________</li>
          <li>3 августа 2026 года письменно → __________________</li>
          <li>3 августа 2026 года устно → __________________</li>
          <li>Сейчас два часа. → __________________</li>
          <li>Я читаю в два часа. → __________________</li>
          <li>десять минут → __________________</li>
          <li>одна секунда → __________________</li>
          <li>В среду в три я работаю. → __________________</li>
          <li>Когда тебе удобно? → __________________</li>
        </ol>

        <details class="note mt-4">
          <summary class="font-bold cursor-pointer">Ключ</summary>
          <ol class="tasklist mt-3">
            <li><b>huszonkettő</b></li>
            <li><b>huszonkét könyv</b></li>
            <li><b>hétfőn</b></li>
            <li><b>március</b></li>
            <li><b>2026. augusztus 3.</b></li>
            <li><b>kétezer-huszonhat augusztus harmadika</b></li>
            <li><b>Két óra van.</b></li>
            <li><b>Kettőkor olvasok.</b></li>
            <li><b>tíz perc</b></li>
            <li><b>egy másodperc</b></li>
            <li><b>Szerdán háromkor dolgozom.</b></li>
            <li><b>Mikor jó neked?</b></li>
          </ol>
        </details>

        <h4 class="font-bold text-[#57121C] text-lg mt-5 mb-2">8. Критерий готовности</h4>

        <ul class="tick">
          <li><b>11–12 правильных:</b> урок усвоен;</li>
          <li><b>8–10:</b> повторите только блоки с ошибками;</li>
          <li><b>5–7:</b> повторите слайды 5.2, 5.4, 5.6 и 5.7;</li>
          <li><b>0–4:</b> снова пройдите числа, календарь и время по порядку.</li>
        </ul>

        <div class="note">
          Перед завершением урока напишите четыре строки собственного расписания и одну дату.
          Проверьте форму дня, время с <b>-kor</b>, форму глагола и точки в письменной дате.
        </div>
      `,
    }
'@

    $Regex = [System.Text.RegularExpressions.Regex]::new($Pattern)
    $Matches = $Regex.Matches($Source)

    if ($Matches.Count -ne 1) {
        throw "Не удалось безопасно найти слайд 5.12. Найдено совпадений: $($Matches.Count). Файл не изменён."
    }

    $UpdatedSource = $Regex.Replace(
        $Source,
        [System.Text.RegularExpressions.MatchEvaluator]{
            param($Match)
            return $Replacement
        },
        1
    )

    Write-Utf8NoBom -Path $LessonFile -Content $UpdatedSource

    # -------------------- 2. СОЗДАНИЕ НОВОГО АУДИО 5.12 --------------------
    New-Item -ItemType Directory -Path $TempDir -Force | Out-Null
    New-Item -ItemType Directory -Path (Split-Path -Parent $OutputFile) -Force | Out-Null

    $Segments = @(
        @{ File="01-hu.mp3"; Voice=$HuVoice; Rate="-8%"; Text="Összefoglalás." },
        @{ File="02-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Итоги пятого урока: числа, календарь, дата, время и расписание." },

        @{ File="03-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Сначала числа. Самостоятельное число два — kettő. Перед существительным используется két." },
        @{ File="04-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="kettő. két könyv. huszonkettő. huszonkét könyv." },
        @{ File="05-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Числа от одиннадцати до девятнадцати используют основу tizen. От двадцати одного до двадцати девяти — huszon. Составные числа до ста пишутся одним словом." },
        @{ File="06-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="tizenhárom. tizennyolc. huszonnyolc. negyvenhét. nyolcvannégy. száz." },

        @{ File="07-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Дни недели и формы расписания:" },
        @{ File="08-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="hétfő, kedd, szerda, csütörtök, péntek, szombat, vasárnap." },
        @{ File="09-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="hétfőn, kedden, szerdán, csütörtökön, pénteken, szombaton, vasárnap." },

        @{ File="10-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Месяцы по порядку:" },
        @{ File="11-hu.mp3"; Voice=$HuVoice; Rate="-8%"; Text="január, február, március, április, május, június, július, augusztus, szeptember, október, november, december." },

        @{ File="12-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Письменная дата и её произнесение:" },
        @{ File="13-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="kétezer-huszonhat augusztus harmadika." },
        @{ File="14-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="На письме: 2026, точка, augusztus, 3, точка. При чтении день становится harmadika, а не három." },

        @{ File="15-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Текущее время и время действия:" },
        @{ File="16-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="Hány óra van? Két óra van. Három óra van. Dél van. Éjfél van." },
        @{ File="17-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="kettőkor. két órakor. háromkor. három órakor." },
        @{ File="18-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Óra van сообщает текущее время. Окончание kor указывает, во сколько происходит действие." },

        @{ File="19-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Единицы времени:" },
        @{ File="20-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="nap. hét. hónap. év. óra. perc. másodperc." },
        @{ File="21-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Perc — минута. Másodperc — секунда. После числа существительное остаётся в единственном числе." },

        @{ File="22-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Пример расписания:" },
        @{ File="23-hu.mp3"; Voice=$HuVoice; Rate="-8%"; Text="Hétfőn nyolckor magyarul tanulok. Szerdán háromkor dolgozom. Pénteken öt órakor olvasok. Szombaton tízkor írok." },

        @{ File="24-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Финальная проверка. Скажите по-венгерски: двадцать два; двадцать две книги; в понедельник; март; сейчас два часа; я читаю в два часа; десять минут; одна секунда; в среду в три я работаю; когда тебе удобно." },
        @{ File="25-stop-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Остановите аудио и ответьте самостоятельно. Затем продолжайте." },

        @{ File="26-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="huszonkettő. huszonkét könyv. hétfőn. március. Két óra van. Kettőkor olvasok. tíz perc. egy másodperc. Szerdán háromkor dolgozom. Mikor jó neked?" },

        @{ File="27-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Теперь назовите устно дату 3 августа 2026 года." },
        @{ File="28-stop-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Остановите аудио и ответьте самостоятельно." },
        @{ File="29-hu.mp3"; Voice=$HuVoice; Rate="-9%"; Text="kétezer-huszonhat augusztus harmadika." },

        @{ File="30-ru.mp3"; Voice=$RuVoice; Rate="-3%"; Text="Если вы различаете kettő и két, название дня и форму расписания, óra van и kor, письменную и произнесённую дату, perc и másodperc, урок усвоен." }
    )

    $GeneratedFiles = New-Object System.Collections.Generic.List[string]
    $Index = 0

    foreach ($Segment in $Segments) {
        $Index++
        $SegmentPath = Join-Path $TempDir $Segment.File

        Invoke-EdgeTtsQuietly `
            -Text $Segment.Text `
            -Voice $Segment.Voice `
            -Rate $Segment.Rate `
            -Destination $SegmentPath `
            -SegmentNumber $Index

        $GeneratedFiles.Add($SegmentPath)
    }

    $TempOutput = Join-Path $TempDir "5.12-complete.mp3"

    $OutputStream = [System.IO.File]::Open(
        $TempOutput,
        [System.IO.FileMode]::Create,
        [System.IO.FileAccess]::Write
    )

    try {
        foreach ($File in $GeneratedFiles) {
            $Bytes = [System.IO.File]::ReadAllBytes($File)
            $OutputStream.Write($Bytes, 0, $Bytes.Length)
        }
    }
    finally {
        $OutputStream.Dispose()
    }

    if (-not (Test-GeneratedAudio -Path $TempOutput)) {
        throw "Финальный временный файл 5.12.mp3 не был создан."
    }

    # Старое 5.12.mp3 удаляется только после полной успешной генерации нового.
    Remove-Item -LiteralPath $OutputFile -Force -ErrorAction SilentlyContinue
    Move-Item -LiteralPath $TempOutput -Destination $OutputFile -Force

    Write-Host ""
    Write-Host "Готово: итоговый слайд 5.12 обновлён." -ForegroundColor Green
    Write-Host "Готово: создано новое аудио public\audio\5.12.mp3." -ForegroundColor Green
    Write-Host "Папка dist не изменялась. Резервная копия не создавалась."
}
finally {
    Remove-Item -LiteralPath $TempDir -Recurse -Force -ErrorAction SilentlyContinue
}

Remove-Item -LiteralPath $PSCommandPath -Force -ErrorAction SilentlyContinue
