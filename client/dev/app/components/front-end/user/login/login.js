var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by GiangDH on 5/18/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var auth_1 = require('../../../../services/auth');
var LoginComponent = (function () {
    function LoginComponent(fb, _authService, router) {
        this._authService = _authService;
        this.router = router;
        this.user = [];
        this.userValid = "";
        this.passValid = "";
        this.loginForm = fb.group({
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.required]
        });
    }
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this._authService
            .login(user)
            .subscribe(function (res) {
            localStorage.setItem('username', res.username);
            if (res.role == 'admin') {
                localStorage.setItem('userrole', res.role);
            }
            else {
                localStorage.setItem('userrole', 'normal');
            }
            _this.router.navigate(['/']);
        }, function (error) {
            if (error._body) {
                error = JSON.parse(error._body);
                if (error.invalidUsername) {
                    _this.userValid = '*' + error.invalidUsername;
                    _this.passValid = null;
                }
                else if (error.invalidPassword) {
                    _this.passValid = '*' + error.invalidPassword;
                    _this.userValid = null;
                }
                else if (error.message) {
                    _this.bannedMessage = '*' + error.message;
                }
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: 'client/dev/app/components/front-end/user/login/templates/login.html',
            styleUrls: ['client/dev/app/components/front-end/user/login/styles/login.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                common_1.FORM_DIRECTIVES
            ]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(auth_1.AuthService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, auth_1.AuthService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map