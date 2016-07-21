var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
//components
var notification_1 = require('../shared/notification');
var RequestRecordComponent = (function () {
    function RequestRecordComponent(router, route, _userService, _knowledgeService) {
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._knowledgeService = _knowledgeService;
        this.formatDate = function (date) {
            if (date) {
                var newDate, day, month, year;
                year = date.substr(0, 4);
                month = date.substr(5, 2);
                day = date.substr(8, 2);
                return newDate = day + '/' + month + '/' + year;
            }
        };
    }
    RequestRecordComponent.prototype.ngOnInit = function () {
        //this.createdAt = this.formatDate(createdAt);
        this.id = this.knowledgeId;
        console.log(this.id);
        this.getKnowledgeNameOfRequest();
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
        core_1.Input('title')
    ], RequestRecordComponent.prototype, "title");
    __decorate([
        core_1.Input('description')
    ], RequestRecordComponent.prototype, "description");
    __decorate([
        core_1.Input('createdAt')
    ], RequestRecordComponent.prototype, "createdAt");
    __decorate([
        core_1.Input('knowledgeId')
    ], RequestRecordComponent.prototype, "knowledgeId");
    __decorate([
        core_1.Input('status')
    ], RequestRecordComponent.prototype, "status");
    __decorate([
        core_1.Input('requestId')
    ], RequestRecordComponent.prototype, "requestId");
    RequestRecordComponent = __decorate([
        core_1.Component({
            selector: 'request-record',
            templateUrl: 'client/dev/app/components/front-end/user-profile/templates/request-record.html',
            styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                notification_1.PushNotificationComponent
            ]
        })
    ], RequestRecordComponent);
    return RequestRecordComponent;
})();
exports.RequestRecordComponent = RequestRecordComponent;
//# sourceMappingURL=request-record.js.map