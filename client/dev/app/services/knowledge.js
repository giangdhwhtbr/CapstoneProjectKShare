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
var KnowledgeService = (function () {
    function KnowledgeService(_http) {
        this._http = _http;
        this._knowledgesUrl = '/api/knowledges/:id';
    }
    KnowledgeService.prototype.getAllKnowledges = function () {
        return this._http.get(this._knowledgesUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    KnowledgeService.prototype.addKnowledge = function (knowledge) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _knowledge = JSON.stringify({
            name: knowledge.name,
            description: knowledge.description,
            parent: knowledge.parent,
        });
        return this._http
            .post(this._knowledgesUrl.replace(':id', ''), _knowledge, options)
            .map(function (r) { return r.json(); });
    };
    KnowledgeService.prototype.deleteKnowledge = function (id) {
        return this._http
            .delete(this._knowledgesUrl.replace(':id', id));
    };
    KnowledgeService.prototype.findKnowledgeById = function (id) {
        return this._http
            .get(this._knowledgesUrl.replace(':id', id))
            .map(function (r) { return r.json(); });
    };
    KnowledgeService.prototype.updateKnowledge = function (knowledge) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _knowledge = JSON.stringify({
            name: knowledge.name,
            description: knowledge.description,
        });
        return this._http
            .put(this._knowledgesUrl.replace(':id', knowledge._id), _knowledge, options)
            .map(function (r) { return r.json(); });
    };
    //get child of a back.knowledge parent
    KnowledgeService.prototype.getChildFromParent = function (knowledges) {
        var parent = [];
        var subCate = [];
        for (var i = 0; i < knowledges.length; i++) {
            if (!knowledges[i].hasOwnProperty('parent')) {
                parent.push(knowledges[i]);
            }
        }
        for (var i = 0; i < parent.length; i++) {
            for (var j = 0; j < knowledges.length; j++) {
                if ((knowledges[j].hasOwnProperty('parent')) && (knowledges[j].parent === parent[i]._id)) {
                    subCate.push(knowledges[j]);
                }
            }
            parent[i]["subCategory"] = subCate;
            subCate = [];
        }
        knowledges = parent;
        return parent;
    };
    KnowledgeService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    KnowledgeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], KnowledgeService);
    return KnowledgeService;
})();
exports.KnowledgeService = KnowledgeService;
//# sourceMappingURL=knowledge.js.map