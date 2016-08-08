var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var requests_1 = require('../../../services/requests');
var request_update_1 = require('./request-update');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var RequestListComponent = (function () {
    function RequestListComponent(fb, _requestService, _knowledgeService, _authService) {
        var _this = this;
        this._requestService = _requestService;
        this._knowledgeService = _knowledgeService;
        this._authService = _authService;
        this.pageTitle = 'Request List';
        this.filter = '';
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
        this.requestForm = fb.group({
            "knowledgeId": [""],
            "title": [""],
            "description": [""],
            "user": [""]
        });
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
    }
    RequestListComponent.prototype.addRequest = function (request) {
        var _this = this;
        this._requestService.addRequest(request).subscribe(function (request) {
            _this.requests.push(request);
            _this.requestForm.controls["title"].updateValue("");
            _this.requestForm.controls["description"].updateValue("");
            _this.requestForm.controls["knowledgeId"].updateValue("");
        }, function (error) {
            console.log(error.text());
        });
    };
    RequestListComponent.prototype.ngOnInit = function () {
        this.getAllRequest();
    };
    RequestListComponent.prototype.deactivateRequest = function (id) {
        var _this = this;
        this._requestService
            .changeStatusRequest(id)
            .subscribe(function (r) {
            console.log("deactivate sucess");
            _this.getAllRequest();
        });
    };
    RequestListComponent.prototype.activateRequest = function (request) {
        var _this = this;
        request.status = 'pending';
        this._requestService
            .updateRequest(request)
            .subscribe(function (r) {
            _this.getAllRequest();
        });
    };
    RequestListComponent.prototype.getAllRequest = function () {
        var _this = this;
        this._requestService.getAllRequestAdmin().subscribe(function (requests) {
            for (var i = 0; i < requests.length; i++) {
                requests[i].createdAt = new Date(requests[i].createdAt);
                requests[i].modifiedDate = new Date(requests[i].modifiedDate);
                if (requests[i].status === 'active' || requests[i].status === 'pending') {
                    requests[i].status = "Đang chờ";
                }
                else if (requests[i].status === 'deactive') {
                    requests[i].status = "Kết thúc";
                }
                else if (requests[i].status === 'accepted') {
                    requests[i].status = "Được chấp nhận";
                }
            }
            _this.requests = requests;
        });
    };
    RequestListComponent = __decorate([
        core_1.Component({
            selector: 'request-list',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
            directives: [request_update_1.UpdateRequestComponent, router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, common_1.FORM_DIRECTIVES],
            providers: [requests_1.RequestService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService))
    ], RequestListComponent);
    return RequestListComponent;
})();
exports.RequestListComponent = RequestListComponent;
//# sourceMappingURL=requests-list.js.map