/*
* dice js
*
* Copyright (c) 2016 Gavin Schilling Marketing
* Licensed under the GNU Affero General Public License
* 
*/

function diceToRoll(sides) {
  this.sides = sides;
}

diceToRoll.prototype.roll = function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
}

var numberofSides = window.prompt("Enter number of sides on dice");
var dice = new diceToRoll(numberofSides);