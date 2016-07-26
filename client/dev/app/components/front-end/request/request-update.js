var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var requests_1 = require('../../../services/requests');
var knowledge_1 = require('../../../services/knowledge');
var RequestUpdateClientComponent = (function () {
    function RequestUpdateClientComponent(fb, _requestService, router, route, _knowledgeService) {
        var _this = this;
        this._requestService = _requestService;
        this.router = router;
        this.route = route;
        this._knowledgeService = _knowledgeService;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.updateRequestFormCli = fb.group({
            "_id": [""],
            "title": [""],
            "description": [""],
            "knowledgeId": [""]
        });
    }
    RequestUpdateClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all back.knowledge
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
        this._requestService.getRequestById(this.id).subscribe(function (request) {
            _this.request = request;
            _this.title = request.title;
            _this._id = request._id;
            _this.description = request.description;
        }, function (error) {
            console.log(error.text());
        });
    };
    RequestUpdateClientComponent.prototype.updateRequest = function (request) {
        this._requestService.updateRequest(request).subscribe(function (request) {
            console.log('update successed');
        }, function (error) {
            console.log(error.text());
        });
        //window.location.href = '/kshare/requests/'+this.id;
    };
    RequestUpdateClientComponent = __decorate([
        core_1.Component({
            selector: 'request-update-cli',
            templateUrl: 'client/dev/app/components/front-end/request/templates/request-update.html',
            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService)),
        __param(4, core_1.Inject(knowledge_1.KnowledgeService))
    ], RequestUpdateClientComponent);
    return RequestUpdateClientComponent;
})();
exports.RequestUpdateClientComponent = RequestUpdateClientComponent;
