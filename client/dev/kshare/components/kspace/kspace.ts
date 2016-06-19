import { Component, OnInit } from '@angular/core';
import { Request } from '../../../dashboard/interface/request';
import { RequestService } from '../../../dashboard/services/requests-service';
import { ChatService } from '../../../dashboard/services/chat-service';
import { AuthService } from '../../../dashboard/services/auth-services';
import { KSpaceService } from '../../../dashboard/services/kspace-service';

import { Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, RouteSegment} from'@angular/router';
import { ChatComponent } from '../kspace/chat';

declare var SimpleWebRTC:any;
declare var Script:any;
@Component ({
  selector: 'kspace',
  templateUrl:'client/dev/kshare/templates/kspace/kspace.html',
  styleUrls: ['client/dev/kshare/styles/kspace.css'],
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
    // var webrtc = new SimpleWebRTC({
    //   // the id/element dom element that will hold "our" video
    //   localVideoEl: 'localVideo',
    //   // the id/element dom element that will hold remote videos
    //   remoteVideosEl: 'remotesVideos',
    //   // immediately ask for camera access
    //   autoRequestMedia: true
    // });
    // // we have to wait until it's ready
    // webrtc.on('readyToCall', function () {
    //   // you can name it anything
    //   webrtc.joinRoom(this.room);
    // });

    //get chat room by kspace id
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
