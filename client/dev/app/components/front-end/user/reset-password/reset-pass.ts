/**
 * Created by GiangDH on 8/8/16.
 */
import { Component } from '@angular/core';
import {
  FORM_DIRECTIVES
} from '@angular/common';
import {
  Router,
  ROUTER_DIRECTIVES
} from '@angular/router';


import { UserService }  from '../../../../services/users';
@Component({
  templateUrl: 'client/dev/app/components/front-end/user/reset-password/templates/reset-password.html',
  styleUrls: ['client/dev/app/components/front-end/user/login/styles/login.css'],
  directives:[
    ROUTER_DIRECTIVES,
    FORM_DIRECTIVES
  ]
})

export class ResetPasswordComponent {
  step: number = 1;
  email: string;
  errorMessage: string;

  constructor(private _userService: UserService){}

  sendEmail(email: string):void{
    this.email = email;
    this._userService.sendEmailResetPassword(email)
      .subscribe(
        (res)=>{
          if(res.status === 'success'){
            this.step = 2;
          }
        },
        (error) => {
          this.errorMessage = "Có lỗi xảy ra vui lòng kiểm tra lại email";
        });
  }
}
