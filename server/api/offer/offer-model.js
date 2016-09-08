"use strict";

const mongoose = require('mongoose');

const _offerSchema = {
    user: { type: String, required: true },
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Request',required: true },
    createdAt: { type: Date, default: Date.now },
    message: { type: String, required: true, trim: true },
    updatedAt: { type: Date },
    status: { type:String, default:'pending' }
}

module.exports = mongoose.Schema(_offerSchema);
