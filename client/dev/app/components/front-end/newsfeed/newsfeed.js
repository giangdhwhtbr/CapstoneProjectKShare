var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 5/18/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var private_chat_1 = require('./../../shared/private-chat');
var tag_1 = require('../tag/tag');
var topArticle_1 = require('./topArticle');
var NewsFeedComponent = (function () {
    function NewsFeedComponent(_userService, _requestService, _articleService, router) {
        this._userService = _userService;
        this._requestService = _requestService;
        this._articleService = _articleService;
        this.router = router;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.height = 400;
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
        if (this.userToken === null) {
            this.router.navigateByUrl('/');
        }
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
        this.countA1 = 5;
        this.countR1 = 5;
        this.countA2 = 5;
        this.countR2 = 5;
        this.records = [];
        this.getRequests();
        // $(window).on("scroll", () => {
        //     var scrollHeight = $(document).height();
        //     var scrollPosition = $(window).height() + $(window).scrollTop();
        //     if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        //         setTimeout(() => {
        //             this.seeMore();
        //         }, 1000);
        //         this.height += 30;
        //     }
        // });
        $('.parallax').parallax();
    };
    NewsFeedComponent.prototype.seeMore = function () {
        this.countR1 = this.countR1 + 5;
        this.countA1 = this.countA1 + 5;
        this.getRequests();
        this.getArticles();
    };
    NewsFeedComponent.prototype.getRequests = function () {
        var _this = this;
        this._userService.getUserByUserName(this.userToken).subscribe(function (user) {
            //get onwknowledgeId of user
            _this._requestService.getRequestByUserTags(user.ownKnowledgeIds, _this.countR1).subscribe(function (requests) {
                //if there is no request which has tagid same as onwknowledgeId
                if (requests.length === 0 || user.ownKnowledgeIds.length === 0) {
                    _this._requestService.getRequestExceptUserTags(user.ownKnowledgeIds, _this.countR2).subscribe(function (requests) {
                        if (requests.length <= 0) {
                        }
                        else {
                            for (var i = 0; i < requests.length; i++) {
                                //get summary
                                var html = requests[i].description;
                                var div = document.createElement("div");
                                div.innerHTML = html;
                                var text = div.textContent || div.innerText || "";
                                requests[i].description = text;
                                // push each records to records array
                                _this.records.push(requests[i]);
                            }
                            _this.countR2 = _this.countR2 + 5;
                        }
                    });
                }
                else {
                    for (var i = 0; i < requests.length; i++) {
                        //get summary
                        var html = requests[i].description;
                        var div = document.createElement("div");
                        div.innerHTML = html;
                        var text = div.textContent || div.innerText || "";
                        requests[i].description = text;
                        // push each records to records array
                        _this.records.push(requests[i]);
                    }
                }
            });
        });
    };
    NewsFeedComponent.prototype.getArticles = function () {
        var _this = this;
        this._userService.getUserByUserName(this.userToken).subscribe(function (user) {
            //get onwknowledgeId of user
            _this._articleService.getArticlesByUserTags(user.ownKnowledgeIds, _this.countA1).subscribe(function (articles) {
                //if there is no articles which has tagid same as onwknowledgeId
                if (articles.length === 0 || user.ownKnowledgeIds.length === 0) {
                    _this._articleService.getArticleExceptUserTags(user.ownKnowledgeIds, _this.countA2).subscribe(function (articles) {
                        if (articles.length <= 0) {
                        }
                        else {
                            for (var i = 0; i < articles.length; i++) {
                                //get summary
                                var html = articles[i].content;
                                var div = document.createElement("div");
                                div.innerHTML = html;
                                var text = div.textContent || div.innerText || "";
                                articles[i].content = text;
                                // push each records to records array
                                _this.records.push(articles[i]);
                            }
                            _this.countA2 = _this.countA2 + 5;
                        }
                    });
                }
                else {
                    for (var i = 0; i < articles.length; i++) {
                        //get summary
                        var html = articles[i].content;
                        var div = document.createElement("div");
                        div.innerHTML = html;
                        var text = div.textContent || div.innerText || "";
                        articles[i].content = text;
                        // push each records to records array
                        _this.records.push(articles[i]);
                    }
                }
            });
        });
    };
    NewsFeedComponent = __decorate([
        core_1.Component({
            selector: 'news-feed',
            templateUrl: 'client/dev/app/components/front-end/newsfeed/templates/newsfeed.html',
            styleUrls: ['client/dev/app/components/front-end/newsfeed/styles/newsfeed.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                private_chat_1.PrivateChatComponent,
                tag_1.listTagComponent,
                topArticle_1.topArticlesComponent
            ]
        })
    ], NewsFeedComponent);
    return NewsFeedComponent;
})();
exports.NewsFeedComponent = NewsFeedComponent;
//# sourceMappingURL=newsfeed.js.map