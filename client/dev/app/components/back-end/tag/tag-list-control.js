var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 8/8/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var tag_1 = require('../../../services/tag');
var ng2_pagination_1 = require('ng2-pagination');
var pager_1 = require('../../../services/pager');
var filter_1 = require('../shared/filter');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var TagListCtlComponent = (function () {
    function TagListCtlComponent(_tagService, router, _pagerService) {
        this._tagService = _tagService;
        this.router = router;
        this._pagerService = _pagerService;
        this.tagsAt = [];
        this.tagsDa = [];
    }
    TagListCtlComponent.prototype.ngOnInit = function () {
        this.getAllTag();
        $('ul.tabs').tabs();
    };
    TagListCtlComponent.prototype.getAllTag = function () {
        var _this = this;
        this.tagsAt = [];
        this.tagsDa = [];
        this._tagService.getAllTagAdmin().subscribe(function (tags) {
            for (var _i = 0; _i < tags.length; _i++) {
                var e = tags[_i];
                if (e.status == true) {
                    _this.tagsAt.push(e);
                }
                else {
                    _this.tagsDa.push(e);
                }
            }
        });
    };
    TagListCtlComponent.prototype.deactiveTag = function (id) {
        var _this = this;
        this._tagService.deactivateTag(id).subscribe(function (mess) {
            _this.getAllTag();
        });
    };
    TagListCtlComponent.prototype.activeTag = function (id) {
        var _this = this;
        this._tagService.activeTag(id).subscribe(function (tag) {
            _this.getAllTag();
        });
    };
    TagListCtlComponent = __decorate([
        core_1.Component({
            selector: 'tag-list-clt',
            templateUrl: 'client/dev/app/components/back-end/tag/templates/tag.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, primeng_1.Paginator, primeng_2.DataTable, primeng_2.Column, primeng_2.Header, primeng_2.MultiSelect, primeng_2.Footer, primeng_2.InputText],
            providers: [tag_1.TagService, ng2_pagination_1.PaginationService, pager_1.PagerService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        })
    ], TagListCtlComponent);
    return TagListCtlComponent;
})();
exports.TagListCtlComponent = TagListCtlComponent;
//# sourceMappingURL=tag-list-control.js.map