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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var requests_service_1 = require('../../../dashboard/services/requests-service');
var offers_service_1 = require('../../../dashboard/services/offers-service');
var knowledge_service_1 = require('../../../dashboard/services/knowledge-service');
var header_1 = require('../shared/header');
var footer_1 = require('../shared/footer');
var sidebar_1 = require('../shared/sidebar');
var friend_list_1 = require('../shared/friend-list');
var offer_create_1 = require('../../../dashboard/components/offer/offer-create');
var RequestDetailClientComponent = (function () {
    function RequestDetailClientComponent(_requestService, _offerService, router, _knowledgeService, rParam) {
        this._requestService = _requestService;
        this._offerService = _offerService;
        this.router = router;
        this._knowledgeService = _knowledgeService;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.id = rParam.get('id');
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
            _this.createdAt = formatDate(request.createdAt);
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
        //console offers
        //console.log(this.offers);
    };
    RequestDetailClientComponent.prototype.deleteRequest = function (id) {
        console.log(id);
        this._requestService
            .deleteRequestById(this.id)
            .subscribe(function () {
            console.log("delete sucess");
        });
        window.location.href = '/requests';
    };
    RequestDetailClientComponent = __decorate([
        core_1.Component({
            selector: 'request-detail-cli',
            templateUrl: 'client/dev/kshare/templates/request-cli/request-detail-cli.html',
            styleUrls: [],
            directives: [
                header_1.HeaderComponent,
                footer_1.FooterComponent,
                sidebar_1.SideBarComponent,
                friend_list_1.FriendListComponent,
                router_1.ROUTER_DIRECTIVES,
                offer_create_1.CreateOfferComponent]
        }), 
        __metadata('design:paramtypes', [requests_service_1.RequestService, offers_service_1.OfferService, router_1.Router, knowledge_service_1.KnowledgeService, router_1.RouteParams])
    ], RequestDetailClientComponent);
    return RequestDetailClientComponent;
}());
exports.RequestDetailClientComponent = RequestDetailClientComponent;
