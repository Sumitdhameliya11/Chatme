const express =  require("express");
const app  = express();
const http = require("http").createServer(app);
const chatme = require("./routes/chat");
const io = require('socket.io')(http);

app.use(express.json());
app.use(express.static(__dirname + '/public'));

io.on('connection',(socket)=>{
    console.log('Connected.....');
    socket.on('message',(msg)=>{
        //send all broswer which is  send that cannot recevice the message
        socket.broadcast.emit('message',msg);
    });
});

app.use("/home",chatme);
http.listen(4000,()=>{
    console.log(`Server runing mode ${4000}`);
})