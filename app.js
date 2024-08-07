const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('content-type', 'text-html');

  const url = req.url;

  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Aakash Code</title></head>');
    res.write(
      '<body><h1>Form Content</h1><form action="/message" method="POST"><input type="text" name="message"><input type="submit" name="send"></form></body>'
    );
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method == 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });

    fs.writeFileSync('first.txt', 'DUMMY');

    res.setHeader('Location', '/');
    res.statusCode = 302;
    return res.end();
  }

  res.write('<html>');
  res.write('<head><title>Aakash Code</title></head>');
  res.write('<body><h1>Aakash Come Back is here</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
