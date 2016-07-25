/**
 * Created by GiangDH on 5/18/16.
 */
import { Component, OnChanges, SimpleChange } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';

import { Notification } from '../../../interface/notification';

import { AuthService } from '../../../services/auth';
import { NotificationService } from '../../../services/notification';
declare var io: any;

// import * as io from 'socket.io';

@Component({
  selector: 'header',
  templateUrl: 'client/dev/app/components/front-end/shared/templates/header.html',
  styleUrls: ['client/dev/app/components/front-end/shared/styles/header.css'],
  directives: [
    ROUTER_DIRECTIVES]
})

export class HeaderComponent {
  notiTitle: string = 'Nhận được lời mời kết bạn';
  loginToken: boolean = false;
  userToken: string;
  roleToken: string;
  countUnReadNoti: number;
  isDiffirent: boolean;
  socket: any;

  notifications: Notification[];
  
  constructor(private _auth: AuthService, public router: Router, public _noti: NotificationService) {
    this.userToken = localStorage.getItem('username');
    this.roleToken = localStorage.getItem('userrole');

  }

  ngOnInit(): void {
    // function getNotificationByUser(user: string) {
    //   //this.countUnReadNoti = 0;
    //   this._noti.getNotificationByUser(user).subscribe(
    //     (notifications) => {
    //       this.notifications = notifications.reverse();

    //       // for (var i = 0; i < notifications.length; i++) {
    //       //   if (notifications[i].status === "Chưa đọc") {
    //       //     this.countUnReadNoti++;
    //       //   }
    //       // }
    //     });
    // }

    this.socket = io('https://localhost:3333');
    this.socket.on('receive notification', function (data) {
      if (localStorage.getItem('username') === data.data.user) {
        console.log(data.data);
        // getNotificationByUser(localStorage.getItem('username'));

        //show noti 
        this.notiTitle = 'Bạn đã nhận được lời mời kết bạn';
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 10000);
      }

    });

    if (this.userToken) {
      this.loginToken = true;
    }
    this.getNotificationByUser();

  }

  logout(): void {
    this._auth.logout();
    this._auth.logoutClient();
    window.location.reload();
  }

  showNotification(title: string) {
    this.notiTitle = title;
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 10000);
  }

  getNotificationByUser(): void {
    this.countUnReadNoti = 0;
    this._noti.getNotificationByUser(this.userToken).subscribe(
      (notifications) => {
        this.notifications = notifications;
        this.notifications.reverse();

        for (var i = 0; i < notifications.length; i++) {
          if (notifications[i].status === "Chưa đọc") {
            this.countUnReadNoti++;
          }
        }
      }
    );
  }

  changeStatusNotification(): void {
    this._noti.changeStatusNotification(this.userToken).subscribe(
      (notifications) => {
        console.log('change status notification successful');
      }
    )
  }

}
