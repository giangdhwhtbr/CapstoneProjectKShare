/**
 * Created by GiangDH on 5/18/16.
 */
import { Component, OnChanges, SimpleChange } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';

import { Notification } from '../../../interface/notification';

import { AuthService } from '../../../services/auth';
import { NotificationService } from '../../../services/notification';
import { UserService } from '../../../services/users';
declare var io: any;

@Component({
  selector: 'header',
  templateUrl: 'client/dev/app/components/front-end/shared/templates/header.html',
  styleUrls: ['client/dev/app/components/front-end/shared/styles/header.css'],
  directives: [
    ROUTER_DIRECTIVES]
})

export class HeaderComponent {
  notiTitle: string;
  loginToken: boolean;
  userToken: string;
  roleToken: string;
  countUnReadNoti: number;
  link: string;
  socket: any;
  count: number = 2;
  num:number = 10;

  notifications: Notification[];

  constructor(private _auth: AuthService, public router: Router, public _noti: NotificationService,
            private _userService: UserService) {
    this.userToken = localStorage.getItem('username');
    this.roleToken = localStorage.getItem('userrole');
  }

  ngOnInit(): void {

    this._auth.isLoggedIn().subscribe(res =>{
      if(res.login){
        this.loginToken = true;
        this.getNotificationByUser();
      }else {
        this._auth.logoutClient();
        this.loginToken = false;
      }
    },
    error => {
      console.log('Server error');
    });

    this.link = '';
    this.socket = io('https://localhost:80');
    this.socket.on('receive notification', (data) => {
      if (localStorage.getItem('username') === data.data.user) {
        //audio of notification
        var audio = new Audio();
        audio.src = "https://localhost:80/client/dev/asserts/gets-in-the-way.mp3";
        audio.load();
        audio.play();
        this.getNotificationByUser();

        //show noti
        this.notiTitle = data.data.title;
        this.link = data.data.link;
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 10000);
      }
    });
  }

  logout(): void {
    this._auth.logout()
      .subscribe(res => {
        console.log(res);
        if(res.success == true){
          this._auth.logoutClient();
          window.location.reload();
        }
      });
  }

  showNotification(title: string) {
    this.notiTitle = title;
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 10000);
  }

  getNotificationByUser(): void {
    this.countUnReadNoti = 0;
    this._noti.getNotificationByUser(this.userToken, this.num).subscribe(
      (notifications) => {
        this.notifications = notifications;

        for (var i = 0; i < notifications.length; i++) {
          if (notifications[i].status === "Chưa đọc") {
            this.countUnReadNoti++;
          }
        }
      }
    );
  }

  changeStatusNotification(): void {
    this.countUnReadNoti = 0;
    this._noti.changeStatusNotification(this.userToken).subscribe(
      (notifications) => {
        console.log('change status notification successful');
      }
    )
  }

  seeMore(){
    this.num = this.num + 10;
    this.getNotificationByUser();
  }

}
