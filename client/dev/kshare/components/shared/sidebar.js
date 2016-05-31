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
var knowledge_service_1 = require('../../../dashboard/services/knowledge-service');
var SideBarComponent = (function () {
    function SideBarComponent(_knowledgeService) {
        this._knowledgeService = _knowledgeService;
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            var parent = [];
            var subCate = [];
            for (var i = 0; i < knowledges.length; i++) {
                if (!knowledges[i].hasOwnProperty('parent')) {
                    parent.push(knowledges[i]);
                }
            }
            for (var i = 0; i < parent.length; i++) {
                for (var j = 0; j < knowledges.length; j++) {
                    if ((knowledges[j].hasOwnProperty('parent')) && (knowledges[j].parent === parent[i]._id)) {
                        subCate.push(knowledges[j]);
                    }
                }
                parent[i]["subCategory"] = subCate;
                subCate = [];
            }
            _this.knowledges = parent;
        });
    };
    SideBarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            templateUrl: 'client/dev/kshare/templates/shared/sidebar.html',
            styleUrls: ['client/dev/kshare/styles/sidebar.css'],
            directives: []
        }), 
        __metadata('design:paramtypes', [knowledge_service_1.KnowledgeService])
    ], SideBarComponent);
    return SideBarComponent;
}());
exports.SideBarComponent = SideBarComponent;
