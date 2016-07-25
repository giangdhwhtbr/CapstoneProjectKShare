"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const friendshipSchema = require('./friendship-model');
const _ = require('lodash');

friendshipSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        FriendShip
          .find(_query)
          .exec((err, friendships) => {
              err ? reject(err)
                  : resolve(friendships);
          });
      });
}

friendshipSchema.statics.updateFriendship = (info) => {
  return new Promise((resolve, reject) => {
      console.log(info);
    info.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

friendshipSchema.statics.getFriendShipByRUserAndAUser = (rUser) => {

  return new Promise((resolve, reject) => {
    FriendShip
      .find({
        "user1": rUser
      })
      .exec((err, friendship) => {
        err ? reject(err)
          : resolve(friendship);
      });
  });
}

friendshipSchema.statics.createFriendShip = (friendship) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(friendship))
          return reject(new TypeError('Friendship is not a valid object.'));

      let _friendship = new FriendShip(friendship);
      _friendship.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

friendshipSchema.statics.deleteFriendShip = (requestUser, acceptUser) => {
    return new Promise((resolve, reject) => {

        FriendShip
          .remove({
              "user1": requestUser,
              "user2": acceptUser
          })
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
}

//get friendship by user who send friend request
friendshipSchema.statics.getFriendShipByUser = (user) => {
    return new Promise((resolve, reject) => {

        FriendShip
          .find({
              $or:[
                  {"user1": user},
                  {"user2": user}
              ]
          })
          .exec((err, friendships) => {
              err ? reject(err)
                  : resolve(friendships);
          });
      });
}

const FriendShip  = mongoose.model('FriendShip', friendshipSchema);

module.exports = FriendShip;
