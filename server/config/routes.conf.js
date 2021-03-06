"use strict";

const morgan = require('morgan');
const bodyParser = require('body-parser');
const contentLength = require('express-content-length-validator');
const helmet = require('helmet');
const express = require('express');
const passport = require('passport');
const expressSession = require('express-session');


module.exports = class RouteConfig {
    static init(application) {
        let _root = process.cwd();
        // let _clientFiles = (process.env.NODE_ENV === 'production') ? '/client/dist/' : '/client/dev/';
        let _clientFiles = '/client/dist/'
        application.use(express.static(_root));
        application.use(express.static(_root + _clientFiles));
        application.use(bodyParser.json({limit: '50mb'}));
        application.use(morgan('dev'));
        application.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

        application.use(helmet());
        application.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        application.use(expressSession({
            secret: 'kshare',
            cookie: {maxAge: 86400000},
            secure: false,
            httpOnly: false,
            resave: true,
            saveUninitialized: true
        }));

        // Add passport's middleware
        application.use(passport.initialize());
        application.use(passport.session());

        require('../api/user/config/passport')(passport);
    }
}
