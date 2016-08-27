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
var ng2_pagination_1 = require('ng2-pagination');
var private_chat_1 = require('./../../shared/private-chat');
var tag_1 = require('../tag/tag');
var RequestCategoryComponent = (function () {
    function RequestCategoryComponent(_requestService, _articleService, router, route) {
        this._requestService = _requestService;
        this._articleService = _articleService;
        this.router = router;
        this.route = route;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.requests = [];
        this.knowledges = [];
        this.arts = [];
        this.maxSizeReq = 7;
        this.directionLinksReq = true;
        this.autoHideReq = false;
        this.configReq = {
            id: 'req',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.maxSizeArt = 7;
        this.directionLinksArt = true;
        this.autoHideArt = false;
        this.configArt = {
            id: 'art',
            itemsPerPage: 10,
            currentPage: 1
        };
    }
    RequestCategoryComponent.prototype.onPageChangeReq = function (number) {
        this.configReq.currentPage = number;
    };
    RequestCategoryComponent.prototype.onPageChangeArt = function (number) {
        this.configArt.currentPage = number;
    };
    RequestCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            var type = params['type'];
            var id = params['id'];
            _this._articleService.getArtByKnwId(id).subscribe(function (arts) {
                _this.arts = arts;
            });
            //get templates from children category
            if (type === "subcategory") {
                _this._requestService.getRequestByKnowledgeId(id).subscribe(function (requests) {
                    if (requests.length == 0) {
                        _this.isExistRecord = true;
                    }
                    else {
                        _this.isExistRecord = false;
                    }
                    for (var i = 0; i < requests.length; i++) {
                        requests[i].createdAt = new Date(requests[i].createdAt);
                        requests[i].modifiedDate = new Date(requests[i].modifiedDate);
                    }
                    _this.requests = requests;
                });
            }
            //get templates from parent category
            if (type === "category") {
                _this._requestService.getKnowledgeByParent(id).subscribe(function (knowledges) {
                    var a = [];
                    _this.knowledges = knowledges;
                    for (var i = 0; i < _this.knowledges.length; i++) {
                        _this._requestService.getRequestByKnowledgeId(_this.knowledges[i]._id).subscribe(function (requests) {
                            //for each child knowledge get requests
                            for (var j = 0; j < requests.length; j++) {
                                a.push(requests[j]);
                            }
                            for (var i = 0; i < a.length; i++) {
                                a[i].createdAt = new Date(requests[i].createdAt);
                                a[i].modifiedDate = new Date(requests[i].modifiedDate);
                                if (requests[i].status === 'pending') {
                                    requests[i].status = 'Đang chờ';
                                }
                            }
                            if (a.length == 0) {
                                _this.isExistRecord = true;
                            }
                            else {
                                _this.isExistRecord = false;
                            }
                            _this.requests = a;
                        });
                    }
                }, function (Error) {
                    console.log(Error);
                });
            }
        });
        $('ul.tabs').tabs();
    };
    RequestCategoryComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RequestCategoryComponent = __decorate([
        core_1.Component({
            selector: 'request-category-cli',
            templateUrl: 'client/dev/app/components/front-end/request/templates/request-category.html',
            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
            directives: [router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, tag_1.listTagComponent, private_chat_1.PrivateChatComponent],
            providers: [article_1.ArticleService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe]
        })
    ], RequestCategoryComponent);
    return RequestCategoryComponent;
})();
exports.RequestCategoryComponent = RequestCategoryComponent;
//# sourceMappingURL=request-category.js.map