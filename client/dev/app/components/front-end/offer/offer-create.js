var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var CreateOfferComponent = (function () {
    function CreateOfferComponent(fb, _offerService, _authService, _noti, _requestService) {
        this._offerService = _offerService;
        this._authService = _authService;
        this._noti = _noti;
        this._requestService = _requestService;
        this.user = localStorage.getItem('username');
        this.offerForm = fb.group({
            "price": [""],
            "numberOfLecture": [""],
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
        core_1.Input('rid')
    ], CreateOfferComponent.prototype, "rid");
    CreateOfferComponent = __decorate([
        core_1.Component({
            selector: 'offer-create',
            templateUrl: 'client/dev/app/components/front-end/offer/templates/offer-create.html',
            directives: [common_1.FORM_DIRECTIVES]
        })
    ], CreateOfferComponent);
    return CreateOfferComponent;
})();
exports.CreateOfferComponent = CreateOfferComponent;
//# sourceMappingURL=offer-create.js.map