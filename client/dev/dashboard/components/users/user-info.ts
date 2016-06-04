import {
  Component,
  Inject
} from '@angular/core';
import {
  Validators,
  FormBuilder,
  ControlGroup,
  Control,
  FORM_DIRECTIVES,
} from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';
import  { NavbarComponent } from '../shared/nav-bar';
import  { SidebarComponent }  from '../shared/sidebar';
import { Router, Routes, RouteSegment } from '@angular/router';
import { User } from '../../interface/user';
import { UserService} from '../../services/users-services';
import { AuthService} from '../../services/auth-services';
import { Input } from "@angular/core";

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
  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(UserService) private _userService: UserService, public router: Router ,params: RouteSegment,private _auth:AuthService) {
    this.id = params.getParam('id');
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
          this.router.navigateByUrl('/admin/users');
        },
        error => {
          console.log(error.text());
        }
      );
  }
}
