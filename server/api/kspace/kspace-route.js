//long

"use strict";

const KSpaceController = require('./KSpace-controller');

module.exports = class KSpaceRoutes {
  static init(router) {
    router
      .route('/api/kspace')
      .get(KSpaceController.getAll)
      .post(KSpaceController.createNew);

    router
      .route('/api/kspace/:id')
      .get(KSpaceController.getKSpaceById)
      .put(KSpaceController.finishKSpace);

    router.route('/api/kspace-profile/:name')
        .get(KSpaceController.getKspaceProfile);

    router
      .route('/api/kspace/:id/review')
      .post(KSpaceController.createReview);

    router
      .route('/api/public-kspace')
      .post(KSpaceController.createPublicKspace);
    router
      .route('/api/public-kspace/:id')
      .get(KSpaceController.checkExist)
  }
};
