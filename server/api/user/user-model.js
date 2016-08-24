"use strict";

const mongoose = require('mongoose');
const validator = require('validator');
const crypto = require('crypto');


var validateEmail = function (email) {
    return validator.isEmail(email);
};

var validateRole = function (role) {
    if (role == "admin" || role == "normal") {
        return true;
    } else {
        return false;
    }
};

var validateUsername = function (username) {
    var pattern = new RegExp('^[a-zA-Z0-9_.-]*$');
    return pattern.test(username);
};

var validatePass = function (password) {
    var pattern = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
    return pattern.test(password);
};
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        default: ''
    },
    displayName: {
        type: String,
        trim: true,
        default: ''
    },
    phone: {
        type: String,
        trim: true,
        default: ''
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    username: {
        type: String,
        trim: true,
        unique: [true, 'Tên đăng nhập đã tồn tại '],
        lowercase: true,
        default: '',
        required: [true, 'vui lòng điền tên đăng nhập '],
        validate: [validateUsername, 'Tên đăng nhập chỉ được chứa kí tự alphabet và số ']
    },
    password: {
        type: String,
        trim: true,
        default: '',
        required: [true, 'vui lòng nhập mật khẩu '],
        validate: [validatePass, 'mât khẩu phải có ít nhất 8 kí tự, bao gồm 1 kí tự viết hoa, 1 kí tự viết thường, 1 kí' +
        ' tự đặc biệt và 1 số']
    },
    email: {
        type: String,
        trim: true,
        unique: [true, 'email đã tồn tại '],
        lowercase: true,
        default: '',
        required: [true, 'vui lòng nhập email '],
        validate: [validateEmail, "vui lòng nhập đúng email"]
    },
    role: {
        type: String,
        trim: true,
        default: '',
        required: true,
        validate: [validateRole, "Role không tồn tại"]
    },
    ownKnowledgeIds: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Tag",
            childPath: "users"
        }
    ],
    rates: [{
      ratePoint: {
        type: Number
      },
      kspaceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Kspace"
      }
    }],
    rateAve: {
        type: Number
    },
    banStatus: {
        admin: {
            type: String
        },
        time: {
            type: String
        },
        bannedAt: {
            type: Date
        },
        status: {
            type: Boolean
        }
    },
    salt: {
        type: String,
    },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date},
    /* For reset password */
    resetPasswordToken: {
        type: String
    },
    sendTokenDate: {
        type: Date
    },
    linkImg: {
        type: String,
        default: 'uploads/images.jpg'
    },
    lastAccessedAt: {type: Date}
});

/**
 * Hook a pre save method to hash the password
 */
userSchema.pre('save', function (next) {
    if (this.password && this.isModified('password')) {
        this.salt = crypto.randomBytes(16).toString('base64');
        this.password = this.hashPassword(this.password);
    }
    next();
});

/**
 * Create instance method for hashing a password
 */
userSchema.methods.hashPassword = function (password) {
    if (this.salt && password) {
        return crypto.pbkdf2Sync(password, new Buffer(this.salt, 'base64'), 10000, 64).toString('base64');
    } else {
        return password;
    }
};

/**
 * Create instance method for authenticating user
 */
userSchema.methods.authenticate = function (password) {
    return this.password === this.hashPassword(password);
};


module.exports = userSchema;
