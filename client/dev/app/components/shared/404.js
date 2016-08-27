var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 8/19/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
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
            selector: 'header',
            templateUrl: 'client/dev/app/components/shared/templates/404.html',
            styleUrls: ['client/dev/app/components/shared/styles/404.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, private_chat_1.PrivateChatComponent]
        })
    ], errorPageComponent);
    return errorPageComponent;
})();
exports.errorPageComponent = errorPageComponent;
//# sourceMappingURL=404.js.map