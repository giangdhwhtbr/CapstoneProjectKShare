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
        this._activeTag = '/api/tags/active/:id';
        this._reqUrl = '/api/tag/req/:id';
        this._deactiveTag = '/api/tag/deactive/:id';
        this._tagAdminUrl = '/api/tags-admin';
    }
    TagService.prototype.getAllTag = function () {
        return this._http.get(this._tagUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getAllTagAdmin = function () {
        return this._http.get(this._tagAdminUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getAllDeactiveTag = function () {
        return this._http.get(this._deactiveTag.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getArtByTag = function (id) {
        return this._http.get(this._tagUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getReqByTag = function (id) {
        return this._http.get(this._reqUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.getTagsByIds = function (ids) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            ids: ids
        });
        return this._http
            .post('/api/tags/TagNames', _data, options)
            .map(function (r) { return r.json(); });
    };
    TagService.prototype.activeTag = function (id) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this._activeTag.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    TagService.prototype.deactivateTag = function (id) {
        return this._http
            .delete(this._tagUrl.replace(':id', id))
            .map(function (r) { return r.json(); });
    };
    TagService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TagService);
    return TagService;
})();
exports.TagService = TagService;
//# sourceMappingURL=tag.js.map