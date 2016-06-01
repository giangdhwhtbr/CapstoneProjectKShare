/**
 * Created by GiangDH on 5/8/16.
 */
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES,RouterLink, Router } from 'angular2/router';

/**
 * Components
 */
import { HomeComponent } from '../kshare/components/home/home';
import { LoggedInRouterOutlet } from './LoginOutletRouter';
import { UserListComponent } from '../dashboard/components/users/user-list';
import { UserInfoComponent } from '../dashboard/components/users/user-info';
import { BadwordComponent } from '../dashboard/components/badword/badword';
import { UpdateBadwordComponent } from '../dashboard/components/badword/badword-update';
import { RequestListClientComponent } from '../kshare/components/request/request-list-cli';
import { RequestDetailClientComponent } from '../kshare/components/request/request-detail-cli';
import { RequestUpdateClientComponent } from '../kshare/components/request/request-update-cli';
import { RequestComponent } from '../dashboard/components/request/requests';
import { UpdateRequestComponent } from '../dashboard/components/request/request-update';
import { KnowledgeComponent } from '../dashboard/components/knowledge/knowledge';
import { UpdateKnowledgeComponent } from '../dashboard/components/knowledge/knowledge-update';
import { RequestListClientComponent } from '../kshare/components/request/request-list-cli';
import { RequestDetailClientComponent } from '../kshare/components/request/request-detail-cli';
import { RequestUpdateClientComponent } from '../kshare/components/request/request-update-cli';
import { OfferService } from '../dashboard/services/offers-service';

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

@RouteConfig([
  { path: '/', name:'Home', component:HomeComponent },
  { path: '/admin/users', name: 'Userslist', component: UserListComponent },
  { path: '/admin/users/:id', name:'UpdateUser', component: UserInfoComponent},
  { path: '/admin/badwords', name: 'Badword Management', component: BadwordComponent },
  { path: '/admin/badwords/:id', name: 'Badword Update', component: UpdateBadwordComponent },
  { path: '/admin/requests', name: 'Request Management', component: RequestComponent },
  { path: '/admin/requests/:id', name: 'Request Update', component: UpdateRequestComponent },
  { path: '/admin/knowledges', name: 'Knowledge Management', component: KnowledgeComponent },
  { path: '/admin/knowledges/:id', name: 'Knowledge Update', component: UpdateKnowledgeComponent },
  { path: '/requests', name: 'Request List', component: RequestListClientComponent},
  { path: '/requests/:id', name: 'Request Detail ', component: RequestDetailClientComponent},
  { path: '/requests/update/:id', name: 'Request Update ', component: RequestUpdateClientComponent}
])


export class AppComponent {
  constructor(public router: Router) {
  }
  pageTitle: string = 'Knowledge Sharing Network';
}
