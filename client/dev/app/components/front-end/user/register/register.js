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
 * Created by GiangDH on 5/19/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var auth_1 = require('../../../../services/auth');
var RegisterComponent = (function () {
    function RegisterComponent(fb, _authService, router) {
        this.fb = fb;
        this._authService = _authService;
        this.router = router;
        this.passValid = false;
        this.regForm = fb.group({
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
            copass: [""],
            email: ["", common_1.Validators.pattern('^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$')]
        });
    }
    RegisterComponent.prototype.register = function (user) {
        var _this = this;
        if (user.password === user.copass) {
            this.coPassValid = true;
        }
        if (this.coPassValid) {
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
                console.log(error);
            });
        }
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'client/dev/app/components/front-end/user/register/templates/register.html',
            styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_1.AuthService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
})();
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.js.map