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
var Observable_1 = require('rxjs/Observable');
var ArticleService = (function () {
    function ArticleService(_http) {
        this._http = _http;
        this._requestsUrl = '/api/article/:id';
        this._requestsGetDeArtUrl = '/api/art/de/:id';
        this._articleUserUrl = '/api/articles-user';
        this._searchArticleUrl = '/api/full-search-article';
        this._artKnw = '/api/art/knw/:id';
        this._cmtUrl = "/api/comment/article/:artId/:cmtId";
        this._cmtLike = "/api/comment/like/:artId/:cmtId/:user";
        this._cmtUnLike = "/api/comment/unlike/:artId/:cmtId/:user";
        this._artLike = "/api/art/like/:artId/:user";
        this._artUnLike = "/api/art/unlike/:artId/:user";
        this._artProfile = "/api/articles-user/:username";
    }
    ArticleService.prototype.getAllArts = function (num) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            num: num
        });
        return this._http.put(this._requestsUrl.replace(':id', ''), _data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.getAllArtAdmin = function () {
        return this._http.get("/api/articles-admin")
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //search request
    ArticleService.prototype.searchArticle = function (search) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _search = JSON.stringify({
            text: search
        });
        return this._http
            .post(this._searchArticleUrl, _search, options)
            .map(function (r) { return r.json(); });
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
    ArticleService.prototype.getArtByKnwId = function (id) {
        return this._http.get(this._artKnw.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.getArtsByUsername = function (name) {
        return this._http.get(this._artProfile.replace(':username', name))
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
                author: user,
                title: _title,
                content: _content,
                tags: oldTag,
                status: stt
            },
            newTag: newTag
        });
        return this._http
            .post(this._requestsUrl.replace(':id', ''), _data, options)
            .map(function (r) { return r.json(); }).catch(this.handleError);
    };
    ArticleService.prototype.addComment = function (artId, user, content) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _comment = JSON.stringify({
            artId: artId,
            user: user,
            content: content
        });
        return this._http
            .post(this._cmtUrl.replace(':artId', '').replace('/:cmtId', ''), _comment, options)
            .map(function (r) { return r.json(); });
    };
    ArticleService.prototype.editComment = function (artId, cmtId, content) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _cmt = JSON.stringify({
            content: content
        });
        return this._http
            .put(this._cmtUrl.replace(':artId', artId).replace(':cmtId', cmtId), _cmt, options)
            .map(function (r) { return r.json(); }).catch(this.handleError);
    };
    ArticleService.prototype.removeComment = function (artId, cmtId) {
        return this._http.delete(this._cmtUrl.replace(':artId', artId).replace(':cmtId', cmtId)).map(function (r) { return r.json(); });
    };
    //action like comment
    ArticleService.prototype.likeComment = function (artId, cmtId, user) {
        return this._http.get(this._cmtLike.replace(':artId', artId).replace(':cmtId', cmtId).replace(':user', user))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.unlikeComment = function (artId, cmtId, user) {
        return this._http.get(this._cmtUnLike.replace(':artId', artId).replace(':cmtId', cmtId).replace(':user', user))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //action like article
    ArticleService.prototype.likeArt = function (artId, user) {
        return this._http.get(this._artLike.replace(':artId', artId).replace(':user', user))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.unlikeArt = function (artId, user) {
        return this._http.get(this._artUnLike.replace(':artId', artId).replace(':user', user))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.topArticle = function () {
        return this._http
            .get(this._requestsUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.getArtById = function (id) {
        return this._http.get(this._requestsUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.activeArt = function (id) {
        return this._http.get(this._requestsGetDeArtUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError).catch(this.handleError);
    };
    ArticleService.prototype.deactivateArticle = function (id) {
        return this._http
            .delete(this._requestsUrl.replace(':id', id))
            .map(function (r) { return r.json(); }).catch(this.handleError);
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
            .map(function (r) { return r.json(); }).catch(this.handleError);
    };
    ArticleService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
})();
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.js.map