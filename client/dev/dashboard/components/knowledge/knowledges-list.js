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
var knowledge_service_1 = require('../../services/knowledge-service');
var KnowledgeListComponent = (function () {
    function KnowledgeListComponent(_knowledgeService) {
        this._knowledgeService = _knowledgeService;
        this.pageTitle = 'Knowledge List';
    }
    KnowledgeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            var formatDate = function (date) {
                if (date) {
                    var newDate, day, month, year;
                    year = date.substr(0, 4);
                    month = date.substr(5, 2);
                    day = date.substr(8, 2);
                    return newDate = day + '/' + month + '/' + year;
                }
            };
            for (var i = 0; i < knowledges.length; i++) {
                knowledges[i].update = formatDate(knowledges[i].update);
            }
            _this.knowledges = knowledges;
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
    KnowledgeListComponent = __decorate([
        core_1.Component({
            selector: 'knowledge-list',
            templateUrl: 'client/dev/dashboard/templates/knowledge/knowledge-list.html',
            styleUrls: [
                'client/dev/dashboard/styles/knowledge-list.css',
                'client/dev/dashboard/styles/styles.css',
            ]
        }), 
        __metadata('design:paramtypes', [knowledge_service_1.KnowledgeService])
    ], KnowledgeListComponent);
    return KnowledgeListComponent;
}());
exports.KnowledgeListComponent = KnowledgeListComponent;
