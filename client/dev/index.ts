
/*
 * Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { provide } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';


/*
 * components
 */
import {AppComponent} from './app/app.component';
bootstrap(
  AppComponent,
  APP_ROUTER_PROVIDERS
).catch (err => console.error(err));


// import {DemoPaper} from './demo/demo-paper';

// bootstrap(DemoPaper);
