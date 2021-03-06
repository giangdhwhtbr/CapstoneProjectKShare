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

        tag.name = tag.name.toLowerCase();

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
        var deactivateArr = [];
        if(arrTagName.length>0){
            Tag.find({
                'name': {$in: arrTagName}
            }).exec((err, tagFound) => {
                if (err) reject(err);

                for (let i = arrTagName.length - 1; i >= 0; i--) {
                    for (let e of tagFound) {
                        if (e.name === arrTagName[i] && e.status == false) {
                            deactivateArr.push(e.name);
                            arrTagName.splice(i, 1);
                            break;
                        }
                    }
                }

                //if array new tags have deactive tag , return deactivate array
                if(deactivateArr.length!=0){
                    reject({"arrDe":deactivateArr});
                }else{
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
                }


            });
        }
        if(arrTagName.length==0){
            resolve(arr);
        }


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
tagSchema.statics.activeTag = (id) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('ID is not a String.'));
        }
        Tag
            .findById(id)
            .exec((err, tag) => {
                if (err) {
                    reject(err)
                }
                tag.status=true;
                tag.save();
                resolve(tag);
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

tagSchema.statics.getAPage = (start,stt) => {

    return new Promise((resolve, reject) => {
        let sttTag = Boolean(stt=="true");
        Tag
            .find({"status":sttTag})
            .skip(start)
            .limit(10)
            .exec((err, tags) => {
                err ? reject(err)
                    : resolve(tags);
            });
    });
}
tagSchema.statics.getTot = (stt) => {

    return new Promise((resolve, reject) => {
        let sttTag = Boolean(stt=="true");
        Tag
            .find({"status":sttTag})
            .exec((err, tags) => {
                err ? reject(err)
                    : resolve(tags.length);
            });
    });
}


const Tag = mongoose.model('Tag', tagSchema);


module.exports = Tag;
