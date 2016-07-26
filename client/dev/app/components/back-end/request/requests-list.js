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
var requests_1 = require('../../../services/requests');
var auth_1 = require('../../../services/auth');
var request_create_1 = require('./request-create');
var offer_create_1 = require('../../front-end/offer/offer-create');
var request_update_1 = require('./request-update');
var RequestListComponent = (function () {
    function RequestListComponent(_requestService, _auth, router) {
        this._requestService = _requestService;
        this._auth = _auth;
        this.router = router;
        this.pageTitle = 'Request List';
    }
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
    RequestListComponent.prototype.deleteRequest = function (request) {
        var _this = this;
        console.log(request);
        this._requestService
            .deleteRequest(request)
            .subscribe(function () {
            console.log("delete successful");
        });
        //refresh page
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
    RequestListComponent = __decorate([
        core_1.Component({
            selector: 'request-list',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-list.html',
            styleUrls: [
                'client/dev/asserts/css/backend-styles.css',
                'client/dev/app/components/back-end/request/templates/request.css'
            ],
            directives: [
                offer_create_1.CreateOfferComponent,
                request_update_1.UpdateRequestComponent,
                request_create_1.CreateRequestComponent,
                offer_create_1.CreateOfferComponent,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, auth_1.AuthService, router_1.Router])
    ], RequestListComponent);
    return RequestListComponent;
}());
exports.RequestListComponent = RequestListComponent;
//# sourceMappingURL=requests-list.js.map