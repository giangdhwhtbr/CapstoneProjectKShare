//cores
import { Component, OnInit, DoCheck, Input  } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute} from'@angular/router';

//services
import { UserService } from '../../../services/users';
import { AuthService } from '../../../services/auth';
import { NotificationService } from '../../../services/notification';

//interfaces
import { User } from '../../../interface/user';
import { FriendShip } from '../../../interface/friendship';
import { Notification } from '../../../interface/notification';

@Component({
  selector: 'user-profile-bar',
  templateUrl: 'client/dev/app/components/front-end/user-profile/templates/user-profile-bar.html',
  styleUrls: ['client/dev/app/components/front-end/user-profile/styles/user-profile.css'],
  directives: [
    ROUTER_DIRECTIVES
  ]
})

export class UserProfileBarComponent {

  //name of user in current profile page
  name: string;
  filesToUpload: Array<File>;
  linkImg: string;

  isFriend: boolean;

  roleToken: string;
  userToken: string;

  //check if profile page of current user, hide "addFriend" button
  checkUser: boolean;
  //check if a user was sent friend request by current user
  checkSentRequestUser: boolean;
  //check if a current user is received a request of a user
  checkIsRecivedRequest: boolean;

  userProfile: User;
  friendList: FriendShip[];

  constructor(public router: Router, private route: ActivatedRoute, public _userService: UserService,
    public _noti: NotificationService) {
    this.route
      .params
      .subscribe(params => {
        this.name = params['name'];
      });
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
  }

  ngOnInit(): void {

    this.linkImg = '';
    this._userService.getUserByUserName(this.name).subscribe(
      (user) => {
        this.userProfile = user;
        this.linkImg = user.linkImg;
      }, (error) => {
        console.log(error);
      }
    );

    //check if current user is staying in his/her profile page
    if (this.name === this.userToken) {
      this.checkUser = true;
    }
    this.getFriendList();
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    if (this.filesToUpload) {
      this._userService.makeFileRequest("/api/media", [], this.filesToUpload).then((r) => {
        this.linkImg = '/uploads/' + r[0].filename;
        this._userService.updateAvartaLink(this.userToken, this.linkImg).subscribe(r => {
          console.log("update link profile picture successful");
        });
      }, (error) => {
        console.error(error);
      });
    }

  }



  addFriend(): void {
    if (this.isFriend === false) {
      this._userService
        .addFriend(this.userToken, this.name)
        .subscribe((r) => {
          console.log('friendship was created by ' + this.userToken + ' and ' + this.name);
        })

      //create a notification to user who get accepted a friend request
      var title = 'Lời mời kết bạn từ ' + this.userToken;
      var link = '/user/' + this.name + '/friends';

      alert("đã gửi lời mời kết bạn thành công");

      //call function using socket io to send notification
      this._noti.alertNotification(title, this.name, link);

      //save notification to database
      this._noti.createNotification(title, this.name, link).subscribe(
        (notification) => {
          console.log(notification);
        });
    } else {
      alert("Bạn đã gửi kết bạn rồi!");
    }
    this.getFriendList();
  }

  deleteFriend(): void {
    var r = confirm("Bạn có muốn hủy kết bạn");
    if (r == true) {
      this._userService
        .deleteFriendRequest(this.userToken, this.name)
        .subscribe(() => {
          console.log('delete successfull');
        });
      this._userService
        .deleteFriendRequest(this.name, this.userToken)
        .subscribe(() => {

        });
      this.getFriendList();
      this.isFriend = false;
      alert("bạn đã hủy gửi lời  mời kết bạn");
    }
  }

  //get friend list: pending and accepted
  getFriendList(): void {
    this.checkSentRequestUser = false;
    this._userService
      .getFriendList(this.userToken)
      .subscribe((friendlist) => {
        this.friendList = friendlist;
        this.checkIsFriend();
        //check sent request
        for (var i = 0; i < this.friendList.length; i++) {
          if (friendlist[i].user2 === this.name && this.friendList[i].status === "pending") {
            this.checkSentRequestUser = true;
            break;
          }
        }

        for (var i = 0; i < this.friendList.length; i++) {
          if (friendlist[i].user1 === this.name && this.friendList[i].status === "pending") {
            this.checkIsRecivedRequest = true;
            break;
          }
        }

      })
  }

  public formatDate = function (date) {
    if (date) {
      var newDate, day, month, year;
      year = date.substr(0, 4);
      month = date.substr(5, 2);
      day = date.substr(8, 2);
      return newDate = day + '/' + month + '/' + year;
    }
  }

  public checkIsFriend() {
    this.isFriend = false;
    for (var i = 0; i < this.friendList.length; i++) {
      if ((this.name === this.friendList[i].user1 && this.friendList[i].status === "accepted") ||
        (this.name === this.friendList[i].user2 && this.friendList[i].status === "accepted")) {
        this.isFriend = true;
        break;
      }
    }
  }

}
