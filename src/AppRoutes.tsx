import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AppPreloader } from './components/AppPreloader';

const App = lazy(() => import('./App'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const TermsPage = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.TermsPage })));
const PrivacyPage = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.PrivacyPage })));
const RefundPage = lazy(() => import('./pages/LegalPages').then((module) => ({ default: module.RefundPage })));
const AdminGuard = lazy(() => import('./components/AdminGuard'));
const AdminLayout = lazy(() => import('./layouts/AdminLayout'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminUsers = lazy(() => import('./pages/admin/AdminUsers'));
const AdminLessons = lazy(() => import('./pages/admin/AdminLessons'));
const AdminContent = lazy(() => import('./pages/admin/AdminContent'));
const AdminAudio = lazy(() => import('./pages/admin/AdminAudio'));
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'));
const AdminOrganizations = lazy(() => import('./pages/admin/AdminOrganizations'));
const AdminOrganizationDetail = lazy(() => import('./pages/admin/AdminOrganizationDetail'));

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
      <Suspense fallback={<AppPreloader />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/refund" element={<RefundPage />} />

          <Route path="/lessons" element={<App />} />

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
            <Route path="organizations" element={<AdminOrganizations />} />
            <Route path="organizations/:organizationId" element={<AdminOrganizationDetail />} />
            <Route path="lessons" element={<AdminLessons />} />
            <Route path="content" element={<AdminContent />} />
            <Route path="audio" element={<AdminAudio />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}
