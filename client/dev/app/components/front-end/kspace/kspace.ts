import { Component, OnInit, Inject} from '@angular/core';
import { Request } from '../../../interface/request';
import { RequestService } from '../../../services/requests';
import { AuthService } from '../../../services/auth';
import { KSpaceService } from '../../../services/kspace';
import { WebRCTService } from './rtc-services';

import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from'@angular/router';

import {
  Validators,
  FormBuilder,
  ControlGroup,
  Control,
  FORM_DIRECTIVES,
} from '@angular/common';

//import { ChatComponent } from './chat';
import { ChalkBoardComponent } from './chalkboard';

declare var SimpleWebRTC: any;
declare var $: any;
declare var io: any;

@Component ({
  selector: 'kspace',
  templateUrl:'client/dev/app/components/front-end/kspace/templates/kspace.html',
  styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
  directives: [
     ROUTER_DIRECTIVES,
     FORM_DIRECTIVES,
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

    messages: Array<any>;
    mess: String;
    socket: any;

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
      this.messages = [];
      this.socket = io('https://localhost:3333');
      this.socket.emit('subscribe', this.id);
      this.socket.on("chat_message", (dataReturn) => {
        var isSender: boolean = false;

        if(dataReturn.user == this.username) {
          isSender = true;
        }

            var msgObject = {
              user: dataReturn.user,
              msg:  dataReturn.msg,
              url: dataReturn.url,
              sender: isSender
            }
            this.messages.push(msgObject); 
        });
  }

  send(message:string, img: any) {
      if(img){
        
        var chalkboard = document.getElementById("chalkboard");
        var ctx = chalkboard.getContext("2d");
        var dataURL = chalkboard.toDataURL();

        var data = {
          id: this.id,
          createdUser: this.username,
          message: message,
          dataURL: dataURL
        }
        this.socket.emit("chat_message", data);
        this.mess = "";

      }else {

        var data = {
          id: this.id,
          createdUser: this.username,
          message: message
        }
        this.socket.emit("chat_message", data);
        this.mess = "";

      }
        
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

    // initiate setting
    var chatToolShow: boolean = false;
    $('#chat-panel').hide();
    //show chat-panel
    $('#chat').click(function(){
        if(!chatToolShow){
            $('#chat-panel').show();
            $('#kspace-panel').css('right','18%');
            $('#draw-option').css('margin-left','96.8%');
            chatToolShow = true;
        } else {
            $('#chat-panel').hide();
            $('#kspace-panel').css('right','6%');
            $('#draw-option').css('margin-left','97.15%');
            chatToolShow = false;
        }
    });

    this._kspaceService
      .getKSpaceById(this.id)
      .subscribe(kspace => {
        var chatlog = kspace.chatlog;
        var isSender:boolean = false;
        for (var log of chatlog){
          var msg = log.createdUser +': '+log.message;
          if(log.createdUser == this.username){
            isSender = true;
          } else {
            isSender = false;
          }
          var msgObject = {
            user: log.createdUser,
            msg:  log.message,
            sender: isSender,
            url: log.dataURL
          } 
          this.messages.push(msgObject);
        }

        var room = kspace._id;
        var username = this.username;
        var rtc = this.rtcService;

        var isKspaceUser = function() {
          if(username === kspace.lecturer || username === kspace.learner){
            return true;
          }
          return false;
        };
        if (isKspaceUser()){
          
          // initiate webrtc
          if(username === kspace.lecturer){
            var webrtc = new SimpleWebRTC({
              localVideoEl: 'localVideo',
              remoteVideosEl: '',
              autoRequestMedia: true,
              nick: username,
              localVideo: {
                autoplay: true, // automatically play the video stream on the page
                mirror: true, // flip the local video to mirror mode (for UX)
                muted: true // mute local video stream to prevent echo
              },
              log: true,
              debug: false
            });
          }else if(username === kspace.learner) {
            var webrtc = new SimpleWebRTC({
              remoteVideosEl: '',
              nick: username,
              media: { video: false, audio: true}
            })
          }
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
