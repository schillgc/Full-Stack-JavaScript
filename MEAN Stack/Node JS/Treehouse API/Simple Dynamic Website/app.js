/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

'use strict';

var router = require("./js/router.js");

// Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser.
// Solution: Use Node.js to perform the profile lookups and server our template via HTTP

// Create a web server
const http = require('http');
const hostname = '127.0.0.1'; // 127.0.0.1 for localhost 
const port = 3000;

http.createServer(function (request, response) {
    router.home(request, response);
    router.user(request, response);
  }).listen(port, hostname);
    console.log(`Server running at http://${hostname}:${port}/`);