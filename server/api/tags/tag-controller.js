/**
 * Created by Duc Duong on 7/17/2016.
 */
"use strict";
const TagDAO = require('./tag-dao');
const ArticleDAO = require('../article/article-dao');

module.exports = class TagController {
    static getAllTags(req, res) {
        TagDAO
            .getAll()
            .then(tags => res.status(200).json(tags))
            .catch(error => res.status(400).json(error));
    }

    static getTagById(req, res) {
        if (req.params && req.params.id) {
            TagDAO
                .getTagById(req.params.id)
                .then(tag => res.status(200).json(tag))
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No tag Id in templates"
            });
        }
    }


    static getArticleByTagId(req, res) {
        if (req.params && req.params.id) {
            ArticleDAO
                .getArticleByTagId(req.params.id)
                .then((art) => {
                    console.log(art);
                    res.status(200).json(art)
                })
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No article Id in templates"
            });
        }
    }

    static getTagsByArtId(req, res) {
        if (req.params && req.params.id) {
            TagDAO
                .getTagsByArtId(req.params.id)
                .then(tag => res.status(200).json(tag))
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No tag Id in templates"
            });
        }
    }

    static createTag(req, res) {
        let _Tag = req.body;

        TagDAO
            .createTag(_Tag)
            .then((tag) => res.status(201).end())
            .catch(error => res.status(400).json(error));
    }

    static deleteTag(req, res) {
        let _id = req.params.id;

        TagDAO
            .deactivateTagById(_id)
            .then(() => {
                ArticleDAO
                    .getArticleByTagId(_id)
                    .then(art => {
                        for (let a of art) {
                            var index = a.tags.indexOf(_id);
                            if (index >= 0) {
                                a.tags.splice(index, 1);
                                for (let i = 0; i < a.tagsFD.length; i++) {
                                    if (a.tagsFD[i]._id == _id) {
                                        a.tagsFD.splice(i, 1);
                                    }
                                }
                                a.save();
                            }
                        }
                        res.status(200).end();
                    })
                    .catch(error => res.status(400).json(error));
            })
            .catch(error => res.status(400).json(error));
    }

    static updateTag(req, res) {
        let _tag = req.body;

        TagDAO
            .updateTag(_tag)
            .then((tagUpdated)=>res.status(201).json(tagUpdated))
            .catch((err)=> res.status(400).json(err));
    }

}
