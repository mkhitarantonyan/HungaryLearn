import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  X, Volume2, Mic, UserCheck, Sliders, Check, Play, Settings2, AudioLines, User, Upload, Trash2, FileAudio, Lock, ShieldCheck 
} from 'lucide-react';
import { 
  getVoiceSettings, 
  saveVoiceSettings, 
  getAllAvailableVoices, 
  waitForVoices,
  speakText, 
  stopSpeech, 
  VoiceSettings 
} from '../utils/speech';
import { 
  saveAudioForSlide, 
  removeAudioForSlide, 
  hasAudioForSlide, 
  getAudioFileUrl,
  playCustomAudioOrTTS 
} from '../utils/audioRegistry';
import { isAdminLoggedIn, subscribeAdminState } from '../utils/adminStore';
import { AdminLoginModal } from './AdminLoginModal';

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VoiceSettingsModal: React.FC<VoiceSettingsModalProps> = ({ isOpen, onClose }) => {
  const [settings, setSettings] = useState<VoiceSettings>(getVoiceSettings());
  const [voices, setVoices] = useState<{ hu: SpeechSynthesisVoice[]; ru: SpeechSynthesisVoice[] }>({ hu: [], ru: [] });
  const [isTestingHu, setIsTestingHu] = useState(false);
  const [isTestingRu, setIsTestingRu] = useState(false);
  const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn());
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [adminNoticeMessage, setAdminNoticeMessage] = useState('');

  useEffect(() => {
    const unsubscribe = subscribeAdminState((status) => {
      setIsAdmin(status);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setIsAdmin(isAdminLoggedIn());
    setSettings(getVoiceSettings());
    setVoices(getAllAvailableVoices());

    waitForVoices().then(() => setVoices(getAllAvailableVoices()));

    const handleVoicesChanged = () => setVoices(getAllAvailableVoices());
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.removeEventListener('voiceschanged', handleVoicesChanged);
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = (updated: Partial<VoiceSettings>) => {
    const newSettings = { ...settings, ...updated };
    setSettings(newSettings);
    saveVoiceSettings(updated);
  };

  const testHungarian = () => {
    setIsTestingHu(true);
    speakText('Jó napot kívánok! Ez a magyar hang прослушивание.', 'hu-HU', settings.rate, () => setIsTestingHu(false), () => setIsTestingHu(false));
  };

  const testRussian = () => {
    setIsTestingRu(true);
    speakText('Здравствуйте! Это тестирование мужского голоса для объяснения урока.', 'ru-RU', settings.rate, () => setIsTestingRu(false), () => setIsTestingRu(false));
  };

  const handleClose = () => {
    stopSpeech();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2320]/60 backdrop-blur-xs">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="voice-settings-title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl w-full max-w-xl p-6 shadow-2xl relative flex flex-col max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#D9CBB0]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#7A1E2B] text-white flex items-center justify-center">
              <Settings2 className="w-4 h-4" />
            </div>
            <div>
              <h3 id="voice-settings-title" className="font-mono font-bold text-[#57121C] text-base">Настройки синтеза речи</h3>
              <div className="text-xs text-[#8A7A68]">Настройки синтетического голоса, скорости и тембра</div>
            </div>
          </div>

          <button
            onClick={handleClose}
            aria-label="Закрыть"
            className="p-2 rounded-full hover:bg-[#7A1E2B]/10 text-[#7A1E2B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Direct Slide MP3 Info Banner */}
        <div className="p-3 rounded-xl border border-[#2C5F58]/30 bg-[#2C5F58]/10 text-[#2C5F58] my-4 text-xs font-mono space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-sm">
            <FileAudio className="w-4 h-4 text-[#2C5F58]" />
            <span>🎙️ MP3 Аудиофайлы диктора привязаны прямо к слайдам!</span>
          </div>
          <p className="text-[11px] text-[#2A2320]/80 leading-relaxed font-sans">
            Чтобы прослушать живую аудиозапись диктора или прикрепить свой MP3 файл к конкретному слайду уроков, используйте кнопку <strong>«🎙️ Озвучка слайда / MP3»</strong> прямо во время просмотра слайда на странице урока.
          </p>
        </div>

        {/* TTS Settings Body */}
        <div className="space-y-5 my-2">
          {/* Male Voice Toggle */}
          <div className="p-4 rounded-xl border border-[#D9CBB0] bg-white flex items-center justify-between gap-3 shadow-2xs">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#2C5F58]/10 text-[#2C5F58] flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="font-mono font-bold text-[#57121C] text-sm">Предпочитать Мужской голос</div>
                <div className="text-xs text-[#8A7A68] mt-0.5">
                  Автоматический выбор мужских тембров дикторов и подстройка глубокого тона (Pitch ~0.9)
                </div>
              </div>
            </div>

            <button
              onClick={() => handleSave({ preferMale: !settings.preferMale })}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                settings.preferMale ? 'bg-[#2C5F58]' : 'bg-[#D9CBB0]'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform absolute top-0.5 ${
                  settings.preferMale ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Native Hungarian Voice Selector */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-[#57121C] uppercase flex items-center gap-1.5">
                <AudioLines className="w-3.5 h-3.5 text-[#B98A2B]" />
                <span>Голос носителя венгерского языка (hu-HU)</span>
              </label>
              <button
                onClick={testHungarian}
                disabled={isTestingHu}
                className="text-xs font-mono font-semibold text-[#7A1E2B] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isTestingHu ? "Воспроизведение..." : "Прослушать"}</span>
              </button>
            </div>

            <select
              value={settings.huVoiceURI}
              onChange={(e) => handleSave({ huVoiceURI: e.target.value })}
              className="w-full p-3 rounded-xl border border-[#D9CBB0] bg-white font-mono text-xs md:text-sm text-[#2A2320] focus:border-[#7A1E2B] outline-none"
            >
              <option value="auto">Авто-выбор лучшего венгерского голоса</option>
              {voices.hu.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </div>

          {/* Russian Explanation Voice Selector */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold text-[#57121C] uppercase flex items-center gap-1.5">
                <UserCheck className="w-3.5 h-3.5 text-[#2C5F58]" />
                <span>Голос для объяснений на русском (ru-RU)</span>
              </label>
              <button
                onClick={testRussian}
                disabled={isTestingRu}
                className="text-xs font-mono font-semibold text-[#2C5F58] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isTestingRu ? "Воспроизведение..." : "Прослушать"}</span>
              </button>
            </div>

            <select
              value={settings.ruVoiceURI}
              onChange={(e) => handleSave({ ruVoiceURI: e.target.value })}
              className="w-full p-3 rounded-xl border border-[#D9CBB0] bg-white font-mono text-xs md:text-sm text-[#2A2320] focus:border-[#7A1E2B] outline-none"
            >
              <option value="auto">Авто-выбор лучшего русского мужского голоса</option>
              {voices.ru.map((v) => (
                <option key={v.voiceURI} value={v.voiceURI}>
                  {v.name} ({v.lang})
                </option>
              ))}
            </select>
          </div>

          {/* Controls: Pitch & Rate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl border border-[#D9CBB0] bg-white">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#57121C]">
                <span>Высота / Тембр (Pitch):</span>
                <span className="text-[#7A1E2B]">{settings.pitch.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.6"
                max="1.3"
                step="0.05"
                value={settings.pitch}
                onChange={(e) => handleSave({ pitch: parseFloat(e.target.value) })}
                className="w-full accent-[#7A1E2B] cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-semibold text-[#57121C]">
                <span>Скорость речи (Rate):</span>
                <span className="text-[#2C5F58]">{settings.rate.toFixed(2)}x</span>
              </div>
              <input
                type="range"
                min="0.6"
                max="1.2"
                step="0.05"
                value={settings.rate}
                onChange={(e) => handleSave({ rate: parseFloat(e.target.value) })}
                className="w-full accent-[#2C5F58] cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-[#D9CBB0] flex justify-between items-center">
          <div className="text-[11px] text-[#8A7A68]">
            {isAdmin ? '🛡️ Администратор активен' : '🔑 Гостевой режим'}
          </div>
          <button
            onClick={handleClose}
            className="px-6 py-2 rounded-xl bg-[#7A1E2B] text-white font-semibold text-xs md:text-sm hover:bg-[#57121C] transition-colors cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </motion.div>

      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        message={adminNoticeMessage}
      />
    </div>
  );
};

