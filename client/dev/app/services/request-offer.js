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
var OfferService = (function () {
    function OfferService(_http) {
        this._http = _http;
        this._Url = '/api/offers/:id';
        this._OfferUrl = '/api/offers/:id/:num';
    }
    OfferService.prototype.updateOffer = function (id, newstatus) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _offer = JSON.stringify({
            status: newstatus
        });
        return this._http
            .put(this._Url.replace(':id', id), _offer, options)
            .map(function (r) { return r.json(); });
    };
    OfferService.prototype.addOffer = function (offer) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _offer = JSON.stringify({
            requestId: offer.requestId,
            message: offer.message,
            user: offer.user
        });
        //console.log(_offer);
        return this._http
            .post(this._Url.replace(':id', ''), _offer, options)
            .map(function (r) { return r.json(); });
    };
    OfferService.prototype.getOfferByRequestId = function (id, num) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            id: id,
            num: num
        });
        console.log(_data);
        return this._http.put(this._Url.replace(':id', ''), _data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    OfferService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    OfferService = __decorate([
        core_1.Injectable()
    ], OfferService);
    return OfferService;
})();
exports.OfferService = OfferService;
//# sourceMappingURL=request-offer.js.map