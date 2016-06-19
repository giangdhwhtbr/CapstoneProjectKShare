import { Component, OnInit } from '@angular/core';
import { Request } from '../../../interface/request';
import { RequestService } from '../../../services/requests';
import { ChatService } from '../../../services/chat';
import { AuthService } from '../../../services/auth';
import { KSpaceService } from '../../../services/kspace';

import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, RouteSegment} from'@angular/router';
import { ChatComponent } from './chat';

declare var SimpleWebRTC:any;
declare var Script:any;
@Component ({
  selector: 'kspace',
  templateUrl:'client/dev/app/components/front-end/kspace/templates/kspace.html',
  styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
  directives: [
     ROUTER_DIRECTIVES,
     ChatComponent
  ]
})

export class KSpaceComponent {
    constructor(private _requestService:RequestService, public router:Router,
              rParam:RouteSegment, private _kspaceService: KSpaceService,
              private _auth:AuthService, private _chatService: ChatService) {
    this.id = rParam.getParam('id');
    this.roleToken = localStorage.getItem('role');
    this.userToken = localStorage.getItem('username');
  }
  id: string;
  chatRoomId: string;
  user: string;
  roleToken: string;
  userToken: string;

  ngOnInit(): void{
    this.user = localStorage.getItem('username');

    //get chat room by front.kspace id
    this._chatService.findChatRoomByKSpaceId(this.id).subscribe(
          (chatRoom) => {
            this.chatRoomId = chatRoom[0]._id;
            console.log(this.chatRoomId);
          },
          (error) => {
            console.log(error);
          }
        );

  }

}
