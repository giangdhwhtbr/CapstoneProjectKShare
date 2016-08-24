var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var private_chat_1 = require('./../../shared/private-chat');
var router_1 = require('@angular/router');
var tag_1 = require('../../../services/tag');
var friend_list_1 = require('../shared/friend-list');
var request_create_1 = require('../../back-end/request/request-create');
var request_category_1 = require('./request-category');
var tag_2 = require('../tag/tag');
var RequestListClientComponent = (function () {
    function RequestListClientComponent(_requestService, _tagService, _auth, router, route) {
        this._requestService = _requestService;
        this._tagService = _tagService;
        this._auth = _auth;
        this.router = router;
        this.route = route;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.isExistRecord = false;
        this.arrIds = [];
        this._data = [];
        this.num = 5;
        this.height = 400;
        this.requests = [];
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    RequestListClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            _this.getAllRequests();
        });
        $(window).on("scroll", function () {
            var scrollHeight = $(document).height();
            var scrollPosition = $(window).height() + $(window).scrollTop();
            if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                setTimeout(function () {
                    _this.seeMore();
                }, 1000);
                _this.height += 30;
            }
        });
    };
    RequestListClientComponent.prototype.seeMore = function () {
        this.num = this.num + 5;
        this.getAllRequests();
    };
    RequestListClientComponent.prototype.backToAll = function () {
        this.isExistRecord = false;
        this.num = 5;
        this.getAllRequests();
    };
    RequestListClientComponent.prototype.getAllRequests = function () {
        var _this = this;
        this.text = "";
        this._requestService.getAllRequests(this.num).subscribe(function (requests) {
            _this.requests = requests;
            for (var i = 0; i < requests.length; i++) {
                _this._data.push({
                    req: requests[i],
                    sum: ''
                });
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
            }
        });
    };
    RequestListClientComponent.prototype.search = function () {
        var _this = this;
        this.num = 5;
        if (this.text === '') {
            this.isExistRecord = false;
            this.getAllRequests();
        }
        else {
            this._requestService.searchRequest(this.text).subscribe(function (requests) {
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
                    //get summary
                    var html = requests[i].description;
                    var div = document.createElement("div");
                    div.innerHTML = html;
                    var text = div.textContent || div.innerText || "";
                    _this._data[i].sum = text.substr(0, 100) + " ......";
                }
                if (requests.length === 0) {
                    _this.isExistRecord = true;
                }
                else {
                    _this.isExistRecord = false;
                }
                _this.requests = requests;
            });
        }
    };
    RequestListClientComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
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
                request_category_1.RequestCategoryComponent,
                tag_2.listTagComponent,
                private_chat_1.PrivateChatComponent
            ],
            providers: [tag_1.TagService]
        })
    ], RequestListClientComponent);
    return RequestListClientComponent;
})();
exports.RequestListClientComponent = RequestListClientComponent;
//# sourceMappingURL=request-list.js.map