
/*
 * Angular
 */
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { FORM_PROVIDERS } from '@angular/common';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

/*
 * Components
 */
import {AppComponent} from './app/app.component';
bootstrap(
  AppComponent,
  [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          username: 'username',
          role: 'role'
        }), http);
      },
      deps: [Http]
    })
  ]
);

//import {DemoComponent} from './demo/demo';
//
//bootstrap(DemoComponent);
