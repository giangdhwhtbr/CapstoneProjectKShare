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
var BadwordService = (function () {
    function BadwordService(_http) {
        this._http = _http;
        this._badwordsUrl = '/api/badwords/:id';
    }
    BadwordService.prototype.getAllBadwords = function () {
        return this._http.get(this._badwordsUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    BadwordService.prototype.addBadword = function (badword) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _badword = JSON.stringify({
            word: badword.word,
        });
        console.log(_badword);
        console.log(header);
        return this._http
            .post(this._badwordsUrl.replace(':id', ''), _badword, options)
            .map(function (r) { return r.json(); });
    };
    BadwordService.prototype.deleteBadword = function (id) {
        return this._http
            .delete(this._badwordsUrl.replace(':id', id));
    };
    BadwordService.prototype.findBadwordById = function (id) {
        return this._http
            .get(this._badwordsUrl.replace(':id', id))
            .map(function (r) { return r.json(); });
    };
    BadwordService.prototype.updateBadword = function (badword) {
        console.log(badword);
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _badword = JSON.stringify({
            word: badword.word,
        });
        return this._http
            .put(this._badwordsUrl.replace(':id', badword._id), _badword, options)
            .map(function (r) { return r.json(); });
    };
    BadwordService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    BadwordService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BadwordService);
    return BadwordService;
})();
exports.BadwordService = BadwordService;
//# sourceMappingURL=badwords-service.js.map