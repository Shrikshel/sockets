var socket = io();

socket.on('connect', function () {
  console.log('Connection established to Server!');
});
