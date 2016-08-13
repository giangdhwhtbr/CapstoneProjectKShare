"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const chatRoomSchema = require('./chatRoom-model');
const _ = require('lodash');

chatRoomSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        ChatRoom
          .find(_query)
          .exec((err, chatRooms) => {
              err ? reject(err)
                  : resolve(chatRooms);
          });
      });
};

chatRoomSchema.statics.getChatRoomByUsers = (data) => {
    return new Promise((resolve, reject) => {
        ChatRoom
            .findOne({$or: [
                {"users.0":data.user1, "users.1":data.user2},
                {"users.1":data.user2, "users.0":data.user1},
            ]})
            .exec((err, chatRoom) => {
                err ? reject(err)
                    : resolve(chatRoom);
            });
    });
}

chatRoomSchema.statics.getChatRoomById = (id) => {

  return new Promise((resolve, reject) => {
    ChatRoom
      .findById(id)
      .exec((err, chatRoom) => {
        err ? reject(err)
          : resolve(chatRoom);
      });
  });
};

chatRoomSchema.statics.createChatRoom = (chatRoom) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(chatRoom))
          return reject(new TypeError('ChatRoom is not a valid object.'));

      let _chatRoom = new ChatRoom(chatRoom);
      _chatRoom.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
};

chatRoomSchema.statics.updateChatRoomById = (info) => {
  return new Promise((resolve,reject) => {
    if (!_.isObject(info)) {
      return reject(new TypeError('ChatRoom is not a valid object.'));
    }

    info.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
};

const ChatRoom  = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;
