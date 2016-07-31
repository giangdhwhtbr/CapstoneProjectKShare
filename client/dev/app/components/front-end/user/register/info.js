var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var users_1 = require('../../../../services/users');
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
            fullName: [""],
            displayName: [""],
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
            fullName: user.fullName,
            displayName: user.displayName,
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
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, users_1.UserService, router_1.ActivatedRoute])
    ], RegisterInfoComponent);
    return RegisterInfoComponent;
})();
exports.RegisterInfoComponent = RegisterInfoComponent;
//# sourceMappingURL=info.js.map