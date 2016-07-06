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

friendshipSchema.statics.deleteFriendShip = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        FriendShip
          .findByIdAndRemove(id)
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
