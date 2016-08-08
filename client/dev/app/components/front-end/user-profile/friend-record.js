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
//services
var users_1 = require('../../../services/users');
var auth_1 = require('../../../services/auth');
var FriendRecordComponent = (function () {
    function FriendRecordComponent(router, route, _userService, _auth) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._auth = _auth;
        this.userToken = localStorage.getItem('username');
        this.isFriend = true;
        this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
        });
    }
    FriendRecordComponent.prototype.ngOnInit = function () {
        this.getUserInformation();
    };
    FriendRecordComponent.prototype.getUserInformation = function () {
        var _this = this;
        this._userService.getUserByUserName(this.friendName).subscribe(function (userinfo) {
            _this.displayname = userinfo.displayName;
            _this.email = userinfo.email;
            _this.level = userinfo.level;
        }, function (error) {
            console.log(error);
        });
    };
    FriendRecordComponent.prototype.deleteFriend = function () {
        var _this = this;
        var r = confirm("Bạn có muốn hủy kết bạn");
        if (r == true) {
            this._userService
                .deleteFriendRequest(this.userToken, this.friendName)
                .subscribe(function () {
                console.log('delete successfull');
            });
            this._userService
                .deleteFriendRequest(this.friendName, this.userToken)
                .subscribe(function () {
                _this.isFriend = false;
            });
            alert("bạn đã hủy gửi lời  mời kết bạn");
        }
    };
    __decorate([
        core_1.Input('friendName'), 
        __metadata('design:type', String)
    ], FriendRecordComponent.prototype, "friendName", void 0);
    FriendRecordComponent = __decorate([
        core_1.Component({
            selector: 'friend-record',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/friend-record.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, users_1.UserService, auth_1.AuthService])
    ], FriendRecordComponent);
    return FriendRecordComponent;
})();
exports.FriendRecordComponent = FriendRecordComponent;
//# sourceMappingURL=friend-record.js.map