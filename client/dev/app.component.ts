/**
 * Created by GiangDH on 5/8/16.
 */
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES, RouterLink, Router } from 'angular2/router';

/**
 * Components
 */

import { UserListComponent } from '../dev/dashboard/components/users/user-list';
import { UserInfoComponent } from '../dev/dashboard/components/users/user-info';
import { UserService } from '../dev/dashboard/services/users-services';
import { RequestComponent } from '../dev/dashboard/components/request/requests';
import { RequestService } from '../dev/dashboard/services/requests-service';
import { OfferService } from '../dev/dashboard/services/offers-service';
import { UpdateRequestComponent } from '../dev/dashboard/components/request/request-update'

@Component({
  selector: 'kshare-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    UserService,
    RequestService,
    OfferService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  { path: '/admin/users', name: 'User Management', component: UserListComponent },
  { path: '/admin/users:id', name: 'User Management', component: UserInfoComponent },
  { path: '/admin/requests', name: 'Request Management', component: RequestComponent },
  { path: '/admin/requests/:id', name: 'Request Update', component: UpdateRequestComponent}
])


export class AppComponent {
  constructor(public router: Router) {
  }

  pageTitle: string = 'Knowledge Sharing Network';
}
