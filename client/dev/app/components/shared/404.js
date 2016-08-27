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
 * Created by Duc Duong on 8/19/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_1 = require('../../services/auth');
var notification_1 = require('../../services/notification');
var users_1 = require('../../services/users');
var chat_1 = require('../../services/chat');
var private_chat_1 = require('../../components/shared/private-chat');
var errorPageComponent = (function () {
    function errorPageComponent(_auth, router, _noti, _userService, _chatService, routerCh) {
        this._auth = _auth;
        this.router = router;
        this._noti = _noti;
        this._userService = _userService;
        this._chatService = _chatService;
        this.routerCh = routerCh;
    }
    errorPageComponent = __decorate([
        core_1.Component({
            selector: 'error',
            templateUrl: 'client/dev/app/components/shared/templates/404.html',
            styleUrls: ['client/dev/app/components/shared/styles/404.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, private_chat_1.PrivateChatComponent]
        }), 
        __metadata('design:paramtypes', [auth_1.AuthService, router_1.Router, notification_1.NotificationService, users_1.UserService, chat_1.ChatService, router_1.ActivatedRoute])
    ], errorPageComponent);
    return errorPageComponent;
}());
exports.errorPageComponent = errorPageComponent;
//# sourceMappingURL=404.js.map