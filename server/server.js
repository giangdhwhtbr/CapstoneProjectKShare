'use strict';

//if ('production' === process.env.NODE_ENV)
//    require('newrelic');

const PORT = process.env.PORT || 8081;

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
io.on('connection', function (socket) {
  //socket.broadcast.emit('notification', { hello: 'world' });
  socket.on('send notification', function (data) {
    socket.broadcast.emit('receive notification', {data})
  });
  socket.on ('startPoint', function(data){
    socket.in(data.room).broadcast.emit( 'startPoint', data );
  });

  socket.on( 'pathpoint', function( data) {
    socket.in(data.room).broadcast.emit( 'pathpoint', data );
  });
  socket.on('subscribe', function(room) { 
        socket.join(room); 
    })

  socket.on('unsubscribe', function(room) {  
      socket.leave(room); 
  })

  socket.on("chat_message", function(data){
        KSpaceCtrl.updateChatLog(data)
        .then(kspace => {
          var dataReturn = {
            user: data.createdUser,
            msg: data.message,
            url: data.dataURL
          }
          io.in(data.id).emit("chat_message", dataReturn);
        })
        .catch(error => {
          var dataReturn = 'Server Error!'
          io.in.data.id.emit("chat_message",dataReturn);
        });

    });

});
