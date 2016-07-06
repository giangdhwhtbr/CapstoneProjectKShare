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

/**
 * Page components
 */
import { UserProfileComponent } from "./components/front-end/user-profile/user-profile";

@Component({
  selector: 'user',
  template:`
    <header></header>
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
    UserProfileComponent
  ]
})

@Routes([
  { path: '/:name', component:UserProfileComponent}
  
])
export class UserComponent {

}
