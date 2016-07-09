/**
 * Created by GiangDH on 6/4/16.
 */
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { RouteConfig, RouterLink} from '@angular/router-deprecated';


/**
 * Shared components
 */

import { HeaderComponent } from "./components/front-end/shared/header";
import { SideBarComponent } from "./components/front-end/shared/side-bar";
import { FooterComponent } from "./components/front-end/shared/footer";
import { LoginComponent} from "./components/front-end/shared/login";
import { RegisterComponent} from "./components/front-end/shared/register";
import { UserProfileComponent } from "./components/front-end/user-profile/user-profile";

/**
 * Page components
 */
import { HomeComponent} from "./components/front-end/home/home";
import { RequestListClientComponent } from "./components/front-end/request/request-list";
import { RequestDetailClientComponent } from "./components/front-end/request/request-detail";
import { RequestUpdateClientComponent } from "./components/front-end/request/request-update";
import { RequestSearchClientComponent } from "./components/front-end/request/request-search";
import { KSpaceComponent } from "./components/front-end/kspace/kspace";
import { ChatComponent } from "./components/front-end/kspace/chat";

@Component({
  selector: 'kshare-app',
  template:`
    <header></header>
    <sidebar></sidebar>
    <router-outlet></router-outlet>
    <login></login>
    <register></register>
    <footer></footer>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    KSpaceComponent,
    UserProfileComponent
  ]
})

@Routes([
  { path: '/', component:HomeComponent},
  { path: '/user', component:UserProfileComponent},
  { path: '/front.kspace/:id/:rid', component: KSpaceComponent},
  { path: '/requests/:type/:id', component:RequestSearchClientComponent},
  { path: '/requests/update/:id', component:RequestUpdateClientComponent},
  { path: '/requests/:id', component:RequestDetailClientComponent},
  { path: '/requests', component:RequestListClientComponent},
  { path: '/chat/:id', component:ChatComponent}
  
])
export class KshareComponent {

}
