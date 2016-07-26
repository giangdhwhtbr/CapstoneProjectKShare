var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var CreateOfferComponent = (function () {
    function CreateOfferComponent(fb, _offerService, _authService) {
        this._offerService = _offerService;
        this._authService = _authService;
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
        this._offerService.addOffer(offer).subscribe(function (offer) {
            console.log('success');
        }, function (error) {
            console.log(error.text());
        });
        window.location.reload();
    };
    __decorate([
        core_1.Input('rid')
    ], CreateOfferComponent.prototype, "rid");
    CreateOfferComponent = __decorate([
        core_1.Component({
            selector: 'offer-create',
            templateUrl: 'client/dev/app/components/front-end/offer/templates/offer-create.html',
            directives: [common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder))
    ], CreateOfferComponent);
    return CreateOfferComponent;
})();
exports.CreateOfferComponent = CreateOfferComponent;
//# sourceMappingURL=offer-create.js.map