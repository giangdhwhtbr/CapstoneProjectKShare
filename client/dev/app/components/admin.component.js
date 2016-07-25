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
require('rxjs/Rx'); // Load all features
var router_1 = require('@angular/router');
// Layout component
var nav_bar_1 = require('./back-end/shared/nav-bar');
var side_bar_1 = require('./back-end/shared/side-bar');
// Functions
var knowledge_update_1 = require('./back-end/knowledge/knowledge-update');
var knowledges_list_1 = require('./back-end/knowledge/knowledges-list');
var requests_list_1 = require("./back-end/request/requests-list");
var request_update_1 = require("./back-end/request/request-update");
var badword_update_1 = require("./back-end/badword/badword-update");
var badwords_list_1 = require("./back-end/badword/badwords-list");
var user_list_1 = require("./back-end/users/user-list");
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'kshare',
            template: "\n  <div id=\"wrapper\">\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n      <nav-bar></nav-bar>\n      <sidebar></sidebar>\n    </nav>\n    <router-outlet></router-outlet>\n  </div>\n  ",
            directives: [
                router_1.ROUTER_DIRECTIVES,
                nav_bar_1.NavbarComponent,
                side_bar_1.SidebarComponent
            ],
            precompile: [
                user_list_1.UserListComponent,
                requests_list_1.RequestListComponent,
                knowledges_list_1.KnowledgeListComponent,
                badwords_list_1.BadwordListComponent,
                badword_update_1.UpdateBadwordComponent,
                knowledge_update_1.UpdateKnowledgeComponent,
                request_update_1.UpdateRequestComponent,
            ]
        })
    ], AdminComponent);
    return AdminComponent;
})();
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map