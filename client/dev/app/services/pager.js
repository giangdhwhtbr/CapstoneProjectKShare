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
 * Created by Duc Duong on 8/10/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
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
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PagerService);
    return PagerService;
})();
exports.PagerService = PagerService;
//# sourceMappingURL=pager.js.map