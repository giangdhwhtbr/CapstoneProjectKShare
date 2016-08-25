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
                        knowledge.updatedAt = new Date(),
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
    static changeKnowledgeStatus(req, res){
        var currentDate = new Date();
        if(req.params && req.params.id) {
            KnowledgeDAO.getKnowledgeById(req.params.id)
                .then(knowledge => {
                    var subUpdate;
                    knowledge.status = !knowledge.status;
                    KnowledgeDAO.updateKnowledge(knowledge);
                    KnowledgeDAO.getKnowledgeByParent(knowledge.id)
                        .then(subKnowledges => {
                            subUpdate=true;
                            for(var i = 0;i<subKnowledges.length;i++){
                                subKnowledges[i].status=knowledge.status;
                                KnowledgeDAO.updateKnowledge(subKnowledges[i]);
                            }
                        })
                    res.status(200).json({
                        status: knowledge.status
                    })
                })
                .catch(error => res.status(400).json(error));
        }else{
            res.status(404).json({
                "message"    :   "No knowledge id in templates"
            });
        }
    }
    //phục vụ riêng cho lấy cha con trong admin
    static getAllAdmin(req, res) {
        KnowledgeDAO
            .getAll()
            .then(knowledges => {
                var data =  {
                    "data": []
                };
                for(var i=0;i<knowledges.length;i++){
                    if (!knowledges[i].parent) {
                        var d = {
                            "data": knowledges[i],
                            "children":[]
                        };
                        data.data.push(d);
                    }
                }
                for (var i = 0; i < data.data.length; i++) {
                    for (var j = 0; j < knowledges.length; j++) {
                        if (knowledges[j].parent) {
                            if(knowledges[j].parent == data.data[i].data.id){
                                var d = {
                                    "data": knowledges[j]
                                };
                                data.data[i].children.push(d);
                            }
                        }
                    }
                }
                res.status(200).json(data);
            })
            .catch(error => console.log(console.error));
    }
};
