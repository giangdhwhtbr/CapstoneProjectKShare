var admin_component_1 = require('../components/admin.component');
var knowledge_update_1 = require('../components/back-end/knowledge/knowledge-update');
var knowledges_list_1 = require('../components/back-end/knowledge/knowledges-list');
var requests_list_1 = require("../components/back-end/request/requests-list");
var request_update_1 = require("../components/back-end/request/request-update");
var user_list_1 = require("../components/back-end/users/user-list");
var reports_list_1 = require("../components/back-end/report/reports-list");
var auth_1 = require('./auth');
exports.AdminRoutes = [
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [auth_1.AdminAuthGuard],
        children: [
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        component: user_list_1.UserListComponent
                    }
                ]
            },
            {
                path: 'reports',
                children: [
                    {
                        path: '',
                        component: reports_list_1.ReportListComponent
                    }
                ]
            },
            {
                path: 'knowledges',
                children: [
                    {
                        path: '',
                        component: knowledges_list_1.KnowledgeListComponent
                    },
                    {
                        path: ':id',
                        component: knowledge_update_1.UpdateKnowledgeComponent
                    }
                ]
            },
            {
                path: 'requests',
                children: [
                    {
                        path: '',
                        component: requests_list_1.RequestListComponent
                    },
                    {
                        path: ':id',
                        component: request_update_1.UpdateRequestComponent
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'knowledges'
            }
        ]
    }
];
//# sourceMappingURL=admin.routes.js.map