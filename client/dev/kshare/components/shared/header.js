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
var auth_services_1 = require('../../../dashboard/services/auth-services');
var HeaderComponent = (function () {
    function HeaderComponent(_auth) {
        this._auth = _auth;
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.isLoggedIn().subscribe(function (status) {
            console.log(status);
            if (status.login == false) {
                _this.loginToken = false;
            }
            else {
                _this.loginToken = true;
            }
        });
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout().subscribe(function (status) {
            if (status.login == false) {
                _this._auth.logoutClient();
            }
        });
        window.location.reload();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: 'client/dev/kshare/templates/shared/header.html',
            styleUrls: ['client/dev/kshare/styles/header.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [auth_services_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.js.map