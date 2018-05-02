/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

import profile from "./profile";

const users = process.argv.slice(2);
users.forEach(profile.get);
