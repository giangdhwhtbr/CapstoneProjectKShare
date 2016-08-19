/**
 * Created by Duc Duong on 7/25/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var private_chat_1 = require('./../../shared/private-chat');
var tag_1 = require('../tag/tag');
var listArticleComponent = (function () {
    function listArticleComponent(router, route, _artService) {
        this.router = router;
        this.route = route;
        this._artService = _artService;
        this.listArt = [];
        this.num = 5;
        this.articles = [];
        this.height = 400;
        this.isExist = false;
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    listArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.userToken) {
            this._artService.getAllArts(this.num).subscribe(function (arts) {
                for (var i = 0; i < arts.length; i++) {
                    if (arts[i].status == "private") {
                        arts.splice(i, 1);
                    }
                    _this.listArt.push(arts[i]);
                    console.log(_this.listArt);
                }
                if (!arts) {
                    _this.isExist = false;
                }
            });
        }
        else {
            this.getAllArticles();
        }
        $(window).on("scroll", function () {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                setTimeout(function () {
                    //this.seeMore();
                }, 1000);
                _this.height += 30;
            }
        });
    };
    listArticleComponent.prototype.seeMore = function () {
        this.num = this.num + 5;
        this.getAllArticles();
    };
    listArticleComponent.prototype.getAllArticles = function () {
        var _this = this;
        this._artService.getAllArts(this.num).subscribe(function (arts) {
            for (var i = 0; i < arts.length; i++) {
                if (arts[i].status == "private") {
                    arts.splice(i, 1);
                }
                _this.listArt.push(arts[i]);
            }
            if (!arts) {
                _this.isExist = false;
            }
        });
    };
    listArticleComponent.prototype.searchArticle = function (text) {
        var _this = this;
        this.listArt = [];
        if (!text) {
            this.getAllArticles();
            this.isExist = false;
        }
        else {
            this._artService.searchArticle(text).subscribe(function (arts) {
                for (var i = 0; i < arts.length; i++) {
                    _this.listArt.push(arts[i]);
                }
                if (arts.length <= 0) {
                    _this.isExist = true;
                }
            });
        }
    };
    listArticleComponent = __decorate([
        core_1.Component({
            selector: 'list-article',
            templateUrl: 'client/dev/app/components/front-end/article/templates/list-article.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                private_chat_1.PrivateChatComponent,
                tag_1.listTagComponent
            ],
            providers: [article_1.ArticleService]
        })
    ], listArticleComponent);
    return listArticleComponent;
})();
exports.listArticleComponent = listArticleComponent;
//# sourceMappingURL=list-article.js.map