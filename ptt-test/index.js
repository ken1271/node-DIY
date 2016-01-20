var fetch=require('./fetch');
var send=require('./mailer')
var storage=require('./storage')
var schedule=require('./schedule')

schedule(function(){
  fetch(function(currentTitle,currentLink){
    storage.read(function(lastTitle,lastLink){
      if(lastTitle!=currentTitle){
        console.log('last post:',lastTitle);
        console.log('current:',currentTitle)
        storage.save(currentTitle,currentLink)
        send(currentTitle,currentLink)
      }
      else {
        console.log('no post')
      }
    })
  })
})
