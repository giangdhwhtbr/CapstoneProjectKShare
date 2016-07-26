/**
 * Created by Duc Duong on 7/17/2016.
 */
"use strict";

const mongoose = require('mongoose');

const tagSchema = {
  name: {type: String, required: true, trim: true},
  articles:  [{ type:mongoose.Schema.Types.ObjectId, ref:"Article"}]
}

module.exports = mongoose.Schema(tagSchema);
