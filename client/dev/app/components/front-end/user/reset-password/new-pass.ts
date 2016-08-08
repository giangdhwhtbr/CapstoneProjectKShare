/**
 * Created by GiangDH on 8/8/16.
 */
/**
 * Created by GiangDH on 5/19/16.
 */
import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  Validators,
  FormBuilder,
  ControlGroup,
  Control,
  FORM_DIRECTIVES,
} from '@angular/common';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { User } from '../../../../interface/user.ts';
import { UserService } from '../../../../services/users';
@Component({
  template: `
      <div class="container mg-top-50">
        <div class="row">
          <div class="col-md-3"></div>
          <!-- /.col-md-3 -->
          <div class="col-md-6">
            <div *ngIf="errorMessage" class="errmess">{{errorMessage}}
              <a *ngIf="expired" [routerLink]="['/reset-password']"> click vào đây để gửi lại email </a>
            </div>

            <div *ngIf="!expired" class="loginPanel">
              <div class="box-header">
                <h2> Thiết lập mật khẩu mới </h2>
              </div>
              <form [ngFormModel]="resetPassForm" (ngSubmit)="updatePassword(resetPassForm.value)">
                 <div class="form-group">
                    <input class="form-control"
                          type="password"
                          required maxlength="30"
                          placeholder="Mật Khẩu"
                          name="password"
                          [ngFormControl]="resetPassForm.controls['password']"
                    >
                  </div>
                  <div class="form-group">
                    <input #copass class="form-control"
                          type="password"
                          required maxlength="30"
                          placeholder="Xác nhận mật khẩu"
                          name="copass"
                          [ngFormControl]="resetPassForm.controls['copass']"
                    >
                  </div>
                <div class="row">
                    <button class="form-control btn btn-success" type="submit">Cập nhật mật khẩu</button>
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
    FORM_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})

export class NewPasswordComponent {

  errorMessage: string;
  resetPasswordToken: string;
  resetPassForm:ControlGroup;

  expired: boolean;

  constructor(public fb:FormBuilder, private _userService :UserService, public router:Router, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.resetPasswordToken = params['token'];
    });

    this.resetPassForm = fb.group({
      password: [""],
      copass: [""],
    })
  }

  ngOnInit(): void {
    this._userService.getUserByToken(this.resetPasswordToken)
      .subscribe((res) => {
        if(res.sendTokenDate){

          var currentDate = new Date();
          var tokenDate = new Date(res.sendTokenDate);
          var difftime = currentDate.getTime() - tokenDate.getTime();

          if(difftime > 0){
            this.expired = false;
          }else {
            this.expired = true;
            this.errorMessage = 'Rất tiếc đã quá thời hạn để đổi mật khẩu!';
          }
        }
      },(err) => {
        this.errorMessage = 'Xin lỗi vì làm phiền, server có lỗi';
      });
  }
  updatePassword(data):void {
    var patt = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
    var passValid = patt.test(data.password);
    if(!passValid){
      this.errorMessage = 'Mật khẩu cần nhiều hơn 8 kí tự bao gồm chữ hoa, chữ thường và kí tự đặc biệt';
    }else if(data.password !== data.copass){
      this.errorMessage = 'Mật khẩu và mật khẩu xác nhận không trùng khớp ';
    }else {
      this._userService.updateNewPassword(data.password, this.resetPasswordToken)
        .subscribe(
          (res) => {
            var c = confirm('Mật khẩu đã được thay đổi, chuyển đến trang đăng nhập');
            if(c){
              this.router.navigate(['/login']);
            }
          },
          (error) => {
            this.errorMessage = 'Xin lỗi vì làm phiền, server có lỗi';
          }
        );
    }
  }
}
