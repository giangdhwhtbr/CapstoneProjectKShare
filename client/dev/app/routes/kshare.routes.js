//Root Component
var kshare_component_1 = require('../components/kshare.component');
//Function Components
var home_1 = require("../components/front-end/home/home");
var request_list_1 = require("../components/front-end/request/request-list");
var request_detail_1 = require("../components/front-end/request/request-detail");
var request_update_1 = require("../components/front-end/request/request-update");
var request_search_1 = require("../components/front-end/request/request-search");
var kspace_1 = require("../components/front-end/kspace/kspace");
var kspace_list_1 = require("../components/front-end/kspace/kspace-list");
var kspace_info_1 = require("../components/front-end/kspace/kspace-info");
var friend_list_1 = require("../components/front-end/user-profile/friend-list");
var user_profile_1 = require("../components/front-end/user-profile/user-profile");
var create_article_1 = require("../components/front-end/article/create-article");
exports.KShareRoutes = [
    {
        path: '',
        component: kshare_component_1.KshareComponent,
        children: [
            {
                path: 'user',
                children: [
                    {
                        path: ':name',
                        children: [
                            {
                                path: 'friends',
                                component: friend_list_1.FriendListComponent
                            },
                            {
                                path: '',
                                component: user_profile_1.UserProfileComponent
                            }
                        ]
                    }
                ]
            },
            {
                path: 'article',
                children: [
                    {
                        path: 'create',
                        component: create_article_1.CreateArticleComponent
                    }
                ]
            },
            {
                path: 'kspace',
                children: [
                    {
                        path: 'info',
                        children: [{
                                path: ':id',
                                component: kspace_info_1.KSpaceInfoComponent
                            }]
                    },
                    {
                        path: '',
                        component: kspace_list_1.KSpaceListComponent
                    }
                ]
            },
            {
                path: 'requests',
                children: [
                    {
                        path: ':id',
                        children: [
                            {
                                path: 'info',
                                component: request_detail_1.RequestDetailClientComponent
                            },
                            {
                                path: 'update',
                                component: request_update_1.RequestUpdateClientComponent
                            }
                        ]
                    },
                    {
                        path: ':type/:id',
                        pathMatch: 'full',
                        component: request_search_1.RequestCategoryComponent
                    },
                    {
                        path: '',
                        component: request_list_1.RequestListClientComponent
                    }
                ]
            },
            {
                path: '',
                component: home_1.HomeComponent
            }
        ]
    },
    {
        path: 'room',
        children: [{
                path: ':id',
                component: kspace_1.KSpaceComponent
            }]
    },
];
//# sourceMappingURL=kshare.routes.js.map