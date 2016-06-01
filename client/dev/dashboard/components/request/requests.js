var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var nav_bar_1 = require('../../components/shared/nav-bar');
var sidebar_1 = require('../../components/shared/sidebar');
var requests_list_1 = require('../../components/request/requests-list');
var request_create_1 = require('../../components/request/request-create');
var request_update_1 = require('../../components/request/request-update');
var offer_create_1 = require('../../components/offer/offer-create');
var RequestComponent = (function () {
    function RequestComponent() {
    }
    RequestComponent = __decorate([
        core_1.Component({
            selector: 'request-mgn',
            templateUrl: 'client/dev/dashboard/templates/request/request.html',
            directives: [request_update_1.UpdateRequestComponent,
                requests_list_1.RequestListComponent,
                request_create_1.CreateRequestComponent,
                nav_bar_1.NavbarComponent,
                sidebar_1.SidebarComponent,
                offer_create_1.CreateOfferComponent,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RequestComponent);
    return RequestComponent;
})();
exports.RequestComponent = RequestComponent;
//# sourceMappingURL=requests.js.map