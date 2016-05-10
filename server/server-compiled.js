'use strict';

if ('production' === process.env.NODE_ENV) require('newrelic');

var PORT = process.env.PORT || 3333;

var os = require('os');
var https = require('https');
var express = require('express');
var fs = require('fs');
var RoutesConfig = require('./config/routes.conf');
var DBConfig = require('./config/db.conf');
var userRoutes = require('./routes/users');

var app = express();

RoutesConfig.init(app);
DBConfig.init();
userRoutes.init(app, express.Router());

var opts = {
  key: fs.readFileSync(__dirname + '/cert/server.key'),
  cert: fs.readFileSync(__dirname + '/cert/server.crt')
};

https.createServer(opts, app).listen(PORT, function () {
  console.log('up and running @: ' + os.hostname() + ' on port: ' + PORT);
  console.log('enviroment: ' + process.env.NODE_ENV);
});

//# sourceMappingURL=server-compiled.js.map