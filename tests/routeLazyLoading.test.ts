import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const routesSource = readFileSync(new URL('../src/AppRoutes.tsx', import.meta.url), 'utf8');

test('top-level product surfaces are route-split with React lazy and Suspense', () => {
  assert.match(routesSource, /const App = lazy\(\(\) => import\('\.\/App'\)\)/);
  assert.match(routesSource, /const LandingPage = lazy\(\(\) => import\('\.\/pages\/LandingPage'\)\)/);
  assert.match(routesSource, /const AdminLayout = lazy\(\(\) => import\('\.\/layouts\/AdminLayout'\)\)/);
  assert.match(routesSource, /<Suspense fallback=\{<AppPreloader \/>\}>/);
  assert.doesNotMatch(routesSource, /import App from '\.\/App'/);
  assert.doesNotMatch(routesSource, /import LandingPage from '\.\/pages\/LandingPage'/);
  assert.doesNotMatch(routesSource, /import AdminDashboard from '\.\/pages\/admin\/AdminDashboard'/);
});
