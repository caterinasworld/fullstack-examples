const socket = io.connect('http://localhost:5001');

socket.on('message', (data) => {
  let div = document.createElement('div');
  div.textContent = `Timestamp: ${data.timestamp} - Secret Code: ${data.message}`;
  document.querySelector('#app').append(div);
});
