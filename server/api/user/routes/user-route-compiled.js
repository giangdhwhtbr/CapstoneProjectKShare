"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userController = require('../controller/user-controller');
var passport = require('passport');
var userPolicies = require('../config/policies');
module.exports = function () {
  function userRoutes() {
    _classCallCheck(this, userRoutes);
  }

  _createClass(userRoutes, null, [{
    key: 'init',
    value: function init(router) {
      router.route('/api/user').get(userPolicies.isAllowed, userController.getAll).post(userPolicies.isAllowed, userController.createNew);

      router.route('/api/user/:id').delete(userPolicies.isAllowed, userController.removeById).put(userPolicies.isAllowed, userController.updateUser);

      router.route('/api/login').post(passport.authenticate('local-login', {
        successRedirect: '/api/user'
      }));
    }
  }]);

  return userRoutes;
}();

//# sourceMappingURL=user-route-compiled.js.map