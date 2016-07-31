"use strict";
const passport = require('passport');
const userDAO = require('./user-dao');
const crypto = require('crypto');
const transporter = require('./config/nodemailer');
const mailOptions = require('./config/mail-templates');
//Send Json
var sendJsonResponse = function (res, status, content) {
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

  static getUserById(req, res) {
    if (req.params && req.params.id) {
      userDAO
        .getUserById(req.params.id)
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No Userid in templates"
      });
    }
  }

  //get User informations by username
  static getUserByUserName(req, res) {
    userDAO
      .getUserByUserName(req.body.username)
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json(error));

  }

  static checkUserExist(req, res) {
    userDAO
      .checkUserExist(req.params.username)
      .then(count => res.status(200).json(count))
      .catch(error => res.status(400).json(error));

  }

  static updateUserPicture(req, res) {
    userDAO
      .getUserByUserName(req.body.username)
      .then(user => {
        user.linkImg = req.body.linkImg;
        console.log(user);
        userDAO.updateUser(user)
            .then(user => res.status(200).json(user))
            .catch(error => res.status(400).json(error));
      })
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    var currentDate = new Date();
    var user = {
      fullName: req.body.fullName,
      displayName: req.body.displayName,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      birthday: req.body.birthday,
      role: req.body.role,
      ownKnowledgeId: req.body.ownKnowledgeId,
      interestedKnowledgeId: req.body.interestedKnowledgeId,
      onlineTime: req.body.onlineTime,
      level: 1,
      rateAve: 0,
      status: true
    }
    if (!req.body.role) {
      user.role = "normal"
    }
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

              user.fullName               = req.body.fullName;
              user.displayName            = req.body.displayName;
              user.phone                  = req.body.phone;
              user.ownKnowledgeId         = req.body.ownKnowledgeId;
              user.interestedKnowledgeId  = req.body.interestedKnowledgeId;
              user.status                 = req.body.status;
              user.updatedAt              = currentDate;

            userDAO.updateUserById(user)
              .then( user                => res.status(200).json(user))
              .catch( error              => res.status(400).json(error));
          })
          .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message": "User Id is not valid"
      });
    }
  }

  static banUser(req,res) {
    if(req.params && req.params.id) {
      var currentDate = new Date();
      userDAO.getUserById(req.params.id)
        .then(user => {
          user.status = {
            admin: req.admin,
            time: '86400000',
            bannedAt: currentDate,
            banStatus: true
          }
          userDAO.updateUserById(user)
            .then( user                => res.status(200).json(user))
            .catch( error              => res.status(400).json(error));
        })
        .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message": "User Id is not valid"
      });
    }
  }

  static resetPassword(req, res) {
    if (req.params && req.params.email) {
      var currentDate = new Date();
      userDAO.getUserByEmail(req.params.email)
        .then(user => {
          user.resetPasswordToken = crypto.randomBytes(16).toString('base64');
          user.resetPasswordExpires = currentDate + 1;

          transporter.sendMail(mailOptions(user.email, user.username, user.resetPasswordToken).resetPass, function (errors, info) {
            if (errors) {
              res.status(400).json(errors);
            }
            res.status(200).json(info);
          });
        })
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
