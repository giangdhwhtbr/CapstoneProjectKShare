import {
  Component,OnInit
} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import  { NavbarComponent } from '../components/nav-bar';
import  { SidebarComponent }  from '../components/sidebar';
import  { UserListComponent } from '../components/user-list';
import  { User } from '../interface/user';
import  { UserService} from '../services/users-services';

@Component({
  selector: 'users-mgn',
  templateUrl: 'client/dev/dashboard/templates/users.html',
  directives: [UserListComponent,NavbarComponent,SidebarComponent,ROUTER_DIRECTIVES]
})
export class UsersComponent {

}
