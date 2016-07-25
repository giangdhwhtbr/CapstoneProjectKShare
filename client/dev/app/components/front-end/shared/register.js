var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by GiangDH on 5/19/16.
 */
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var auth_1 = require('../../../services/auth');
var RegisterComponent = (function () {
    function RegisterComponent(fb, _authService, router) {
        this._authService = _authService;
        this.router = router;
        this.user = [];
        this.regForm = fb.group({
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
            email: ["", common_1.Validators.pattern('^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$')]
        });
    }
    RegisterComponent.prototype.register = function (user) {
        this._authService
            .register(user)
            .subscribe(function (response) {
            window.location.reload();
        }, function (error) {
            console.log(error);
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'client/dev/app/components/front-end/shared/templates/register.html',
            styleUrls: ['client/dev/app/components/front-end/shared/styles/login.css'],
            directives: [common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(auth_1.AuthService))
    ], RegisterComponent);
    return RegisterComponent;
})();
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.js.map