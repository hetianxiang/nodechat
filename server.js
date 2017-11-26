let express = require('express');
let path = require('path');
let app = express();
app.get('/',function(req, res){
  res.sendFile(path.resolve('index.html'));
});
//实例化一个http服务器
let server = require('http').createServer(app);
//实例化一个socket服务器
let io = require('socket.io')(server);

io.on('connection',function(socket){
  socket.on('message',function(data){
    console.log(data);
    socket.send(`服务器回应：${data}`)
  })
})
server.listen(8080);