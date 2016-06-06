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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx'); // Load all features
var router_1 = require('@angular/router');
/**
 * Page Components
 * */
var dashboard_component_1 = require("../dashboard/dashboard.component");
var kshare_component_1 = require("../kshare/kshare.component");
/**
 * Services
 **/
var knowledge_service_1 = require("../dashboard/services/knowledge-service");
var offers_service_1 = require("../dashboard/services/offers-service");
var requests_service_1 = require("../dashboard/services/requests-service");
var users_services_1 = require("../dashboard/services/users-services");
var auth_services_1 = require("../dashboard/services/auth-services");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.pageTitle = 'Knowledge Sharing Network';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kshare-app',
            templateUrl: 'client/dev/app/app.html',
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [
                auth_services_1.AuthService,
                users_services_1.UserService,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                requests_service_1.RequestService,
                offers_service_1.OfferService,
                knowledge_service_1.KnowledgeService
            ]
        }),
        router_1.Routes([
            { path: '/', component: kshare_component_1.KshareComponent },
            { path: '/kshare', component: kshare_component_1.KshareComponent },
            { path: '/admin', component: dashboard_component_1.DashboardComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
