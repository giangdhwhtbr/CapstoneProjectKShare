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
var header_1 = require('../shared/header');
var footer_1 = require('../shared/footer');
var sidebar_1 = require('../shared/sidebar');
var friend_list_1 = require('../shared/friend-list');
var RequestSearchClientComponent = (function () {
    function RequestSearchClientComponent(_requestService, router, rParam) {
        this._requestService = _requestService;
        this.router = router;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.id = rParam.getParam('id');
        this.type = rParam.getParam('type');
    }
    RequestSearchClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.type);
        //get request from children category
        if (this.type === "subcategory") {
            this._requestService.getRequestByKnowledgeId(this.id).subscribe(function (requests) {
                //format date
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
        }
        //get request from parent category
        if (this.type === "category") {
            this._requestService.getKnowledgeByParent(this.id).subscribe(function (knowledges) {
                var a = [];
                _this.knowledges = knowledges;
                for (var i = 0; i < _this.knowledges.length; i++) {
                    _this._requestService.getRequestByKnowledgeId(_this.knowledges[i]._id).subscribe(function (requests) {
                        //for each child knowledge get requests
                        for (var j = 0; j < requests.length; j++) {
                            a.push(requests[j]);
                        }
                        _this.requests = a;
                    });
                }
            }, function (Error) {
                console.log(Error);
            });
        }
    };
    RequestSearchClientComponent = __decorate([
        core_1.Component({
            selector: 'request-search-cli',
            templateUrl: 'client/dev/kshare/templates/request-cli/request-search-cli.html',
            styleUrls: ['client/dev/kshare/styles/request-list-cli.css'],
            directives: [header_1.HeaderComponent,
                footer_1.FooterComponent,
                sidebar_1.SideBarComponent,
                friend_list_1.FriendListComponent]
        }), 
        __metadata('design:paramtypes', [requests_service_1.RequestService, router_1.Router, router_1.RouteSegment])
    ], RequestSearchClientComponent);
    return RequestSearchClientComponent;
}());
exports.RequestSearchClientComponent = RequestSearchClientComponent;
