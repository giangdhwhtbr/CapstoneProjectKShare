"use strict";

const userController = require('./user-controller');
const passport = require('passport');
const userPolicies = require('./config/policies');



module.exports = class userRoutes {
  static init(router) {
    router
      .route('/api/user')
      .get(userController.getAll)
      .post(userController.createNew)
      .put(userController.getUserByUserName);

    router
      .route('/api/user/:id')
      .get(userController.getUserById)
      .put(userController.updateUser);

    router
      .route('/api/ban/:id')
      .put(userController.banUser);

    router.route('/api/login').post(
      function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
          if (err) {
            return next(err); // will generate a 500 error
          }
          // Generate a JSON response reflecting authentication status
          if (! user) {
            return res.status(401).send(info);
          }
          req.login(user, function(err){
            if(err){
              return next(err);
            }
            var data = {
              username : user.username,
              role: user.role,
              linkImg: user.linkImg
            };
            return res.status(200).send(data);
          });
        })(req, res, next);
      });


    router
      .route('/api/logout')
      .get(function(req,res){
        req.logout();
        if(req.user) {
          res.status(200).json({success: false});
        } else {
          res.status(200).json({success: true});
        }
      });

    router
      .route('/api/checkLogin')
      .get(function(req,res){
        if(req.user){
          res.status(200).json({
            login:true,
            role:req.user.role
          });
        }else{
          res.status(200).json({login:false});
        }
      });

    router
      .route('/api/email-reset-pass/:email')
      .get(userController.sendEmailResetPassword);
    router
      .route('/api/new-pass/:token')
      .get(userController.getUserByToken)
      .put(userController.changePassword);

    router
      .route('/api/is-user-exist/:username')
      .get(userController.checkUserExist);

    router
      .route('/api/search-user/:username')
      .get(userController.findUsersByUsername);

    router
      .route('/api/user/avatar/:username')
      .get(userController.getAvatarByUserName)
  }

}
