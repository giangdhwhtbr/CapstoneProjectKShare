var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by GiangDH on 5/18/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_1 = require('../../../services/auth');
var notification_1 = require('../../../services/notification');
var users_1 = require('../../../services/users');
var private_chat_1 = require('../../../components/shared/private-chat');
var HeaderComponent = (function () {
    function HeaderComponent(_auth, router, _noti, _userService) {
        this._auth = _auth;
        this.router = router;
        this._noti = _noti;
        this._userService = _userService;
        this.count = 2;
        this.num = 10;
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.isLoggedIn().subscribe(function (res) {
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
                //audio of notification
                var audio = new Audio();
                audio.src = "https://localhost:80/client/dev/asserts/gets-in-the-way.mp3";
                audio.load();
                audio.play();
                _this.getNotificationByUser();
                //show noti
                _this.notiTitle = data.data.title;
                _this.link = data.data.link;
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 10000);
            }
        });
        $('.modal-trigger').leanModal({
            dismissible: true,
            opacity: .5,
            in_duration: 300,
            out_duration: 200,
            starting_top: '4%',
            ending_top: '10%',
            ready: function () { alert('Ready'); },
            complete: function () { alert('Closed'); } // Callback for Modal close
        });
    };
    HeaderComponent.prototype.openChat = function () {
        $('#chatboxWhole').openModal();
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
    HeaderComponent.prototype.showNotification = function (title) {
        this.notiTitle = title;
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 10000);
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
        this.countUnReadNoti = 0;
        this._noti.changeStatusNotification(this.userToken).subscribe(function (notifications) {
            console.log('change status notification successful');
        });
    };
    HeaderComponent.prototype.seeMore = function () {
        this.num = this.num + 10;
        this.getNotificationByUser();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'client/dev/app/components/front-end/shared/templates/header.html',
            styleUrls: ['client/dev/app/components/front-end/shared/styles/header.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, private_chat_1.PrivateChatComponent]
        }), 
        __metadata('design:paramtypes', [auth_1.AuthService, router_1.Router, notification_1.NotificationService, users_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map