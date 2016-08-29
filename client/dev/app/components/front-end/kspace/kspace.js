var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var kspace_1 = require('../../../services/kspace');
var router_1 = require('@angular/router');
var webrtc_component_1 = require('./webrtc-component');
var kspace_chat_1 = require('./kspace-chat');
var chalkboard_1 = require('./chalkboard');
var KSpaceComponent = (function () {
    function KSpaceComponent(router, route, _kspaceService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._kspaceService = _kspaceService;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.lecturer = params['lecturer'];
        });
        this.username = localStorage.getItem('username');
    }
    /*
     * Init when the component is initiated
     * */
    KSpaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._kspaceService
            .getKSpaceById(this.id)
            .subscribe(function (kspace) {
            _this.boards = kspace.boards;
            _this.chatlogs = kspace.chatlog;
            _this.room = kspace._id;
            var username = _this.username;
            _this.learners = kspace.learners;
            var isKspaceUser = function () {
                for (var _i = 0, _a = kspace.learners; _i < _a.length; _i++) {
                    var learner = _a[_i];
                    if (username === learner) {
                        return true;
                    }
                }
                if (username === kspace.lecturer) {
                    return true;
                }
                return false;
            };
            if (!isKspaceUser()) {
                _this.router.navigateByUrl('/');
            }
        }, function (error) {
            _this.router.navigateByUrl('/');
        });
    };
    KSpaceComponent = __decorate([
        core_1.Component({
            selector: 'kspace',
            templateUrl: 'client/dev/app/components/front-end/kspace/templates/kspace.html',
            styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                chalkboard_1.ChalkBoardComponent,
                kspace_chat_1.ChatComponent,
                webrtc_component_1.RTCComponent
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, kspace_1.KSpaceService])
    ], KSpaceComponent);
    return KSpaceComponent;
})();
exports.KSpaceComponent = KSpaceComponent;
//# sourceMappingURL=kspace.js.map