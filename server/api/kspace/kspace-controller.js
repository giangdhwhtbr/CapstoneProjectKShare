//long

"use strict";
const KSpaceDAO = require('./kspace-dao');
const PKSpaceDAO = require('./public-dao');
const UserDAO = require('../user/user-dao');
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
      KSpaceDAO.getKspaceProfile(req.params.name).then((kspaces) => {
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

  static getKSpaceByRId(req, res) {
    if (req.params && req.params.rid) {
      KSpaceDAO
        .getKspaceByRId(req.params.rid)
        .then(KSpace => res.status(200).json(KSpace))
        .catch(error => res.status(400).json(error));
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

  static createPublicKspace(req, res) {
    var name = req.body.name;
    var kspace = {
      users: []
    };
    kspace.users.push(name);
    PKSpaceDAO.createNew(kspace)
      .then(kspace => res.status(200).json({ success: true, id: kspace._id }))
      .catch(err => res.status(400).json({ success: false }));
  }

  static checkExist(req, res) {
    if (req.params && req.params.id) {
      PKSpaceDAO.getById(req.params.id)
        .then(kspace => res.status(200).json({ exist: true }))
        .catch(err => res.status(400).json({ exist: false }))
    }
  }

  static updateChatLogs(data) {

    var log = {
      createdAt: this.currentDate,
      createdUser: data.createdUser,
      message: data.message,
      dataURL: data.dataURL
    };


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
      name: data.name,
      description: data.des,
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
    var content = req.body.content;
    var rate = req.body.rate;
    if (req.params && req.params.id) {
      // Get KSpace to update
      KSpaceDAO.getKSpaceById(req.params.id)
        .then(kspace => {
          //check if user hase review the kspace
          function hasReviewed() {
            for (var k in kspace.reviews) {
              if (kspace.reviews[k].createdUser === username) {
                return true;
              }
            }
            return false;
          }
          //check if user is kspace leaners
          function isLearner() {
            for (var learner of kspace.learners) {
              if (username === learner) {
                return true;
              } else {
                return false;
              }
            }
          }
          //review successfull conditions
          if (isLearner()) {
            if (!hasReviewed()) {
              var _review = {
                createdAt: currentDate,
                createdUser: username,
                content: content,
                rate: rate
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
                          if (rate.kspaceId === kspace._id) {
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
          } else {
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

};
