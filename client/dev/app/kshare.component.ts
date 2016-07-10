/**
 * Created by GiangDH on 6/4/16.
 */
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

/**
 * Shared components
 */

import { HeaderComponent } from "./components/front-end/shared/header";
import { SideBarComponent } from "./components/front-end/shared/side-bar";
import { FooterComponent } from "./components/front-end/shared/footer";
import { LoginComponent} from "./components/front-end/shared/login"
import { RegisterComponent} from "./components/front-end/shared/register";

import { HomeComponent} from "./components/front-end/home/home";
import { RequestListClientComponent } from "./components/front-end/request/request-list";
import { RequestDetailClientComponent } from "./components/front-end/request/request-detail";
import { RequestUpdateClientComponent } from "./components/front-end/request/request-update";
import { RequestCategoryComponent } from "./components/front-end/request/request-search";
import { KSpaceComponent } from "./components/front-end/kspace/kspace";
import { KSpaceListComponent } from "./components/front-end/kspace/kspace-list";
import { KSpaceInfoComponent } from "./components/front-end/kspace/kspace-info";



/**
 * Page components
 */



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
    RegisterComponent
  ],
  precompile: [
    HomeComponent,
    RequestListClientComponent,
    RequestDetailClientComponent,
    RequestUpdateClientComponent,
    RequestCategoryComponent,
    KSpaceComponent,
    KSpaceListComponent,
    KSpaceInfoComponent
  ]
})
export class KshareComponent {

}
