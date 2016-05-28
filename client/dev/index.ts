/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

/*
 * Angular
 */
import { provide } from 'angular2/core';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import {bootstrap} from 'angular2/platform/browser';
/*
 * Components
 */
import {AppComponent} from './app/app.component';
bootstrap(
  AppComponent
);
