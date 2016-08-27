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
        this._kspace_profile = '/api/kspace-profile/:name';
    }
    KSpaceService.prototype.getKspaceProfile = function (name) {
        return this._http.get(this._kspace_profile.replace(':name', name))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
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
    KSpaceService.prototype.finish = function (id) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .put(this._kspaceUrl.replace(':id', id), options)
            .map(function (r) { return r.json(); });
    };
    KSpaceService.prototype.addKSpace = function (kspace) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _kspace = JSON.stringify({
            lecturer: kspace.lecturer,
            learners: kspace.learners,
            requestId: kspace.requestId,
            requestTitle: kspace.requestTitle,
            offerId: kspace.offerId,
            tags: kspace.tags
        });
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
    KSpaceService.prototype.createPublicKspace = function (guest) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var api = '/api/public-kspace';
        return this._http.post(api, { name: guest }, options)
            .map(function (r) { return r.json(); });
    };
    KSpaceService.prototype.checkPublicKspace = function (id) {
        var api = '/api/public-kspace/:id';
        return this._http.get(api.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
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