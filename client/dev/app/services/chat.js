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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ChatService = (function () {
    function ChatService(_http) {
        this._http = _http;
        this._messageUrl = '/api/messages/:id';
        this._chatRoomUrl = '/api/chat-rooms/:id';
    }
    //messages: Observable<Message[]>;
    ChatService.prototype.getAllMessagesFromChatRoom = function (id) {
        return this._http.get(this._messageUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ChatService.prototype.getChatRoomById = function (id) {
        return this._http.get(this._chatRoomUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ChatService.prototype.addMessage = function (chatRoomId, user, text) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _message = JSON.stringify({
            chatRoomId: chatRoomId,
            user: user,
            content: text
        });
        console.log(_message);
        return this._http
            .post(this._messageUrl.replace(':id', ''), _message, options)
            .map(function (r) { return r.json(); });
    };
    ChatService.prototype.addChatRoom = function (kshare) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _message = JSON.stringify({
            name: "ChatRoom",
            kSpaceId: kshare
        });
        return this._http
            .post(this._chatRoomUrl.replace(':id', ''), _message, options)
            .map(function (r) { return r.json(); });
    };
    ChatService.prototype.findChatRoomByKSpaceId = function (id) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _message = JSON.stringify({});
        return this._http
            .post(this._chatRoomUrl.replace(':id', id), _message, options)
            .map(function (r) { return r.json(); });
    };
    ChatService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ChatService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
//# sourceMappingURL=chat.js.map