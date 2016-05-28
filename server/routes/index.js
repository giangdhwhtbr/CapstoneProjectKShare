/**
 * Created by GiangDH on 5/3/16.
 */
"use strict";
const BadwordRoutes = require('../api/badword/routes/badword-routes');
const KnowledgeRoutes = require('../api/knowledge/routes/knowledge-routes');
const usersRoutes = require('../api/user/routes/user-route');
const StaticDispatcher = require('../commons/static/index');
const RequestRoutes = require('../api/request/routes/request-routes');
const OfferRoutes = require('../api/offer/routes/offer-routes');

module.exports = class Routes {
  static init(app, router) {
    usersRoutes.init(router);
    RequestRoutes.init(router);
    OfferRoutes.init(router);
    BadwordRoutes.init(router);
    KnowledgeRoutes.init(router);
    router
      .route('*')
      .get(StaticDispatcher.sendIndex);
    app.use('/', router);
  }

}
