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
 * Components
 */
var home_1 = require('../kshare/components/home/home');
var user_list_1 = require('../dashboard/components/users/user-list');
var user_info_1 = require('../dashboard/components/users/user-info');
var badword_1 = require('../dashboard/components/badword/badword');
var badword_update_1 = require('../dashboard/components/badword/badword-update');
var requests_list_1 = require('../dashboard/components/request/requests-list');
var request_update_1 = require('../dashboard/components/request/request-update');
var knowledge_1 = require('../dashboard/components/knowledge/knowledge');
var knowledge_update_1 = require('../dashboard/components/knowledge/knowledge-update');
// import { LoggedInRouterOutlet } from './LoginOutletRouter';
var request_list_cli_1 = require('../kshare/components/request/request-list-cli');
var request_detail_cli_1 = require('../kshare/components/request/request-detail-cli');
var request_update_cli_1 = require('../kshare/components/request/request-update-cli');
var request_search_cli_1 = require('../kshare/components/request/request-search-cli');
/**
 * Service
 */
var auth_services_1 = require('../dashboard/services/auth-services');
var users_services_1 = require('../dashboard/services/users-services');
var requests_service_1 = require('../dashboard/services/requests-service');
var knowledge_service_1 = require('../dashboard/services/knowledge-service');
var offers_service_1 = require('../dashboard/services/offers-service');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.pageTitle = 'Knowledge Sharing Network';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kshare-app',
            template: '<router-outlet></router-outlet>',
            directives: [router_1.ROUTER_DIRECTIVES],
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
            { path: '/', component: home_1.HomeComponent },
            { path: '/admin/users', component: user_list_1.UserListComponent },
            { path: '/admin/users/:id', component: user_info_1.UserInfoComponent },
            { path: '/admin/badwords', component: badword_1.BadwordComponent },
            { path: '/admin/badwords/:id', component: badword_update_1.UpdateBadwordComponent },
            { path: '/admin/requests', component: requests_list_1.RequestListComponent },
            { path: '/admin/requests/:id', component: request_update_1.UpdateRequestComponent },
            { path: '/admin/knowledges', component: knowledge_1.KnowledgeComponent },
            { path: '/admin/knowledges/:id', component: knowledge_update_1.UpdateKnowledgeComponent },
            { path: '/requests', component: request_list_cli_1.RequestListClientComponent },
            { path: '/requests/:id/', component: request_detail_cli_1.RequestDetailClientComponent },
            { path: '/requests/update/:id', component: request_update_cli_1.RequestUpdateClientComponent },
            { path: '/requests/search/:type/:id', component: request_search_cli_1.RequestSearchClientComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
