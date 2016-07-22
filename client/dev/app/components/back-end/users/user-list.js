"use strict";
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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var users_1 = require('../../../services/users');
var auth_1 = require('../../../services/auth');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var UserListComponent = (function () {
    function UserListComponent(fb, _userService, _auth, router) {
        this._userService = _userService;
        this._auth = _auth;
        this.router = router;
        this.pageTitle = 'users';
        this.filter = '';
        this.numOfUser = 0;
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
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService
            .getAllUsers()
            .then(function (users) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].birthday) {
                    users[i].birthday = new Date(users[i].birthday);
                }
                users[i].createdAt = new Date(users[i].createdAt);
                if (users[i].updatedAt) {
                    users[i].updatedAt = new Date(users[i].updatedAt);
                }
            }
            _this.users = users;
            _this.numOfUser = i;
        }, function (error) {
            _this.errorMessage = error.message;
            console.log(error);
        });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'client/dev/app/components/back-end/users/templates/user-list.html',
            directives: [router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp, router_1.ROUTER_DIRECTIVES, common_1.FORM_DIRECTIVES],
            providers: [users_1.UserService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, users_1.UserService, auth_1.AuthService, router_1.Router])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.js.map