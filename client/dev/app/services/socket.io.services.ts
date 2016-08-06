declare var io:any;
var socket;
export class SocketIOService {
    ioInit() {
        socket = io('http://localhost:80');
        return socket;
    }

    ioSubscribeRoom (room: string ){
        socket.emit('subscribe', room);
    }

    emitStartPoint(x,y,color,width) {
                var data = {
                    x: x,
                    y: y,
                    color,
                    width
                };
                socket.emit( 'startPoint', data)
    }
    emitPathPoint( x, y) {
                var data = {
                    x: x,
                    y: y
                };
                socket.emit( 'pathpoint', data)
    }
}