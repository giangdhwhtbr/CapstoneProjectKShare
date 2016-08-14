"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const chatRoomSchema = require('./chatRoom-model');
const _ = require('lodash');

chatRoomSchema.statics.getAllChatRoomOfUser = (user) => {
    return new Promise((resolve, reject) => {
        let _query = {"users":user};
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

        let _query = {$or: [
          {"users.0":data.user1, "users.1":data.user2},
          {"users.0":data.user2, "users.1":data.user1}
        ]}
        ChatRoom
            .findOne(_query)
            .exec((err, chatRoom) => {
                err ? reject(err)
                    : resolve(chatRoom);
            });
    });
}

chatRoomSchema.statics.createChatRoom = (chatRoom) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(chatRoom))
          return reject(new TypeError('ChatRoom is not a valid object.'));

      let _chatRoom = new ChatRoom(chatRoom);
      _chatRoom.save((err, chatRoom) => {
        err ? reject(err)
            : resolve(chatRoom);
      });
    });
};

chatRoomSchema.statics.updateChatRoom = (chatRoom) => {
  return new Promise((resolve,reject) => {
    chatRoom.save((err, chatRoom) => {
      err ? reject(err)
        : resolve(chatRoom);
    });
  });
};

const ChatRoom  = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;
