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
var request_friend_record_1 = require('./request-friend-record');
var friend_record_1 = require('./friend-record');
var user_profile_bar_1 = require('./user-profile-bar');
var FriendListComponent = (function () {
    function FriendListComponent(router, route, _userService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
        this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
        });
    }
    FriendListComponent.prototype.ngOnInit = function () {
        this.pendingRequests = [];
        this.acceptedRequest = [];
        this.friendNames = [];
        this.getFriendList();
        //this.getFriendName();
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
                if (_this.friendships[i].user2 === _this.name && _this.friendships[i].status === "accepted") {
                    _this.acceptedRequest.push(_this.friendships[i]);
                }
                if (_this.friendships[i].user1 === _this.name && _this.friendships[i].status === "accepted") {
                    _this.acceptedRequest.push(_this.friendships[i]);
                }
            }
            _this.getFriendName();
            console.log(_this.acceptedRequest);
        });
    };
    FriendListComponent.prototype.getFriendName = function () {
        for (var i = 0; i < this.acceptedRequest.length; i++) {
            if (this.acceptedRequest[i].user1 === this.name) {
                this.friendNames.push(this.acceptedRequest[i].user2);
            }
            else {
                this.friendNames.push(this.acceptedRequest[i].user1);
            }
        }
    };
    FriendListComponent = __decorate([
        core_1.Component({
            selector: 'request-record',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/friend-list.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                request_friend_record_1.RequestFriendRecordComponent,
                friend_record_1.FriendRecordComponent,
                user_profile_bar_1.UserProfileBarComponent
            ]
        })
    ], FriendListComponent);
    return FriendListComponent;
})();
exports.FriendListComponent = FriendListComponent;
//# sourceMappingURL=friend-list.js.map