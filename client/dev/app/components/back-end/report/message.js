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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var report_1 = require('../../../services/report');
var chat_1 = require('../../../services/chat');
var notification_1 = require('../../../services/notification');
var filter_1 = require('../shared/filter');
var MessageComponent = (function () {
    function MessageComponent(fb, _reportService, router, _chatService, _noti) {
        this._reportService = _reportService;
        this.router = router;
        this._chatService = _chatService;
        this._noti = _noti;
        this.pageTitle = 'Report List';
        this.filter = '';
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
        this.socket = io('https://localhost:80');
    }
    MessageComponent.prototype.ngOnInit = function () {
        console.log(this.receiver);
    };
    MessageComponent.prototype.closeModal = function () {
        $('#messageModal').closeModal();
    };
    MessageComponent.prototype.sendMessage = function () {
        console.log(this.receiver);
        var data = {
            sender: this.userToken,
            message: this.mess,
            receiver: this.receiver
        };
        this._noti.alertNotification('Bạn có tin nhắn mới', this.receiver, '');
        this.socket.emit('private-message', data);
        this.socket.emit('reset-new-message', data);
        this.mess = "";
        $('#messageModal').closeModal();
    };
    __decorate([
        core_1.Input('receiver'), 
        __metadata('design:type', String)
    ], MessageComponent.prototype, "receiver", void 0);
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'message',
            templateUrl: 'client/dev/app/components/back-end/report/templates/message.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [report_1.ReportService],
            pipes: [filter_1.StringFilterPipe]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, report_1.ReportService, router_1.Router, chat_1.ChatService, notification_1.NotificationService])
    ], MessageComponent);
    return MessageComponent;
})();
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.js.map