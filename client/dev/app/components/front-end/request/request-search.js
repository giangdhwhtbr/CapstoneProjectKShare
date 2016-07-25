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
var RequestCategoryComponent = (function () {
    function RequestCategoryComponent(_requestService, router, route) {
        var _this = this;
        this._requestService = _requestService;
        this.router = router;
        this.route = route;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.changeRoute = false;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.type = params['type'];
        });
    }
    RequestCategoryComponent.prototype.ngOnInit = function () {
        this.loadRequest(s);
    };
    RequestCategoryComponent.prototype.loadRequests = function () {
        var _this = this;
        //get templates from children category
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
        //get templates from parent category
        if (this.type === "category") {
            this._requestService.getKnowledgeByParent(this.id).subscribe(function (knowledges) {
                var formatDate = function (date) {
                    if (date) {
                        var newDate, day, month, year;
                        year = date.substr(0, 4);
                        month = date.substr(5, 2);
                        day = date.substr(8, 2);
                        return newDate = day + '/' + month + '/' + year;
                    }
                };
                var a = [];
                _this.knowledges = knowledges;
                for (var i = 0; i < _this.knowledges.length; i++) {
                    _this._requestService.getRequestByKnowledgeId(_this.knowledges[i]._id).subscribe(function (requests) {
                        //for each child back.knowledge get requests
                        for (var j = 0; j < requests.length; j++) {
                            a.push(requests[j]);
                        }
                        for (var i = 0; i < a.length; i++) {
                            a[i].createdAt = formatDate(requests[i].createdAt);
                            a[i].modifiedDate = formatDate(requests[i].modifiedDate);
                        }
                        _this.requests = a;
                    });
                }
            }, function (Error) {
                console.log(Error);
            });
        }
    };
    __decorate([
        core_1.Input()
    ], RequestCategoryComponent.prototype, "search");
    RequestCategoryComponent = __decorate([
        core_1.Component({
            selector: 'request-search-cli',
            templateUrl: 'client/dev/app/components/front-end/request/templates/request-search.html',
            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], RequestCategoryComponent);
    return RequestCategoryComponent;
})();
exports.RequestCategoryComponent = RequestCategoryComponent;
//# sourceMappingURL=request-search.js.map