/**
 * Created by GiangDH on 8/28/16.
 */
import { Component, OnInit, Input } from '@angular/core';
import { WebRCTService } from './rtc-services';
declare var SimpleWebRTC:any;
declare var $: any;
@Component ({
  selector: 'kspace-webrtc',
  templateUrl: 'client/dev/app/components/front-end/kspace/templates/webrtc.html',
  styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
  providers: [
    WebRCTService
  ]
})

export class RTCComponent {
  username: string;
  hiddenShareScreen:boolean = true;
  guest: string;
  avarta:string;
  isLearner: boolean = false;
  @Input()lecturer: string;
  @Input()learners: any;
  @Input()room: string;
  constructor(private rtcService : WebRCTService){
    this.username = localStorage.getItem('username');
    this.guest = localStorage.getItem('guest');
    this.avarta = localStorage.getItem('avarta');
  }

  ngOnInit(): void {
    //private kspace
    if(this.lecturer && this.learners){
      if (this.lecturer === this.username) {
        this.hiddenShareScreen = false;
      }
      for (let learner of this.learners){
        if(this.username === learner){
          this.isLearner = true;
        }
      }
      // DOM elements
      var shareScreenBtn = $('#sharescreen-btn');
      // initiate webrtc
      var webrtc = new SimpleWebRTC({
        localVideoEl: 'localVideo',
        remoteVideosEl: '',
        autoRequestMedia: true,
        nick: this.username,
        localVideo: {
          autoplay: true, // automatically play the video stream on the page
          mirror: true, // flip the local video to mirror mode (for UX)
          muted: true // mute local video stream to prevent echo
        },
        log: true,
        debug: false
      });

      var rtc = this.rtcService;

      rtc.rtcSetting(webrtc, this.room, this.lecturer);
      var sharescreenToken:boolean = false;
      shareScreenBtn.click(function () {
        sharescreenToken = rtc.shareScreen(webrtc, sharescreenToken);
      });
    }else {
      // initiate webrtc
      var webrtc = new SimpleWebRTC({
        localVideoEl: 'localVideo',
        remoteVideosEl: '',
        autoRequestMedia: true,
        nick: this.username,
        localVideo: {
          autoplay: true, // automatically play the video stream on the page
          mirror: true, // flip the local video to mirror mode (for UX)
          muted: true // mute local video stream to prevent echo
        },
        log: true,
        debug: false
      });
      var rtc = this.rtcService;
      rtc.rtcSetting(webrtc, this.room, this.lecturer);
    }
  }
}
