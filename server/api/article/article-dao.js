/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const articleSchema = require('./article-model');
const _ = require('lodash');
var relationship = require("mongoose-relationship");

articleSchema.statics.getAll = () => {
    return new Promise((resolve, reject) => {
        let _query = {};

        Article
            .find(_query)
            .exec((err, articles) => {
                err ? reject(err)
                    : resolve(articles);
            });
    });
}

articleSchema.statics.createArticle = (article) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(article))
            return reject(new TypeError('article is not a valid object.'));

        let _article = new Article(article);

        _article.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
}

articleSchema.statics.getArticleByTagId = (idTag) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(idTag)) {
            return reject(new TypeError('ID is not a String.'));
        }
        Article
            .find({'tags': idTag})
            .exec((err, article) => {
                err ? reject(err)
                    : resolve(article);
            });
    });
}

articleSchema.statics.getArticleByKnwId = (id)=> {
    return new Promise((resolve, reject)=> {
        if (!_.isString(id)) {
            return reject(new TypeError('ID is not a string'));
        }
        Article.find({'knowledge': id}).exec((err, arts)=> {
            err ? reject(err) : resolve(arts);
        });
    });
}

articleSchema.statics.getArticleById = (id) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('ID is not a String.'));
        }
        Article
            .findById(id)
            .exec((err, article) => {
                err ? reject(err)
                    : resolve(article);
            });
    });
}
articleSchema.statics.updateArticle = (article) => {
    return new Promise((resolve, reject) => {
        if (!_.isObject(article)) {
            return reject(new TypeError('article is not a valid object.'));
        }
        article.save((err, saved) => {
            err ? reject(err)
                : resolve(saved);
        });
    });
}
articleSchema.statics.deleteArticleById = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Article
            .findById(id)
            .exec((err, article) => {
                article.remove();
                err ? reject(err)
                    : resolve();
            });
    });
}
articleSchema.plugin(relationship, {relationshipPathName: ['tags', 'knowledge']});

const Article = mongoose.model('Article', articleSchema);


module.exports = Article;
