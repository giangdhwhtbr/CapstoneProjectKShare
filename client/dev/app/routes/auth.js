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
        core_1.Injectable()
    ], AdminAuthGuard);
    return AdminAuthGuard;
})();
exports.AdminAuthGuard = AdminAuthGuard;
//# sourceMappingURL=auth.js.map