/**
 * Created by GiangDH on 5/3/16.
 */
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var usersRoutes = require('../api/user/routes/user-route');
var StaticDispatcher = require('../commons/static/index');

module.exports = function () {
  function Routes() {
    _classCallCheck(this, Routes);
  }

  _createClass(Routes, null, [{
    key: 'init',
    value: function init(app, router) {
      usersRoutes.init(router);
      router.route('*').get(StaticDispatcher.sendIndex);
      app.use('/', router);
    }
  }]);

  return Routes;
}();

//# sourceMappingURL=index-compiled.js.map