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
var report_1 = require('../report/report');
var RequestDetailClientComponent = (function () {
    function RequestDetailClientComponent(_requestService, _offerService, router, _knowledgeService, _kspaceService, route) {
        this._requestService = _requestService;
        this._offerService = _offerService;
        this.router = router;
        this._knowledgeService = _knowledgeService;
        this._kspaceService = _kspaceService;
        this.route = route;
        this.pageTitle = 'Welcome to Knowledge Sharing Network';
        this.num = 5;
        this.height = 400;
        //check if request is accepted
        this.checkIsAcceped = false;
        this.offers = [];
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');
    }
    RequestDetailClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
            //get templates when load the page
            _this._requestService.getRequestById(_this.id)
                .subscribe(function (request) {
                //translate status
                if (request.status === 'accepted') {
                    request.status = 'Đã được chấp nhận';
                    _this.checkIsAcceped = true;
                }
                else if (request.status === 'deactive' || request.status === undefined) {
                    request.status = 'Đã kết thúc';
                    _this.checkDeactive = true;
                }
                else {
                    request.status = 'Đang chờ';
                }
                request.userlink = '/user/' + request.user;
                _this._id = request._id;
                _this.updateLink = '/requests/' + request._id + '/update';
                _this.knowledgeId = request.knowledgeId;
                _this.subscribers = request.subcribers;
                //check if user is created user
                if (request.user === _this.userToken) {
                    _this.checkCreatedUser = true;
                }
                //check if user already subcribed
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
            _this.getOfferByRequestId();
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
        });
    };
    RequestDetailClientComponent.prototype.seeMore = function () {
        this.num = this.num + 5;
        this.getOfferByRequestId();
    };
    RequestDetailClientComponent.prototype.ngAfterViewChecked = function () {
        if (this.request != undefined) {
            $('#bodyReq').html(this.request.description);
        }
    };
    RequestDetailClientComponent.prototype.getOfferByRequestId = function () {
        var _this = this;
        //get front.offer of the templates when load the page
        this._offerService.getOfferByRequestId(this.id, this.num).subscribe(function (offers) {
            for (var i = 0; i < offers.length; i++) {
                if (offers[i].status === 'pending') {
                    offers[i].status = 'Đang chờ';
                }
                else {
                    offers[i].status = 'Được chấp nhận';
                }
                _this.offers.push(offers[i]);
            }
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
                _this.router.navigateByUrl('/requests');
            });
        }
    };
    RequestDetailClientComponent.prototype.addKshare = function (learner, lecturer, requestId, requestTitle, offerId) {
        var _this = this;
        this._kspaceService
            .addKSpace(learner, lecturer, requestId, requestTitle, offerId)
            .subscribe(function (r) {
            console.log('create kspace successfull');
            //update offer status
            _this._offerService.updateOffer(offerId, 'accepted')
                .subscribe(function (c) {
                console.log('change status offer successfull');
            });
            _this.request.status = 'accepted';
            //update request status
            console.log(_this.request);
            _this._requestService.updateRequest(_this.request, _this.request.tags, [])
                .subscribe(function (c) {
                console.log('change status request successfull');
            });
            _this.checkIsAcceped = true;
            _this.router.navigate(['/kspace/info/' + r._id + '/' + lecturer]);
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
                console.log("add subcriber successfull");
                _this.checkSubcribedUser = true;
                _this._requestService.getRequestById(_this.id).subscribe(function (request) {
                    _this.subscribers = request.subcribers;
                });
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
                offer_create_1.CreateOfferComponent,
                report_1.ReportComponent
            ]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, request_offer_1.OfferService, router_1.Router, knowledge_1.KnowledgeService, kspace_1.KSpaceService, router_1.ActivatedRoute])
    ], RequestDetailClientComponent);
    return RequestDetailClientComponent;
})();
exports.RequestDetailClientComponent = RequestDetailClientComponent;
//# sourceMappingURL=request-detail.js.map