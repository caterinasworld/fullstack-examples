// example adapted from the Nodejs.org docs
const static = require('node-static');
const http = require('http');
const port = process.env.PORT || 5001;

// static files are in the public/ directory
const file = new static.Server('./public');

const server = http.createServer((req, res) => {
  // main route
  if (req.url === '/') {
    // serve index.html without specifying the file name
    file.serve(req, res);
  }

  // form route
  else if (req.url === '/form') {
    // serve form.html file
    file.serveFile('/form.html', 200, {}, req, res);
  }

  // any other route --> handle 404
  else {
    // server the error.html file for any other route
    file.serveFile('/error.html', 200, {}, req, res);
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
