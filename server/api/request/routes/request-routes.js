"use strict";

const RequestController = require('../controller/request-controller');

module.exports = class RequestRoutes {
    static init(router) {
      router
        .route('/api/requests')
        .get(RequestController.getAll)
        .post(RequestController.createRequest);

      router
        .route('/api/requests/:id')
        .delete(RequestController.deleteRequest)
        .put(RequestController.updateRequest)
        .get(RequestController.getRequestById)
        .post(RequestController.getRequestByKnowledgeId); 
     
      router
        .route('/api/request-status/:id')
        .get(RequestController.changeStatusRequest);     
     
       router
        .route('/api/requests-search')
        .post(RequestController.fullTextSearchRequest);

      router
        .route('/api/request-subcriber/:id')
        .post(RequestController.addSubcriber);
    }
    
}
