/**
 * Created by GiangDH on 5/19/16.
 */
import {
    Component,
    Inject, OnInit
} from '@angular/core';
import {
    Validators,
    FormBuilder,
    ControlGroup,
    Control,
    FORM_DIRECTIVES,
} from '@angular/common';
import { Router } from '@angular/router';
import { User } from '../../../../interface/user.ts';
import { AuthService } from '../../../../services/auth';
@Component({
    selector: 'register',
    templateUrl: 'client/dev/app/components/front-end/user/register/templates/register.html',
    styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'],
    directives: [FORM_DIRECTIVES]
})

export class RegisterComponent {
    user:User;
    regForm:ControlGroup;
    errorMessage: string = '';

    constructor(private fb:FormBuilder, private _authService:AuthService, public router:Router) {

    }
    ngOnInit():vodi {
      this.regForm = this.fb.group({
        username: ["", Validators.pattern('^[a-zA-Z0-9_.-]*$')],
        password: ["", Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
        copass: [""],
        email: ["", Validators.pattern('^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$')]
      });
    }

    register(user:any):void {
      var validateUsername = function(username) {
        var pattern = new RegExp('^[a-zA-Z0-9_.-]*$');
        return pattern.test(username);
      };

      var validatePass = function (password) {
        var pattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
        return pattern.test(password);
      };


        if(!validateUsername(user.username)){
          this.errorMessage = 'Vui lòng nhập tên đăng nhập trong khoảng từ 8-30 kí tự, không dấu và không' +
            ' chứa kí' +
            ' tự' +
            ' đặc' +
            ' biệt! ';
        }else if (!validatePass(user.password)){
          this.errorMessage = 'Mât khẩu phải có ít nhất 8 kí tự, bao gồm 1 kí tự viết hoa, 1 kí tự viết thường, 1 kí' +
            ' tự đặc biệt và 1 số';
        }else if (user.password !== user.copass) {
            this.errorMessage = 'Sai mật khẩu xác nhận! ';
        }else {
            this._authService
                .register(user)
                .subscribe(
                    response => {
                        user = {
                            username: user.username,
                            password: user.password
                        }
                        this._authService
                            .login(user)
                            .subscribe(
                                res => {
                                    localStorage.setItem('username', res.username);
                                    localStorage.setItem('userrole', 'normal');
                                    this.router.navigateByUrl('/reg/info/' + response._id);
                                },
                                error => {
                                    console.log(error);
                                });
                    },
                    error => {
                      if(error.errors) {
                        var errors = error.errors;
                        if(errors.username){
                          this.errorMessage = errors.username.message;
                        }else if(errors.password){
                          this.errorMessage = errors.password.message;
                        }else if(errors.email){
                          this.errorMessage = errors.email.message;
                        }
                      }
                      if(error.errmsg) {
                        if(error.errmsg.includes('username')){
                          this.errorMessage = 'tên đăng nhập đã tồn tại';
                        }else if(error.errmsg.includes('email')){
                          this.errorMessage = 'email đã tồn tại!';
                        }

                      }
                    }
            );
        }
    }
}
