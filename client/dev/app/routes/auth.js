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
 * Created by GiangDH on 7/30/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var auth_1 = require('../services/auth');
var common_1 = require('@angular/common');
var AdminAuthGuard = (function () {
    function AdminAuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('redirectUrl')) {
            localStorage.removeItem('redirectUrl');
        }
        if (localStorage.getItem('userrole')) {
            if (state.url.includes('admin') && (localStorage.getItem('userrole') === 'admin' || localStorage.getItem('userrole') === 'mod')) {
                return true;
            }
            else {
                this.router.navigate(['/']);
            }
        }
        else {
            localStorage.setItem('redirectUrl', state.url);
            this.router.navigate(['/login']);
        }
        return false;
    };
    AdminAuthGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, auth_1.AuthService])
    ], AdminAuthGuard);
    return AdminAuthGuard;
})();
exports.AdminAuthGuard = AdminAuthGuard;
var isLogin = (function () {
    function isLogin(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    isLogin.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('redirectUrl')) {
            localStorage.removeItem('redirectUrl');
        }
        if (localStorage.getItem('username')) {
            return true;
        }
        localStorage.setItem('redirectUrl', state.url);
        this.router.navigate(['/login']);
        return false;
    };
    isLogin = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, auth_1.AuthService])
    ], isLogin);
    return isLogin;
})();
exports.isLogin = isLogin;
var Guest = (function () {
    function Guest(router, auth, _location) {
        this.router = router;
        this.auth = auth;
        this._location = _location;
    }
    Guest.prototype.canActivate = function (route, state) {
        if (!localStorage.getItem('username')) {
            return true;
        }
        this._location.back();
        return false;
    };
    Guest = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, auth_1.AuthService, common_1.Location])
    ], Guest);
    return Guest;
})();
exports.Guest = Guest;
var isKspaceUser = (function () {
    function isKspaceUser() {
    }
    isKspaceUser = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], isKspaceUser);
    return isKspaceUser;
})();
exports.isKspaceUser = isKspaceUser;
//# sourceMappingURL=auth.js.map