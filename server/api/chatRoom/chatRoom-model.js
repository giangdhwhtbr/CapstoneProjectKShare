"use strict";

const mongoose = require('mongoose');

const _chatRoomSchema = {
    chatlogs:[
      {
        createdAt:{
          type: Date
        },
        createdUser:{
          type: String
        },
        message: {
          type: String
        }
      }
    ],
    users : [{
      username:{
        type: String,
        ref: 'User'
      }
    }],
    createdAt: {
        type: Date, default: Date.now
    }
};

module.exports = mongoose.Schema(_chatRoomSchema);


