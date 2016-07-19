import { Component, OnInit, OnDestroy } from '@angular/core';
import { Request } from '../../../interface/request';
import { RequestService } from '../../../services/requests';
import { AuthService } from '../../../services/auth';
import { KSpaceService } from '../../../services/kspace';
import { WebRCTService } from './rtc-services';

import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from'@angular/router';
//import { ChatComponent } from './chat';
import { ChalkBoardComponent } from './chalkboard';

declare var SimpleWebRTC: any;
declare var $: any;


@Component ({
  selector: 'kspace',
  templateUrl:'client/dev/app/components/front-end/kspace/templates/kspace.html',
  styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
  directives: [
     ROUTER_DIRECTIVES,
     ChalkBoardComponent
  ],
  providers: [
    WebRCTService
  ]
})

export class KSpaceComponent {
    id: string;
    user: string;
    username: string;
    kspace: any;
    lecturer: string;
    learner: string;

    constructor(
      public router:Router,
      private route:ActivatedRoute,
      private _kspaceService: KSpaceService,
      private rtcService: WebRCTService
      ) {
      this.route
        .params
        .subscribe(params => {
          this.id = params['id'];
        });
    this.username = localStorage.getItem('username');
  }

  /*
  * Init when the component is initiated
  *
  * */

  ngOnInit(): void{
    // DOM elements
    
    var shareScreenBtn = $('#sharescreen-btn');
    var chalkBoardBtn = $('#chalkboard-btn');
    var videoCallBtn = $('#videocall-btn');

    var localVideo = $('#localVideo');
    var remoteVideos = $('#remoteVideos');
    var kspacePanel = $('#kspace-panel');
    
    var chatBox = $('#chat-box-panel');
    var drawTools = $('#draw-tools-panel');



    this._kspaceService
      .getKSpaceById(this.id)
      .subscribe(kspace => {
        var room = kspace._id;
        var username = this.username;
        var rtc = this.rtcService;

        if (username){
          // initiate webrtc

          var isKspaceUser = function() {
            if(username === kspace.lecturer || username === kspace.learner){
              return true;
            }
            return false;
          };
          if(username === kspace.lecturer){
            var webrtc = new SimpleWebRTC({
              // the element that will hold local video
              localVideoEl: 'localVideo',
              // the element that will hold remote videos
              remoteVideosEl: '',
              autoRequestMedia: true,
              log: true,
              autoRemoveVideos: true,
              nick: username,
              localVideo: {
                autoplay: true, // automatically play the video stream on the page
                mirror: true, // flip the local video to mirror mode (for UX)
                muted: true // mute local video stream to prevent echo
              }
            });
          }else {
            var webrtc = new SimpleWebRTC({
              remoteVideosEl: '',
              nick: username,
              media: { video: true, audio: true}
            })
          }

          console.log(webrtc);
          rtc.rtcSetting(webrtc,room,kspace.lecturer);
          var peers = webrtc.getPeers();
          var sharescreenToken: boolean = false;
          shareScreenBtn.click(function () {
              sharescreenToken = rtc.shareScreen(webrtc,sharescreenToken);
          });
          chalkBoardBtn.click(function (){
              kspacePanel.find('video').remove();
          });

           
          }else {
            this.router.navigateByUrl('/');
          }
      },
        (error) => {
      this.router.navigateByUrl('/');
    });
  }
}
