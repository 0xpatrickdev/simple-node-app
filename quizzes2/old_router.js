var Profile = require("./profile.js");
var renderer = require("./renderer.js");

// Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //	if url == "/" && GET
  if(request.url === "/") {
  	//show search
    response.writeHead(200, {'Content-Type': 'text/plain'});
		renderer.view("header", {}, response);
		response.write("Search\n");
		response.end('Footer\n');
	}
	//if url == "/" && POST
		//redirect to /:username
}

// Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {
	// if url === "/...."
	var username = request.url.replace("/", "");
	if(username.length > 0) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write("Header\n");
		
		//get json from Treehouse
		var studentProfile = new Profile(username);
		//on "end"
		studentProfile.on("end", function(profileJSON) {
			//show profile

			//Store the values which we need
			var values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badges: profileJSON.badges.length,
				javaScriptPoints: profileJSON.points.JavaScript
			}
			//Simple Response
			response.write(values.username + " has " + values.badges + " badges.\n");
			response.end('Footer\n');
		});
		
		//on "error"
		studentProfile.on("error", function(error) {
			response.write(error.message + "\n");
			response.end('Footer\n');
		});

	}
}

module.exports.home = home;
module.exports.user = user;

/* Old (has *Route redundancy):

// Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
  //	if url == "/" && GET
  if(request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/plain'});
		response.writeHead("Header\n");
		response.writeHead("Search\n");
		response.end('Footer\n');
	}
	//if url == "/" && POST
		//redirect to /:username
}

// Handle HTTP route GET /:username i.e. /chalkers
function userRoute(request, response) {
	// if url === "/...."
	var username = request.url.replace("/", "");
	if(username.length > 0) {
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.writeHead("Header\n");
		response.writeHead("Search\n");
		response.end('Footer\n');
	}
}

module.exports.home = homeRoute;
module.exports.user = userRoute;

*/