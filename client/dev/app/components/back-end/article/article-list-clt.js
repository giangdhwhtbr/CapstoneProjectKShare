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
var article_1 = require('../../../services/article');
var pager_1 = require('../../../services/pager');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var primeng_1 = require('primeng/primeng');
var ArtListCtlComponent = (function () {
    function ArtListCtlComponent(_articleService, _pagerService, router) {
        this._articleService = _articleService;
        this._pagerService = _pagerService;
        this.router = router;
        this.arts = [];
        this.filter = '';
        this.total = 0;
    }
    ArtListCtlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._pagerService.getAPage("article", 0, "public").subscribe(function (Arts) {
            _this._pagerService.getTotalNum("articletot", "public").subscribe(function (num) {
                _this.arts = Arts;
                _this.total = num;
            });
        });
    };
    ArtListCtlComponent.prototype.activeArt = function (id) {
        //this._articleService.activeArt(id).subscribe((art)=>{
        //    this._articleService.getAllDeArts().subscribe((arts)=> {
        //        this.arts=arts;
        //        $('.messOn').html('<div class="alert alert-success"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> ' + art.title + ' đã được mở lại và ở trạng thái riêng tư</div>');
        //    });
        //});
    };
    ArtListCtlComponent.prototype.paginate = function (event) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        //this._pagerService.getAPage("article",event.first,"public").subscribe((deArts)=> {
        //    this.arts=deArts;
        //});
        var _this = this;
        this._pagerService.getAPage("article", event.first, "public").subscribe(function (Arts) {
            _this.arts = Arts;
        });
    };
    ArtListCtlComponent = __decorate([
        core_1.Component({
            selector: 'art-list-clt',
            templateUrl: 'client/dev/app/components/back-end/article/templates/article-list.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, primeng_1.Paginator],
            providers: [article_1.ArticleService, ng2_pagination_1.PaginationService, pager_1.PagerService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        }), 
        __metadata('design:paramtypes', [article_1.ArticleService, pager_1.PagerService, router_1.Router])
    ], ArtListCtlComponent);
    return ArtListCtlComponent;
})();
exports.ArtListCtlComponent = ArtListCtlComponent;
//# sourceMappingURL=article-list-clt.js.map