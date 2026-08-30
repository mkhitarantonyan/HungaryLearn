import { useEffect, useState, type ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import {
  checkAdminSessionServer,
  getAdminAuthSnapshot,
  subscribeAdminAuthState,
  type AdminAuthSnapshot,
} from '../utils/adminStore';
import { AdminLoginScreen } from './AdminLoginScreen';

/**
 * Route guard for all /admin/* pages.
 *
 * The dashboard is not rendered until Firebase initialization, a fresh custom
 * claim check and the server-side token verification have all completed.
 */
export default function AdminGuard({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AdminAuthSnapshot>(getAdminAuthSnapshot());

  useEffect(() => {
    const unsubscribe = subscribeAdminAuthState(setAuth);
    void checkAdminSessionServer({ signOutNonAdmin: true });
    return unsubscribe;
  }, []);

  if (auth.status === 'initializing' || auth.status === 'checking') {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center p-4 font-sans">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
          <span className="text-sm font-semibold text-gray-600">
            Проверка прав администратора…
          </span>
        </div>
      </div>
    );
  }

  if (auth.status !== 'authorized') {
    return (
      <AdminLoginScreen
        initialError={auth.status === 'error' ? auth.message : undefined}
        onSuccess={() => undefined}
        onRetrySession={async () => { await checkAdminSessionServer({ signOutNonAdmin: true }); }}
      />
    );
  }

  return <>{children}</>;
}
