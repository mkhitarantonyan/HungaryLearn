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
    <div className="min-h-screen bg-[#F6EFE4] px-4 py-10 text-[#2A2320] font-sans">
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center">
        <section aria-labelledby="admin-login-title" className="w-full rounded-3xl border border-[#D9CBB0] bg-[#FBF7EF] p-6 shadow-xl shadow-[#57121C]/10 sm:p-8">
          <div className="mb-7 text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A1E2B] text-white shadow-md shadow-[#7A1E2B]/25">
              <GraduationCap className="w-6" />
            </span>
            <div className="mt-4 text-xl font-black tracking-tight text-[#231816]">
              Hungary<span className="text-[#7A1E2B]">Learn</span>
            </div>
            <div className="mt-1 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.24em] text-[#8A7A68]">
              <ShieldCheck className="w-3.5" /> ADMIN
            </div>
            <h1 id="admin-login-title" className="sr-only">Вход администратора HungaryLearn</h1>
          </div>

          <AdminLoginForm initialError={initialError} onSuccess={onSuccess} onRetrySession={onRetrySession} />

          <p className="mt-6 text-center text-xs leading-relaxed text-[#8A7A68]">
            Доступ разрешён только аккаунтам Firebase с подтверждённым правом администратора.
          </p>
          <Link to="/" className="mt-4 block text-center text-sm font-semibold text-[#7A1E2B] hover:underline">
            Вернуться на сайт
          </Link>
        </section>
      </main>
    </div>
  );
}
