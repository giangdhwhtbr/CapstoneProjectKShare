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
    //this.userForm = fb.group({
    //  firstName : ["",Validators.required, Validators.pattern("^[a-z\d\-_\s]+$/i"),Validators.maxLength(25)],
    //  lastName: ["",Validators.required, Validators.pattern("^[a-z\d\-_\s]+$/i"),Validators.maxLength(25)],
    //  displayName: ["", Validators.pattern("^[a-z\d\-_\s]+$/i"),Validators.maxLength(25)],
    //  username: ["",Validators.required, Validators.pattern("^(?=.*[a-zA-Z]{1,})(?=.*[\d]{0,})[a-zA-Z0-9]{1,15}$"),Validators.maxLength(25)],
    //  password: ["",Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"),Validators.maxLength(25)],
    //  email: ["", Validators.required, Validators.pattern("^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$")],
    //  role: ["",Validators.required]
    //});

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
              //this.router.parent.navigateByUrl('/admin/users');
              window.location.reload();
          },
            error => {
              console.log(error.text());
            }
          );
  }
}
