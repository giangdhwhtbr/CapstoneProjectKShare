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
var AdminAuthGuard = (function () {
    function AdminAuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        if (state.url.includes('admin')) {
            if (localStorage.getItem('userrole') && localStorage.getItem('userrole') === 'admin') {
                return true;
            }
            // Navigate to the login page
            this.router.navigate(['/login']);
        }
        if (state.url.includes('login') || state.url.includes('reg')) {
            if (!localStorage.getItem('username')) {
                return true;
            }
            // Navigate to the login page
            this.router.navigate(['/']);
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
//# sourceMappingURL=auth.js.map