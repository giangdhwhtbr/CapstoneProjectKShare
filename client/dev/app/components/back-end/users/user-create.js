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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
// UI
var primeng_1 = require('primeng/primeng');
var private_chat_1 = require('../../shared/private-chat');
var users_1 = require('../../../services/users');
var CreateUserComponent = (function () {
    function CreateUserComponent(fb, _userService, router) {
        this._userService = _userService;
        this.router = router;
        this.display = false;
        this.pageHeader = "Create User";
        this.users = [];
        this.userForm = fb.group({
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.required],
            email: ["", common_1.Validators.required],
            role: ["", common_1.Validators.required]
        });
    }
    CreateUserComponent.prototype.addUser = function (user) {
        this._userService
            .addUser(user)
            .subscribe(function (response) {
            window.location.reload();
        }, function (error) {
            console.log(error.text());
        });
    };
    CreateUserComponent = __decorate([
        core_1.Component({
            selector: 'user-create',
            templateUrl: 'client/dev/app/components/back-end/users/templates/user-create.html',
            styleUrls: ['client/dev/asserts/css/backend-styles.css'],
            directives: [
                common_1.FORM_DIRECTIVES,
                primeng_1.Dialog,
                primeng_1.Calendar, private_chat_1.PrivateChatComponent
            ],
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(users_1.UserService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, users_1.UserService, router_1.Router])
    ], CreateUserComponent);
    return CreateUserComponent;
})();
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=user-create.js.map