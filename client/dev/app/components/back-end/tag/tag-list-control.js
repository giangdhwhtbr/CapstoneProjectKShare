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
var TagListCtlComponent = (function () {
    function TagListCtlComponent(_tagService, router, _pagerService) {
        this._tagService = _tagService;
        this.router = router;
        this._pagerService = _pagerService;
        this.tagsAt = [];
        this.tagsDa = [];
        this.filter = '';
        this.filter1 = '';
        this.total = 0;
        this.total1 = 0;
        this.status = "true";
        this.firstESave = 0;
        this.firstESave1 = 0;
    }
    TagListCtlComponent.prototype.ngOnInit = function () {
        this.getTagsAt();
        this.getTagsDa();
    };
    TagListCtlComponent.prototype.getTagsAt = function () {
        var _this = this;
        this._pagerService.getAPage("tag", 0, "true").subscribe(function (tags) {
            _this._pagerService.getTotalNum("tagtot", "true").subscribe(function (num) {
                _this.tagsAt = tags;
                _this.total = num;
            });
        });
    };
    TagListCtlComponent.prototype.getTagsDa = function () {
        var _this = this;
        this._pagerService.getAPage("tag", 0, "false").subscribe(function (tags) {
            _this._pagerService.getTotalNum("tagtot", "false").subscribe(function (num) {
                _this.tagsDa = tags;
                _this.total1 = num;
            });
        });
    };
    TagListCtlComponent.prototype.deactiveTag = function (id) {
        var _this = this;
        this._tagService.deactivateTag(id).subscribe(function (mess) {
            _this._pagerService.getAPage("tag", _this.firstESave, "true").subscribe(function (tags) {
                _this._pagerService.getTotalNum("tagtot", "true").subscribe(function (num) {
                    _this.total = num;
                    _this.tagsAt = tags;
                    _this._pagerService.getAPage("tag", _this.firstESave1, "false").subscribe(function (tags) {
                        _this._pagerService.getTotalNum("tagtot", "false").subscribe(function (num) {
                            _this.total1 = num;
                            _this.tagsDa = tags;
                        });
                    });
                });
            });
        });
    };
    TagListCtlComponent.prototype.activeTag = function (id) {
        var _this = this;
        this._tagService.activeTag(id).subscribe(function (tag) {
            _this._pagerService.getAPage("tag", _this.firstESave1, "false").subscribe(function (tags) {
                _this._pagerService.getTotalNum("tagtot", "false").subscribe(function (num) {
                    _this.total1 = num;
                    _this.tagsDa = tags;
                    _this._pagerService.getAPage("tag", _this.firstESave, "true").subscribe(function (tags) {
                        _this._pagerService.getTotalNum("tagtot", "true").subscribe(function (num) {
                            _this.total = num;
                            _this.tagsAt = tags;
                        });
                    });
                });
            });
        });
    };
    TagListCtlComponent.prototype.paginate = function (event) {
        var _this = this;
        this._pagerService.getAPage("tag", event.first, "true").subscribe(function (tags) {
            _this.tagsAt = tags;
        });
        this.firstESave = event.first;
    };
    TagListCtlComponent.prototype.paginate1 = function (event) {
        var _this = this;
        this._pagerService.getAPage("tag", event.first, "false").subscribe(function (tags) {
            _this.tagsDa = tags;
        });
        this.firstESave1 = event.first;
    };
    TagListCtlComponent = __decorate([
        core_1.Component({
            selector: 'tag-list-clt',
            templateUrl: 'client/dev/app/components/back-end/tag/templates/tag.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, primeng_1.Paginator],
            providers: [tag_1.TagService, ng2_pagination_1.PaginationService, pager_1.PagerService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        })
    ], TagListCtlComponent);
    return TagListCtlComponent;
})();
exports.TagListCtlComponent = TagListCtlComponent;
//# sourceMappingURL=tag-list-control.js.map