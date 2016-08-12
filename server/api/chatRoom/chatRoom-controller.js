"use strict";

const ChatRoomDAO = require('./chatRoom-dao');

module.exports = class ChatRoomController {
  static getAll(req, res) {
      ChatRoomDAO
        .getAll()
        .then(chatRooms => res.status(200).json(chatRooms))
        .catch(error => res.status(400).json(error));
  }

  static createChatRoom(data) {
      var data = {
        sender: "Giang",
        receiver: "Duong",
        message: "Hello Cu"
      };

      var chatRoom = {
        chatLogs: [],
        users: [data.sender, data.receiver],
        createdAt: new Date()
      };
      var chatLog = {
        sender: data.sender,
        message: data.message,
        sentAt: new Date()
      };
      chatRoom.chatLogs.push(chatLog);
      return ChatRoomDAO
        .createChatRoom(chatRoom)
        .then(chatRoom => {return chatRoom})
        .catch(error => {return error});

      //result.then(chatRoom => {console.log(chatRoom)});
  }

 static updateChatRoom(data){
   var data = {
     room: "57add29d313d2a810275e306",
     sender: "Giang",
     receiver: "Duong",
     message: "Hello Ku"
   };

   var chatLog = {
       sender: data.sender,
       message: data.message,
       sentAt: new Date()
   };
    if(data.room) {
        return ChatRoomDAO.getChatRoomById(data.room)
          .then(chatRoom => {
            chatRoom.chatLogs.push(chatLog);
            return ChatRoomDAO.updateChatRoomById(chatRoom)
              .then(chatRoom => {return chatRoom})
              .catch(error => {return error});
          })
          .catch(error => {return error});
    }else{
      res.status(404).json({
        "message"    :   "No Chat Room id in front.offer"
      });
    }
  }

  static getChatRoomById(req,res) {
    if(req.params && req.params.id) {
      ChatRoomDAO
        .getChatRoomById(req.params.id)
        .then(chatRoom => res.status(200).json(chatRoom))
        .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No chatRoom id in templates"
      });
    }
  }

};
