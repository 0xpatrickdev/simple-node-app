//Without renaming any of the variables, modify the data 
//callback to concatenate the stream of data to the 
//responseBody.

var http = require("http");
var username = "chalker123";

//Print out message
function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in Javascript.";
	console.log(message);
}

//Print out error
function printError(error) {
	console.error(error.message);
}


//Connect ot the API URL (http://teamtreehouse.com/{{username}}.json)
var request = http.get("http://teamtreehouse.com/chalkers.json", function(response){
	var body = ""; //adding to this object
	//Read the data
	response.on('data', function(chunk) {
		body += chunk; //concatenates
	});
	response.on('end', function(){
		if(response.statusCode === 200) {
			try {
				var profile = JSON.parse(body);
				printMessage(username, profile.badges.length, profile.points.JavaScript)
			} catch(error) {
				//Parse error
				printError(error);
			}
		} else {
			//Status Code Error
			printError({message: "There was an eror getting a profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
		}
	});
	//Parse the data
	//Print the data
});

//Connection errorr
request.on("error", printError);