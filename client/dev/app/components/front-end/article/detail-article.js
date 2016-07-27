var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 7/24/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var $ = require('jquery');
var detailArticleComponent = (function () {
    function detailArticleComponent(router, route, _articleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._articleService = _articleService;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    detailArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articleService.getArtById(this.id).subscribe(function (art) {
            _this.article = art;
            _this.tags = art.tagsFD;
            _this.article.createdAt = new Date(_this.article.createdAt);
            console.log(_this.article);
        });
    };
    detailArticleComponent.prototype.ngAfterViewChecked = function () {
        if (this.article != undefined) {
            $('.bodyArt').html(this.article.content);
        }
    };
    detailArticleComponent.prototype.editArt = function (id) {
        this.router.navigateByUrl('/article/edit/' + this.id);
    };
    detailArticleComponent = __decorate([
        core_1.Component({
            selector: 'detail-article',
            templateUrl: 'client/dev/app/components/front-end/article/templates/detail-article.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [article_1.ArticleService]
        })
    ], detailArticleComponent);
    return detailArticleComponent;
})();
exports.detailArticleComponent = detailArticleComponent;
//# sourceMappingURL=detail-article.js.map