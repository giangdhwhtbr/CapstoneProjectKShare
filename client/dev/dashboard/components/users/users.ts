import {
  Component,OnInit
} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import  { NavbarComponent } from '../shared/nav-bar';
import  { SidebarComponent }  from '../shared/sidebar';
import  { UserListComponent } from './user-list';
import  { CreateUserComponent } from './user-create';
import  { UserInfoComponent } from './user-info';
import  { User } from '../../interface/user';
import  { UserService} from '../../services/users-services';

@Component({
  selector: 'users-mgn',
  templateUrl: 'client/dev/dashboard/templates/users.html',
  directives: [
    CreateUserComponent,
    UserListComponent,
    UserInfoComponent,
    NavbarComponent,
    SidebarComponent,
    ROUTER_DIRECTIVES
  ]
})
export class UsersComponent {

}
