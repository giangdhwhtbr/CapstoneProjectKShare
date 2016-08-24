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
            template: "\n      <div class=\"container mg-top-50\">\n        <div class=\"row\">\n          <div class=\"col-md-3\"></div>\n          <!-- /.col-md-3 -->\n          <div class=\"col-md-6\">\n            <div *ngIf=\"errorMessage\" class=\"errmess\">{{errorMessage}}</div>\n\n            <div *ngIf=\"step === 2\">\n              <h3>Ch\u00FAng t\u00F4i \u0111\u00E3 g\u1EEDi m\u1ED9t email kh\u00F4i ph\u1EE5c m\u1EADt  \u0111\u1EBFn \u0111\u1ECBa ch\u1EC9: {{email}} </h3>\n            </div>\n            <div *ngIf=\"step === 1\" class=\"loginPanel\">\n              <div class=\"box-header\">\n                <h2>Ph\u1EE5c h\u1ED3i m\u1EADt kh\u1EA9u </h2>\n              </div>\n              <form  (ngSubmit)=\"sendEmail(email.value)\">\n                <div class=\"form-group\">\n                  <input class=\"form-control form-text\" type=\"email\" required maxlength=\"70\"\n                         placeholder=\"Email ph\u1EE5c h\u1ED3i m\u1EADt kh\u1EA9u \"\n                         name=\"email\"\n                         #email\n                  />\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <button class=\"form-control btn btn-success\" type=\"submit\">G\u1EEDi Email </button>\n                  </div>\n                  <!-- /.col-sm-6 -->\n                  <div class=\"col-sm-6\">\n                    <button class=\"form-control btn btn btn-primary\" type=\"reset\" [routerLink]=\"['/reg']\">\u0110\u0103ng k\u00FD</button>\n                  </div>\n                </div>\n                <!-- /.row -->\n\n             </form>\n            </div>\n              <!-- /.loginPanel -->\n            </div>\n          <!-- /.col-md-6 -->\n          <div class=\"col-md-3\"></div>\n          <!-- /.col-md-3 -->\n        </div>\n        <!-- /.row -->\n      </div>",
            styleUrls: ['client/dev/app/components/front-end/user/login/styles/login.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                common_1.FORM_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [users_1.UserService])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
})();
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset-pass.js.map