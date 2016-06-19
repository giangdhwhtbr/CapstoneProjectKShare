"use strict";
const BadwordRoutes = require('../api/badword/routes/badword-routes');
const KnowledgeRoutes = require('../api/knowledge/routes/knowledge-routes');
const usersRoutes = require('../api/user/routes/user-route');
const StaticDispatcher = require('../commons/static/index');
const RequestRoutes = require('../api/request/routes/request-routes');
const OfferRoutes = require('../api/offer/routes/offer-routes');
const KSpaceRoutes = require('../api/kspace/routes/kspace-route');
const ChatRoomRoutes = require('../api/chatRoom/routes/chatRoom-routes');
const MessageRoutes = require('../api/message/routes/message-routes');

module.exports = class Routes {
  static init(app, router) {
    usersRoutes.init(router);
    RequestRoutes.init(router);
    OfferRoutes.init(router);
    BadwordRoutes.init(router);
    KnowledgeRoutes.init(router);
    KSpaceRoutes.init(router);
    ChatRoomRoutes.init(router);
    MessageRoutes.init(router);
    
    router
      .route('*')
      .get(StaticDispatcher.sendIndex);
    app.use('/', router);
  }

}
