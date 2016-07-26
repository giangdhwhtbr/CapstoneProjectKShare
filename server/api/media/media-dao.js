/**
 * Created by Duc Duong on 6/13/2016.
 */
"use strict";
const mongoose = require('mongoose');
const Promise = require('bluebird');
const mediaSchema = require('./media-model');
const _ = require('lodash');
var  fs = require('fs');



mediaSchema.statics.createMedia = () => {
  return new Promise((resolve, reject) => {
     resolve("ok");
  });
}


const Media  = mongoose.model('Media', mediaSchema);

module.exports = Media;
