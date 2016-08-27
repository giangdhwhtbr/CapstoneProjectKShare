var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 8/15/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var commentComponent = (function () {
    function commentComponent(router, route, _artService) {
        this.router = router;
        this.route = route;
        this._artService = _artService;
        this.sendDataToP = new core_1.EventEmitter();
        this.textEdit = "";
        this.isEditing = false;
        this.liked = false;
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    commentComponent.prototype.ngOnInit = function () {
        var i = this.comment.userLiked.indexOf(this.userToken);
        if (i >= 0) {
            this.liked = true;
        }
    };
    commentComponent.prototype.deleteCmt = function (idCmt) {
        this.sendDataToP.emit([this.comment._id, "delete"]);
    };
    commentComponent.prototype.editCmt = function () {
        this.sendDataToP.emit([this.comment._id, "edit", this.textEdit]);
        this.isEditing = false;
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
        core_1.Input()
    ], commentComponent.prototype, "comment");
    __decorate([
        core_1.Input()
    ], commentComponent.prototype, "author");
    __decorate([
        core_1.Output()
    ], commentComponent.prototype, "sendDataToP");
    commentComponent = __decorate([
        core_1.Component({
            selector: 'comment',
            templateUrl: 'client/dev/app/components/front-end/article/templates/comment.html',
            styleUrls: ['client/dev/app/components/front-end/article/styles/comment.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [article_1.ArticleService]
        })
    ], commentComponent);
    return commentComponent;
})();
exports.commentComponent = commentComponent;
//# sourceMappingURL=comment.js.map