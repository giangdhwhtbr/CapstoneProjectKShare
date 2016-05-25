"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by GiangDH on 5/8/16.
 */
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/Rx'); // Load all features
var router_1 = require('angular2/router');
/**
 * Components
 */
var users_1 = require('../dev/dashboard/components/users');
var users_services_1 = require('../dev/dashboard/services/users-services');
var requests_1 = require('../dev/dashboard/components/request/requests');
var requests_service_1 = require('../dev/dashboard/services/requests-service');
var offers_service_1 = require('../dev/dashboard/services/offers-service');
var request_update_1 = require('../dev/dashboard/components/request/request-update');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.pageTitle = 'Knowledge Sharing Network';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kshare-app',
            template: "\n    <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [
                users_services_1.UserService,
                requests_service_1.RequestService,
                offers_service_1.OfferService,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS
            ]
        }),
        router_1.RouteConfig([
            { path: '/admin/users', name: 'User Management', component: users_1.UsersComponent },
            { path: '/admin/requests', name: 'Request Management', component: requests_1.RequestComponent },
            { path: '/admin/requests/:id', name: 'Request Update', component: request_update_1.UpdateRequestComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
