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
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//components
var notification_1 = require('../shared/notification');
//services
var users_1 = require('../../../services/users');
var auth_1 = require('../../../services/auth');
var knowledge_1 = require('../../../services/knowledge');
var FriendListComponent = (function () {
    function FriendListComponent(router, rParam, _userService, _auth, _knowledgeService) {
        this.router = router;
        this._userService = _userService;
        this._auth = _auth;
        this._knowledgeService = _knowledgeService;
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
        this.name = rParam.getParam('name');
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
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouteSegment, users_1.UserService, auth_1.AuthService, knowledge_1.KnowledgeService])
    ], FriendListComponent);
    return FriendListComponent;
}());
exports.FriendListComponent = FriendListComponent;
//# sourceMappingURL=friend-list.js.map