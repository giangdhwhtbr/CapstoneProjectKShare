/**
 * Created by Duc Duong on 7/17/2016.
 */
"use strict";
const TagDAO = require('./tag-dao');
const ArticleDAO = require('../article/article-dao');
const ReqDAO = require('../request/request-dao');

module.exports = class TagController {
    static getAllTags(req, res) {
        TagDAO
            .getAll()
            .then(tags => {
                for (let i = tags.length - 1; i >= 0; i--) {
                    if (tags[i].status === false) {
                        let index = tags.indexOf(tags[i]);
                        if (index > -1) {
                            tags.splice(index, 1);
                        }
                    }
                }
                res.status(200).json(tags);
            }).catch(error => res.status(400).json(error));
    }

    static getAllDeactivatedTags(req, res) {
        TagDAO
            .getAll()
            .then(tags => {
                for (let i = tags.length - 1; i >= 0; i--) {
                    if (tags[i].status === true) {
                        let index = tags.indexOf(tags[i]);
                        if (index > -1) {
                            tags.splice(index, 1);
                        }
                    }
                }
                res.status(200).json(tags);
            }).catch(error => res.status(400).json(error));
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

    static getTagByIds(req, res) {
        TagDAO
            .getTagByIds(req.body.ids)
            .then(tags => {
                for (let i = tags.length - 1; i >= 0; i--) {
                    if (tags[i].status === false) {
                        let index = tags.indexOf(tags[i]);
                        if (index > -1) {
                            tags.splice(index, 1);
                        }
                    }
                }
                res.status(200).json(tags);
            }).catch(error => res.status(400).json(error));
    }

    static activeTag(req, res) {
        if (req.params && req.params.id) {
            let _id = req.params.id;
            TagDAO
                .activeTag(_id)
                .then(tag => {
                    ArticleDAO
                        .getArticleByTagId(_id)
                        .then(art => {
                            tag.articles=[];
                            tag.request=[];
                            for (let a of art) {
                                a.tagsFD.push(tag);
                                a.save();
                            }
                            res.status(200).json({"mess": "Deactivate Successfully !"});
                        }).catch(error => res.status(400).json(error));
                }).catch(error => res.status(400).json(error));
        }

    }


    static getArticleByTagId(req, res) {
        if (req.params && req.params.id) {
            ArticleDAO
                .getArticleByTagId(req.params.id)
                .then((arts) => {

                    for (let i = arts.length - 1; i >= 0; i--) {
                        if (arts[i].status === "deactivate"||arts[i].status === "private") {
                            let index = arts.indexOf(arts[i]);
                            if (index > -1) {
                                arts.splice(index, 1);
                            }
                        }
                    }

                    res.status(200).json(arts)
                }).catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No article Id in templates"
            });
        }
    }

    static getReqByTagId(req, res) {
        if (req.params && req.params.id) {
            ReqDAO
                .getReqByTagId(req.params.id)
                .then((reqs) => {

                    for (let i = reqs.length - 1; i >= 0; i--) {
                        if (reqs[i].status === "deactivate") {
                            let index = reqs.indexOf(reqs[i]);
                            if (index > -1) {
                                reqs.splice(index, 1);
                            }
                        }
                    }

                    res.status(200).json(reqs)
                }).catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No article Id in templates"
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

    //static createArrayTag(req, res){
    //    let tagNames= req.body;
    //    TagDAO.createArrayTag(tagNames.list).then((tags)=>{
    //        res.status(201).json(tags);
    //    }).catch(error => res.status(400).json(error));
    //}

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
                                for (let i = 0; i < a.tagsFD.length; i++) {
                                    if (a.tagsFD[i]._id == _id) {
                                        a.tagsFD.splice(i, 1);
                                    }
                                }
                                a.save();
                            }
                        }
                        res.status(200).json({"mess": "Deactivate Successfully !"});
                    })
                    .catch(error => res.status(400).json(error));
            })
            .catch(error => res.status(400).json(error));
    }

    static getAPage(req, res) {
        let start = req.params.start;
        if (req.params && req.params.start) {
            TagDAO.getAPage(start, req.params.stt).then((tags)=> {
                if (tags.length == 0 && start != 0) {
                    TagDAO.getAPage(start - 10, req.params.stt).then((tagsBU)=> {
                        res.status(200).json(tagsBU);
                    }).catch(err=> res.status(400).json(err));
                } else {
                    res.status(200).json(tags);
                }

            }).catch(err=> res.status(400).json(err));
        }
    }

    static getTot(req, res) {

        if (req.params && req.params.stt) {
            TagDAO.getTot(req.params.stt).then((num)=> {
                res.status(200).json(num);
            }).catch(err=> res.status(400).json(err));
        }
    }

}
