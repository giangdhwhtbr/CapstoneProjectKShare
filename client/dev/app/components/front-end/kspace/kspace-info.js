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
 * Created by GiangDH on 7/9/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var kspace_1 = require('../../../services/kspace');
var ng_semantic_1 = require("ng-semantic");
var KSpaceInfoComponent = (function () {
    function KSpaceInfoComponent(router, route, _kspaceService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._kspaceService = _kspaceService;
        this.accessRoomBtn = 'Access Room';
        this.images = [];
        this.route.params.subscribe(function (params) {
            _this.kspaceId = params['id'];
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
        var url = '/room/' + this.kspaceId;
        window.open(url, name, specs);
    };
    KSpaceInfoComponent = __decorate([
        core_1.Component({
            template: "\n      <div class=\"container mg-top-50\">\n        <h3>{{title}}</h3>\n        {{rateAve}}\n         <sm-rating class=\"massive star\" disable=\"disable\" [initialRating]=\"[rateAve]\"></sm-rating>\n        <br>\n        <button (click)=\"accessRoom()\">{{accessRoomBtn}}</button>\n        <hr>\n        <h3>images</h3>\n        <div *ngFor=\"let img of images\">\n          <h4>{{img.des}}</h4>\n          <img src=\"{{img.url}}\" style=\"background-color: black; border-radius: 10px;\" alt=\"kspace\" width=\"300\" height=\"200\">\n          <br>\n        </div>\n        <div id=\"createReview\">\n            <sm-message *ngIf=\"errorMessage\" class=\"warning\">\n              <message-header>{{errorMessage.header}}</message-header>\n              <message-content>\n                  {{errorMessage.content}}\n              </message-content>\n            </sm-message>\n            <sm-rating class=\"massive star\" (onRate)=\"onReceiveRating($event)\" [maxRating]=\"5\"></sm-rating>\n            <form class=\"ui form\" #reviewForm=\"ngForm\" (ngSubmit)=\"onSubmit(reviewForm.value)\">\n                <textarea  ngControl=\"content\" required ></textarea>\n                <button type=\"submit\">Review</button>\n            </form>\n        </div>\n        <div id=\"reviews\">\n          <div *ngFor=\"let review of reviews\">\n            <sm-segment class=\"raised\">\n              <p>{{review.createdUser}}</p>\n              <p>{{review.content}}</p>\n            </sm-segment>\n          </div>\n        </div>\n      </div>\n    ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                ng_semantic_1.SEMANTIC_COMPONENTS,
                ng_semantic_1.SEMANTIC_DIRECTIVES
            ],
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, kspace_1.KSpaceService])
    ], KSpaceInfoComponent);
    return KSpaceInfoComponent;
})();
exports.KSpaceInfoComponent = KSpaceInfoComponent;
//# sourceMappingURL=kspace-info.js.map