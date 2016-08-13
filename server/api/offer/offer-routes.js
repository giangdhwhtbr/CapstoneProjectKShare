"use strict";

const OfferController = require('./offer-controller');

module.exports = class OfferRoutes {
    static init(router) {
      router
        .route('/api/offers')
        .get(OfferController.getAll)
        .post(OfferController.createOffer)
        .put(OfferController.getOfferByRequestId);

      router
        .route('/api/offers/:id')
        .put(OfferController.updateOffer);

    }
}
