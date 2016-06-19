/**
 * Created by GiangDH on 6/4/16.
 */
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { RouteConfig, RouterLink} from '@angular/router-deprecated';

import { NavbarComponent } from './components/back-end/shared/nav-bar';
import { SidebarComponent } from './components/back-end/shared/side-bar';
import { UpdateKnowledgeComponent } from './components/back-end/knowledge/knowledge-update';
import { KnowledgeListComponent } from './components/back-end/knowledge/knowledges-list';
import { RequestListComponent } from "./components/back-end/request/requests-list";
import { UpdateRequestComponent } from "./components/back-end/request/request-update";
import { UpdateBadwordComponent } from "./components/back-end/badword/badword-update";
import { BadwordComponent } from "./components/back-end/badword/badword";
import { UserListComponent } from "./components/back-end/users/user-list";

@Component({
  selector: 'kshare',
  template:`
  <nav-bar></nav-bar>
  <sidebar></sidebar>
  <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES,
    NavbarComponent,
    SidebarComponent
  ]
})
@Routes ([
  { path: '/users', component: UserListComponent },
  { path: '/badwords/:id', component: UpdateBadwordComponent },
  { path: '/badwords', component: BadwordComponent },
  { path: '/requests/:id', component: UpdateRequestComponent },
  { path: '/requests', component: RequestListComponent },
  { path: '/knowledges/:id', component: UpdateKnowledgeComponent },
  { path: '/knowledges', component: KnowledgeListComponent}
])
export class DashboardComponent {

}
