//long

"use strict";

const mongoose = require('mongoose');

const KSpaceSchema = new mongoose.Schema({
  lecturer: {
    type: String,
    ref: 'User',
    required: true
  },
  learner: {
    type: String,
    ref: 'User',
    required: true
  },
  chatlog:[ 
    {
      createdAt:{
        type: Date
      },
      createdUser:{
        type: String
      },
      message: {
        type: String
      },
      dataURL: {
        type: String
      }
    }
  ],
  requestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Request',
    required: true
  },
  requestTitle: {
    type: String,
    required: true
  },
  offerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offer',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  finishedAt: {
    type: Date,
  },

});

module.exports = KSpaceSchema;
