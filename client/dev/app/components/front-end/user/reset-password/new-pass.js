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
/**
 * Created by GiangDH on 5/19/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var users_1 = require('../../../../services/users');
var NewPasswordComponent = (function () {
    function NewPasswordComponent(fb, _userService, router, route) {
        var _this = this;
        this.fb = fb;
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.resetPasswordToken = params['token'];
        });
        this.resetPassForm = fb.group({
            password: [""],
            copass: [""],
        });
    }
    NewPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUserByToken(this.resetPasswordToken)
            .subscribe(function (res) {
            if (res.sendTokenDate) {
                var currentDate = new Date();
                var tokenDate = new Date(res.sendTokenDate);
                var difftime = currentDate.getTime() - tokenDate.getTime();
                if (difftime > 0) {
                    _this.expired = false;
                }
                else {
                    _this.expired = true;
                    _this.errorMessage = 'Rất tiếc đã quá thời hạn để đổi mật khẩu!';
                }
            }
        }, function (err) {
            _this.errorMessage = 'Xin lỗi vì làm phiền, server có lỗi';
        });
    };
    NewPasswordComponent.prototype.updatePassword = function (data) {
        var _this = this;
        var patt = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        var passValid = patt.test(data.password);
        if (!passValid) {
            this.errorMessage = 'Mật khẩu cần nhiều hơn 8 kí tự bao gồm chữ hoa, chữ thường và kí tự đặc biệt';
        }
        else if (data.password !== data.copass) {
            this.errorMessage = 'Mật khẩu và mật khẩu xác nhận không trùng khớp ';
        }
        else {
            this._userService.updateNewPassword(data.password, this.resetPasswordToken)
                .subscribe(function (res) {
                var c = confirm('Mật khẩu đã được thay đổi, chuyển đến trang đăng nhập');
                if (c) {
                    _this.router.navigate(['/login']);
                }
            }, function (error) {
                _this.errorMessage = 'Xin lỗi vì làm phiền, server có lỗi';
            });
        }
    };
    NewPasswordComponent = __decorate([
        core_1.Component({
            template: "\n      <div class=\"container mg-top-50\">\n        <div class=\"row\">\n          <div class=\"col-md-3\"></div>\n          <!-- /.col-md-3 -->\n          <div class=\"col-md-6\">\n            <div *ngIf=\"errorMessage\" class=\"errmess\">{{errorMessage}}\n              <a *ngIf=\"expired\" [routerLink]=\"['/reset-password']\"> click v\u00E0o \u0111\u00E2y \u0111\u1EC3 g\u1EEDi l\u1EA1i email </a>\n            </div>\n\n            <div *ngIf=\"!expired\" class=\"loginPanel\">\n              <div class=\"box-header\">\n                <h2> Thi\u1EBFt l\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi </h2>\n              </div>\n              <form [ngFormModel]=\"resetPassForm\" (ngSubmit)=\"updatePassword(resetPassForm.value)\">\n                 <div class=\"form-group\">\n                    <input class=\"form-control\"\n                          type=\"password\"\n                          required maxlength=\"30\"\n                          placeholder=\"M\u1EADt Kh\u1EA9u\"\n                          name=\"password\"\n                          [ngFormControl]=\"resetPassForm.controls['password']\"\n                    >\n                  </div>\n                  <div class=\"form-group\">\n                    <input #copass class=\"form-control\"\n                          type=\"password\"\n                          required maxlength=\"30\"\n                          placeholder=\"X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u\"\n                          name=\"copass\"\n                          [ngFormControl]=\"resetPassForm.controls['copass']\"\n                    >\n                  </div>\n                <div class=\"row\">\n                    <button class=\"form-control btn btn-success\" type=\"submit\">C\u1EADp nh\u1EADt m\u1EADt kh\u1EA9u</button>\n                </div>\n                <!-- /.row -->\n\n             </form>\n            </div>\n              <!-- /.loginPanel -->\n            </div>\n          <!-- /.col-md-6 -->\n          <div class=\"col-md-3\"></div>\n          <!-- /.col-md-3 -->\n        </div>\n        <!-- /.row -->\n      </div>",
            styleUrls: ['client/dev/app/components/front-end/user/login/styles/login.css'],
            directives: [
                common_1.FORM_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, users_1.UserService, router_1.Router, router_1.ActivatedRoute])
    ], NewPasswordComponent);
    return NewPasswordComponent;
})();
exports.NewPasswordComponent = NewPasswordComponent;
//# sourceMappingURL=new-pass.js.map