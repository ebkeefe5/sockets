/**
 ** this is the server for the hexagon game
 ** this is going to be hosted through GCP at http://35.225.166.66/
 ** 
**/

const server = require('http').createServer();

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://127.0.0.1:63673',
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});         

io.on('connection', client => {
    client.emit('init', { data: 'hello world' });
});

server.listen(3000);