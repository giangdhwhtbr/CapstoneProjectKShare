//cores
import { Component, OnInit, Input } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

//components
import { PushNotificationComponent } from '../shared/notification';

//services
import { UserService } from '../../../services/users';

import { KnowledgeService } from '../../../services/knowledge';

//interfaces
import { User } from '../../../interface/user';
import { FriendShip } from '../../../interface/friendship';
import { Request } from '../../../interface/request';
import { Knowledge } from '../../../interface/knowledge';

@Component({
  selector: 'request-record',
  templateUrl: 'client/dev/app/components/front-end/user-profile/templates/friend-list.html',
  styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
  directives: [
    ROUTER_DIRECTIVES,
    PushNotificationComponent
  ]
})

export class FriendListComponent {
  pendingRequests: FriendShip[];
  friendships: FriendShip[];

  roleToken: string;
  userToken: string;

  constructor(private router: Router,private route: ActivatedRoute, private _userService: UserService,
             private _knowledgeService: KnowledgeService) {
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
    this.route
      .params
      .subscribe(params => {
        this.name = params['name'];
      });
  }

  ngOnInit(): void {
      console.log(this.name);
      this.pendingRequests = [];
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
        }
      })
  }

}
