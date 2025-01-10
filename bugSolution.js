const http = require('http');
const portfinder = require('portfinder');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

portfinder.getPort((err, port) => {
  if (err) {
    console.error('Error finding a free port:', err);
    return;
  }

  const server = http.createServer(requestListener);
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
//Solution: Use a port finder library.  The above uses 'portfinder' to automatically locate an available port, ensuring the server always starts.  Proper error handling is included for robustness.