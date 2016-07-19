/**
 * Created by GiangDH on 7/12/16.
 */
"use strict";
var WebRCTService = (function () {
    function WebRCTService() {
    }
    WebRCTService.prototype.rtcSetting = function (webrtc, room, lecturer) {
        // If there is a peer join room, add Remote Video
        webrtc.on('videoAdded', function (video, peer) {
            // if(lecturer === peer.nick){
            console.log('video added', peer);
            var remotes = document.getElementById('remoteVideos');
            if (remotes) {
                var container = document.createElement('div');
                container.className = 'videoContainer';
                container.id = 'container_' + webrtc.getDomId(peer);
                container.appendChild(video);
                // suppress contextmenu
                video.oncontextmenu = function () { return false; };
                remotes.appendChild(container);
                var kspacePanel = $('#kspace-panel');
                $('#' + container.id).click(function () {
                    kspacePanel.find('video').remove();
                    $('#' + container.id).find('video').clone().appendTo('#kspace-panel');
                    var video = kspacePanel.find('video');
                    video.css('width', '100%');
                    video.css('height', '100%');
                });
            }
            // }
        });
        // a peer video was removed
        webrtc.on('videoRemoved', function (video, peer) {
            console.log('video removed ', peer);
            $('#kspace-panel').find('video').remove();
            var remotes = document.getElementById('remoteVideos');
            var el = document.getElementById(peer ? 'container_' + webrtc.getDomId(peer) : 'localScreenContainer');
            if (remotes && el) {
                remotes.removeChild(el);
            }
        });
        webrtc.on('readyToCall', function () {
            if (room) {
                console.log("Join " + room + " success!");
                webrtc.joinRoom(room);
            }
        });
    };
    WebRCTService.prototype.shareScreen = function (webrtc, shareScreenToken) {
        if (shareScreenToken) {
            webrtc.stopScreenShare();
            $('#kspace-panel').find('video').remove();
            return false;
        }
        else {
            webrtc.shareScreen();
            return true;
        }
    };
    return WebRCTService;
}());
exports.WebRCTService = WebRCTService;
//# sourceMappingURL=rtc-services.js.map