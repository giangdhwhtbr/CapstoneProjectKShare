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
// UI
var primeng_1 = require('primeng/primeng');
var users_1 = require('../../../services/users');
var CreateUserComponent = (function () {
    function CreateUserComponent(fb, _userService, router) {
        this._userService = _userService;
        this.router = router;
        this.display = false;
        this.pageHeader = "Create User";
        this.users = [];
        this.userForm = fb.group({
            firstName: [""],
            lastName: [""],
            displayName: [""],
            birthday: [""],
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.required],
            email: ["", common_1.Validators.required],
            role: ["", common_1.Validators.required],
            ownKnowledgeId: [""],
            interestedKnowledgeId: [""],
            onlineTime: [""]
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
                primeng_1.Calendar
            ]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(users_1.UserService))
    ], CreateUserComponent);
    return CreateUserComponent;
})();
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=user-create.js.map