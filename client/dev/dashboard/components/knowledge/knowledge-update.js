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
var knowledge_service_1 = require('../../../dashboard/services/knowledge-service');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var UpdateKnowledgeComponent = (function () {
    function UpdateKnowledgeComponent(fb, _knowledgeService, router, rParam) {
        this._knowledgeService = _knowledgeService;
        this.router = router;
        this.id = rParam.getParam('id');
        this.updateKnowledgeForm = fb.group({
            "name": [""],
            "description": [""],
            "_id": [""],
        });
    }
    UpdateKnowledgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._knowledgeService.findKnowledgeById(this.id).subscribe(function (knowledge) {
            _this.knowledge = knowledge;
            _this.name = knowledge.name;
            _this.description = knowledge.description;
            _this._id = knowledge._id;
        }, function (error) {
            console.log(error.text());
        });
    };
    UpdateKnowledgeComponent.prototype.updateKnowledge = function (knowledge) {
        this._knowledgeService.updateKnowledge(knowledge).subscribe(function (knowledge) {
            console.log('update successed');
        }, function (error) {
            console.log(error.text());
        });
    };
    UpdateKnowledgeComponent = __decorate([
        core_1.Component({
            selector: 'knowledge-update',
            templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-update.html',
            styleUrls: ['client/dev/dashboard/styles/styles.css'],
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [knowledge_service_1.KnowledgeService]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(knowledge_service_1.KnowledgeService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, knowledge_service_1.KnowledgeService, router_1.Router, router_1.RouteSegment])
    ], UpdateKnowledgeComponent);
    return UpdateKnowledgeComponent;
})();
exports.UpdateKnowledgeComponent = UpdateKnowledgeComponent;
//# sourceMappingURL=knowledge-update.js.map