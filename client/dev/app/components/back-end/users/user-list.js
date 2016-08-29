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
        this.users = [];
        this.filter = '';
        this.numOfUser = 0;
        this.createHid = true;
        this.userrole = localStorage.getItem('userrole');
        this.userrole === 'admin' ? this.createHid = false : this.createHid = true;
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
            for (var i = 0; i < users.length; i++) {
                if (users[i].birthday) {
                    users[i].birthday = new Date(users[i].birthday);
                }
                users[i].createdAt = new Date(users[i].createdAt);
                if (users[i].updatedAt) {
                    users[i].updatedAt = new Date(users[i].updatedAt);
                }
                users[i]["num"] = i + 1;
                if (_this.userrole !== 'admin' && users[i].role !== 'admin') {
                    _this.users.push(users[i]);
                }
                else {
                    _this.users.push(users[i]);
                }
            }
            _this.numOfUser = i;
        }, function (error) {
            _this.errorMessage = error.message;
        });
        $(document).ready(function () {
            $('select').material_select();
            $('.modal-trigger').leanModal();
            $('.collapsible').collapsible();
        });
    };
    UserListComponent.prototype.addUser = function (user) {
        var _this = this;
        user.role = $('#role').val();
        var validateUsername = function (username) {
            var pattern = new RegExp('^[a-zA-Z0-9_.-]{8,30}$');
            return pattern.test(username);
        };
        var validatePass = function (password) {
            var pattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
            return pattern.test(password);
        };
        if (!validateUsername(user.username)) {
            this.errorMessage = 'Vui lòng nhập tên đăng nhập trong khoảng từ 8-30 kí tự, không dấu và không' +
                ' chứa kí' +
                ' tự' +
                ' đặc' +
                ' biệt! ';
        }
        else if (!validatePass(user.password)) {
            this.errorMessage = 'Mât khẩu phải có ít nhất 8 kí tự, bao gồm 1 kí tự viết hoa, 1 kí tự viết thường, 1 kí' +
                ' tự đặc biệt và 1 số';
        }
        else {
            this._userService
                .addUser(user)
                .subscribe(function (response) {
                if (response.role !== 'admin') {
                    _this.users.push(response);
                }
            }, function (error) {
                if (error.errors) {
                    var errors = error.errors;
                    if (errors.username) {
                        _this.errorMessage = errors.username.message;
                    }
                    else if (errors.password) {
                        _this.errorMessage = errors.password.message;
                    }
                    else if (errors.email) {
                        _this.errorMessage = errors.email.message;
                    }
                }
                if (error.errmsg) {
                    if (error.errmsg.includes('username')) {
                        _this.errorMessage = 'tên đăng nhập đã tồn tại';
                    }
                    else if (error.errmsg.includes('email')) {
                        _this.errorMessage = 'email đã tồn tại!';
                    }
                }
            });
        }
    };
    UserListComponent.prototype.banUser = function (user) {
        if (user.role === 'admin') {
            this.errMsg = 'Bạn không thể ban một admin';
        }
        this._userService.banUser(user._id).subscribe(function (response) {
            Materialize.toast('Khoá người dùng này trong vòng 1 ngày!', 6000);
            $("#" + user._id).hide();
            user.banStatus.status = true;
        }, function (error) { });
    };
    UserListComponent.prototype.deactivateUser = function (user) {
        if (user.role === 'admin') {
            this.errMsg = 'Bạn không thể khoá tài khoản của admin';
        }
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