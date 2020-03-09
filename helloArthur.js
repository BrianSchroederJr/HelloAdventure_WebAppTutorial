const http = require('http'); // Built in Node module for handling HTTP requests and responses

const msg = 'Hello, my name is Arthur.  Please join me on this learning adventure.';  // Message to display on web page
let port = process.env.PORT;//3000;  // Port number to serve web page on
if(port == null || port == "") {
  port = 8000;
}

// Create HTTP server and send/end response with simple text
const server = http.createServer((req, res) => {
  //
  res.statusCode = 200; // Set response status code (200 = OK)
  res.setHeader('Content-Type', 'text/plain');  // Set response header content type (plain text here)
  res.end(msg); // Add message to response and end it causing the reponse to be sent back to the requester
});

// Start HTTP server by having it listen on the pre-defined port number
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`); // Output message to console that site is running
});
