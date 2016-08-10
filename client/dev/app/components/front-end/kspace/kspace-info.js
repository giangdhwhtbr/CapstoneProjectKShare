var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 7/9/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// import { SEMANTIC_COMPONENTS, SEMANTIC_DIRECTIVES } from "ng-semantic";
var KSpaceInfoComponent = (function () {
    function KSpaceInfoComponent(router, route, _kspaceService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._kspaceService = _kspaceService;
        this.accessRoomBtn = 'Access Room';
        this.images = [];
        this.boards = [];
        this.route.params.subscribe(function (params) {
            _this.kspaceId = params['id'];
            _this.lecturer = params['lecturer'];
        });
    }
    KSpaceInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._kspaceService
            .getKSpaceById(this.kspaceId)
            .subscribe(function (kspace) {
            _this.title = kspace.requestTitle;
            _this.reviews = kspace.reviews;
            _this.rateAve = parseInt(kspace.rateAve);
            for (var _i = 0, _a = kspace.chatlog; _i < _a.length; _i++) {
                var log = _a[_i];
                if (log.dataURL) {
                    var data = {
                        des: log.message,
                        url: log.dataURL
                    };
                    _this.images.push(data);
                }
            }
            for (var _b = 0, _c = kspace.boards; _b < _c.length; _b++) {
                var board = _c[_b];
                if (board.dataURL) {
                    var data = {
                        des: board.boardNumber,
                        url: board.dataURL
                    };
                    _this.boards.push(data);
                }
            }
        });
    };
    KSpaceInfoComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (!this.ratePoint) {
            this.errorMessage = {
                header: '',
                content: 'Vui lòng chấm điểm cho bài giảng'
            };
        }
        else {
            var data = {
                id: this.kspaceId,
                createdUser: localStorage.getItem('username'),
                content: value.content,
                rate: this.ratePoint
            };
            this._kspaceService.createReview(data).subscribe(function (reviews) {
                _this.reviews = reviews;
            }, function (error) {
                if (error._body) {
                    console.log(error);
                    error = JSON.parse(error._body);
                    if (error.message) {
                        _this.errorMessage = {
                            header: '',
                            content: error.message
                        };
                    }
                }
            });
        }
    };
    KSpaceInfoComponent.prototype.onReceiveRating = function (event) {
        this.errorMessage = '';
        this.ratePoint = event;
    };
    KSpaceInfoComponent.prototype.accessRoom = function () {
        var specs = 'resizable=yes, fullscreen=yes';
        var name = '_blank';
        var url = '/room/' + this.kspaceId + '/' + this.lecturer;
        window.open(url, name, specs);
    };
    KSpaceInfoComponent = __decorate([
        core_1.Component({
            template: "\n      <div class=\"container mg-top-50\">\n        <h3>{{title}}</h3>\n        {{rateAve}}\n         <sm-rating class=\"massive star\" disable=\"disable\" [initialRating]=\"[rateAve]\"></sm-rating>\n        <br>\n        <button (click)=\"accessRoom()\">{{accessRoomBtn}}</button>\n        <hr>\n        <h3>images</h3>\n        <div *ngFor=\"let img of images\">\n          <h4>{{img.des}}</h4>\n          <img src=\"{{img.url}}\" style=\"background-color: black; border-radius: 10px;\" alt=\"kspace\" width=\"300\" height=\"200\">\n          <br>\n        </div>\n        <hr>\n        <h3>boards</h3>\n        <div *ngFor=\"let board of boards\">\n          <h4>Board {{board.des}}</h4>\n          <img src=\"{{board.url}}\"           style=\"background-color: whitesmoke; border:black; border-weight:1px ;                                                                      border-radius: 10px;\" alt=\"kspace\" width=\"300\" height=\"200\">\n          <br>\n        </div>\n        <div id=\"createReview\">\n            <sm-message *ngIf=\"errorMessage\" class=\"warning\">\n              <message-header>{{errorMessage.header}}</message-header>\n              <message-content>\n                  {{errorMessage.content}}\n              </message-content>\n            </sm-message>\n            <sm-rating class=\"massive star\" (onRate)=\"onReceiveRating($event)\" [maxRating]=\"5\"></sm-rating>\n            <form class=\"ui form\" #reviewForm=\"ngForm\" (ngSubmit)=\"onSubmit(reviewForm.value)\">\n                <textarea  ngControl=\"content\" required ></textarea>\n                <button type=\"submit\">Review</button>\n            </form>\n        </div>\n        <div id=\"reviews\">\n          <div *ngFor=\"let review of reviews\">\n            <sm-segment class=\"raised\">\n              <p>{{review.createdUser}}</p>\n              <p>{{review.content}}</p>\n            </sm-segment>\n          </div>\n        </div>\n      </div>\n    ",
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        })
    ], KSpaceInfoComponent);
    return KSpaceInfoComponent;
})();
exports.KSpaceInfoComponent = KSpaceInfoComponent;
//# sourceMappingURL=kspace-info.js.map