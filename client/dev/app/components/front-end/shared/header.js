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
var HeaderComponent = (function () {
    function HeaderComponent(_auth, router, _noti, _userService) {
        this._auth = _auth;
        this.router = router;
        this._noti = _noti;
        this._userService = _userService;
        this.count = 2;
        this.loginToken = localStorage.getItem('username') ? true : false;
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.link = '';
        this.socket = io('https://localhost:80');
        this.socket.on('receive notification', function (data) {
            if (localStorage.getItem('username') === data.data.user) {
                //audio of notification
                var audio = new Audio();
                audio.src = "https://localhost:80/client/dev/asserts/gets-in-the-way.mp3";
                audio.load();
                audio.play();
                _this.getNotificationByUser(data.data.user);
                //show noti
                _this.notiTitle = data.data.title;
                _this.link = data.data.link;
                var x = document.getElementById("snackbar");
                x.className = "show";
                setTimeout(function () { x.className = x.className.replace("show", ""); }, 10000);
            }
        });
        this.getNotificationByUser();
    };
    HeaderComponent.prototype.logout = function () {
        this._auth.logout();
        this._auth.logoutClient();
        window.location.reload();
    };
    HeaderComponent.prototype.showNotification = function (title) {
        this.notiTitle = title;
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 10000);
    };
    HeaderComponent.prototype.getNotificationByUser = function () {
        var _this = this;
        this.countUnReadNoti = 0;
        this._noti.getNotificationByUser(this.userToken).subscribe(function (notifications) {
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
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'client/dev/app/components/front-end/shared/templates/header.html',
            styleUrls: ['client/dev/app/components/front-end/shared/styles/header.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [auth_1.AuthService, router_1.Router, notification_1.NotificationService, users_1.UserService])
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map