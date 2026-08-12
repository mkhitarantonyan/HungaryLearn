import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  initialLessons,
  initialUsers,
  type AdminLesson,
  type AdminUser,
} from './mockData';

/* ------------------------------------------------------------------ */
/*  Context simulating database CRUD operations via useState           */
/* ------------------------------------------------------------------ */

interface AdminDataContextValue {
  users: AdminUser[];
  lessons: AdminLesson[];
  addUser: (data: Omit<AdminUser, 'id' | 'registeredAt'>) => void;
  updateUser: (id: string, patch: Partial<AdminUser>) => void;
  deleteUser: (id: string) => void;
  addLesson: (data: Omit<AdminLesson, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateLesson: (id: string, patch: Partial<AdminLesson>) => void;
  deleteLesson: (id: string) => void;
}

const AdminDataContext = createContext<AdminDataContextValue | null>(null);

function makeId(prefix: string): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

export function AdminDataProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<AdminUser[]>(initialUsers);
  const [lessons, setLessons] = useState<AdminLesson[]>(initialLessons);

  const addUser = useCallback((data: Omit<AdminUser, 'id' | 'registeredAt'>) => {
    setUsers((prev) => [
      { ...data, id: makeId('u'), registeredAt: new Date().toISOString() },
      ...prev,
    ]);
  }, []);

  const updateUser = useCallback((id: string, patch: Partial<AdminUser>) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, ...patch } : u)));
  }, []);

  const deleteUser = useCallback((id: string) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }, []);

  const addLesson = useCallback((data: Omit<AdminLesson, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    setLessons((prev) => [
      { ...data, id: makeId('lesson'), createdAt: now, updatedAt: now },
      ...prev,
    ]);
  }, []);

  const updateLesson = useCallback((id: string, patch: Partial<AdminLesson>) => {
    setLessons((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...patch, updatedAt: new Date().toISOString() } : l))
    );
  }, []);

  const deleteLesson = useCallback((id: string) => {
    setLessons((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const value = useMemo(
    () => ({
      users,
      lessons,
      addUser,
      updateUser,
      deleteUser,
      addLesson,
      updateLesson,
      deleteLesson,
    }),
    [users, lessons, addUser, updateUser, deleteUser, addLesson, updateLesson, deleteLesson]
  );

  return <AdminDataContext.Provider value={value}>{children}</AdminDataContext.Provider>;
}

export function useAdminData(): AdminDataContextValue {
  const ctx = useContext(AdminDataContext);
  if (!ctx) {
    throw new Error('useAdminData must be used within <AdminDataProvider>');
  }
  return ctx;
}
