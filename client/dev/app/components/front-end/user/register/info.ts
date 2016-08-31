import { Component,OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {
    Validators,
    FormBuilder,
    ControlGroup,
    Control,
    FORM_DIRECTIVES,
} from '@angular/common';

import { User } from '../../../../interface/user.ts';
import { UserService } from '../../../../services/users';
import {TagService} from '../../../../services/tag';
import {AutoComplete,SelectButton,SelectItem} from 'primeng/primeng';
import {PrivateChatComponent} from '../../../shared/private-chat';
declare var $:any;

@Component({
    templateUrl: `client/dev/app/components/front-end/user/register/templates/info.html`,
    styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'],
    directives: [AutoComplete,PrivateChatComponent],
    providers: [TagService]
})

export class RegisterInfoComponent implements OnInit{
    user:User[] = [];
    userId:string = '';
    updateUserForm:ControlGroup;
    errorMessage: string = '';



    constructor(private fb:FormBuilder,
                private router:Router,
                private _userService:UserService,
                private route:ActivatedRoute,
                private _tagService:TagService) {
        this.route
            .params
            .subscribe(params => {
                this.userId = params['id'];
            });

        this.updateUserForm = fb.group({
            fullName: [""],
            birthday: [""],
            phone: [""]
        });
    }
    ngOnInit(){
      $('.datepicker').pickadate({
        monthsFull: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        monthsShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        weekdaysFull: ['Chủ nhật ', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
        // Buttons
        today: '',
        clear: 'Xoá',
        close: 'Đóng',
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year
        format: 'dd-mm-yyyy',
        min: new Date(1950,1,1),
        max: new Date(2010,12,31),
        selectYears: 60
      });
    }


    //end control tags
    update(user:any):void {
      var birthday = $(".datepicker").val();
      let pattern = new RegExp("^[0-9]{1,13}$");
      if(!pattern.test(user.phone)){
        this.errorMessage = "Số điện thoại chỉ bao gồm số và không nhiều hơn 13 kí tự";
      } else {
          user = {
            _id: this.userId,
            fullName: user.fullName,
            phone: user.phone,
            birthday: birthday
          };
          this._userService.updateUser(user,[]).subscribe(
            res => {
              this.router.navigateByUrl('/');
            },
            err => {
              console.log(err);
            }
          )
      }
    }

    returnHome():void {
        this.router.navigateByUrl('/');
    }
}
