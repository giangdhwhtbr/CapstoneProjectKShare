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

  static deleteFriendShip(req, res) {
    let _requestUser = req.body.requestUser;
    let _acceptUser = req.body.acceptUser;

    FriendShipDAO
      .deleteFriendShip(_requestUser,_acceptUser)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

  static getFriendShipByUser(req,res) {
    let _user = req.body.user;

    FriendShipDAO
      .getFriendShipByUser(_user)
      .then(friendships => res.status(200).json(friendships))
      .catch(error => res.status(400).json(error));
  }

}