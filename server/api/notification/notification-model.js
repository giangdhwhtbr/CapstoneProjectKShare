"use strict";

const mongoose = require('mongoose');

const _notificationSchema = {
    user: { 
        type: String,
        ref: 'User' 
    },
    createdAt: {
        type: Date, 
        default: Date.now
    },
    title: {
        type: String, 
        default: 'Notification title',
        required:true
    },
    incon: {
        type: String,
        default: 'https://goo.gl/3eqeiE'
    },
    status: {
        type: String,
        default: 'Chưa đọc'
    },
    link: {
        type: String,
        required:true
    } 
}

module.exports = mongoose.Schema(_notificationSchema);
