/**
 * Created by GiangDH on 7/12/16.
 */
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
                var v = webrtc.getDomId(peer);
                var vid = document.getElementById(v);
                vid.setAttribute("control", "");
                $('#' + v).click(function () {
                    var chalkboard = document.getElementById('chalkboard');
                    var ctx = chalkboard.getContext('2d');
                    ctx.drawImage(vid, 5, 5, chalkboard.clientWidth, chalkboard.clientHeight);
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
})();
exports.WebRCTService = WebRCTService;
//# sourceMappingURL=rtc-services.js.map