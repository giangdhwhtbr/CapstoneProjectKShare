"use strict";
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
var common_1 = require('@angular/common');
var knowledge_1 = require('../../../services/knowledge');
var knowledge_update_1 = require('./knowledge-update');
var sub_knowledge_create_1 = require('./sub-knowledge-create');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var KnowledgeListComponent = (function () {
    function KnowledgeListComponent(fb, _knowledgeService) {
        this._knowledgeService = _knowledgeService;
        this.pageTitle = 'Knowledge List';
        this.knowledgeForm = fb.group({
            "name": [""],
            "description": [""],
        });
        this.subCategoryForm = fb.group({
            "name": [""],
            "description": [""],
            "parent": [""]
        });
    }
    KnowledgeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            console.log(knowledges);
            /*this.knowledges = this._knowledgeService.getChildFromParent(knowledges);*/
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
    };
    KnowledgeListComponent.prototype.deleteKnowledge = function (id) {
        var _this = this;
        this._knowledgeService
            .deleteKnowledge(id)
            .subscribe(function () {
            _this.knowledges.forEach(function (t, i) {
                if (t._id === id)
                    return _this.knowledges.splice(i, 1);
            });
        });
    };
    KnowledgeListComponent.prototype.addKnowledge = function (knowledge) {
        var _this = this;
        this._knowledgeService
            .addKnowledge(knowledge)
            .subscribe(function (m) {
            _this.knowledges.push(m);
            _this.knowledgeForm.controls["name"].updateValue("");
            _this.knowledgeForm.controls["description"].updateValue("");
        });
    };
    KnowledgeListComponent.prototype.addSubKnowledge = function (knowledge) {
        var _this = this;
        this._knowledgeService
            .addKnowledge(knowledge)
            .subscribe(function (m) {
            _this.subCategoryForm.controls["name"].updateValue("");
            _this.subCategoryForm.controls["description"].updateValue("");
            for (var i = 0; i < _this.knowledges.length; i++) {
                if (_this.knowledges[i]._id === m.parent) {
                    console.log(_this.knowledges[i]._id);
                    var a = [];
                    a.push(m);
                    _this.knowledges[i]["subCategory"] = a;
                }
            }
        });
    };
    KnowledgeListComponent = __decorate([
        core_1.Component({
            selector: 'knowledge-list',
            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-list.html',
            directives: [
                knowledge_update_1.UpdateKnowledgeComponent,
                sub_knowledge_create_1.CreateSubCategoryComponent,
                router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
            providers: [knowledge_1.KnowledgeService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, knowledge_1.KnowledgeService])
    ], KnowledgeListComponent);
    return KnowledgeListComponent;
}());
exports.KnowledgeListComponent = KnowledgeListComponent;
//# sourceMappingURL=knowledges-list.js.map