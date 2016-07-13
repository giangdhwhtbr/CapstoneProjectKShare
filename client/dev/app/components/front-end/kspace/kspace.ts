import { Component, OnInit, OnDestroy } from '@angular/core';
import { Request } from '../../../interface/request';
import { RequestService } from '../../../services/requests';
import { AuthService } from '../../../services/auth';
import { KSpaceService } from '../../../services/kspace';
import { WebRCTService } from './rtc-services';

import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from'@angular/router';
//import { ChatComponent } from './chat';

import * as io from 'socket.io';

import * as SimpleWebRTC from '../../../../asserts/js/simplewebrtc.js';
import * as $ from 'jquery';

@Component ({
  selector: 'kspace',
  templateUrl:'client/dev/app/components/front-end/kspace/templates/kspace.html',
  styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
  directives: [
     ROUTER_DIRECTIVES
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
  *
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


          if(username){
          // Check is lecturer or learner or guest
          var isKspaceUser = function() {
            if(username === kspace.lecturer || username === kspace.learner){
              return true;
            }
            return false;
          };
        }
        if (username){
          // initiate webrtc
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



          rtc.rtcSetting(webrtc,room,kspace.lecturer);

          var sharescreenToken: boolean = false;
          shareScreenBtn.click(function () {
              sharescreenToken = rtc.shareScreen(webrtc,sharescreenToken);
          });
          chalkBoardBtn.click(function (){
              kspacePanel.find('video').remove();
          });

          //videoCallBtn.click(function(){
          //  var photo =  takeSnapshot();
          //  photoUrl = URL.createObjectURL(photo);
          //  console.log(photoUrl);
          //});
          //
          //function takeSnapshot() {
          //  var canvasEl = document.createElement('canvas');
          //  var video = document.getElementById('kspace-panel').childNodes[0];
          //  console.log(video);
          //  var w = video.videoWidth;
          //  var h = video.videoHeight;
          //  console.log('width:'+w+' height:'+h);
          //  canvasEl.width = w;
          //  canvasEl.height = h;
          //  var context = canvasEl.getContext('2d');
          //  context.fillRect(0, 0, w, h);
          //  context.translate(w/2, h/2);
          //  context.scale(-1, 1);
          //  context.translate(w/-2, h/-2);
          //  context.drawImage(
          //    video,
          //    0, 0, w, h
          //  );
          //  // toBlob would be nice...
          //  var url = canvasEl.toDataURL('image/jpg');
          //  var data = url.match(/data:([^;]*);(base64)?,([0-9A-Za-z+/]+)/);
          //  var raw = atob(data[3]);
          //  var arr = new Uint8Array(raw.length);
          //  for (var i = 0; i < raw.length; i++) {
          //    arr[i] = raw.charCodeAt(i);
          //  }
          //  var blob = new Blob([arr], {type: data[1] });
          //  return  blob
          //}

          }else {
            this.router.navigateByUrl('/');
          }
      },
        (error) => {
      this.router.navigateByUrl('/');
    });
  }
}
