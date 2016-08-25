var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 7/30/16.
 */
var core_1 = require('@angular/core');
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
        core_1.Injectable()
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
        core_1.Injectable()
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
        core_1.Injectable()
    ], Guest);
    return Guest;
})();
exports.Guest = Guest;
//# sourceMappingURL=auth.js.map