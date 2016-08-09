var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Duc Duong on 8/8/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var tag_1 = require('../../../services/tag');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var TagListCtlComponent = (function () {
    function TagListCtlComponent(_tagService, router) {
        this._tagService = _tagService;
        this.router = router;
        this.tags = [];
        this.deTags = [];
        this.filter = '';
    }
    TagListCtlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this._tagService.getAllDeactiveTag().subscribe(function (deTags) {
                _this.tags = tags;
                _this.deTags = deTags;
            });
        });
    };
    TagListCtlComponent.prototype.deactiveTag = function (id) {
        var _this = this;
        this._tagService.deactivateTag(id).subscribe(function (mess) {
            _this._tagService.getAllTag().subscribe(function (tags) {
                _this._tagService.getAllDeactiveTag().subscribe(function (deTags) {
                    _this.tags = tags;
                    _this.deTags = deTags;
                });
            });
        });
    };
    TagListCtlComponent.prototype.activeTag = function (id) {
        var _this = this;
        this._tagService.activeTag(id).subscribe(function (tag) {
            _this._tagService.getAllTag().subscribe(function (tags) {
                _this._tagService.getAllDeactiveTag().subscribe(function (deTags) {
                    _this.tags = tags;
                    _this.deTags = deTags;
                });
            });
        });
    };
    TagListCtlComponent = __decorate([
        core_1.Component({
            selector: 'tag-list-clt',
            templateUrl: 'client/dev/app/components/back-end/tag/templates/tag.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
            providers: [tag_1.TagService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        }), 
        __metadata('design:paramtypes', [tag_1.TagService, router_1.Router])
    ], TagListCtlComponent);
    return TagListCtlComponent;
})();
exports.TagListCtlComponent = TagListCtlComponent;
//# sourceMappingURL=tag-list-control.js.map