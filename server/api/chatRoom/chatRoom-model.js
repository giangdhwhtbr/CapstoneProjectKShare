"use strict";

const mongoose = require('mongoose');

const _chatRoomSchema = {
    chatLogs:[
      {
        sentAt:{
          type: Date
        },
        sender:{
          type: String
        },
        message: {
          type: String
        }
      }
    ],
    users : [{
        type: String,
        ref: 'User'
    }],
    createdAt: {
        type: Date, default: Date.now
    }
};

module.exports = mongoose.Schema(_chatRoomSchema);


