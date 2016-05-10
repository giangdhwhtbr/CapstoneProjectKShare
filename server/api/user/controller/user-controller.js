"use strict";
const mongoose = require('mongoose');
const userDAO = require('../dao/user-dao');
var usera = mongoose.model('user');
//Send Json
var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};
module.exports = class userController {
  static getAll(req, res) {
    userDAO
      .getAll()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    var currentDate = new Date();
    var user = {
      firstName : req.body.firstName,
      lastName  : req.body.lastName,
      displayName: req.body.displayName,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      role: req.body.role,
      createdAt:currentDate,
      updatedAt:currentDate
    }
    //let _user = req.body;
    userDAO
      .createNew(user)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));

  }

  static updateUser(req, res){
    if(req.params && req.params.id) {
      var currentDate = new Date();
        userDAO.getUserById(req.params.id)
          .then(user => {
            user.firstName = req.body.firstName,
            user.lastName  = req.body.lastName,
            user.displayName = req.body.displayName,
            user.username = req.body.username,
            user.password = req.body.password,
            user.email = req.body.email,
            user.role     = req.body.role,
            user.updatedAt = currentDate;

            //res.status(200).json(user);
            userDAO.updateUserById(user)
              .then(user => res.status(200).json(user))
              .catch(error => res.status(400).json(error));
          })
          .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Userid in request"
      });
    }
  }

  static removeById(req, res) {
    let _id = req.params.id;

    userDAO
      .removeById(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
