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
 * Created by GiangDH on 5/19/16.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this._regUrl = '/api/user/';
        this._loginUrl = '/api/login';
        this._logOutUrl = '/api/logout';
        this._checkLoginUrl = '/api/checkLogin/';
    }
    AuthService.prototype.login = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _user = JSON.stringify({
            username: user.username,
            password: user.password
        });
        var usertoken = user.username;
        return this._http.post(this._loginUrl, _user, options)
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.register = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _user = JSON.stringify({
            username: user.username,
            password: user.password,
            email: user.email
        });
        return this._http.post(this._regUrl, _user, options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        return this._http.get(this._logOutUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.logoutClient = function () {
        localStorage.removeItem('username');
        localStorage.removeItem('userrole');
    };
    AuthService.prototype.isLoggedIn = function () {
        return this._http.get(this._checkLoginUrl).map(function (res) { return res.json(); }).catch(this.handleError);
    };
    AuthService.prototype.dashboardFilter = function () {
        var roleToken = localStorage.getItem('userrole');
        if (!roleToken) {
            return false;
        }
        else if (roleToken !== 'admin') {
            return false;
        }
        return true;
    };
    AuthService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json());
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
