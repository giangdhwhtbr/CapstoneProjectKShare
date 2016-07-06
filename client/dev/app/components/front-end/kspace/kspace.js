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
var requests_1 = require('../../../services/requests');
var chat_1 = require('../../../services/chat');
var auth_1 = require('../../../services/auth');
var kspace_1 = require('../../../services/kspace');
var router_1 = require('@angular/router');
var chat_2 = require('./chat');
var KSpaceComponent = (function () {
    function KSpaceComponent(_requestService, router, rParam, _kspaceService, _auth, _chatService) {
        this._requestService = _requestService;
        this.router = router;
        this._kspaceService = _kspaceService;
        this._auth = _auth;
        this._chatService = _chatService;
        this.id = rParam.getParam('id');
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    KSpaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = localStorage.getItem('username');
        //get chat room by front.kspace id
        this._chatService.findChatRoomByKSpaceId(this.id).subscribe(function (chatRoom) {
            _this.chatRoomId = chatRoom[0]._id;
            console.log(_this.chatRoomId);
        }, function (error) {
            console.log(error);
        });
    };
    KSpaceComponent = __decorate([
        core_1.Component({
            selector: 'kspace',
            templateUrl: 'client/dev/app/components/front-end/kspace/templates/kspace.html',
            styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                chat_2.ChatComponent
            ]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, router_1.Router, router_1.RouteSegment, kspace_1.KSpaceService, auth_1.AuthService, chat_1.ChatService])
    ], KSpaceComponent);
    return KSpaceComponent;
})();
exports.KSpaceComponent = KSpaceComponent;
//# sourceMappingURL=kspace.js.map