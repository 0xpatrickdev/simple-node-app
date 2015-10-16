var profile = require("./profile.js"); // .js not required, but path is
//alt: var profile = require("./profile");

//new, shortest version
var users = ["chalkers", "joykesten2"];
users.forEach(profile.get);

//new, but could be shorter
var users = ["chalkers", "joykesten2"];
users.forEarch(function(username) {
	profile.get(username);
});


/* old version */
//old:
profile.get("chalkers");
profile.get("joykesten2");




//////////////
node app.js chalkers davemcfarland //in command line

var profile = require("./profile");
var users = process.argv.slice(2); //chalkers and dustin24 were the 3rd and 4th arguments (starts on 0 so slice @ 2)
//process.argv: An array containing the command line arguments. 
users.forEach(profile.get);