/**
 * Created by GiangDH on 7/12/16.
 */
declare var $: any;
export class WebRCTService {
    rtcSetting(webrtc:SimpleWebRTC, room:string, lecturer:string) {
        // If there is a peer join room, add Remote Video
        webrtc.on('videoAdded', function (video, peer) {
             if(lecturer === peer.nick){
              var remotes = document.getElementById('remoteVideos');
              var kspace = document.getElementById('kspace');
              var peerId = webrtc.getDomId(peer);
              if (peerId.indexOf('video') !== -1) {
                  var container = document.createElement('div');
                  container.className = 'videoContainer';
                  container.id = 'container_' + peerId;
                  container.appendChild(video);
                  // suppress contextmenu
                  video.oncontextmenu = function () {
                      return false;
                  };
                  remotes.appendChild(container);
              }else if (peerId.indexOf('screen') !== -1) {
                $('#kspace-container').hide();
                var container = document.createElement('div');
                container.className = 'videoContainer';
                container.id = 'container_' + peerId;
                container.appendChild(video);
                container.style.width = kspace.clientWidth + 'px';
                container.style.height = kspace.clientHeight + 'px';
                // suppress contextmenu
                video.oncontextmenu = function () {
                  return false;
                };
                kspace.appendChild(container);
              }
             }
        });
        // a peer video was removed
        webrtc.on('videoRemoved', function (video, peer) {
          $('#kspace-panel').find('video').remove();
          var remotes = document.getElementById('remoteVideos');
          var kspace = document.getElementById('kspace');
          var el = document.getElementById(peer ? 'container_' + webrtc.getDomId(peer) : 'localScreenContainer');
          var peerId = webrtc.getDomId(peer);
          if (peerId.indexOf('video') !== -1) {
            remotes.removeChild(el);
          } else if (peerId.indexOf('screen') !== -1) {
            kspace.removeChild(el);
            $('#kspace-container').show();
          }
        });
        webrtc.on('readyToCall', function () {
            if (room) {
                webrtc.joinRoom(room);
            }
        });
    }

    shareScreen(webrtc:SimpleWebRTC, shareScreenToken:boolean) {
        if (shareScreenToken) {
            webrtc.stopScreenShare();
            $('#kspace-panel').find('video').remove();
            return false;
        } else {
            webrtc.shareScreen();
            return true;
        }
    }
}
