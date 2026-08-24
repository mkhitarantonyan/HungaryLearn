const { execFileSync, spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * HungaryLearn — Listening audio generator (Windows-safe)
 *
 * Источник:
 *   docs/listening-audio-plan.json
 *
 * Выход:
 *   public/audio/<assetId>.mp3
 *
 * Запуск из корня проекта:
 *   node scripts/generate-listening-audio.cjs
 *
 * ВАЖНО:
 * - НЕ использует shell:true при вызове edge-tts.
 * - Передаёт --text и сам текст отдельными аргументами.
 * - Длинные реплики/монологи автоматически режутся на короткие части.
 * - Старый итоговый MP3 удаляется только ПОСЛЕ успешной генерации нового.
 * - Slide narration 1.1.mp3, 2.8.mp3 и т.п. не затрагивается.
 */

const ROOT = process.cwd();
const PLAN_PATH = path.resolve(ROOT, 'docs', 'listening-audio-plan.json');
const OUTPUT_DIR = path.resolve(ROOT, 'public', 'audio');

const VOICES = {
  male: 'hu-HU-TamasNeural',
  female: 'hu-HU-NoemiNeural',
};

const EXPECTED_UNIQUE_ASSETS = 27;

// Чем меньше число, тем надёжнее edge-tts.
// Обычно получится 1–2 коротких предложения на один TTS-вызов.
const MAX_TTS_CHARS = 150;

function sleep(ms) {
  const sab = new SharedArrayBuffer(4);
  const view = new Int32Array(sab);
  Atomics.wait(view, 0, 0, ms);
}

function fail(message) {
  console.error(`\n❌ ${message}`);
  process.exit(1);
}

function normalizeText(value) {
  return String(value ?? '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function hasLetters(text) {
  return /\p{L}/u.test(text);
}

function commandExists(command) {
  try {
    const result = spawnSync(command, ['--version'], {
      stdio: 'ignore',
      shell: false,
    });
    return result.status === 0;
  } catch {
    return false;
  }
}

/**
 * Делит длинный текст по предложениям, а если предложение всё ещё слишком
 * длинное — по словам. Ничего не удаляет из текста.
 */
function splitLongText(text, maxChars = MAX_TTS_CHARS) {
  const clean = normalizeText(text);

  if (!clean) return [];
  if (clean.length <= maxChars) return [clean];

  // Сначала режем по концам предложений.
  const sentences =
    clean.match(/[^.!?…]+(?:[.!?…]+|$)/g)
      ?.map(s => s.trim())
      .filter(Boolean) ?? [clean];

  const chunks = [];
  let current = '';

  function flushCurrent() {
    if (current.trim()) {
      chunks.push(current.trim());
      current = '';
    }
  }

  function pushOversizedSentence(sentence) {
    const words = sentence.split(/\s+/).filter(Boolean);
    let part = '';

    for (const word of words) {
      const candidate = part ? `${part} ${word}` : word;

      if (candidate.length <= maxChars) {
        part = candidate;
      } else {
        if (part) chunks.push(part.trim());

        // Крайний случай: одно "слово" длиннее лимита.
        if (word.length > maxChars) {
          for (let i = 0; i < word.length; i += maxChars) {
            chunks.push(word.slice(i, i + maxChars));
          }
          part = '';
        } else {
          part = word;
        }
      }
    }

    if (part) chunks.push(part.trim());
  }

  for (const sentence of sentences) {
    if (sentence.length > maxChars) {
      flushCurrent();
      pushOversizedSentence(sentence);
      continue;
    }

    const candidate = current ? `${current} ${sentence}` : sentence;

    if (candidate.length <= maxChars) {
      current = candidate;
    } else {
      flushCurrent();
      current = sentence;
    }
  }

  flushCurrent();

  return chunks.filter(hasLetters);
}

function generateWithRetry(voice, text, outFile, maxRetries = 5) {
  const clean = normalizeText(text);

  if (!hasLetters(clean)) {
    throw new Error(`Фрагмент без букв, нечего озвучивать: "${clean}"`);
  }

  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ:
      // shell:false + '--text', clean отдельными argv.
      execFileSync(
        'edge-tts',
        [
          '--voice',
          voice,
          '--text',
          clean,
          '--write-media',
          outFile,
        ],
        {
          stdio: ['ignore', 'ignore', 'pipe'],
          timeout: 30000,
          killSignal: 'SIGKILL',
          shell: false,
          windowsHide: true,
        }
      );

      if (!fs.existsSync(outFile)) {
        throw new Error('edge-tts не создал MP3');
      }

      const size = fs.statSync(outFile).size;
      if (size <= 0) {
        throw new Error('edge-tts создал пустой MP3');
      }

      return;
    } catch (error) {
      lastError = error;

      const msg = error.stderr
        ? error.stderr.toString()
        : String(error.message || error);

      const isNoAudio =
        msg.includes('NoAudioReceived') ||
        msg.includes('No audio was received');

      const isTimeout =
        error.signal === 'SIGKILL' ||
        error.code === 'ETIMEDOUT' ||
        error.killed;

      console.warn(
        `  ⚠ Попытка ${attempt}/${maxRetries} не удалась` +
          `${isNoAudio ? ' (NoAudioReceived)' : ''}` +
          `${isTimeout ? ' (timeout)' : ''}`
      );

      if (attempt < maxRetries) {
        sleep(1200 * attempt);
      }
    }
  }

  throw lastError;
}

function readPlan() {
  if (!fs.existsSync(PLAN_PATH)) {
    fail(
      `Не найден ${path.relative(ROOT, PLAN_PATH)}.\n` +
        'Сначала выполни: npm run export:listening'
    );
  }

  let parsed;

  try {
    parsed = JSON.parse(fs.readFileSync(PLAN_PATH, 'utf8'));
  } catch (error) {
    fail(`Не удалось прочитать JSON plan: ${error.message}`);
  }

  const rows = Array.isArray(parsed)
    ? parsed
    : parsed.assets ??
      parsed.activities ??
      parsed.items ??
      parsed.listeningAssets ??
      parsed.listening ??
      null;

  if (!Array.isArray(rows)) {
    fail(
      'Неизвестная структура listening-audio-plan.json. ' +
        'Ожидался массив или объект с assets/activities/items.'
    );
  }

  return rows;
}

function inferAssetId(row) {
  if (typeof row.assetId === 'string' && row.assetId.trim()) {
    return row.assetId.trim();
  }

  if (typeof row.filename === 'string' && row.filename.endsWith('.mp3')) {
    return path.basename(row.filename, '.mp3');
  }

  if (typeof row.file === 'string' && row.file.endsWith('.mp3')) {
    return path.basename(row.file, '.mp3');
  }

  return null;
}

function inferFilename(row, assetId) {
  const raw = row.filename ?? row.file;

  if (typeof raw === 'string' && raw.trim()) {
    return path.basename(raw.trim());
  }

  return `${assetId}.mp3`;
}

function validateSafeAsset(assetId, filename) {
  if (!/^[a-z0-9_-]+$/.test(assetId)) {
    throw new Error(`Небезопасный assetId: ${assetId}`);
  }

  if (filename !== `${assetId}.mp3`) {
    throw new Error(
      `Filename не соответствует assetId: ${filename} != ${assetId}.mp3`
    );
  }
}

function stripSpeakerPrefix(text, speaker) {
  let clean = normalizeText(text);

  if (!speaker) return clean;

  const escaped = String(speaker).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  clean = clean.replace(new RegExp(`^${escaped}\\s*:\\s*`, 'i'), '');

  return clean.trim();
}

function parseDialogueTranscript(transcript) {
  const lines = String(transcript ?? '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  const segments = [];

  for (const line of lines) {
    const match = line.match(/^([^:\n]{1,50}):\s*(.+)$/);

    if (match) {
      segments.push({
        speaker: match[1].trim(),
        text: match[2].trim(),
        pauseMs: null,
      });
    } else if (segments.length > 0) {
      segments[segments.length - 1].text += ` ${line}`;
    } else {
      segments.push({
        speaker: null,
        text: line,
        pauseMs: null,
      });
    }
  }

  return segments;
}

function normalizeProvidedSegments(row) {
  if (!Array.isArray(row.segments) || row.segments.length === 0) {
    return [];
  }

  return row.segments
    .map(segment => {
      if (typeof segment === 'string') {
        return {
          speaker: null,
          text: normalizeText(segment),
          pauseMs: null,
        };
      }

      return {
        speaker:
          segment.speaker ??
          segment.label ??
          segment.role ??
          segment.voiceRole ??
          null,
        text: normalizeText(
          segment.text ??
            segment.utterance ??
            segment.content ??
            segment.token ??
            ''
        ),
        pauseMs:
          Number.isFinite(segment.pauseMs)
            ? Number(segment.pauseMs)
            : Number.isFinite(segment.pause)
              ? Number(segment.pause)
              : null,
      };
    })
    .filter(segment => hasLetters(segment.text));
}

function tokenSegmentsFromRow(row) {
  const candidates =
    row.tokens ??
    row.sequence ??
    row.items ??
    row.words ??
    row.generatorTokens;

  if (!Array.isArray(candidates)) {
    return [];
  }

  return candidates
    .map(item => {
      if (typeof item === 'string') {
        return {
          speaker: null,
          text: normalizeText(item),
          pauseMs: 650,
        };
      }

      return {
        speaker: null,
        text: normalizeText(
          item.text ??
            item.word ??
            item.token ??
            item.value ??
            ''
        ),
        pauseMs: Number.isFinite(item.pauseMs)
          ? Number(item.pauseMs)
          : 650,
      };
    })
    .filter(segment => hasLetters(segment.text));
}

function inferSegments(row) {
  let segments = normalizeProvidedSegments(row);
  if (segments.length > 0) return segments;

  const type = String(row.type ?? row.audioType ?? '').toLowerCase();

  if (
    type === 'token_sequence' ||
    type === 'token-sequence' ||
    type === 'dictation'
  ) {
    segments = tokenSegmentsFromRow(row);
    if (segments.length > 0) return segments;
  }

  const transcript = normalizeText(
    row.transcript ??
      row.audioText ??
      row.stimulus ??
      ''
  );

  if (!transcript) {
    throw new Error(
      `Нет segments/tokens/transcript для ${inferAssetId(row) || 'unknown asset'}`
    );
  }

  if (type === 'dialogue' || /^[^:\n]{1,50}:\s*.+/m.test(transcript)) {
    return parseDialogueTranscript(
      row.transcript ?? row.audioText ?? row.stimulus ?? ''
    );
  }

  return [
    {
      speaker: null,
      text: transcript,
      pauseMs: null,
    },
  ];
}

/**
 * После получения логических segments дополнительно режем любой длинный segment
 * на короткие TTS chunks, сохраняя speaker/voice.
 */
function expandIntoTtsChunks(segments) {
  const result = [];

  for (const segment of segments) {
    const clean = stripSpeakerPrefix(segment.text, segment.speaker);
    const chunks = splitLongText(clean);

    chunks.forEach((chunk, index) => {
      result.push({
        speaker: segment.speaker ?? null,
        text: chunk,
        pauseMs: segment.pauseMs ?? null,
        subIndex: index,
        subTotal: chunks.length,
      });
    });
  }

  return result;
}

function voiceForSegment(segment, speakerMap) {
  const speaker = segment.speaker
    ? String(segment.speaker).trim()
    : null;

  if (!speaker) {
    return VOICES.male;
  }

  if (!speakerMap.has(speaker)) {
    const index = speakerMap.size;

    speakerMap.set(
      speaker,
      index % 2 === 0
        ? VOICES.male
        : VOICES.female
    );
  }

  return speakerMap.get(speaker);
}

function groupUniqueAssets(rows) {
  const map = new Map();

  for (const row of rows) {
    const assetId = inferAssetId(row);

    if (!assetId) {
      throw new Error(
        `Запись без assetId/filename: ${JSON.stringify(row).slice(0, 200)}`
      );
    }

    const filename = inferFilename(row, assetId);
    validateSafeAsset(assetId, filename);

    if (!map.has(assetId)) {
      map.set(assetId, {
        assetId,
        filename,
        type: row.type ?? row.audioType ?? 'unknown',
        lesson: row.lesson ?? row.lessonId ?? null,
        rows: [row],
      });
    } else {
      const existing = map.get(assetId);
      existing.rows.push(row);

      if (assetId !== 'l5_listening_time') {
        throw new Error(
          `Неожиданный duplicate assetId: ${assetId}. ` +
            'Разрешён только l5_listening_time.'
        );
      }
    }
  }

  return [...map.values()];
}

function chooseCanonicalRow(asset) {
  if (asset.rows.length === 1) return asset.rows[0];

  // L5 shared asset: выбираем запись с наиболее полными generator data.
  return [...asset.rows].sort((a, b) => {
    const aSeg = normalizeProvidedSegments(a).length;
    const bSeg = normalizeProvidedSegments(b).length;

    if (aSeg !== bSeg) return bSeg - aSeg;

    const aText = normalizeText(
      a.transcript ?? a.audioText ?? ''
    ).length;

    const bText = normalizeText(
      b.transcript ?? b.audioText ?? ''
    ).length;

    return bText - aText;
  })[0];
}

function cleanup(files) {
  for (const file of files) {
    try {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
      }
    } catch {
      // Best-effort cleanup: a locked temporary file must not hide the generation result.
    }
  }
}

function generateAsset(asset, assetIndex, totalAssets) {
  const row = chooseCanonicalRow(asset);

  const logicalSegments = inferSegments(row);
  const chunks = expandIntoTtsChunks(logicalSegments);

  if (chunks.length === 0) {
    throw new Error(
      `Нет озвучиваемых сегментов: ${asset.assetId}`
    );
  }

  const finalPath = path.join(
    OUTPUT_DIR,
    asset.filename
  );

  const stagedPath = `${finalPath}.new`;

  const speakerMap = new Map();
  const tempFiles = [];

  console.log(
    `\n[${assetIndex + 1}/${totalAssets}] ` +
      `${asset.assetId} → ${path.relative(ROOT, finalPath)}`
  );

  console.log(
    `  Тип: ${row.type ?? row.audioType ?? asset.type}` +
      ` | Исходных сегментов: ${logicalSegments.length}` +
      ` | TTS-фрагментов: ${chunks.length}`
  );

  try {
    for (let index = 0; index < chunks.length; index++) {
      const chunk = chunks[index];

      const voice = voiceForSegment(
        chunk,
        speakerMap
      );

      const tempPath = path.join(
        OUTPUT_DIR,
        `.__listen_${asset.assetId}_${index}.mp3`
      );

      const speakerLabel = chunk.speaker
        ? ` | ${chunk.speaker}`
        : '';

      const shortPreview =
        chunk.text.length > 65
          ? `${chunk.text.slice(0, 62)}...`
          : chunk.text;

      console.log(
        `  ${index + 1}/${chunks.length}` +
          `${speakerLabel}` +
          ` | ${voice}` +
          ` | ${shortPreview}`
      );

      generateWithRetry(
        voice,
        chunk.text,
        tempPath
      );

      tempFiles.push(tempPath);

      sleep(250);
    }

    if (tempFiles.length !== chunks.length) {
      throw new Error(
        'Не все TTS-фрагменты были созданы'
      );
    }

    const finalBuffer = Buffer.concat(
      tempFiles.map(file =>
        fs.readFileSync(file)
      )
    );

    fs.writeFileSync(
      stagedPath,
      finalBuffer
    );

    if (
      !fs.existsSync(stagedPath) ||
      fs.statSync(stagedPath).size === 0
    ) {
      throw new Error(
        'Итоговый staged MP3 пуст'
      );
    }

    // Старый итоговый файл удаляем только ПОСЛЕ успешной генерации нового.
    if (fs.existsSync(finalPath)) {
      fs.unlinkSync(finalPath);
    }

    fs.renameSync(
      stagedPath,
      finalPath
    );

    console.log(
      `  ✅ ${asset.filename} ` +
        `(${Math.round(fs.statSync(finalPath).size / 1024)} KB)`
    );
  } catch (error) {
    cleanup([
      ...tempFiles,
      stagedPath,
    ]);

    throw error;
  } finally {
    cleanup(tempFiles);
  }
}

function main() {
  console.log(
    'HungaryLearn — генератор Listening MP3'
  );

  console.log(
    `Plan:   ${path.relative(ROOT, PLAN_PATH)}`
  );

  console.log(
    `Output: ${path.relative(ROOT, OUTPUT_DIR)}`
  );

  console.log(
    `Max TTS fragment: ${MAX_TTS_CHARS} символов`
  );

  if (!commandExists('edge-tts')) {
    fail(
      'Команда edge-tts не найдена.\n' +
        'Установи: py -m pip install edge-tts\n' +
        'Проверь: edge-tts --version'
    );
  }

  fs.mkdirSync(
    OUTPUT_DIR,
    { recursive: true }
  );

  const rows = readPlan();

  let assets;

  try {
    assets = groupUniqueAssets(rows);
  } catch (error) {
    fail(error.message);
  }

  if (
    assets.length !==
    EXPECTED_UNIQUE_ASSETS
  ) {
    fail(
      `Ожидалось ${EXPECTED_UNIQUE_ASSETS} уникальных Listening assets, ` +
        `но plan содержит ${assets.length}.\n` +
        'Выполни npm run export:listening и проверь inventory.'
    );
  }

  console.log(
    `Найдено уникальных Listening assets: ${assets.length}`
  );

  const failures = [];

  assets.forEach(
    (asset, index) => {
      try {
        generateAsset(
          asset,
          index,
          assets.length
        );
      } catch (error) {
        console.error(
          `  ❌ Ошибка ${asset.assetId}: ` +
            `${error.message || error}`
        );

        failures.push({
          assetId: asset.assetId,
          error: String(
            error.message || error
          ),
        });
      }
    }
  );

  console.log(
    '\n=================================================='
  );

  if (failures.length > 0) {
    console.error(
      `❌ Завершено с ошибками: ` +
        `${failures.length}/${assets.length}`
    );

    for (const failure of failures) {
      console.error(
        `- ${failure.assetId}: ` +
          `${failure.error}`
      );
    }

    process.exitCode = 1;
    return;
  }

  console.log(
    `✅ Созданы все ${assets.length} Listening MP3.`
  );

  console.log(
    `📁 ${OUTPUT_DIR}`
  );

  console.log('\nСледующий шаг:');
  console.log(
    '  npm run validate:listening'
  );

  console.log(
    '\nЕсли validator сообщает, что MP3 существуют, но status=missing — это нормально.'
  );

  console.log(
    'После проверки можно переводить соответствующие assets в published.'
  );
}

main();
