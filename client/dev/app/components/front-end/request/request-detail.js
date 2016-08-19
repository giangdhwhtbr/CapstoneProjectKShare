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
var offer_create_1 = require('../offer/offer-create');
var report_1 = require('../report/report');
var tag_1 = require('../tag/tag');
var private_chat_1 = require('./../../shared/private-chat');
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
        this.num = 5;
        this.height = 400;
        //check if request is accepted
        this.checkIsAcceped = false;
        this.offers = [];
        this.kspace = {};
        this.roleToken = localStorage.getItem('userrole');
        this.userToken = localStorage.getItem('username');
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    RequestDetailClientComponent.prototype.ngOnInit = function () {
        this.getRequestById();
        $('.modal-trigger').leanModal();
    };
    RequestDetailClientComponent.prototype.openOffer = function () {
        $('#modalOfferRequest').openModal();
    };
    RequestDetailClientComponent.prototype.openReport = function () {
        $('#myModal').openModal();
    };
    RequestDetailClientComponent.prototype.getRequestById = function () {
        var _this = this;
        //get templates when load the page
        this._requestService.getRequestById(this.id)
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
            _this.subscribers = request.subscribers;
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
            _this.getOfferByRequestId();
            //get back.knowledge name by knowledgeId
            _this._knowledgeService.findKnowledgeById(_this.knowledgeId)
                .subscribe(function (knowledge) {
                _this.knowledge = knowledge;
                //this.knowledgeName = this.knowledge.name;
            });
        }, function (error) { return console.log(error); });
    };
    RequestDetailClientComponent.prototype.seeMore = function () {
        this.num = this.num + 5;
        this.getOfferByRequestId();
    };
    RequestDetailClientComponent.prototype.openModal = function () {
        $('#modalOfferRequest').openModal();
    };
    RequestDetailClientComponent.prototype.ngAfterViewChecked = function () {
        if (this.request != undefined) {
            $('#bodyReq').html(this.request.description);
        }
    };
    RequestDetailClientComponent.prototype.action = function (data) {
        if (data === 'new-offer') {
            this.num = 5;
            this.offers = [];
            this.getOfferByRequestId();
        }
    };
    RequestDetailClientComponent.prototype.getOfferByRequestId = function () {
        var _this = this;
        //get front.offer of the templates when load the page
        this._offerService.getOfferByRequestId(this._id, this.num).subscribe(function (offers) {
            if (offers) {
                for (var i = 0; i < offers.length; i++) {
                    if (offers[i].status === 'pending') {
                        offers[i].status = 'Đang chờ';
                    }
                    else {
                        offers[i].status = 'Được chấp nhận';
                    }
                    _this.offers.push(offers[i]);
                }
            }
            else {
                alert('Không có đề nghị nào');
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
    RequestDetailClientComponent.prototype.addKshare = function (lecturer, offerId) {
        var _this = this;
        this.kspace = {};
        this.kspace.learners = [];
        this.kspace.learners.push(this.request.user);
        this.kspace.lecturer = lecturer;
        this.kspace.requestId = this._id;
        this.kspace.requestTitle = this.request.title;
        this.kspace.offerId = offerId;
        this.kspace.tags = this.request.tags;
        for (var i = 0; i < this.request.subscribers.length; i++) {
            this.kspace.learners.push(this.request.subscribers[i]);
        }
        console.log(this.kspace);
        this._kspaceService
            .addKSpace(this.kspace)
            .subscribe(function (r) {
            console.log(r);
            console.log('create kspace successfull');
            //update offer status
            _this._offerService.updateOffer(offerId, 'accepted')
                .subscribe(function (c) {
                console.log('change status offer successfull');
            });
            _this.request.status = 'accepted';
            //update request status
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
                    _this.subscribers = request.subscribers;
                });
            });
        }
    };
    RequestDetailClientComponent.prototype.removeSubscriber = function () {
        var _this = this;
        console.log(this.request.subscribers);
        var index = this.request.subscribers.indexOf(this.userToken);
        if (index > -1) {
            this.request.subscribers.splice(index, 1);
        }
        console.log(this.request.subscribers);
        this._requestService.updateRequest(this.request, this.request.tags, []).subscribe(function (request) {
            //reload request
            _this._requestService.getRequestById(_this.id).subscribe(function (request) {
                console.log(request);
                _this.subscribers = request.subscribers;
                _this.checkSubcribedUser = false;
            });
        });
    };
    RequestDetailClientComponent.prototype.removeOffer = function (id) {
        var _this = this;
        this._offerService.updateOffer(id, 'deactive').subscribe(function (offer) {
            console.log(offer);
            _this.offers = [];
            _this.getOfferByRequestId();
        });
    };
    RequestDetailClientComponent = __decorate([
        core_1.Component({
            selector: 'request-detail-cli',
            templateUrl: 'client/dev/app/components/front-end/request/templates/request-detail.html',
            styleUrls: ['client/dev/app/components/front-end/request/styles/request.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                offer_create_1.CreateOfferComponent,
                report_1.ReportComponent,
                private_chat_1.PrivateChatComponent,
                tag_1.listTagComponent
            ]
        })
    ], RequestDetailClientComponent);
    return RequestDetailClientComponent;
})();
exports.RequestDetailClientComponent = RequestDetailClientComponent;
//# sourceMappingURL=request-detail.js.map