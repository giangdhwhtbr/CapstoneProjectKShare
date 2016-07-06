var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var requests_1 = require('../../../services/requests');
var knowledge_1 = require('../../../services/knowledge');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var UpdateRequestComponent = (function () {
    function UpdateRequestComponent(fb, _requestService, router, rParam, _knowledgeService) {
        this._requestService = _requestService;
        this.router = router;
        this._knowledgeService = _knowledgeService;
        this.id = rParam.getParam('id');
        this.updateRequestFormCli = fb.group({
            "_id": [""],
            "title": [""],
            "description": [""],
            "knowledgeId": [""]
        });
    }
    UpdateRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all back.knowledge
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
        this._requestService.getRequestById(this.id).subscribe(function (request) {
            _this.request = request;
            _this.title = request.title;
            _this.description = request.description;
            _this._id = request._id;
        }, function (error) {
            console.log(error.text());
        });
    };
    UpdateRequestComponent.prototype.updateRequest = function (request) {
        console.log(request);
        this._requestService.updateRequest(request).subscribe(function (request) {
            console.log('update successed');
        }, function (error) {
            console.log(error.text());
        });
        window.location.href = 'admin/requests';
    };
    UpdateRequestComponent = __decorate([
        core_1.Component({
            selector: 'request-update-cli',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-update.html',
            styleUrls: ['client/dev/asserts/css/backend-styles.css'],
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService)),
        __param(4, core_1.Inject(knowledge_1.KnowledgeService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, requests_1.RequestService, router_1.Router, router_1.RouteSegment, knowledge_1.KnowledgeService])
    ], UpdateRequestComponent);
    return UpdateRequestComponent;
})();
exports.UpdateRequestComponent = UpdateRequestComponent;
//# sourceMappingURL=request-update.js.map