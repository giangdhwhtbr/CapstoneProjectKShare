/**
 * Created by GiangDH on 7/9/16.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import { KShareRoutes, authProviders } from './kshare.routes.ts';
import { AdminRoutes } from './admin.routes.ts';

export const routes: RouterConfig = [
  ...KShareRoutes,
  ...AdminRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  authProviders
];
