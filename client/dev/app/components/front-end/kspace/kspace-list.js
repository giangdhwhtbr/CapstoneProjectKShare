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
var kspace_1 = require('../../../services/kspace');
var router_1 = require('@angular/router');
var private_chat_1 = require('./../../shared/private-chat');
var KSpaceListComponent = (function () {
    function KSpaceListComponent(_kspaceService, router) {
        this._kspaceService = _kspaceService;
        this.router = router;
    }
    KSpaceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._kspaceService
            .getAllKSpace()
            .subscribe(function (kspaces) {
            for (var i = 0; i < kspaces.length; i++) {
                kspaces[i].createdAt = new Date(kspaces[i].createdAt);
                kspaces[i].link = '/kspace/info/' + kspaces[i]._id + '/' + kspaces[i].lecturer;
            }
            _this.kspaces = kspaces;
        }, function (error) {
            _this.errorMessage = error.message;
            console.log(error);
        });
    };
    KSpaceListComponent = __decorate([
        core_1.Component({
            template: "\n    <div class=\"container mg-top-50\">\n          <!-- list all-->\n          <div class=\"search-container\">\n             <form role=\"search\">\n                     <div class=\"search-component\">\n                        <input #text type=\"text\" class=\"form-control search-input\" placeholder=\"Nh\u1EADp n\u1ED9i dung t\u00ECm ki\u1EBFm\">\n                        <button (click)=\"search(text.value)\" type=\"submit\"\n                        class=\"search-button fa fa-search fa-2x\"\n                        aria-hidden=\"true\"></button>\n                     </div>\n              </form>\n           </div><!-- /.search-component -->\n          <div *ngIf=\"kspaces\" id=\"kspace-list-component\" class=\"col-md-12\">\n            <div class=\"panel panel-default card-rq\" *ngFor=\"let kspace of kspaces\">\n              <div class=\"panel-body\">\n                <a [routerLink]=\"[kspace.link]\" >\n                  <p class=\"lead\">{{kspace.requestTitle}}</p>\n                </a>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 fixEfMenu\">\n                  Ng\u01B0\u1EDDi y\u00EAu c\u1EA7u : {{kspace.learner}}\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 fixEfMenu\">\n                  Ng\u01B0\u1EDDi d\u1EA1y : {{kspace.lecturer}}\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 fixEfMenu\">\n                  Tr\u1EA1ng th\u00E1i : ddddddd\n                </div>\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 text-left fixEfMenu\">\n                  Ng\u00E0y t\u1EA1o : {{kspace.createdAt | date:\"dd/MM/yyyy\"}}\n                </div>\n            </div>\n          </div>\n    </div><!-- /.container -->\n    <private-chat></private-chat>\n    ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                private_chat_1.PrivateChatComponent
            ],
            styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace-list.css']
        }), 
        __metadata('design:paramtypes', [kspace_1.KSpaceService, router_1.Router])
    ], KSpaceListComponent);
    return KSpaceListComponent;
})();
exports.KSpaceListComponent = KSpaceListComponent;
//# sourceMappingURL=kspace-list.js.map