//core
import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, RouteSegment} from'@angular/router';

//service
import { UserService } from '../../../services/users';
import { AuthService } from '../../../services/auth'

//interface
import { User } from '../../../interface/user';
import { FriendShip } from '../../../interface/friendship'

@Component({
  selector: 'user-profile',
  templateUrl: 'client/dev/app/components/front-end/user-profile/templates/user-profile.html',
  styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class UserProfileComponent {

  //name of user in current profile page
  name: string;

  roleToken: string;
  userToken: string;

  //check if profile page of current user, hide "addFriend" button
  checkUser: boolean;

  //check if a user was sent friend request by current user
  checkSentRequestUser: boolean;

  userProfile: User;

  buttonTitle: string;

  friendList: FriendShip[];

  constructor(public router: Router, rParam: RouteSegment, public _userService: UserService,
    public _auth: AuthService) {
    this.name = rParam.getParam('name');
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
    this.buttonTitle = "Thêm bạn";

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

    //check if current user is staying in his/her profile page
    if (this.name === this.userToken) {
      this.checkUser = true;
    }

    this.getFriendList();

  }

  addFriend(): void {
    this._userService
      .addFriend(this.userToken, this.name)
      .subscribe((r) => {
        console.log('friendship was created by ' + this.userToken + ' and ' + this.name);
      })
  }

  getFriendList(): void {
    this.checkSentRequestUser = false;
    this._userService
      .getFriendList(this.userToken)
      .subscribe((friendlist) => {
        this.friendList = friendlist;

        //check sent request
        for (var i = 0; i < this.friendList.length; i++) {
          if (friendlist[i].user2 === this.name && this.friendList[i].status === "pending") {
            console.log(this.getFriendList[i]);
            this.checkSentRequestUser = true;
            break;
          }

        }

      })
  }

}
