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
var notification_1 = require('../../../services/notification');
var RequestFriendRecordComponent = (function () {
    function RequestFriendRecordComponent(router, route, _userService, _noti) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._noti = _noti;
        this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
        });
    }
    RequestFriendRecordComponent.prototype.ngOnInit = function () {
        this.isAdded = false;
        this.isFriend = true;
        this.getUserInformation();
    };
    RequestFriendRecordComponent.prototype.acceptRequest = function () {
        var _this = this;
        console.log(this.requestUser + ' ' + this.name);
        this._userService.acceptFriendRequest(this.requestUser, this.name).subscribe(function () {
            console.log("accepted successful");
            alert("Bạn đã là bạn bè với " + _this.requestUser);
            _this.isAdded = true;
            var title = _this.name + ' chấp nhận kết bạn';
            var link = '/user/' + _this.name;
            //call function using socket io to send notification
            _this._noti.alertNotification(title, _this.requestUser, link);
            //save notification to database
            _this._noti.createNotification(title, _this.requestUser, link).subscribe(function (notification) {
                console.log('create a notification to ' + _this.name);
            });
        });
    };
    RequestFriendRecordComponent.prototype.getUserInformation = function () {
        var _this = this;
        this._userService.getUserByUserName(this.requestUser).subscribe(function (userinfo) {
            _this.displayname = userinfo.displayName;
            _this.email = userinfo.email;
            _this.level = userinfo.level;
        }, function (error) {
            console.log(error);
        });
    };
    RequestFriendRecordComponent.prototype.deleteFriend = function () {
        var r = confirm("Bạn có muốn hủy kết bạn");
        if (r == true) {
            this._userService
                .deleteFriendRequest(this.requestUser, this.name)
                .subscribe(function () {
                console.log('delete successfull');
            });
            this.isFriend = false;
            alert("bạn đã hủy gửi lời  mời kết bạn");
        }
    };
    __decorate([
        core_1.Input('requestUser'), 
        __metadata('design:type', String)
    ], RequestFriendRecordComponent.prototype, "requestUser", void 0);
    __decorate([
        core_1.Input('name'), 
        __metadata('design:type', String)
    ], RequestFriendRecordComponent.prototype, "name", void 0);
    RequestFriendRecordComponent = __decorate([
        core_1.Component({
            selector: 'request-friend-record',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/request-friend-record.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, users_1.UserService, notification_1.NotificationService])
    ], RequestFriendRecordComponent);
    return RequestFriendRecordComponent;
})();
exports.RequestFriendRecordComponent = RequestFriendRecordComponent;
//# sourceMappingURL=request-friend-record.js.map