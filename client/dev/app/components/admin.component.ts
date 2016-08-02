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
import { UpdateBadwordComponent } from "./back-end/badword/badword-update";
import { BadwordListComponent } from "./back-end/badword/badwords-list";
import { UserListComponent } from "./back-end/users/user-list";
import { ReportListComponent } from "./back-end/report/reports-list";

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
    BadwordListComponent,
    UpdateBadwordComponent,
    UpdateKnowledgeComponent,
    UpdateRequestComponent,
    ReportListComponent
  ]
})
export class AdminComponent {}
