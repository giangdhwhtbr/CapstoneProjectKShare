"use strict";

const mongoose = require('mongoose');

const _offerSchema = {
    userId: { type: String },
    requestId: { type: mongoose.Schema.Types.ObjectId, ref: 'Request',required: true },
    numOfLecture: { type: Number},
    price: {type: Number, required: true},
    createdAt: { type: Date, default: Date.now },
    message: { type: String, required: true, trim: true },
    modifiedDate: { type: Date }
}

module.exports = mongoose.Schema(_offerSchema);
