/**
 * Created by GiangDH on 6/4/16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * Shared components
 */

import { SideBarComponent } from "./front-end/shared/side-bar";
import { FooterComponent } from "./front-end/shared/footer";
import { UserProfileComponent } from "./front-end/user/user-profile/user-profile";
import { HeaderComponent } from "./shared/header";
//import { FriendListComponent } from "./front-end/shared/friend-list";

/**
 * Page components
 */
import { HomeComponent} from "./front-end/home/home";
import { RequestListClientComponent } from "./front-end/request/request-list";
import { RequestDetailClientComponent } from "./front-end/request/request-detail";
import { RequestCategoryComponent } from "./front-end/request/request-category";
import { KSpaceComponent } from "./front-end/kspace/kspace";
import { KSpaceListComponent } from "./front-end/kspace/kspace-list";
import { KSpaceInfoComponent } from "./front-end/kspace/kspace-info";
import { FriendListComponent } from "./front-end/user/user-profile/friend-list";
import { userSearchRsComponent } from "./front-end/user/search/rs-search-user";
import { UserProfileBarComponent } from "./front-end/user/user-profile/user-profile-bar";
import { UpdateUserComponent } from "./front-end/user/user-profile/user-info-update";
import { CreateArticleComponent } from "./front-end/article/create-article";
import { detailArticleComponent } from "./front-end/article/detail-article";
import { listArticleComponent } from "./front-end/article/list-article";
import { displayArtByTagComponent } from "./front-end/tag/displayArtByTag";
import { CreateRequestComponent } from "./back-end/request/request-create";
import { CreatePublicKspace } from "./front-end/kspace/public-kspace";

/**
 * Page components
 */


@Component({
    selector: 'kshare-app',
    template: `
    <sidebar></sidebar>
    <main>
        <router-outlet></router-outlet>
    </main>
  `,
    directives: [
        ROUTER_DIRECTIVES,
        HeaderComponent,
        SideBarComponent,
        FooterComponent,
        //FriendListComponent
    ],
    precompile: [
        HomeComponent,
        RequestListClientComponent,
        RequestDetailClientComponent,
        RequestCategoryComponent,
        KSpaceComponent,
        KSpaceListComponent,
        KSpaceInfoComponent,
        UserProfileComponent,
        FriendListComponent,
        UserProfileBarComponent,
        CreateArticleComponent,
        detailArticleComponent,
        listArticleComponent,
        displayArtByTagComponent,
        CreateRequestComponent,
        userSearchRsComponent,
        UpdateUserComponent,
        CreatePublicKspace
    ]
})
export class KshareComponent {

}
