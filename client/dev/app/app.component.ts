/**
 * Created by GiangDH on 5/8/16.
 */
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import { RouteConfig, RouterLink} from '@angular/router-deprecated';
import { LoggedinRouterOutlet } from './auth.conf';

/**
 * Page components
 * */

import { DashboardComponent } from "./dashboard.component";
import { KshareComponent } from "./kshare.component";

/**
 * services
 **/

import {KnowledgeService} from "./services/knowledge";
import {OfferService} from "./services/request-offer";
import {RequestService} from "./services/requests";
import {UserService} from "./services/users";
import {AuthService} from "./services/auth";
import {KSpaceService} from "./services/kspace";
import {ChatService} from "./services/chat";
@Component({
  selector: 'kshare-app',
  template:'<router-outlet></router-outlet>',
  directives: [
    ROUTER_DIRECTIVES,
    LoggedinRouterOutlet
  ],
  providers: [
    AuthService,
    UserService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    RequestService,
    OfferService,
    KnowledgeService,
    KSpaceService,
    ChatService
  ]
})


@Routes([
  { path: '/', component:KshareComponent},
  { path: '/kshare',component:KshareComponent },
  { path: '/admin', component:DashboardComponent}

])

export class AppComponent {
  constructor(public router: Router) {
  }
  pageTitle: string = 'Knowledge Sharing Network';
}
