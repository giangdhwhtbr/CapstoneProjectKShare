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
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var nav_bar_1 = require('../components/nav-bar');
var sidebar_1 = require('../components/sidebar');
var user_list_1 = require('../components/user-list');
var UsersComponent = function () {
    function UsersComponent() {}
    UsersComponent = __decorate([core_1.Component({
        selector: 'users-mgn',
        templateUrl: 'client/dev/dashboard/templates/users.html',
        directives: [user_list_1.UserListComponent, nav_bar_1.NavbarComponent, sidebar_1.SidebarComponent, router_1.ROUTER_DIRECTIVES]
    }), __metadata('design:paramtypes', [])], UsersComponent);
    return UsersComponent;
}();
exports.UsersComponent = UsersComponent;

//# sourceMappingURL=users-compiled.js.map