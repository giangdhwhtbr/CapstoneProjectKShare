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
var RequestCategoryComponent = (function () {
    function RequestCategoryComponent(_requestService, router, route) {
        var _this = this;
        this._requestService = _requestService;
        this.router = router;
        this.route = route;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.route
            .params
            .subscribe(function (params) {
            var type = params['type'];
            _this.typee = type;
            var id = params['id'];
            _this.identify = id;
        });
        //get templates from children category
        if (this.typee === "subcategory") {
            this._requestService.getRequestByKnowledgeId(this.identify).subscribe(function (requests) {
                if (requests.length == 0) {
                    _this.isExistRecord = true;
                }
                else {
                    _this.isExistRecord = false;
                }
                for (var i = 0; i < requests.length; i++) {
                    requests[i].createdAt = new Date(requests[i].createdAt);
                    requests[i].modifiedDate = new Date(requests[i].modifiedDate);
                }
                _this.requests = requests;
            });
        }
        //get templates from parent category
        if (this.typee === "category") {
            this._requestService.getKnowledgeByParent(this.identify).subscribe(function (knowledges) {
                var a = [];
                _this.knowledges = knowledges;
                for (var i = 0; i < _this.knowledges.length; i++) {
                    _this._requestService.getRequestByKnowledgeId(_this.knowledges[i]._id).subscribe(function (requests) {
                        //for each child knowledge get requests
                        for (var j = 0; j < requests.length; j++) {
                            a.push(requests[j]);
                        }
                        for (var i = 0; i < a.length; i++) {
                            a[i].createdAt = new Date(requests[i].createdAt);
                            a[i].modifiedDate = new Date(requests[i].modifiedDate);
                            if (requests[i].status === 'pending') {
                                requests[i].status = 'Đang chờ';
                            }
                        }
                        if (a.length == 0) {
                            _this.isExistRecord = true;
                        }
                        else {
                            _this.isExistRecord = false;
                        }
                        _this.requests = a;
                    });
                }
            }, function (Error) {
                console.log(Error);
            });
        }
    }
    RequestCategoryComponent = __decorate([
        core_1.Component({
            selector: 'request-search-cli',
            templateUrl: 'client/dev/app/components/front-end/request/templates/request-search.html',
            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, router_1.Router, router_1.ActivatedRoute])
    ], RequestCategoryComponent);
    return RequestCategoryComponent;
})();
exports.RequestCategoryComponent = RequestCategoryComponent;
//# sourceMappingURL=request-search.js.map