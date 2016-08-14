"use strict";

const ChatRoomDAO = require('./chatRoom-dao');

module.exports = class ChatRoomController {
  static getAllChatRoomOfUser(req, res) {
      if(req.params && req.params.user){
        ChatRoomDAO
          .getAllChatRoomOfUser(req.params.user)
          .then(chatRooms => res.status(200).json(chatRooms))
          .catch(error => res.status(400).json(error));
      }
  }

  static getChatRoomByUser(data) {
      return ChatRoomDAO.getChatRoomByUsers(data)
      .then(chatRoom => {return chatRoom})
      .catch(error => {return error});
  }

  static createChatRoom(data) {
      var chatRoom = {
        chatLogs: [],
        users: [data.sender, data.receiver],
        createdAt: new Date()
      };
      return ChatRoomDAO
        .createChatRoom(chatRoom)
        .then(chatRoom => {return chatRoom})
        .catch(error => {return error});
  }

 static updateChatRoom(data){
     var users = {
       user1: data.sender,
       user2: data.receiver
     };
     var chatLog = {
         sender: data.sender,
         message: data.message,
         sentAt: new Date()
     };
    return ChatRoomDAO.getChatRoomByUsers(users)
      .then(chatRoom => {
        chatRoom.chatLogs.push(chatLog);
        return ChatRoomDAO.updateChatRoom(chatRoom)
          .then(chatRoom => {return chatRoom})
          .catch(error => {return error});
      })
      .catch(error => {return error});

    };
};
