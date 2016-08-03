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
var ReportListComponent = (function () {
    function ReportListComponent(fb, _reportService, router) {
        this._reportService = _reportService;
        this.router = router;
        this.pageTitle = 'Report List';
        this.filter = '';
    }
    ReportListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ReportListComponent.prototype.getAll = function () {
        var _this = this;
        this._reportService
            .getAllReports()
            .subscribe(function (reports) {
            _this.reports = reports;
            console.log(_this.reports);
        });
    };
    ReportListComponent.prototype.deactivateReport = function (id) {
        var _this = this;
        var r = confirm("Bạn có muốn xóa?");
        if (r == true) {
            this._reportService.deactivateReport(id).subscribe(function (r) {
                console.log('deactivate successfully');
                _this.getAll();
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
        })
    ], ReportListComponent);
    return ReportListComponent;
})();
exports.ReportListComponent = ReportListComponent;
//# sourceMappingURL=reports-list.js.map