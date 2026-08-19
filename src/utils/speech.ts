// Utility for Speech Synthesis (Hungarian hu-HU and Russian ru-RU)
// Supports Male Voice prioritize, Native Hungarian voice, Custom Pitch & Speed, Local Storage Persistence

import { playCustomAudioOrTTS, stopActiveAudio } from './audioRegistry';

export interface VoiceSettings {
  preferMale: boolean;
  huVoiceURI: string;
  ruVoiceURI: string;
  pitch: number; // 0.5 to 1.5 (0.9 gives natural male warmth)
  rate: number;  // 0.82 for clear learning pace
}

const DEFAULT_SETTINGS: VoiceSettings = {
  preferMale: true,
  huVoiceURI: 'auto',
  ruVoiceURI: 'auto',
  pitch: 0.92,
  rate: 0.85
};

let currentSettings: VoiceSettings = { ...DEFAULT_SETTINGS };

// Load settings from localStorage
if (typeof window !== 'undefined') {
  try {
    const saved = localStorage.getItem('magyar_voice_settings');
    if (saved) {
      currentSettings = { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn('Could not read voice settings from localStorage');
  }
}

export function saveVoiceSettings(newSettings: Partial<VoiceSettings>) {
  currentSettings = { ...currentSettings, ...newSettings };
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('magyar_voice_settings', JSON.stringify(currentSettings));
    } catch (e) {
      console.warn('Could not save voice settings to localStorage');
    }
  }
}

export function getVoiceSettings(): VoiceSettings {
  return { ...currentSettings };
}

let voicesReadyPromise: Promise<void> | null = null;

export function waitForVoices(): Promise<void> {
  if (voicesReadyPromise) return voicesReadyPromise;

  voicesReadyPromise = new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve();
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      resolve();
      return;
    }

    const onVoicesChanged = () => {
      resolve();
    };

    const synth = window.speechSynthesis;
    if (synth && typeof synth.addEventListener === 'function') {
      synth.addEventListener('voiceschanged', onVoicesChanged, { once: true });
    } else if (synth) {
      synth.onvoiceschanged = onVoicesChanged;
    }

    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return voicesReadyPromise;
}

if (typeof window !== 'undefined') {
  waitForVoices();
}

export function getAllAvailableVoices(): { hu: SpeechSynthesisVoice[]; ru: SpeechSynthesisVoice[] } {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return { hu: [], ru: [] };
  }

  const voices = window.speechSynthesis.getVoices();
  const hu = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('hu'));
  const ru = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith('ru'));

  return { hu, ru };
}

// Keywords for male voices across browser TTS providers
const MALE_KEYWORDS = [
  'male', 'мужской', 'man', 'boy', 'guy',
  'dmitry', 'pavel', 'alexander', 'maxim', 'yuri', 'denis', 'andrey', // RU male names
  'szabolcs', 'tamas', 'tamás', 'gabor', 'gábor', 'andras', 'andrás', 'györgy', 'attila', 'zoltan' // HU male names
];

const NATURAL_KEYWORDS = ['natural', 'neural', 'online', 'premium', 'enhanced'];

export function findBestVoiceForLang(langCode: 'hu' | 'ru', preferMaleOverride?: boolean): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;

  const voices = window.speechSynthesis.getVoices();
  const targetLang = langCode.toLowerCase();
  const langVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith(targetLang));

  if (langVoices.length === 0) return null;

  const wantMale = preferMaleOverride !== undefined ? preferMaleOverride : currentSettings.preferMale;
  const customURI = langCode === 'hu' ? currentSettings.huVoiceURI : currentSettings.ruVoiceURI;

  // 1. If explicit URI selected
  if (customURI && customURI !== 'auto') {
    const selected = langVoices.find(v => v.voiceURI === customURI);
    if (selected) return selected;
  }

  // 2. Search for Male + Natural/Neural voice
  if (wantMale) {
    const maleNatural = langVoices.find(v => {
      const nameLower = v.name.toLowerCase();
      const isMale = MALE_KEYWORDS.some(kw => nameLower.includes(kw));
      const isNatural = NATURAL_KEYWORDS.some(kw => nameLower.includes(kw));
      return isMale && isNatural;
    });
    if (maleNatural) return maleNatural;

    const maleAny = langVoices.find(v => {
      const nameLower = v.name.toLowerCase();
      return MALE_KEYWORDS.some(kw => nameLower.includes(kw));
    });
    if (maleAny) return maleAny;
  }

  // 3. Fallback to Natural/Neural high quality
  const naturalAny = langVoices.find(v => {
    const nameLower = v.name.toLowerCase();
    return NATURAL_KEYWORDS.some(kw => nameLower.includes(kw));
  });
  if (naturalAny) return naturalAny;

  // 4. Fallback to default or first
  const defaultVoice = langVoices.find(v => v.default || !v.localService);
  return defaultVoice || langVoices[0];
}

export interface SpeechItem {
  text: string;
  lang: 'hu-HU' | 'ru-RU';
  rate?: number;
  pitch?: number;
  fallbackSequence?: SpeechItem[];
}

export async function speakText(
  text: string, 
  lang: 'hu-HU' | 'ru-RU' = 'hu-HU', 
  customRate?: number,
  onEnd?: () => void,
  onError?: (err: unknown) => void
) {
  console.log('[Speech] speakText() called:', { text, lang, rate: customRate });
  stopSpeech(); // Stop active speech and MP3 playback first

  // Check if a custom human audio file exists for this text
  const playedAudio = playCustomAudioOrTTS(text, lang, customRate, 1.0, onEnd, () => {
    // Custom audio file failed to load/play — fall back to TTS for the same text.
    console.log('[Speech] Custom audio failed, falling back to TTS:', text);
    void speakTextWithTTS(text, lang, customRate, onEnd, onError);
  });
  if (playedAudio) return;

  await speakTextWithTTS(text, lang, customRate, onEnd, onError);
}

async function speakTextWithTTS(
  text: string,
  lang: 'hu-HU' | 'ru-RU',
  customRate?: number,
  onEnd?: () => void,
  onError?: (err: unknown) => void
) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    if (onEnd) onEnd();
    return;
  }

  await waitForVoices();

  // Known Chrome quirk: calling cancel() and speak() back-to-back can leave
  // speechSynthesis silently idle. Give the engine a moment to settle.
  await new Promise((r) => setTimeout(r, 80));

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  
  // Apply voice settings
  const langCode = lang.startsWith('hu') ? 'hu' : 'ru';
  const voice = findBestVoiceForLang(langCode);

  if (voice) {
    utterance.voice = voice;
  }

  // Never allow an invalid rate (0 or negative would silence the voice).
  const safeRate = customRate && customRate > 0 ? customRate : currentSettings.rate;
  utterance.rate = safeRate > 0 ? safeRate : 1;

  // Pitch adjustments: if user prefers male voice and voice name isn't explicitly male, slightly lower pitch to give deep male timbre
  let pitchToUse = currentSettings.pitch;
  if (currentSettings.preferMale && voice) {
    const nameLower = voice.name.toLowerCase();
    const isExplicitMale = MALE_KEYWORDS.some(kw => nameLower.includes(kw));
    if (!isExplicitMale) {
      pitchToUse = 0.88; // Lower pitch for male tone
    }
  }
  utterance.pitch = pitchToUse > 0 ? pitchToUse : 1;

  utterance.onend = () => {
    if (onEnd) onEnd();
  };

  utterance.onerror = (e) => {
    console.warn('Speech error:', e);
    if (onError) onError(e);
    if (onEnd) onEnd();
  };

  const synth = window.speechSynthesis;
  console.log('[Speech] TTS speak:', { text, lang, rate: utterance.rate, voice: voice?.name ?? 'default' });
  synth.speak(utterance);
}

export async function speakSequence(
  items: SpeechItem[],
  onItemChange?: (index: number) => void,
  onComplete?: () => void,
  isCancelled?: () => boolean,
  onAutoplayBlocked?: () => void
) {
  stopSpeech(); // Stop active speech and MP3 playback first

  if (typeof window === 'undefined' || items.length === 0) {
    if (onComplete) onComplete();
    return;
  }

  await waitForVoices();

  // If the playback was cancelled while we were waiting for voices to load,
  // do NOT start speaking — otherwise pressing "Стоп" would restart the audio.
  if (isCancelled?.()) {
    if (onComplete) onComplete();
    return;
  }

  let index = 0;

  function speakNext() {
    if (isCancelled?.()) {
      stopSpeech();
      if (onComplete) onComplete();
      return;
    }
    if (index >= items.length) {
      if (onComplete) onComplete();
      return;
    }

    if (onItemChange) onItemChange(index);

    const item = items[index];

    const playedCustom = playCustomAudioOrTTS(
      item.text,
      item.lang,
      item.rate,
      item.pitch || 1.0,
      () => {
        index++;
        speakNext();
      },
      (err) => {
        if (isAutoplayBlockedError(err)) {
          console.warn('Slide narration MP3 blocked by browser autoplay policy:', err);
          stopSpeech();
          if (onAutoplayBlocked) onAutoplayBlocked();
          if (onComplete) onComplete();
          return;
        }
        if (item.fallbackSequence && item.fallbackSequence.length > 0) {
          console.warn('Custom audio failed, falling back to slide text TTS sequence:', err);
          items = item.fallbackSequence;
          index = 0;
          speakNext();
        } else {
          index++;
          speakNext();
        }
      }
    );

    if (playedCustom) return;

    const utterance = new SpeechSynthesisUtterance(item.text);
    utterance.lang = item.lang;

    const langCode = item.lang.startsWith('hu') ? 'hu' : 'ru';
    const voice = findBestVoiceForLang(langCode);

    if (voice) {
      utterance.voice = voice;
    }

    // Never allow an invalid rate (0 or negative would silence the voice).
    const seqRate = item.rate && item.rate > 0 ? item.rate : currentSettings.rate;
    utterance.rate = seqRate > 0 ? seqRate : 1;

    let pitchToUse = item.pitch || currentSettings.pitch;
    if (currentSettings.preferMale && voice) {
      const nameLower = voice.name.toLowerCase();
      const isExplicitMale = MALE_KEYWORDS.some(kw => nameLower.includes(kw));
      if (!isExplicitMale) {
        pitchToUse = 0.88;
      }
    }
    utterance.pitch = pitchToUse > 0 ? pitchToUse : 1;

    utterance.onend = () => {
      index++;
      speakNext();
    };

    utterance.onerror = () => {
      index++;
      speakNext();
    };

    console.log('[Speech] Sequence TTS:', { text: item.text, lang: item.lang, rate: utterance.rate, voice: voice?.name ?? 'default' });
    window.speechSynthesis.speak(utterance);
  }

  speakNext();
}

export function stopSpeech() {
  stopActiveAudio();
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/**
 * Browser autoplay policy signals a blocked media playback attempt with a
 * NotAllowedError DOMException. We distinguish this from a genuine MP3 load
 * failure (which should keep the MP3 → TTS fallback) so the narration player
 * can surface a "press play once" hint instead of silently failing.
 */
function isAutoplayBlockedError(err: unknown): boolean {
  if (typeof err !== 'object' || err === null) return false;
  return (err as { name?: unknown }).name === 'NotAllowedError';
}
