//4. Function that handles teh reading of files and merge in value
var fs = require('fs');

function view(templateName, values, response) {
	//Read from the template file  // asynchronously **need to run sync**
	fs.readFile('./views/' + templateName + '.html', function (error, data) {
		if (error) throw err;
		//Insert values in to the content

		//Write out the response
		response.write(fileContents);
	});


}

module.exports.view = view;