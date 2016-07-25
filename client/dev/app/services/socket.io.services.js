var socket;
var SocketIOService = (function () {
    function SocketIOService() {
    }
    SocketIOService.prototype.ioInit = function () {
        socket = io('http://localhost:3333');
        return socket;
    };
    SocketIOService.prototype.ioSubscribeRoom = function (room) {
        socket.emit('subscribe', room);
    };
    SocketIOService.prototype.emitStartPoint = function (x, y, color, width) {
        var data = {
            x: x,
            y: y,
            color: color,
            width: width
        };
        socket.emit('startPoint', data);
    };
    SocketIOService.prototype.emitPathPoint = function (x, y) {
        var data = {
            x: x,
            y: y
        };
        socket.emit('pathpoint', data);
    };
    return SocketIOService;
})();
exports.SocketIOService = SocketIOService;
//# sourceMappingURL=socket.io.services.js.map