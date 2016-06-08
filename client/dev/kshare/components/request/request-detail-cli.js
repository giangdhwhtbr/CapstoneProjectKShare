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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var requests_service_1 = require('../../../dashboard/services/requests-service');
var offers_service_1 = require('../../../dashboard/services/offers-service');
var knowledge_service_1 = require('../../../dashboard/services/knowledge-service');
var kspace_service_1 = require('../../../dashboard/services/kspace-service');
var offer_create_1 = require('../../../dashboard/components/offer/offer-create');
var RequestDetailClientComponent = (function () {
    function RequestDetailClientComponent(_requestService, _offerService, router, _knowledgeService, rParam, _kspaceService) {
        this._requestService = _requestService;
        this._offerService = _offerService;
        this.router = router;
        this._knowledgeService = _knowledgeService;
        this._kspaceService = _kspaceService;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.id = rParam.getParam('id');
    }
    RequestDetailClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get request when load the page
        this._requestService.getRequestById(this.id).subscribe(function (request) {
            var formatDate = function (date) {
                if (date) {
                    var newDate, day, month, year;
                    year = date.substr(0, 4);
                    month = date.substr(5, 2);
                    day = date.substr(8, 2);
                    return newDate = day + '/' + month + '/' + year;
                }
            };
            _this.knowledgeId = request.knowledgeId;
            _this.request = request;
            _this.title = request.title;
            _this.description = request.description;
            _this._id = request._id;
            _this.status = request.status;
            _this.user = request.user;
            _this.createdAt = formatDate(request.createdAt);
            if (_this.status === "deactive") {
                _this.checkDeactive = true;
            }
            //get knowledge name by knowledgeId
            _this._knowledgeService.findKnowledgeById(_this.knowledgeId).subscribe(function (knowledge) {
                _this.knowledge = knowledge;
                _this.knowledgeName = _this.knowledge.name;
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error.text());
        });
        //get offer of the request when load the page
        this._offerService.getOfferByRequestId(this.id).subscribe(function (offers) {
            var formatDate = function (date) {
                if (date) {
                    var newDate, day, month, year;
                    year = date.substr(0, 4);
                    month = date.substr(5, 2);
                    day = date.substr(8, 2);
                    return newDate = day + '/' + month + '/' + year;
                }
            };
            for (var i = 0; i < offers.length; i++) {
                offers[i].createdAt = formatDate(offers[i].createdAt);
            }
            _this.offers = offers;
        }, function (error) {
            console.log(error.text());
        });
    };
    RequestDetailClientComponent.prototype.deactivateRequest = function (id) {
        var _this = this;
        console.log(id);
        this._requestService
            .changeStatusRequest(this.id)
            .subscribe(function (r) {
            console.log("deactivate sucess");
            _this.router.navigateByUrl('/kshare/requests/');
        });
    };
    RequestDetailClientComponent.prototype.addKshare = function (learner, lecturer, requestId, offerId) {
        var _this = this;
        this._kspaceService
            .addKSpace(learner, lecturer, requestId, offerId)
            .subscribe(function (r) {
            console.log(r);
            _this.router.navigateByUrl('/kshare/kspace/' + r._id);
        });
    };
    RequestDetailClientComponent = __decorate([
        core_1.Component({
            selector: 'request-detail-cli',
            templateUrl: 'client/dev/kshare/templates/request-cli/request-detail-cli.html',
            styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
            directives: [router_1.ROUTER_DIRECTIVES,
                offer_create_1.CreateOfferComponent]
        }), 
        __metadata('design:paramtypes', [requests_service_1.RequestService, offers_service_1.OfferService, router_1.Router, knowledge_service_1.KnowledgeService, router_1.RouteSegment, kspace_service_1.KSpaceService])
    ], RequestDetailClientComponent);
    return RequestDetailClientComponent;
}());
exports.RequestDetailClientComponent = RequestDetailClientComponent;
