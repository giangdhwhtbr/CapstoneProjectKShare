/**
 * Created by GiangDH on 6/4/16.
 */
import { Component,OnInit } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
import { RouteConfig, RouterLink} from '@angular/router-deprecated';
/**
 * Component
 * */
import { NavbarComponent } from './components/shared/nav-bar';
import { SidebarComponent } from './components/shared/sidebar';
import { UpdateKnowledgeComponent } from './components/knowledge/knowledge-update';
import { KnowledgeListComponent } from './components/knowledge/knowledges-list';
import { RequestListComponent } from "./components/request/requests-list";
import { UpdateRequestComponent } from "./components/request/request-update";
import { UpdateBadwordComponent } from "./components/badword/badword-update";
import { BadwordComponent } from "./components/badword/badword";
import { UserListComponent } from "./components/users/user-list";
/**
 * Services
 * */
import {AuthService} from "../dashboard/services/auth-services"

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

  constructor (private _auth: AuthService, private router: Router){

  }
  ngOnInit(): void {
    if(!this._auth.dashboardFilter()){
      this.router.navigate(['/kshare']);
    }
  }
}
