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
var common_1 = require('@angular/common');
var knowledge_1 = require('../../../services/knowledge');
var primeng_1 = require('primeng/primeng');
var private_chat_1 = require('../../shared/private-chat');
var CreateSubCategoryComponent = (function () {
    function CreateSubCategoryComponent(fb, _knowledgeService) {
        this._knowledgeService = _knowledgeService;
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
            for (var i = 0; i < _this.knowledges.length; i++) {
                var a = _this.knowledges[i]["subCategory"];
                console.log(a);
                if (_this.knowledges[i]._id === knowledge.parent) {
                    a.push(knowledge);
                    _this.knowledges[i]["subCategory"] = a;
                }
            }
        });
    };
    __decorate([
        core_1.Input('kId'), 
        __metadata('design:type', String)
    ], CreateSubCategoryComponent.prototype, "kId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], CreateSubCategoryComponent.prototype, "knowledges", void 0);
    CreateSubCategoryComponent = __decorate([
        core_1.Component({
            selector: 'sub-create',
            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/sub-knowledge-create.html',
            directives: [common_1.FORM_DIRECTIVES, primeng_1.Dialog, private_chat_1.PrivateChatComponent]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, knowledge_1.KnowledgeService])
    ], CreateSubCategoryComponent);
    return CreateSubCategoryComponent;
})();
exports.CreateSubCategoryComponent = CreateSubCategoryComponent;
//# sourceMappingURL=sub-knowledge-create.js.map