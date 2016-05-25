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
import { ROUTER_DIRECTIVES } from 'angular2/router';
import  { NavbarComponent } from '../shared/nav-bar';
import  { SidebarComponent }  from '../shared/sidebar';
import { Router, RouterLink, RouteParams } from 'angular2/router';
import { User } from '../../interface/user';
import { UserService} from '../../services/users-services';
import { AuthService} from '../../services/auth-services';
import { Input } from "angular2/core";

@Component({
  selector: 'user-info',
  templateUrl: 'client/dev/dashboard/templates/users/user-info.html',
  styleUrls: ['client/dev/dashboard/styles/styles.css'],
  directives: [
    FORM_DIRECTIVES,
    ROUTER_DIRECTIVES,
    NavbarComponent,
    SidebarComponent
  ],
})
export class UserInfoComponent {
  pageTitle: string = 'users';
  userUpdateForm: ControlGroup;
  id: string;
  user : User;
  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(UserService) private _userService: UserService, public router: Router ,params: RouteParams,private _auth:AuthService) {
    this.id = params.get('id');
    this.userUpdateForm = fb.group({
      _id: [""],
      firstName : ["",Validators.required],
      lastName : ["",Validators.required],
      displayName: ["",Validators.required],
      username: ["",Validators.required],
      email: ["",Validators.required],
      role: ["",Validators.required]
    });
  }


  ngOnInit(): void {
    //Check login -- @@ fucking "ngu dan" way
    if(!this._auth.dashboardFilter()){
      this.router.navigate(['Home']);
    }
    this._userService.getUserById(this.id).subscribe(
      (user) => {
        console.log(user);
        this.user = user;
    },
      (error) => {
        console.log(error.text());
      }
    );
  }

  updateUser(user: User): void {
    this._userService
      .updateUser(user)
      .subscribe(
        response => {
          this.router.parent.navigateByUrl('/admin/users');
        },
        error => {
          console.log(error.text());
        }
      );
  }
}
