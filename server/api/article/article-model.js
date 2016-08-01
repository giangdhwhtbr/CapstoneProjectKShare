/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const mongoose = require('mongoose');
var relationship = require("mongoose-relationship");

const articleSchema = {
    ofUser: {type:String, required: true},
    title: {type: String, required: true, trim: true},
    content: {type: String, required: true, trim: true},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: "Tag", childPath: "articles"}],
    knowledge: [{type: mongoose.Schema.Types.ObjectId, ref: "Knowledge", childPath: "articles"}],
    createdAt: {type: Date, default: Date.now()},
    tagsFD: [],
    status: {type: String, required: true, default: 'public',enum: ['public', 'pending', 'private','deactivate']}
}


module.exports = mongoose.Schema(articleSchema);
