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
var ReportService = (function () {
    function ReportService(_http) {
        this._http = _http;
        this._Url = '/api/reports/:id';
    }
    ReportService.prototype.addReport = function (report) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _report = JSON.stringify({
            title: report.title,
            content: report.content,
            user: report.user,
            link: report.link
        });
        return this._http
            .post(this._Url.replace(':id', ''), _report, options)
            .map(function (r) { return r.json(); });
    };
    ReportService.prototype.getAllReports = function () {
        return this._http
            .get(this._Url.replace(':id', ''))
            .map(function (r) { return r.json(); });
    };
    ReportService.prototype.deactivateReport = function (id) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _report = JSON.stringify({
            status: 'deactive'
        });
        return this._http
            .put(this._Url.replace(':id', id), _report, options);
    };
    ReportService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    ReportService = __decorate([
        core_1.Injectable()
    ], ReportService);
    return ReportService;
})();
exports.ReportService = ReportService;
//# sourceMappingURL=report.js.map