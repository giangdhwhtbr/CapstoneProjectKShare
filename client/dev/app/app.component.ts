/**
 * Created by GiangDH on 5/8/16.
 */
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_DIRECTIVES} from '@angular/router';

/**
 * Page components
 * */

import { AdminComponent } from "./components/admin.component";
import { KshareComponent } from "./components/kshare.component";
import { HeaderComponent } from "./components/shared/header";

/**
 * services
 **/

import {KnowledgeService} from "./services/knowledge";
import {OfferService} from "./services/request-offer";
import {RequestService} from "./services/requests";
import {UserService} from "./services/users";
import {AuthService} from "./services/auth";
import {KSpaceService} from "./services/kspace";
import {NotificationService} from "./services/notification";
import {ReportService} from "./services/report";
import {ArticleService} from "./services/article";
import {ChatService} from "./services/chat";

@Component({
  selector: 'kshare-app',
  template:`
  <header></header>
  <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    HeaderComponent
  ],
  precompile: [KshareComponent,AdminComponent],
  providers: [
    AuthService,
    UserService,
    HTTP_PROVIDERS,
    RequestService,
    OfferService,
    KnowledgeService,
    KSpaceService,
    NotificationService,
    ReportService,
    ArticleService,
    ChatService
  ]
})
export class AppComponent {
  pageTitle: string = 'Knowledge Sharing Network';
}
