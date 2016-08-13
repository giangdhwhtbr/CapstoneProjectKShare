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

  //Listening for private chat message

  socket.on('private-message', (data) => {
    var users = {
      user1: data.sender,
      user2: data.receiver
    };
    ChatRoomCtrl.getChatRoomByUser(users)
    .then(chatRoom => {
      if(chatRoom._id){
        var updateData = {
          room: chatRoom._id,
          sender: data.sender,
          message: data.message,
          sentAt: new Date()
        };
        ChatRoomCtrl.updateChatRoom(updateData)
            .then(chatRoom => {
              io.in(chatRoom.room).emit('private-message-return',data);
            }).catch(error => {
          console.log(error);
          io.in(data.room).emit('chat-error',{message: 'Có lỗi hệ thống xảy ra, mong bạn thông cảm!'});
        });
      }else {
        ChatRoomCtrl.createChatRoom(data)
            .then(chatRoom => {
              io.emit('room-created', chatRoom);
            }).catch(err => {
          console.log(err);
          socket.broadcast.emit('chat-error',{message: 'Có lỗi hệ thống xảy ra, mong bạn thông cảm!'});
        });
      }
    });

    //if(data.room){
    //  // Update chatLogs of the room
    //  ChatRoomCtrl.updateChatRoom(data)
    //    .then(chatRoom => {
    //      io.in(data.room).emit('private-message-return',data);
    //    }).catch(error => {
    //     console.log(error);
    //     socket.in(data.room).broadcast.emit('chat-error',{message: 'Có lỗi hệ thống xảy ra, mong bạn thông cảm!'});
    //  });
    //} else {
    //  // Create new chat room
    //  ChatRoomCtrl.createChatRoom(data)
    //  .then(chatRoom => {
    //    socket.broadcast.emit('room-created', chatRoom);
    //  }).catch(err => {
    //    console.log(err);
    //    socket.broadcast.emit('chat-error',{message: 'Có lỗi hệ thống xảy ra, mong bạn thông cảm!'});
    //  });
    //}
  });

  //Listening for get chatroom
  socket.on('get-chatroom',data => {
    ChatRoomCtrl.getChatRoomByUser(data)
    .then(chatRoom =>{
      console.log(chatRoom);
      socket.broadcast.emit('room-returned', chatRoom);
    })
    .catch(error => {console.log(error)});
  });

});
