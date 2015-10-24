/*  Old --- 
// What code looks like if we have a known array of users (i.e. chalkers and joykesten2)
	
	var profile = require("./profile");
	
	// define users, and loop them through the profile.get function
	var users = ["chalkers", "joykesten2"];
	users.forEarch(function(username) {
		profile.get(username);
	});
	
	// same as above, but much simpler.
	var users = ["chalkers", "joykesten2"];
	users.forEach(profile.get);

*/
var weather = require("./weather");
	//"./profile.js" will also work, the .js extension is not required
	// "./"" is required, because we need to name the directory

var city = process.argv.slice(2); //chalkers and dustin24 were the 3rd and 4th arguments (starts on 0 so slice @ 2)
	//process.argv: this is an array containing the command line arguments. 
weather.get(city);