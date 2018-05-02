/*
* profile js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to Treehouse's API to get profile information to print out

import http from 'http';

import https from 'https';

// Print out message
function printMessage(username, badgeCount, points) {
	const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
	console.log(message);
}

// Print out error messages
function printError(error){
	console.error(error.message);
}

function get(username){
	// Connect to the API URL (http://teamtreehouse.com/username.json)
	const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
		let body = "";
		// Read the data
		response.on('data', chunk => {
			body += chunk;
		});
		response.on('end', () => {
			if(response.statusCode === 200) {
				try {
					// Parse the data
					const profile = JSON.parse(body);
					// Print the data
					printMessage(username, profile.badges.length, profile.points.JavaScript);
				} catch(error) {
					// Parse Error
					printError(error);
				}
			} else {
					// Status Code Error
					printError({message: `There was an error getting the profile for ${username}. (${http.STATUS_CODES[response.statusCode]})`});
				}
		});
	});

	// Connection Error
	request.on("error", printError);
}

export {get};
