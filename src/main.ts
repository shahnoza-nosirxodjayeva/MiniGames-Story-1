import './styles/main.scss';
import { notFoundPage } from './pages/not-found/not-found';
import { Router } from './router/router';
import { routes } from './router/routes';

const outlet = document.querySelector<HTMLElement>('#app');

if (!outlet) {
  throw new Error('Root element #app was not found');
}

const router = new Router(outlet, routes, notFoundPage);
router.start();
