var nodemailer = require('nodemailer');
var password='fucc87you'
var user='azsxdcfv1271@gmail.com'
var transporter= nodemailer.createTransport({
  service:'Gmail',
  auth:{
    user:user,
    pass:password
  }
})
var mailer=function(title,link){
  console.log('send')
  transporter.sendMail({
    from:user,
    to:user,
    subject:'New Codejob post',
    html:title+'<br><a href="'+link+'">'+link+'</a>'
  }),function(err,info){
    if(err){
      return console.log(err);
    }
    console.log(info.response);
  }
}
// mailer('ptt','link')
module.exports=mailer;
