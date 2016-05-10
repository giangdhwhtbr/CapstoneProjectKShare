/**
 * Created by GiangDH on 5/8/16.
 */
import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

/**
 * Components
 */

import { UsersComponent } from '../dev/dashboard/components/users';
import { UserService } from '../dev/dashboard/services/users-services';
@Component({
  selector: 'kshare-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    UserService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  { path: '/admin/users', name: 'User Management', component: UsersComponent }
])


export class AppComponent {
  pageTitle: string = 'Knowledge Sharing Network';
}
