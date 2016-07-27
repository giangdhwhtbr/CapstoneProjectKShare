"use strict";

const FriendShipController = require('./friendship-controller');

module.exports = class FriendShipRoutes {
    static init(router) {
      router
        .route('/api/friendship')
        .get(FriendShipController.getAll)
        .post(FriendShipController.createFriendShip)
        .put(FriendShipController.deleteFriendShip);

    router
        .route('/api/getFriendship')
        .post(FriendShipController.getFriendShipByUser);
    
    router
        .route('/api/friendship-status/:user1/:user2')
        .get(FriendShipController.changeStatusFriendship);
    }
}
