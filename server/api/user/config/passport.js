/**
 * Created by GiangDH on 5/18/16.
 */
var LocalStrategy   = require('passport-local').Strategy;
var User = require('mongoose').model('User');


module.exports = function(passport){

  // Serialize sessions
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  // Deserialize sessions
  passport.deserializeUser(function (id, done) {
    User.findOne({
      _id: id
    }, '-salt -password', function (err, user) {
      //console.log(user);
      done(err, user);
    });
  });

  // Local Sign In
  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback: true
  },
    function(req, username, password, done){
      User.findOne({ 'username' : username }, function (err, user){
         if(err){
           return done(err);
         }
         if(!user){
           return done(null,false, req.flash('loginMessage','No user found.'));
         }
         if(!user.authenticate(password)){
           return done(null, false, req.flash('Invalid password, try again!'));
         }
         return done(null, user);
      })
    }
  ))

}
