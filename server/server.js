'use strict';

//if ('production' === process.env.NODE_ENV)
//    require('newrelic');

const PORT = process.env.PORT || 80;

const os = require('os');
const express = require('express');

const app = express();
const https = require('https');

const fs = require('fs');
const RoutesConfig = require('./config/routes.conf');
const PoliciesConfig = require('./config/policies.conf');
const DBConfig = require('./config/db.conf');
const Routes = require('./routes/index');
const socket = require('socket.io');

const KSpaceCtrl = require('./api/kspace/kspace-controller');
const ChatRoomCtrl = require('./api/chatRoom/chatRoom-controller');

RoutesConfig.init(app);
PoliciesConfig.init();
DBConfig.init();
Routes.init(app, express.Router());

const opts = {
  key: fs.readFileSync(__dirname + '/cert/server.key'),
  cert: fs.readFileSync(__dirname + '/cert/server.crt')
}


const server = https.createServer(opts,app)
     .listen(PORT, () => {
       console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
       console.log(`enviroment: ${process.env.NODE_ENV}`);
     });


const io = socket(server);
// Set socket.io listeners.
io.on('connection',  (socket) => {
  socket.on('send notification', (data) => {
    socket.broadcast.emit('receive notification', {data})
  });

  //Listening for the start point and path points of the path when lecturer drawing
  socket.on ('startPoint', (data) => {
    socket.in(data.room).broadcast.emit( 'startPoint', data );
  });

  socket.on( 'pathpoint',(data) => {
    socket.in(data.room).broadcast.emit( 'pathpoint', data );
  });
  //Listening for the event "user subscribe board"
  socket.on('subscribe', (data) => {
        socket.join(data.room);
        socket.in(data.room).broadcast.emit('userSubscribed',data);
  });
  //Listening for the event "user unsubscribe"
  socket.on('unsubscribe', (room) => {
      socket.leave(room);
  });
  //Listening for the event "lecturer sharing the board"
  socket.on('shareBoard', (board) => {
      socket.in(board.room).broadcast.emit('shareBoard',board);
  });
  //Listening for the event "user send message"
  socket.on("chat_message", (data) => {
        KSpaceCtrl.updateChatLogs(data)
        .then(kspace => {
          var dataReturn = {
            user: data.createdUser,
            msg: data.message,
            url: data.dataURL
          }
          io.in(data.id).emit("chat_message", dataReturn);
        })
        .catch(error => {
          console.log('Server error at saving chatlog!');
        });

  });

  //Listening for the event "Lecturer create new board"
  socket.on('newBoard', (data) => {

    KSpaceCtrl.updateBoards(data)
    .then(kspace => {
      var dataReturn = {
        lecturer: data.lecturer,
        boardNumber: data.boardNumber,
        json: data.json
      };
      socket.in(data.room).broadcast.emit('newBoard',(dataReturn));
    })
    .catch(error =>{
      console.log('Server error at update new board to kspace!');
    });

  });
  //Listening for the event "Lecturer change board"
  socket.on('changeBoard', (data) =>{
    var dataReturn = {
      json: data.json,
      lecturer: data.lecturer
    };

    socket.in(data.room).broadcast.emit('changeBoard',dataReturn);
  });

  /**
   * Socket.io configuration for private chatting feature
   * */

  socket.on('subscribe-private-chat',(room) => {
    socket.join(room);
  });

  //Listening for private chat message

  socket.on('private-message', (data) => {
    ChatRoomCtrl.updateChatLogs(data)
    .then(chatRoom => {
      data.sentAt = new Date();
      data.users = chatRoom.users;
      data.id = chatRoom._id;

      io.in(data.id).emit('private-message-return',data);
      io.emit('new-message-notification',data);
    }).catch(error => {
      console.log(error);
    });
  });

  socket.on('reset-new-message', (data) => {
    ChatRoomCtrl.ResetNewMessages(data)
    .then(chatRoom => {
      data.sentAt = new Date();
       data.users = chatRoom.users;
      io.emit(chatRoom._id).emit('private-message-reset',data);
    }).catch(error => {
      console.log(error);
    });
  });

});
