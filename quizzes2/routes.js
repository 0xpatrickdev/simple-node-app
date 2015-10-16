function root(request, response) {
    if(request.url == "/") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Home\n");
    }
}

function contact(request, response) {
    if(request.url == "/contact") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("Contact\n");
    }
}

function about(request, response) {
    if(request.url == "/about") {
        response.writeHead(200, {'Content-type': "text/plain"});
        response.end("About\n");
    }
}

module.exports.root = root;
module.exports.contact = contact;
module.exports.about = about;