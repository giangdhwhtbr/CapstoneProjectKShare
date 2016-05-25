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
      .get(userPolicies.isAllowed,userController.getUserById)
      .delete(userPolicies.isAllowed,userController.removeById)
      .put(userPolicies.isAllowed,userController.updateUser);

    router
      .route('/api/login')
      .post(function(req, res, next ){
        passport.authenticate('local-login',{successRedirect:'/api/user'}, function(err, user,info) {
          if (err) { return next(err) }
          if (!user) { return res.json(info) }
          user.password = undefined;
          user.salt = undefined;
          res.json(user);
        })(req, res, next);
      });
    router
      .route('/api/logout')
      .get(function(req,res){
        if(req.session.user){
          req.session.destroy(function(err) {
            if(err){
              console.log(err);
            }
            console.log('user logged out');
            res.status(200).json({login: false});
          });
        }
      })
    router
      .route('/api/checkLogin')
      .get(function(req,res){
        if(req.session.user){
          res.status(200).json({login:true});
        }
        res.status(200).json({login:false});
      });
    //router.route('/api/login').post(passport.authenticate('local-login',{successRedirect:'/'}));
  }
}
