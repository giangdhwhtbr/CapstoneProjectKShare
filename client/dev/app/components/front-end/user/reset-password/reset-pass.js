var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 8/8/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(_userService) {
        this._userService = _userService;
        this.step = 1;
    }
    ResetPasswordComponent.prototype.sendEmail = function (email) {
        var _this = this;
        this.email = email;
        this._userService.sendEmailResetPassword(email)
            .subscribe(function (res) {
            if (res.status === 'success') {
                _this.step = 2;
            }
        }, function (error) {
            _this.errorMessage = "Có lỗi xảy ra vui lòng kiểm tra lại email";
        });
    };
    ResetPasswordComponent = __decorate([
        core_1.Component({
            templateUrl: 'client/dev/app/components/front-end/user/reset-password/templates/reset-password.html',
            styleUrls: ['client/dev/app/components/front-end/user/login/styles/login.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                common_1.FORM_DIRECTIVES
            ]
        })
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
})();
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset-pass.js.map