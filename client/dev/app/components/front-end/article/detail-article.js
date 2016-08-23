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
var common_1 = require('@angular/common');
var private_chat_1 = require('./../../shared/private-chat');
var article_1 = require('../../../services/article');
var report_1 = require('../report/report');
var comment_1 = require('./comment');
var tag_1 = require('../tag/tag');
var detailArticleComponent = (function () {
    function detailArticleComponent(fb, router, route, _articleService, _noti) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._articleService = _articleService;
        this._noti = _noti;
        this.canSee = true;
        this.isDeAc = false;
        this.textCmt = "";
        this.cmts = [];
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');
        this.cmtEditForm = fb.group({
            "cntCmt": [""],
            "cmtId": [""]
        });
    }
    detailArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articleService.getArtById(this.id).subscribe(function (art) {
            if ((art.ofUser == _this.userToken && art.status == 'private')
                || (_this.roleToken == 'admin')
                || (_this.roleToken != 'admin' && art.status == 'public')) {
                //check user liked
                var i = art.userLiked.indexOf(_this.userToken);
                if (i >= 0) {
                    _this.liked = true;
                }
                else {
                    _this.liked = false;
                }
                console.log(_this.liked);
                _this.article = art;
                _this.tags = art.tagsFD;
                _this.article.createdAt = new Date(_this.article.createdAt);
                if (art.status == "deactivate") {
                    _this.isDeAc = true;
                }
                for (var _i = 0, _a = _this.article.comments; _i < _a.length; _i++) {
                    var e = _a[_i];
                    _this.cmts.push({
                        cmt: e,
                        isEdit: true
                    });
                }
            }
            else {
                _this.canSee = false;
            }
        });
        $('.modal-trigger').leanModal();
    };
    detailArticleComponent.prototype.openCloseArt = function () {
        $('#mdCfClose').openModal();
    };
    detailArticleComponent.prototype.openRp = function () {
        $('#myModal').openModal();
    };
    detailArticleComponent.prototype.deactivateArticle = function (id) {
        var _this = this;
        if (id) {
            this._articleService.deactivateArticle(id).subscribe(function (mes) {
                var title = 'Một bài viết của bạn đã bị đóng';
                var link = '/article/' + _this.article._id;
                //call function using socket io to send notification
                _this._noti.alertNotification(title, _this.article.ofUser, link);
                //save notification to database
                _this._noti.createNotification(title, _this.article.ofUser, link).subscribe(function (notification) {
                    console.log('create a notification to ' + _this.article.ofUser);
                });
                Materialize.toast('Đã đóng bài viết!', 4000);
                _this.isDeAc = true;
                $('#clsArtBtn').hide();
            });
        }
    };
    detailArticleComponent.prototype.ngAfterViewChecked = function () {
        if (this.article != undefined) {
            $('.bodyArt').html(this.article.content);
        }
    };
    detailArticleComponent.prototype.editArt = function (id) {
        this.router.navigateByUrl('/article/edit/' + this.id);
    };
    detailArticleComponent.prototype.postCmt = function () {
        var _this = this;
        this._articleService.addComment(this.id, this.userToken, this.textCmt).subscribe(function (cmts) {
            _this.textCmt = "";
            _this.article.comments = cmts;
        });
    };
    detailArticleComponent.prototype.actionComment = function (data) {
        var _this = this;
        switch (data[1]) {
            case 'delete':
                this._articleService.removeComment(this.id, data[0]).subscribe(function (cmts) {
                    _this.article.comments = cmts;
                    Materialize.toast('Đã xoá bình luận!', 4000);
                });
                break;
            case 'edit':
                this._articleService.editComment(this.id, data[0], data[2]).subscribe(function (cmts) {
                    _this.article.comments = cmts;
                });
                break;
            case 'like':
                this._articleService.likeComment(this.id, data[0], this.userToken).subscribe(function (cmts) {
                    _this.article.comments = cmts;
                });
                break;
            case 'unlike':
                this._articleService.unlikeComment(this.id, data[0], this.userToken).subscribe(function (cmts) {
                    _this.article.comments = cmts;
                });
                break;
            default:
                console.log("action is empty");
        }
    };
    detailArticleComponent.prototype.unlikeArt = function () {
        var _this = this;
        this._articleService.unlikeArt(this.id, this.userToken).subscribe(function (like) {
            _this.article.like = like;
            _this.liked = false;
        });
    };
    detailArticleComponent.prototype.likeArt = function () {
        var _this = this;
        this._articleService.likeArt(this.id, this.userToken).subscribe(function (like) {
            _this.article.like = like;
            _this.liked = true;
        });
    };
    detailArticleComponent = __decorate([
        core_1.Component({
            selector: 'detail-article',
            templateUrl: 'client/dev/app/components/front-end/article/templates/detail-article.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/article.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, report_1.ReportComponent, common_1.FORM_DIRECTIVES, comment_1.commentComponent, tag_1.listTagComponent, private_chat_1.PrivateChatComponent
            ],
            providers: [article_1.ArticleService]
        })
    ], detailArticleComponent);
    return detailArticleComponent;
})();
exports.detailArticleComponent = detailArticleComponent;
//# sourceMappingURL=detail-article.js.map