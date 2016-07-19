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
var kspace_1 = require('../../../services/kspace');
var rtc_services_1 = require('./rtc-services');
var router_1 = require('@angular/router');
//import { ChatComponent } from './chat';
var chalkboard_1 = require('./chalkboard');
var SimpleWebRTC = require('../../../../asserts/js/simplewebrtc.js');
var $ = require('jquery');
var KSpaceComponent = (function () {
    function KSpaceComponent(router, route, _kspaceService, rtcService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._kspaceService = _kspaceService;
        this.rtcService = rtcService;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.username = localStorage.getItem('username');
    }
    /*
    * Init when the component is initiated
    *
    * */
    KSpaceComponent.prototype.ngOnInit = function () {
        // DOM elements
        var _this = this;
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
            .subscribe(function (kspace) {
            var room = kspace._id;
            var username = _this.username;
            var rtc = _this.rtcService;
            if (username) {
                // initiate webrtc
                var isKspaceUser = function () {
                    if (username === kspace.lecturer || username === kspace.learner) {
                        return true;
                    }
                    return false;
                };
                if (username === kspace.lecturer) {
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
                            autoplay: true,
                            mirror: true,
                            muted: true // mute local video stream to prevent echo
                        }
                    });
                }
                else {
                    var webrtc = new SimpleWebRTC({
                        remoteVideosEl: '',
                        nick: username,
                        media: { video: true, audio: true }
                    });
                }
                rtc.rtcSetting(webrtc, room, kspace.lecturer);
                var peers = webrtc.getPeers();
                var sharescreenToken = false;
                shareScreenBtn.click(function () {
                    sharescreenToken = rtc.shareScreen(webrtc, sharescreenToken);
                });
                chalkBoardBtn.click(function () {
                    kspacePanel.find('video').remove();
                });
            }
            else {
                _this.router.navigateByUrl('/');
            }
        }, function (error) {
            _this.router.navigateByUrl('/');
        });
    };
    KSpaceComponent = __decorate([
        core_1.Component({
            selector: 'kspace',
            templateUrl: 'client/dev/app/components/front-end/kspace/templates/kspace.html',
            styleUrls: ['client/dev/app/components/front-end/kspace/styles/kspace.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                chalkboard_1.ChalkBoardComponent
            ],
            providers: [
                rtc_services_1.WebRCTService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, kspace_1.KSpaceService, rtc_services_1.WebRCTService])
    ], KSpaceComponent);
    return KSpaceComponent;
}());
exports.KSpaceComponent = KSpaceComponent;
//# sourceMappingURL=kspace.js.map