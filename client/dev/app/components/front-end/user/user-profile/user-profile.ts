//cores
import { Component, OnInit, DoCheck  } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

//Component
import { RequestRecordComponent } from './request-record';
import { UserProfileBarComponent} from './user-profile-bar';

//services
import { UserService } from '../../../../services/users';
import { AuthService } from '../../../../services/auth';
import { KnowledgeService } from '../../../../services/knowledge';

//interfaces
import { User } from '../../../../interface/user';
import { FriendShip } from '../../../../interface/friendship';
import { Request } from '../../../../interface/request';
import { Knowledge } from '../../../../interface/knowledge';

@Component({
  selector: 'user-profile',
  templateUrl: 'client/dev/app/components/front-end/user-profile/templates/user-profile.html',
  styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
  directives: [
    ROUTER_DIRECTIVES,
    RequestRecordComponent,
    UserProfileBarComponent
  ]
})

export class UserProfileComponent implements DoCheck {

  //name of user in current profile page
  name: string;

  isExist: boolean;
  isFriend: boolean;

  roleToken: string;
  userToken: string;

  //check if profile page of current user, hide "addFriend" button
  checkUser: boolean;

  //check if a user was sent friend request by current user
  checkSentRequestUser: boolean;

  //check if a current user is received a request of a user
  checkIsRecivedRequest:boolean;

  differ: any;

  userProfile: User;

  buttonTitle: string;

  friendList: FriendShip[];

  requests: Request[];

  knowledgeName: string;

  constructor(public router: Router, private route: ActivatedRoute, public _userService: UserService,
    public _knowledgeService: KnowledgeService) {
    this.route
      .params
      .subscribe(params => {
        this.name = params['name'];
      });
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');

  }

  ngOnInit(): void {
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


  }


  getRequestByUser(): void {
    this._userService
      .getRequestByUser(this.name)
      .subscribe((requests) => {
        for (var i = 0; i < requests.length; i++) {
          requests[i].createdAt = this.formatDate(requests[i].createdAt);
          requests[i].modifiedDate = this.formatDate(requests[i].modifiedDate);
        }
        this.requests = requests;
      })
  }

  public notification: any = {
    show: false,
    title: 'Demo notification!',
    body: 'ng2-notifications',
    icon: 'https://goo.gl/3eqeiE',
    action: function () {
      window.open('https://github.com/alexcastillo/ng2-notifications');
    }
  };

  public formatDate = function (date) {
    if (date) {
      var newDate, day, month, year;
      year = date.substr(0, 4);
      month = date.substr(5, 2);
      day = date.substr(8, 2);
      return newDate = day + '/' + month + '/' + year;
    }
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
