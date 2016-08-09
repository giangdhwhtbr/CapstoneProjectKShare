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
 * Created by Duc Duong on 7/24/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var report_1 = require('../report/report');
var detailArticleComponent = (function () {
    function detailArticleComponent(router, route, _articleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._articleService = _articleService;
        this.canSee = true;
        this.isDeAc = false;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');
    }
    detailArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._articleService.getArtById(this.id).subscribe(function (art) {
            if ((art.ofUser == _this.userToken && art.status == 'private')
                || (_this.roleToken == 'admin')
                || (_this.roleToken != 'admin' && art.status == 'public')) {
                _this.article = art;
                _this.tags = art.tagsFD;
                _this.article.createdAt = new Date(_this.article.createdAt);
                if (art.status == "deactivate") {
                    _this.isDeAc = true;
                }
            }
            else {
                _this.canSee = false;
            }
        });
    };
    detailArticleComponent.prototype.deactivateArticle = function (id) {
        var _this = this;
        if (id) {
            this._articleService.deactivateArticle(id).subscribe(function (mes) {
                $('.messOff').html('<div class="alert alert-success"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Success!</strong> ' + mes.mes + ' </div>');
                _this.isDeAc = true;
                $('#clsArtBtn').hide();
            });
        }
    };
    detailArticleComponent.prototype.ngAfterViewChecked = function () {
        if (this.article != undefined) {
            $('.bodyArt').html(this.article.content);
        }
        $("#btnRp").click(function () {
            $("#btnRp").hide();
        });
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
                router_1.ROUTER_DIRECTIVES, report_1.ReportComponent
            ],
            providers: [article_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, article_1.ArticleService])
    ], detailArticleComponent);
    return detailArticleComponent;
})();
exports.detailArticleComponent = detailArticleComponent;
//# sourceMappingURL=detail-article.js.map