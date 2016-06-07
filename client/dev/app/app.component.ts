/**
 * Created by GiangDH on 5/8/16.
 */
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router} from '@angular/router';
import { RouteConfig, RouterLink} from '@angular/router-deprecated';
import { LoggedinRouterOutlet } from './LogginRouterOutlet';

/**
 * Page Components
 * */

import { DashboardComponent } from "../dashboard/dashboard.component";
import { KshareComponent } from "../kshare/kshare.component";

/**
 * Services
 **/

import {KnowledgeService} from "../dashboard/services/knowledge-service";
import {OfferService} from "../dashboard/services/offers-service";
import {RequestService} from "../dashboard/services/requests-service";
import {UserService} from "../dashboard/services/users-services";
import {AuthService} from "../dashboard/services/auth-services";
@Component({
  selector: 'kshare-app',
  templateUrl:'client/dev/app/app.html',
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
    KnowledgeService
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
