var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    __decorate([
        core_2.Input()
    ], SidebarComponent.prototype, "pageTitle");
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            templateUrl: 'client/dev/app/components/back-end/shared/templates/side-bar.html',
            styleUrls: ['client/dev/asserts/css/admin.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], SidebarComponent);
    return SidebarComponent;
})();
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=side-bar.js.map