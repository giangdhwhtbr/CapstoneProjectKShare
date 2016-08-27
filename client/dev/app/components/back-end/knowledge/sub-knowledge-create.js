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
var primeng_1 = require('primeng/primeng');
var private_chat_1 = require('../../shared/private-chat');
var CreateSubCategoryComponent = (function () {
    function CreateSubCategoryComponent(fb, _knowledgeService) {
        this._knowledgeService = _knowledgeService;
        this.knowledge = new core_1.EventEmitter();
        this.subCategoryForm = fb.group({
            "name": [""],
            "description": [""],
            "parent": [""]
        });
    }
    CreateSubCategoryComponent.prototype.ngOnInit = function () {
    };
    CreateSubCategoryComponent.prototype.addKnowledge = function (knowledge) {
        var _this = this;
        this._knowledgeService.addKnowledge(knowledge).subscribe(function (knowledge) {
            _this.subCategoryForm.controls["name"].updateValue("");
            _this.subCategoryForm.controls["description"].updateValue("");
        });
        this.knowledge.emit(knowledge);
    };
    __decorate([
        core_1.Input('kId')
    ], CreateSubCategoryComponent.prototype, "kId");
    __decorate([
        core_1.Input()
    ], CreateSubCategoryComponent.prototype, "knowledges");
    __decorate([
        core_1.Output()
    ], CreateSubCategoryComponent.prototype, "knowledge");
    CreateSubCategoryComponent = __decorate([
        core_1.Component({
            selector: 'sub-create',
            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/sub-knowledge-create.html',
            directives: [common_1.FORM_DIRECTIVES, primeng_1.Dialog, private_chat_1.PrivateChatComponent]
        })
    ], CreateSubCategoryComponent);
    return CreateSubCategoryComponent;
})();
exports.CreateSubCategoryComponent = CreateSubCategoryComponent;
//# sourceMappingURL=sub-knowledge-create.js.map