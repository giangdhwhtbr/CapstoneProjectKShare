//Long

"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const kSpaceSchema = require('./kspace-model');
const _ = require('lodash');

//function get all front.kspace dao
kSpaceSchema.statics.getAll = () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    KSpace
      .find(_query)
      .exec((err, kspaces) => {
        err ? reject(err)
          : resolve(kspaces);
      });
  });

}

//function get front.kspace by ID  dao
kSpaceSchema.statics.getKSpaceById = (id) => {

  return new Promise((resolve, reject) => {
    if(!_.isString(id)){
      return reject(new TypeError('ID is not a String.'));
    }

    KSpace
      .findById(id)
      .exec((err, kspace) => {
        err ? reject(err)
          : resolve(kspace);
      });
  });
}

//function create new front.kspace dao
kSpaceSchema.statics.createNew = (kspace) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(kspace)) {
      return reject(new TypeError('KSpace is not a valid object.'));
    }

    let _kspace = new KSpace(kspace);

    _kspace.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

//function delete front.kspace dao
kSpaceSchema.statics.removeById = (id) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(id)) {
      return reject(new TypeError('Id is not a valid string.'));
    }

    KSpace
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
}

//function update front.kspace dao
kSpaceSchema.statics.updateKSpaceById = (kspaceinfo) => {
  return new Promise((resolve,reject) => {
    if (!_.isObject(kspaceinfo)) {
      return reject(new TypeError('KSpace is not a valid object.'));
    }
    kspaceinfo.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

const KSpace = mongoose.model('KSpace', kSpaceSchema);
module.exports = KSpace;
