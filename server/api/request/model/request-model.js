"use strict";

const mongoose = require('mongoose');

const _requestSchema = {
    userId: { type: String },
    title: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now },
    description: { type: String, required: true, trim: true },
    status: { type: String, default: 'pending' },
    modifiedDate: { type: Date },
    knowledgeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Knowledge',required: true }
}


module.exports = mongoose.Schema(_requestSchema);
