"use strict";

const mongoose = require('mongoose');

const _reportSchema = {
    user: { 
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    link: { 
        type:String, 
        required: true 
    },
    content: { 
        type: String,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
    status: { 
        type:String, 
        default:'pending' 
    }
}

module.exports = mongoose.Schema(_reportSchema);
