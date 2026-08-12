import { useEffect, useState, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import {
  isAdminLoggedIn,
  subscribeAdminState,
  checkAdminSessionServer,
} from '../utils/adminStore';

/**
 * Route guard for all /admin/* pages.
 *
 * Access is granted only when the admin session is active (local state or a
 * confirmed server session cookie). Anonymous visitors are redirected to the
 * landing page with `?admin=1`, which opens the existing AdminLoginModal.
 */
export default function AdminGuard({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState<boolean>(isAdminLoggedIn());
  const [checking, setChecking] = useState<boolean>(!isAdminLoggedIn());

  useEffect(() => {
    // Keep in sync with the global admin store (login/logout anywhere).
    const unsubscribe = subscribeAdminState(setIsAdmin);

    if (!isAdminLoggedIn()) {
      let cancelled = false;
      checkAdminSessionServer().finally(() => {
        if (!cancelled) setChecking(false);
      });
      return () => {
        cancelled = true;
        unsubscribe();
      };
    }

    setChecking(false);
    return unsubscribe;
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-4 font-sans">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          <span className="text-sm font-semibold text-gray-600">
            Проверка прав администратора...
          </span>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/?admin=1" replace />;
  }

  return <>{children}</>;
}
