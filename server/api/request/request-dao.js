"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const requestSchema = require('./request-model');
const _ = require('lodash');
var relationship = require("mongoose-relationship");

//get all back.request dao function
requestSchema.statics.getAll = (x) => {
    return new Promise((resolve, reject) => {

        Request
            .find({ status: { $nin: ['deactive', 'accepted'] } })
            .skip(x - 5)
            .limit(5)
            .exec((err, requests) => {
                err ? reject(err)
                    : resolve(requests);
            });
    });
}

//get all request by tags dao function
requestSchema.statics.getRequestsByTagsOfUser = (userTags, x) => {
    return new Promise((resolve, reject) => {
        Request
            .find({
                $and: [
                    { status: { $nin: ['deactive', 'accepted'] } },
                    { tags: { $in: userTags } }
                ]
            })
            .skip(x - 5)
            .limit(5)
            .exec((err, requests) => {
                err ? reject(err)
                    : resolve(requests);
            });
    });
}

//get all request except tags dao function
requestSchema.statics.getRequestsExceptTagsOfUser = (userTags, x) => {
    return new Promise((resolve, reject) => {
        Request
            .find({
                $and: [
                    { status: { $nin: ['deactive', 'accepted'] } },
                    { tags: { $nin: userTags } }
                ]
            })
            .skip(x - 5)
            .limit(5)
            .exec((err, requests) => {
                err ? reject(err)
                    : resolve(requests);
            });
    });
}


requestSchema.statics.getReqByTagId = (idTag) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(idTag)) {
            return reject(new TypeError('ID is not a String.'));
        }

        Request
            .find({'tags': idTag})
            .exec((err, reqs) => {
                err ? reject(err)
                    : resolve(reqs);
            });
    });
}

//get all back.request dao function
requestSchema.statics.getAllRequestForAdmin = () => {
    return new Promise((resolve, reject) => {

        Request
            .find()
            .exec((err, requests) => {
                err ? reject(err)
                    : resolve(requests);
            });
    });
}

//get back.request by id dao function
requestSchema.statics.getRequestById = (id) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
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

//full text search function index by title and description
requestSchema.statics.fullTextSearchRequest = (text) => {

    return new Promise((resolve, reject) => {

        Request
            .find({
                status: { $nin: ['deactive', 'accepted'] },
                '$text': { '$search': text }
            },
            { score: { $meta: "textScore" } }
            ).sort({ score: { $meta: "textScore" } })
            .exec((err, requests) => {
                err ? reject(err)
                    : resolve(requests);
            });

    });
}

//get requets by back.knowledge id dao function
requestSchema.statics.getRequestByKnowledgeId = (id) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('ID is not a String.'));
        }
        Request
            .find({
                status: { $nin: ['deactive', 'accepted'] },
                'knowledgeId': id
            }).sort({'updatedAt':-1})
            .exec((err, requests) => {
                err ? reject(err)
                    : resolve(requests);
            });
    });
}

//get requets by user dao function
requestSchema.statics.getRequestByUser = (user, x) => {

    return new Promise((resolve, reject) => {
        Request
            .find({
                'user': user,
                'status': {
                    $ne: "deactive"
                }
            })
            .skip(x-5)
            .limit(5)
            .sort({"updatedAt":-1})
            .exec((err, requests) => {
                err ? reject(err)
                    : resolve(requests);
            });
    });
}

//create back.request dao function
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
};

//update back.request dao function
requestSchema.statics.updateRequestById = (requestinfo) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(requestinfo)) {
            return reject(new TypeError('Request is not a valid object.'));
        }

        requestinfo.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
}

requestSchema.statics.getAPage = (start, stt) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(start)) {
            return reject(new TypeError('start page is not a String.'));
        }
        Request
            .find({ "status": stt })
            .skip(start)
            .limit(10)
            .exec((err, reqs) => {
                if(err) {
                    reject(err);
                }
                resolve(reqs);
            });
    });
}

requestSchema.statics.getTot = (stt) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(stt)) {
            return reject(new TypeError('status page is not a String.'));
        }
        Request
            .find({ "status": stt })
            .exec((err, reqs) => {
                if(err) {
                    reject(err);
                }
                resolve(reqs.length);
            });
    });
}

requestSchema.plugin(relationship, { relationshipPathName: 'tags' });

const Request = mongoose.model('Request', requestSchema);

module.exports = Request;
