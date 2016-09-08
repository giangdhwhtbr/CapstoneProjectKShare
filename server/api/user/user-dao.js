"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const userSchema = require('./user-model');
const passport = require('passport');
const _ = require('lodash');
var relationship = require("mongoose-relationship");


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
        User
            .findById(id)
            .select("-username -password -role -salt")
            .exec((err, user) => {
                err ? reject(err)
                    : resolve(user);
            });
    });
}
userSchema.statics.addTotalArtUser = (username) => {

    return new Promise((resolve, reject) => {
        User
            .findOne({'username': username})
            .select("-username -password -role -salt")
            .exec((err, user) => {
                if(err){
                    reject(err);
                } else{
                    user.totalArt+=1;
                    user.save();
                    resolve("ok");
                }
            });
    });
}

userSchema.statics.getAvartaByUserNaname = (arrName) => {

    return new Promise((resolve, reject) => {
        User
            .find({
                linkImg:{ $in: arrName }
            })
            .select("linkImg")
            .exec((err, user) => {
                err ? reject(err)
                    : resolve(user);
            });
    });
}


userSchema.statics.getUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        User.findOne({'email': email})
            .select("_id username email resetPasswordToken sendTokenDate")
            .exec((err, user) => {
                err ? reject(err) : resolve(user);
            });
    });
}
userSchema.statics.getUserByToken = (token) => {
  token = token+'==';
  return new Promise((resolve, reject) => {
    User.findOne({'resetPasswordToken': token})
      .select("_id password sendTokenDate")
      .exec((err, user) => {
        err ? reject(err) : resolve(user);
      });
  });
}

// get user by username
userSchema.statics.getUserByUserName = (username) => {
    return new Promise((resolve, reject) => {
        User.findOne({'username': username})
            .select(" -password -role -salt")
            .exec((err, user) => {
                err ? reject(err) : resolve(user);
            });
    });
}

// find user by username search on header
userSchema.statics.findUsersByUserName = (username) => {
    let _query = {username: new RegExp('^'+username+'$')};
    console.log(_query);
    return new Promise((resolve, reject) => {
        User.find({username: new RegExp(username)})
            .select(" -password -role -salt")
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
        let _user = new User(user);

        _user.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
};

userSchema.statics.updateUserById = (userinfo) => {
    return new Promise((resolve, reject) => {
        userinfo.save((err, user) => {
            err ? reject(err)
                : resolve(user);
        });
    });
};

userSchema.statics.getAvatarByUsername = (user) => {
    return new Promise((resolve, reject) => {
      User.findOne({username:user})
          .select("linkImg")
          .exec((err,avatar) => {
            err ? reject(err) : resolve(avatar);
          })
    })
};

userSchema.plugin(relationship, {relationshipPathName: 'ownKnowledgeIds'});
const User = mongoose.model('User', userSchema);
module.exports = User;
