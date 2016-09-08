/**
 * Created by GiangDH on 8/25/16.
 */
"use strict";
const mongoose = require('mongoose');
const PublicKspaceSchema = require('./public-model');

PublicKspaceSchema.statics.createNew = (kspace) => {
  return new Promise((resolve,reject) => {
    let _PKspace = new PKspace(kspace);
    _PKspace.save((err,saved) => {
      err ? reject(err) : resolve (saved);
    });
  });
};

PublicKspaceSchema.statics.getById = (id) => {
  return new Promise((resolve, reject) => {
    PKspace.findById(id)
           .exec((err,kspace) => {
              err ? reject(err) : resolve(kspace);
            })
  })
};

PublicKspaceSchema.statics.updatePKspace = (kspace) => {
  return new Promise((resolve, reject) => {
    kspace.save((err,saved) => {
      err ? reject(err) : resolve (saved);
    });
  });
};

const PKspace = mongoose.model('PKspace', PublicKspaceSchema);
module.exports = PKspace;
