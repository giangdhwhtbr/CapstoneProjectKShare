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
var core_1 = require('@angular/core');
var chat_1 = require('../../../services/chat');
var router_1 = require('@angular/router');
var auth_1 = require('../../../services/auth');
var ChatComponent = (function () {
    function ChatComponent(_chatService, router, rParam, _auth) {
        var _this = this;
        this._chatService = _chatService;
        this.router = router;
        this._auth = _auth;
        this.id = rParam.getParam('rid');
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
        setInterval(function () {
            _this._chatService.getAllMessagesFromChatRoom(_this.id).subscribe(function (messages) {
                _this.messages = messages;
            });
        }, 2000);
    }
    ChatComponent.prototype.sendMessage = function (text) {
        var _this = this;
        this._chatService
            .addMessage(this.id, this.userToken, text)
            .subscribe(function (r) {
            //refresh
            _this._chatService.getAllMessagesFromChatRoom(_this.id).subscribe(function (messages) {
                _this.messages = messages;
            });
        });
    };
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._chatService.getAllMessagesFromChatRoom(this.id).subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    __decorate([
        core_1.Input('chatRoomId'), 
        __metadata('design:type', String)
    ], ChatComponent.prototype, "chatRoomId", void 0);
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'chat',
            templateUrl: 'client/dev/app/components/front-end/kspace/templates/chat.html',
            styleUrls: ['client/dev/app/components/front-end/kspace/styles/chat.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [chat_1.ChatService, router_1.Router, (typeof (_a = typeof router_1.RouteSegment !== 'undefined' && router_1.RouteSegment) === 'function' && _a) || Object, auth_1.AuthService])
    ], ChatComponent);
    return ChatComponent;
    var _a;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.js.map