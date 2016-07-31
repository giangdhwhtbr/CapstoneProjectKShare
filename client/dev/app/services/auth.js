var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
    AuthService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json());
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
})();
exports.AuthService = AuthService;
//# sourceMappingURL=auth.js.map