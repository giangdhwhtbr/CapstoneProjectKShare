"use strict";
const passport = require('passport');
const userDAO = require('./user-dao');
const crypto = require('crypto');
const transporter = require('./config/nodemailer');
const mailOptions = require('./config/mail-templates');
const TagDAO = require('../tags/tag-dao');
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

    static createNew(req, res) {
        var user = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            role: req.body.role,
            rateAve: 0
        };
        if (!req.body.role) {
            user.role = "normal";
        }
        userDAO
            .createNew(user)
            .then((user) => {
                res.status(200).json(user);
            })
            .catch(error => res.status(400).json(error));
    }

    static updateUser(req, res) {
        if (req.params && req.params.id) {
            var currentDate = new Date();
            let _data = req.body;


            userDAO.getUserById(req.params.id)
                .then(user => {

                    user.fullName = _data.user.fullName;
                    user.displayName = _data.user.displayName;
                    user.phone = _data.user.phone;
                    //user.interestedKnowledgeId = req.body.interestedKnowledgeId;
                    user.status = _data.user.status;
                    user.updatedAt = currentDate;
                    user.ownKnowledgeIds= _data.user.ownKnowledgeIds;
                    user.linkImg = _data.user.linkImg;

                    userDAO.updateUserById(user)
                        .then((user) => {
                            TagDAO.createArrayTag(_data.newTag).then((tags)=> {

                                tags.map((e, i)=> {
                                    user.ownKnowledgeIds.push(e);
                                });
                                user.save();

                                res.status(200).json(user);
                            }).catch((error)=>res.status(400).json(error));
                        })
                        .catch(error=> res.status(400).json(error));
                })
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "User Id is not valid"
            });
        }
    }

    static banUser(req, res) {
        if (req.params && req.params.id) {
            var currentDate = new Date();
            userDAO.getUserById(req.params.id)
                .then(user => {
                    user.banStatus = {
                        admin: req.admin,
                        time: '86400000',
                        bannedAt: currentDate,
                        status: true
                    };
                    userDAO.updateUserById(user)
                        .then((user)=> {
                            res.status(200).json(user)
                        }).catch(error => res.status(400).json(error));
                }).catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "User Id is not valid"
            });
        }
    }

    static getUserByToken (req, res) {
      if(req.params && req.params.token){
        userDAO.getUserByToken(req.params.token)
          .then ((user) => {
            res.status(200).json(user);
          })
          .catch ((error) => {
            res.status(400).json(error);
          });
      }
    }

    static changePassword(req,res) {
        if(req.params && req.params.token){
          userDAO.getUserByToken(req.params.token)
            .then ((user) => {
              user.password = req.body.password;
              userDAO.updateUserById(user)
              .then((user)=> res.status(200).json({status: 'success'}))
              .catch((error) => res.status(400).json({status: 'failure'}));
            })
            .catch ((error) => {
              res.status(400).json(error);
            });
        }
    }

    static sendEmailResetPassword(req, res) {
        if (req.params && req.params.email) {
            var currentDate = new Date();
            userDAO.getUserByEmail(req.params.email)
            .then(user => {
                user.resetPasswordToken = crypto.randomBytes(16).toString('base64');
                user.sendTokenDate = currentDate;

                userDAO.updateUserById(user)
                .then((user) => {
                  transporter.sendMail(mailOptions(user.email, user.username, user.resetPasswordToken).resetPass, function (errors, info) {
                    if (errors) {
                      res.status(400).json({status: 'failed'});
                    }
                    res.status(200).json({status: 'success'});
                  });
                })
                .catch((err) => {
                  console.log(err);
                });

            }).catch(error => {
              res.status(400).json(error);
            });
        }else {
          res.status(404).json('There is no email');
        }
    }
};
