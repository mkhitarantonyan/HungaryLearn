import { useMemo, useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  LogOut,
  Menu,
  ShieldCheck,
  GraduationCap,
  AudioLines,
  Languages,
} from 'lucide-react';
import { getAdminAuthSnapshot, logoutAdmin, subscribeAdminAuthState } from '../utils/adminStore';
import { AdminDataProvider } from '../admin/AdminDataContext';

const NAV_ITEMS = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/users', label: 'Пользователи', icon: Users, end: false },
  { to: '/admin/lessons', label: 'Уроки', icon: BookOpen, end: false },
  { to: '/admin/content', label: 'Слова и переводы', icon: Languages, end: false },
  { to: '/admin/audio', label: 'Озвучка', icon: AudioLines, end: false },
  { to: '/admin/settings', label: 'Настройки', icon: Settings, end: false },
];

const PAGE_TITLES: Record<string, string> = {
  '/admin': 'Обзор',
  '/admin/users': 'Пользователи',
  '/admin/lessons': 'Уроки',
  '/admin/content': 'Слова и переводы',
  '/admin/audio': 'Озвучка',
  '/admin/settings': 'Настройки',
};

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const handleLogout = async () => {
    await logoutAdmin();
  };

  return (
    <div className="flex h-full flex-col">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 h-16 border-b border-gray-200">
        <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/25">
          <GraduationCap className="w-5 h-5" />
        </span>
        <div className="leading-none">
          <div className="font-bold text-gray-900 tracking-tight text-sm">
            Magyar<span className="text-indigo-600">o</span>
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mt-1">
            Admin Panel
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-5 space-y-1">
        <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Управление
        </div>
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-colors cursor-pointer ${
                isActive
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'text-gray-600 font-medium hover:bg-gray-100 hover:text-gray-900'
              }`
            }
          >
            <item.icon className="w-4.5 h-4.5" />
            {item.label}
          </NavLink>
        ))}

        <div className="pt-5 pb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Просмотр
        </div>
        <Link
          to="/lessons"
          onClick={onNavigate}
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm transition-colors cursor-pointer text-gray-600 font-medium hover:bg-indigo-50 hover:text-indigo-700"
          title="Просмотреть все уроки так же, как их видит оплативший ученик"
        >
          <BookOpen className="w-4.5 h-4.5" />
          Открыть уроки
        </Link>

        <div className="pt-5 pb-2 px-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Аккаунт
        </div>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
        >
          <LogOut className="w-4.5 h-4.5" />
          Выйти
        </button>
      </nav>

      {/* Admin badge */}
      <div className="m-3 p-3.5 rounded-xl bg-indigo-800 text-white">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          <span className="text-xs font-bold">Полные права</span>
        </div>
        <p className="mt-1 text-[11px] text-indigo-200 leading-snug">
          Доступно управление пользователями и уроками
        </p>
      </div>
    </div>
  );
}

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [adminEmail, setAdminEmail] = useState(getAdminAuthSnapshot().email);
  const location = useLocation();

  useEffect(() => subscribeAdminAuthState((snapshot) => setAdminEmail(snapshot.email)), []);

  const pageTitle = useMemo(
    () => PAGE_TITLES[location.pathname] ?? 'Администрирование',
    [location.pathname]
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans antialiased">
      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block lg:w-64 shrink-0 border-r border-gray-200 bg-white sticky top-0 h-screen">
          <SidebarContent />
        </aside>

        {/* Mobile sidebar */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-[0_18px_48px_rgba(29,45,65,0.18)]">
              <SidebarContent onNavigate={() => setSidebarOpen(false)} />
            </aside>
          </div>
        )}

        {/* Main column */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <header className="sticky top-0 z-40 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-4 md:px-8 gap-4">
            <div className="flex items-center gap-3 min-w-0">
              <button
                onClick={() => setSidebarOpen(true)}
                aria-label="Открыть меню"
                className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors cursor-pointer"
              >
                <Menu className="w-5 h-5" />
              </button>
              {/* Breadcrumb */}
              <div className="flex items-center gap-1.5 text-sm min-w-0">
                <span className="text-gray-400 hidden sm:inline">Администрирование</span>
                <span className="text-gray-300 hidden sm:inline">/</span>
                <span className="font-semibold text-gray-900 truncate">{pageTitle}</span>
              </div>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                    {(adminEmail?.[0] || 'A').toUpperCase()}
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold text-gray-900">Администратор</div>
                    <div className="max-w-48 truncate text-[11px] text-gray-500">{adminEmail || 'Firebase admin'}</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-[11px] font-semibold">
                  <ShieldCheck className="w-3 h-3" />
                  admin
                </span>
              </div>

              <button
                onClick={async () => {
                  await logoutAdmin();
                }}
                title="Выйти"
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-red-600 transition-colors cursor-pointer"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </header>

          {/* Content */}
          <main className="flex-1 p-4 md:p-8">
            <AdminDataProvider>
              <Outlet />
            </AdminDataProvider>
          </main>
        </div>
      </div>
    </div>
  );
}
