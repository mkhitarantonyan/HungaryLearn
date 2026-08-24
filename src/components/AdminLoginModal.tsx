import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, X, ShieldCheck, LogOut, Key, RotateCcw } from 'lucide-react';
import { loginAdminServer, logoutAdmin, isAdminLoggedIn } from '../utils/adminStore';
import { getActiveAudioOverridesSummary, resetAllAudioOverrides } from '../utils/audioRegistry';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  message?: string;
}

export const AdminLoginModal: React.FC<AdminLoginModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  message
}) => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetSuccessMsg, setResetSuccessMsg] = useState('');
  const isLogged = isAdminLoggedIn();

  if (!isOpen) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const res = await loginAdminServer('admin', password);
      if (res.success) {
        setPassword('');
        if (onSuccess) onSuccess();
        onClose();
      } else {
        setError(res.message || 'Неверный логин или пароль');
      }
    } catch (err) {
      setError('Ошибка проверки авторизации');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await logoutAdmin();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2A2320]/60 backdrop-blur-xs">
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-modal-title"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-[#FBF7EF] border border-[#D9CBB0] rounded-2xl w-full max-w-md p-6 shadow-2xl relative"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#D9CBB0]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#7A1E2B]/10 text-[#7A1E2B] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="admin-modal-title" className="font-mono font-bold text-[#57121C] text-base">
                {isLogged ? 'Панель Администратора' : 'Вход Администратора'}
              </h3>
              <div className="text-xs text-[#8A7A68]">Управление текстами и аудиофайлами</div>
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

        {message && (
          <div className="mt-4 p-3 rounded-xl bg-[#7A1E2B]/10 border border-[#7A1E2B]/30 text-xs text-[#7A1E2B] font-medium">
            {message}
          </div>
        )}

        {isLogged ? (
          <div className="py-6 space-y-4">
            <div className="p-4 rounded-xl bg-[#2C5F58]/10 border border-[#2C5F58]/30 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#2C5F58] shrink-0" />
              <div>
                <div className="font-mono font-bold text-[#2C5F58] text-sm">Вы вошли как Администратор</div>
                <div className="text-xs text-[#2A2320]/80 mt-0.5">
                  Вам доступны все функции редактирования слов, текстов и загрузки MP3 дорожек к слайдам.
                </div>
              </div>
            </div>

            {/* Audio overrides status and reset section */}
            <div className="p-4 rounded-xl bg-white border border-[#D9CBB0] space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-mono font-bold text-xs text-[#57121C] uppercase tracking-wider flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-[#7A1E2B]" />
                  <span>Статус переопределений аудио</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                  getActiveAudioOverridesSummary().totalCount > 0
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                }`}>
                  {getActiveAudioOverridesSummary().totalCount > 0
                    ? `Активно ${getActiveAudioOverridesSummary().totalCount} переопределений`
                    : 'Файлы из public/audio/ (чисто)'}
                </span>
              </div>

              {getActiveAudioOverridesSummary().totalCount > 0 && (
                <div className="text-xs text-[#8A7A68] space-y-1 bg-[#F6EFE4] p-2.5 rounded-lg border border-[#D9CBB0]/60 font-mono">
                  {getActiveAudioOverridesSummary().serverOverrides.length > 0 && (
                    <div>• На сервере: {getActiveAudioOverridesSummary().serverOverrides.join(', ')}</div>
                  )}
                  {getActiveAudioOverridesSummary().customOverrides.length > 0 && (
                    <div>• В IndexedDB: {getActiveAudioOverridesSummary().customOverrides.join(', ')}</div>
                  )}
                  {getActiveAudioOverridesSummary().disabledKeys.length > 0 && (
                    <div>• Отключенные: {getActiveAudioOverridesSummary().disabledKeys.join(', ')}</div>
                  )}
                </div>
              )}

              <button
                type="button"
                onClick={async () => {
                  const res = await resetAllAudioOverrides();
                  setResetSuccessMsg(res.success
                    ? `Успешно сброшено ${res.count} переопределений. Приложение полностью вернулось к файлам из public/audio/!`
                    : `Локальные данные сброшены не полностью или сервер не удалил ключи: ${res.failedServerKeys.join(', ') || 'локальное хранилище'}. Повторите попытку.`);
                }}
                className="w-full py-2 px-3 rounded-xl bg-[#7A1E2B] hover:bg-[#57121C] text-white font-mono font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Сбросить все переопределения и вернуться к файлам из public/audio</span>
              </button>

              {resetSuccessMsg && (
                <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold font-mono">
                  {resetSuccessMsg}
                </div>
              )}
            </div>

            <button
              onClick={handleLogout}
              className="w-full py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-mono font-bold text-xs md:text-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Выйти из режима Администратора</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4 my-4">
            <div className="space-y-1">
              <label className="text-xs font-mono font-semibold text-[#57121C] flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-[#7A1E2B]" />
                <span>Пароль</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full p-2.5 rounded-xl border border-[#D9CBB0] bg-white font-mono text-sm text-[#2A2320] outline-none focus:border-[#7A1E2B]"
                required
              />
            </div>

            {error && (
              <div className="p-2.5 rounded-lg bg-red-100 border border-red-300 text-red-700 text-xs font-semibold">
                {error}
              </div>
            )}

            <div className="pt-2 flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-2.5 rounded-xl border border-[#D9CBB0] text-[#57121C] font-semibold text-xs hover:bg-[#F6EFE4] transition-colors cursor-pointer"
              >
                Отмена
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 py-2.5 rounded-xl bg-[#7A1E2B] text-white font-semibold text-xs hover:bg-[#57121C] transition-colors cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{isLoading ? 'Проверка...' : 'Войти'}</span>
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};
