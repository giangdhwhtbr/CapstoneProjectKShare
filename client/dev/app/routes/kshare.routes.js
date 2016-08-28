//Root Component
var kshare_component_1 = require('../components/kshare.component');
//Function Components
var home_1 = require("../components/front-end/home/home");
var newsfeed_1 = require("../components/front-end/newsfeed/newsfeed");
var request_list_1 = require("../components/front-end/request/request-list");
var request_detail_1 = require("../components/front-end/request/request-detail");
var request_update_1 = require("../components/back-end/request/request-update");
var request_category_1 = require("../components/front-end/request/request-category");
var request_create_1 = require("../components/back-end/request/request-create");
var kspace_1 = require("../components/front-end/kspace/kspace");
var kspace_list_1 = require("../components/front-end/kspace/kspace-list");
var kspace_info_1 = require("../components/front-end/kspace/kspace-info");
var friend_list_1 = require("../components/front-end/user/user-profile/friend-list");
var user_profile_1 = require("../components/front-end/user/user-profile/user-profile");
var rs_search_user_1 = require("../components/front-end/user/search/rs-search-user");
var register_1 = require('../components/front-end/user/register/register');
var info_1 = require('../components/front-end/user/register/info');
var user_info_update_1 = require('../components/front-end/user/user-profile/user-info-update');
var login_1 = require("../components/front-end/user/login/login");
var reset_pass_1 = require("../components/front-end/user/reset-password/reset-pass");
var new_pass_1 = require("../components/front-end/user/reset-password/new-pass");
var create_article_1 = require("../components/front-end/article/create-article");
var detail_article_1 = require("../components/front-end/article/detail-article");
var list_article_1 = require("../components/front-end/article/list-article");
var edit_article_1 = require("../components/front-end/article/edit-article");
var displayArtByTag_1 = require("../components/front-end/tag/displayArtByTag");
var _404_1 = require("../components/shared/404");
var auth_1 = require('./auth');
var auth_2 = require('../services/auth');
var public_kspace_1 = require('../components/front-end/kspace/public-kspace');
var public_room_1 = require('../components/front-end/kspace/public-room');
var create_kspace_1 = require('../components/front-end/kspace/create-kspace');
var join_room_1 = require('../components/front-end/kspace/join-room');
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
                children: [
                    {
                        path: '',
                        component: register_1.RegisterComponent,
                        canActivate: [auth_1.Guest]
                    },
                    {
                        path: 'info/:id',
                        component: info_1.RegisterInfoComponent,
                        canActivate: [auth_1.isLogin]
                    }
                ]
            },
            {
                path: 'login',
                canActivate: [auth_1.Guest],
                component: login_1.LoginComponent
            },
            {
                path: 'reset-password',
                canActivate: [auth_1.Guest],
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
                            },
                            {
                                path: 'info',
                                component: user_info_update_1.UpdateUserComponent
                            }
                        ]
                    },
                    {
                        path: 'search/:name',
                        component: rs_search_user_1.userSearchRsComponent
                    }
                ]
            },
            {
                path: 'article',
                children: [
                    {
                        path: 'create',
                        component: create_article_1.CreateArticleComponent,
                        canActivate: [auth_1.isLogin]
                    },
                    {
                        path: '',
                        component: list_article_1.listArticleComponent
                    },
                    {
                        path: 'edit/:id',
                        component: edit_article_1.EditArticleComponent,
                        canActivate: [auth_1.isLogin]
                    },
                    {
                        path: ':id',
                        component: detail_article_1.detailArticleComponent
                    },
                    {
                        path: '**',
                        redirectTo: '/error'
                    }
                ]
            },
            {
                path: 'tag',
                children: [
                    {
                        path: ':id',
                        component: displayArtByTag_1.displayArtByTagComponent
                    },
                    {
                        path: '**',
                        redirectTo: '/error'
                    }
                ]
            },
            {
                path: 'kspace',
                children: [
                    {
                        path: 'info',
                        children: [
                            {
                                path: ':id/:lecturer',
                                component: kspace_info_1.KSpaceInfoComponent
                            },
                            {
                                path: '**',
                                redirectTo: '/error'
                            }
                        ]
                    },
                    {
                        path: '',
                        component: kspace_list_1.KSpaceListComponent
                    },
                    {
                        path: '**',
                        redirectTo: '/error'
                    }
                ]
            },
            {
                path: 'requests',
                children: [
                    {
                        path: 'create',
                        component: request_create_1.CreateRequestComponent,
                        canActivate: [auth_1.isLogin]
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
                                component: request_update_1.UpdateRequestComponent,
                                canActivate: [auth_1.isLogin]
                            },
                            {
                                path: '**',
                                redirectTo: '/error'
                            }
                        ]
                    },
                    {
                        path: '',
                        component: request_list_1.RequestListClientComponent
                    },
                    {
                        path: '**',
                        redirectTo: '/error'
                    }
                ]
            },
            {
                path: 'mix',
                children: [
                    {
                        path: ':type/:id',
                        component: request_category_1.RequestCategoryComponent
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
        path: 'error',
        component: _404_1.errorPageComponent
    },
    {
        path: 'room',
        canActivate: [auth_1.isLogin],
        children: [
            {
                path: ':id/:lecturer',
                component: kspace_1.KSpaceComponent
            },
            {
                path: '**',
                redirectTo: '/error'
            }
        ]
    },
    {
        path: 'public-kspace',
        canActivate: [auth_1.Guest],
        component: public_kspace_1.PublicKspace,
        children: [
            {
                path: 'create',
                component: create_kspace_1.CreatePublicKspace
            },
            {
                path: ':id/room',
                component: public_room_1.PublicKspaceComponent
            },
            {
                path: ':id/join',
                component: join_room_1.JoinPublicKspace
            }
        ]
    }
];
exports.authProviders = [auth_1.AdminAuthGuard, auth_1.isLogin, auth_1.Guest, auth_2.AuthService];
//# sourceMappingURL=kshare.routes.js.map