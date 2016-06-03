/**
 * Created by GiangDH on 5/8/16.
 */
import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

/**
 * Components
 */
import { HomeComponent } from '../kshare/components/home/home';
import { UserListComponent } from '../dashboard/components/users/user-list';
import { UserInfoComponent } from '../dashboard/components/users/user-info';
import { BadwordComponent } from '../dashboard/components/badword/badword';
import { UpdateBadwordComponent } from '../dashboard/components/badword/badword-update';
import { RequestComponent } from '../dashboard/components/request/requests';
import { UpdateRequestComponent } from '../dashboard/components/request/request-update';
import { KnowledgeComponent } from '../dashboard/components/knowledge/knowledge';
import { UpdateKnowledgeComponent } from '../dashboard/components/knowledge/knowledge-update';
import { RequestListClientComponent } from '../kshare/components/request/request-list-cli';
import { RequestDetailClientComponent } from '../kshare/components/request/request-detail-cli';
import { RequestUpdateClientComponent } from '../kshare/components/request/request-update-cli';

/**
 * Service
 */
import { AuthService } from '../dashboard/services/auth-services';
import { UserService } from '../dashboard/services/users-services';
import { BadwordService } from '../dashboard/services/badwords-service';
import { RequestService } from '../dashboard/services/requests-service';
import { KnowledgeService } from '../dashboard/services/knowledge-service';
import { OfferService } from '../dashboard/services/offers-service';

@Component({
  selector: 'kshare-app',
  template:'<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
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
  { path: '/', component:HomeComponent },
  { path: '/admin/users', component: UserListComponent },
  { path: '/admin/users/:id', component: UserInfoComponent},
  { path: '/admin/badwords', component: BadwordComponent },
  { path: '/admin/badwords/:id', component: UpdateBadwordComponent },
  { path: '/admin/requests', component: RequestComponent },
  { path: '/admin/requests/:id', component: UpdateRequestComponent },
  { path: '/admin/knowledges', component: KnowledgeComponent },
  { path: '/admin/knowledges/:id', component: UpdateKnowledgeComponent },
  { path: '/requests', component: RequestListClientComponent},
  { path: '/requests/:id', component: RequestDetailClientComponent},
  { path: '/requests/update/:id', component: RequestUpdateClientComponent}
])


export class AppComponent {
  constructor(public router: Router) {
  }
  pageTitle: string = 'Knowledge Sharing Network';
}
