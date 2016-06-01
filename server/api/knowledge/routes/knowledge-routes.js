"use strict";

const KnowledgeController = require('../controller/knowledge-controller');

module.exports = class KnowledgeRoutes {
    static init(router) {
      router
        .route('/api/knowledges')
        .get(KnowledgeController.getAll)
        .post(KnowledgeController.createKnowledge);

      router
        .route('/api/knowledges/:id')
        .delete(KnowledgeController.deleteKnowledge)
        .put(KnowledgeController.updateKnowledge)
        .get(KnowledgeController.findKnowledgeById);
    }
}
