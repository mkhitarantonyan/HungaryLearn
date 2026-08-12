import { useCallback, useEffect, useMemo, useState } from 'react';
import { Pencil, Trash2, Search, UserPlus, Mail, ShieldCheck, Loader2, RefreshCw, KeyRound, BadgeCheck } from 'lucide-react';
import {
  useAdminData,
} from '../../admin/AdminDataContext';
import type { AdminRole, AdminUser, AdminUserStatus } from '../../admin/mockData';
import {
  ConfirmDialog,
  Field,
  Modal,
  PageHeader,
  Pill,
  PrimaryButton,
  SecondaryButton,
  Select,
  TextInput,
} from '../../components/admin/AdminUi';

const ROLE_TONE: Record<AdminRole, 'gray' | 'indigo' | 'amber'> = {
  student: 'gray',
  admin: 'indigo',
  editor: 'amber',
};

const ROLE_LABEL: Record<AdminRole, string> = {
  student: 'Студент',
  admin: 'Администратор',
  editor: 'Редактор',
};

const STATUS_TONE: Record<AdminUserStatus, 'green' | 'red'> = {
  active: 'green',
  blocked: 'red',
};

const STATUS_LABEL: Record<AdminUserStatus, string> = {
  active: 'Активен',
  blocked: 'Заблокирован',
};

const EMAIL_RE = /^\S+@\S+\.\S+$/;

interface UserFormValues {
  name: string;
  email: string;
  role: AdminRole;
  status: AdminUserStatus;
  subscription: AdminUser['subscription'];
}

function UserFormModal({
  initial,
  users,
  onClose,
  onSave,
}: {
  initial: AdminUser | null;
  users: AdminUser[];
  onClose: () => void;
  onSave: (values: UserFormValues) => void;
}) {
  const isEdit = initial !== null;
  const [name, setName] = useState(initial?.name ?? '');
  const [email, setEmail] = useState(initial?.email ?? '');
  const [role, setRole] = useState<AdminRole>(initial?.role ?? 'student');
  const [status, setStatus] = useState<AdminUserStatus>(initial?.status ?? 'active');
  const [subscription, setSubscription] = useState<AdminUser['subscription']>(
    initial?.subscription ?? 'none'
  );
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (name.trim().length < 2) {
      nextErrors.name = 'Имя должно содержать минимум 2 символа.';
    }
    if (!EMAIL_RE.test(email.trim())) {
      nextErrors.email = 'Введите корректный e-mail.';
    } else if (
      users.some(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.id !== initial?.id
      )
    ) {
      nextErrors.email = 'Пользователь с таким e-mail уже существует.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    onSave({ name: name.trim(), email: email.trim(), role, status, subscription });
  };

  return (
    <Modal
      title={isEdit ? 'Редактировать пользователя' : 'Новый пользователь'}
      subtitle={isEdit ? `ID: ${initial!.id}` : 'Создание учётной записи вручную'}
      onClose={onClose}
      footer={
        <>
          <SecondaryButton onClick={onClose}>Отмена</SecondaryButton>
          <PrimaryButton type="submit" form="user-form">
            {isEdit ? 'Сохранить изменения' : 'Создать пользователя'}
          </PrimaryButton>
        </>
      }
    >
      <form id="user-form" onSubmit={handleSubmit} className="space-y-4">
        <Field label="Имя и фамилия" required error={errors.name}>
          <TextInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Например: Анна Ковач"
            autoFocus
          />
        </Field>

        <Field label="E-mail" required error={errors.email}>
          <TextInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="student@example.com"
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Роль" required>
            <Select value={role} onChange={(e) => setRole(e.target.value as AdminRole)}>
              <option value="student">Студент</option>
              <option value="editor">Редактор</option>
              <option value="admin">Администратор</option>
            </Select>
          </Field>

          <Field label="Статус" required>
            <Select value={status} onChange={(e) => setStatus(e.target.value as AdminUserStatus)}>
              <option value="active">Активен</option>
              <option value="blocked">Заблокирован</option>
            </Select>
          </Field>
        </div>

        <Field label="Подписка">
          <Select
            value={subscription}
            onChange={(e) => setSubscription(e.target.value as AdminUser['subscription'])}
          >
            <option value="none">Нет подписки</option>
            <option value="trial">Пробный период</option>
            <option value="active">Активная (premium)</option>
          </Select>
        </Field>

        <div className="rounded-xl bg-indigo-50 border border-indigo-100 p-3.5 text-xs text-indigo-900/80 leading-relaxed">
          Изменение роли на «Администратор» даёт пользователю полный доступ к панели
          управления /admin.
        </div>
      </form>
    </Modal>
  );
}

interface PlatformStudent {
  id: string;
  email: string;
  createdAt: string;
  subscriptionStatus: string;
  subscriptionEnd?: string;
  isPrivileged: boolean;
}

/**
 * Real student accounts registered through the site (db.json). Lets the admin
 * grant/revoke the full-access privilege (all lessons + progress saving
 * without payment) to a specific student account.
 */
function PlatformStudentsSection() {
  const [students, setStudents] = useState<PlatformStudent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);

  const loadStudents = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/users', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setStudents(Array.isArray(data.users) ? data.users : []);
      } else {
        setError('Не удалось загрузить студентов платформы.');
      }
    } catch {
      setError('Ошибка соединения с сервером.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadStudents();
  }, [loadStudents]);

  const togglePrivilege = async (student: PlatformStudent) => {
    setBusyId(student.id);
    setError('');
    try {
      const res = await fetch(
        `/api/admin/users/${encodeURIComponent(student.id)}/privilege`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ privileged: !student.isPrivileged }),
        }
      );
      if (res.ok) {
        const data = await res.json();
        if (data?.user) {
          setStudents((prev) => prev.map((s) => (s.id === student.id ? data.user : s)));
        }
      } else {
        const data = await res.json().catch(() => null);
        setError(data?.message || 'Не удалось изменить привилегию.');
      }
    } catch {
      setError('Ошибка соединения с сервером.');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Студенты платформы</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Реальные аккаунты, зарегистрированные через сайт. Привилегия открывает все уроки
            без оплаты и позволяет сохранять прогресс.
          </p>
        </div>
        <SecondaryButton onClick={() => void loadStudents()}>
          <RefreshCw className="w-4 h-4" />
          Обновить
        </SecondaryButton>
      </div>

      {error && (
        <div className="mb-3 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
          {error}
        </div>
      )}

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" />
            Загрузка списка студентов...
          </div>
        ) : students.length === 0 ? (
          <div className="p-8 text-center text-sm text-gray-500">
            Зарегистрированных студентов пока нет.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    E-mail
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Дата регистрации
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Статус доступа
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">
                    Привилегия
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-sm text-gray-700">
                        <Mail className="w-3.5 h-3.5 text-gray-400" />
                        {student.email}
                        {student.isPrivileged && (
                          <BadgeCheck className="w-4 h-4 text-indigo-500" />
                        )}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-sm text-gray-600 whitespace-nowrap">
                      {new Date(student.createdAt).toLocaleDateString('ru-RU')}
                    </td>
                    <td className="px-5 py-3.5">
                      <Pill tone={student.isPrivileged ? 'green' : 'gray'}>
                        {student.isPrivileged
                          ? 'Полный доступ'
                          : student.subscriptionStatus === 'active'
                            ? 'Премиум'
                            : student.subscriptionStatus === 'trial'
                              ? 'Триал'
                              : 'Без подписки'}
                      </Pill>
                    </td>
                    <td className="px-5 py-3.5 text-right">
                      <button
                        onClick={() => void togglePrivilege(student)}
                        disabled={busyId === student.id}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer disabled:opacity-50 ${
                          student.isPrivileged
                            ? 'bg-indigo-50 text-indigo-700 border border-indigo-200 hover:bg-indigo-100'
                            : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-indigo-50 hover:text-indigo-700'
                        }`}
                        title={
                          student.isPrivileged
                            ? 'Отозвать полный доступ без оплаты'
                            : 'Выдать полный доступ без оплаты'
                        }
                      >
                        {busyId === student.id ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <KeyRound className="w-3.5 h-3.5" />
                        )}
                        {student.isPrivileged ? 'Привилегия выдана' : 'Выдать привилегию'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminUsers() {
  const { users, addUser, updateUser, deleteUser } = useAdminData();
  const [search, setSearch] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [deletingUser, setDeletingUser] = useState<AdminUser | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) =>
      `${u.name} ${u.email}`.toLowerCase().includes(q)
    );
  }, [users, search]);

  const handleSave = (values: UserFormValues) => {
    if (editingUser) {
      updateUser(editingUser.id, values);
    } else {
      addUser(values);
    }
    setModalOpen(false);
    setEditingUser(null);
  };

  const handleEdit = (user: AdminUser) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleCreate = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  const handleDelete = () => {
    if (deletingUser) {
      deleteUser(deletingUser.id);
      setDeletingUser(null);
    }
  };

  const fmtDate = (iso: string) => new Date(iso).toLocaleDateString('ru-RU');

  return (
    <div>
      <PageHeader
        title="Пользователи"
        subtitle={`${users.length} учётных записей в системе`}
        action={
          <PrimaryButton onClick={handleCreate}>
            <UserPlus className="w-4 h-4" />
            Новый пользователь
          </PrimaryButton>
        }
      />

      {/* Real students registered through the site + privilege management */}
      <PlatformStudentsSection />

      {/* Search bar */}
      <div className="relative mb-5 max-w-md">
        <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по имени или e-mail..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 bg-white text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Имя
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  E-mail
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Роль
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Дата регистрации
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Статус
                </th>
                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-gray-500 text-right">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((user) => (
                <tr key={user.id} className="group hover:bg-gray-50/80 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center text-xs font-bold shrink-0">
                        {user.name.split(' ').map((p) => p[0]).slice(0, 2).join('')}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{user.name}</div>
                        <div className="text-[11px] text-gray-400">
                          {user.subscription === 'active'
                            ? 'Подписка: premium'
                            : user.subscription === 'trial'
                              ? 'Подписка: триал'
                              : 'Подписка: нет'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                      <Mail className="w-3.5 h-3.5 text-gray-400" />
                      {user.email}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <Pill tone={ROLE_TONE[user.role]}>
                      {user.role === 'admin' && <ShieldCheck className="w-3 h-3" />}
                      {ROLE_LABEL[user.role]}
                    </Pill>
                  </td>
                  <td className="px-5 py-3.5 text-sm text-gray-600 whitespace-nowrap">
                    {fmtDate(user.registeredAt)}
                  </td>
                  <td className="px-5 py-3.5">
                    <Pill tone={STATUS_TONE[user.status]}>{STATUS_LABEL[user.status]}</Pill>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => handleEdit(user)}
                        title="Редактировать"
                        className="p-2 rounded-lg text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-pointer"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDeletingUser(user)}
                        title="Удалить"
                        className="p-2 rounded-lg text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center">
                    <div className="text-sm text-gray-500 font-medium">
                      {search ? `Ничего не найдено по запросу «${search}»` : 'Пользователи не найдены'}
                    </div>
                    {search && (
                      <button
                        onClick={() => setSearch('')}
                        className="mt-2 text-xs font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer"
                      >
                        Сбросить поиск
                      </button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {modalOpen && (
        <UserFormModal
          initial={editingUser}
          users={users}
          onClose={() => {
            setModalOpen(false);
            setEditingUser(null);
          }}
          onSave={handleSave}
        />
      )}

      <ConfirmDialog
        open={deletingUser !== null}
        title="Удалить пользователя?"
        message={
          <>
            Пользователь <strong>{deletingUser?.name}</strong> ({deletingUser?.email}) будет
            безвозвратно удалён из системы. Его прогресс обучения будет потерян. Это действие
            нельзя отменить.
          </>
        }
        confirmLabel="Удалить пользователя"
        onConfirm={handleDelete}
        onCancel={() => setDeletingUser(null)}
      />
    </div>
  );
}
