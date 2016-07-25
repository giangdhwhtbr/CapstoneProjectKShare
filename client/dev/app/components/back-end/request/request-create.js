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
var common_1 = require('@angular/common');
var requests_1 = require('../../../services/requests');
var CreateRequestComponent = (function () {
    function CreateRequestComponent(fb, _requestService, _knowledgeService, _authService) {
        this._requestService = _requestService;
        this._knowledgeService = _knowledgeService;
        this._authService = _authService;
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
        this.requestForm = fb.group({
            "knowledgeId": [""],
            "title": [""],
            "description": [""],
            "user": [""]
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
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService))
    ], CreateRequestComponent);
    return CreateRequestComponent;
})();
exports.CreateRequestComponent = CreateRequestComponent;
//# sourceMappingURL=request-create.js.map