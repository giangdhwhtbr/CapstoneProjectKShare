//cores
import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';
import { Subscription } from 'rxjs/Subscription';

//Component
import { RequestRecordComponent } from './request-record';
import { KspaceListComponent } from './kspace-list';
import { UserProfileBarComponent} from './user-profile-bar';
import { PrivateChatComponent } from './../../../shared/private-chat';

//services
import { UserService } from '../../../../services/users';
import { AuthService } from '../../../../services/auth';
import { KnowledgeService } from '../../../../services/knowledge';
import { KSpaceService } from '../../../../services/kspace';

//interfaces
import { User } from '../../../../interface/user';
import { FriendShip } from '../../../../interface/friendship';
import { Request } from '../../../../interface/request';
import { Knowledge } from '../../../../interface/knowledge';
declare var $:any;

@Component({
    selector: 'user-profile',
    templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/user-profile.html',
    styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
    directives: [
        ROUTER_DIRECTIVES,
        RequestRecordComponent,
        UserProfileBarComponent,
        PrivateChatComponent,
        KspaceListComponent
    ]
})

export class UserProfileComponent {

    //name of user in current profile page
    name:string;

    isExist:boolean;
    isFriend:boolean;

    roleToken:string;
    userToken:string;
    private sub:Subscription;

    //check if profile page of current user, hide "addFriend" button
    checkUser:boolean;
    //check if a user was sent friend request by current user
    checkSentRequestUser:boolean;
    //check if a current user is received a request of a user
    checkIsRecivedRequest:boolean;

    differ:any;
    userProfile:User;
    buttonTitle:string;
    friendList:FriendShip[];
    requests:Request[] = [];
    knowledgeName:string;
    num:any = 5;
    height:number = 400;

    kspaceList:any;

    constructor(public router:Router, private route:ActivatedRoute, public _userService:UserService,public _kSpaceService:KSpaceService,
                public _knowledgeService:KnowledgeService) {
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');

    }

    ngOnInit():void {
        this.sub = this.route
            .params
            .subscribe(params => {
                this.name = params['name'];
                this._kSpaceService.getKspaceProfile(this.name).subscribe((kspaces)=>{
                    this.kspaceList=kspaces;
                    this._userService.getUserByUserName(this.name).subscribe(
                        (user) => {
                            this.userProfile = user;
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
                    this.checkUserExist();
                    if (this.isExist = true) {
                        this.getRequestByUser();
                    }
                });


                $(window).on("scroll", () => {
                    var scrollHeight = $(document).height();
                    var scrollPosition = $(window).height() + $(window).scrollTop();
                    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
                        setTimeout(() => {
                            this.seeMore();
                        }, 1000);
                        this.height += 30;
                    }
                });
            });
        $('ul.tabs').tabs();
    }

    getKspaceProfile(){
        this._kSpaceService.getKspaceProfile(this.name).subscribe((kspaces)=>{
            this.kspaceList=kspaces;
        });
    }

    seeMore() {
        this.num = this.num + 5;
        this.getRequestByUser();
    }

    ngOnDestroy():void {
        this.sub.unsubscribe();
    }

    getRequestByUser():void {
        this._userService
            .getRequestByUser(this.name, this.num)
            .subscribe((requests) => {
                for (var i = 0; i < requests.length; i++) {
                    this.requests.push(requests[i]);
                }
            })
    }

    public getKnowledgeNameOfRequest(knowledgeId) {
        //get back.knowledge name by knowledgeId
        this._knowledgeService.findKnowledgeById(knowledgeId).subscribe(
            (knowledge) => {
                this.knowledgeName = knowledge.name;
            },
            (error) => {
                console.log(error);
            });
    }

    public checkUserExist() {
        this._userService.checkUserExist(this.name).subscribe(
            (isExist) => {
                if (isExist._body === '0') {
                    this.isExist = false;
                } else {
                    this.isExist = true;
                }
            },
            (error) => {
                console.log(error);
            });
    }

}
