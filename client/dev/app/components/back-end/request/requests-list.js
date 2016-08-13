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
var filter_1 = require('../shared/filter');
var primeng_1 = require('primeng/primeng');
var RequestListComponent = (function () {
    function RequestListComponent(_requestService, _knowledgeService, _pagerService, _authService) {
        var _this = this;
        this._requestService = _requestService;
        this._knowledgeService = _knowledgeService;
        this._pagerService = _pagerService;
        this._authService = _authService;
        this.pageTitle = 'Request List';
        this.filter = '';
        this.totalActive = 0;
        this.totalDeac = 0;
        this.totalAccepted = 0;
        this.firstPage1 = 0;
        this.firstPage2 = 0;
        this.firstPage3 = 0;
        this.user = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
    }
    RequestListComponent.prototype.ngOnInit = function () {
        this.getAllRequest();
    };
    RequestListComponent.prototype.deactivateRequest = function (id) {
        var _this = this;
        this._requestService
            .changeStatusRequest(id)
            .subscribe(function (r) {
            console.log("deactivate sucess");
            _this.getActiveList();
            _this.getDeactiveList();
        });
    };
    RequestListComponent.prototype.activateRequest = function (request) {
        var _this = this;
        request.status = 'pending';
        this._requestService
            .updateRequest(request, request.tags, [])
            .subscribe(function (r) {
            _this.getActiveList();
            _this.getDeactiveList();
        });
    };
    RequestListComponent.prototype.getActiveList = function () {
        var _this = this;
        this._pagerService.getAPage("request", this.firstPage1, "pending").subscribe(function (reqs) {
            console.log(reqs);
            _this._pagerService.getTotalNum("requesttot", "pending").subscribe(function (num) {
                for (var i = 0; i < reqs.length; i++) {
                    if (reqs[i].status === 'active' || reqs[i].status === 'pending') {
                        reqs[i].status = "Đang chờ";
                    }
                }
                _this.activeRequests = reqs;
                _this.totalActive = num;
            });
        });
    };
    RequestListComponent.prototype.getDeactiveList = function () {
        var _this = this;
        this._pagerService.getAPage("request", this.firstPage2, "deactive").subscribe(function (reqs) {
            console.log(reqs);
            _this._pagerService.getTotalNum("requesttot", "deactive").subscribe(function (num) {
                for (var i = 0; i < reqs.length; i++) {
                    if (reqs[i].status === 'deactive') {
                        reqs[i].status = "Kết thúc";
                    }
                }
                _this.deactiveRequests = reqs;
                _this.totalDeac = num;
            });
        });
    };
    RequestListComponent.prototype.getAcceptedList = function () {
        var _this = this;
        this._pagerService.getAPage("request", this.firstPage3, "accepted").subscribe(function (reqs) {
            _this._pagerService.getTotalNum("requesttot", "accepted").subscribe(function (num) {
                for (var i = 0; i < reqs.length; i++) {
                    if (reqs[i].status === 'accepted') {
                        reqs[i].status = "Được chấp thuận";
                    }
                }
                _this.acceptepRequests = reqs;
                _this.totalAccepted = num;
            });
        });
    };
    RequestListComponent.prototype.getAllRequest = function () {
        this.activeRequests = [];
        this.deactiveRequests = [];
        this.acceptepRequests = [];
        this.getAcceptedList();
        this.getActiveList();
        this.getDeactiveList();
    };
    RequestListComponent.prototype.paginate1 = function (event) {
        var _this = this;
        this._pagerService.getAPage("request", event.first, "pending").subscribe(function (reqs) {
            for (var i = 0; i < reqs.length; i++) {
                if (reqs[i].status === 'active' || reqs[i].status === 'pending') {
                    reqs[i].status = "Đang chờ";
                }
            }
            _this.activeRequests = reqs;
            _this.firstPage1 = event.first;
        });
    };
    RequestListComponent.prototype.paginate2 = function (event) {
        var _this = this;
        this._pagerService.getAPage("request", event.first, "deactive").subscribe(function (reqs) {
            for (var i = 0; i < reqs.length; i++) {
                if (reqs[i].status === 'deactive') {
                    reqs[i].status = "Kết thúc";
                }
            }
            _this.deactiveRequests = reqs;
            _this.firstPage2 = event.first;
        });
    };
    RequestListComponent.prototype.paginate3 = function (event) {
        var _this = this;
        this._pagerService.getAPage("request", event.first, "accepted").subscribe(function (reqs) {
            for (var i = 0; i < reqs.length; i++) {
                if (reqs[i].status === 'accepted') {
                    reqs[i].status = "Được chấp thuận";
                }
            }
            _this.acceptepRequests = reqs;
            _this.firstPage3 = event.first;
        });
    };
    RequestListComponent = __decorate([
        core_1.Component({
            selector: 'request-list',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
            directives: [request_update_1.UpdateRequestComponent, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, primeng_1.Paginator],
            providers: [requests_1.RequestService, pager_1.PagerService],
            pipes: [filter_1.StringFilterPipe]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, knowledge_1.KnowledgeService, pager_1.PagerService, auth_1.AuthService])
    ], RequestListComponent);
    return RequestListComponent;
})();
exports.RequestListComponent = RequestListComponent;
//# sourceMappingURL=requests-list.js.map