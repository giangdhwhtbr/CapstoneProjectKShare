/**
 * Created by Duc Duong on 7/17/2016.
 */
"use strict";
const mongoose = require('mongoose');
const Promise = require('bluebird');
const tagSchema = require('./tag-model');
const _ = require('lodash');

tagSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Tag
            .find(_query)
            .exec((err, tags) => {
                err ? reject(err)
                    : resolve(tags);
            });
    });
}

tagSchema.statics.createTag = (tag) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(tag))
            return reject(new TypeError('tag is not a valid object.'));

        let _tag = new Tag(tag);

        Tag
            .find({"name": _tag.name}).exec((err, tagFound) => {
            if (tagFound.length != 0) {
                console.log(tagFound);
                err ? reject(err) : resolve(tagFound);
            } else {
                _tag.save((err, saved) => {
                    err ? reject(err)
                        : resolve(saved);
                });
            }
        });


    });
}

tagSchema.statics.createArrayTag = (arrTagName) => {
    return new Promise((resolve, reject) => {
        var arr = [];
        arrTagName.map((e, i)=> {
            let tag = new Tag({"name": e});
            arr.push(tag);
        });
        var arrId = [];
        arr.map((e, i)=> {
            e.save((err, saved)=> {
                if (err) reject(err);
            });
            arrId.push(e._id);
        });
        resolve(arr);
    });
}

tagSchema.statics.getTagById = (id) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('ID is not a String.'));
        }
        Tag
            .findById(id)
            .exec((err, tag) => {
                err ? reject(err)
                    : resolve(tag);
            });
    });
}
tagSchema.statics.getTagByIds = (ids) => {

    return new Promise((resolve, reject) => {
        Tag
            .find({
                '_id': {$in: ids}
            })
            .exec((err, tags) => {
                err ? reject(err)
                    : resolve(tags);
            });
    });
}


tagSchema.statics.getTagsByArtId = (id) => {
    return new Promise((resolve, reject)=> {
        Tag
            .find({'articles': id})
            .exec((err, tag) => {
                err ? reject(err)
                    : resolve(tags);
            });
    });
}

tagSchema.statics.updateTag = (tag) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(tag)) {
            return reject(new TypeError('article is not a valid object.'));
        }
        Tag.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
}

tagSchema.statics.deactivateTagById = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Tag
            .findById(id)
            .exec((err, tag) => {

                if (err) {
                    reject(err)
                } else {
                    tag.status = false;
                    tag.save();
                    resolve();
                }
            });
    });
}


const Tag = mongoose.model('Tag', tagSchema);


module.exports = Tag;
