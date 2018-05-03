/*
* app js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

const unsecurePlainTextPassword = "password";

import colors from 'colors';
import bcrypt from 'bcrypt';
bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(unsecurePlainTextPassword, salt, (err, hash) => {
  // Store hash in your password DB.
  console.log(hash.green);
  });
});
