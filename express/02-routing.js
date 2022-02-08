const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });
  res.send('Hello World, Express!');
});

app.get('/about', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('This is the about page');
});

app.get('/contact', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('This is the contact page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
