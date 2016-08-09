//Root Component
var kshare_component_1 = require('../components/kshare.component');
//Function Components
var home_1 = require("../components/front-end/home/home");
var newsfeed_1 = require("../components/front-end/newsfeed/newsfeed");
var request_list_1 = require("../components/front-end/request/request-list");
var request_detail_1 = require("../components/front-end/request/request-detail");
var request_update_1 = require("../components/back-end/request/request-update");
var request_search_1 = require("../components/front-end/request/request-search");
var request_create_1 = require("../components/back-end/request/request-create");
var kspace_1 = require("../components/front-end/kspace/kspace");
var kspace_list_1 = require("../components/front-end/kspace/kspace-list");
var kspace_info_1 = require("../components/front-end/kspace/kspace-info");
var friend_list_1 = require("../components/front-end/user/user-profile/friend-list");
var user_profile_1 = require("../components/front-end/user/user-profile/user-profile");
var register_1 = require('../components/front-end/user/register/register');
var info_1 = require('../components/front-end/user/register/info');
var success_1 = require('../components/front-end/user/register/success');
var login_1 = require("../components/front-end/user/login/login");
var reset_pass_1 = require("../components/front-end/user/reset-password/reset-pass");
var new_pass_1 = require("../components/front-end/user/reset-password/new-pass");
var create_article_1 = require("../components/front-end/article/create-article");
var detail_article_1 = require("../components/front-end/article/detail-article");
var list_article_1 = require("../components/front-end/article/list-article");
var edit_article_1 = require("../components/front-end/article/edit-article");
var displayArtByTag_1 = require("../components/front-end/tag/displayArtByTag");
var auth_1 = require('./auth');
var auth_2 = require('../services/auth');
exports.KShareRoutes = [
    {
        path: '',
        component: kshare_component_1.KshareComponent,
        children: [
            {
                path: 'newsfeed',
                component: newsfeed_1.NewsFeedComponent
            },
            {
                path: 'reg',
                //canActivate: [ AdminAuthGuard ],
                children: [
                    {
                        path: '',
                        component: register_1.RegisterComponent
                    },
                    {
                        path: 'info/:id',
                        component: info_1.RegisterInfoComponent
                    },
                    {
                        path: 'success',
                        component: success_1.RegisterSuccessComponent
                    }
                ]
            },
            {
                path: 'login',
                canActivate: [auth_1.AdminAuthGuard],
                component: login_1.LoginComponent
            },
            {
                path: 'reset-password',
                children: [
                    {
                        path: '',
                        component: reset_pass_1.ResetPasswordComponent
                    },
                    {
                        path: ':token',
                        component: new_pass_1.NewPasswordComponent
                    }
                ]
            },
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
                    },
                    {
                        path: '',
                        component: list_article_1.listArticleComponent
                    },
                    {
                        path: 'edit/:id',
                        component: edit_article_1.EditArticleComponent
                    },
                    {
                        path: ':id',
                        component: detail_article_1.detailArticleComponent
                    }
                ]
            },
            {
                path: 'tag',
                children: [
                    {
                        path: ':id',
                        component: displayArtByTag_1.displayArtByTagComponent
                    }
                ]
            },
            {
                path: 'kspace',
                children: [
                    {
                        path: 'info',
                        children: [{
                                path: ':id/:lecturer',
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
                        path: 'create',
                        component: request_create_1.CreateRequestComponent
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                path: 'info',
                                component: request_detail_1.RequestDetailClientComponent
                            },
                            {
                                path: 'update',
                                component: request_update_1.UpdateRequestComponent
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
                path: ':id/:lecturer',
                component: kspace_1.KSpaceComponent
            }]
    },
];
exports.authProviders = [auth_1.AdminAuthGuard, auth_2.AuthService];
//# sourceMappingURL=kshare.routes.js.map