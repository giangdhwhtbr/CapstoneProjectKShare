"use strict";

const ChatRoomDAO = require('./chatRoom-dao');

module.exports = class ChatRoomController {
  static getAllChatRoomOfUser(req, res) {
    if (req.params && req.params.user) {
      ChatRoomDAO
        .getAllChatRoomOfUser(req.params.user)
        .then(chatRooms => res.status(200).json(chatRooms))
        .catch(error => res.status(400).json(error));
    }
  }

  static getChatRoomByUser(data) {
    return ChatRoomDAO.getChatRoomByUsers(data)
      .then(chatRoom => { return chatRoom })
      .catch(error => { return error });
  }

  static createChatRoom(data) {
    var chatRoom = {
      chatLogs: [],
      users: [{
        user: data.sender,
        newMessages: 0
      },
        {
          user: data.sender,
          newMessages: 0
        }],
      createdAt: new Date()
    };
    return ChatRoomDAO
      .createChatRoom(chatRoom)
      .then(chatRoom => { return chatRoom })
      .catch(error => { return error });
  }

  static updateChatRoom(data) {
    console.log(data);
    var users = {
      user1: data.sender,
      user2: data.receiver
    };
    var chatLog = {
      sender: data.sender,
      message: data.message,
      sentAt: new Date()
    };
    //  var isNewMessage = true;
    return ChatRoomDAO.getChatRoomByUsers(users)
      .then(chatRoom => {
        if (chatRoom.users[0].user === data.receiver) {
          chatRoom.users[0].newMessages = chatRoom.users[0].newMessages + 1;
        } else {
          chatRoom.users[1].newMessages = chatRoom.users[1].newMessages + 1;
        }

        chatRoom.chatLogs.push(chatLog);

        return ChatRoomDAO.updateChatRoom(chatRoom)
          .then(chatRoom => { return chatRoom })
          .catch(error => { return error });
      })
      .catch(error => { return error });

  };

  static ResetNewMessages(data) {
    console.log(data);
    var users = {
      user1: data.sender,
      user2: data.receiver
    };

    //  var isNewMessage = true;
    return ChatRoomDAO.getChatRoomByUsers(users)
      .then(chatRoom => {
        if (chatRoom.users[0].user === data.sender) {
          chatRoom.users[0].newMessages = 0;
        } else {
          chatRoom.users[1].newMessages = 0;
        }

        return ChatRoomDAO.updateChatRoom(chatRoom)
          .then(chatRoom => { return chatRoom })
          .catch(error => { return error });
      })
      .catch(error => { return error });

  };
};
