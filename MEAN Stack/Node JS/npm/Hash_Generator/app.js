var unsecurePlainTextPassword = "password";

var colors = require('colors');
var bcrypt = require('bcrypt');
bcrypt.genSalt(10, function(err, salt) {
  bcrypt.hash(unsecurePlainTextPassword, salt, function(err, hash) {
  // Store hash in your password DB.
  console.log(hash.green);
  });
});