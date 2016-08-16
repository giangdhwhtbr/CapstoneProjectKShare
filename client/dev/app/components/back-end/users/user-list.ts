import {
    Component,
    OnInit,
    Pipe,
    PipeTransform,
    Inject
} from '@angular/core';
import {
    ROUTER_DIRECTIVES,
    Router
} from '@angular/router';
import {
    Validators,
    FormBuilder,
    ControlGroup,
    Control,
    FORM_DIRECTIVES,
} from '@angular/common';

import  { User } from '../../../interface/user';

import  { UserService} from '../../../services/users';
import  { AuthService} from '../../../services/auth';
import { PaginationControlsCmp, PaginatePipe, PaginationService,IPaginationInstance } from 'ng2-pagination';
import {StringFilterPipe} from '../shared/filter';

@Component({
    selector: 'user-list',
    templateUrl: 'client/dev/app/components/back-end/users/templates/user-list.html',
    directives: [ROUTER_DIRECTIVES, PaginationControlsCmp, ROUTER_DIRECTIVES, FORM_DIRECTIVES],
    providers: [UserService, PaginationService],
    pipes: [PaginatePipe, StringFilterPipe]
})

export class UserListComponent {
    pageTitle:string = 'users';
    errorMessage:string;
    roleToken:string;
    users:User[];
    public filter:string = '';
    numOfUser:number = 0;
    userForm:ControlGroup;

    constructor(@Inject(FormBuilder) fb:FormBuilder, private _userService:UserService, private _auth:AuthService, private router:Router) {
        this.userForm = fb.group({
            username: ["", Validators.required],
            password: ["", Validators.required],
            email: ["", Validators.required],
            role: ["", Validators.required]
        })
    }

    ngOnInit():void {
        this._userService
            .getAllUsers()
            .subscribe(
                (users) => {
                    console.log(users);
                    for (var i = 0; i < users.length; i++) {
                        if (users[i].birthday) {
                            users[i].birthday = new Date(users[i].birthday);
                        }
                        users[i].createdAt = new Date(users[i].createdAt);
                        if (users[i].updatedAt) {
                            users[i].updatedAt = new Date(users[i].updatedAt);
                        }
                    }
                    this.users = users;
                    this.numOfUser = i;
                },
                (error) => {
                    this.errorMessage = error.message;
                    console.log(error);
                }
            );
    }

    addUser(user:any):void {
        this._userService
            .addUser(user)
            .subscribe(
                response => {
                    this.users.push(response);
                },
                error => {
                    console.log(error.text());
                }
            );
    }

    banUser(userid:string):void {
        this._userService.banUser(userid).subscribe(response => {
            console.log(response)
        }, error => {
        });
    }
}
