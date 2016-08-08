var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var rtc_services_1 = require('./rtc-services');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
//import { ChatComponent } from './chat';
var chalkboard_1 = require('./chalkboard');
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
        this.messages = [];
        this.socket = io('https://localhost:80');
        this.socket.emit('subscribe', this.id);
        this.socket.on("chat_message", function (dataReturn) {
            var isSender = false;
            if (dataReturn.user == _this.username) {
                isSender = true;
            }
            var msgObject = {
                user: dataReturn.user,
                msg: dataReturn.msg,
                url: dataReturn.url,
                sender: isSender
            };
            _this.messages.push(msgObject);
        });
    }
    KSpaceComponent.prototype.send = function (message, img) {
        if (img) {
            var chalkboard = document.getElementById("chalkboard");
            var ctx = chalkboard.getContext("2d");
            var dataURL = chalkboard.toDataURL();
            var data = {
                id: this.id,
                createdUser: this.username,
                message: message,
                dataURL: dataURL
            };
            this.socket.emit("chat_message", data);
            this.mess = "";
        }
        else {
            var data = {
                id: this.id,
                createdUser: this.username,
                message: message
            };
            this.socket.emit("chat_message", data);
            this.mess = "";
        }
    };
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
        // initiate setting
        var chatToolShow = false;
        $('#chat-panel').hide();
        //show chat-panel
        $('#chat').click(function () {
            if (!chatToolShow) {
                $('#chat-panel').show();
                $('#kspace-panel').css('right', '18%');
                $('#draw-option').css('margin-left', '96.8%');
                chatToolShow = true;
            }
            else {
                $('#chat-panel').hide();
                $('#kspace-panel').css('right', '6%');
                $('#draw-option').css('margin-left', '97.15%');
                chatToolShow = false;
            }
        });
        this._kspaceService
            .getKSpaceById(this.id)
            .subscribe(function (kspace) {
            var chatlog = kspace.chatlog;
            var isSender = false;
            for (var _i = 0; _i < chatlog.length; _i++) {
                var log = chatlog[_i];
                var msg = log.createdUser + ': ' + log.message;
                if (log.createdUser == _this.username) {
                    isSender = true;
                }
                else {
                    isSender = false;
                }
                var msgObject = {
                    user: log.createdUser,
                    msg: log.message,
                    sender: isSender,
                    url: log.dataURL
                };
                _this.messages.push(msgObject);
            }
            var room = kspace._id;
            var username = _this.username;
            var rtc = _this.rtcService;
            var isKspaceUser = function () {
                if (username === kspace.lecturer || username === kspace.learner) {
                    return true;
                }
                return false;
            };
            if (isKspaceUser()) {
                // initiate webrtc
                if (username === kspace.lecturer) {
                    var webrtc = new SimpleWebRTC({
                        localVideoEl: 'localVideo',
                        remoteVideosEl: '',
                        autoRequestMedia: true,
                        nick: username,
                        localVideo: {
                            autoplay: true,
                            mirror: true,
                            muted: true // mute local video stream to prevent echo
                        },
                        log: true,
                        debug: false
                    });
                }
                else if (username === kspace.learner) {
                    var webrtc = new SimpleWebRTC({
                        localVideoEl: 'localVideo',
                        remoteVideosEl: '',
                        autoRequestMedia: true,
                        nick: username,
                        localVideo: {
                            autoplay: true,
                            mirror: true,
                            muted: true // mute local video stream to prevent echo
                        },
                        log: true,
                        debug: false
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
                common_1.FORM_DIRECTIVES,
                chalkboard_1.ChalkBoardComponent
            ],
            providers: [
                rtc_services_1.WebRCTService
            ]
        })
    ], KSpaceComponent);
    return KSpaceComponent;
})();
exports.KSpaceComponent = KSpaceComponent;
//# sourceMappingURL=kspace.js.map