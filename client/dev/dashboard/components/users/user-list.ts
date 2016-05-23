import {
  Component,OnInit
} from 'angular2/core';
//import { ROUTER_DIRECTIVES } from 'angular2/router';
import  { User } from '../../interface/user';
import  { UserService} from '../../services/users-services';
@Component({
  selector: 'user-list',
  templateUrl: 'client/dev/dashboard/templates/users/user-list.html',
  styleUrls: [
    'client/dev/dashboard/styles/styles.css',
    'client/dev/dashboard/styles/user-list.css'
  ]
})

export class UserListComponent {
  pageTitle: string = 'Users List';
  errorMessage: string;

  users: User[];

  constructor(private _userService: UserService){

  }

  ngOnInit(): void {
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
