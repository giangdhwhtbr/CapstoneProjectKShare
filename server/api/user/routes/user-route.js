"use strict";

const userController = require('../controller/user-controller');
const passport = require('passport');
const userPolicies = require('../config/policies');
module.exports = class userRoutes {
  static init(router) {
    router
      .route('/api/user')
      .get(userPolicies.isAllowed,userController.getAll)
      .post(userPolicies.isAllowed,userController.createNew);

    router
      .route('/api/user/:id')
      .delete(userPolicies.isAllowed,userController.removeById)
      .put(userPolicies.isAllowed,userController.updateUser);

    router
      .route('/api/login')
      .post(passport.authenticate('local-login', {
        successRedirect : '/api/user'
      }));
  }
}
