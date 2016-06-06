/**
 * Created by GiangDH on 6/4/16.
 */
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { RouteConfig, RouterLink} from '@angular/router-deprecated';

import {NavbarComponent} from './components/shared/nav-bar';
import {SidebarComponent} from './components/shared/sidebar';
import {KnowledgeComponent} from './components/knowledge/knowledge';
import {RequestComponent} from "./components/request/requests";
import {BadwordComponent} from "./components/badword/badword";
import {UserListComponent} from "./components/users/user-list";

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
  { path: '/badwords', component: BadwordComponent },
  { path: '/requests', component: RequestComponent },
  { path: '/knowledges', component: KnowledgeComponent}
])
export class DashboardComponent {

}

