var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 7/9/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var KSpaceInfoComponent = (function () {
    function KSpaceInfoComponent(router, route) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.accessRoomBtn = 'Access Room';
        this.route.params.subscribe(function (params) {
            _this.kspaceId = params['id'];
        });
    }
    KSpaceInfoComponent.prototype.ngOnInit = function () {
    };
    KSpaceInfoComponent.prototype.accessRoom = function () {
        var specs = 'resizable=yes, fullscreen=yes';
        var name = '_blank';
        var url = '/room/' + this.kspaceId;
        window.open(url, name, specs);
        //this.router.navigateByUrl('/kspace/room/'+this.kspaceId);
    };
    KSpaceInfoComponent = __decorate([
        core_1.Component({
            template: "\n      <div class=\"container mg-top-50\">\n      <button (click)=\"accessRoom()\">{{accessRoomBtn}}</button>\n      </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], KSpaceInfoComponent);
    return KSpaceInfoComponent;
})();
exports.KSpaceInfoComponent = KSpaceInfoComponent;
//# sourceMappingURL=kspace-info.js.map