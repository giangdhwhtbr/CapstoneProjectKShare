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
var primeng_1 = require('primeng/primeng');
var users_1 = require('../../../services/users');
var auth_1 = require('../../../services/auth');
var user_create_1 = require('./user-create');
var UserListComponent = (function () {
    function UserListComponent(_userService, _auth, router) {
        this._userService = _userService;
        this._auth = _auth;
        this.router = router;
        this.pageTitle = 'user';
        this.numOfUser = 0;
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
            styleUrls: [
                'client/dev/asserts/css/backend-styles.css',
                'client/dev/app/components/back-end/users/styles/user.css'
            ],
            directives: [
                user_create_1.CreateUserComponent,
                primeng_1.DataTable,
                primeng_1.Column,
                primeng_1.Header,
                primeng_1.Footer,
                primeng_1.MultiSelect,
                router_1.ROUTER_DIRECTIVES
            ],
            providers: [
                user_create_1.CreateUserComponent
            ]
        }), 
        __metadata('design:paramtypes', [users_1.UserService, auth_1.AuthService, router_1.Router])
    ], UserListComponent);
    return UserListComponent;
})();
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.js.map