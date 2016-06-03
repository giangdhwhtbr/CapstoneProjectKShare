/**
 * Created by GiangDH on 5/18/16.
 */
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
import { Router, Routes } from '@angular/router';
import { User } from '../../../dashboard/interface/user';
import { AuthService } from '../../../dashboard/services/auth-services';
@Component({
  selector : 'login',
  templateUrl: 'client/dev/kshare/templates/shared/login.html',
  styleUrls: ['client/dev/kshare/styles/login.css'],
})

export class LoginComponent {

  user: User[] = [];
  loginForm: ControlGroup;
  userValid:string;
  passValid:string;
  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(AuthService) private _authService: AuthService, public router: Router) {
    this.loginForm = fb.group({
      username: ["",Validators.required],
      password: ["",Validators.required]
    })
  }

  login(user: any): void {
    this._authService
      .login(user)
      .subscribe(
        res => {
          if(res.invalidUsername){
            this.userValid = '*'+res.invalidUsername;
            this.passValid = null;
          } else if(res.invalidPassword){
            this.passValid = '*'+res.invalidPassword;
            this.userValid = null;
          } else {
            window.location.reload();
          }
        },
        error => {
          console.log(error);
        }
      );
  }

}
