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
 * Created by Duc Duong on 7/13/2016.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ArticleService = (function () {
    function ArticleService(_http) {
        this._http = _http;
        this._requestsUrl = '/api/article/:id';
    }
    ArticleService.prototype.getAllArts = function () {
        return this._http.get(this._requestsUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.addArticle = function (_title, _content, oldTag, newTag, stt, user) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            art: {
                ofUser: user,
                title: _title,
                content: _content,
                tags: oldTag,
                status: stt
            },
            newTag: newTag
        });
        return this._http
            .post(this._requestsUrl.replace(':id', ''), _data, options)
            .map(function (r) { return r.json(); });
    };
    ArticleService.prototype.getArtById = function (id) {
        return this._http.get(this._requestsUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.deactivateArticle = function (id) {
        return this._http
            .delete(this._requestsUrl.replace(':id', id))
            .map(function (r) { return r.json(); });
    };
    //deleteRequestById(id:string):Observable<any> {
    //  return this._http
    //    .delete(this._requestsUrl.replace(':id', id))
    //    .map((r) => r.json());
    //}
    ArticleService.prototype.updateArtById = function (art, newTag, id) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            art: art,
            newTag: newTag
        });
        return this._http
            .put(this._requestsUrl.replace(':id', id), _data, options)
            .map(function (r) { return r.json(); });
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
})();
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.js.map