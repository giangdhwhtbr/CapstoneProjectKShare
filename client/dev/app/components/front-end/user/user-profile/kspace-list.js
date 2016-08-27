var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by Duc Duong on 8/19/2016.
 */
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tag_1 = require('../../tag/tag');
var info_hover_1 = require('../../user/user-profile/info-hover');
var KspaceListComponent = (function () {
    function KspaceListComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    KspaceListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], KspaceListComponent.prototype, "kspace");
    KspaceListComponent = __decorate([
        core_1.Component({
            selector: 'kspace-list',
            templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/list-kspace.html',
            styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES, tag_1.listTagComponent, info_hover_1.infoHover
            ]
        })
    ], KspaceListComponent);
    return KspaceListComponent;
})();
exports.KspaceListComponent = KspaceListComponent;
//# sourceMappingURL=kspace-list.js.map