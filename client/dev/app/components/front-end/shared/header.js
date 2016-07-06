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
var HeaderComponent = (function () {
    function HeaderComponent(_auth, router) {
        this._auth = _auth;
        this.router = router;
        this.loginToken = false;
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('role');
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
        }), 
        __metadata('design:paramtypes', [auth_1.AuthService, router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map