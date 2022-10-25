const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5001;

// public folder contains static file(s) that will be served
app.use(express.static('public'));

// specify the URL route and the file structure route
app.use('/files', express.static('public/files'));

// send a specific file to be served to the client
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/about.html'));
});

// send a specific file to be served to the client
app.get('/files-about', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/files/about.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
