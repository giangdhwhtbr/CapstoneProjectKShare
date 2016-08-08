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
  template: `
      <div class="container mg-top-50">
        <div class="row">
          <div class="col-md-3"></div>
          <!-- /.col-md-3 -->
          <div class="col-md-6">
            <div *ngIf="errorMessage" class="errmess">{{errorMessage}}</div>

            <div *ngIf="step === 2">
              <h3>Chúng tôi đã gửi một email khôi phục mật  đến địa chỉ: {{email}} </h3>
            </div>
            <div *ngIf="step === 1" class="loginPanel">
              <div class="box-header">
                <h2>Phục hồi mật khẩu </h2>
              </div>
              <form  (ngSubmit)="sendEmail(email.value)">
                <div class="form-group">
                  <input class="form-control form-text" type="email" required maxlength="70"
                         placeholder="Email phục hồi mật khẩu "
                         name="email"
                         #email
                  />
                </div>
                <div class="row">
                  <div class="col-sm-6">
                    <button class="form-control btn btn-success" type="submit">Gửi Email </button>
                  </div>
                  <!-- /.col-sm-6 -->
                  <div class="col-sm-6">
                    <button class="form-control btn btn btn-primary" type="reset" [routerLink]="['/reg']">Đăng ký</button>
                  </div>
                </div>
                <!-- /.row -->

             </form>
            </div>
              <!-- /.loginPanel -->
            </div>
          <!-- /.col-md-6 -->
          <div class="col-md-3"></div>
          <!-- /.col-md-3 -->
        </div>
        <!-- /.row -->
      </div>`,
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
