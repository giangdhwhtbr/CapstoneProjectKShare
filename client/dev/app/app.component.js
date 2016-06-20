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
var auth_conf_1 = require('./auth.conf');
/**
 * Page components
 * */
var dashboard_component_1 = require("./dashboard.component");
var kshare_component_1 = require("./kshare.component");
/**
 * services
 **/
var knowledge_1 = require("./services/knowledge");
var request_offer_1 = require("./services/request-offer");
var requests_1 = require("./services/requests");
var users_1 = require("./services/users");
var auth_1 = require("./services/auth");
var kspace_1 = require("./services/kspace");
var chat_1 = require("./services/chat");
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.pageTitle = 'Knowledge Sharing Network';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kshare-app',
            template: '<router-outlet></router-outlet>',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                auth_conf_1.LoggedinRouterOutlet
            ],
            providers: [
                auth_1.AuthService,
                users_1.UserService,
                http_1.HTTP_PROVIDERS,
                router_1.ROUTER_PROVIDERS,
                requests_1.RequestService,
                request_offer_1.OfferService,
                knowledge_1.KnowledgeService,
                kspace_1.KSpaceService,
                chat_1.ChatService
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
