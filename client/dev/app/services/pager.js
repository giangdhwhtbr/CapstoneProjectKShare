var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 8/10/2016.
 */
var core_1 = require('@angular/core');
var PagerService = (function () {
    function PagerService(_http) {
        this._http = _http;
        this._url = '/api/page/col/:start/:stt';
        this._urlTot = '/api/page/col/:stt';
    }
    PagerService.prototype.getAPage = function (col, start, stt) {
        return this._http.get(this._url.replace(':start', start).replace(':stt', stt).replace('col', col))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    PagerService.prototype.getTotalNum = function (col, stt) {
        return this._http.get(this._urlTot.replace(':stt', stt).replace('col', col))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    PagerService = __decorate([
        core_1.Injectable()
    ], PagerService);
    return PagerService;
})();
exports.PagerService = PagerService;
//# sourceMappingURL=pager.js.map