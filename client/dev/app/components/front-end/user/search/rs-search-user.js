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
var users_1 = require('../../../../services/users');
var ng2_pagination_1 = require('ng2-pagination');
var private_chat_1 = require('../../../shared/private-chat');
var userSearchRsComponent = (function () {
    function userSearchRsComponent(_userService, router, route) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this.users = [];
    }
    userSearchRsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
            _this._userService.searchUserByUsername(_this.name).subscribe(function (users) {
                _this.users = users;
            });
        });
    };
    userSearchRsComponent = __decorate([
        core_1.Component({
            selector: 'rs-user-search',
            templateUrl: 'client/dev/app/components/front-end/user/search/templates/search-rs.html',
            styleUrls: ['client/dev/app/components/front-end/user/search/styles/search-rs.css'],
            directives: [router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, private_chat_1.PrivateChatComponent],
            providers: [users_1.UserService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe]
        })
    ], userSearchRsComponent);
    return userSearchRsComponent;
})();
exports.userSearchRsComponent = userSearchRsComponent;
//# sourceMappingURL=rs-search-user.js.map