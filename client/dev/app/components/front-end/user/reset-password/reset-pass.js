"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by GiangDH on 8/8/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var users_1 = require('../../../../services/users');
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
        }), 
        __metadata('design:paramtypes', [users_1.UserService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset-pass.js.map