//Long

"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const KSpaceSchema = require('./KSpace-model');
const _ = require('lodash');

//function get all front.KSpace dao
KSpaceSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        KSpace
            .find(_query)
            .exec((err, KSpaces) => {
                err ? reject(err)
                    : resolve(KSpaces);
            });
    });

};
KSpaceSchema.statics.getKspaceProfile = (name) => {
    return new Promise((resolve, reject) => {
        let _query = {
            $or:[
                {'learners':name},
                {'lecturer':name}
            ]
        };

        KSpace
            .find(_query)
            .select('-boards -chatlog')
            .exec((err, KSpaces) => {
                err ? reject(err)
                    : resolve(KSpaces);
            });
    });

};

KSpaceSchema.statics.getKspaceByRId = (rid) => {
    return new Promise((resolve,reject) => {
        KSpace
            .findOne({"requestId":rid})
            .exec((err, KSpace) => {
                err ? reject(err)
                    : resolve(KSpace);
            });
    });
}

//function get front.KSpace by ID  dao
KSpaceSchema.statics.getKSpaceById = (id) => {

    return new Promise((resolve, reject) => {
        KSpace
            .findById(id)
            .exec((err, KSpace) => {
                err ? reject(err)
                    : resolve(KSpace);
            });
    });
};

//function create new front.KSpace dao
KSpaceSchema.statics.createNew = (kspace) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(KSpace)) {
            return reject(new TypeError('KSpace is not a valid object.'));
        }
        let _KSpace = new KSpace(kspace);
        _KSpace.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
};

//function update front.KSpace dao
KSpaceSchema.statics.updateKSpaceById = (KSpaceinfo) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(KSpaceinfo)) {
            return reject(new TypeError('KSpace is not a valid object.'));
        }
        KSpaceinfo.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
};

const KSpace = mongoose.model('KSpace', KSpaceSchema);
module.exports = KSpace;

