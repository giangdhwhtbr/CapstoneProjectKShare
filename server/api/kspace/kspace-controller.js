//long

"use strict";
const mongoose = require('mongoose');
const KSpaceDAO = require('./KSpace-dao');
const UserDAO = require('../user/user-dao');
const Promise = require('bluebird');
module.exports = class KSpaceController {
  //get all KSpaces controller
  static getAll(req, res) {
    KSpaceDAO
      .getAll()
      .then(KSpaces => res.status(200).json(KSpaces))
      .catch(error => res.status(400).json(error));
  }

  static getKspaceProfile(req, res) {
    if (req.params && req.params.name) {
      KSpaceDAO.getKspaceProfile(req.params.name).then((kspaces)=> {
        res.status(200).json(kspaces)
      }).catch(error => res.status(400).json(error));
    }
  }

  //get a front.KSpace by Id controller
  static getKSpaceById(req, res) {
    if (req.params && req.params.id) {
      KSpaceDAO
        .getKSpaceById(req.params.id)
        .then(KSpace => res.status(200).json(KSpace))
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No KSpace ID in templates"
      });
    }
  }

  //create a new front.KSpace controller
  static createNew(req, res) {
    var currentDate = new Date();
    var kspace = {
      lecturer: req.body.lecturer,
      learners: req.body.learners,
      requestId: req.body.requestId,
      requestTitle: req.body.requestTitle,
      offerId: req.body.offerId,
      createdAt: currentDate,
      tags: req.body.tags
    };
    KSpaceDAO
      .createNew(kspace)
      .then(KSpace => res.status(200).json(KSpace))
      .catch(error => {
        console.log(error);
        res.status(400).json(error)
      });
  }

  static updateChatLogs(data) {

    var log = {
      createdAt: this.currentDate,
      createdUser: data.createdUser,
      message: data.message,
      dataURL: data.dataURL
    }


    return KSpaceDAO.getKSpaceById(data.id)
      .then(kspace => {
        kspace.chatlog.push(log);
        return KSpaceDAO.updateKSpaceById(kspace)
          .then(kspace => {
            return kspace
          })
          .catch(error => {
            return error
          });
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error)
      });
  }

  static updateBoards(data) {
    var board = {
      boardNumber: data.boardNumber,
      boardJson: data.json,
      dataURL: data.dataURL,
      createdAt: new Date()
    };
    return KSpaceDAO.getKSpaceById(data.room)
      .then(kspace => {
        kspace.boards.push(board);
        return KSpaceDAO.updateKSpaceById(kspace)
          .then(kspace => {
            return kspace
          })
          .catch(error => {
            return error
          });
      })
      .catch(error => {
        console.log(error);
        res.status(400).json(error)
      });
  }

  // User review a kSpace and rate for it
  static createReview(req, res) {
    var currentDate = new Date();
    var username = req.body.createdUser;
    if (req.params && req.params.id) {
      // Get KSpace to update
      KSpaceDAO.getKSpaceById(req.params.id)
        .then(kspace => {
          function hasReviewed() {
            for (var k in kspace.reviews) {
              if (kspace.reviews[k].createdUser === username) {
                return true;
              }
            }
            return false;
          }
          function  isLearner() {
            for (var learner of kspace.learners){
              if(username === learner){
                return true;
              } else {
                return false;
              }
            }
          }
          if(isLearner()){
            if (!hasReviewed()) {
              var _review = {
                createdAt: currentDate,
                createdUser: username,
                content: req.body.content,
                rate: req.body.rate
              };

              if (kspace.reviews.length) {
                var sumR = 0;
                for (var k of kspace.reviews) {
                  sumR += k.rate;
                }
                kspace.rateAve = sumR / kspace.reviews.length;
              } else {
                kspace.rateAve = req.body.rate;
              }
              kspace.reviews.push(_review);
              // Update KSpace
              KSpaceDAO.updateKSpaceById(kspace)
                .then(kspace => {
                  // Need to update User's rating -> Find user by username
                  UserDAO.getUserByUserName(kspace.lecturer)
                    .then(user => {
                      var newRate = {
                        kspaceId: kspace._id,
                        ratePoint: kspace.rateAve
                      };
                      user.rates.push(newRate);
                      if (user.rates.length) {
                        var sum = 0;
                        for (var rate of user.rates) {
                          if(rate.kspaceId === kspace._id){
                            rate.ratePoint = kspace.rateAve;
                          }
                          sum += rate.ratePoint;
                        }
                        user.rateAve = sum / user.rates.length;
                      } else {
                        user.rateAve = kspace.rateAve;
                      }
                      // Update User 's Rate
                      UserDAO.updateUserById(user)
                        .then(user => res.status(200).json(kspace.reviews))
                        .catch(error => {
                          res.status(400).json(error);
                        });
                    }).catch(error => {
                    res.status(400).json(error);
                  });
                })
                .catch(error => {
                  res.status(400).json(error);
                });
            } else {
              res.status(400).json({
                message: 'Bạn đã đánh giá kspace này rồi, nếu muốn thay đổi thông tin, hãy click vào' +
                ' nút cập nhật '
              });
            }
          }else {
            res.status(400).json({
              message: 'Xin lỗi bạn không có quyền đánh giá kspace này'
            });
          }
        }).catch(error => {
        res.status(400).json(error);
      });
    } else {
      res.status(404).json({
        "message": "No KSpace ID"
      });
    }
  }


  //finish a front.KSpace by ID controller (update finishedAt of a front.KSpace)
  static finishKSpace(req, res) {
    var currentDate = new Date();

    if (req.params && req.params.id) {
      KSpaceDAO.getKSpaceById(req.params.id)
        .then(KSpace => {
          KSpace.finishedAt = currentDate;

          KSpaceDAO.updateKSpaceById(KSpace)
            .then(KSpace => res.status(200).json(KSpace))
            .catch(error => res.status(400).json(error));
        })
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No KSpace ID"
      });
    }
  }

}
