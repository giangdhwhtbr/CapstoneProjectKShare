/**
 * Created by Duc Duong on 8/19/2016.
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

@Component({
    selector: 'header',
    templateUrl: 'client/dev/app/components/shared/templates/404.html',
    styleUrls: ['client/dev/app/components/shared/styles/404.css'],
    directives: [
        ROUTER_DIRECTIVES, PrivateChatComponent]
})

export class errorPageComponent {
    constructor(private _auth:AuthService, public router:Router, public _noti:NotificationService,
                private _userService:UserService, private _chatService:ChatService,private routerCh :ActivatedRoute) {
    }
}

