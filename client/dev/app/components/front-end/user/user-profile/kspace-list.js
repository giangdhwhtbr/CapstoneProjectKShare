var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Duc Duong on 8/19/2016.
 */
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tag_1 = require('../../tag/tag');
var KspaceListComponent = (function () {
    function KspaceListComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    KspaceListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], KspaceListComponent.prototype, "kspace", void 0);
    KspaceListComponent = __decorate([
        core_1.Component({
            selector: 'kspace-list',
            templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/list-kspace.html',
            styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, tag_1.listTagComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], KspaceListComponent);
    return KspaceListComponent;
})();
exports.KspaceListComponent = KspaceListComponent;
//# sourceMappingURL=kspace-list.js.map