import type { ReactNode } from 'react';
import { GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PublicInfoLayoutProps {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function PublicInfoLayout({
  eyebrow,
  title,
  intro,
  children,
}: PublicInfoLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F2F7FD] text-[#252B2F] font-sans antialiased">
      <header className="sticky top-0 z-30 border-b border-[#D6DEE6]/80 bg-[#F2F7FD]/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2.5 min-w-0">
            <span className="w-9 h-9 rounded-[10px] bg-[#116EEE] text-white flex items-center justify-center shadow-sm shrink-0">
              <GraduationCap className="w-5 h-5" />
            </span>
            <span className="font-extrabold tracking-tight text-lg truncate">
              Magyar<span className="text-[#116EEE]">o</span>
            </span>
          </Link>

          <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold text-[#435064]">
            <Link to="/pricing" className="hover:text-[#116EEE] transition-colors">
              Pricing
            </Link>
            <Link to="/terms" className="hidden sm:inline hover:text-[#116EEE] transition-colors">
              Terms
            </Link>
            <Link
              to="/?auth=register"
              className="px-4 py-2 rounded-xl bg-[#116EEE] text-white hover:bg-[#0D5ED0] transition-colors"
            >
              Get started
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="mb-8 md:mb-10">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#116EEE] mb-3">
            {eyebrow}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {title}
          </h1>
          {intro && (
            <p className="mt-4 text-base md:text-lg text-[#666E7E] leading-relaxed max-w-3xl">
              {intro}
            </p>
          )}
        </div>

        {children}
      </main>

      <footer className="border-t border-[#D6DEE6] bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-5 md:items-center md:justify-between">
          <div>
            <div className="font-extrabold">
              Magyar<span className="text-[#116EEE]">o</span>
            </div>
            <div className="mt-1 text-xs text-[#666E7E]">
              Self-study digital Hungarian course, A0–B1.
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#666E7E]">
            <Link to="/pricing" className="hover:text-[#116EEE]">Pricing</Link>
            <Link to="/terms" className="hover:text-[#116EEE]">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-[#116EEE]">Privacy Policy</Link>
            <Link to="/refund" className="hover:text-[#116EEE]">Refund Policy</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
