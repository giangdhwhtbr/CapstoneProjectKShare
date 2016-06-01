"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const requestSchema = require('../model/request-model');
const _ = require('lodash');

requestSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Request
          .find(_query)
          .exec((err, requests) => {
              err ? reject(err)
                  : resolve(requests);
          });
      });
}

requestSchema.statics.getRequestById = (id) => {

  return new Promise((resolve, reject) => {
    if(!_.isString(id)){
      return reject(new TypeError('ID is not a String.'));
    }
    Request
      .findById(id)
      .exec((err, request) => {
        err ? reject(err)
          : resolve(request);
      });
  });
}

requestSchema.statics.getRequestByKnowledgeId = (id) => {

  return new Promise((resolve, reject) => {
    if(!_.isString(id)){
      return reject(new TypeError('ID is not a String.'));
    }
    Request
      .find({
        'knowledgeId': id
      })
      .exec((err, requests) => {
        err ? reject(err)
          : resolve(requests);
      });
  });
}

requestSchema.statics.createRequest = (request) => {
    return new Promise((resolve, reject) => {
      if (!_.isObject(request))
          return reject(new TypeError('Request is not a valid object.'));

      let _request = new Request(request);

      _request.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
}

requestSchema.statics.deleteRequest = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Request
          .findByIdAndRemove(id)
          .exec((err, deleted) => {
              err ? reject(err)
                  : resolve();
          });
    });
}

requestSchema.statics.updateRequestById = (requestinfo) => {
  return new Promise((resolve,reject) => {
    if (!_.isObject(requestinfo)) {
      return reject(new TypeError('Request is not a valid object.'));
    }
    //let _user = new User(userinfo);
    // res.status(200).json(requestinfo);
    requestinfo.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
}

const Request  = mongoose.model('Request', requestSchema);

module.exports = Request;
