var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var primeng_1 = require('primeng/primeng');
var knowledge_1 = require('../../../services/knowledge');
var knowledge_update_1 = require('./knowledge-update');
var sub_knowledge_create_1 = require('./sub-knowledge-create');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var primeng_2 = require('primeng/primeng');
var primeng_3 = require('primeng/primeng');
var private_chat_1 = require('../../shared/private-chat');
var KnowledgeListComponent = (function () {
    function KnowledgeListComponent(fb, _elRef, _knowledgeService, _requestService) {
        this._elRef = _elRef;
        this._knowledgeService = _knowledgeService;
        this._requestService = _requestService;
        this.pageTitle = 'Knowledge List';
        this.displayDialog = false;
        this.knowledgeForm = fb.group({
            "name": [""],
            "description": [""]
        });
        this.subCategoryForm = fb.group({
            "name": [""],
            "description": [""],
            "parent": [""]
        });
    }
    KnowledgeListComponent.prototype.ngOnInit = function () {
        this.getAllKnowledgesForAdmin();
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });
    };
    KnowledgeListComponent.prototype.openModal = function (id) {
        console.log(id);
        $("#" + id).openModal();
    };
    KnowledgeListComponent.prototype.action = function (data) {
        this.knowledges = data;
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
        if (this.knowledgeForm.controls["name"].value.trim() == 0) {
            Materialize.toast('Tri thức không được để trống', 3000);
        }
        this._knowledgeService
            .addKnowledge(knowledge)
            .subscribe(function (m) {
            _this.getAllKnowledgesForAdmin();
            _this.knowledgeForm.controls["name"].updateValue("");
            _this.knowledgeForm.controls["description"].updateValue("");
        });
    };
    KnowledgeListComponent.prototype.changeKnowledgeStatus = function (id) {
        var _this = this;
        this._knowledgeService
            .changeKnowledgeStatus(id)
            .subscribe(function (response) {
            _this.getAllKnowledgesForAdmin();
        });
    };
    KnowledgeListComponent.prototype.getAll = function () {
        var _this = this;
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParentAdmin(knowledges);
            for (var i = 0; i < _this.knowledges.length; i++) {
                _this.knowledges[i]["num"] = i + 1;
            }
        });
    };
    KnowledgeListComponent.prototype.getAllKnowledgesForAdmin = function () {
        var _this = this;
        this._knowledgeService
            .getAllKnowledgesForAdmin()
            .then(function (knowledge) {
            _this.knowledgeAdmin = knowledge;
            for (var i = 0; i < _this.knowledgeAdmin.length; i++) {
                _this.knowledgeAdmin[i].data["num"] = i + 1;
                if (_this.knowledgeAdmin[i].data.status == false) {
                    for (var j = 0; j < _this.knowledgeAdmin[i].children.length; j++) {
                        _this.knowledgeAdmin[i].children[j].data["visible"] = false;
                    }
                }
            }
        });
    };
    KnowledgeListComponent.prototype.onChange = function () {
        this.getAllKnowledgesForAdmin();
    };
    __decorate([
        core_1.Input()
    ], KnowledgeListComponent.prototype, "knowledge");
    KnowledgeListComponent = __decorate([
        core_1.Component({
            selector: 'knowledge-list',
            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-list.html',
            directives: [
                knowledge_update_1.UpdateKnowledgeComponent, ng2_charts_1.CHART_DIRECTIVES,
                sub_knowledge_create_1.CreateSubCategoryComponent,
                router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, primeng_1.DataTable, primeng_1.Column, primeng_1.Header, primeng_1.Footer, primeng_2.TreeTable, primeng_3.Dialog, private_chat_1.PrivateChatComponent],
            providers: [knowledge_1.KnowledgeService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        })
    ], KnowledgeListComponent);
    return KnowledgeListComponent;
})();
exports.KnowledgeListComponent = KnowledgeListComponent;
//# sourceMappingURL=knowledges-list.js.map