/**
 * Created by GiangDH on 5/3/16.
 */
"use strict";

const usersRoutes = require('../api/user/routes/user-route');
const StaticDispatcher = require('../commons/static/index');

module.exports = class Routes {
  static init(app, router) {
    usersRoutes.init(router);
    router
      .route('*')
      .get(StaticDispatcher.sendIndex);
    app.use('/', router);
  }
}
