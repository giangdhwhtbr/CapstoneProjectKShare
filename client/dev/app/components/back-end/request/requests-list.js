"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var knowledge_1 = require('../../../services/knowledge');
var requests_1 = require('../../../services/requests');
var auth_1 = require('../../../services/auth');
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
        var _this = this;
        this._requestService.getAllRequests().subscribe(function (requests) {
            var formatDate = function (date) {
                if (date) {
                    var newDate, day, month, year;
                    year = date.substr(0, 4);
                    month = date.substr(5, 2);
                    day = date.substr(8, 2);
                    return newDate = day + '/' + month + '/' + year;
                }
            };
            for (var i = 0; i < requests.length; i++) {
                requests[i].createdAt = formatDate(requests[i].createdAt);
                requests[i].modifiedDate = formatDate(requests[i].modifiedDate);
            }
            _this.requests = requests;
        });
    };
    RequestListComponent.prototype.deleteRequest = function (id) {
        var _this = this;
        this._requestService
            .deleteRequest(id)
            .subscribe(function () {
            _this.requests.forEach(function (t, i) {
                if (t._id === id)
                    return _this.requests.splice(i, 1);
            });
        });
    };
    RequestListComponent = __decorate([
        core_1.Component({
            selector: 'request-list',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
            directives: [request_update_1.UpdateRequestComponent, router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [requests_1.RequestService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, requests_1.RequestService, knowledge_1.KnowledgeService, auth_1.AuthService])
    ], RequestListComponent);
    return RequestListComponent;
}());
exports.RequestListComponent = RequestListComponent;
//# sourceMappingURL=requests-list.js.map