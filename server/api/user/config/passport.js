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
          var localDate = user.banStatus.bannedAt.toLocaleDateString;
          if (difftime < user.banStatus.time){
            return done(null, false, {
              message: 'Bạn đã vi phạm điều khoản sử dụng chúng tôi quyết định khoá tài khoản của bạn trong vòng 1' +
              ' ngày kể từ ' + localDate+', vui lòng đăng nhập lại sau'}
            )
          }
        }

        if(user.status === 'deactive') {
          return done(null, false, {
            message: 'Bạn đã vi phạm điều khoản sử dụng nghiêm trọng chúng tôi quyết định khoá tài khoản của' +
            ' bạn' +
            ' vĩnh viễn. Nếu có điều gì không đúng, vui lòng liên lạc với quản trị viên'}
          )
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
