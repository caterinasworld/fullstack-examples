const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/form', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.write('<form action="/submit" method="post">');
  res.write('<label for="name">Name: </label>');
  res.write('<input type="text" name="name" id="name"><br />');
  res.write('<label for="email">Email: </label>');
  res.write('<input type="email" name="email" id="email"><br />');
  res.write('<input type="submit">');
  res.write('</form></body></html>');
  res.end();
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  console.log(`Name: ${req.body.name}`);
  console.log(`Email: ${req.body.email}`);
  res.end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
