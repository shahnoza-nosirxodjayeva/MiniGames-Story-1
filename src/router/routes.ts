import { homePage } from '../pages/home/home';
import type { Route } from '../types/router';

export const ROUTE_PATHS = {
  HOME: '/',
} as const;

export const routes: Route[] = [{ path: ROUTE_PATHS.HOME, ...homePage }];
