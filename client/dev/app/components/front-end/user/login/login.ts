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
  FORM_DIRECTIVES
} from '@angular/common';
import {
  Router,
  ROUTER_DIRECTIVES
} from '@angular/router';
import { User } from '../../../../interface/user.ts';
import { AuthService } from '../../../../services/auth';
@Component({
  selector : 'login',
  templateUrl: 'client/dev/app/components/front-end/user/login/templates/login.html',
  styleUrls: ['client/dev/app/components/front-end/user/login/styles/login.css'],
  directives:[
    ROUTER_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})

export class LoginComponent {

  user: User[] = [];
  loginForm: ControlGroup;
  errorMessage: string = '';
  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(AuthService) private _authService: AuthService, public router: Router) {
    this.userValid="";
    this.passValid="";
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
            localStorage.setItem('username', res.username);

            if(res.role == 'admin'){
              localStorage.setItem('userrole', res.role);
            }else {
              localStorage.setItem('userrole', 'normal');
            }
            window.location.reload();
        },
        error => {
          if(error._body){
            error = JSON.parse(error._body);
            if(error.invalidUsername){
              this.errorMessage = '*'+error.invalidUsername;
              console.log(this.errorMessage);
            }else if(error.invalidPassword){
              this.errorMessage = '*'+error.invalidPassword;
            } else if (error.message){
              this.errorMessage =  '*'+error.message;
            }

          }
        }
      );
  }

}
