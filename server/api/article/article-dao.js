/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const articleSchema = require('./article-model');
const _ = require('lodash');
var relationship = require("mongoose-relationship");

articleSchema.statics.getAll = (x) => {
    return new Promise((resolve, reject) => {

        Article
            .find({})
            .skip(x - 5)
            .limit(5)
            .sort({ updatedAt: -1 })
            .exec((err, articles) => {
                err ? reject(err)
                    : resolve(articles);
            });
    });
}
articleSchema.statics.getAllNf = (x) => {
    return new Promise((resolve, reject) => {

        Article
            .find({status: 'public'})
            .skip(x - 5)
            .limit(5)
            .sort({ updatedAt: -1 })
            .exec((err, articles) => {
                err ? reject(err)
                    : resolve(articles);
            });
    });
}
articleSchema.statics.getAllAdmin = (x) => {
    return new Promise((resolve, reject) => {

        Article
            .find({})
            .exec((err, articles) => {
                err ? reject(err)
                    : resolve(articles);
            });
    });
}

//get all article by tags dao function
articleSchema.statics.getArticlesByTagsOfUser = (userTags, x) => {
    return new Promise((resolve, reject) => {
        Article
            .find({
                $and: [
                    { status: { $nin: ['deactive', 'private'] } },
                    { tags: { $in: userTags } }
                ]
            })
            .skip(x - 5)
            .limit(5)
            .exec((err, articles) => {
                err ? reject(err)
                    : resolve(articles);
            });
    });
}

//get all article except tags dao function
articleSchema.statics.getArticlesExceptTagsOfUser = (userTags, x) => {
    return new Promise((resolve, reject) => {
        Article
            .find({
                $and: [
                    { status: { $nin: ['deactive', 'private'] } },
                    { tags: { $nin: userTags } }
                ]
            })
            .skip(x - 5)
            .limit(5)
            .exec((err, article) => {
                err ? reject(err)
                    : resolve(article);
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
            .find({ 'tags': idTag })
            .exec((err, article) => {
                err ? reject(err)
                    : resolve(article);
            });
    });
}


articleSchema.statics.getAPage = (start,stt) => {

    return new Promise((resolve, reject) => {
        Article
            .find({ "status": stt })
            .skip(start)
            .limit(10)
            .exec((err, arts) => {
                err ? reject(err)
                    : resolve(arts);
            });
    });
}

articleSchema.statics.getTot = (stt) => {

    return new Promise((resolve, reject) => {
        if (!_.isString(stt)) {
            return reject(new TypeError('status page is not a String.'));
        }
        Article
            .find({ "status": stt })
            .exec((err, arts) => {
                if (err) {
                    reject(err);
                }
                resolve(arts.length);
            });
    });
}

articleSchema.statics.getArticleByKnwId = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id)) {
            return reject(new TypeError('ID is not a string'));
        }
        Article.find({
            status: { $nin: ['deactivate','private'] },
            'knowledge': id
        }).exec((err, arts)=> {
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

articleSchema.statics.deactivateArticleById = (id) => {
    return new Promise((resolve, reject) => {
        if (!_.isString(id))
            return reject(new TypeError('Id is not a valid string.'));

        Article
            .findById(id)
            .exec((err, article) => {
                article.status = "deactivate";
                article.save();
                err ? reject(err)
                    : resolve({ "mes": "this article is deactivated" });
            });
    });
}

articleSchema.plugin(relationship, { relationshipPathName: ['tags', 'knowledge'] });

//full text search function index by title and description
articleSchema.statics.fullTextSearchArticle = (text) => {

    return new Promise((resolve, reject) => {

        Article
            .find({
                status: 'public',
                '$text': { '$search': text }
            },
            { score: { $meta: "textScore" } }
            ).sort({ score: { $meta: "textScore" } })
            .exec((err, articles) => {
                err ? reject(err)
                    : resolve(articles);
            });

    });
}

articleSchema.statics.getArticleByUser = (username) => {
    return new Promise((resolve, reject) => {
        Article
            .find({ 
                'author': username,
                $or:[
                    {'status':'public'},
                    {'status':'private'}
                ]
            })
            .select('-content')
            .exec((err, articles) => {
                err ? reject(err)
                    : resolve(articles);
            });
    });
}

const Article = mongoose.model('Article', articleSchema);


module.exports = Article;
