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
//core
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//service
var users_1 = require('../../../services/users');
var auth_1 = require('../../../services/auth');
var UserProfileComponent = (function () {
    function UserProfileComponent(router, rParam, _userService, _auth) {
        this.router = router;
        this._userService = _userService;
        this._auth = _auth;
        this.name = rParam.getParam('name');
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
        this.buttonTitle = "Thêm bạn";
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserByUserName(this.name).subscribe(function (user) {
            _this.userProfile = user;
        }, function (error) {
            console.log(error);
        });
        //check if current user is staying in his/her profile page
        if (this.name === this.userToken) {
            this.checkUser = true;
        }
        this.getFriendList();
    };
    UserProfileComponent.prototype.addFriend = function () {
        var _this = this;
        this._userService
            .addFriend(this.userToken, this.name)
            .subscribe(function (r) {
            console.log('friendship was created by ' + _this.userToken + ' and ' + _this.name);
            _this.router.navigateByUrl('/user/' + _this.name + '/');
        });
    };
    UserProfileComponent.prototype.getFriendList = function () {
        var _this = this;
        this.checkSentRequestUser = false;
        this._userService
            .getFriendList(this.userToken)
            .subscribe(function (friendlist) {
            _this.friendList = friendlist;
            //check sent request
            for (var i = 0; i < _this.friendList.length; i++) {
                if (friendlist[i].user2 === _this.name && _this.friendList[i].status === "pending") {
                    console.log(_this.getFriendList[i]);
                    _this.checkSentRequestUser = true;
                    break;
                }
            }
        });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/user-profile.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.RouteSegment, users_1.UserService, auth_1.AuthService])
    ], UserProfileComponent);
    return UserProfileComponent;
}());
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.js.map