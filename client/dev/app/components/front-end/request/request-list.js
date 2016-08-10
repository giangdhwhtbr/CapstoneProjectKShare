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
var tag_1 = require('../../../services/tag');
var friend_list_1 = require('../shared/friend-list');
var request_create_1 = require('../../back-end/request/request-create');
var request_category_1 = require('./request-category');
var auth_1 = require('../../../services/auth');
var router_2 = require("@angular/router");
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
    RequestListClientComponent.prototype.ngAfterViewChecked = function () {
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
                        tags: [],
                        sum: ''
                    });
                    requests[i].createdAt = new Date(requests[i].createdAt);
                    requests[i].modifiedDate = new Date(requests[i].modifiedDate);
                    requests[i].link = requests[i]._id + '/info';
                    if (requests[i].status === 'pending') {
                        requests[i].status = 'Đang chờ';
                    }
                    //get summary
                    var html = requests[i].description;
                    var div = document.createElement("div");
                    div.innerHTML = html;
                    var text = div.textContent || div.innerText || "";
                    _this._data[i].sum = text.substr(0, 100) + " ......";
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
                request_category_1.RequestCategoryComponent
            ],
            providers: [tag_1.TagService]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, tag_1.TagService, auth_1.AuthService, router_2.Router])
    ], RequestListClientComponent);
    return RequestListClientComponent;
})();
exports.RequestListClientComponent = RequestListClientComponent;
//# sourceMappingURL=request-list.js.map