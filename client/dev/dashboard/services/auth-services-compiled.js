"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by GiangDH on 5/19/16.
 */
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var AuthService = function () {
    function AuthService(_http) {
        this._http = _http;
        this._loginUrl = '/api/login';
        this.loggedIn = false;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _user = JSON.stringify({
            username: user.username,
            password: user.password,
            role: 'admin'
        });
        return this._http.post(this._loginUrl, _user, options).map(function (res) {
            return res.json();
        }).map(function (res) {
            if (res.success) {
                localStorage.setItem('auth_token', res.auth_token);
                _this.loggedIn = true;
            }
            return res.success;
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('auth_token');
    };
    AuthService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json());
    };
    AuthService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [http_1.Http])], AuthService);
    return AuthService;
}();
exports.AuthService = AuthService;
//# sourceMappingURL=auth-services.js.map

//# sourceMappingURL=auth-services-compiled.js.map