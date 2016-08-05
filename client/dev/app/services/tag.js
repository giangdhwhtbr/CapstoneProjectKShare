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
 * Created by Duc Duong on 7/19/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var TagService = (function () {
    function TagService(_http) {
        this._http = _http;
        this._tagUrl = '/api/tags/:id';
    }
    TagService.prototype.getAllTag = function () {
        return this._http.get(this._tagUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getArtByTag = function (id) {
        return this._http.get(this._tagUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TagService);
    return TagService;
})();
exports.TagService = TagService;
//# sourceMappingURL=tag.js.map