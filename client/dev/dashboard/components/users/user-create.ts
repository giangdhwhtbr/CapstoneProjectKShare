import {
  Component,
  Inject
} from 'angular2/core';
import {
  Validators,
  FormBuilder,
  ControlGroup,
  Control,
  FORM_DIRECTIVES,
} from 'angular2/common';
import { Router, RouterLink } from 'angular2/router';
import  { User } from '../../interface/user';
import  { UserService} from '../../services/users-services';
@Component({
  selector: 'user-create',
  templateUrl: 'client/dev/dashboard/templates/users/user-create.html',
  styleUrls: ['client/dev/dashboard/styles/styles.css'],
  directives: [FORM_DIRECTIVES],
})
export class CreateUserComponent {
  pageHeader: string = "Create User";
  users: User[] = [];
  userForm: ControlGroup;

  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(UserService) private _userService: UserService, public router: Router) {
    this.userForm = fb.group({
      firstName : ["",Validators.required],
      lastName : ["",Validators.required],
      displayName: ["",Validators.required],
      username: ["",Validators.required],
      password: ["",Validators.required],
      email: ["",Validators.required],
      role: ["",Validators.required]
    })
  }
  addUser(user: any): void {
      this._userService
          .addUser(user)
          .subscribe(
            response => {
              window.location.reload();
          },
            error => {
              console.log(error.text());
            }
          );
  }
}
