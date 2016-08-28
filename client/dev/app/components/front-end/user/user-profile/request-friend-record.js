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
var RequestFriendRecordComponent = (function () {
    function RequestFriendRecordComponent(router, route, _userService, _noti) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._noti = _noti;
        this.sendDataToP = new core_1.EventEmitter();
        this.socket = io('https://localhost:80');
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
        this._userService.acceptFriendRequest(this.requestUser, this.name).subscribe(function () {
            console.log("accepted successful");
            Materialize.toast("Bạn đã là bạn bè với " + _this.requestUser, 4000);
            _this.isAdded = true;
            var title = _this.name + ' chấp nhận kết bạn';
            var link = '/user/' + _this.name;
            //call function using socket io to send notification
            _this._noti.alertNotification(title, _this.requestUser, link);
            //save notification to database
            _this._noti.createNotification(title, _this.requestUser, link).subscribe(function (notification) {
                _this.sendDataToP.emit("accept");
                // var data = [this.requestUser, this.name];
                // this.socket.emit('chatroom-friend', data);
                Materialize.toast('Đã là bạn bè', 4000);
                _this.router.navigateByUrl('/user/' + _this.requestUser);
            });
        });
    };
    RequestFriendRecordComponent.prototype.getUserInformation = function () {
        var _this = this;
        this._userService.getUserByUserName(this.requestUser).subscribe(function (userinfo) {
            _this.displayname = userinfo.displayName;
            _this.email = userinfo.email;
            _this.level = userinfo.level;
            _this.linkImg = userinfo.linkImg;
        }, function (error) {
            console.log(error);
        });
    };
    RequestFriendRecordComponent.prototype.deleteFriend = function () {
        var _this = this;
        var r = confirm("Bạn có muốn hủy kết bạn");
        if (r == true) {
            this._userService
                .deleteFriendRequest(this.requestUser, this.name)
                .subscribe(function () {
                console.log('delete successfull');
                _this.sendDataToP.emit("accept");
                _this.isFriend = false;
                Materialize.toast("bạn đã hủy gửi lời  mời kết bạn", 4000);
            });
        }
    };
    __decorate([
        core_1.Input('requestUser')
    ], RequestFriendRecordComponent.prototype, "requestUser");
    __decorate([
        core_1.Input('name')
    ], RequestFriendRecordComponent.prototype, "name");
    __decorate([
        core_1.Output()
    ], RequestFriendRecordComponent.prototype, "sendDataToP");
    RequestFriendRecordComponent = __decorate([
        core_1.Component({
            selector: 'request-friend-record',
            templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/request-friend-record.html',
            styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        })
    ], RequestFriendRecordComponent);
    return RequestFriendRecordComponent;
})();
exports.RequestFriendRecordComponent = RequestFriendRecordComponent;
//# sourceMappingURL=request-friend-record.js.map