/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const mongoose = require('mongoose');
var relationship = require("mongoose-relationship");

const articleSchema = {
  title: {type: String, required: true, trim: true},
  content: {type: String, required: true, trim: true},
  tags:  [{ type:mongoose.Schema.Types.ObjectId, ref:"Tag", childPath:"articles" }],
  createdAt: { type: Date, default:Date.now()},
  tagsFD : []
}


module.exports = mongoose.Schema(articleSchema);
