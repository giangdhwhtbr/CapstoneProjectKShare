'use strict';

/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
/*
 * Angular
 */
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var angular2_jwt_1 = require('/node_modules/angular2-jwt/angular2-jwt');
var browser_1 = require('angular2/platform/browser');
/*
 * Components
 */
var app_component_1 = require('./app/app.component');
browser_1.bootstrap(app_component_1.AppComponent, [common_1.FORM_PROVIDERS, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(angular2_jwt_1.AuthHttp, {
    useFactory: function useFactory(http) {
        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
            tokenName: 'jwt'
        }), http);
    },
    deps: [http_1.Http]
})]);
//# sourceMappingURL=index.js.map

//# sourceMappingURL=index-compiled.js.map