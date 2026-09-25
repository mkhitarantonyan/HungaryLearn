import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import AppRoutes from './AppRoutes.tsx';
import { AppErrorBoundary } from './components/AppErrorBoundary.tsx';
import { I18nProvider } from './i18n';
import { LanguageOnboarding } from './components/LanguageOnboarding.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppErrorBoundary>
      <I18nProvider>
        <LanguageOnboarding />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </I18nProvider>
    </AppErrorBoundary>
  </StrictMode>,
);
