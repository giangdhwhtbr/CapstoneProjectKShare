"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = undefined && undefined.__param || function (paramIndex, decorator) {
    return function (target, key) {
        decorator(target, key, paramIndex);
    };
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var users_services_1 = require('../../services/users-services');
var CreateUserComponent = function () {
    function CreateUserComponent(fb, _userService, router) {
        //this.userForm = fb.group({
        //  firstName : ["",Validators.required, Validators.pattern("^[a-z\d\-_\s]+$/i"),Validators.maxLength(25)],
        //  lastName: ["",Validators.required, Validators.pattern("^[a-z\d\-_\s]+$/i"),Validators.maxLength(25)],
        //  displayName: ["", Validators.pattern("^[a-z\d\-_\s]+$/i"),Validators.maxLength(25)],
        //  username: ["",Validators.required, Validators.pattern("^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{1,15}$"),Validators.maxLength(25)],
        //  password: ["",Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),Validators.maxLength(25)],
        //  email: ["", Validators.required, Validators.pattern("^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$")],
        //  role: ["",Validators.required]
        //});
        this._userService = _userService;
        this.router = router;
        this.pageHeader = "Create User";
        this.users = [];
        this.userForm = fb.group({
            firstName: ["", common_1.Validators.required],
            lastName: ["", common_1.Validators.required],
            displayName: ["", common_1.Validators.required],
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.required],
            email: ["", common_1.Validators.required],
            role: ["", common_1.Validators.required]
        });
    }
    CreateUserComponent.prototype.addUser = function (user) {
        this._userService.addUser(user).subscribe(function (response) {
            //this.router.parent.navigateByUrl('/admin/users');
            window.location.reload();
        }, function (error) {
            console.log(error.text());
        });
    };
    CreateUserComponent = __decorate([core_1.Component({
        selector: 'user-create',
        templateUrl: 'client/dev/dashboard/templates/users/user-create.html',
        directives: [common_1.FORM_DIRECTIVES]
    }), __param(0, core_1.Inject(common_1.FormBuilder)), __param(1, core_1.Inject(users_services_1.UserService)), __metadata('design:paramtypes', [common_1.FormBuilder, users_services_1.UserService, router_1.Router])], CreateUserComponent);
    return CreateUserComponent;
}();
exports.CreateUserComponent = CreateUserComponent;
//# sourceMappingURL=user-create.js.map

//# sourceMappingURL=user-create-compiled.js.map
