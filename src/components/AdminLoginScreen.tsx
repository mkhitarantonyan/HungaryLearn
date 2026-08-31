import { GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AdminLoginForm } from './AdminLoginForm';

interface AdminLoginScreenProps {
  initialError?: string;
  onSuccess: () => void;
  onRetrySession: () => Promise<void>;
}

export function AdminLoginScreen({ initialError, onSuccess, onRetrySession }: AdminLoginScreenProps) {
  return (
    <div className="min-h-screen bg-[#EDF4FB] px-4 py-10 text-[#252B2F] font-sans">
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <section aria-labelledby="admin-login-title" className="w-full rounded-3xl border border-[#D6DEE6] bg-[#FFFFFF] p-6 shadow-xl shadow-[#252B2F]/10 sm:p-8">
          <div className="mb-7 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#116EEE] text-white shadow-md shadow-[#116EEE]/25">
              <GraduationCap className="w-6" />
            </span>
            <div className="mt-4 text-xl font-black tracking-tight text-[#252B2F]">
              Magyar<span className="text-[#116EEE]">o</span>
            </div>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.24em] text-[#666E7E]">
              <ShieldCheck className="w-3.5" /> ADMIN
            </div>
            <h1 id="admin-login-title" className="sr-only">Вход администратора Magyaro</h1>
          </div>

          <AdminLoginForm initialError={initialError} onSuccess={onSuccess} onRetrySession={onRetrySession} />

          <p className="mt-6 text-center text-xs leading-relaxed text-[#666E7E]">
            Доступ разрешён только аккаунтам Firebase с подтверждённым правом администратора.
          </p>
          <Link to="/" className="mt-4 block text-center text-sm font-semibold text-[#116EEE] hover:underline">
            Вернуться на сайт
          </Link>
        </section>
      </main>
    </div>
  );
}
