//long

"use strict";

const kSpaceController = require('../controller/kspace-controller');

module.exports = class kSpaceRoutes {
  static init(router) {
    router
      .route('/api/kspace')
      .get(kSpaceController.getAll)
      .post(kSpaceController.createNew);

    router
      .route('/api/kspace/:id')
      .get(kSpaceController.getKSpaceById)
      .put(kSpaceController.finishKSpace);

  }
}
