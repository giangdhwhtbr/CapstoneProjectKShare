import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Request } from '../../../dashboard/interface/request';
import { RequestService } from '../../../dashboard/services/requests-service';
import { AuthService } from '../../../dashboard/services/auth-services';
import { Router } from "@angular/router";
declare var SimpleWebRTC:any;
declare var Script:any;
@Component ({
  selector: 'kspace',
  templateUrl:'client/dev/kshare/templates/kspace/kspace.html',
  styleUrls: ['client/dev/kshare/styles/kspace.css'],
  directives: [
     ROUTER_DIRECTIVES,
  ]
})

export class KSpaceComponent {
  user: string
  ngOnInit(): void{
    this.user = localStorage.getItem('username');
    var webrtc = new SimpleWebRTC({
      // the id/element dom element that will hold "our" video
      localVideoEl: 'localVideo',
      // the id/element dom element that will hold remote videos
      remoteVideosEl: 'remotesVideos',
      // immediately ask for camera access
      autoRequestMedia: true
    });
    // we have to wait until it's ready
    webrtc.on('readyToCall', function () {
      // you can name it anything
      webrtc.joinRoom(this.room);
    });
  }

}
