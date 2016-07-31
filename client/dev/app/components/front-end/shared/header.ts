/**
 * Created by GiangDH on 5/18/16.
 */
import { Component, OnChanges, SimpleChange } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';

import { Notification } from '../../../interface/notification';

import { AuthService } from '../../../services/auth';
import { NotificationService } from '../../../services/notification';
declare var io: any;

<<<<<<< HEAD
=======

>>>>>>> c1468ad7ca27c4782ad676f155b38ed3f6c67fca
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
  isDiffirent: boolean;
  socket: any;

  notifications: Notification[];

  constructor(private _auth: AuthService, public router: Router, public _noti: NotificationService) {
    this.loginToken = localStorage.getItem('username') ? true : false;
    this.userToken = localStorage.getItem('username');
    this.roleToken = localStorage.getItem('userrole');
  }

  ngOnInit(): void {

    this.link = '';
    this.socket = io('https://localhost:8081');
    this.socket.on('receive notification', (data) => {
      if (localStorage.getItem('username') === data.data.user) {
        //audio of notification
        var audio = new Audio();
        audio.src = "https://localhost:8081/client/dev/asserts/gets-in-the-way.mp3";
        console.log(audio);
        audio.load();
        audio.play();
        this.getNotificationByUser(data.data.user);

        //show noti
        this.notiTitle = data.data.title;
        this.link = data.data.link;
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 10000);
      }

    });


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

}
