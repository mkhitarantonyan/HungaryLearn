import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';
import { playRecordedAudio } from '../utils/speech';

interface AudioRecorderProps {
  targetText: string;
  targetPhonetic?: string;
  targetTranslation?: string;
  /** Optional callback invoked when a recording is ready (backward compatible). */
  onRecordingReady?: (audioUrl: string) => void;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({
  targetText,
  targetPhonetic,
  targetTranslation,
  onRecordingReady
}) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlayingUser, setIsPlayingUser] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const userAudioRef = useRef<HTMLAudioElement | null>(null);

  // Revoke previous object URL when it changes or component unmounts
  useEffect(() => {
    return () => { if (audioUrl) URL.revokeObjectURL(audioUrl); };
  }, [audioUrl]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
        onRecordingReady?.(url);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch {
      setErrorMessage("Не удалось получить доступ к микрофону. Проверьте разрешения браузера.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      // Stop all tracks
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const playTarget = () => {
    setErrorMessage('');
    playRecordedAudio(
      targetText,
      0.8,
      undefined,
      () => setErrorMessage('Записанный образец недоступен.')
    );
  };

  const playUserRecording = () => {
    if (!audioUrl) return;
    if (userAudioRef.current) {
      userAudioRef.current.pause();
    }
    const audio = new Audio(audioUrl);
    userAudioRef.current = audio;
    setIsPlayingUser(true);
    audio.onended = () => setIsPlayingUser(false);
    audio.onerror = () => setIsPlayingUser(false);
    audio.play().catch(() => setIsPlayingUser(false));
  };

  return (
    <div className="bg-[#2C5F58]/5 border border-[#2C5F58]/20 rounded-xl p-4 my-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex-1">
        <div className="text-xs uppercase tracking-wider font-mono text-[#2C5F58] font-semibold mb-1">
          Тренажёр произношения
        </div>
        <div className="flex min-w-0 flex-wrap items-center gap-2 text-lg font-bold text-[#57121C] font-mono [overflow-wrap:anywhere]">
          <span className="min-w-0 break-words">{targetText}</span>
          {targetPhonetic && <span className="min-w-0 break-words text-sm font-normal text-[#8A7A68]">{targetPhonetic}</span>}
        </div>
        {targetTranslation && (
          <div className="text-xs text-[#2A2320]/70 font-sans">{targetTranslation}</div>
        )}
        <p className="text-xs text-[#8A7A68] font-sans mt-2 max-w-md">
          Скажите слово вслух, затем сравните свою запись с образцом. Тренажёр не оценивает произношение автоматически.
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {/* Sample Audio */}
        <button
          type="button"
          onClick={playTarget}
          aria-label={`Прослушать образец: ${targetText}`}
          className="flex min-h-11 items-center gap-1.5 rounded-lg bg-[#7A1E2B] px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-[#57121C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2 cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          <span>Образец</span>
        </button>

        {/* Record Button */}
        {!isRecording ? (
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            onClick={startRecording}
            aria-label="Записать ответ с микрофона"
            className="flex min-h-11 items-center gap-1.5 rounded-lg bg-red-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 cursor-pointer"
          >
            <Mic className="w-4 h-4" />
            <span>Записать голос</span>
          </motion.button>
        ) : (
          <motion.button
            type="button"
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            onClick={stopRecording}
            aria-label="Остановить запись"
            className="flex min-h-11 items-center gap-1.5 rounded-lg bg-red-800 px-3 py-1.5 text-xs font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 focus-visible:ring-offset-2 cursor-pointer"
          >
            <Square className="w-4 h-4 fill-current" />
            <span>Остановить запись…</span>
          </motion.button>
        )}

        {/* Playback User Audio */}
        {audioUrl && !isRecording && (
          <button
            type="button"
            onClick={playUserRecording}
            aria-label="Прослушать мою запись"
            className={`flex min-h-11 items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1E2B]/50 focus-visible:ring-offset-2 cursor-pointer ${
              isPlayingUser 
                ? 'bg-[#B98A2B] text-white border-[#B98A2B]' 
                : 'bg-white border-[#D9CBB0] text-[#2A2320] hover:bg-[#FBF7EF]'
            }`}
          >
            <Play className="w-4 h-4" />
            <span>Моя запись</span>
          </button>
        )}

        {errorMessage && (
          <p className="w-full text-xs text-red-600 font-sans mt-1" role="alert">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};
