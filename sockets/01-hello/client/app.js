const socket = io('http://localhost:5001');

socket.on('hello', (data) => {
  console.log(data);
  socket.emit('goodbye', { goodbye: 'folks' });
});
