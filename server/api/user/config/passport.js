/**
 * Created by GiangDH on 5/18/16.
 */
var LocalStrategy   = require('passport-local').Strategy;
var User = require('mongoose').model('User');


module.exports = function(passport){
  // Local Sign In
  // Local Sign In
  passport.use('local-login', new LocalStrategy({
      usernameField : 'username',
      passwordField : 'password',
      passReqToCallback: true
    },
    function(req, username, password, done){
      User.findOne({ 'username' : username }, {}, function (err, user,info){
        if(err){
          return done(err);
        }
        if(!user){
          return done(null, false, { invalidUsername: 'Tên đăng nhập không đúng, vui lòng thử lại' });
        }
        if(!user.authenticate(password)) {
          return done(null, false, { invalidPassword: 'Mật khẩu không chính xác, vui lòng kiểm tra lại'});
        }

        if(user.banStatus.status) {
          var currentDate = new Date();
          var difftime = currentDate.getTime() - user.banStatus.bannedAt.getTime();

          if (difftime < user.banStatus.time){
            return done(null, false, { message: 'Tài khoản của bạn đang bị khoá trong 1 ngày kể từ '+user.banStatus.bannedAt+', vui lòng đăng' +
            ' nhập' +
            ' lại' +
            ' sau'})
          }
        }

        return done(null,user);
      })
    }
  ));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });


  passport.deserializeUser(
    function(id, done){
      User.findById(id, function(err, user){
        if(err){
          done(err);
        }
        done(null, user);
      });
    });

}
