var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 7/25/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var listArticleComponent = (function () {
    function listArticleComponent(router, route, _artService) {
        this.router = router;
        this.route = route;
        this._artService = _artService;
    }
    listArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._artService.getAllArts().subscribe(function (arts) {
            _this.listArt = arts;
            for (var _i = 0, _a = _this.listArt; _i < _a.length; _i++) {
                var a = _a[_i];
                a.createdAt = new Date(a.createdAt);
            }
        });
    };
    listArticleComponent = __decorate([
        core_1.Component({
            selector: 'list-article',
            templateUrl: 'client/dev/app/components/front-end/article/templates/list-article.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [article_1.ArticleService]
        })
    ], listArticleComponent);
    return listArticleComponent;
})();
exports.listArticleComponent = listArticleComponent;
//# sourceMappingURL=list-article.js.map