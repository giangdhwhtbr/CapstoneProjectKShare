/**
 * Created by GiangDH on 7/9/16.
 */
import { RouterConfig }          from '@angular/router';

//Root Component
import { KshareComponent } from '../components/kshare.component';
//Function Components
import { HomeComponent} from "../components/front-end/home/home";
import { RequestListClientComponent } from "../components/front-end/request/request-list";
import { RequestDetailClientComponent } from "../components/front-end/request/request-detail";
import { RequestUpdateClientComponent } from "../components/front-end/request/request-update";
import { UpdateRequestComponent } from "../components/back-end/request/request-update";
import { RequestCategoryComponent } from "../components/front-end/request/request-search";
import { CreateRequestComponent } from "../components/back-end/request/request-create";
import { KSpaceComponent } from "../components/front-end/kspace/kspace";
import { KSpaceListComponent } from "../components/front-end/kspace/kspace-list";
import { KSpaceInfoComponent } from "../components/front-end/kspace/kspace-info";
import { FriendListComponent } from "../components/front-end/user-profile/friend-list";
import { UserProfileComponent } from "../components/front-end/user-profile/user-profile";
import { RegisterComponent } from '../components/front-end/user/register/register';
import { RegisterInfoComponent } from '../components/front-end/user/register/info';
import { RegisterSuccessComponent } from '../components/front-end/user/register/success';
import { LoginComponent} from "../components/front-end/user/login/login";
import { CreateArticleComponent } from "../components/front-end/article/create-article";
import { detailArticleComponent } from "../components/front-end/article/detail-article";
import { listArticleComponent } from "../components/front-end/article/list-article";
import { EditArticleComponent } from "../components/front-end/article/edit-article";

import { displayArtByTagComponent } from "../components/front-end/tag/displayArtByTag";

import { AdminAuthGuard }          from './auth';
import { AuthService }        from '../services/auth';

export const KShareRoutes: RouterConfig = [

    {
        path: '',
        component: KshareComponent,
        children: [
            {
                path: 'reg',
                //canActivate: [ AdminAuthGuard ],
                children: [
                    {
                        path: '',
                        component: RegisterComponent
                    },
                    {
                        path: 'info/:id',
                        component: RegisterInfoComponent
                    },
                    {
                        path: 'success',
                        component: RegisterSuccessComponent
                    }
                ]
            },
            {
                path: 'login',
                canActivate: [AdminAuthGuard],
                component: LoginComponent
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
                        component: CreateArticleComponent
                    },
                    {
                        path: '',
                        component: listArticleComponent
                    },
                    {
                        path: 'edit/:id',
                        component: EditArticleComponent
                    },
                    {
                        path: ':id',
                        component: detailArticleComponent
                    }
                ]
            },
            {
                path: 'tag',
                children: [
                    {
                        path: ':id',
                        component: displayArtByTagComponent
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
                            component: KSpaceInfoComponent
                        }]
                    },
                    {
                        path: '',
                        component: KSpaceListComponent
                    }
                ]
            },
            {
                path: 'requests',
                children: [
                    {
                        path:'create',
                        component:CreateRequestComponent
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
                                component: UpdateRequestComponent
                            }
                        ]
                    },
                    {
                        path: ':type/:id',
                        pathMatch: 'full',
                        component: RequestCategoryComponent
                    },
                    {
                        path: '',
                        component: RequestListClientComponent
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
        path: 'room',
        children: [{
            path: ':id',
            component: KSpaceComponent
        }]
    },
];


export const authProviders = [AdminAuthGuard, AuthService];
