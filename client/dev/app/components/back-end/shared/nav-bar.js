"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_1 = require('../../../services/auth');
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
            styleUrls: ['client/dev/asserts/css/backend-styles.css']
        }), 
        __metadata('design:paramtypes', [auth_1.AuthService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
