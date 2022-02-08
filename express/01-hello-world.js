const express = require('express');

const app = express();
const port = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello World, Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
