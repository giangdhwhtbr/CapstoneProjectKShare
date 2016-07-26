var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var NavbarComponent = (function () {
    function NavbarComponent(_auth, router) {
        this._auth = _auth;
        this.router = router;
    }
    NavbarComponent.prototype.logout = function () {
        this._auth.logout();
        this._auth.logoutClient();
        this.router.navigateByUrl('/kshare');
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: 'client/dev/app/components/back-end/shared/templates/nav-bar.html',
            styleUrls: ['client/dev/asserts/css/admin.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        })
    ], NavbarComponent);
    return NavbarComponent;
})();
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=nav-bar.js.map