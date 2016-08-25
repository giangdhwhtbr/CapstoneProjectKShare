/**
 * Created by GiangDH on 6/4/16.
 */
import { Component } from '@angular/core';
import 'rxjs/Rx';   // Load all features
import { ROUTER_DIRECTIVES} from '@angular/router';

// Layout component
import { SidebarComponent } from './back-end/shared/side-bar';
import { HeaderComponent } from "./shared/header";
// Functions
import { UpdateKnowledgeComponent } from './back-end/knowledge/knowledge-update';
import { KnowledgeListComponent } from './back-end/knowledge/knowledges-list';
import { RequestListComponent } from "./back-end/request/requests-list";
import { UpdateRequestComponent } from "./back-end/request/request-update";
import { UserListComponent } from "./back-end/users/user-list";
import { ReportListComponent } from "./back-end/report/reports-list";
import { TagListCtlComponent } from "./back-end/tag/tag-list-control";
import { ArtListCtlComponent } from "./back-end/article/article-list-clt";
import { PrivateChatComponent } from "./shared/private-chat";

@Component({
  selector: 'kshare',
  template:`
      <sidebar></sidebar>
    <main>
    <router-outlet></router-outlet>
    </main>
  <private-chat></private-chat>
  `,
  styleUrls: ['client/dev/asserts/css/admin.css'],
  directives: [
    ROUTER_DIRECTIVES,
    SidebarComponent,
    PrivateChatComponent
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
