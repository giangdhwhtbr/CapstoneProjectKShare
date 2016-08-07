/**
 * Created by GiangDH on 5/19/16.
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
    userValid:boolean;
    passValid:boolean = false;
    coPassValid:boolean;
    emailValid:boolean;

    constructor(public fb:FormBuilder, private _authService:AuthService, public router:Router) {
        this.regForm = fb.group({
            username: ["", Validators.required],
            password: ["", Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')],
            copass: [""],
            email: ["", Validators.pattern('^(([a-zA-Z]|[0-9])|([-]|[_]|[.]))+[@](([a-zA-Z0-9])|([-])){2,63}[.](([a-zA-Z0-9]){2,63})+$')]
        })
    }

    register(user:any):void {
        if (user.password === user.copass) {
            this.coPassValid = true;
        }
        if (this.coPassValid) {
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
                        console.log(error);
                    }
                );
        }
    }
}
