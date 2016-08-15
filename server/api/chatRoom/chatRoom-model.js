"use strict";

const mongoose = require('mongoose');

const _chatRoomSchema = {
  chatLogs: [
    {
      sentAt: {
        type: Date
      },
      sender: {
        type: String
      },
      message: {
        type: String
      }
    }
  ],
  users: [
    {
      user: {
        type: String,
        ref: 'User'
      },
      newMessages: {
        type: Number,
        default: 0
      }
    }
  ],
  createdAt: {
    type: Date, default: Date.now
  },

};

module.exports = mongoose.Schema(_chatRoomSchema);


