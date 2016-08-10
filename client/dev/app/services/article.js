var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
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
        this._requestsGetDeArtUrl = '/api/art/de/:id';
        this._articleUserUrl = '/api/articles-user';
    }
    ArticleService.prototype.getAllArts = function () {
        return this._http.get(this._requestsUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.getAllDeArts = function () {
        return this._http.get(this._requestsGetDeArtUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //get "num" article which user's ownknowledgeIds same with tagid of article
    ArticleService.prototype.getArticlesByUserTags = function (tags, num) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            userTags: tags,
            x: num
        });
        return this._http.post(this._articleUserUrl, _data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //get articles which user's ownknowledgeIds not same with tagid of article
    ArticleService.prototype.getArticleExceptUserTags = function (tags, num) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            userTags: tags,
            x: num
        });
        return this._http.put(this._articleUserUrl, _data, options)
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
    ArticleService.prototype.activeArt = function (id) {
        return this._http.get(this._requestsGetDeArtUrl.replace(':id', id))
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
        core_1.Injectable()
    ], ArticleService);
    return ArticleService;
})();
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.js.map