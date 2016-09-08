/**
 * Created by GiangDH on 6/7/16.
 */

var mailOptions = function(receiver, username, token)

{
  mailOptions.resetPass = {
    from: "Kshare <ayeyemm@gmail.com>", // sender address
    to:   receiver, // list of receivers
    subject: 'Kshare - Knowledge Sharing Network', // Subject line
    html: `     <h3>Chào ` +username+ `,</h3>
                <p>Để phục hồi mật khẩu truy cập Kshare, mời bạn vui lòng click vào link dưới đây:</p>
                    <a href="https://localhost:80/reset-password/`+token+`"> Thiết lập mật khẩu mới </a>
                <p>Lưu ý: đường link chỉ có hiệu lực trong vòng 1 ngày </p>
              ` // html body
  };
  return mailOptions;
};



module.exports = mailOptions;
