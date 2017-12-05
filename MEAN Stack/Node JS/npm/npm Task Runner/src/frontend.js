/*
* frontend js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

function displayNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var dice = new Dice(6);
var button = document.getElementById("button");

button.onclick = function() {
  var result = dice.roll();
  displayNumber(result);
};
