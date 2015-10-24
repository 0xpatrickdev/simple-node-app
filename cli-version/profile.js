var http = require("https");

//Print out message
function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
	console.log(message);
}

//Print out error
function printError(error) {
	console.error(error.message);
}


function get(username) {
	//Connect ot the API URL (http://teamtreehouse.com/{{username}}.json)
	var url = "https://teamtreehouse.com/" + username + ".json";
	var request = http.get(url, function (response) {
		var body = ""; //adding to this object
		response.on('data', function (chunk) {
			body += chunk; //concatenates
		});
		response.on('end', function () {
			if(response.statusCode === 200) {
				try {
					//Parse the data
					var profile = JSON.parse(body);
					//Print the data
					printMessage(username, profile.badges.length, profile.points.JavaScript)
				} catch(error) {
					//Parse the error
					printError(error);
				}
			} else {
				//Status Code Error
				printError({message: "There was an error getting a profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
			}
		});
	});
	//Connection errorr
	request.on("error", printError);
}

module.exports.get = get; //assigns 'module.exports.get' to get, and exports it (so we can use it in another place)

//if function were: function getProfile(username) {}
//module.exports.get = getProfile;