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
var common_1 = require('@angular/common');
var request_offer_1 = require('../../../services/request-offer');
var auth_1 = require('../../../services/auth');
var requests_1 = require('../../../services/requests');
var notification_1 = require('../../../services/notification');
var CreateOfferComponent = (function () {
    function CreateOfferComponent(fb, _offerService, _authService, _noti, _requestService) {
        this._offerService = _offerService;
        this._authService = _authService;
        this._noti = _noti;
        this._requestService = _requestService;
        this.user = localStorage.getItem('username');
        this.offerForm = fb.group({
            "requestId": [""],
            "message": [""],
            "user": [""]
        });
    }
    CreateOfferComponent.prototype.addOffer = function (offer) {
        var _this = this;
        this._offerService.addOffer(offer).subscribe(function (offer) {
            console.log('success');
            _this._requestService.getRequestById(offer.requestId).subscribe(function (request) {
                //call function using socket io to send notification realtime
                var title = _this.user + ' đã gửi một offer';
                var link = '/requests/' + request._id + '/info';
                _this._noti.alertNotification(title, request.user, link);
                //save notification to database
                _this._noti.createNotification(title, request.user, link).subscribe(function (notification) {
                    console.log(notification);
                    window.location.reload();
                });
            });
        }, function (error) {
            console.log(error.text());
        });
    };
    __decorate([
        core_1.Input('rid'), 
        __metadata('design:type', String)
    ], CreateOfferComponent.prototype, "rid", void 0);
    CreateOfferComponent = __decorate([
        core_1.Component({
            selector: 'offer-create',
            templateUrl: 'client/dev/app/components/front-end/offer/templates/offer-create.html',
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, request_offer_1.OfferService, auth_1.AuthService, notification_1.NotificationService, requests_1.RequestService])
    ], CreateOfferComponent);
    return CreateOfferComponent;
})();
exports.CreateOfferComponent = CreateOfferComponent;
//# sourceMappingURL=offer-create.js.map