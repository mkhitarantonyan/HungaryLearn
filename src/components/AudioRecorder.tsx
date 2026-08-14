import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Play, RefreshCw, Volume2 } from 'lucide-react';
import { motion } from 'motion/react';
import { speakText } from '../utils/speech';

interface AudioRecorderProps {
  targetText: string;
  targetPhonetic?: string;
  targetTranslation?: string;
}

export const AudioRecorder: React.FC<AudioRecorderProps> = ({
  targetText,
  targetPhonetic,
  targetTranslation
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
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
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
    speakText(targetText, 'hu-HU', 0.8);
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
        <div className="text-lg font-bold text-[#57121C] font-mono flex items-center gap-2">
          <span>{targetText}</span>
          {targetPhonetic && <span className="text-sm font-normal text-[#8A7A68]">{targetPhonetic}</span>}
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
          onClick={playTarget}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#7A1E2B] text-white text-xs font-medium hover:bg-[#57121C] transition-colors cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          <span>Образец</span>
        </button>

        {/* Record Button */}
        {!isRecording ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={startRecording}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-medium hover:bg-red-700 transition-colors cursor-pointer"
          >
            <Mic className="w-4 h-4" />
            <span>Записать голос</span>
          </motion.button>
        ) : (
          <motion.button
            whileTap={{ scale: 0.95 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            onClick={stopRecording}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-800 text-white text-xs font-medium cursor-pointer"
          >
            <Square className="w-4 h-4 fill-current" />
            <span>Остановить recording...</span>
          </motion.button>
        )}

        {/* Playback User Audio */}
        {audioUrl && !isRecording && (
          <button
            onClick={playUserRecording}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
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
          <p className="w-full text-xs text-red-600 font-sans mt-1">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};
