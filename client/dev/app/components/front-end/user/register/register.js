var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 5/19/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var RegisterComponent = (function () {
    function RegisterComponent(fb, _authService, router) {
        this.fb = fb;
        this._authService = _authService;
        this.router = router;
        this.errorMessage = '';
        this.regForm = fb.group({
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
            copass: [""],
            email: ["", common_1.Validators.pattern('^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$')]
        });
    }
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        if (user.password !== user.copass) {
            this.errorMessage = 'Sai mật khẩu xác nhận! ';
        }
        else {
            this._authService
                .register(user)
                .subscribe(function (response) {
                user = {
                    username: user.username,
                    password: user.password
                };
                _this._authService
                    .login(user)
                    .subscribe(function (res) {
                    localStorage.setItem('username', res.username);
                    localStorage.setItem('userrole', 'normal');
                    _this.router.navigateByUrl('/reg/info/' + response._id);
                }, function (error) {
                    console.log(error);
                });
            }, function (error) {
                if (error.errors) {
                    var errors = error.errors;
                    if (errors.username) {
                        _this.errorMessage = errors.username.message;
                    }
                    else if (errors.password) {
                        _this.errorMessage = errors.password.message;
                    }
                    else if (errors.email) {
                        _this.errorMessage = errors.email.message;
                    }
                }
                if (error.errmsg) {
                    if (error.errmsg.includes('email')) {
                        _this.errorMessage = 'email đã tồn tại!';
                    }
                    else if (error.errmsg.includes('username')) {
                        _this.errorMessage = 'tên đăng nhập đã tồn tại';
                    }
                }
            });
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'client/dev/app/components/front-end/user/register/templates/register.html',
            styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'],
            directives: [common_1.FORM_DIRECTIVES]
        })
    ], RegisterComponent);
    return RegisterComponent;
})();
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.js.map