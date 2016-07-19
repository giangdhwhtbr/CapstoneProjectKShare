"use strict";
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
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], KSpaceInfoComponent);
    return KSpaceInfoComponent;
}());
exports.KSpaceInfoComponent = KSpaceInfoComponent;
//# sourceMappingURL=kspace-info.js.map