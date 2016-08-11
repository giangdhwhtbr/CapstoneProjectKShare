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
var pager_1 = require('../../../services/pager');
var request_update_1 = require('./request-update');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var primeng_1 = require('primeng/primeng');
var RequestListComponent = (function () {
    function RequestListComponent(fb, _requestService, _knowledgeService, _pagerService, _authService) {
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
            .updateRequest(request, request.tags, [])
            .subscribe(function (r) {
            _this.getAllRequest();
        });
    };
    RequestListComponent.prototype.getAllRequest = function () {
        var _this = this;
        this.activeRequests = [];
        this.deactiveRequests = [];
        this.acceptepRequests = [];
        this._pagerService.getAPage("request", 0, "pending").subscribe(function (reqs) {
            _this._pagerService.getTotalNum("requesttot", "pending").subscribe(function (num) {
                console.log(reqs);
                for (var i = 0; i < reqs.length; i++) {
                    if (reqs[i].status === 'active' || reqs[i].status === 'pending') {
                        reqs[i].status = "Đang chờ";
                    }
                }
                _this.activeRequests = reqs;
                _this.totalActive = num;
            });
        });
        this._pagerService.getAPage("request", 0, "deactive").subscribe(function (reqs) {
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
        this._pagerService.getAPage("request", 0, "accepted").subscribe(function (reqs) {
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
    RequestListComponent.prototype.paginate1 = function (event) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        //this._pagerService.getAPage("article",event.first,"public").subscribe((deArts)=> {
        //    this.arts=deArts;
        //});
        var _this = this;
        this._pagerService.getAPage("request", event.first, "pending").subscribe(function (reqs) {
            _this.activeRequests = reqs;
        });
    };
    RequestListComponent.prototype.paginate2 = function (event) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        //this._pagerService.getAPage("article",event.first,"public").subscribe((deArts)=> {
        //    this.arts=deArts;
        //});
        var _this = this;
        this._pagerService.getAPage("request", event.first, "deactive").subscribe(function (reqs) {
            _this.deactiveRequests = reqs;
        });
    };
    RequestListComponent.prototype.paginate3 = function (event) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        //this._pagerService.getAPage("article",event.first,"public").subscribe((deArts)=> {
        //    this.arts=deArts;
        //});
        var _this = this;
        this._pagerService.getAPage("request", event.first, "accepted").subscribe(function (reqs) {
            _this.acceptepRequests = reqs;
        });
    };
    RequestListComponent = __decorate([
        core_1.Component({
            selector: 'request-list',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
            directives: [request_update_1.UpdateRequestComponent, router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, common_1.FORM_DIRECTIVES, primeng_1.Paginator],
            providers: [requests_1.RequestService, ng2_pagination_1.PaginationService, pager_1.PagerService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService))
    ], RequestListComponent);
    return RequestListComponent;
})();
exports.RequestListComponent = RequestListComponent;
//# sourceMappingURL=requests-list.js.map