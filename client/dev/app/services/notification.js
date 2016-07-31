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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var NotificationService = (function () {
    function NotificationService(_http) {
        this._http = _http;
        this._getNotificationUrl = '/api/getNotification/:id';
        this._notificationUrl = '/api/notification';
        this._statusNotificationUrl = '/api/change-status-notification/:user';
    }
    NotificationService.prototype.getNotificationByUser = function (username) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _info = JSON.stringify({
            user: username
        });
        return this._http.post(this._getNotificationUrl.replace(':id', ''), _info, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    NotificationService.prototype.createNotification = function (title, body, user, link) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _info = JSON.stringify({
            title: title,
            user: user,
            body: body,
            link: link
        });
        return this._http.post(this._notificationUrl, _info, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    NotificationService.prototype.changeStatusNotification = function (user) {
        return this._http.get(this._statusNotificationUrl.replace(':user', user))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    NotificationService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error);
    };
    NotificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NotificationService);
    return NotificationService;
})();
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.js.map