import { Component } from '@angular/core';
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
@Component({
    templateUrl : `client/dev/app/components/front-end/user/register/templates/info.html`,
    styleUrls: ['client/dev/app/components/front-end/user/register/styles/login.css'] 
})

export class RegisterInfoComponent {
    user: User[] = [];
    userId: string ='';
    updateUserForm: ControlGroup;
    constructor (
        private fb : FormBuilder, 
        private router:Router, 
        private _userService: UserService, 
        private route: ActivatedRoute
    ){
        this.route
            .params
            .subscribe(params => {
                this.userId = params['id'];
            });

        this.updateUserForm = fb.group({
            fullname: [""],
            birthday: [""],
            phone: [""],
            ownKnowledge: [""],
            interestedKnowledge: [""]
        });
    }

    update(user:any):void {
        user = {
            _id: this.userId,
            firstName: user.fullname,
            birthday: user.birthday,
            ownKnowledgeId: user.ownKnowledge,
            interestedKnowledgeId: user.interestedKnowledge
        }

        this._userService.updateUser(user).subscribe(
            res => {
                this.router.navigateByUrl('/reg/success');
            },
            err => {
                console.log(err);
            }
        )
    }

    returnHome():void {
        this.router.navigateByUrl('/');
    }
}