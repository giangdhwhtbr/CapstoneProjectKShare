var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
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
        })
    ], KSpaceComponent);
    return KSpaceComponent;
})();
exports.KSpaceComponent = KSpaceComponent;
//# sourceMappingURL=kspace.js.map