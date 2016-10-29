var socket = io();

socket.on('connect', function () {
  console.log('Connection established to Server!');
});

socket.on('message', function(message){
  console.log('Message: ' + message.text);
})
