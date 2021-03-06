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
 * Page components
 * */
var admin_component_1 = require("./components/admin.component");
var kshare_component_1 = require("./components/kshare.component");
var header_1 = require("./components/shared/header");
/**
 * services
 **/
var knowledge_1 = require("./services/knowledge");
var request_offer_1 = require("./services/request-offer");
var requests_1 = require("./services/requests");
var users_1 = require("./services/users");
var auth_1 = require("./services/auth");
var kspace_1 = require("./services/kspace");
var notification_1 = require("./services/notification");
var report_1 = require("./services/report");
var article_1 = require("./services/article");
var chat_1 = require("./services/chat");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Knowledge Sharing Network';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'kshare-app',
            template: "\n  <header></header>\n  <router-outlet></router-outlet>\n  ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                header_1.HeaderComponent
            ],
            precompile: [kshare_component_1.KshareComponent, admin_component_1.AdminComponent],
            providers: [
                auth_1.AuthService,
                users_1.UserService,
                http_1.HTTP_PROVIDERS,
                requests_1.RequestService,
                request_offer_1.OfferService,
                knowledge_1.KnowledgeService,
                kspace_1.KSpaceService,
                notification_1.NotificationService,
                report_1.ReportService,
                article_1.ArticleService,
                chat_1.ChatService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map