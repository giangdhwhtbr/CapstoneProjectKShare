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
var side_bar_1 = require('./back-end/shared/side-bar');
// Functions
var knowledge_update_1 = require('./back-end/knowledge/knowledge-update');
var knowledges_list_1 = require('./back-end/knowledge/knowledges-list');
var requests_list_1 = require("./back-end/request/requests-list");
var request_update_1 = require("./back-end/request/request-update");
var user_list_1 = require("./back-end/users/user-list");
var reports_list_1 = require("./back-end/report/reports-list");
var tag_list_control_1 = require("./back-end/tag/tag-list-control");
var article_list_clt_1 = require("./back-end/article/article-list-clt");
var private_chat_1 = require("./shared/private-chat");
var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'kshare',
            template: "\n      <sidebar></sidebar>\n    <main>\n    <router-outlet></router-outlet>\n    </main>\n  <private-chat></private-chat>\n  ",
            styleUrls: ['client/dev/asserts/css/admin.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                side_bar_1.SidebarComponent,
                private_chat_1.PrivateChatComponent
            ],
            precompile: [
                user_list_1.UserListComponent,
                requests_list_1.RequestListComponent,
                knowledges_list_1.KnowledgeListComponent,
                knowledge_update_1.UpdateKnowledgeComponent,
                request_update_1.UpdateRequestComponent,
                reports_list_1.ReportListComponent,
                tag_list_control_1.TagListCtlComponent,
                article_list_clt_1.ArtListCtlComponent
            ]
        })
    ], AdminComponent);
    return AdminComponent;
})();
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map