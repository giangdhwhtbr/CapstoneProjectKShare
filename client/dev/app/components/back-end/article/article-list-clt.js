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
var article_1 = require('../../../services/article');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var ArtListCtlComponent = (function () {
    function ArtListCtlComponent(_articleService, router) {
        this._articleService = _articleService;
        this.router = router;
        this.deArts = [];
        this.filter = '';
    }
    ArtListCtlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articleService.getAllDeArts().subscribe(function (deArts) {
            _this.deArts = deArts;
        });
    };
    ArtListCtlComponent.prototype.activeArt = function (id) {
        var _this = this;
        this._articleService.activeArt(id).subscribe(function (art) {
            _this._articleService.getAllDeArts().subscribe(function (deArts) {
                _this.deArts = deArts;
                $('.messOn').html('<div class="alert alert-success"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> ' + art.title + ' đã được mở lại và ở trạng thái riêng tư</div>');
            });
        });
    };
    ArtListCtlComponent = __decorate([
        core_1.Component({
            selector: 'art-list-clt',
            templateUrl: 'client/dev/app/components/back-end/article/templates/article-list.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
            providers: [article_1.ArticleService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        })
    ], ArtListCtlComponent);
    return ArtListCtlComponent;
})();
exports.ArtListCtlComponent = ArtListCtlComponent;
//# sourceMappingURL=article-list-clt.js.map