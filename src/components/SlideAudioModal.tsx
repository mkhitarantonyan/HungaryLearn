import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { X, Mic, Square, Play, Upload, Trash2, Volume2, Save, Check, Music, Lock, ShieldCheck, Loader2, RotateCcw } from 'lucide-react';
import { saveAudioForSlide, removeAudioForSlide, hasAudioForSlide, getAudioFileUrl, getSlideCandidateKeys, subscribeAudioChanges, resetAllAudioOverrides } from '../utils/audioRegistry';
import { stopSpeech } from '../utils/speech';
import { isAdminLoggedIn, subscribeAdminState } from '../utils/adminStore';
import { ConfirmDialog } from './ConfirmDialog';

interface SlideAudioModalProps {
  isOpen: boolean;
  lessonNumber: number;
  slideId: number;
  slideTitle: string;
  onClose: () => void;
  onSaved?: () => void;
  onOpenAdminLogin?: () => void;
}

export const SlideAudioModal: React.FC<SlideAudioModalProps> = ({
  isOpen,
  lessonNumber,
  slideId,
  slideTitle,
  onClose,
  onSaved,
  onOpenAdminLogin
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [recordedUrl, setRecordedUrl] = useState<string | null>(null);
  const [hasCustomAudio, setHasCustomAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isAdmin, setIsAdmin] = useState(isAdminLoggedIn());
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsAdmin(isAdminLoggedIn());
    const unsubAdmin = subscribeAdminState((status) => {
      setIsAdmin(status);
    });

    const updateAudioState = () => {
      const exists = hasAudioForSlide(slideId, lessonNumber);
      setHasCustomAudio(exists);
    };

    if (isOpen) {
      updateAudioState();
      setSelectedFile(null);
      setRecordedBlob(null);
      setRecordedUrl(null);
      setSavedSuccess(false);
      setIsRecording(false);
      setErrorMessage('');
    }

    const unsubscribe = subscribeAudioChanges(updateAudioState);
    return () => {
      unsubAdmin();
      unsubscribe();
    };
  }, [isOpen, lessonNumber, slideId]);

  if (!isOpen) return null;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      chunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setRecordedBlob(blob);
        const url = URL.createObjectURL(blob);
        setRecordedUrl(url);
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
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isAdminLoggedIn()) {
      onOpenAdminLogin?.();
      return;
    }
    stopSpeech();

    setIsSaving(true);
    try {
      const audioToSave = selectedFile || recordedBlob;
      if (audioToSave) {
        const result = await saveAudioForSlide(slideId, audioToSave, lessonNumber);
        if (!result.ok) {
          setErrorMessage(result.error || "Не удалось сохранить аудиозапись.");
          return;
        }
        setHasCustomAudio(true);
      }

      setSavedSuccess(true);
      setTimeout(() => {
        if (onSaved) onSaved();
        onClose();
      }, 600);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteAudio = async () => {
    if (!isAdminLoggedIn()) {
      onOpenAdminLogin?.();
      return;
    }
    setShowConfirmDelete(true);
  };

  const confirmDeleteAudio = async () => {
    setShowConfirmDelete(false);
    stopSpeech();
    await removeAudioForSlide(slideId, lessonNumber);
    setHasCustomAudio(false);
    setSelectedFile(null);
    setRecordedBlob(null);
    setRecordedUrl(null);
    if (onSaved) onSaved();
    onClose();
  };

  const handleTestAudio = () => {
    stopSpeech();
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
    }

    let urlToPlay: string | null = null;
    let createdObjectUrl: string | null = null;
    if (selectedFile) {
      createdObjectUrl = URL.createObjectURL(selectedFile);
      urlToPlay = createdObjectUrl;
    } else if (recordedUrl) {
      urlToPlay = recordedUrl;
    } else {
      const candidates = getSlideCandidateKeys(slideId, lessonNumber);
      for (const cand of candidates) {
        const existingUrl = getAudioFileUrl(cand);
        if (existingUrl) {
          urlToPlay = existingUrl;
          break;
        }
      }
    }

    if (!urlToPlay) return;

    const audio = new Audio(urlToPlay);
    activeAudioRef.current = audio;
    setIsPlaying(true);
    const cleanup = () => {
      setIsPlaying(false);
      if (createdObjectUrl) URL.revokeObjectURL(createdObjectUrl);
    };
    audio.onended = cleanup;
    audio.onerror = cleanup;
    audio.play().catch(cleanup);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2320]/60 backdrop-blur-xs">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="slide-audio-modal-title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl w-full max-w-lg p-6 shadow-2xl relative space-y-4"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#D9CBB0]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#7A1E2B]/10 text-[#7A1E2B] flex items-center justify-center">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h3 id="slide-audio-modal-title" className="font-mono font-bold text-[#57121C] text-base">
                Озвучка слайда
              </h3>
              <div className="text-xs text-[#8A7A68]">
                Урок {lessonNumber} · Слайд {slideId}: <span className="font-semibold text-[#57121C]">{slideTitle}</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Закрыть"
            className="p-1.5 rounded-full hover:bg-[#7A1E2B]/10 text-[#7A1E2B] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current status */}
        <div className="p-3 bg-white border border-[#D9CBB0] rounded-xl flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono uppercase font-bold text-[#8A7A68]">Статус озвучки:</div>
            <div className="text-xs font-mono font-bold mt-0.5">
              {hasCustomAudio ? (
                <span className="text-[#2C5F58] flex items-center gap-1">
                  ✓ Прикреплен живой голос диктора
                </span>
              ) : (
                <span className="text-[#B98A2B]">
                  ⚡ Синтетический диктор (TTS)
                </span>
              )}
            </div>
          </div>

          {(hasCustomAudio || selectedFile || recordedUrl) && (
            <button
              type="button"
              onClick={handleTestAudio}
              className="px-3 py-1.5 rounded-lg bg-[#7A1E2B] text-white hover:bg-[#57121C] transition-colors text-xs font-mono font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <Volume2 className={`w-3.5 h-3.5 ${isPlaying ? 'animate-bounce text-[#B98A2B]' : ''}`} />
              <span>Прослушать</span>
            </button>
          )}
        </div>

        {!isAdmin ? (
          <div className="p-4 rounded-xl bg-[#7A1E2B]/10 border border-[#7A1E2B]/30 space-y-3 text-xs my-3">
            <div className="flex items-center gap-2 font-mono font-bold text-[#7A1E2B] text-sm">
              <Lock className="w-4 h-4" />
              <span>Требуются права Администратора</span>
            </div>
            <p className="text-[#2A2320]/80 leading-relaxed font-sans">
              Добавление, запись с микрофона, загрузка и удаление MP3 дорожек диктора к слайдам доступна исключительно авторизованному Администратору.
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onOpenAdminLogin) onOpenAdminLogin();
              }}
              className="px-4 py-2.5 rounded-xl bg-[#7A1E2B] text-white font-mono font-bold text-xs hover:bg-[#57121C] transition-colors cursor-pointer flex items-center justify-center gap-2 w-full shadow-2xs"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Войти под логином Администратора</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-4">
            {/* Method 1: Record Microphone */}
            <div className="p-4 bg-white border border-[#D9CBB0] rounded-xl space-y-3">
              <div className="text-xs font-mono font-bold text-[#57121C] flex items-center gap-1.5">
                <Mic className="w-4 h-4 text-[#7A1E2B]" />
                <span>Вариант 1: Записать голос через микрофон</span>
              </div>

              {!isRecording ? (
                <button
                  type="button"
                  onClick={startRecording}
                  className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Mic className="w-4 h-4" />
                  <span>Начать запись с микрофона</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="w-full py-2.5 rounded-xl bg-red-800 text-white font-mono font-semibold text-xs flex items-center justify-center gap-2 animate-pulse cursor-pointer"
                >
                  <Square className="w-4 h-4 fill-current" />
                  <span>Остановить запись...</span>
                </button>
              )}

              {recordedUrl && !isRecording && (
                <div className="p-2.5 bg-[#2C5F58]/10 rounded-lg text-xs font-mono text-[#2C5F58] flex items-center justify-between">
                  <span>✓ Голос записан</span>
                  <button
                    type="button"
                    onClick={handleTestAudio}
                    className="text-xs text-[#7A1E2B] font-bold underline cursor-pointer"
                  >
                    Воспроизвести
                  </button>
                </div>
              )}
            </div>

            {/* Method 2: Upload MP3 File */}
            <div className="p-4 bg-white border border-[#D9CBB0] rounded-xl space-y-3">
              <div className="text-xs font-mono font-bold text-[#57121C] flex items-center gap-1.5">
                <Upload className="w-4 h-4 text-[#7A1E2B]" />
                <span>Вариант 2: Загрузить готовый MP3/WAV файл</span>
              </div>

              <label className="w-full py-2.5 px-3 rounded-xl border border-dashed border-[#7A1E2B]/40 bg-[#7A1E2B]/5 hover:bg-[#7A1E2B]/10 text-[#7A1E2B] font-mono text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors">
                <Upload className="w-4 h-4" />
                <span className="truncate">
                  {selectedFile ? selectedFile.name : 'Выбрать MP3 файл с диска...'}
                </span>
                <input
                  type="file"
                  accept="audio/mp3,audio/wav,audio/m4a,audio/webm"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setSelectedFile(e.target.files[0]);
                      setRecordedBlob(null);
                      setRecordedUrl(null);
                    }
                  }}
                />
              </label>
            </div>

            {errorMessage && (
              <div className="p-2.5 rounded-xl bg-red-50 border border-red-300 text-red-700 font-sans text-xs">
                {errorMessage}
              </div>
            )}

            {savedSuccess && (
              <div className="p-2.5 rounded-xl bg-[#2C5F58]/10 border border-[#2C5F58]/30 text-[#2C5F58] font-mono text-xs font-bold flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>Озвучка слайда успешно сохранена!</span>
              </div>
            )}

            {/* Bottom actions */}
            <div className="pt-2 flex items-center justify-between gap-2 border-t border-[#D9CBB0]">
              {hasCustomAudio ? (
                <button
                  type="button"
                  onClick={handleDeleteAudio}
                  className="px-3 py-2 rounded-xl text-xs font-mono text-red-600 hover:bg-red-50 transition-colors cursor-pointer flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Удалить озвучку</span>
                </button>
              ) : (
                <div></div>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl border border-[#D9CBB0] text-[#57121C] font-semibold text-xs hover:bg-[#F6EFE4] transition-colors cursor-pointer"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={isSaving || (!selectedFile && !recordedBlob)}
                  className={`px-5 py-2 rounded-xl font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer ${
                    (selectedFile || recordedBlob) && !isSaving
                      ? 'bg-[#7A1E2B] text-white hover:bg-[#57121C]'
                      : 'bg-[#D9CBB0] text-[#8A7A68] cursor-not-allowed'
                  }`}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Сохранение...</span>
                    </>
                  ) : (
                    <>
                      <Save className="w-3.5 h-3.5" />
                      <span>Сохранить озвучку</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </motion.div>

      <ConfirmDialog
        isOpen={showConfirmDelete}
        title="Удаление озвучки"
        message={`Вы уверены, что хотите удалить пользовательскую озвучку для слайда ${slideId}?`}
        confirmLabel="Удалить"
        cancelLabel="Отмена"
        onConfirm={confirmDeleteAudio}
        onCancel={() => setShowConfirmDelete(false)}
      />
    </div>
  );
};
