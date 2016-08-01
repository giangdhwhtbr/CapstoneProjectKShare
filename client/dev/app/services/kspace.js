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
var KSpaceService = (function () {
    function KSpaceService(_http) {
        this._http = _http;
        this._kspaceUrl = '/api/kspace/:id';
    }
    KSpaceService.prototype.getAllKSpace = function () {
        return this._http.get(this._kspaceUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    KSpaceService.prototype.getKSpaceById = function (id) {
        return this._http.get(this._kspaceUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    KSpaceService.prototype.addKSpace = function (learner, lecturer, requestId, requestTitle, offerId) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _kspace = JSON.stringify({
            lecturer: lecturer,
            learner: learner,
            requestId: requestId,
            requestTitle: requestTitle,
            offerId: offerId
        });
        console.log(_kspace);
        return this._http
            .post(this._kspaceUrl.replace(':id', ''), _kspace, options)
            .map(function (r) { return r.json(); });
    };
    KSpaceService.prototype.createReview = function (data) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var api = '/api/kspace/:id/review';
        return this._http.post(api.replace(':id', data.id), data, options)
            .map(function (r) { return r.json(); });
    };
    KSpaceService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || 'server error');
    };
    KSpaceService = __decorate([
        core_1.Injectable()
    ], KSpaceService);
    return KSpaceService;
})();
exports.KSpaceService = KSpaceService;
//# sourceMappingURL=kspace.js.map