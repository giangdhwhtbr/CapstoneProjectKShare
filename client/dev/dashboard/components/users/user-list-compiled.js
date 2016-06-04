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
var core_1 = require('@angular/core');
var users_services_1 = require('../../services/users-services');
var UserListComponent = function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
        this.pageTitle = 'Users List';
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getAllUsers().subscribe(function (users) {
            var formatDate = function formatDate(date) {
                if (date) {
                    var newDate, day, month, year;
                    year = date.substr(0, 4);
                    month = date.substr(5, 2);
                    day = date.substr(8, 2);
                    return newDate = day + '/' + month + '/' + year;
                }
            };
            for (var i = 0; i < users.length; i++) {
                users[i].createdAt = formatDate(users[i].createdAt);
                users[i].updatedAt = formatDate(users[i].updatedAt);
            }
            _this.users = users;
        }, function (error) {
            _this.errorMessage = error.message;
            console.log(error);
        });
    };
    UserListComponent = __decorate([core_1.Component({
        selector: 'user-list',
        templateUrl: 'client/dev/dashboard/templates/users/user-list.html',
        styleUrls: ['client/dev/dashboard/styles/user-list.css']
    }), __metadata('design:paramtypes', [users_services_1.UserService])], UserListComponent);
    return UserListComponent;
}();
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.js.map

//# sourceMappingURL=user-list-compiled.js.map
