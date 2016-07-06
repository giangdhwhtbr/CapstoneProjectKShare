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
var knowledge_1 = require('../../../services/knowledge');
var common_1 = require('@angular/common');
var requests_1 = require('../../../services/requests');
var CreateRequestComponent = (function () {
    function CreateRequestComponent(fb, _requestService, _knowledgeService) {
        this._requestService = _requestService;
        this._knowledgeService = _knowledgeService;
        this.requestForm = fb.group({
            "knowledgeId": [""],
            "title": [""],
            "description": [""]
        });
    }
    CreateRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
    };
    CreateRequestComponent.prototype.addRequest = function (request) {
        console.log(request);
        this._requestService.addRequest(request).subscribe(function (request) {
            console.log('success');
        }, function (error) {
            console.log(error.text());
        });
        console.log(request);
        window.location.reload();
    };
    CreateRequestComponent = __decorate([
        core_1.Component({
            selector: 'request-create',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-create.html',
            styleUrls: ['client/dev/app/components/back-end/request/templates/request.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, requests_1.RequestService, knowledge_1.KnowledgeService])
    ], CreateRequestComponent);
    return CreateRequestComponent;
})();
exports.CreateRequestComponent = CreateRequestComponent;
//# sourceMappingURL=request-create.js.map