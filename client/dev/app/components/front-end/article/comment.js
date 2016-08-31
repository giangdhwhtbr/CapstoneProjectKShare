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
 * Created by Duc Duong on 8/15/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var info_hover_1 = require('../user/user-profile/info-hover');
var commentComponent = (function () {
    function commentComponent(router, route, _artService) {
        this.router = router;
        this.route = route;
        this._artService = _artService;
        this.sendDataToP = new core_1.EventEmitter();
        this.textEdit = "";
        this.isEditing = false;
        this.liked = false;
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');
    }
    commentComponent.prototype.ngOnInit = function () {
        this.textEdit = this.comment.content;
        var i = this.comment.userLiked.indexOf(this.userToken);
        console.log(this.roleToken);
        console.log(this.userToken);
        if (i >= 0) {
            this.liked = true;
        }
    };
    commentComponent.prototype.deleteCmt = function (idCmt) {
        this.sendDataToP.emit([this.comment._id, "delete"]);
    };
    commentComponent.prototype.editCmt = function () {
        if (this.textEdit.length != 0) {
            this.sendDataToP.emit([this.comment._id, "edit", this.textEdit]);
            this.isEditing = false;
        }
    };
    commentComponent.prototype.likeCmt = function () {
        this.sendDataToP.emit([this.comment._id, "like"]);
        this.liked = true;
    };
    commentComponent.prototype.unlikeCmt = function () {
        this.sendDataToP.emit([this.comment._id, "unlike"]);
        this.liked = false;
    };
    commentComponent.prototype.openEditCmt = function () {
        this.isEditing = true;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], commentComponent.prototype, "comment", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], commentComponent.prototype, "author", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], commentComponent.prototype, "sendDataToP", void 0);
    commentComponent = __decorate([
        core_1.Component({
            selector: 'comment',
            templateUrl: 'client/dev/app/components/front-end/article/templates/comment.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/comment.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, info_hover_1.infoHover
            ],
            providers: [article_1.ArticleService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, article_1.ArticleService])
    ], commentComponent);
    return commentComponent;
})();
exports.commentComponent = commentComponent;
//# sourceMappingURL=comment.js.map