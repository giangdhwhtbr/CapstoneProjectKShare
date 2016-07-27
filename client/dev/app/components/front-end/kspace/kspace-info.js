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
    function KSpaceInfoComponent(router, route, _kspaceService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._kspaceService = _kspaceService;
        this.accessRoomBtn = 'Access Room';
        this.images = [];
        this.route.params.subscribe(function (params) {
            _this.kspaceId = params['id'];
        });
    }
    KSpaceInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._kspaceService
            .getKSpaceById(this.kspaceId)
            .subscribe(function (kspace) {
            _this.title = kspace.requestTitle;
            for (var _i = 0, _a = kspace.chatlog; _i < _a.length; _i++) {
                var log = _a[_i];
                if (log.dataURL) {
                    var data = {
                        des: log.message,
                        url: log.dataURL
                    };
                    _this.images.push(data);
                }
            }
        });
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
            template: "\n      <div class=\"container mg-top-50\">\n        <h3>{{title}}</h3>\n        <br>\n        <button (click)=\"accessRoom()\">{{accessRoomBtn}}</button>\n        <hr>\n        <h3>images</h3>\n        <div *ngFor=\"let img of images\">\n          <h4>{{img.des}}</h4>\n          <img src=\"{{img.url}}\" style=\"background-color: black; border-radius: 10px;\" alt=\"kspace\" width=\"300\" height=\"200\">\n          <br>\n        </div>\n      </div>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        })
    ], KSpaceInfoComponent);
    return KSpaceInfoComponent;
})();
exports.KSpaceInfoComponent = KSpaceInfoComponent;
//# sourceMappingURL=kspace-info.js.map