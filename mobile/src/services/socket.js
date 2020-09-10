import socketio from 'socket.io-client';

const socket = socketio('192.168.1.127:3333', {
  autoConnect: false,
});

socket.on('connection', function () {
  console.log('asdasd')
})

function connect() {
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export default {
  connect,
  disconnect,
};
