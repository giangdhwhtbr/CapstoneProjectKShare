var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//components
var notification_1 = require('../shared/notification');
var FriendListComponent = (function () {
    function FriendListComponent(router, route, _userService, _knowledgeService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._knowledgeService = _knowledgeService;
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
        this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
        });
    }
    FriendListComponent.prototype.ngOnInit = function () {
        console.log(this.name);
        this.pendingRequests = [];
        this.getFriendList();
    };
    //get friend list: pending and accepted
    FriendListComponent.prototype.getFriendList = function () {
        var _this = this;
        this._userService
            .getFriendList(this.name)
            .subscribe(function (friendlist) {
            _this.friendships = friendlist;
            //check sent request
            for (var i = 0; i < _this.friendships.length; i++) {
                if (_this.friendships[i].user2 === _this.name && _this.friendships[i].status === "pending") {
                    _this.pendingRequests.push(_this.friendships[i]);
                }
            }
        });
    };
    FriendListComponent = __decorate([
        core_1.Component({
            selector: 'request-record',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/friend-list.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                notification_1.PushNotificationComponent
            ]
        })
    ], FriendListComponent);
    return FriendListComponent;
})();
exports.FriendListComponent = FriendListComponent;
//# sourceMappingURL=friend-list.js.map