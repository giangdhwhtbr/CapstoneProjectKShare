//long

"use strict";

const kSpaceController = require('./kspace-controller');

module.exports = class kSpaceRoutes {
  static init(router) {
    router
      .route('/api/front.kspace')
      .get(kSpaceController.getAll)
      .post(kSpaceController.createNew);

    router
      .route('/api/front.kspace/:id')
      .get(kSpaceController.getKSpaceById)
      .put(kSpaceController.finishKSpace);

  }
}
