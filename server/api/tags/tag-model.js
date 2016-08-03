/**
 * Created by Duc Duong on 7/17/2016.
 */
"use strict";

const mongoose = require('mongoose');

const tagSchema = {
  name: {type: String, required: true, trim: true ,unique:true},
  articles:  [{ type:mongoose.Schema.Types.ObjectId, ref:"Article"}],
  request:  [{ type:mongoose.Schema.Types.ObjectId, ref:"Request"}],
  users:  [{ type:mongoose.Schema.Types.ObjectId, ref:"User"}],
  status: {type: Boolean, required: true, default: true}
}

module.exports = mongoose.Schema(tagSchema);
