import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import AdminGuard from './components/AdminGuard';
import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminLessons from './pages/admin/AdminLessons';
import AdminContent from './pages/admin/AdminContent';
import AdminAudio from './pages/admin/AdminAudio';
import AdminSettings from './pages/admin/AdminSettings';

// Resets scroll position on every route change.
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Protected lessons page (requires registration/authentication) */}
        <Route
          path="/lessons"
          element={
            <ProtectedRoute>
              <App />
            </ProtectedRoute>
          }
        />

        {/* Admin dashboard (requires admin session) */}
        <Route
          path="/admin"
          element={
            <AdminGuard>
              <AdminLayout />
            </AdminGuard>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="lessons" element={<AdminLessons />} />
          <Route path="content" element={<AdminContent />} />
          <Route path="audio" element={<AdminAudio />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Everything else falls back to the landing page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
