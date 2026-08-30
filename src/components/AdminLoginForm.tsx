import { useId, useState, type FormEvent } from 'react';
import { Eye, EyeOff, Loader2, LockKeyhole, Mail } from 'lucide-react';
import { loginAdminServer } from '../utils/adminStore';

interface AdminLoginFormProps {
  onSuccess: () => void;
  initialError?: string;
  onRetrySession?: () => Promise<void>;
}

export function AdminLoginForm({ onSuccess, initialError, onRetrySession }: AdminLoginFormProps) {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [retrying, setRetrying] = useState(false);
  const [error, setError] = useState('');

  const visibleError = error || initialError || '';

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    if (!email.trim() || !password) {
      setError('Введите e-mail и пароль.');
      return;
    }
    setLoading(true);
    const result = await loginAdminServer(email, password);
    setLoading(false);
    if (result.success) {
      setPassword('');
      onSuccess();
      return;
    }
    setError(result.message);
  };

  const retrySession = async () => {
    if (!onRetrySession) return;
    setRetrying(true);
    setError('');
    await onRetrySession();
    setRetrying(false);
  };

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      <div className="space-y-1.5">
        <label htmlFor={emailId} className="block text-sm font-semibold text-[#57121C]">
          Email
        </label>
        <div className="relative">
          <Mail aria-hidden className="absolute left-3.5 top-1/2 w-4 -translate-y-1/2 text-[#8A7A68]" />
          <input
            id={emailId}
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            autoFocus
            required
            disabled={loading || retrying}
            className="w-full rounded-xl border border-[#D9CBB0] bg-white py-3 pl-10 pr-3 text-sm text-[#2A2320] outline-none transition focus:border-[#7A1E2B] focus:ring-2 focus:ring-[#7A1E2B]/20 disabled:opacity-60"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor={passwordId} className="block text-sm font-semibold text-[#57121C]">
          Password
        </label>
        <div className="relative">
          <LockKeyhole aria-hidden className="absolute left-3.5 top-1/2 w-4 -translate-y-1/2 text-[#8A7A68]" />
          <input
            id={passwordId}
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
            disabled={loading || retrying}
            className="w-full rounded-xl border border-[#D9CBB0] bg-white py-3 pl-10 pr-11 text-sm text-[#2A2320] outline-none transition focus:border-[#7A1E2B] focus:ring-2 focus:ring-[#7A1E2B]/20 disabled:opacity-60"
          />
          <button
            type="button"
            onClick={() => setShowPassword((visible) => !visible)}
            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
            aria-pressed={showPassword}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-[#8A7A68] hover:bg-[#F6EFE4] hover:text-[#57121C] focus-visible:outline-2 focus-visible:outline-[#7A1E2B]"
          >
            {showPassword ? <EyeOff className="w-4" /> : <Eye className="w-4" />}
          </button>
        </div>
      </div>

      {visibleError && (
        <div role="alert" aria-live="polite" className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-sm text-red-700">
          {visibleError}
        </div>
      )}

      {initialError && onRetrySession && (
        <button
          type="button"
          onClick={() => void retrySession()}
          disabled={loading || retrying}
          className="w-full rounded-xl border border-[#D9CBB0] bg-white py-2.5 text-sm font-semibold text-[#57121C] hover:bg-[#F6EFE4] disabled:opacity-60"
        >
          {retrying ? 'Повторная проверка…' : 'Повторить проверку сессии'}
        </button>
      )}

      <button
        type="submit"
        disabled={loading || retrying}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#7A1E2B] py-3 text-sm font-bold text-white shadow-md shadow-[#7A1E2B]/20 transition hover:bg-[#57121C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7A1E2B] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading && <Loader2 aria-hidden className="w-4 animate-spin" />}
        {loading ? 'Проверка доступа…' : 'Войти'}
      </button>
    </form>
  );
}
