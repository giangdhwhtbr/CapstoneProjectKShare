//cores
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';
declare var io: any;

//services
import { UserService } from '../../../../services/users';
import { AuthService } from '../../../../services/auth';
import { NotificationService } from '../../../../services/notification';

//interfaces
import { User } from '../../../../interface/user';
import { FriendShip } from '../../../../interface/friendship';

@Component({
  selector: 'request-friend-record',
  templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/request-friend-record.html',
  styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class RequestFriendRecordComponent {
  @Input('requestUser') requestUser: string;
  @Input('name') name: string;
  @Output() sendDataToP: EventEmitter<string> = new EventEmitter<string>();

  displayname: string;
  email: string;
  level: string;
  socket: any;
  isFriend: boolean;

  isAdded: boolean;
  constructor(private router: Router, private route: ActivatedRoute, private _userService: UserService,
    public _noti: NotificationService) {
    this.socket = io('https://localhost:80');
    this.route
      .params
      .subscribe(params => {
        this.name = params['name'];
      });
  }

  ngOnInit(): void {
    this.isAdded = false;
    this.isFriend = true;
    this.getUserInformation();
  }

  acceptRequest(): void {
    this._userService.acceptFriendRequest(this.requestUser, this.name).subscribe(
      () => {
        console.log("accepted successful");
        alert("Bạn đã là bạn bè với " + this.requestUser);
        this.isAdded = true;

        var title = this.name + ' chấp nhận kết bạn';
        var link = '/user/' + this.name;

        //call function using socket io to send notification
        this._noti.alertNotification(title, this.requestUser, link);
        //save notification to database
        this._noti.createNotification(title, this.requestUser, link).subscribe(
          (notification) => {
            console.log('create a notification to ' + this.name);
            this.sendDataToP.emit("accept");
            // var data = [this.requestUser, this.name];
            // this.socket.emit('chatroom-friend', data);
            alert('Đã là bạn bè');
            this.router.navigateByUrl('/user/' + this.requestUser);
          });
      }
    );

  }

  getUserInformation(): void {
    this._userService.getUserByUserName(this.requestUser).subscribe(
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
        .deleteFriendRequest(this.requestUser, this.name)
        .subscribe(() => {
          console.log('delete successfull');
          this.sendDataToP.emit("accept");
          this.isFriend = false;
          alert("bạn đã hủy gửi lời  mời kết bạn");
        });
    }
  }

}
