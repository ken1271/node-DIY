var firebase=require('firebase');
var ref=new firebase('https://ptt-test.firebaseio.com/');
var storage={
  read:function(callback){
    ref.once('value',function(snapshot){
      var val=snapshot.val();
      callback(val.title,val.link);
    })
  },
  save:function(title,link){
    ref.set({
      title:title,
      link:link
    })
    console.log(title)
  }
}
// storage.read(function(title,link){
//   console.log(title);
// });
// storage.save('ptt','link');
module.exports=storage;
