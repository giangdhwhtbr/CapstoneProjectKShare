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
var common_1 = require('@angular/common');
var report_1 = require('../../../services/report');
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
        core_1.Input('receiver')
    ], MessageComponent.prototype, "receiver");
    MessageComponent = __decorate([
        core_1.Component({
            selector: 'message',
            templateUrl: 'client/dev/app/components/back-end/report/templates/message.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [report_1.ReportService],
            pipes: [filter_1.StringFilterPipe]
        })
    ], MessageComponent);
    return MessageComponent;
})();
exports.MessageComponent = MessageComponent;
//# sourceMappingURL=message.js.map