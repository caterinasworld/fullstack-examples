const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const port = 5001;

app.use(express.static(__dirname + '/client/'));

setInterval(() => {
  io.emit('message', {
    timestamp: new Date().getTime(),
    message: Math.floor(1000 + Math.random() * 9000),
  });
}, 3000);

server.listen(port, () => {
  console.log(`Application running at "http://localhost:${port}/"`);
});
