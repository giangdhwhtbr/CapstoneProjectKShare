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
var HeaderComponent = (function () {
    function HeaderComponent(_auth, router, _noti, _userService) {
        this._auth = _auth;
        this.router = router;
        this._noti = _noti;
        this._userService = _userService;
        this.count = 2;
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.isLoggedIn().subscribe(function (res) {
            if (res.login) {
                _this.loginToken = true;
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
        var _this = this;
        this._auth.logout()
            .subscribe(function (res) {
            console.log(res);
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
        })
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map