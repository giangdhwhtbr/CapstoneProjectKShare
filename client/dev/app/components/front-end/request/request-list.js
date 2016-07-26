var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var friend_list_1 = require('../shared/friend-list');
var request_create_1 = require('../../back-end/request/request-create');
var request_search_1 = require('./request-search');
var ng2_pagination_1 = require('ng2-pagination');
var RequestListClientComponent = (function () {
    function RequestListClientComponent(_requestService, _auth, router) {
        this._requestService = _requestService;
        this._auth = _auth;
        this.router = router;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.configRq = {
            id: 'rq',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.configRs = {
            id: 'rs',
            itemsPerPage: 10,
            currentPage: 1
        };
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    RequestListClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hide = false;
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
                requests[i].link = requests[i]._id + '/info';
            }
            _this.requests = requests;
        });
    };
    RequestListClientComponent.prototype.search = function (search) {
        var _this = this;
        this._requestService.searchRequest(search).subscribe(function (requests) {
            _this.searchs = requests;
            _this.hide = true;
        });
    };
    RequestListClientComponent = __decorate([
        core_1.Component({
            selector: 'request-list-cli',
            templateUrl: 'client/dev/app/components/front-end/request/templates/request-list.html',
            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
            directives: [
                ng2_pagination_1.PaginationControlsCmp,
                router_1.ROUTER_DIRECTIVES,
                friend_list_1.FriendListComponent,
                request_create_1.CreateRequestComponent,
                request_search_1.RequestCategoryComponent
            ],
            providers: [ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe]
        })
    ], RequestListClientComponent);
    return RequestListClientComponent;
})();
exports.RequestListClientComponent = RequestListClientComponent;
//# sourceMappingURL=request-list.js.map