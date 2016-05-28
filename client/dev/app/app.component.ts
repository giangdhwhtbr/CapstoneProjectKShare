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
import { UserListComponent } from '../dashboard/components/users/user-list';
import { UserInfoComponent } from '../dashboard/components/users/user-info';
import { AuthService } from '../dashboard/services/auth-services';
import { UserService } from '../dashboard/services/users-services';
import { HomeComponent } from '../kshare/components/home/home';
import { LoggedInRouterOutlet } from './LoginOutletRouter';
import { BadwordService } from '../dashboard/services/badwords-service';
import { BadwordComponent } from '../dashboard/components/badword/badword';
import { UpdateBadwordComponent } from '../dashboard/components/badword/badword-update';
import { RequestService } from '../dashboard/services/requests-service';
import { RequestComponent } from '../dashboard/components/request/requests';
import { UpdateRequestComponent } from '../dashboard/components/request/request-update';
import { KnowledgeService } from '../dashboard/services/knowledge-service';
import { KnowledgeComponent } from '../dashboard/components/knowledge/knowledge';
import { UpdateKnowledgeComponent } from '../dashboard/components/knowledge/knowledge-update';

@Component({
  selector: 'kshare-app',
  template:'<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES],
  providers: [
    AuthService,
    UserService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    BadwordService,
    RequestService,
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
])


export class AppComponent {
  constructor(public router: Router) {
  }
  pageTitle: string = 'Knowledge Sharing Network';
}
