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
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var knowledge_service_1 = require('../../services/knowledge-service');
var CreateKnowledgeComponent = (function () {
    function CreateKnowledgeComponent(fb, _knowledgeService) {
        this._knowledgeService = _knowledgeService;
        this.knowledges = [];
        this.knowledgeForm = fb.group({
            "name": [""],
            "description": [""],
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
            templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-create.html',
            styleUrls: ['client/dev/dashboard/styles/knowledge/knowledge-create.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, knowledge_service_1.KnowledgeService])
    ], CreateKnowledgeComponent);
    return CreateKnowledgeComponent;
}());
exports.CreateKnowledgeComponent = CreateKnowledgeComponent;
