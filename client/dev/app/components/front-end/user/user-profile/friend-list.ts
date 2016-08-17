//cores
import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

//components
import { RequestFriendRecordComponent } from './request-friend-record';
import { FriendRecordComponent } from './friend-record';
import { UserProfileBarComponent } from './user-profile-bar';
import { PrivateChatComponent } from './../../../shared/private-chat';

//services
import { UserService } from '../../../../services/users';

//interfaces
import { User } from '../../../../interface/user';
import { FriendShip } from '../../../../interface/friendship';
import { Request } from '../../../../interface/request';

@Component({
  selector: 'request-record',
  templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/friend-list.html',
  styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
  directives: [
    ROUTER_DIRECTIVES,
    RequestFriendRecordComponent,
    FriendRecordComponent,
    UserProfileBarComponent,
    PrivateChatComponent
  ]
})

export class FriendListComponent {
  pendingRequests: FriendShip[];
  acceptedRequest: FriendShip[];
  friendNames: string[];

  friendships: FriendShip[];
  name: string;
  roleToken: string;
  userToken: string;

  constructor(private router: Router, private route: ActivatedRoute, private _userService: UserService) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
    this.route
      .params
      .subscribe(params => {
        this.name = params['name'];
      });
  }

  ngOnInit(): void {

    this.pendingRequests = [];
    this.acceptedRequest = [];
    this.friendNames = [];
    this.getFriendList();
  }

  //get friend list: pending and accepted
  getFriendList(): void {
    this._userService
      .getFriendList(this.name)
      .subscribe((friendlist) => {
        this.friendships = friendlist;
        //check sent request
        for (var i = 0; i < this.friendships.length; i++) {

          if (this.friendships[i].user2 === this.name && this.friendships[i].status === "pending") {
            this.pendingRequests.push(this.friendships[i]);
          }

          if (this.friendships[i].user2 === this.name && this.friendships[i].status === "accepted") {
            this.acceptedRequest.push(this.friendships[i]);
          }

          if (this.friendships[i].user1 === this.name && this.friendships[i].status === "accepted") {
            this.acceptedRequest.push(this.friendships[i]);
          }

        }
        this.getFriendName();
      })
  }

  getFriendName(): void {
    for (var i = 0; i < this.acceptedRequest.length; i++) {

      if (this.acceptedRequest[i].user1 === this.name) {
        this.friendNames.push(this.acceptedRequest[i].user2);
      } else {
        this.friendNames.push(this.acceptedRequest[i].user1);
      }

    }
  }

  action(data: any): void {
    if (data === "accept") {
      this.pendingRequests = [];
      this.acceptedRequest = [];
      this.friendNames = [];
      this.getFriendList();

    }

  }

}
