"use strict";

const ChatRoomController = require('./chatRoom-controller');

module.exports = class ChatRoomRoutes {
    static init(router) {
      router
        .route('/api/chat-rooms/:user')
        .get(ChatRoomController.getAllChatRoomOfUser);
    }
}
