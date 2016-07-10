"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var requests_1 = require('../../../services/requests');
var kspace_1 = require('../../../services/kspace');
var router_1 = require('@angular/router');
//import { ChatComponent } from './chat';
var SimpleWebRTC = require('../../../../asserts/js/simplewebrtc.js');
var $ = require('jquery');
var KSpaceComponent = (function () {
    function KSpaceComponent(_requestService, router, route, _kspaceService) {
        this._requestService = _requestService;
        this.router = router;
        this.route = route;
        this._kspaceService = _kspaceService;
        this.sharescrbtn = "share screen";
        //this.route
        //  .params
        //  .subscribe(params => {
        //    this.id = params['id'];
        //  });
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    KSpaceComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('username');
        //get chat room by front.kspace id
        //this._chatService.findChatRoomByKSpaceId(this.id).subscribe(
        //      (chatRoom) => {
        //        this.chatRoomId = chatRoom[0]._id;
        //      },
        //      (error) => {
        //        console.log(error);
        //      }
        //    );
        var username = localStorage.getItem('username');
        var room = this.id;
        if (username) {
            var webrtc = new SimpleWebRTC({
                // the element that will hold local video
                localVideoEl: 'localVideo',
                // the element that will hold remote videos
                remoteVideosEl: 'remotesVideos',
                autoRequestMedia: true,
                log: true,
                autoRemoveVideos: true,
                nick: username,
                localVideo: {
                    autoplay: true,
                    mirror: false,
                    muted: true // mute local video stream to prevent echo
                }
            });
            webrtc.on('videoAdded', function (video, peer) {
                console.log('video added', peer);
                var remotes = document.getElementById('remotesVideos');
                if (remotes) {
                    var container = document.createElement('div');
                    container.className = 'videoContainer';
                    container.id = 'container_' + webrtc.getDomId(peer);
                    container.appendChild(video);
                    // suppress contextmenu
                    video.oncontextmenu = function () { return false; };
                    remotes.appendChild(container);
                }
            });
            webrtc.on('readyToCall', function () {
                // you can name it anything
                if (room) {
                    console.log("Join " + room + " success!");
                    console.log(webrtc);
                    webrtc.joinRoom(room);
                }
            });
            // Extra credit! Hook up screenshare button
            var button = $('#sharescreen'), setButton = function (bool) {
                button.text(bool ? 'share screen' : 'stop sharing');
            };
            //
            setButton(true);
            button.click(function () {
                if (webrtc.localScreen) {
                    webrtc.stopScreenShare();
                    setButton(true);
                }
                else {
                    webrtc.shareScreen();
                    setButton(false);
                }
                //    //window.open(window.location.href ,'_blank','width=500, height=400');
            });
        }
        // a peer video has been added
        //this.makeCall(room, webrtc);
    };
    KSpaceComponent.prototype.makeCall = function (room, webrtc) {
        // we have to wait until it's ready
    };
    KSpaceComponent = __decorate([
        core_1.Component({
            selector: 'kspace',
            templateUrl: 'client/dev/app/components/front-end/kspace/templates/kspace.html',
            styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES
            ]
        }), 
        __metadata('design:paramtypes', [requests_1.RequestService, router_1.Router, router_1.ActivatedRoute, kspace_1.KSpaceService])
    ], KSpaceComponent);
    return KSpaceComponent;
}());
exports.KSpaceComponent = KSpaceComponent;
