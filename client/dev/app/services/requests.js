var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var RequestService = (function () {
    function RequestService(_http) {
        this._http = _http;
        this._requestsUrl = '/api/requests/:id';
        this._requestUserUrl = '/api/requests-user';
        this._requestsAdminUrl = '/api/requests-admin/:id';
        this._getKnowledgeByParentUrl = '/api/knowledges/parent/:id';
        this._searchRequetsUrl = '/api/requests-search/:id';
        this._statusSubcriberUrl = '/api/requests-subcriber/:id';
        this._requestStatusUrl = '/api/requests-status/:id';
    }
    RequestService.prototype.getAllRequests = function (num) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            num: num
        });
        return this._http.put(this._requestUserUrl.replace(':id', ''), _data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //get all request which user's ownknowledgeIds same with tagid of request
    RequestService.prototype.getRequestByUserTags = function (tags, num) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            userTags: tags,
            x: num
        });
        return this._http.put(this._requestsUrl.replace(':id', ''), _data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //get all request which user's ownknowledgeIds not same with tagid of request
    RequestService.prototype.getRequestExceptUserTags = function (tags, num) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            userTags: tags,
            x: num
        });
        return this._http.post(this._requestUserUrl, _data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.getAllRequestAdmin = function () {
        return this._http.get(this._requestsAdminUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.addRequest = function (request, content, oldTag, newTag) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            request: {
                title: request.title,
                description: content,
                knowledgeId: request.knowledgeId,
                user: request.user,
                tags: oldTag
            },
            newTag: newTag
        });
        return this._http
            .post(this._requestsUrl.replace(':id', ''), _data, options)
            .map(function (r) { return r.json(); });
    };
    RequestService.prototype.getRequestById = function (id) {
        return this._http.get(this._requestsUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //delete templates
    RequestService.prototype.deleteRequest = function (request) {
        return this._http
            .delete(this._requestsUrl.replace(':id', request._id))
            .map(function (r) { return r.json(); });
    };
    RequestService.prototype.deleteRequestById = function (id) {
        return this._http
            .delete(this._requestsUrl.replace(':id', id))
            .map(function (r) { return r.json(); });
    };
    RequestService.prototype.updateRequest = function (request, oldTag, newTag) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            rq: {
                _id: '',
                title: request.title,
                description: request.description,
                knowledgeId: request.knowledgeId,
                status: request.status,
                tags: oldTag,
                subscribers: request.subscribers
            },
            newTag: newTag
        });
        console.log(_data);
        return this._http
            .put(this._requestsUrl.replace(':id', request._id), _data, options)
            .map(function (r) { return r.json(); });
    };
    RequestService.prototype.getRequestByKnowledgeId = function (id) {
        return this._http
            .post(this._requestsUrl.replace(':id', id), '')
            .map(function (r) { return r.json(); });
    };
    // get child back.knowledge from parent back.knowledge
    RequestService.prototype.getKnowledgeByParent = function (id) {
        return this._http.get(this._getKnowledgeByParentUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //add a subcriber to templates subscribers
    RequestService.prototype.updateSubcriber = function (id, subcriber) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _subcriber = JSON.stringify({
            subcriber: subcriber
        });
        return this._http.post(this._statusSubcriberUrl.replace(':id', id), _subcriber, options)
            .map(function (r) { return r.json(); });
    };
    //change status request
    RequestService.prototype.changeStatusRequest = function (id) {
        return this._http.get(this._requestStatusUrl.replace(':id', id))
            .map(function (r) { return r.json(); });
    };
    //search request
    RequestService.prototype.searchRequest = function (search) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _search = JSON.stringify({
            text: search
        });
        return this._http
            .post(this._searchRequetsUrl.replace(':id', ''), _search, options)
            .map(function (r) { return r.json(); });
    };
    RequestService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    RequestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RequestService);
    return RequestService;
})();
exports.RequestService = RequestService;
//# sourceMappingURL=requests.js.map