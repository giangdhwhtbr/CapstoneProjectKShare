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
var pager_1 = require('../../../services/pager');
var users_1 = require('../../../services/users');
var auth_1 = require('../../../services/auth');
var primeng_1 = require('primeng/primeng');
var primeng_2 = require('primeng/primeng');
var private_chat_1 = require('../../shared/private-chat');
var UserListComponent = (function () {
    function UserListComponent(fb, _userService, _auth, router) {
        this._userService = _userService;
        this._auth = _auth;
        this.router = router;
        this.pageTitle = 'users';
        this.filter = '';
        this.numOfUser = 0;
        this.userForm = fb.group({
            username: ["", common_1.Validators.required],
            password: ["", common_1.Validators.required],
            email: ["", common_1.Validators.required],
            role: ["", common_1.Validators.required]
        });
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService
            .getAllUsers()
            .subscribe(function (users) {
            console.log(users);
            for (var i = 0; i < users.length; i++) {
                if (users[i].birthday) {
                    users[i].birthday = new Date(users[i].birthday);
                }
                users[i].createdAt = new Date(users[i].createdAt);
                if (users[i].updatedAt) {
                    users[i].updatedAt = new Date(users[i].updatedAt);
                }
                users[i]["num"] = i + 1;
            }
            _this.users = users;
            _this.numOfUser = i;
        }, function (error) {
            _this.errorMessage = error.message;
            console.log(error);
        });
        $(document).ready(function () {
            $('select').material_select();
            $('.modal-trigger').leanModal();
            $('.collapsible').collapsible();
        });
    };
    UserListComponent.prototype.addUser = function (user) {
        var _this = this;
        this._userService
            .addUser(user)
            .subscribe(function (response) {
            _this.users.push(response);
        }, function (error) {
            console.log(error.text());
        });
    };
    UserListComponent.prototype.banUser = function (userid) {
        this._userService.banUser(userid).subscribe(function (response) {
            Materialize.toast('Khoá người dùng này trong vòng 1 ngày!', 6000);
            $("#" + userid).hide();
            console.log(response);
        }, function (error) { });
    };
    UserListComponent.prototype.deactivateUser = function (user) {
        console.log(user);
        user.status = 'deactive';
        this._userService.updateUser(user, []).subscribe(function (user) {
        });
    };
    UserListComponent.prototype.activateUser = function (user) {
        user.status = 'active';
        user.banStatus.status = false;
        this._userService.updateUser(user, []).subscribe(function (user) {
        });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'client/dev/app/components/back-end/users/templates/user-list.html',
            directives: [router_1.ROUTER_DIRECTIVES, primeng_2.Paginator, common_1.FORM_DIRECTIVES, primeng_1.DataTable, primeng_1.Column, primeng_1.Header, primeng_1.Footer, private_chat_1.PrivateChatComponent],
            providers: [users_1.UserService, pager_1.PagerService],
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, users_1.UserService, auth_1.AuthService, router_1.Router])
    ], UserListComponent);
    return UserListComponent;
})();
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.js.map