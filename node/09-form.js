const http = require('http');
const static = require('node-static');
const querystring = require('node:querystring');
const port = process.env.PORT || 5001;

const file = new static.Server('./public');

const server = http.createServer((req, res) => {
  // form route --> /form
  if (req.method === 'GET' && req.url === '/form') {
    file.serveFile('/form.html', 200, {}, req, res);
  }

  // submit route --> /submit
  else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const userdata = querystring.parse(body);
      const { first, last } = userdata;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`<p>First: ${first}</p>`);
      res.write(`<p>Last: ${last}</p>`);
      res.end();
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
