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
import { PagerService} from '../../../services/pager';
import  { UserService} from '../../../services/users';
import  { AuthService} from '../../../services/auth';
import {DataTable,Column, Header, MultiSelect, Footer, InputText} from 'primeng/primeng';
import {Paginator} from 'primeng/primeng';
import {PrivateChatComponent} from '../../shared/private-chat';
declare var $:any;
declare var Materialize:any;
@Component({
    selector: 'user-list',
    templateUrl: 'client/dev/app/components/back-end/users/templates/user-list.html',
    directives: [ROUTER_DIRECTIVES,Paginator,FORM_DIRECTIVES,DataTable,Column,Header,Footer,PrivateChatComponent],
    providers: [UserService,PagerService],
})
export class UserListComponent {
    pageTitle: string = 'users';
    errorMessage: string;
    roleToken:string;
    users: User[];
    public filter: string = '';
    numOfUser: number = 0;
    userForm: ControlGroup;
    userrole: string;
    createHid: boolean = true;
    constructor(@Inject(FormBuilder) fb:FormBuilder,private _userService: UserService, private _auth:AuthService, private router: Router){
        this.userrole = localStorage.getItem('userrole');
        this.userrole === 'admin' ? this.createHid = false : this.createHid = true;
        this.userForm = fb.group({
            username: ["",Validators.required],
            password: ["",Validators.required],
            email: ["",Validators.required],
            role: ["",Validators.required]
        })
    }
    ngOnInit(): void {
        this._userService
            .getAllUsers()
            .subscribe(
                (users) => {
                    for (var i = 0; i < users.length; i++) {
                        if (users[i].birthday) {
                            users[i].birthday = new Date(users[i].birthday);
                        }
                        users[i].createdAt = new Date(users[i].createdAt);
                        if (users[i].updatedAt) {
                            users[i].updatedAt = new Date(users[i].updatedAt);
                        }
                        users[i]["num"]=i+1;
                    }
                    this.users = users;
                    this.numOfUser = i;
                },
                (error) => {
                    this.errorMessage = error.message;
                    console.log(error);
                }
            );
        $(document).ready(function() {
            $('select').material_select();
            $('.modal-trigger').leanModal();
            $('.collapsible').collapsible();
        });
    }
    addUser(user: any): void {
      user.role = $('#role').val();

      var validateUsername = function(username) {
        var pattern = new RegExp('^[a-zA-Z0-9_.-]{8,30}$');
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
      }else {
        this._userService
          .addUser(user)
          .subscribe(
            response => {
              this.users.push(response);
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
    banUser(userid: string): void  {
        this._userService.banUser(userid).subscribe(response => {
            Materialize.toast('Khoá người dùng này trong vòng 1 ngày!', 6000);
            $("#"+userid).hide();
            console.log(response);
        },error => {});
    }

    deactivateUser(user: User){
        console.log(user);
        user.status = 'deactive';
        this._userService.updateUser(user,[]).subscribe((user) => {
        });
    }

    activateUser(user: any){
        user.status = 'active';
        user.banStatus.status = false;
        this._userService.updateUser(user,[]).subscribe((user) => {
        });
    }
}
