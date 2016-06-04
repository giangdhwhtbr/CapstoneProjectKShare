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
/**
 * Created by GiangDH on 5/18/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var sidebar_1 = require('../shared/sidebar');
var header_1 = require('../shared/header');
var footer_1 = require('../shared/footer');
var login_1 = require('../shared/login');
var register_1 = require('../shared/register');
var HomeComponent = (function () {
    function HomeComponent() {
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
    }
    HomeComponent.prototype.ngOinit = function () {
        console.log("what the fuck");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'client/dev/kshare/templates/home/home.html',
            styleUrls: ['client/dev/kshare/styles/home.css'],
            directives: [
                header_1.HeaderComponent,
                footer_1.FooterComponent,
                login_1.LoginComponent,
                register_1.RegisterComponent,
                sidebar_1.SideBarComponent,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
