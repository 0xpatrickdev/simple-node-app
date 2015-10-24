var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  setTimeout(function(){
    response.end('Goodbye World\n');
  }, 1000);
  
  response.write("Hello World\n");
}).listen(3000);


/* Response:

Hello World
Goodbye World

*/