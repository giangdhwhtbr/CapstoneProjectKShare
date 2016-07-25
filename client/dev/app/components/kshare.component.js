var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 6/4/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
/**
 * Shared components
 */
var header_1 = require("./front-end/shared/header");
var side_bar_1 = require("./front-end/shared/side-bar");
var footer_1 = require("./front-end/shared/footer");
var login_1 = require("./front-end/shared/login");
var register_1 = require("./front-end/shared/register");
var user_profile_1 = require("./front-end/user-profile/user-profile");
/**
 * Page components
 */
var home_1 = require("./front-end/home/home");
var request_list_1 = require("./front-end/request/request-list");
var request_detail_1 = require("./front-end/request/request-detail");
var request_update_1 = require("./front-end/request/request-update");
var request_search_1 = require("./front-end/request/request-search");
var kspace_1 = require("./front-end/kspace/kspace");
var kspace_list_1 = require("./front-end/kspace/kspace-list");
var kspace_info_1 = require("./front-end/kspace/kspace-info");
var friend_list_1 = require("./front-end/user-profile/friend-list");
/**
 * Page components
 */
var KshareComponent = (function () {
    function KshareComponent() {
    }
    KshareComponent = __decorate([
        core_1.Component({
            selector: 'kshare-app',
            template: "\n    <header></header>\n    <sidebar></sidebar>\n    <router-outlet></router-outlet>\n    <login></login>\n    <register></register>\n    <footer></footer>\n  ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                header_1.HeaderComponent,
                side_bar_1.SideBarComponent,
                footer_1.FooterComponent,
                login_1.LoginComponent,
                register_1.RegisterComponent
            ],
            precompile: [
                home_1.HomeComponent,
                request_list_1.RequestListClientComponent,
                request_detail_1.RequestDetailClientComponent,
                request_update_1.RequestUpdateClientComponent,
                request_search_1.RequestCategoryComponent,
                kspace_1.KSpaceComponent,
                kspace_list_1.KSpaceListComponent,
                kspace_info_1.KSpaceInfoComponent,
                user_profile_1.UserProfileComponent,
                friend_list_1.FriendListComponent
            ]
        })
    ], KshareComponent);
    return KshareComponent;
})();
exports.KshareComponent = KshareComponent;
//# sourceMappingURL=kshare.component.js.map