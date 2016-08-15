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
var knowledge_1 = require('../../../services/knowledge');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var UpdateKnowledgeComponent = (function () {
    function UpdateKnowledgeComponent(fb, _knowledgeService, router, route) {
        var _this = this;
        this._knowledgeService = _knowledgeService;
        this.router = router;
        this.route = route;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.updateKnowledgeForm = fb.group({
            "name": [""],
            "description": [""],
            "_id": [""]
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
        this.router.navigateByUrl('admin/knowledges');
    };
    UpdateKnowledgeComponent = __decorate([
        core_1.Component({
            selector: 'knowledge-update',
            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-update.html',
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
            providers: [knowledge_1.KnowledgeService]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(knowledge_1.KnowledgeService))
    ], UpdateKnowledgeComponent);
    return UpdateKnowledgeComponent;
})();
exports.UpdateKnowledgeComponent = UpdateKnowledgeComponent;
//# sourceMappingURL=knowledge-update.js.map