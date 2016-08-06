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
var tag_1 = require('../../../services/tag');
var friend_list_1 = require('../shared/friend-list');
var request_create_1 = require('../../back-end/request/request-create');
var request_search_1 = require('./request-search');
var RequestListClientComponent = (function () {
    function RequestListClientComponent(_requestService, _tagService, _auth, router) {
        this._requestService = _requestService;
        this._tagService = _tagService;
        this._auth = _auth;
        this.router = router;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.isExistRecord = false;
        this.arrIds = [];
        this._data = [];
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    RequestListClientComponent.prototype.ngOnInit = function () {
        // this.hide = false;
        this.getAllRequests();
    };
    RequestListClientComponent.prototype.getAllRequests = function () {
        var _this = this;
        this._data = [];
        this._requestService.getAllRequests().subscribe(function (requests) {
            //get all tag's ids of list request
            for (var _i = 0; _i < requests.length; _i++) {
                var e = requests[_i];
                for (var _a = 0, _b = e.tags; _a < _b.length; _a++) {
                    var t = _b[_a];
                    var i = _this.arrIds.indexOf(t);
                    if (i < 0) {
                        _this.arrIds.push(t);
                    }
                }
            }
            //get all tag relate to ids
            _this._tagService.getTagsByIds(_this.arrIds).subscribe(function (tags) {
                for (var i = 0; i < requests.length; i++) {
                    _this._data.push({
                        req: requests[i],
                        tags: []
                    });
                    requests[i].createdAt = new Date(requests[i].createdAt);
                    requests[i].modifiedDate = new Date(requests[i].modifiedDate);
                    requests[i].link = requests[i]._id + '/info';
                    if (requests[i].status === 'pending') {
                        requests[i].status = 'Đang chờ';
                    }
                    for (var _i = 0; _i < tags.length; _i++) {
                        var t = tags[_i];
                        if (requests[i].tags.indexOf(t._id) > -1) {
                            _this._data[i].tags.push(t);
                        }
                    }
                }
                console.log(_this._data);
                _this.requests = requests;
            });
        });
    };
    RequestListClientComponent.prototype.search = function (search) {
        var _this = this;
        if (search === '') {
            this.isExistRecord = false;
            this.getAllRequests();
        }
        else {
            this._requestService.searchRequest(search).subscribe(function (requests) {
                _this.arrIds = [];
                //get all tag's ids of list request
                for (var _i = 0; _i < requests.length; _i++) {
                    var e = requests[_i];
                    for (var _a = 0, _b = e.tags; _a < _b.length; _a++) {
                        var t = _b[_a];
                        var i = _this.arrIds.indexOf(t);
                        if (i < 0) {
                            _this.arrIds.push(t);
                        }
                    }
                }
                //get all tag relate to ids
                _this._tagService.getTagsByIds(_this.arrIds).subscribe(function (tags) {
                    _this._data = [];
                    for (var i = 0; i < requests.length; i++) {
                        _this._data.push({
                            req: requests[i],
                            tags: []
                        });
                        requests[i].createdAt = new Date(requests[i].createdAt);
                        if (requests[i].status === 'pending') {
                            requests[i].status = 'Đang chờ';
                        }
                        for (var _i = 0; _i < tags.length; _i++) {
                            var t = tags[_i];
                            if (requests[i].tags.indexOf(t._id) > -1) {
                                _this._data[i].tags.push(t);
                            }
                        }
                    }
                    if (requests.length === 0) {
                        _this.isExistRecord = true;
                    }
                    else {
                        _this.isExistRecord = false;
                    }
                    _this.requests = requests;
                });
            });
        }
    };
    RequestListClientComponent = __decorate([
        core_1.Component({
            selector: 'request-list-cli',
            templateUrl: 'client/dev/app/components/front-end/request/templates/request-list.html',
            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                friend_list_1.FriendListComponent,
                request_create_1.CreateRequestComponent,
                request_search_1.RequestCategoryComponent
            ],
            providers: [tag_1.TagService]
        })
    ], RequestListClientComponent);
    return RequestListClientComponent;
})();
exports.RequestListClientComponent = RequestListClientComponent;
//# sourceMappingURL=request-list.js.map