import { mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { basename, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = resolve(import.meta.dirname, '..');
const AUDIO_DIR = join(ROOT, 'public', 'audio');
const FEMALE_VOICE = 'hu-HU-NoemiNeural';
const MALE_VOICE = 'hu-HU-TamasNeural';
const RATE = '-8%';

const assets = [
  {
    assetId: 'l21_listening_b_film_choice',
    turns: [
      [FEMALE_VOICE, 'Szia, hallasz engem?'],
      [MALE_VOICE, 'Igen, most már hallak. Mit csinálsz?'],
      [FEMALE_VOICE, 'Filmet keresek estére. Ismered azt az új magyar filmet, amit múlt héten mutattak be?'],
      [MALE_VOICE, 'A Késői vonatot? Igen, ismerem. Tegnap láttam.'],
      [FEMALE_VOICE, 'És tetszett?'],
      [MALE_VOICE, 'Igen, bár az eleje egy kicsit lassú volt. A főszereplőt viszont nagyon szeretem. Több filmjét is láttam már.'],
      [FEMALE_VOICE, 'Én őt nem ismerem. Miről szól a film?'],
      [MALE_VOICE, 'Egy fiatal nőről, aki új munkát kap egy kisvárosban. Ott megismer egy idős férfit, és együtt próbálnak megoldani egy régi családi problémát.'],
      [FEMALE_VOICE, 'Jól hangzik. Akkor ezt nézem meg.'],
      [MALE_VOICE, 'Van egy másik jó film is. Küldjek róla egy linket?'],
      [FEMALE_VOICE, 'Igen, küldd el! Megnézem az előzetest is.'],
      [MALE_VOICE, 'Rendben, mindjárt elküldöm.'],
      [FEMALE_VOICE, 'Köszönöm. Holnap felhívlak, és elmondom, melyiket választottam.'],
      [MALE_VOICE, 'Jó, várlak.'],
    ],
  },
  {
    assetId: 'l22_listening_b_office_instructions',
    turns: [
      [FEMALE_VOICE, 'Jó reggelt! Ön az új kolléga?'],
      [MALE_VOICE, 'Igen, ma van az első munkanapom.'],
      [FEMALE_VOICE, 'Rendben. Először kérem, mutassa meg a személyi igazolványát. Utána vegye át ezt a belépőkártyát, és írja alá ezt a papírt.'],
      [MALE_VOICE, 'Rendben. Ezután hová menjek?'],
      [FEMALE_VOICE, 'Menjen fel a harmadik emeletre lifttel. Amikor kilép a liftből, forduljon jobbra, és keresse meg a 315-ös irodát.'],
      [MALE_VOICE, 'Elnézést, nem értettem az iroda számát. Mondja még egyszer, kérem!'],
      [FEMALE_VOICE, 'Természetesen. Háromszáztizenöt. A folyosó végén találja.'],
      [MALE_VOICE, 'Köszönöm. Van még valami, amit tudnom kell?'],
      [FEMALE_VOICE, 'Igen. Ne használja a hátsó bejáratot, mert ahhoz még nincs jogosultsága. Ha ebédelni megy, tegye a belépőkártyát a táskájába, ne hagyja az asztalon.'],
      [MALE_VOICE, 'Értem.'],
      [FEMALE_VOICE, 'Ha bármilyen problémája van, hívja a recepciót, vagy kérdezze Annát a 315-ös irodában.'],
      [MALE_VOICE, 'Rendben, köszönöm szépen a segítséget.'],
    ],
  },
  {
    assetId: 'l23_listening_b_free_week',
    turns: [
      [FEMALE_VOICE, 'Képzeld, ha jövő hónapban kapnál egy teljes szabad hetet, mit csinálnál?'],
      [MALE_VOICE, 'Ha lenne egy szabad hetem, biztosan elutaznék valahová. Talán Horvátországba mennék.'],
      [FEMALE_VOICE, 'Én inkább itthon maradnék. Mostanában sokat dolgozom, ezért szeretnék pihenni.'],
      [MALE_VOICE, 'De ha egész héten otthon lennél, nem unatkoznál?'],
      [FEMALE_VOICE, 'Talán egy kicsit. Ha jó idő lenne, kirándulnék, találkoznék a barátaimmal, és végre elolvasnék néhány könyvet.'],
      [MALE_VOICE, 'Én akkor is utaznék. Ha időben vennénk jegyet, talán nem lenne olyan drága.'],
      [FEMALE_VOICE, 'Ez igaz. Hová mennél pontosan?'],
      [MALE_VOICE, 'Splitbe. Két-három napot a városban töltenék, aztán elmennék egy csendesebb helyre a tenger mellett.'],
      [FEMALE_VOICE, 'Én egy egész hetet nem szeretnék utazással tölteni.'],
      [MALE_VOICE, 'Akkor mit szólnál négy naphoz? Utána még lenne három napod otthon pihenni.'],
      [FEMALE_VOICE, 'Ez már jobban tetszik. Ha találnánk olcsó szállást, lehet, hogy én is elmennék.'],
      [MALE_VOICE, 'Akkor este megnézhetnénk a lehetőségeket.'],
      [FEMALE_VOICE, 'Rendben. Küldj néhány ajánlatot, és választunk.'],
    ],
  },
  {
    assetId: 'l24_listening_b_city_or_suburbs',
    turns: [
      [FEMALE_VOICE, 'Én biztosan a belvárosban maradnék. Szeretem, hogy szinte minden közel van, és nem kell sok időt utazással töltenem.'],
      [MALE_VOICE, 'Én viszont szívesebben költöznék a város szélére. A belváros kényelmes, de szerintem túl zajos, és a lakások is nagyon drágák.'],
      [FEMALE_VOICE, 'Ez igaz, bár nekem fontosabb a jó közlekedés. Innen tíz perc alatt beérek a munkahelyemre, este pedig könnyen találkozom a barátaimmal.'],
      [MALE_VOICE, 'Nekem most majdnem egy órába telik hazajutni, mégis szeretem, hogy nyugodtabb környéken lakom. Ráadásul nagyobb lakást tudtam bérelni ugyanannyi pénzért.'],
      [FEMALE_VOICE, 'Viszont ha este programod van a központban, sokkal nehezebb hazamenned.'],
      [MALE_VOICE, 'Igen, ez valóban hátrány. Másrészt nem járok minden este a belvárosba. Hétvégén pedig inkább otthon vagy a természetben vagyok.'],
      [FEMALE_VOICE, 'Akkor valószínűleg mások az igényeink. Én most még nem szeretnék kiköltözni.'],
      [MALE_VOICE, 'Én sem mondom, hogy mindenkinek jobb. Ha valaki minden nap bent dolgozik, és sok programra jár, a belváros praktikusabb lehet.'],
      [FEMALE_VOICE, 'Ebben egyetértek. Szerintem végül az a fontos, hogy az ember tudja, mi fontos neki: a nyugalom, az ár vagy az, hogy minden közel legyen.'],
      [MALE_VOICE, 'Pontosan. Nincs olyan megoldás, amely mindenkinek tökéletes.'],
    ],
  },
];

function synthesize(text, voice, outputFile) {
  const result = spawnSync('edge-tts', [
    '--voice', voice,
    `--rate=${RATE}`,
    '--text', text,
    '--write-media', outputFile,
  ], {
    stdio: 'inherit',
    shell: false,
    windowsHide: true,
    timeout: 60_000,
  });

  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`edge-tts exited with ${result.status}`);
  if (statSync(outputFile).size === 0) throw new Error(`Empty audio: ${outputFile}`);
}

function mp3DurationSeconds(buffer) {
  const bitrateV1 = [0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320];
  const bitrateV2 = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];
  const baseRates = [44100, 48000, 32000];
  let offset = 0;
  let seconds = 0;
  let frames = 0;

  while (offset + 4 <= buffer.length) {
    const header = buffer.readUInt32BE(offset);
    if (((header & 0xffe00000) >>> 0) !== 0xffe00000) {
      offset += 1;
      continue;
    }

    const versionBits = (header >>> 19) & 0x3;
    const layerBits = (header >>> 17) & 0x3;
    const bitrateIndex = (header >>> 12) & 0xf;
    const sampleRateIndex = (header >>> 10) & 0x3;
    const padding = (header >>> 9) & 0x1;
    if (versionBits === 1 || layerBits !== 1 || bitrateIndex === 0 || bitrateIndex === 15 || sampleRateIndex === 3) {
      offset += 1;
      continue;
    }

    const mpeg1 = versionBits === 3;
    const rateDivisor = mpeg1 ? 1 : versionBits === 2 ? 2 : 4;
    const sampleRate = baseRates[sampleRateIndex] / rateDivisor;
    const bitrate = (mpeg1 ? bitrateV1 : bitrateV2)[bitrateIndex] * 1000;
    const samples = mpeg1 ? 1152 : 576;
    const frameLength = Math.floor((mpeg1 ? 144 : 72) * bitrate / sampleRate) + padding;
    if (frameLength <= 4 || offset + frameLength > buffer.length) break;

    seconds += samples / sampleRate;
    frames += 1;
    offset += frameLength;
  }

  if (frames === 0) throw new Error('No valid MP3 frames found.');
  return seconds;
}

const tempDir = mkdtempSync(join(tmpdir(), 'hungarylearn-p6b-'));
try {
  for (const asset of assets) {
    const segments = asset.turns.map(([voice, text], index) => {
      const segmentPath = join(tempDir, `${asset.assetId}-${String(index + 1).padStart(2, '0')}.mp3`);
      synthesize(text, voice, segmentPath);
      return readFileSync(segmentPath);
    });
    const outputPath = join(AUDIO_DIR, `${asset.assetId}.mp3`);
    writeFileSync(outputPath, Buffer.concat(segments));
    const bytes = readFileSync(outputPath);
    console.log(`${basename(outputPath)}\t${bytes.length} bytes\t${mp3DurationSeconds(bytes).toFixed(2)} sec`);
  }

  const correctedWordPath = join(AUDIO_DIR, 'Olvasok_egy_könyvet.mp3');
  synthesize('Olvasok egy könyvet.', MALE_VOICE, correctedWordPath);
  const correctedWord = readFileSync(correctedWordPath);
  console.log(`${basename(correctedWordPath)}\t${correctedWord.length} bytes\t${mp3DurationSeconds(correctedWord).toFixed(2)} sec`);
} finally {
  rmSync(tempDir, { recursive: true, force: true });
}
