var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 5/18/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var private_chat_1 = require('../../components/shared/private-chat');
var HeaderComponent = (function () {
    function HeaderComponent(_auth, router, _noti, _userService, _chatService) {
        this._auth = _auth;
        this.router = router;
        this._noti = _noti;
        this._userService = _userService;
        this._chatService = _chatService;
        this.count = 2;
        this.num = 10;
        this.isNewMessage = false;
        this.isFrontend = false;
        this.isRoom = false;
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isFrontend = (window.location.pathname + "").substring(0, 6) != "/admin";
        this.isRoom = (window.location.pathname + "").substring(0, 5) == "/room";
        this.sub = this._auth.isLoggedIn().subscribe(function (res) {
            if (res.login) {
                _this.loginToken = true;
                _this.getNotificationByUser();
            }
            else {
                _this._auth.logoutClient();
                _this.loginToken = false;
            }
        }, function (error) {
            console.log('Server error');
        });
        this.link = '';
        this.socket = io('https://localhost:80');
        this.socket.on('receive notification', function (data) {
            if (localStorage.getItem('username') === data.data.user) {
                _this.getNotificationByUser();
            }
        });
        this.socket.on('new-message-notification', function (data) {
            if (data.receiver === _this.userToken) {
                _this.isNewMessage = true;
            }
        });
        this._chatService.getAllChatRoomOfUser(this.userToken).subscribe(function (chatRooms) {
            for (var j = 0; j < chatRooms.length; j++) {
                for (var i = 0; i < 2; i++) {
                    if (chatRooms[j].users[i].user === _this.userToken && chatRooms[j].users[i].newMessages > 0) {
                        _this.isNewMessage = true;
                    }
                }
            }
        });
        $('.dropdown-button').dropdown();
    };
    HeaderComponent.prototype.openChat = function () {
        $('#chatBoxK').openModal();
        var numItems = $('.text-message').length;
        $("#cntAllText").animate({ scrollTop: 200 * numItems });
        this.isNewMessage = false;
    };
    HeaderComponent.prototype.open = function () {
        $('.button-collapse').sideNav();
    };
    HeaderComponent.prototype.openKnw = function () {
        $('.btnOpenNavF').sideNav();
    };
    HeaderComponent.prototype.searchFriend = function (nameSearch) {
        this.router.navigateByUrl('/user/search/' + nameSearch);
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout()
            .subscribe(function (res) {
            if (res.success == true) {
                _this._auth.logoutClient();
                window.location.reload();
            }
        });
    };
    HeaderComponent.prototype.getNotificationByUser = function () {
        var _this = this;
        this.countUnReadNoti = 0;
        this._noti.getNotificationByUser(this.userToken, this.num).subscribe(function (notifications) {
            _this.notifications = notifications;
            for (var i = 0; i < notifications.length; i++) {
                if (notifications[i].status === "Chưa đọc") {
                    _this.countUnReadNoti++;
                }
            }
        });
    };
    HeaderComponent.prototype.changeStatusNotification = function () {
        if (this.countUnReadNoti > 0) {
            this.countUnReadNoti = 0;
            this._noti.changeStatusNotification(this.userToken).subscribe(function (notifications) {
                console.log('change status notification successful');
            });
        }
    };
    HeaderComponent.prototype.action = function (data) {
        if (this.userToken === data[0]) {
            this.isNewMessage = data[1];
        }
    };
    HeaderComponent.prototype.seeMore = function () {
        this.num = this.num + 10;
        this.getNotificationByUser();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'client/dev/app/components/shared/templates/header.html',
            styleUrls: ['client/dev/app/components/shared/styles/header.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, private_chat_1.PrivateChatComponent]
        })
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map