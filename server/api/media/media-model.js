/**
 * Created by Duc Duong on 6/13/2016.
 */
"use strict";
const mongoose = require('mongoose');

const _mediaSchema ={
  type:{type:String,require:true},
  url:{type:String,require:true},
  user:{type:String,required:true}
}

module.exports = mongoose.Schema(_mediaSchema);
