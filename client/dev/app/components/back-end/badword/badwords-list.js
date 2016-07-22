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
var badword_1 = require('../../../services/badword');
var badword_update_1 = require('./badword-update');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var BadwordListComponent = (function () {
    function BadwordListComponent(fb, badwordService, router) {
        this.badwordService = badwordService;
        this.router = router;
        this.pageTitle = 'Badword List';
        this.filter = '';
        this.maxSize = 7;
        this.directionLinks = true;
        this.autoHide = false;
        this.config = {
            id: 'advanced',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.badwordForm = fb.group({
            "word": [""],
        });
    }
    BadwordListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    BadwordListComponent.prototype.getAll = function () {
        var _this = this;
        this.badwordService
            .getAllBadwords()
            .subscribe(function (badwords) {
            _this.badwords = badwords;
        });
    };
    BadwordListComponent.prototype.deleteBadword = function (id) {
        var _this = this;
        this.badwordService
            .deleteBadword(id)
            .subscribe(function () {
            _this.badwords.forEach(function (t, i) {
                if (t._id === id)
                    return _this.badwords.splice(i, 1);
            });
        });
    };
    BadwordListComponent.prototype.findBadwordById = function (id) {
        this.badwordService
            .findBadwordById(id)
            .subscribe(function (badwords) {
            return badwords;
        });
    };
    BadwordListComponent.prototype.addBadword = function (word) {
        var _this = this;
        this.badwordService
            .addBadword(word)
            .subscribe(function (word) {
            _this.badwords.push(word);
            _this.badwordForm.controls["word"].updateValue("");
        });
    };
    BadwordListComponent = __decorate([
        core_1.Component({
            selector: 'badword-list',
            templateUrl: 'client/dev/app/components/back-end/badword/templates/badword-list.html',
            directives: [ng2_pagination_1.PaginationControlsCmp, badword_update_1.UpdateBadwordComponent, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [badword_1.BadwordService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, badword_1.BadwordService, router_1.Router])
    ], BadwordListComponent);
    return BadwordListComponent;
}());
exports.BadwordListComponent = BadwordListComponent;
//# sourceMappingURL=badwords-list.js.map