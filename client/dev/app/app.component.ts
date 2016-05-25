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

@Component({
  selector: 'kshare-app',
  template: `
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    AuthService,
    UserService,
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  { path: '/', name:'Home', component:HomeComponent },
  { path: '/admin/users', name: 'Userslist', component: UserListComponent },
  { path: '/admin/users/:id', name:'UpdateUser', component: UserInfoComponent}
])


export class AppComponent {
  constructor(public router: Router) {
  }
  pageTitle: string = 'Knowledge Sharing Network';
}
