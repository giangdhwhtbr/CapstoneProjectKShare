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
var request_offer_1 = require('../../../services/request-offer');
var knowledge_1 = require('../../../services/knowledge');
var kspace_1 = require('../../../services/kspace');
var offer_create_1 = require('../offer/offer-create');
var RequestDetailClientComponent = (function () {
    function RequestDetailClientComponent(_requestService, _offerService, router, _knowledgeService, _kspaceService, route) {
        var _this = this;
        this._requestService = _requestService;
        this._offerService = _offerService;
        this.router = router;
        this._knowledgeService = _knowledgeService;
        this._kspaceService = _kspaceService;
        this.route = route;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    RequestDetailClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get templates when load the page
        this._requestService.getRequestById(this.id)
            .subscribe(function (request) {
            var formatDate = function (date) {
                if (date) {
                    var newDate, day, month, year;
                    year = date.substr(0, 4);
                    month = date.substr(5, 2);
                    day = date.substr(8, 2);
                    return newDate = day + '/' + month + '/' + year;
                }
            };
            request.createdAt = formatDate(request.createdAt);
            request.userlink = '/user/' + request.user;
            _this._id = request._id;
            _this.updateLink = '/requests/' + request._id + '/update';
            _this.knowledgeId = request.knowledgeId;
            _this.subscribers = request.subcribers;
            if (request.status === "deactive") {
                _this.checkDeactive = true;
            }
            if (request.user === _this.userToken) {
                _this.checkCreatedUser = true;
            }
            for (var i = 0; i < _this.subscribers.length; i++) {
                if (_this.userToken === _this.subscribers[i]) {
                    _this.checkSubcribedUser = true;
                    break;
                }
            }
            _this.request = request;
            //get back.knowledge name by knowledgeId
            _this._knowledgeService.findKnowledgeById(_this.knowledgeId)
                .subscribe(function (knowledge) {
                _this.knowledge = knowledge;
                //this.knowledgeName = this.knowledge.name;
            }, function (error) {
                console.log(error);
            });
        }, function (error) { return console.log(error); });
        //get front.offer of the templates when load the page
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
            console.log(error);
        });
    };
    RequestDetailClientComponent.prototype.deactivateRequest = function (id) {
        var _this = this;
        var r = confirm("Bạn có muốn kết thúc yêu cầu này?");
        if (r == true) {
            this._requestService
                .changeStatusRequest(this.id)
                .subscribe(function (r) {
                console.log("deactivate sucess");
                _this.router.navigateByUrl('/kshare/requests/');
            });
        }
    };
    RequestDetailClientComponent.prototype.addKshare = function (learner, lecturer, requestId, offerId) {
        this._kspaceService
            .addKSpace(learner, lecturer, requestId, offerId)
            .subscribe(function (r) {
            //this._chatService.addChatRoom(r._id)
            //  .subscribe((c) => {
            //    this.rid = c._id;
            //    console.log("add chat room successfull");
            //    this.router.navigateByUrl('/kshare/front.kspace/' + r._id + '/' + this.rid);
            //  });
        });
    };
    RequestDetailClientComponent.prototype.addSubcriber = function (id) {
        var _this = this;
        if (this.checkSubcribedUser == true) {
            alert('Bạn đã theo dõi vài viết này');
        }
        else {
            this._requestService
                .updateSubcriber(id, this.userToken)
                .subscribe(function (r) {
                console.log(r);
                console.log("add subcriber successfull");
                _this.checkSubcribedUser = true;
            });
            this._requestService.getRequestById(this.id).subscribe(function (request) {
                _this.subscribers = request.subcribers;
            });
        }
    };
    RequestDetailClientComponent = __decorate([
        core_1.Component({
            selector: 'request-detail-cli',
            templateUrl: 'client/dev/app/components/front-end/request/templates/request-detail.html',
            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                offer_create_1.CreateOfferComponent
            ]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, request_offer_1.OfferService, router_1.Router, knowledge_1.KnowledgeService, kspace_1.KSpaceService, router_1.ActivatedRoute])
    ], RequestDetailClientComponent);
    return RequestDetailClientComponent;
})();
exports.RequestDetailClientComponent = RequestDetailClientComponent;
//# sourceMappingURL=request-detail.js.map