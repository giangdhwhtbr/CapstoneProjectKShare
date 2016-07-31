var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
        core_1.Injectable()
    ], NotificationService);
    return NotificationService;
})();
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.js.map