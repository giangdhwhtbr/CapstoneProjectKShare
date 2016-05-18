"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var morgan = require('morgan');
var bodyParser = require('body-parser');
var contentLength = require('express-content-length-validator');
var helmet = require('helmet');
var express = require('express');
var passport = require('passport');
var expressSession = require('express-session');
var flash = require('connect-flash');

module.exports = function () {
    function RouteConfig() {
        _classCallCheck(this, RouteConfig);
    }

    _createClass(RouteConfig, null, [{
        key: 'init',
        value: function init(application) {
            var _root = process.cwd();
            var _clientFiles = process.env.NODE_ENV === 'production' ? '/client/dist/' : '/client/dev/';
            application.use(flash());
            application.use(express.static(_root));
            application.use(express.static(_root + _clientFiles));
            application.use(bodyParser.json());
            // parse application/x-www-form-urlencoded
            application.use(bodyParser.urlencoded({ extended: false }));
            application.use(morgan('dev'));
            application.use(contentLength.validateMax({ max: 999 }));
            application.use(helmet());
            application.use(expressSession({ secret: 'kshare' }));
            require('../api/user/config/passport')(passport);
            // Add passport's middleware
            application.use(passport.initialize());
            application.use(passport.session());
        }
    }]);

    return RouteConfig;
}();

//# sourceMappingURL=routes.conf-compiled.js.map