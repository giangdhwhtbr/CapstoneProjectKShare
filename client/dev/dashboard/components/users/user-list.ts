import {
  Component,OnInit
} from 'angular2/core';
import  { ROUTER_DIRECTIVES } from 'angular2/router';
import  { NavbarComponent } from '../shared/nav-bar';
import  { SidebarComponent }  from '../shared/sidebar';
import  { User } from '../../interface/user';
import  { UserService} from '../../services/users-services';
import  { AuthService} from '../../services/auth-services';
import  { CreateUserComponent } from './user-create';
import  { Router} from "angular2/router";
@Component({
  selector: 'user-list',
  templateUrl: 'client/dev/dashboard/templates/users/user-list.html',
  styleUrls: [
    'client/dev/dashboard/styles/bootstrap.min.css',
    'client/dev/dashboard/styles/styles.css',
    'client/dev/dashboard/styles/user-list.css'
  ],
  directives: [
    CreateUserComponent,
    NavbarComponent,
    SidebarComponent,
    ROUTER_DIRECTIVES
  ]
})

export class UserListComponent {
  pageTitle: string = 'user';
  errorMessage: string;
  roleToken:string;
  users: User[];

  constructor(private _userService: UserService, private _auth:AuthService, private router: Router){

  }

  ngOnInit(): void {
    //Check login -- @@ fucking "ngu dan" way
    if(!this._auth.dashboardFilter()){
      this.router.navigate(['Home']);
    }
    
    this._userService.getAllUsers().subscribe(
        (users) => {
          var formatDate = function (date){
            if(date) {
              var newDate, day, month, year;
              year = date.substr(0, 4);
              month = date.substr(5, 2);
              day = date.substr(8, 2);
              return newDate = day + '/' + month + '/' + year;
            }
          }
            for (var i = 0; i < users.length; i++) {
              users[i].createdAt = formatDate(users[i].createdAt);
              users[i].updatedAt = formatDate(users[i].updatedAt);
            }
            this.users = users;

        },
      (error) => {
        this.errorMessage = error.message;
        console.log(error);
      }
    );
  }
}
