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
var requests_service_1 = require('../../../dashboard/services/requests-service');
var knowledge_service_1 = require('../../../dashboard/services/knowledge-service');
var header_1 = require('../shared/header');
var footer_1 = require('../shared/footer');
var sidebar_1 = require('../shared/sidebar');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var RequestUpdateClientComponent = (function () {
    function RequestUpdateClientComponent(fb, _requestService, router, rParam, _knowledgeService) {
        this._requestService = _requestService;
        this.router = router;
        this._knowledgeService = _knowledgeService;
        this.id = rParam.getParam('id');
        this.updateRequestFormCli = fb.group({
            "_id": [""],
            "title": [""],
            "description": [""],
            "knowledgeId": [""]
        });
    }
    RequestUpdateClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all knowledge
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
        });
        this._requestService.getRequestById(this.id).subscribe(function (request) {
            _this.request = request;
            _this.title = request.title;
            _this.description = request.description;
            _this._id = request._id;
        }, function (error) {
            console.log(error.text());
        });
    };
    RequestUpdateClientComponent.prototype.updateRequest = function (request) {
        this._requestService.updateRequest(request).subscribe(function (request) {
            console.log('update successed');
        }, function (error) {
            console.log(error.text());
        });
        //window.location.href = '/kshare/requests/'+this.id;
    };
    RequestUpdateClientComponent = __decorate([
        core_1.Component({
            selector: 'request-update-cli',
            templateUrl: 'client/dev/kshare/templates/request-cli/request-update-cli.html',
            styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, sidebar_1.SideBarComponent, footer_1.FooterComponent, header_1.HeaderComponent]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_service_1.RequestService)),
        __param(4, core_1.Inject(knowledge_service_1.KnowledgeService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, requests_service_1.RequestService, router_1.Router, router_1.RouteSegment, knowledge_service_1.KnowledgeService])
    ], RequestUpdateClientComponent);
    return RequestUpdateClientComponent;
}());
exports.RequestUpdateClientComponent = RequestUpdateClientComponent;
