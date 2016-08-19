var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var ReportComponent = (function () {
    function ReportComponent(fb, _reportService, _noti, _userService) {
        this._reportService = _reportService;
        this._noti = _noti;
        this._userService = _userService;
        this.user = localStorage.getItem('username');
        this.link = window.location.pathname;
        this.reportForm = fb.group({
            "title": [""],
            "content": [""],
            "user": [""],
            "reportedUser": [""],
            "link": [""]
        });
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.close = function () {
        $("#myModal").closeModal();
    };
    ReportComponent.prototype.addReport = function (report) {
        var _this = this;
        this._reportService.addReport(report).subscribe(function (report) {
            //call function send notification for admin realtime
            //user === null means sending notification for every user roles admin
            var title = "Nhận được một báo cáo vi phạm";
            var link = report.link;
            _this._userService.getAllUsers().subscribe(function (users) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].role === 'admin') {
                        console.log(users[i]);
                        _this._noti.alertNotification(title, users[i].username, link);
                    }
                }
                _this._noti.createNotificationAdmin(title, link).subscribe(function (r) {
                    //$('#mess').html('<div class="alert alert-success"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Báo cáo thành công !</strong> </div>');
                    $('#btnCl').trigger("click");
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.Input('reportedUser')
    ], ReportComponent.prototype, "reportedUser");
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'report',
            templateUrl: 'client/dev/app/components/front-end/report/templates/report.html',
            styleUrls: [],
            directives: [
                common_1.FORM_DIRECTIVES,
            ]
        })
    ], ReportComponent);
    return ReportComponent;
})();
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.js.map