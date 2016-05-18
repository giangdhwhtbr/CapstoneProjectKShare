"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mongoose = require('mongoose');
var passport = require('passport');
var userDAO = require('../dao/user-dao');
//const User = mongoose.model('User');

//Send Json
var sendJsonResponse = function sendJsonResponse(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports = function () {
  function userController() {
    _classCallCheck(this, userController);
  }

  _createClass(userController, null, [{
    key: 'getAll',
    value: function getAll(req, res) {
      userDAO.getAll().then(function (user) {
        return res.status(200).json(user);
      }).catch(function (error) {
        return res.status(400).json(error);
      });
    }
  }, {
    key: 'createNew',
    value: function createNew(req, res) {
      var currentDate = new Date();
      var user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        displayName: req.body.displayName,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
        createdAt: currentDate,
        updatedAt: currentDate
      };
      //let _user = req.body;
      userDAO.createNew(user).then(function (user) {
        return res.status(200).json(user);
      }).catch(function (error) {
        return res.status(400).json(error);
      });
      //console.log(JSON.stringify(req.headers));
    }
  }, {
    key: 'updateUser',
    value: function updateUser(req, res) {
      if (req.params && req.params.id) {
        var currentDate = new Date();
        userDAO.getUserById(req.params.id).then(function (user) {
          user.firstName = req.body.firstName, user.lastName = req.body.lastName, user.displayName = req.body.displayName, user.username = req.body.username, user.password = req.body.password, user.email = req.body.email, user.role = req.body.role, user.updatedAt = currentDate;

          //res.status(200).json(user);
          userDAO.updateUserById(user).then(function (user) {
            return res.status(200).json(user);
          }).catch(function (error) {
            return res.status(400).json(error);
          });
        }).catch(function (error) {
          return res.status(400).json(error);
        });
      } else {
        res.status(404).json({
          "message": "No Userid in request"
        });
      }
    }
  }, {
    key: 'removeById',
    value: function removeById(req, res) {
      var _id = req.params.id;

      userDAO.removeById(_id).then(function () {
        return res.status(200).end();
      }).catch(function (error) {
        return res.status(400).json(error);
      });
    }
  }]);

  return userController;
}();

//# sourceMappingURL=user-controller-compiled.js.map