var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var knowledge_1 = require('../../../services/knowledge');
var requests_1 = require('../../../services/requests');
var auth_1 = require('../../../services/auth');
var pager_1 = require('../../../services/pager');
var request_update_1 = require('./request-update');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var private_chat_1 = require('../../shared/private-chat');
var RequestListComponent = (function () {
    function RequestListComponent(_requestService, _knowledgeService, _pagerService, _authService) {
        var _this = this;
        this._requestService = _requestService;
        this._knowledgeService = _knowledgeService;
        this._pagerService = _pagerService;
        this._authService = _authService;
        this.pageTitle = 'Request List';
        this.filter = '';
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
    }
    RequestListComponent.prototype.ngOnInit = function () {
        this.getAllRequest();
        $('ul.tabs').tabs();
    };
    RequestListComponent.prototype.getAllRequest = function () {
        var _this = this;
        this.activeRequests = [];
        this.deactiveRequests = [];
        this.acceptepRequests = [];
        this._requestService.getAllRequestAdmin().subscribe(function (reqs) {
            for (var _i = 0; _i < reqs.length; _i++) {
                var e = reqs[_i];
                if (e.status == "pending") {
                    e.status = "Đang chờ";
                    _this.activeRequests.push(e);
                }
                else if (e.status == "deactive") {
                    e.status = "Đã đóng";
                    _this.deactiveRequests.push(e);
                }
                else if (e.status == "accepted") {
                    e.status = "Được chấp nhận";
                    _this.acceptepRequests.push(e);
                }
            }
        });
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
            .updateRequest(request, request.tags, [])
            .subscribe(function (r) {
            _this.getAllRequest();
        });
    };
    RequestListComponent = __decorate([
        core_1.Component({
            selector: 'request-list',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
            directives: [private_chat_1.PrivateChatComponent, request_update_1.UpdateRequestComponent, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, primeng_2.Paginator, common_1.FORM_DIRECTIVES, primeng_1.DataTable, primeng_1.Column, primeng_1.Header, primeng_1.Footer],
            providers: [requests_1.RequestService, pager_1.PagerService]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, knowledge_1.KnowledgeService, pager_1.PagerService, auth_1.AuthService])
    ], RequestListComponent);
    return RequestListComponent;
})();
exports.RequestListComponent = RequestListComponent;
//# sourceMappingURL=requests-list.js.map