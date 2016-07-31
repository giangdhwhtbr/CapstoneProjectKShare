"use strict";

const mongoose = require('mongoose');

const knowledgeSchema = {
    name: {type: String, required: true, trim: true , unique:true},
    description: {type: String, required: true, trim: true},
    update: {type: Date, default: Date.now},
    parent: {type: mongoose.Schema.Types.ObjectId,ref:'Knowledge'},
    articles:  [{ type:mongoose.Schema.Types.ObjectId, ref:"Article"}]
}

module.exports = mongoose.Schema(knowledgeSchema);
