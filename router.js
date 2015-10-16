var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring")
var commonHeaders = {'Content-Type': 'text/html'};

// Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //	if url == "/" && GET
  if(request.url === "/") {
  	if(request.method.toLowerCase() === "get") {
	  	//show search
	    response.writeHead(200, commonHeaders);
			renderer.view("header", {}, response); //{} bc its going to be empty /?
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
		} else {
			//if url == "/" && POST
			
			//get the post data from the body
			request.on("data", function(postBody) {
				//extract the username
				var query = querystring.parse(postBody.toString()); //console.log(postBody.toString()); // prints 'username=chalkers'
				response.writeHead(303, {"Location": "/" + query.username}); //redirects POST to GET
				response.end();
				//redirect to /:username
		
			});
		
		}
	}

}

// Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {
	// if url === "/...."
	var username = request.url.replace("/", "");
	if(username.length > 0) {
		response.writeHead(200, commonHeaders);
		renderer.view("header", {}, response);
		
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
			renderer.view("profile", values, response); // old: response.write(values.username + " has " + values.badges + " badges.\n"); 
			renderer.view("footer", {}, response);
			response.end();
		});
		
		//on "error"
		studentProfile.on("error", function(error) {
			//show error
			renderer.view("error", {errorMessage: error.message}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
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