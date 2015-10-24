var EventEmitter = require("events").EventEmitter;
var http = require("https");
var util = require("util");

/**
 * An EventEmitter to get a Treehouse students profile.
 * @param username
 * @constructor
 */
function Weather(city) {

    EventEmitter.call(this);

    profileEmitter = this;

    var url = "api.openweathermap.org/data/2.5/weather?q=" + city;
    var request = http.get(url, function (response) {
        var body = ""; //adding to this object

        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            profileEmitter.emit("error", new Error("There was an error getting the weather for " + city + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
        }

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                console.log("body", JSON.parse(body));
                /*
                try {
                    //Parse the data
                    var profile = JSON.parse(body);
                    profileEmitter.emit("end", profile);
                } catch (error) {
                    profileEmitter.emit("error", error);
                }
                */
            }
        }).on("error", function(error){
            profileEmitter.emit("error", error);
        });
    });
}

util.inherits( Profile, EventEmitter );

module.exports = Profile;