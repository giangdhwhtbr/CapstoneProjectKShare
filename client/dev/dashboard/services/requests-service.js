"use strict";
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
    }
    RequestService.prototype.getAllRequests = function () {
        return this._http.get(this._requestsUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    RequestService.prototype.addRequest = function (request) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _request = JSON.stringify({
            title: request.title,
            description: request.description,
            knowledgeId: request.knowledgeId
        });
        return this._http
            .post(this._requestsUrl.replace(':id', ''), _request, options)
            .map(function (r) { return r.json(); });
    };
    RequestService.prototype.getRequestById = function (id) {
        return this._http.get(this._requestsUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
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
    RequestService.prototype.updateRequest = function (request) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _request = JSON.stringify({
            _id: '',
            title: request.title,
            description: request.description,
            knowledgeId: request.knowledgeId
        });
        console.log(_request);
        return this._http
            .put(this._requestsUrl.replace(':id', request._id), _request, options)
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
}());
exports.RequestService = RequestService;
