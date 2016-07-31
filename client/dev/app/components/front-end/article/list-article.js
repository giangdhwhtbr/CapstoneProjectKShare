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
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, article_1.ArticleService])
    ], listArticleComponent);
    return listArticleComponent;
})();
exports.listArticleComponent = listArticleComponent;
//# sourceMappingURL=list-article.js.map