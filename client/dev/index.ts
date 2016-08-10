
/*
 * Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app/routes/app.routes.ts';
import { provide } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
import { Http, HTTP_PROVIDERS } from '@angular/http';


/*
 * components
 */
import {AppComponent} from './app/app.component';
bootstrap(
  AppComponent,
  [
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS
  ]
).catch (err => console.error(err));

