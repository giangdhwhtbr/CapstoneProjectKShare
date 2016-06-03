
/*
 * Angular
 */
import { provide } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { bootstrap }    from '@angular/platform-browser-dynamic';
/*
 * Components
 */
import {AppComponent} from './app/app.component';
bootstrap(
  AppComponent
);
