import fs from 'fs';

function mergeValues(values, content) {
	// Cycle over the keys
	for(const key in values) {
		// Replace all {{keys}} with the value from the values object
		content = content.replace(`{{${key}}}`, values[key]);
	}
	// Return merged content
	return content;
}

function view(templateName, values, response) {
	// Read from the template file
	let fileContents = fs.readFileSync(`./views/${templateName}.html`, {encoding: "utf-8"});
	// Insert values into the content
	fileContents = mergeValues(values, fileContents);
	// Write out the contents to the response
	response.write(fileContents);
}

export {view};
