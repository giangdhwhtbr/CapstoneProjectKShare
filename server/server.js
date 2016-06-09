'use strict';

//if ('production' === process.env.NODE_ENV)
//    require('newrelic');

const PORT = process.env.PORT || 3333;

const os = require('os');
const https = require('https');
const express = require('express');
const fs = require('fs');
const RoutesConfig = require('./config/routes.conf');
const PoliciesConfig = require('./config/policies.conf');
const DBConfig = require('./config/db.conf');
const Routes = require('./routes/index');
const io = require('socket.io');


const app = express();

RoutesConfig.init(app);
PoliciesConfig.init();
DBConfig.init();
Routes.init(app, express.Router());


const opts = {
  key: fs.readFileSync(__dirname + '/cert/server.key'),
  cert: fs.readFileSync(__dirname + '/cert/server.crt')
}


var server = https.createServer(opts, app)
     .listen(PORT, () => {
       console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
       console.log(`enviroment: ${process.env.NODE_ENV}`);
     });

var socket = io(server);
