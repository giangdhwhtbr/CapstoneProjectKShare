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
        .get(RequestController.getRequestById);
     
    }
    
}
