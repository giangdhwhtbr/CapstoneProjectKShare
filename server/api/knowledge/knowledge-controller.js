"use strict";

const KnowledgeDAO = require('./knowledge-dao');
const TagDAO = require('../tags/tag-dao');
const ArticleDAO = require('../article/article-dao');

module.exports = class KnowledgeController {
    static getAll(req, res) {
        KnowledgeDAO
            .getAll()
            .then(knowledges => res.status(200).json(knowledges))
            .catch(error => res.status(400).json(error));
    }

    static createKnowledge(req, res) {
        let knowledge = req.body;
        KnowledgeDAO
            .createKnowledge(knowledge)
            .then((knowledge) => {
                let _tag = {
                    name: knowledge.name,
                    articles: []
                }
                TagDAO.createTag(_tag).then((tag)=> {
                    res.status(201).json(knowledge);
                }).catch(error => res.status(400).json(error));
            }).catch(error => res.status(400).json(error));
    }

    //get back.knowledge by back.knowledge ID
    static getKnowledgeById(req, res) {
        if (req.params && req.params.id) {
            KnowledgeDAO
                .getKnowledgeById(req.params.id)
                .then(knowledge => res.status(200).json(knowledge))
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No Knowledge ID in templates"
            });
        }
    }

    static getArticleByKnwId(req, res) {
        if (req.params && req.params.id) {
            ArticleDAO
                .getArticleByKnwId(req.params.id)
                .then((arts) => {
                    res.status(200).json(arts);
                })
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No article Id in templates"
            });
        }
    }

    //get child back.knowledge from parent back.knowledge
    static getKnowledgeByParent(req, res) {
        if (req.params && req.params.id) {
            KnowledgeDAO
                .getKnowledgeByParent(req.params.id)
                .then(knowledges => res.status(200).json(knowledges))
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No Knowledge ID in templates"
            });
        }
    }

    static deleteKnowledge(req, res) {
        let _id = req.params.id;

        KnowledgeDAO
            .deleteKnowledge(_id)
            .then(() => {
                //delete knowledge id in article
                ArticleDAO
                    .getArticleByKnwId(_id)
                    .then(art => {
                        for (let a of art) {
                            var index = a.knowledge.indexOf(_id);
                            if (index >= 0) {
                                a.knowledge.splice(index, 1);
                                a.save();
                            }
                        }
                        // code more here
                        res.status(200).end();
                    })
                    .catch(error => res.status(400).json(error));
            }).catch(error => res.status(400).json(error));
    }

    static updateKnowledge(req, res) {
        if (req.params && req.params.id) {
            KnowledgeDAO.getKnowledgeById(req.params.id)
                .then(knowledge => {
                    knowledge.name = req.body.name,
                        knowledge.description = req.body.description,
                        knowledge.update = new Date(),
                        KnowledgeDAO.updateKnowledge(knowledge)
                            .then(knowledge => res.status(200).json(knowledge))
                            .catch(error => res.status(400).json(error));
                })
                .catch(error => res.status(400).json(error));
        } else {
            res.status(404).json({
                "message": "No Knowledge in templates"
            });
        }
    }
}