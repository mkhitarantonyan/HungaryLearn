import React, { useEffect, useRef, useState, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Headphones,
  Brain,
  Cloud,
  Play,
  ArrowRight,
  GraduationCap,
  Sparkles,
  Menu,
  X,
  UserPlus,
  MousePointerClick,
  LogIn,
  Check,
  Star,
} from 'lucide-react';
import { LESSONS_META } from '../data/lessons';
import { getCurrentUser, subscribeUserState } from '../utils/userStore';
import { UserAuthModal } from '../components/UserAuthModal';
import { AdminLoginModal } from '../components/AdminLoginModal';

/* ------------------------------------------------------------------ */
/*  Scroll-reveal helper — fade-in + slide-up when a section appears   */
/* ------------------------------------------------------------------ */

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1E2B]/10 border border-[#7A1E2B]/15 text-[#7A1E2B] text-xs font-bold uppercase tracking-widest mb-5">
        <Sparkles className="w-3.5 h-3.5" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-black text-[#231816] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-[#6B5D52] leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Header                                                            */
/* ------------------------------------------------------------------ */

interface HeaderProps {
  user: { email: string } | null;
  onLogin: () => void;
  onSignup: () => void;
  onStart: () => void;
}

function LandingHeader({ user, onLogin, onSignup, onStart }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Возможности' },
    { href: '#how', label: 'Как это работает' },
    { href: '#preview', label: 'Программа курса' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF6EE]/90 backdrop-blur-md border-b border-[#E7D9C5]/70 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group shrink-0">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7A1E2B] to-[#57121C] text-white flex items-center justify-center shadow-md shadow-[#7A1E2B]/25 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-black text-[#231816] tracking-tight text-lg">
                Magyar<span className="text-[#7A1E2B]">Kurzus</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A7A68] mt-0.5">
                венгерский с нуля
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4A403A] hover:text-[#7A1E2B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <button
                onClick={onStart}
                className="px-5 py-2.5 rounded-xl bg-[#7A1E2B] text-white text-sm font-semibold hover:bg-[#57121C] hover:scale-105 transition-all shadow-md shadow-[#7A1E2B]/25 cursor-pointer"
              >
                Продолжить обучение
              </button>
            ) : (
              <>
                <button
                  onClick={onLogin}
                  className="px-5 py-2.5 rounded-xl border border-[#E7D9C5] bg-white text-[#231816] text-sm font-semibold hover:border-[#7A1E2B]/40 hover:text-[#7A1E2B] hover:scale-105 transition-all cursor-pointer"
                >
                  Войти
                </button>
                <button
                  onClick={onSignup}
                  className="px-5 py-2.5 rounded-xl bg-[#7A1E2B] text-white text-sm font-semibold hover:bg-[#57121C] hover:scale-105 transition-all shadow-md shadow-[#7A1E2B]/25 cursor-pointer"
                >
                  Регистрация
                </button>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            className="md:hidden p-2 rounded-lg text-[#231816] hover:bg-[#7A1E2B]/10 transition-colors cursor-pointer"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-5 pt-1 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#4A403A] hover:bg-[#7A1E2B]/5 hover:text-[#7A1E2B] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5">
              {user ? (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    onStart();
                  }}
                  className="w-full px-5 py-3 rounded-xl bg-[#7A1E2B] text-white text-sm font-semibold hover:bg-[#57121C] transition-colors cursor-pointer"
                >
                  Продолжить обучение
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onLogin();
                    }}
                    className="w-full px-5 py-3 rounded-xl border border-[#E7D9C5] bg-white text-[#231816] text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Войти
                  </button>
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      onSignup();
                    }}
                    className="w-full px-5 py-3 rounded-xl bg-[#7A1E2B] text-white text-sm font-semibold hover:bg-[#57121C] transition-colors cursor-pointer"
                  >
                    Регистрация
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                              */
/* ------------------------------------------------------------------ */

function Hero({ onStart, user }: { onStart: () => void; user: { email: string } | null }) {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full bg-[#7A1E2B]/8 blur-3xl" />
        <div className="absolute top-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-[#B98A2B]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[26rem] h-[26rem] rounded-full bg-[#2C5F58]/8 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-24 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Left: copy */}
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7D9C5] shadow-xs text-xs font-semibold text-[#57121C] mb-7">
              <Star className="w-3.5 h-3.5 text-[#B98A2B] fill-[#B98A2B]" />
              28 уроков · уровни A0–B1 · для начинающих
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#231816] tracking-tight leading-[1.05]">
              Заговорите по-венгерски{' '}
              <span className="text-[#7A1E2B]">с нуля</span> —{' '}
              <span className="relative inline-block">
                <span className="relative z-10">уже через месяц</span>
                <span aria-hidden className="absolute left-0 right-0 bottom-1 h-3 bg-[#B98A2B]/30 -z-0 rounded-sm" />
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#6B5D52] leading-relaxed max-w-xl">
              Интерактивные уроки с живой озвучкой носителя, встроенными
              тренажёрами слов и умной системой повторения. Изучайте
              грамматику, слушайте произношение и закрепляйте слова — в своём
              темпе, на любом устройстве.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStart}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#7A1E2B] text-white text-base font-bold hover:bg-[#57121C] hover:scale-105 hover:shadow-xl hover:shadow-[#7A1E2B]/30 transition-all cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                {user ? 'Продолжить обучение' : 'Начать учиться'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#how"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-[#E7D9C5] bg-white text-[#231816] text-base font-semibold hover:border-[#7A1E2B]/40 hover:text-[#7A1E2B] hover:scale-105 transition-all cursor-pointer"
              >
                Как это работает
              </a>
            </div>

            {!user && (
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#8A7A68]">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#2C5F58]" /> Бесплатный пробный доступ
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#2C5F58]" /> Без карты
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#2C5F58]" /> Отмена в любой момент
                </span>
              </div>
            )}
          </Reveal>

          {/* Right: platform UI preview */}
          <Reveal delay={150}>
            <HeroMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="relative mx-auto max-w-lg lg:max-w-none">
      {/* soft glow behind the card */}
      <div aria-hidden className="absolute -inset-5 bg-gradient-to-tr from-[#7A1E2B]/10 via-[#B98A2B]/8 to-[#2C5F58]/10 blur-2xl rounded-[3rem]" />

      {/* Floating chips (absolute, animated on inner wrapper to avoid transform conflicts) */}
      <div className="absolute -left-2 sm:-left-8 top-1/3 z-10">
        <div className="animate-float flex items-center gap-3 bg-white rounded-2xl shadow-xl shadow-[#231816]/10 border border-[#E7D9C5] px-4 py-3">
          <span className="w-9 h-9 rounded-xl bg-[#2C5F58]/10 text-[#2C5F58] flex items-center justify-center">
            <Headphones className="w-4.5 h-4.5" />
          </span>
          <div>
            <div className="text-xs font-bold text-[#231816] leading-none">Озвучка носителя</div>
            <div className="text-[10px] text-[#8A7A68] mt-1">в каждом слайде</div>
          </div>
        </div>
      </div>

      <div className="absolute -right-2 sm:-right-6 bottom-16 z-10">
        <div className="animate-float [animation-delay:1.5s] flex items-center gap-3 bg-white rounded-2xl shadow-xl shadow-[#231816]/10 border border-[#E7D9C5] px-4 py-3">
          <span className="w-9 h-9 rounded-xl bg-[#7A1E2B]/10 text-[#7A1E2B] flex items-center justify-center">
            <BookOpen className="w-4.5 h-4.5" />
          </span>
          <div>
            <div className="text-xs font-bold text-[#231816] leading-none">28 уроков</div>
            <div className="text-[10px] text-[#8A7A68] mt-1">780+ слов и фраз</div>
          </div>
        </div>
      </div>

      {/* Main card */}
      <div className="relative bg-white rounded-3xl border border-[#E7D9C5] shadow-2xl shadow-[#231816]/10 overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-5 py-3.5 border-b border-[#F0E6D6]">
          <span className="w-3 h-3 rounded-full bg-[#E4574F]" />
          <span className="w-3 h-3 rounded-full bg-[#E8B04B]" />
          <span className="w-3 h-3 rounded-full bg-[#4C9E6F]" />
          <span className="ml-3 text-[11px] font-medium text-[#B5A68F]">
            app.magyarkurzus.ru · урок 2
          </span>
        </div>

        {/* Slide header */}
        <div className="px-5 pt-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2 h-2 rounded-full bg-[#7A1E2B] shrink-0" />
            <span className="text-[11px] font-mono font-bold text-[#57121C] truncate">
              УРОК 2 · ГАРМОНИЯ ГЛАСНЫХ
            </span>
          </div>
          <div className="flex gap-1 shrink-0">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full ${
                  i < 3 ? 'w-4 bg-[#7A1E2B]' : 'w-1.5 bg-[#E7D9C5]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Word card */}
        <div className="mx-5 mt-4 rounded-2xl border border-[#E7D9C5] bg-[#FBF7EF] p-5">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8A7A68]">
                Венгерское слово
              </div>
              <div className="text-2xl md:text-[1.7rem] font-black text-[#231816] tracking-tight mt-1">
                Magyarország
              </div>
              <div className="text-sm text-[#6B5D52] mt-1">[мадьарорса̄г] — Венгрия</div>
            </div>
            <button
              aria-label="Прослушать слово"
              className="w-12 h-12 shrink-0 rounded-full bg-[#7A1E2B] text-white flex items-center justify-center shadow-lg shadow-[#7A1E2B]/30 hover:scale-110 transition-transform cursor-pointer"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
          </div>

          {/* Audio wave */}
          <div className="flex items-end gap-1 h-8 mt-5" aria-hidden>
            {[10, 18, 26, 14, 30, 22, 34, 16, 24, 12, 28, 18].map((h, i) => (
              <span
                key={i}
                className={`w-1 rounded-full bg-[#2C5F58] ${
                  i % 3 === 0 ? 'opacity-40' : ''
                }`}
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>

        {/* Quiz snippet */}
        <div className="mx-5 mt-4 rounded-2xl border border-[#E7D9C5] p-4 mb-5">
          <div className="text-xs font-bold text-[#57121C] mb-3">
            Мини-тест · выберите перевод «Szia»
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Привет', correct: true },
              { label: 'Спасибо', correct: false },
              { label: 'До встречи', correct: false },
            ].map((opt) => (
              <span
                key={opt.label}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border cursor-default transition-colors ${
                  opt.correct
                    ? 'bg-[#2C5F58]/10 border-[#2C5F58]/40 text-[#1B4540]'
                    : 'bg-white border-[#E7D9C5] text-[#8A7A68]'
                }`}
              >
                {opt.label}
                {opt.correct && <Check className="inline w-3.5 h-3.5 ml-1 -mt-0.5" />}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Features                                                          */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    icon: BookOpen,
    title: 'Интерактивные уроки',
    text: 'Теория, живые примеры и тренажёры собраны в слайды: читайте, слушайте и сразу проверяйте себя — без переключений между приложениями.',
    accent: 'text-[#7A1E2B] bg-[#7A1E2B]/10 border-[#7A1E2B]/15',
  },
  {
    icon: Headphones,
    title: 'Живая озвучка носителя',
    text: 'Каждое слово звучит правильно. Включайте синтез речи, подключайте собственные записи диктора и настраивайте голос под себя.',
    accent: 'text-[#2C5F58] bg-[#2C5F58]/10 border-[#2C5F58]/15',
  },
  {
    icon: Brain,
    title: 'Умное повторение',
    text: 'Алгоритм интервальных повторений подсказывает, какие слова пора освежить, — новая лексика закрепляется надолго, а не забывается.',
    accent: 'text-[#B98A2B] bg-[#B98A2B]/10 border-[#B98A2B]/15',
  },
  {
    icon: Cloud,
    title: 'Прогресс в облаке',
    text: 'Создайте аккаунт — прохождение уроков и карточки повторения сохраняются на сервере. Продолжайте с любого устройства.',
    accent: 'text-[#4C6E91] bg-[#4C6E91]/10 border-[#4C6E91]/15',
  },
];

function Features() {
  return (
    <section id="features" className="scroll-mt-24 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Возможности"
            title={
              <>
                Всё, что нужно, чтобы{' '}
                <span className="text-[#7A1E2B]">заговорить</span>
              </>
            }
            subtitle="Платформа построена вокруг практики: минимум скучной теории, максимум озвучки, заданий и повторения."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURES.map((feature, idx) => (
            <Reveal key={feature.title} delay={idx * 100}>
              <div className="group h-full p-7 rounded-3xl bg-[#FBF7EF] border border-[#E7D9C5] hover:bg-white hover:border-[#7A1E2B]/25 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#231816]/8 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${feature.accent}`}
                >
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#231816] tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#6B5D52] leading-relaxed">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  How it works                                                      */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    icon: UserPlus,
    step: 'Шаг 1',
    title: 'Создайте аккаунт',
    text: 'Регистрация занимает 30 секунд — нужен только e-mail и пароль. Сразу получаете бесплатный пробный доступ.',
  },
  {
    icon: MousePointerClick,
    step: 'Шаг 2',
    title: 'Выберите урок',
    text: 'Начните с алфавита и базовых фраз или сразу переходите к интересующей теме — 28 уроков от A0 до B1.',
  },
  {
    icon: Sparkles,
    step: 'Шаг 3',
    title: 'Слушайте и повторяйте',
    text: 'Проходите слайды, повторяйте слова с озвучкой и проходите тесты. Система напомнит, что пора повторить.',
  },
];

function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Как это работает"
            title={
              <>
                Три шага до первого{' '}
                <span className="text-[#2C5F58]">разговора</span>
              </>
            }
            subtitle="Никакой сложной настройки. От первого визита до интерактивного урока — меньше минуты."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {STEPS.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 120}>
              <div className="relative h-full p-7 md:p-8 rounded-3xl bg-white border border-[#E7D9C5] hover:border-[#7A1E2B]/30 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#231816]/8 transition-all duration-300">
                {/* Step number */}
                <div className="absolute top-6 right-6 font-black text-5xl text-[#E7D9C5] select-none">
                  {idx + 1}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#7A1E2B]/10 text-[#7A1E2B] flex items-center justify-center mb-6">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#B98A2B] mb-2">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-[#231816] tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm text-[#6B5D52] leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sneak peek — real lesson previews from LESSONS_META               */
/* ------------------------------------------------------------------ */

const LEVEL_BADGE: Record<string, string> = {
  A0: 'bg-[#7A1E2B] text-white',
  A1: 'bg-[#2C5F58] text-white',
  A2: 'bg-[#B98A2B] text-white',
  B1: 'bg-[#4C6E91] text-white',
};

function SneakPeek({ onStart }: { onStart: () => void }) {
  const previewLessons = LESSONS_META.slice(0, 6);

  return (
    <section id="preview" className="scroll-mt-24 py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Программа курса"
            title={
              <>
                Загляните внутрь{' '}
                <span className="text-[#7A1E2B]">программы</span>
              </>
            }
            subtitle="Полная система из 28 уроков: от звуков и алфавита до разговорного уровня B1. Вот с чего вы начнёте."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {previewLessons.map((lesson, idx) => (
            <Reveal key={lesson.id} delay={idx * 80}>
              <div className="group h-full flex flex-col p-6 rounded-3xl bg-[#FBF7EF] border border-[#E7D9C5] hover:bg-white hover:border-[#7A1E2B]/25 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#231816]/8 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${LEVEL_BADGE[lesson.level]}`}
                  >
                    Уровень {lesson.level}
                  </span>
                  <span className="text-[11px] font-semibold text-[#8A7A68]">
                    {lesson.slidesCount} слайдов
                  </span>
                </div>
                <h3 className="text-base font-bold text-[#231816] leading-snug group-hover:text-[#7A1E2B] transition-colors">
                  Урок {lesson.number}. {lesson.title.replace(/^Урок \d+ · /, '')}
                </h3>
                <p className="mt-2 text-sm text-[#6B5D52] leading-relaxed flex-1">
                  {lesson.subtitle}
                </p>
                <div className="mt-5 pt-4 border-t border-[#E7D9C5]/70 flex items-center gap-1.5 text-sm font-semibold text-[#7A1E2B]">
                  <span>Открыть урок</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <button
              onClick={onStart}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#7A1E2B] text-white text-base font-bold hover:bg-[#57121C] hover:scale-105 hover:shadow-xl hover:shadow-[#7A1E2B]/30 transition-all cursor-pointer"
            >
              Открыть все 28 уроков
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="mt-4 text-sm text-[#8A7A68]">
              Доступ к урокам — после бесплатной регистрации
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom CTA                                                        */
/* ------------------------------------------------------------------ */

function BottomCta({ user, onSignup, onLogin }: { user: { email: string } | null; onSignup: () => void; onLogin: () => void }) {
  return (
    <section id="cta" className="scroll-mt-24 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#57121C] via-[#7A1E2B] to-[#57121C] text-white px-6 py-16 md:px-16 md:py-20 text-center shadow-2xl shadow-[#7A1E2B]/30">
            {/* decorative blobs */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/8 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#B98A2B]/15 blur-3xl" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest mb-6">
                <GraduationCap className="w-4 h-4" />
                Начните бесплатно
              </div>

              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-2xl mx-auto">
                {user
                  ? 'Продолжите обучение прямо сейчас'
                  : 'Готовы заговорить по-венгерски?'}
              </h2>

              <p className="mt-5 text-base md:text-lg text-[#EAD0C3] max-w-xl mx-auto leading-relaxed">
                {user
                  ? 'Ваш прогресс сохранён. Вернитесь к урокам и продолжайте там, где остановились.'
                  : 'Создайте аккаунт и получите бесплатный доступ ко всем урокам. Первые слова — уже сегодня.'}
              </p>

              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                {user ? (
                  <button
                    onClick={onSignup}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#B98A2B] text-white text-base font-bold hover:bg-[#a37923] hover:scale-105 transition-all cursor-pointer"
                  >
                    Продолжить обучение
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <>
                    <button
                      onClick={onSignup}
                      className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white text-[#57121C] text-base font-bold hover:bg-[#F6EFE4] hover:scale-105 transition-all cursor-pointer"
                    >
                      Создать аккаунт бесплатно
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={onLogin}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border border-white/25 bg-white/5 text-white text-base font-semibold hover:bg-white/15 hover:scale-105 transition-all cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      Уже есть аккаунт — войти
                    </button>
                  </>
                )}
              </div>

              {!user && (
                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#EAD0C3]/90">
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> 7 дней бесплатно
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> 28 уроков
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Озвучка носителя
                  </span>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                            */
/* ------------------------------------------------------------------ */

function Footer({ user }: { user: { email: string } | null }) {
  return (
    <footer className="border-t border-[#E7D9C5] bg-[#FBF7EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7A1E2B] to-[#57121C] text-white flex items-center justify-center shadow-md shadow-[#7A1E2B]/25">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span className="font-black text-[#231816] tracking-tight text-lg">
                Magyar<span className="text-[#7A1E2B]">Kurzus</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-[#6B5D52] leading-relaxed max-w-sm">
              Интерактивный курс венгерского языка для русскоязычных учащихся:
              фонетика, грамматика, живая озвучка и тренажёры в 28 уроках
              от A0 до B1.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#231816] mb-4">
              Навигация
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B5D52]">
              <li><a href="#features" className="hover:text-[#7A1E2B] transition-colors">Возможности</a></li>
              <li><a href="#how" className="hover:text-[#7A1E2B] transition-colors">Как это работает</a></li>
              <li><a href="#preview" className="hover:text-[#7A1E2B] transition-colors">Программа курса</a></li>
              <li>
                <a
                  href="/lessons"
                  className="hover:text-[#7A1E2B] transition-colors"
                  onClick={(e) => {
                    if (!user) {
                      e.preventDefault();
                      window.location.href = '/';
                    }
                  }}
                >
                  Уроки
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#231816] mb-4">
              Документы
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B5D52]">
              <li><a href="#terms" className="hover:text-[#7A1E2B] transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#privacy" className="hover:text-[#7A1E2B] transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#refunds" className="hover:text-[#7A1E2B] transition-colors">Возврат средств</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#E7D9C5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#8A7A68]">
            © {new Date().getFullYear()} MagyarKurzus. Все права защищены.
          </p>
          <p className="text-xs text-[#8A7A68]">
            Сделано с <span className="text-[#7A1E2B]">♥</span> для изучающих венгерский
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  Landing page                                                      */
/* ------------------------------------------------------------------ */

export default function LandingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<{ email: string } | null>(getCurrentUser());
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const redirectAfterAuthRef = useRef(false);

  // Keep the auth state in sync and close the modal after a successful sign-in.
  // The user stays on the landing page and can navigate to /lessons themselves.
  useEffect(() => {
    const unsubscribe = subscribeUserState((u) => {
      setUser(u);
      if (u && redirectAfterAuthRef.current) {
        redirectAfterAuthRef.current = false;
        setAuthModalOpen(false);
      }
    });
    return unsubscribe;
  }, []);

  // Handle URL intent: ?admin=1, ?auth=login|register, ?payment=success,
  // and router state.auth passed by the ProtectedRoute.
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const state = location.state as { auth?: 'login' | 'register' } | null;

    if (params.get('admin') === '1') {
      setAdminModalOpen(true);
    }

    const auth = params.get('auth') || state?.auth;
    if (auth === 'login' || auth === 'register') {
      redirectAfterAuthRef.current = true;
      setAuthMode(auth);
      setAuthModalOpen(true);
    } else if (params.get('payment') === 'success') {
      setAuthModalOpen(true);
    }

    // Clear the URL intent so refresh / back button behave predictably.
    if (params.size > 0 || state?.auth) {
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  // Page title
  useEffect(() => {
    document.title = 'MagyarKurzus — венгерский язык с нуля';
  }, []);

  const openAuth = (mode: 'login' | 'register') => {
    if (getCurrentUser()) {
      navigate('/lessons');
      return;
    }
    redirectAfterAuthRef.current = true;
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleStart = () => {
    if (getCurrentUser()) {
      navigate('/lessons');
      return;
    }
    openAuth('register');
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#2A2320] font-sans scroll-smooth antialiased selection:bg-[#7A1E2B] selection:text-white">
      <LandingHeader
        user={user}
        onLogin={() => openAuth('login')}
        onSignup={() => openAuth('register')}
        onStart={handleStart}
      />

      <main>
        <Hero onStart={handleStart} user={user} />
        <Features />
        <HowItWorks />
        <SneakPeek onStart={handleStart} />
        <BottomCta
          user={user}
          onSignup={() => openAuth('register')}
          onLogin={() => openAuth('login')}
        />
      </main>

      <Footer user={user} />

      {/* Auth + admin modals (reuse existing components) */}
      <UserAuthModal
        isOpen={authModalOpen}
        onClose={() => {
          redirectAfterAuthRef.current = false;
          setAuthModalOpen(false);
        }}
        initialMode={authMode}
      />
      <AdminLoginModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        onSuccess={() => navigate('/admin')}
      />
    </div>
  );
}
