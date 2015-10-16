//4. Function that handles teh reading of files and merge in value
var fs = require('fs');

function mergeValues(values, content) {
	//Cycle over the keys
	for(var key in values) {
		//Replace all {{key}} with value from the values object
			//* below is same as: values.avatarUrl === values["avatarUrl"]
			//* but this function will return it programatically
		content = content.replace("{{" + key + "}}", values[key]);
	}
	//return merged content
	return content;
}

function view(templateName, values, response) {
	//Read from the template file // synchronously
	var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"});
	//Insert values in to the content
	fileContents = mergeValues(values, fileContents);
	//Write out the contents to the response
	response.write(fileContents);

}

module.exports.merge = mergeValues;
module.exports.view = view;