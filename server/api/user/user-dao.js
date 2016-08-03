"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const userSchema = require('./user-model');
const passport = require('passport');
const _ = require('lodash');
var relationship = require("mongoose-relationship");

//Send Json
var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

userSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        User
            .find(_query)
            .exec((err, user) => {
                err ? reject(err)
                    : resolve(user);
            });
    });

}

userSchema.statics.getUserById = (id) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('ID is not a String.'));
        }
        User
            .findById(id)
            .select("-username -password -email -role -salt")
            .exec((err, user) => {
                err ? reject(err)
                    : resolve(user);
            });
    });
}


userSchema.statics.getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(email)) {
            return reject(new TypeError('Not valid email.'));
        }
        User.findOne({'email': email})
            .exec((err, user) => {
                err ? reject(err) : resolve(user);
            });
    });
}

// get user by username
userSchema.statics.getUserByUserName = (username) => {
    return new Promise((resolve, reject) => {
        User.findOne({'username': username})
            .select("-username -password -email -role -salt")
            .exec((err, user) => {
                err ? reject(err) : resolve(user);
            });
    });
}

userSchema.statics.checkUserExist = (user) => {
    return new Promise((resolve, reject) => {

        User.count({'username': user})
            .exec((err, count) => {
                err ? reject(err) : resolve(count);
            });
    });
}

userSchema.statics.createNew = (user) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(user)) {
            return reject(new TypeError('User is not a valid object.'));
        }

        let _user = new User(user);

        _user.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
}

userSchema.statics.removeById = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }

        User
            .findByIdAndRemove(id)
            .exec((err, deleted) => {
                err ? reject(err)
                    : resolve();
            });
    });
}

userSchema.statics.updateUserById = (userinfo) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(userinfo)) {
            return reject(new TypeError('User is not a valid object.'));
        }
        userinfo.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
}

userSchema.statics.updateUser = (userinfo) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(userinfo)) {
            return reject(new TypeError('User is not a valid object.'));
        }
        User
            .update(
                {'username': userinfo.username},
                {'linkImg': userinfo.linkImg})
            .exec((err, deleted) => {
                err ? reject(err)
                    : resolve();
            });
    });
}

userSchema.plugin(relationship, {relationshipPathName: 'ownKnowledgeIds'});
const User = mongoose.model('User', userSchema);
module.exports = User;
