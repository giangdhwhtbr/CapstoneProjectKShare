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
var primeng_1 = require('primeng/primeng');
var message_1 = require('./message');
var private_chat_1 = require('../../shared/private-chat');
var ReportListComponent = (function () {
    function ReportListComponent(fb, _reportService, _chatService, router) {
        this._reportService = _reportService;
        this._chatService = _chatService;
        this.router = router;
        this.pageTitle = 'Report List';
        this.pendingReports = [];
        this.handlingReports = [];
        this.filter = '';
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    ReportListComponent.prototype.ngOnInit = function () {
        this.getAllPending();
        this.getAllHandling();
        $('ul.tabs').tabs();
    };
    ReportListComponent.prototype.getAllPending = function () {
        var _this = this;
        this._reportService
            .getAllReports('pending')
            .subscribe(function (reports) {
            _this.pendingReports = reports;
        });
    };
    ReportListComponent.prototype.getAllHandling = function () {
        var _this = this;
        this._reportService
            .getAllReports('handling')
            .subscribe(function (reports) {
            _this.handlingReports = reports;
        });
    };
    ReportListComponent.prototype.deactivateReport = function (id) {
        var _this = this;
        var r = confirm("Bạn có muốn xóa?");
        if (r == true) {
            this._reportService.deactivateReport(id).subscribe(function (r) {
                console.log('deactivate successfully');
                _this.getAllPending();
                _this.getAllHandling();
            });
        }
    };
    ReportListComponent.prototype.changeStatusHandling = function (id) {
        var _this = this;
        var r = confirm("Bạn có muốn thay đổi trạng thái?");
        if (r == true) {
            this._reportService.changeStatusHandling(id).subscribe(function (r) {
                console.log('change status successfully');
                _this.getAllPending();
                _this.getAllHandling();
            });
        }
    };
    ReportListComponent.prototype.createChatRoom = function (reportedUser) {
        if (reportedUser !== this.userToken) {
            this._chatService.createChatRoomAdmin(this.userToken, reportedUser)
                .subscribe(function (chatRoom) {
                alert('Phòng trò chuyện đã được tạo');
                console.log(reportedUser);
                console.log('create chatRoom successfully');
            });
        }
        this.user = reportedUser;
        $('#messageModal').openModal();
    };
    ReportListComponent = __decorate([
        core_1.Component({
            selector: 'reports-list',
            templateUrl: 'client/dev/app/components/back-end/report/templates/reports-list.html',
            directives: [message_1.MessageComponent, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES, common_1.FORM_DIRECTIVES, primeng_1.DataTable, primeng_1.Column, primeng_1.Header, primeng_1.Footer, private_chat_1.PrivateChatComponent],
            providers: [report_1.ReportService, chat_1.ChatService]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, report_1.ReportService, chat_1.ChatService, router_1.Router])
    ], ReportListComponent);
    return ReportListComponent;
})();
exports.ReportListComponent = ReportListComponent;
//# sourceMappingURL=reports-list.js.map