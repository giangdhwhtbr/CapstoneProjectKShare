"use strict";

const KnowledgeDAO = require('../dao/knowledge-dao');

module.exports = class KnowledgeController {
  static getAll(req, res) {
      KnowledgeDAO
        .getAll()
        .then(knowledges => res.status(200).json(knowledges))
        .catch(error => res.status(400).json(error));
  }

  static createKnowledge(req, res) {
      let knowledge= req.body;
      KnowledgeDAO
        .createKnowledge(knowledge)
        .then(knowledge => res.status(201).json(knowledge))
        .catch(error => res.status(400).json(error));
  }

  static getKnowledgeById(req,res) {
    if(req.params && req.params.id) {
      KnowledgeDAO
        .getKnowledgeById(req.params.id)
        .then(knowledge => res.status(200).json(knowledge))
        .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Knowledge ID in request"
      });
    }
  }

  static deleteKnowledge(req, res) {
    let _id = req.params.id;

    KnowledgeDAO
      .deleteKnowledge(_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

  static updateKnowledge(req, res){
    if(req.params && req.params.id) {
        KnowledgeDAO.getKnowledgeById(req.params.id)
          .then(knowledge => {
            knowledge.name = req.body.name,
            knowledge.description = req.body.description,
            knowledge.update=new Date(),
            KnowledgeDAO.updateKnowledge(knowledge)
              .then(knowledge => res.status(200).json(knowledge))
              .catch(error => res.status(400).json(error));
          })
          .catch(error => res.status(400).json(error));
    }else{
      res.status(404).json({
        "message"    :   "No Knowledge in request"
      });
    }
  }
}
