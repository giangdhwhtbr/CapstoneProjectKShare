/**
 * Created by GiangDH on 6/4/16.
 */
import { Component } from '@angular/core';
import 'rxjs/Rx';   // Load all features
import { ROUTER_DIRECTIVES} from '@angular/router';

// Layout component
import { NavbarComponent } from './back-end/shared/nav-bar';
import { SidebarComponent } from './back-end/shared/side-bar';

// Functions
import { UpdateKnowledgeComponent } from './back-end/knowledge/knowledge-update';
import { KnowledgeListComponent } from './back-end/knowledge/knowledges-list';
import { RequestListComponent } from "./back-end/request/requests-list";
import { UpdateRequestComponent } from "./back-end/request/request-update";
import { UserListComponent } from "./back-end/users/user-list";
import { ReportListComponent } from "./back-end/report/reports-list";
import { TagListCtlComponent } from "./back-end/tag/tag-list-control";
import { ArtListCtlComponent } from "./back-end/article/article-list-clt";

@Component({
  selector: 'kshare',
  template:`
  <div id="wrapper">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <nav-bar></nav-bar>
      <sidebar></sidebar>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent,
    SidebarComponent
  ],
  precompile: [
    UserListComponent,
    RequestListComponent,
    KnowledgeListComponent,
    UpdateKnowledgeComponent,
    UpdateRequestComponent,
    ReportListComponent,
    TagListCtlComponent,
    ArtListCtlComponent
  ]
})
export class AdminComponent {}
