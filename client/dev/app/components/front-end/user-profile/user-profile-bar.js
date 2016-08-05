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
var UserProfileBarComponent = (function () {
    function UserProfileBarComponent(router, route, _userService, _noti) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._noti = _noti;
        this.notification = {
            show: false,
            title: 'Demo notification!',
            body: 'ng2-notifications',
            icon: 'https://goo.gl/3eqeiE',
            action: function () {
                window.open('https://github.com/alexcastillo/ng2-notifications');
            }
        };
        this.formatDate = function (date) {
            if (date) {
                var newDate, day, month, year;
                year = date.substr(0, 4);
                month = date.substr(5, 2);
                day = date.substr(8, 2);
                return newDate = day + '/' + month + '/' + year;
            }
        };
        this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
        });
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    UserProfileBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.linkImg = '';
        this._userService.getUserByUserName(this.name).subscribe(function (user) {
            _this.userProfile = user;
            _this.linkImg = user.linkImg;
        }, function (error) {
            console.log(error);
        });
        //check if current user is staying in his/her profile page
        if (this.name === this.userToken) {
            this.checkUser = true;
        }
        this.getFriendList();
    };
    UserProfileBarComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        if (this.filesToUpload) {
            this._userService.makeFileRequest("/api/media", [], this.filesToUpload).then(function (r) {
                _this.linkImg = '/uploads/' + r[0].filename;
                _this._userService.updateAvartaLink(_this.userToken, _this.linkImg).subscribe(function (r) {
                    console.log("update link profile picture successful");
                });
            }, function (error) {
                console.error(error);
            });
        }
    };
    UserProfileBarComponent.prototype.addFriend = function () {
        var _this = this;
        if (this.isFriend === false) {
            this._userService
                .addFriend(this.userToken, this.name)
                .subscribe(function (r) {
                console.log('friendship was created by ' + _this.userToken + ' and ' + _this.name);
            });
            //create a notification to user who get accepted a friend request
            var title = 'Lời mời kết bạn từ ' + this.userToken;
            var body = 'Bạn đã nhận được lời mời kết bạn của ' + this.userToken;
            var link = '/user/' + this.name + '/friends';
            alert("đã gửi lời mời kết bạn thành công");
            //using socket io to send notification
            var socket = io('https://localhost:8081');
            socket.emit('send notification', {
                title: title,
                body: body,
                link: link,
                user: this.name
            });
            //save notification to database
            this._noti.createNotification(title, body, this.name, link).subscribe(function (notification) {
                console.log(notification);
            });
        }
        else {
            alert("Bạn đã gửi kết bạn rồi!");
        }
        this.getFriendList();
    };
    UserProfileBarComponent.prototype.deleteFriend = function () {
        var r = confirm("Bạn có muốn hủy kết bạn");
        if (r == true) {
            this._userService
                .deleteFriendRequest(this.userToken, this.name)
                .subscribe(function () {
                console.log('delete successfull');
            });
            this._userService
                .deleteFriendRequest(this.name, this.userToken)
                .subscribe(function () {
            });
            this.getFriendList();
            this.isFriend = false;
            alert("bạn đã hủy gửi lời  mời kết bạn");
        }
    };
    //get friend list: pending and accepted
    UserProfileBarComponent.prototype.getFriendList = function () {
        var _this = this;
        this.checkSentRequestUser = false;
        this._userService
            .getFriendList(this.userToken)
            .subscribe(function (friendlist) {
            _this.friendList = friendlist;
            _this.checkIsFriend();
            //check sent request
            for (var i = 0; i < _this.friendList.length; i++) {
                if (friendlist[i].user2 === _this.name && _this.friendList[i].status === "pending") {
                    _this.checkSentRequestUser = true;
                    break;
                }
            }
            for (var i = 0; i < _this.friendList.length; i++) {
                if (friendlist[i].user1 === _this.name && _this.friendList[i].status === "pending") {
                    _this.checkIsRecivedRequest = true;
                    break;
                }
            }
        });
    };
    UserProfileBarComponent.prototype.checkIsFriend = function () {
        this.isFriend = false;
        for (var i = 0; i < this.friendList.length; i++) {
            if ((this.name === this.friendList[i].user1 && this.friendList[i].status === "accepted") ||
                (this.name === this.friendList[i].user2 && this.friendList[i].status === "accepted")) {
                this.isFriend = true;
                break;
            }
        }
    };
    UserProfileBarComponent = __decorate([
        core_1.Component({
            selector: 'user-profile-bar',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/user-profile-bar.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, users_1.UserService, notification_1.NotificationService])
    ], UserProfileBarComponent);
    return UserProfileBarComponent;
})();
exports.UserProfileBarComponent = UserProfileBarComponent;
//# sourceMappingURL=user-profile-bar.js.map