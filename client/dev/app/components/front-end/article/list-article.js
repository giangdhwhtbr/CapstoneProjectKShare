/**
 * Created by Duc Duong on 7/25/2016.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var private_chat_1 = require('./../../shared/private-chat');
var tag_1 = require('../tag/tag');
var info_hover_1 = require('../user/user-profile/info-hover');
var listArticleComponent = (function () {
    function listArticleComponent(router, route, _artService) {
        this.router = router;
        this.route = route;
        this._artService = _artService;
        this.listArt = [];
        this.num = 5;
        this.articles = [];
        this.height = 400;
        this.isExist = true;
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    listArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllArticles();
        $(window).on("scroll", function () {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                setTimeout(function () {
                    _this.seeMore();
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
        this.text = "";
        this._artService.getAllArts(this.num).subscribe(function (arts) {
            if (arts.length == 0) {
            }
            else {
                for (var i = 0; i < arts.length; i++) {
                    _this.listArt.push(arts[i]);
                }
            }
        });
    };
    listArticleComponent.prototype.backToAll = function () {
        this.isExist = true;
        this.num = 5;
        this.getAllArticles();
    };
    listArticleComponent.prototype.searchArticle = function () {
        var _this = this;
        this.num = 5;
        this.listArt = [];
        if (!this.text) {
            this.getAllArticles();
            this.isExist = true;
        }
        else {
            this._artService.searchArticle(this.text).subscribe(function (arts) {
                console.log(arts.length);
                for (var i = 0; i < arts.length; i++) {
                    _this.listArt.push(arts[i]);
                }
                if (arts.length <= 0) {
                    _this.isExist = false;
                }
                else {
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
                tag_1.listTagComponent,
                info_hover_1.infoHover
            ],
            providers: [article_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, article_1.ArticleService])
    ], listArticleComponent);
    return listArticleComponent;
})();
exports.listArticleComponent = listArticleComponent;
//# sourceMappingURL=list-article.js.map