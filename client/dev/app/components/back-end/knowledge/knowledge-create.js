var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var CreateKnowledgeComponent = (function () {
    function CreateKnowledgeComponent(fb, _knowledgeService) {
        this._knowledgeService = _knowledgeService;
        this.knowledges = [];
        this.knowledgeForm = fb.group({
            "name": [""],
            "description": [""]
        });
    }
    CreateKnowledgeComponent.prototype.addKnowledge = function (word) {
        var _this = this;
        this._knowledgeService
            .addKnowledge(word)
            .subscribe(function (m) {
            _this.knowledges.push(m);
            window.location.reload();
        });
    };
    CreateKnowledgeComponent = __decorate([
        core_1.Component({
            selector: 'knowledge-create',
            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-create.html',
            styleUrls: ['client/dev/app/components/back-end/knowledge/styles/knowledge.css'],
            directives: [common_1.FORM_DIRECTIVES]
        })
    ], CreateKnowledgeComponent);
    return CreateKnowledgeComponent;
})();
exports.CreateKnowledgeComponent = CreateKnowledgeComponent;
//# sourceMappingURL=knowledge-create.js.map