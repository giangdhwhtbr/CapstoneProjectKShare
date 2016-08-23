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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var private_chat_1 = require('../../shared/private-chat');
var nav_bar_1 = require('../shared/nav-bar');
var side_bar_1 = require('../shared/side-bar');
var users_1 = require('../../../services/users');
var UserInfoComponent = (function () {
    function UserInfoComponent(fb, _userService, router, params, _auth) {
        this._userService = _userService;
        this.router = router;
        this._auth = _auth;
        this.pageTitle = 'users';
        this.id = params.getParam('id');
        this.userUpdateForm = fb.group({
            _id: [""],
            firstName: ["", common_1.Validators.required],
            lastName: ["", common_1.Validators.required],
            displayName: ["", common_1.Validators.required],
            username: ["", common_1.Validators.required],
            email: ["", common_1.Validators.required],
            role: ["", common_1.Validators.required]
        });
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Check login -- @@ fucking "ngu dan" way
        if (!this._auth.dashboardFilter()) {
            this.router.navigate(['Home']);
        }
        this._userService.getUserById(this.id).subscribe(function (user) {
            _this.user = user;
        }, function (error) {
            console.log(error.text());
        });
    };
    UserInfoComponent.prototype.updateUser = function (user) {
        var _this = this;
        this._userService
            .updateUser(user)
            .subscribe(function (response) {
            _this.router.navigateByUrl('/admin/back.users');
        }, function (error) {
            console.log(error.text());
        });
    };
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'user-info',
            templateUrl: 'client/dev/app/components/back-end/users/templates/user-info.html',
            styleUrls: ['client/dev/asserts/css/backend-styles.css'],
            directives: [
                common_1.FORM_DIRECTIVES,
                router_1.ROUTER_DIRECTIVES,
                nav_bar_1.NavbarComponent,
                side_bar_1.SidebarComponent, private_chat_1.PrivateChatComponent
            ]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(users_1.UserService))
    ], UserInfoComponent);
    return UserInfoComponent;
})();
exports.UserInfoComponent = UserInfoComponent;
//# sourceMappingURL=user-info.js.map