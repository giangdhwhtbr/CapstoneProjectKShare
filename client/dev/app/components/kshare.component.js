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
var user_profile_1 = require("./front-end/user/user-profile/user-profile");
//import { FriendListComponent } from "./front-end/shared/friend-list";
/**
 * Page components
 */
var home_1 = require("./front-end/home/home");
var request_list_1 = require("./front-end/request/request-list");
var request_detail_1 = require("./front-end/request/request-detail");
var request_category_1 = require("./front-end/request/request-category");
var kspace_1 = require("./front-end/kspace/kspace");
var kspace_list_1 = require("./front-end/kspace/kspace-list");
var kspace_info_1 = require("./front-end/kspace/kspace-info");
var friend_list_1 = require("./front-end/user/user-profile/friend-list");
var user_profile_bar_1 = require("./front-end/user/user-profile/user-profile-bar");
var create_article_1 = require("./front-end/article/create-article");
var detail_article_1 = require("./front-end/article/detail-article");
var list_article_1 = require("./front-end/article/list-article");
var displayArtByTag_1 = require("./front-end/tag/displayArtByTag");
var request_create_1 = require("./back-end/request/request-create");
/**
 * Page components
 */
var KshareComponent = (function () {
    function KshareComponent() {
    }
    KshareComponent = __decorate([
        core_1.Component({
            selector: 'kshare-app',
            template: "\n    <header></header>\n    <sidebar></sidebar>\n    <!--<friend-list></friend-list>-->\n    <router-outlet></router-outlet>\n  ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                header_1.HeaderComponent,
                side_bar_1.SideBarComponent,
                footer_1.FooterComponent
            ],
            precompile: [
                home_1.HomeComponent,
                request_list_1.RequestListClientComponent,
                request_detail_1.RequestDetailClientComponent,
                request_category_1.RequestCategoryComponent,
                kspace_1.KSpaceComponent,
                kspace_list_1.KSpaceListComponent,
                kspace_info_1.KSpaceInfoComponent,
                user_profile_1.UserProfileComponent,
                friend_list_1.FriendListComponent,
                user_profile_bar_1.UserProfileBarComponent,
                create_article_1.CreateArticleComponent,
                detail_article_1.detailArticleComponent,
                list_article_1.listArticleComponent,
                displayArtByTag_1.displayArtByTagComponent,
                request_create_1.CreateRequestComponent
            ]
        })
    ], KshareComponent);
    return KshareComponent;
})();
exports.KshareComponent = KshareComponent;
//# sourceMappingURL=kshare.component.js.map