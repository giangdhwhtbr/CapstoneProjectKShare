var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ChatService = (function () {
    function ChatService(_http) {
        this._http = _http;
        this._chatRoomUrl = '/api/chat-rooms/:user';
    }
    ChatService.prototype.getAllChatRoomOfUser = function (username) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .get(this._chatRoomUrl.replace(':user', username), options)
            .map(function (r) { return r.json(); });
    };
    ChatService.prototype.createChatRoomAdmin = function (user1, user2) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            user1: user1,
            user2: user2
        });
        return this._http
            .post(this._chatRoomUrl.replace(':user', ''), _data, options)
            .map(function (r) { return r.json(); });
    };
    ChatService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ChatService = __decorate([
        core_1.Injectable()
    ], ChatService);
    return ChatService;
})();
exports.ChatService = ChatService;
//# sourceMappingURL=chat.js.map