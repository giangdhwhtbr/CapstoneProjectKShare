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
var core_1 = require('angular2/core');
var auth_services_1 = require('../../services/auth-services');
var router_1 = require("angular2/router");
var NavbarComponent = (function () {
    function NavbarComponent(_auth, router) {
        this._auth = _auth;
        this.router = router;
    }
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this._auth.logout().subscribe(function (status) {
            if (status.login == false) {
                _this._auth.logoutClient();
            }
        });
        this.router.navigate(['Home']);
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: 'client/dev/dashboard/templates/shared/nav-bar.html',
            styleUrls: [
                'client/dev/dashboard/styles/styles.css',
                'client/dev/dashboard/styles/bootstrap.min.css'
            ]
        }), 
        __metadata('design:paramtypes', [auth_services_1.AuthService, router_1.Router])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
