var http = require("http");
var colros = require("colors");

//Print out message
function printWeather(name, main, desc, temp, humidity) {
	var weather = main + ", " + desc;
	console.log( name.bold.underline.bgGreen.blue + ': '.bold.bgGreen.blue + weather.bold.bgGreen.blue );
	console.log( 'Temperature: '.bold.underline.bgYellow.blue + temp.bold.bgYellow.blue + '°F'.bold.bgYellow.blue );
	console.log( 'Humidity: '.bold.underline.bgYellow.blue + humidity.toString().bold.bgYellow.blue + '%'.bold.bgYellow.blue );
}

//Print out error
function printError(error) {
	console.error(error.message);
}


function get(city) {
	//Connect to Open Weather API (using the api key used in their demos, lol)
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=bd82977b86bf27fb59a04b61b657fb6f";
	var request = http.get(url, function (response) {
		var body = ""; //adding to this object
		response.on('data', function (chunk) {
			body += chunk; //concatenates
		});
		response.on('end', function () {
			if(response.statusCode === 200) {
				try {
					//Parse the data
					var weather = JSON.parse(body);
					//get info that we want to print
					var name = weather.name;
					var desc = weather.weather[0].description;
					var main = weather.weather[0].main;
					var temp = weather.main.temp * 9/5 - 459.67;
					var humidity = weather.main.humidity;
					console.log(humidity);

					//Calls function to print the data
					printWeather(name, main, desc, temp.toFixed(2), humidity);

				} catch(error) {
					//Parse the error
					printError(error);
				}
			} else {
				//Status Code Error
				printError({message: "There was an error getting the weather for " + city + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
			}
		});
	});
	//Connection errorr
	request.on("error", printError);
}

module.exports.get = get; //assigns 'module.exports.get' to get, and exports it (so we can use it in another place)

//if function were: function getProfile(username) {}
//module.exports.get = getProfile;