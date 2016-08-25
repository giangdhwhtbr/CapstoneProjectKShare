var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//Component
var request_record_1 = require('./request-record');
var kspace_list_1 = require('./kspace-list');
var article_list_1 = require('./article-list');
var user_profile_bar_1 = require('./user-profile-bar');
var private_chat_1 = require('./../../../shared/private-chat');
//services
var users_1 = require('../../../../services/users');
var knowledge_1 = require('../../../../services/knowledge');
var kspace_1 = require('../../../../services/kspace');
var article_1 = require('../../../../services/article');
var ng2_pagination_1 = require('ng2-pagination');
var UserProfileComponent = (function () {
    function UserProfileComponent(router, route, _userService, _kSpaceService, _articleService, _knowledgeService) {
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._kSpaceService = _kSpaceService;
        this._articleService = _articleService;
        this._knowledgeService = _knowledgeService;
        this.isExist = true;
        this.requests = [];
        this.num = 5;
        this.height = 400;
        this.kspaceList = [];
        this.articleList = [];
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
            id: 'Art',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.maxSizeKp = 7;
        this.directionLinksKp = true;
        this.autoHideKp = false;
        this.configKp = {
            id: 'Kp',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
            _this._userService.checkUserExist(_this.name).subscribe(function (isExist) {
                if (isExist._body === '0') {
                    _this.isExist = false;
                    _this.router.navigateByUrl('/error');
                }
                else {
                    _this.isExist = true;
                }
                if (_this.isExist = true) {
                    _this.getRequestByUser();
                    _this._articleService.getArtsByUsername(_this.name).subscribe(function (arts) {
                        //filter article
                        if (_this.userToken) {
                            _this.articleList = arts;
                        }
                        else {
                            _this.articleList = _this.filterArticle(arts);
                        }
                        _this._kSpaceService.getKspaceProfile(_this.name).subscribe(function (kspaces) {
                            _this.kspaceList = kspaces;
                            _this._userService.getUserByUserName(_this.name).subscribe(function (user) {
                                _this.userProfile = user;
                            }, function (error) {
                                console.log(error);
                            });
                        });
                    });
                }
            }, function (error) {
                console.log(error);
            });
        });
        $('ul.tabs').tabs();
    };
    UserProfileComponent.prototype.onPageChangeReq = function (number) {
        this.configReq.currentPage = number;
    };
    UserProfileComponent.prototype.onPageChangeArt = function (number) {
        this.configArt.currentPage = number;
    };
    UserProfileComponent.prototype.onPageChangeKp = function (number) {
        this.configKp.currentPage = number;
    };
    UserProfileComponent.prototype.filterArticle = function (listArt) {
        for (var i = listArt.length - 1; i >= 0; i--) {
            if (listArt[i].status === 'private') {
                listArt.splice(i, 1);
            }
        }
        return listArt;
    };
    UserProfileComponent.prototype.getKspaceProfile = function () {
        var _this = this;
        this._kSpaceService.getKspaceProfile(this.name).subscribe(function (kspaces) {
            _this.kspaceList = kspaces;
        });
    };
    UserProfileComponent.prototype.seeMore = function () {
        this.num = this.num + 5;
        this.getRequestByUser();
    };
    UserProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserProfileComponent.prototype.getRequestByUser = function () {
        var _this = this;
        this._userService
            .getRequestByUser(this.name, this.num)
            .subscribe(function (requests) {
            for (var i = 0; i < requests.length; i++) {
                _this.requests.push(requests[i]);
            }
        });
    };
    UserProfileComponent.prototype.getKnowledgeNameOfRequest = function (knowledgeId) {
        var _this = this;
        //get back.knowledge name by knowledgeId
        this._knowledgeService.findKnowledgeById(knowledgeId).subscribe(function (knowledge) {
            _this.knowledgeName = knowledge.name;
        }, function (error) {
            console.log(error);
        });
    };
    UserProfileComponent.prototype.checkUserExist = function () {
        var _this = this;
        this._userService.checkUserExist(this.name).subscribe(function (isExist) {
            if (isExist._body === '0') {
                _this.isExist = false;
            }
            else {
                _this.isExist = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    UserProfileComponent = __decorate([
        core_1.Component({
            selector: 'user-profile',
            templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/user-profile.html',
            styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                request_record_1.RequestRecordComponent,
                user_profile_bar_1.UserProfileBarComponent,
                private_chat_1.PrivateChatComponent,
                kspace_list_1.KspaceListComponent,
                article_list_1.ArticleListComponent,
                ng2_pagination_1.PaginationControlsCmp
            ],
            providers: [ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, users_1.UserService, kspace_1.KSpaceService, article_1.ArticleService, knowledge_1.KnowledgeService])
    ], UserProfileComponent);
    return UserProfileComponent;
})();
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=user-profile.js.map