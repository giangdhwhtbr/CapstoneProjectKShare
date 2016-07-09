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
import { FooterComponent } from "./components/front-end/shared/footer";
import { LoginComponent} from "./components/front-end/shared/login";
import { RegisterComponent} from "./components/front-end/shared/register";

/**
 * Page components
 */
import { UserProfileComponent } from "./components/front-end/user-profile/user-profile";
import { FriendListComponent } from "./components/front-end/user-profile/friend-list";

@Component({
  selector: 'user',
  template: `
    <header></header>
    <div>
      <router-outlet></router-outlet>
    </div>
    <login></login>
    <register></register>
    <footer></footer>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    FriendListComponent
  ]
})

@Routes([
  { path: '/:name/friends', component: FriendListComponent },
  { path: '/:name', component: UserProfileComponent }

])
export class UserComponent {

}
