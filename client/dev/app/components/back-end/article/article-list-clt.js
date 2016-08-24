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
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var ArtListCtlComponent = (function () {
    function ArtListCtlComponent(_articleService, _pagerService, router) {
        this._articleService = _articleService;
        this._pagerService = _pagerService;
        this.router = router;
        this.artsAt = [];
        this.artsDa = [];
        this.artsPr = [];
    }
    ArtListCtlComponent.prototype.ngOnInit = function () {
        this.getAllArt();
        $('ul.tabs').tabs();
    };
    ArtListCtlComponent.prototype.getAllArt = function () {
        var _this = this;
        this.artsAt = [];
        this.artsDa = [];
        this.artsPr = [];
        this._articleService.getAllArtAdmin().subscribe(function (arts) {
            for (var _i = 0; _i < arts.length; _i++) {
                var e = arts[_i];
                if (e.status == "public") {
                    _this.artsAt.push(e);
                }
                else if (e.status == "deactivate") {
                    _this.artsDa.push(e);
                }
                else if (e.status == "private") {
                    _this.artsPr.push(e);
                }
            }
        });
    };
    ArtListCtlComponent.prototype.openArticle = function (articleId) {
        var specs = 'width=1200,height=1200';
        var url = '/article/' + articleId;
        window.open(url, '', specs);
    };
    ArtListCtlComponent.prototype.activeArt = function (id) {
        var _this = this;
        this._articleService.activeArt(id).subscribe(function (art) {
            _this.getAllArt();
        });
    };
    ArtListCtlComponent.prototype.deActiveArt = function (id) {
        var _this = this;
        this._articleService.deactivateArticle(id).subscribe(function (art) {
            _this.getAllArt();
        });
    };
    ArtListCtlComponent = __decorate([
        core_1.Component({
            selector: 'art-list-clt',
            templateUrl: 'client/dev/app/components/back-end/article/templates/article-list.html',
            directives: [router_1.ROUTER_DIRECTIVES, primeng_1.Paginator, common_1.FORM_DIRECTIVES, primeng_2.DataTable, primeng_2.Column, primeng_2.Header, primeng_2.Footer],
            providers: [article_1.ArticleService, pager_1.PagerService]
        }), 
        __metadata('design:paramtypes', [article_1.ArticleService, pager_1.PagerService, router_1.Router])
    ], ArtListCtlComponent);
    return ArtListCtlComponent;
})();
exports.ArtListCtlComponent = ArtListCtlComponent;
//# sourceMappingURL=article-list-clt.js.map