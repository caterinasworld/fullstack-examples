const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

app.use((req, res, next) => {
  console.log('========== Logging Service: URL ==========');
  console.log(req.url);
  next();
});

app.use((req, res, next) => {
  console.log('========== Logging Service: Request Headers ==========');
  console.log(req.headers);
  next();
});

app.get('/', (req, res, next) => {
  console.log('GET route - main');
  res.send('This is the main route in the 04-middleware example');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
