/**
 * Created by GiangDH on 7/9/16.
 */
import { RouterConfig }          from '@angular/router';

//Root Component
import { KshareComponent } from '../components/kshare.component';
//Function Components
import { HomeComponent} from "../components/front-end/home/home";
import { NewsFeedComponent } from "../components/front-end/newsfeed/newsfeed";
import { RequestListClientComponent } from "../components/front-end/request/request-list";
import { RequestDetailClientComponent } from "../components/front-end/request/request-detail";
import { UpdateRequestComponent } from "../components/back-end/request/request-update";
import { RequestCategoryComponent } from "../components/front-end/request/request-category";
import { CreateRequestComponent } from "../components/back-end/request/request-create";
import { KSpaceComponent } from "../components/front-end/kspace/kspace";
import { KSpaceListComponent } from "../components/front-end/kspace/kspace-list";
import { KSpaceInfoComponent } from "../components/front-end/kspace/kspace-info";
import { FriendListComponent } from "../components/front-end/user/user-profile/friend-list";
import { UserProfileComponent } from "../components/front-end/user/user-profile/user-profile";
import { userSearchRsComponent } from "../components/front-end/user/search/rs-search-user";
import { RegisterComponent } from '../components/front-end/user/register/register';
import { RegisterInfoComponent } from '../components/front-end/user/register/info';
import { UpdateUserComponent } from '../components/front-end/user/user-profile/user-info-update';
import { LoginComponent} from "../components/front-end/user/login/login";
import { ResetPasswordComponent } from "../components/front-end/user/reset-password/reset-pass";
import { NewPasswordComponent } from "../components/front-end/user/reset-password/new-pass";
import { CreateArticleComponent } from "../components/front-end/article/create-article";
import { detailArticleComponent } from "../components/front-end/article/detail-article";
import { listArticleComponent } from "../components/front-end/article/list-article";
import { EditArticleComponent } from "../components/front-end/article/edit-article";
import { displayArtByTagComponent } from "../components/front-end/tag/displayArtByTag";
import { errorPageComponent } from "../components/shared/404";
import { AdminAuthGuard, isLogin, Guest }          from './auth';
import { AuthService }        from '../services/auth';

import { PublicKspaceComponent } from '../components/front-end/kspace/public-room';

import { CreatePublicKspace } from '../components/front-end/kspace/public-kspace';

export const KShareRoutes: RouterConfig = [

    {
        path: '',
        component: KshareComponent,
        children: [
            {
                path: 'newsfeed',
                component: NewsFeedComponent
            },
            {
                path: 'reg',
                children: [
                    {
                        path: '',
                        component: RegisterComponent,
                        canActivate: [ Guest ],
                    },
                    {
                        path: 'info/:id',
                        component: RegisterInfoComponent,
                        canActivate: [ isLogin ],
                    }
                ]
            },
            {
                path: 'login',
                canActivate: [ Guest ],
                component: LoginComponent
            },
            {
                path: 'reset-password',
                canActivate: [ Guest ],
                children: [
                  {
                    path: '',
                    component: ResetPasswordComponent
                  },
                  {
                    path: ':token',
                    component: NewPasswordComponent
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
                                component: FriendListComponent
                            },
                            {
                                path: '',
                                component: UserProfileComponent
                            },
                            {
                                path: 'info',
                                component: UpdateUserComponent
                            }
                        ]
                    },
                    {
                        path:'search/:name',
                        component:userSearchRsComponent
                    }
                ]
            },
            {
                path: 'article',
                children: [
                    {
                        path: 'create',
                        component: CreateArticleComponent,
                        canActivate: [ isLogin ]
                    },
                    {
                        path: '',
                        component: listArticleComponent
                    },
                    {
                        path: 'edit/:id',
                        component: EditArticleComponent,
                        canActivate: [ isLogin ]
                    },
                    {
                        path: ':id',
                        component: detailArticleComponent
                    },
                    {
                        path:'**',
                        redirectTo:'/error'
                    }
                ]
            },
            {
                path: 'tag',
                children: [
                    {
                        path: ':id',
                        component: displayArtByTagComponent
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
                            component: KSpaceInfoComponent
                          },
                          {
                            path: '**',
                            redirectTo: '/error'
                          }
                        ]
                    },
                    {
                        path: '',
                        component: KSpaceListComponent
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
                        path:'create',
                        component:CreateRequestComponent,
                        canActivate: [ isLogin ]
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                path: 'info',
                                component: RequestDetailClientComponent
                            },
                            {
                                path: 'update',
                                component: UpdateRequestComponent,
                                canActivate: [isLogin]
                            },
                            {
                              path: '**',
                              redirectTo: '/error'
                            }
                        ]
                    },
                    {
                        path: '',
                        component: RequestListClientComponent
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
                        component: RequestCategoryComponent
                    }
                ]
            },
            {
                path: '',
                component: HomeComponent

            }
        ],
    },
    {
        path:'error',
        component:errorPageComponent
    },
    {
        path: 'room',
        canActivate: [isLogin],
        children: [
          {
            path: ':id/:lecturer',
            component: KSpaceComponent
          },
          {
            path: '**',
            redirectTo: '/error'
          }
        ]
    },
    {
        path: 'public-kspace',
        children: [
          {
            path: '',
            component: CreatePublicKspace
          },
          {
            path:':id',
            component: PublicKspaceComponent
          }
        ]
    }
];


export const authProviders = [AdminAuthGuard, isLogin ,Guest, AuthService];
