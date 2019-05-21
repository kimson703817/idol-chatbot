/** NPM modules **/
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 5000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

server.listen(port, () => {
  console.log(`listening on *:5000`);
});
