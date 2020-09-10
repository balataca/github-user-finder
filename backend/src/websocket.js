const socketio = require('socket.io');

exports.setupWebsocket = server => {
  const io = socketio(server);

  io.on('connection', socket => {
    console.log('bbb')
    console.log(socket.id)
  });
};