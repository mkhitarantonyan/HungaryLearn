import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { getAdminLessons, getAdminUsers, updateAdminUserPrivilege } from '../api/adminApi';
import type { AdminLesson, AdminUser } from './types';

interface AdminDataContextValue {
  users: AdminUser[];
  lessons: AdminLesson[];
  loading: boolean;
  error: string | null;
  pendingUserIds: ReadonlySet<string>;
  refresh: () => Promise<void>;
  setUserPrivilege: (id: string, privileged: boolean) => Promise<AdminUser>;
}

const AdminDataContext = createContext<AdminDataContextValue | null>(null);

export function AdminDataProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [lessons, setLessons] = useState<AdminLesson[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pendingUserIds, setPendingUserIds] = useState<ReadonlySet<string>>(new Set());
  const pendingUserIdsRef = useRef(new Set<string>());
  const requestVersion = useRef(0);

  const refresh = useCallback(async () => {
    const version = ++requestVersion.current;
    setLoading(true);
    setError(null);
    try {
      const [usersPage, serverLessons] = await Promise.all([getAdminUsers(), getAdminLessons()]);
      if (version !== requestVersion.current) return;
      setUsers(usersPage.users);
      setLessons(serverLessons);
    } catch (cause) {
      if (version !== requestVersion.current) return;
      setError(cause instanceof Error ? cause.message : 'Не удалось загрузить данные панели.');
    } finally {
      if (version === requestVersion.current) setLoading(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const setUserPrivilege = useCallback(async (id: string, privileged: boolean) => {
    if (pendingUserIdsRef.current.has(id)) {
      throw new Error('Изменение этого пользователя уже выполняется.');
    }
    pendingUserIdsRef.current.add(id);
    setPendingUserIds(new Set(pendingUserIdsRef.current));
    setError(null);
    try {
      const saved = await updateAdminUserPrivilege(id, privileged);
      setUsers((current) => current.map((user) => user.id === id ? saved : user));
      return saved;
    } catch (cause) {
      const message = cause instanceof Error ? cause.message : 'Не удалось сохранить изменение.';
      setError(message);
      throw cause;
    } finally {
      pendingUserIdsRef.current.delete(id);
      setPendingUserIds(new Set(pendingUserIdsRef.current));
    }
  }, []);

  const value = useMemo(() => ({
    users,
    lessons,
    loading,
    error,
    pendingUserIds,
    refresh,
    setUserPrivilege,
  }), [users, lessons, loading, error, pendingUserIds, refresh, setUserPrivilege]);

  return <AdminDataContext.Provider value={value}>{children}</AdminDataContext.Provider>;
}

export function useAdminData(): AdminDataContextValue {
  const context = useContext(AdminDataContext);
  if (!context) throw new Error('useAdminData must be used within <AdminDataProvider>');
  return context;
}
