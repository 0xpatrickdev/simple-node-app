var http = require("http");
var i = 5;

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

  setInterval(function(){
    response.write(i + "\n");
    if(i === 0) {
      response.end("Blast off\n");
    }
    i--;
  }, 1000);
}).listen(3000);


/* Response:

5
4
3
2
1
Blast off

*/