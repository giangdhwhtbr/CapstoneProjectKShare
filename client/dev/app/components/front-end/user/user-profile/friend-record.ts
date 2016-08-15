//cores
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

//services
import { UserService } from '../../../../services/users';
import { AuthService } from '../../../../services/auth';

//interfaces
import { User } from '../../../../interface/user';
import { FriendShip } from '../../../../interface/friendship';

@Component({
  selector: 'friend-record',
  templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/friend-record.html',
  styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class FriendRecordComponent {
  @Input('friendName') friendName: string;
 @Output() sendDataToP: EventEmitter<string> = new EventEmitter<string>();
  displayname: string;
  email: string;
  level: string;
  userToken:string;
  isFriend:boolean;
  name:string;

  constructor(private router: Router, private route: ActivatedRoute,
                private _userService: UserService, private _auth:AuthService) {
    this.userToken = localStorage.getItem('username');
    this.isFriend = true;
    this.route
      .params
      .subscribe(params => {
        this.name = params['name'];
      });
  }

  ngOnInit(): void {
    this.getUserInformation();
  }

  getUserInformation():void {
    this._userService.getUserByUserName(this.friendName).subscribe(
      (userinfo) => {
        this.displayname = userinfo.displayName;
        this.email = userinfo.email;
        this.level = userinfo.level;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteFriend(): void {
    var r = confirm("Bạn có muốn hủy kết bạn");
    if (r == true) {
      this._userService
        .deleteFriendRequest(this.userToken, this.friendName)
        .subscribe(() => {
          console.log('delete successfull');
        });
      this._userService
        .deleteFriendRequest(this.friendName, this.userToken)
        .subscribe(() => {
          this.isFriend = false;
        });
      this._userService
        .deactivateChatRoom(this.friendName, this.userToken)
        .subscribe(() => {
          
        });

      alert("bạn đã hủy gửi lời  mời kết bạn");
      this.sendDataToP.emit("accept");
    }
  }

}
