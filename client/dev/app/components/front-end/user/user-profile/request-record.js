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
//services
var users_1 = require('../../../../services/users');
var knowledge_1 = require('../../../../services/knowledge');
var RequestRecordComponent = (function () {
    function RequestRecordComponent(router, route, _userService, _knowledgeService) {
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._knowledgeService = _knowledgeService;
    }
    RequestRecordComponent.prototype.ngOnInit = function () {
        //this.createdAt = this.formatDate(createdAt);
        this.id = this.knowledgeId;
        this.getKnowledgeNameOfRequest();
        if (this.status === 'pending') {
            this.status = 'Đang chờ';
        }
        else {
            this.status = 'Đã được chấp nhận';
        }
    };
    RequestRecordComponent.prototype.getKnowledgeNameOfRequest = function () {
        var _this = this;
        //get back.knowledge name by knowledgeId
        this._knowledgeService.findKnowledgeById(this.knowledgeId).subscribe(function (knowledge) {
            _this.knowledgeName = knowledge.name;
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.Input('title'), 
        __metadata('design:type', String)
    ], RequestRecordComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input('description'), 
        __metadata('design:type', String)
    ], RequestRecordComponent.prototype, "description", void 0);
    __decorate([
        core_1.Input('createdAt'), 
        __metadata('design:type', String)
    ], RequestRecordComponent.prototype, "createdAt", void 0);
    __decorate([
        core_1.Input('knowledgeId'), 
        __metadata('design:type', String)
    ], RequestRecordComponent.prototype, "knowledgeId", void 0);
    __decorate([
        core_1.Input('status'), 
        __metadata('design:type', String)
    ], RequestRecordComponent.prototype, "status", void 0);
    __decorate([
        core_1.Input('requestId'), 
        __metadata('design:type', String)
    ], RequestRecordComponent.prototype, "requestId", void 0);
    RequestRecordComponent = __decorate([
        core_1.Component({
            selector: 'request-record',
            templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/request-record.html',
            styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, users_1.UserService, knowledge_1.KnowledgeService])
    ], RequestRecordComponent);
    return RequestRecordComponent;
})();
exports.RequestRecordComponent = RequestRecordComponent;
//# sourceMappingURL=request-record.js.map