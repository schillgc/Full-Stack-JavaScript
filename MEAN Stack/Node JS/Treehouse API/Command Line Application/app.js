/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

var profile = require("./profile");
var users = process.argv.slice(2);
users.forEach(profile.get);