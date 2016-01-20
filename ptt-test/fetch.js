var request =require('request');
var cheerio=require('cheerio');

var fetch=function(callback){
  var url='https://www.ptt.cc/bbs/codejob/index.html';
  request(url, function(error, response, body){
    $=cheerio.load(body);
    var title=$('.r-list-sep').prev().find('.title a').text();
    var link='https://www.ptt.cc'+$('.r-list-sep').prev().find('.title a').attr('href');
    callback(title,link);
  })
}
// fetch(function(title,link){
//   console.log('title:',title);
//   console.log('link:',link);
// })
module.exports=fetch
