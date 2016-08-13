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
var filter_1 = require('../shared/filter');
var ReportListComponent = (function () {
    function ReportListComponent(fb, _reportService, router) {
        this._reportService = _reportService;
        this.router = router;
        this.pageTitle = 'Report List';
        this.pendingReports = [];
        this.handlingReports = [];
        this.filter = '';
    }
    ReportListComponent.prototype.ngOnInit = function () {
        this.getAllPending();
        this.getAllHandling();
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
    ReportListComponent = __decorate([
        core_1.Component({
            selector: 'reports-list',
            templateUrl: 'client/dev/app/components/back-end/report/templates/reports-list.html',
            directives: [router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [report_1.ReportService],
            pipes: [filter_1.StringFilterPipe]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, report_1.ReportService, router_1.Router])
    ], ReportListComponent);
    return ReportListComponent;
})();
exports.ReportListComponent = ReportListComponent;
//# sourceMappingURL=reports-list.js.map