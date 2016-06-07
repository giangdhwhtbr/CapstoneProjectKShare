/**
 * Created by GiangDH on 6/4/16.
 */
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { RouteConfig, RouterLink} from '@angular/router-deprecated';


/**
 * Shared Components
 */

import { HeaderComponent } from "./components/shared/header";
import { SideBarComponent } from "./components/shared/sidebar";
import { FooterComponent } from "./components/shared/footer";
import { LoginComponent} from "./components/shared/login"
import { RegisterComponent} from "./components/shared/register";



/**
 * Page Components
 */
import { HomeComponent} from "./components/home/home";
import { RequestListClientComponent } from "./components/request/request-list-cli";
import { RequestDetailClientComponent } from "./components/request/request-detail-cli";
import { RequestUpdateClientComponent } from "./components/request/request-update-cli";
import { RequestSearchClientComponent } from "./components/request/request-search-cli";

@Component({
  selector: 'kshare-app',
  templateUrl:'client/dev/kshare/kshare.html',
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ]
})

@Routes([
  { path: '/', component:HomeComponent},
  { path: '/requests/search/:type/:id', component:RequestSearchClientComponent},
  { path: '/requests/update/:id', component:RequestUpdateClientComponent},
  { path: '/requests/:id', component:RequestDetailClientComponent},
  { path: '/requests', component:RequestListClientComponent}
])
export class KshareComponent {

}
