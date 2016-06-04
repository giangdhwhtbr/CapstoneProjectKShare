"use strict";

var mongoose = require('mongoose');
var Promise = require('bluebird');
var userSchema = require('../model/user-model');
var passport = require('passport');
var _ = require('lodash');

//Send Json
var sendJsonResponse = function sendJsonResponse(res, status, content) {
  res.status(status);
  res.json(content);
};

userSchema.statics.getAll = function () {
  return new Promise(function (resolve, reject) {
    var _query = {};

    User.find(_query).exec(function (err, user) {
      err ? reject(err) : resolve(user);
    });
  });
};

userSchema.statics.getUserById = function (id) {

  return new Promise(function (resolve, reject) {
    if (!_.isString(id)) {
      return reject(new TypeError('ID is not a String.'));
    }
    User.findById(id).exec(function (err, user) {
      err ? reject(err) : resolve(user);
    });
  });
};

userSchema.statics.createNew = function (user) {
  return new Promise(function (resolve, reject) {
    if (!_.isObject(user)) {
      return reject(new TypeError('User is not a valid object.'));
    }

    var _user = new User(user);

    _user.save(function (err, saved) {
      err ? reject(err) : resolve(saved);
    });
  });
};

userSchema.statics.removeById = function (id) {
  return new Promise(function (resolve, reject) {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    User.findByIdAndRemove(id).exec(function (err, deleted) {
      err ? reject(err) : resolve();
    });
  });
};

userSchema.statics.updateUserById = function (userinfo) {
  return new Promise(function (resolve, reject) {
    if (!_.isObject(userinfo)) {
      return reject(new TypeError('User is not a valid object.'));
    }
    userinfo.save(function (err, saved) {
      err ? reject(err) : resolve(saved);
    });
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;

//# sourceMappingURL=user-dao-compiled.script.map
