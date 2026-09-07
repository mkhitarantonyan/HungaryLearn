import { useEffect, useState, type ReactNode } from 'react';
import {
  checkAdminSessionServer,
  getAdminAuthSnapshot,
  subscribeAdminAuthState,
  type AdminAuthSnapshot,
} from '../utils/adminStore';
import { AdminLoginScreen } from './AdminLoginScreen';
import { AppPreloader } from './AppPreloader';

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
    return <AppPreloader message="Проверка прав администратора…" />;
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
