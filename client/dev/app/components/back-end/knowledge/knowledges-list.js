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
var router_1 = require('@angular/router');
var knowledge_1 = require('../../../services/knowledge');
var knowledge_update_1 = require('./knowledge-update');
var sub_knowledge_create_1 = require('./sub-knowledge-create');
var knowledge_create_1 = require('./knowledge-create');
var KnowledgeListComponent = (function () {
    function KnowledgeListComponent(_knowledgeService) {
        this._knowledgeService = _knowledgeService;
        this.pageTitle = 'Knowledge List';
    }
    KnowledgeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
            console.log(_this.knowledges);
        });
    };
    KnowledgeListComponent.prototype.deleteKnowledge = function (id) {
        this._knowledgeService
            .deleteKnowledge(id)
            .subscribe(function () {
            window.location.reload();
        });
    };
    KnowledgeListComponent = __decorate([
        core_1.Component({
            selector: 'knowledge-list',
            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-list.html',
            styleUrls: [
                'client/dev/app/components/back-end/knowledge/styles/knowledge.css',
                'client/dev/asserts/css/backend-styles.css'
            ],
            directives: [
                knowledge_update_1.UpdateKnowledgeComponent,
                sub_knowledge_create_1.CreateSubCategoryComponent,
                knowledge_create_1.CreateKnowledgeComponent,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [knowledge_1.KnowledgeService])
    ], KnowledgeListComponent);
    return KnowledgeListComponent;
})();
exports.KnowledgeListComponent = KnowledgeListComponent;
//# sourceMappingURL=knowledges-list.js.map