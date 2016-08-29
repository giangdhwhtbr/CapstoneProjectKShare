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
var FriendRecordComponent = (function () {
    function FriendRecordComponent(router, route, _userService, _auth) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._auth = _auth;
        this.sendDataToP = new core_1.EventEmitter();
        this.socket = io('https://localhost:80');
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
            _this.link = userinfo.linkImg;
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
            this._userService
                .deactivateChatRoom(this.friendName, this.userToken)
                .subscribe(function () {
            });
            this.sendDataToP.emit("accept");
        }
    };
    __decorate([
        core_1.Input('friendName')
    ], FriendRecordComponent.prototype, "friendName");
    __decorate([
        core_1.Output()
    ], FriendRecordComponent.prototype, "sendDataToP");
    FriendRecordComponent = __decorate([
        core_1.Component({
            selector: 'friend-record',
            templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/friend-record.html',
            styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        })
    ], FriendRecordComponent);
    return FriendRecordComponent;
})();
exports.FriendRecordComponent = FriendRecordComponent;
//# sourceMappingURL=friend-record.js.map