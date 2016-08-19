/**
 * Created by GiangDH on 5/18/16.
 */
import { Component, OnChanges, SimpleChange,AfterViewChecked,
    AfterViewInit,DoCheck,AfterContentInit,AfterContentChecked } from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';

import { Notification } from '../../interface/notification';

import { AuthService } from '../../services/auth';
import { NotificationService } from '../../services/notification';
import { UserService } from '../../services/users';
import { ChatService } from '../../services/chat';
import { PrivateChatComponent } from '../../components/shared/private-chat';

declare var io:any;
declare var $:any;

@Component({
    selector: 'header',
    templateUrl: 'client/dev/app/components/shared/templates/header.html',
    styleUrls: ['client/dev/app/components/shared/styles/header.css'],
    directives: [
        ROUTER_DIRECTIVES, PrivateChatComponent]
})

export class HeaderComponent {
    notiTitle:string;
    loginToken:boolean;
    userToken:string;
    roleToken:string;
    countUnReadNoti:number;
    link:string;
    socket:any;
    count:number = 2;
    num:number = 10;
    isNewMessage:boolean = false;

    notifications:Notification[];

    isFrontend:boolean=false;


    constructor(private _auth:AuthService, public router:Router, public _noti:NotificationService,
                private _userService:UserService, private _chatService:ChatService,private routerCh :ActivatedRoute) {
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
    }


    ngOnInit():void {

        this.isFrontend=(window.location.pathname+"").substring(0,6)!="/admin";

        this._auth.isLoggedIn().subscribe(res => {
                if (res.login) {
                    this.loginToken = true;
                    this.getNotificationByUser();
                } else {
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
                // audio.src = "https://localhost:80/client/dev/asserts/gets-in-the-way.mp3";
                audio.load();
                audio.play();
                this.getNotificationByUser();

                //show noti
                this.notiTitle = data.data.title;
                this.link = data.data.link;
                var x = document.getElementById("snackbar")
                x.className = "show";
                setTimeout(function () {
                    x.className = x.className.replace("show", "");
                }, 10000);
            }
        });
        this._chatService.getAllChatRoomOfUser(this.userToken).subscribe((chatRooms) => {
            for (var j = 0; j < chatRooms.length; j++) {
                for (var i = 0; i < 2; i++) {
                    if (chatRooms[j].users[i].user === this.userToken && chatRooms[j].users[i].newMessages > 0) {
                        this.isNewMessage = true;
                    }
                }
            }

        });
        $('.dropdown-button').dropdown();
    }

    ngAfterViewChecked(){
        $('#sidenav-overlay').hide();
        $('.drag-target').hide();
    }

    openChat() {
        $('#chatBoxK').openModal();
        this.isNewMessage = false;
    }

    open():void {
        $('.button-collapse').sideNav();
    }

    openKnw(){
        $('.btnOpenNavF').sideNav();
    }

    searchFriend(nameSearch:string){
        this.router.navigateByUrl('/user/search/'+nameSearch);
    }

    logout():void {
        this._auth.logout()
            .subscribe(res => {
                if (res.success == true) {
                    this._auth.logoutClient();
                    window.location.reload();
                }
            });
    }

    showNotification(title:string) {
        this.notiTitle = title;
        var x = document.getElementById("snackbar")
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 10000);
    }

    getNotificationByUser():void {
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

    changeStatusNotification():void {
        this.countUnReadNoti = 0;
        this._noti.changeStatusNotification(this.userToken).subscribe(
            (notifications) => {
                console.log('change status notification successful');
            }
        )
    }

    action(data):void {
        if (this.userToken === data[0]) {
            this.isNewMessage = data[1];
        }
    }

    seeMore() {
        this.num = this.num + 10;
        this.getNotificationByUser();
    }

}
