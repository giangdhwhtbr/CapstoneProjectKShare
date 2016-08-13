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

// Shared component
import { PrivateChatComponent } from "./components/shared/private-chat";

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

@Component({
  selector: 'kshare-app',
  template:`
  <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    PrivateChatComponent
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
    ArticleService
  ]
})
export class AppComponent {
  pageTitle: string = 'Knowledge Sharing Network';
}
