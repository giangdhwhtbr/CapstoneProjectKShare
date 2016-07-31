var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RegisterSuccessComponent = (function () {
    function RegisterSuccessComponent(router) {
        this.router = router;
        this.username = localStorage.getItem('username');
    }
    RegisterSuccessComponent.prototype.returnHome = function () {
        this.router.navigateByUrl('/');
    };
    RegisterSuccessComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"container mg-top-50\">\n            <h1>Register Success, Welcome {{username}}</h1>\n            <button (click)=\"returnHome()\">Home</button>\n        </div>\n    "
        })
    ], RegisterSuccessComponent);
    return RegisterSuccessComponent;
})();
exports.RegisterSuccessComponent = RegisterSuccessComponent;
//# sourceMappingURL=success.js.map