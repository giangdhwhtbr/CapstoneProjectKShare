var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var RegisterInfoComponent = (function () {
    function RegisterInfoComponent(fb, router, _userService, route) {
        var _this = this;
        this.fb = fb;
        this.router = router;
        this._userService = _userService;
        this.route = route;
        this.user = [];
        this.userId = '';
        this.route
            .params
            .subscribe(function (params) {
            _this.userId = params['id'];
        });
        this.updateUserForm = fb.group({
            fullname: [""],
            birthday: [""],
            phone: [""],
            ownKnowledge: [""],
            interestedKnowledge: [""]
        });
    }
    RegisterInfoComponent.prototype.update = function (user) {
        var _this = this;
        user = {
            _id: this.userId,
            firstName: user.fullname,
            birthday: user.birthday,
            ownKnowledgeId: user.ownKnowledge,
            interestedKnowledgeId: user.interestedKnowledge
        };
        this._userService.updateUser(user).subscribe(function (res) {
            _this.router.navigateByUrl('/reg/success');
        }, function (err) {
            console.log(err);
        });
    };
    RegisterInfoComponent.prototype.returnHome = function () {
        this.router.navigateByUrl('/');
    };
    RegisterInfoComponent = __decorate([
        core_1.Component({
            templateUrl: "client/dev/app/components/front-end/user/register/templates/info.html",
            styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css']
        })
    ], RegisterInfoComponent);
    return RegisterInfoComponent;
})();
exports.RegisterInfoComponent = RegisterInfoComponent;
//# sourceMappingURL=info.js.map