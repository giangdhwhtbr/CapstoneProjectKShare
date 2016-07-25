"use strict";

const FriendShipDAO = require('./friendship-dao');

module.exports = class FriendShipController {
  static getAll(req, res) {
    FriendShipDAO
      .getAll()
      .then(friendships => res.status(200).json(friendships))
      .catch(error => res.status(400).json(error));
  }

  static createFriendShip(req, res) {
    let _friendship = req.body;

    FriendShipDAO
      .createFriendShip(_friendship)
      .then(friendship => res.status(201).json(friendship))
      .catch(error => res.status(400).json(error));
  }

  static changeStatusFriendship(req, res) {
    if (req.params) {
      FriendShipDAO.getFriendShipByRUserAndAUser(req.params.user1)
        .then(friendship => {

          for (var i = 0; i < friendship.length; i++) {
            if (friendship[i].user2 === req.params.user2) {
              friendship[i].status = 'accepted';
              FriendShipDAO.updateFriendship(friendship[i])
                .then(friendship => res.status(200).json(friendship))
                .catch(error => res.status(400).json(error));
            }
          }
          
        })
        .catch(error => res.status(400).json(error));
    } else {
      res.status(404).json({
        "message": "No Friendship id in templates"
      });
    }
  }

  static deleteFriendShip(req, res) {
    let _requestUser = req.body.requestUser;
    let _acceptUser = req.body.acceptUser;

    FriendShipDAO
      .deleteFriendShip(_requestUser, _acceptUser)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

  static getFriendShipByUser(req, res) {
    let _user = req.body.user;

    FriendShipDAO
      .getFriendShipByUser(_user)
      .then(friendships => res.status(200).json(friendships))
      .catch(error => res.status(400).json(error));
  }

}
