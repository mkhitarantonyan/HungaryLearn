import React, { useEffect, useState, type ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import {
  getCurrentUser,
  checkUserSessionServer,
  subscribeUserState,
} from '../utils/userStore';
import {
  isAdminLoggedIn,
  checkAdminSessionServer,
  subscribeAdminState,
} from '../utils/adminStore';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Route guard for the lessons page.
 *
 * Access is granted when the user is already known (local profile) OR the
 * server confirms a valid session cookie. An active admin session also grants
 * access — the admin can preview all lessons exactly like a paid student,
 * without creating a separate student account. While the server check is
 * running a full-screen loader is shown. Anonymous visitors are redirected
 * back to the landing page with `state.auth = 'login'`, so the landing page
 * can open the login modal and then return them to `/lessons` after a
 * successful sign-in.
 */
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const location = useLocation();
  const [status, setStatus] = useState<'checking' | 'allowed' | 'denied'>(() =>
    getCurrentUser() || isAdminLoggedIn() ? 'allowed' : 'checking'
  );

  useEffect(() => {
    if (getCurrentUser() || isAdminLoggedIn()) {
      setStatus('allowed');
      return;
    }

    let cancelled = false;

    // Ask the server whether the session cookie is still valid.
    Promise.all([checkUserSessionServer(), checkAdminSessionServer()]).then(([user, isAdmin]) => {
      if (!cancelled) setStatus(user || isAdmin ? 'allowed' : 'denied');
    });

    // If the user signs in / logs in as admin while this guard is mounted
    // (e.g. from another tab), react to the state change immediately.
    const unsubscribeUser = subscribeUserState((user) => {
      if (user && !cancelled) setStatus('allowed');
    });
    const unsubscribeAdmin = subscribeAdminState((isAdmin) => {
      if (cancelled) return;
      if (isAdmin) {
        setStatus('allowed');
      } else if (!getCurrentUser()) {
        setStatus('denied');
      }
    });

    return () => {
      cancelled = true;
      unsubscribeUser();
      unsubscribeAdmin();
    };
  }, []);

  if (status === 'checking') {
    return (
      <div className="min-h-screen bg-[#F6EFE4] text-[#2A2320] flex items-center justify-center p-4 font-sans">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-[#7A1E2B] animate-spin" />
          <span className="font-mono text-sm font-semibold text-[#57121C]">
            Проверка доступа...
          </span>
        </div>
      </div>
    );
  }

  if (status === 'denied') {
    return (
      <Navigate
        to="/"
        replace
        state={{ auth: 'login', from: location.pathname }}
      />
    );
  }

  return <>{children}</>;
};
