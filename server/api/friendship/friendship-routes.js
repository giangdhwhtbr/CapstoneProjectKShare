"use strict";

const FriendShipController = require('./friendship-controller');

module.exports = class FriendShipRoutes {
    static init(router) {
      router
        .route('/api/friendship')
        .get(FriendShipController.getAll)
        .post(FriendShipController.createFriendShip);

      router
        .route('/api/friendship/:id')
        .delete(FriendShipController.deleteFriendShip);
    
    router
        .route('/api/getFriendship')
        .post(FriendShipController.getFriendShipByUser);
    }
}
