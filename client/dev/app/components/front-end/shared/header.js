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
    function HeaderComponent(_auth, router) {
        this._auth = _auth;
        this.router = router;
        this.loginToken = false;
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (this.userToken) {
            this.loginToken = true;
        }
    };
    HeaderComponent.prototype.logout = function () {
        this._auth.logout();
        this._auth.logoutClient();
        window.location.reload();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'client/dev/app/components/front-end/shared/templates/header.html',
            styleUrls: ['client/dev/app/components/front-end/shared/styles/header.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map