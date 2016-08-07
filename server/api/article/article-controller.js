/**
 * Created by Duc Duong on 7/11/2016.
 */
"use strict";

const ArticleDAO = require('./article-dao');
const TagDAO = require('../tags/tag-dao');
const KnwDAO = require('../knowledge/knowledge-dao');

module.exports = class ArticleController {
    static getAllArticles(req, res) {
        ArticleDAO
            .getAll()
            .then(articles => {
                for (let i = articles.length - 1; i >= 0; i--) {
                    if (articles[i].status === "deactivate") {
                        let index = articles.indexOf(articles[i]);
                        if (index > -1) {
                            articles.splice(index, 1);
                        }
                    }
                }
                res.status(200).json(articles);
            })
            .catch(error => res.status(400).json(error));
    }


    static getArticleById(req, res) {
        if (req.params && req.params.id) {
            ArticleDAO
                .getArticleById(req.params.id)
                .then(art => res.status(200).json(art))
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No article Id in templates"
            });
        }
    }

    static createArticle(req, res) {
        let _data = req.body;

        //create new tags in database
        TagDAO.createArrayTag(_data.newTag).then((tags)=> {
            //create a new article
            ArticleDAO
                .createArticle(_data.art)
                .then(article => {
                    // push the new tag to the new article
                    for (let e of tags) {
                        article.tags.push(e);
                    }

                    //get full data tags
                    TagDAO.getTagByIds(article.tags).then((ts)=> {
                        // clear data article in the tags of article
                        ts.map((e, i)=> {
                            ts[i].articles = [];
                        });
                        //get list name
                        var names = [];
                        for (let e of ts) {
                            names.push(e.name);
                        }
                        // insert knowledge (same name with tags) to article
                        KnwDAO.getKnwByNames(names).then((knws)=> {
                            knws.map((e, i)=> {
                                article.knowledge.push(e);
                            });
                            //pour full data of tag to article
                            article.tagsFD = ts;
                            article.save();
                            res.status(200).json(article);
                        }).catch((err)=>res.status(400).json(err));


                    }).catch(err=>res.status(400).json(err));

                }).catch(error => res.status(400).json(error));
        }).catch((error)=>res.status(400).json(error));
    }


    static updateArticleById(req, res) {
        if (req.params && req.params.id) {
            let _data = req.body;

            ArticleDAO.getArticleById(req.params.id)
                .then(article => {

                    article.title = _data.art.title;
                    article.content = _data.art.content;
                    article.tags = _data.art.tags;
                    article.status = _data.art.status;
                    article.updatedAt = new Date();

                    TagDAO.createArrayTag(_data.newTag).then((tags)=> {

                        ArticleDAO.updateArticle(article)
                            .then((articleUpdated) => {

                                articleUpdated.knowledge = [];

                                tags.map((e, i)=> {
                                    articleUpdated.tags.push(e);
                                });

                                TagDAO.getTagByIds(articleUpdated.tags).then((ts)=> {


                                    ts.map((e, i)=> {
                                        ts[i].articles = [];
                                    });

                                    //get list name
                                    var names = [];
                                    for (let e of ts) {
                                        names.push(e.name);
                                    }
                                    // insert knowledge (same name with tags) to article
                                    KnwDAO.getKnwByNames(names).then((knws)=> {
                                        knws.map((e, i)=> {
                                            article.knowledge.push(e);
                                        });
                                        //pour full data of tag to article
                                        articleUpdated.tagsFD = ts;
                                        articleUpdated.save();
                                        res.status(200).json(articleUpdated);
                                    }).catch((err)=>res.status(400).json(err));


                                }).catch(err=>res.status(400).json(err));


                            }).catch(error => res.status(400).json(error));

                    }).catch((error)=>res.status(400).json(error));

                }).catch(error => res.status(400).json(error));
        }
    }


    static deactivateArticle(req, res) {
        let _id = req.params.id;

        ArticleDAO
            .deactivateArticleById(_id)
            .then((mes) => res.status(200).json(mes))
            .catch(error => res.status(400).json(error));
    }

}
