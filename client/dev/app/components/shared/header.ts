/**
 * Created by GiangDH on 5/18/16.
 */
import { AfterViewChecked,
    AfterViewInit, DoCheck, AfterContentInit, AfterContentChecked, Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';

import { Notification } from '../../interface/notification';

import { AuthService } from '../../services/auth';
import { NotificationService } from '../../services/notification';
import { UserService } from '../../services/users';
import { ChatService } from '../../services/chat';
import { PrivateChatComponent } from '../../components/shared/private-chat';

declare var io: any;
declare var $: any;

@Component({
    selector: 'header',
    templateUrl: 'client/dev/app/components/shared/templates/header.html',
    styleUrls: ['client/dev/app/components/shared/styles/header.css'],
    directives: [
        ROUTER_DIRECTIVES, PrivateChatComponent]
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
    num: number = 10;
    isNewMessage: boolean = false;

    notifications: Notification[];
    isFrontend: boolean = false;
    isRoom: boolean = false;
    constructor(private _auth: AuthService, public router: Router, public _noti: NotificationService,
        private _userService: UserService, private _chatService: ChatService) {
        this.userToken = localStorage.getItem('username');
        this.roleToken = localStorage.getItem('userrole');
    }

    ngOnInit(): void {

        this.isFrontend = (window.location.pathname + "").substring(0, 6) != "/admin";

        this.isRoom = (window.location.pathname + "").substring(0, 5) == "/room";


        this.sub = this._auth.isLoggedIn().subscribe(res => {
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
                this.getNotificationByUser();

            }
        });
        this.socket.on('new-message-notification', data => {
            if (data.receiver === this.userToken)
            { this.isNewMessage = true; }
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

    ngAfterViewChecked() {
        //$('#sidenav-overlay').remove();
        //$('.drag-target').remove();
        $("body").css("overflow", "scroll");
    }

    openChat() {
        $('#chatBoxK').openModal();
        this.isNewMessage = false;
    }
    open(): void {
        $('.button-collapse').sideNav();
    }

    openKnw() {
        $('.btnOpenNavF').sideNav();
    }

    searchFriend(nameSearch: string) {
        this.router.navigateByUrl('/user/search/' + nameSearch);
    }

    logout(): void {
        this._auth.logout()
            .subscribe(res => {
                if (res.success == true) {
                    this._auth.logoutClient();
                    window.location.reload();
                }
            });
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
        if (this.countUnReadNoti > 0) {
            this.countUnReadNoti = 0;
            this._noti.changeStatusNotification(this.userToken).subscribe(
                (notifications) => {
                    console.log('change status notification successful');
                }
            )
        }
    }

    action(data): void {
        if (this.userToken === data[0]) {
            this.isNewMessage = data[1];
        }
    }

    seeMore() {
        this.num = this.num + 10;
        this.getNotificationByUser();
    }

}
